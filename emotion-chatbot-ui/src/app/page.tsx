"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { ConversationSession, ChatMessage } from "@/types";

// Dummy Data
const reflectionQuestions = [
  "Apakah saat ini kamu merasa cukup puas dengan keadaan hidupmu, meskipun tidak semuanya sempurna?",
  "Ketika memikirkan masa depan, apakah kamu merasa optimis?",
];

const mcQuestions = [
  {
    question: "Akhir-akhir ini, bagaimana perasaanmu tentang pencapaianmu?",
    options: {
      A: "Tertekan dan berat",
      B: "Netral, seperti rutinitas biasa",
      C: "Merasa cukup nyaman dan menikmatinya",
      D: "Cemas dan tidak tenang",
    },
  },
  {
    question: "Ketika menghadapi tantangan baru, apa yang kamu rasakan?",
    options: {
      A: "Takut dan ingin menghindar",
      B: "Biasa saja",
      C: "Excited dan penuh semangat",
      D: "Stress dan overwhelmed",
    },
  },
  {
    question: "Bagaimana energi emosionalmu saat ini?",
    options: {
      A: "Sangat rendah dan lesu",
      B: "Stabil tapi tidak ada gairah",
      C: "Tinggi dan produktif",
      D: "Tidak menentu",
    },
  },
];

const insightText = `Berdasarkan cerita dan jawabanmu, saya melihat bahwa kamu sedang mengalami kondisi emosional yang cukup positif.

Kamu tampaknya memiliki kesadaran yang baik terhadap perasaanmu sendiri. Ini adalah tanda literasi emosi yang sehat.

Beberapa hal yang bisa kamu lakukan untuk menjaga kondisi ini:

- Terus praktikkan self-awareness dengan journaling atau refleksi rutin
- Jaga keseimbangan antara aktivitas dan istirahat
- Berbagi perasaan dengan orang yang kamu percaya

Ingat, memahami emosi adalah proses berkelanjutan. Terus eksplorasi dan kenali dirimu sendiri.`;

export default function ChatPage() {
  // Session Management
  const [sessions, setSessions] = useState<ConversationSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Get current session
  const currentSession = sessions.find((s) => s.id === currentSessionId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentSession?.messages]);

  // Generate title from first message
  const generateTitle = (firstMessage: string): string => {
    const maxLength = 40;
    if (firstMessage.length <= maxLength) {
      return firstMessage;
    }
    return firstMessage.substring(0, maxLength) + "...";
  };

  // Create new session
  const createNewSession = (): ConversationSession => {
    const newSession: ConversationSession = {
      id: Date.now().toString(),
      title: "Chat Baru",
      messages: [],
      flowState: "idle",
      currentReflectionIndex: 0,
      currentMCIndex: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return newSession;
  };

  // Handle new chat
  const handleNewChat = () => {
    const newSession = createNewSession();
    setSessions((prev) => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
    setSidebarOpen(false);
  };

  // Handle select session
  const handleSelectSession = (sessionId: string) => {
    setCurrentSessionId(sessionId);
    setSidebarOpen(false);
  };

  // Update current session
  const updateCurrentSession = (updates: Partial<ConversationSession>) => {
    if (!currentSessionId) return;

    setSessions((prev) =>
      prev.map((session) =>
        session.id === currentSessionId
          ? { ...session, ...updates, updatedAt: new Date() }
          : session,
      ),
    );
  };

  // Add message to current session
  const addMessage = (message: Omit<ChatMessage, "id" | "timestamp">) => {
    const newMessage: ChatMessage = {
      ...message,
      id: Date.now().toString() + Math.random(),
      timestamp: new Date(),
    };

    updateCurrentSession({
      messages: [...(currentSession?.messages || []), newMessage],
    });

    // Auto-generate title from first user message
    if (message.type === "user" && currentSession?.messages.length === 0) {
      updateCurrentSession({
        title: generateTitle(message.content),
      });
    }
  };

  // Simulate thinking
  const simulateThinking = (callback: () => void, delay = 1500) => {
    updateCurrentSession({ flowState: "reflection" });
    setTimeout(() => {
      callback();
    }, delay);
  };

  // Handle start chat
  const handleStartChat = () => {
    if (!currentSession) {
      handleNewChat();
      return;
    }

    const inputValue = inputRef.current?.value.trim() || "";
    if (!inputValue) return;

    // Add user message
    addMessage({
      type: "user",
      content: inputValue,
    });

    // Clear input
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    // Bot response
    simulateThinking(() => {
      addMessage({
        type: "bot",
        content:
          "Terima kasih sudah berbagi ceritamu. Saya akan mengajukan beberapa pertanyaan untuk memahami kondisi emosionalmu lebih dalam.",
      });

      setTimeout(() => {
        simulateThinking(() => {
          addMessage({
            type: "reflection",
            content: reflectionQuestions[0],
            options: ["Ya", "Tidak"],
            answered: false,
          });
          updateCurrentSession({
            flowState: "reflection",
            currentReflectionIndex: 0,
          });
        });
      }, 500);
    });
  };

  // Handle reflection answer
  const handleReflectionAnswer = (messageId: string, answer: string) => {
    if (!currentSession) return;
    if (isProcessing) return; // Prevent double click

    // Check if message already answered
    const message = currentSession.messages.find((m) => m.id === messageId);
    if (!message || message.answered) return;

    // Check if current flow state is reflection
    if (currentSession.flowState !== "reflection") return;

    setIsProcessing(true);

    // Mark message as answered
    updateCurrentSession({
      messages: currentSession.messages.map((msg) =>
        msg.id === messageId ? { ...msg, answered: true } : msg,
      ),
    });

    // Add user answer
    addMessage({
      type: "user",
      content: answer,
    });

    const nextIndex = currentSession.currentReflectionIndex + 1;

    if (nextIndex < reflectionQuestions.length) {
      simulateThinking(() => {
        addMessage({
          type: "reflection",
          content: reflectionQuestions[nextIndex],
          options: ["Ya", "Tidak"],
          answered: false,
        });
        updateCurrentSession({
          currentReflectionIndex: nextIndex,
        });
        setIsProcessing(false);
      });
    } else {
      simulateThinking(() => {
        addMessage({
          type: "bot",
          content:
            "Baik, sekarang mari kita lanjut dengan beberapa pertanyaan pilihan.",
        });

        setTimeout(() => {
          simulateThinking(() => {
            addMessage({
              type: "mc",
              content: mcQuestions[0].question,
              mcOptions: mcQuestions[0].options,
              answered: false,
            });
            updateCurrentSession({
              flowState: "mc",
              currentMCIndex: 0,
            });
            setIsProcessing(false);
          });
        }, 500);
      });
    }
  };

  // Handle MC answer
  const handleMCAnswer = (messageId: string, answer: string) => {
    if (!currentSession) return;
    if (isProcessing) return; // Prevent double click

    // Check if message already answered
    const message = currentSession.messages.find((m) => m.id === messageId);
    if (!message || message.answered) return;

    // Check if current flow state is mc
    if (currentSession.flowState !== "mc") return;

    setIsProcessing(true);

    // Mark message as answered
    updateCurrentSession({
      messages: currentSession.messages.map((msg) =>
        msg.id === messageId ? { ...msg, answered: true } : msg,
      ),
    });

    // Add user answer
    addMessage({
      type: "user",
      content: answer,
    });

    const nextIndex = currentSession.currentMCIndex + 1;

    if (nextIndex < mcQuestions.length) {
      simulateThinking(() => {
        addMessage({
          type: "mc",
          content: mcQuestions[nextIndex].question,
          mcOptions: mcQuestions[nextIndex].options,
          answered: false,
        });
        updateCurrentSession({
          currentMCIndex: nextIndex,
        });
        setIsProcessing(false);
      }, 1000);
    } else {
      simulateThinking(() => {
        addMessage({
          type: "bot",
          content:
            "Analisis selesai. Berikut adalah insight berdasarkan jawabanmu:",
        });

        setTimeout(() => {
          simulateThinking(() => {
            addMessage({
              type: "insight",
              content: insightText,
            });
            updateCurrentSession({
              flowState: "done",
            });
            setIsProcessing(false);
          }, 2000);
        }, 500);
      }, 2000);
    }
  };

  // Handle key down
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleStartChat();
    }
  };

  // Initialize with one session on mount
  useEffect(() => {
    const initialSession = createNewSession();
    setSessions([initialSession]);
    setCurrentSessionId(initialSession.id);
  }, []);

  // Show welcome screen if no messages
  const showWelcome = !currentSession?.messages.length;

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        sessions={sessions}
        currentSessionId={currentSessionId}
        onSelectSession={handleSelectSession}
        onNewChat={handleNewChat}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {showWelcome ? (
          // Welcome Screen
          <>
            <header className="px-6 py-4 border-b border-slate-200 bg-white">
              <div className="max-w-3xl mx-auto flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-700">EduMind</span>
                </div>
              </div>
            </header>

            <div className="flex-1 flex items-center justify-center px-4">
              <div className="w-full max-w-2xl text-center">
                <div className="mb-8">
                  <h1 className="text-2xl font-semibold text-slate-800 mb-2">
                    Halo, ada yang ingin kamu ceritakan?
                  </h1>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">
                    Saya akan membantu kamu memahami dan mengeksplorasi emosimu
                    dengan lebih baik.
                  </p>
                </div>

                <div className="relative">
                  <textarea
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    placeholder="Ceritakan apa yang sedang kamu rasakan atau pikirkan..."
                    className="w-full resize-none border border-slate-200 rounded-2xl px-5 py-4 pr-14 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent placeholder:text-slate-400 shadow-sm"
                    rows={3}
                  />
                  <button
                    onClick={handleStartChat}
                    className="absolute right-3 bottom-3 p-2.5 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {[
                    "Aku merasa cemas akhir-akhir ini",
                    "Aku sedang bahagia",
                    "Aku butuh motivasi",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        if (inputRef.current) {
                          inputRef.current.value = suggestion;
                        }
                      }}
                      className="px-4 py-2 text-xs text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <footer className="px-6 py-4 text-center border-t border-slate-200 bg-white">
              <p className="text-xs text-slate-400">
                Emotional Literacy Assistant
              </p>
            </footer>
          </>
        ) : (
          // Chat View
          <>
            <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 px-6 py-3 sticky top-0 z-10">
              <div className="max-w-3xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-700 text-sm">
                    EduMind Assistant
                  </span>
                </div>
                <button
                  onClick={handleNewChat}
                  className="text-xs text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Chat Baru
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
                {currentSession?.messages.map((message) => (
                  <div key={message.id} className="animate-message">
                    {message.type === "user" ? (
                      <div className="flex justify-end">
                        <div className="bg-slate-800 text-white px-4 py-3 rounded-2xl rounded-br-sm max-w-md shadow-sm">
                          <p className="text-sm leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    ) : message.type === "bot" ? (
                      <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-lg bg-slate-800 flex-shrink-0 flex items-center justify-center mt-0.5">
                          <span className="text-sm">🤖</span>
                        </div>
                        <div className="flex-1 max-w-xl">
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    ) : message.type === "reflection" ? (
                      <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-lg bg-slate-800 shrink-0 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 max-w-xl">
                          <p className="text-sm text-slate-700 leading-relaxed mb-4">
                            {message.content}
                          </p>
                          <div className="flex gap-2">
                            {message.options?.map((option) => (
                              <button
                                key={option}
                                onClick={() =>
                                  handleReflectionAnswer(message.id, option)
                                }
                                disabled={
                                  message.answered ||
                                  isProcessing ||
                                  currentSession?.flowState !== "reflection"
                                }
                                className="px-5 py-2 text-sm font-medium rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : message.type === "mc" ? (
                      <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-lg bg-slate-800 shrink-0 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 max-w-xl">
                          <p className="text-sm text-slate-700 leading-relaxed mb-4">
                            {message.content}
                          </p>
                          <div className="space-y-2">
                            {message.mcOptions &&
                              Object.entries(message.mcOptions).map(
                                ([key, value]) => (
                                  <button
                                    key={key}
                                    onClick={() =>
                                      handleMCAnswer(
                                        message.id,
                                        `${key}. ${value}`,
                                      )
                                    }
                                    disabled={
                                      message.answered ||
                                      isProcessing ||
                                      currentSession?.flowState !== "mc"
                                    }
                                    className="w-full text-left px-4 py-3 text-sm rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                                  >
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 text-slate-600 font-medium mr-3 text-xs">
                                      {key}
                                    </span>
                                    {value}
                                  </button>
                                ),
                              )}
                          </div>
                        </div>
                      </div>
                    ) : message.type === "insight" ? (
                      <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex-shrink-0 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div className="flex-1 max-w-xl">
                          <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-5 py-5 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                                Insight Emosional
                              </span>
                            </div>
                            <div className="text-sm text-slate-100 leading-relaxed whitespace-pre-line">
                              {message.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-t border-slate-200 px-4 py-3">
              <div className="max-w-3xl mx-auto text-center">
                {currentSession?.flowState === "done" ? (
                  <p className="text-sm text-slate-500">
                    Sesi telah selesai. Terima kasih telah berbagi.
                  </p>
                ) : currentSession?.flowState === "reflection" ||
                  currentSession?.flowState === "mc" ? (
                  <p className="text-xs text-slate-400">
                    Pilih salah satu jawaban di atas untuk melanjutkan
                  </p>
                ) : (
                  <p className="text-xs text-slate-400">
                    Memproses percakapan...
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
