// ============================================
// EMOTION TYPES
// ============================================

export interface EmotionWheel {
  primary: string; // "Happy", "Sad", "Angry", "Fearful", "Surprised", "Bad"
  secondary: string; // "Playful", "Content", "Interested", "Proud", etc.
  tertiary?: string; // "Aroused", "Cheeky", "Free", "Joyful", etc.
}

export type EmotionPath = string; // Format: "Happy.Aroused" atau "Sad.Lonely.Isolated"

// ============================================
// QUESTION TYPES
// ============================================

export interface ReflectionQuestion {
  id: string;
  emotionKey: EmotionPath;
  questionIndex: number; // 1, 2
  questionText: string;
  options: ["Yes", "No"];
}

export interface MCQuestion {
  id: string;
  emotionKey: EmotionPath;
  questionIndex: number; // 1, 2, 3
  questionText: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  expectedAnswer?: "A" | "B" | "C" | "D";
}

export type Answer = "Yes" | "No" | "A" | "B" | "C" | "D";

// ============================================
// USER ANSWERS
// ============================================

export interface UserAnswer {
  questionId: string;
  answer: Answer;
  timestamp: Date;
}

export interface ReflectionAnswers {
  [questionId: string]: "Yes" | "No";
}

export interface MCAnswers {
  [questionId: string]: "A" | "B" | "C" | "D";
}

// ============================================
// INSIGHT TYPES
// ============================================

export interface EmotionInsight {
  emotion: EmotionWheel;
  insight: string; // Narasi panjang dari chatbot
  emotionLabel: string; // "Happy > Aroused"
  tone: "empathetic" | "calm" | "encouraging";
}

// ============================================
// CHATBOT STATE
// ============================================

export type FlowState =
  | "greeting"
  | "story_input"
  | "reflection_questions"
  | "mc_questions"
  | "insight"
  | "completed";

export interface ChatSession {
  id: string;
  userStory: string;
  detectedEmotion: EmotionWheel | null;
  emotionPath: EmotionPath | null;
  reflectionAnswers: ReflectionAnswers;
  mcAnswers: MCAnswers;
  insight: EmotionInsight | null;
  currentFlowState: FlowState;
  createdAt: Date;
}

// ============================================
// CHAT UI TYPES
// ============================================

export type MessageType = "bot" | "user" | "reflection" | "mc" | "insight";

export interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
  options?: string[];
  mcOptions?: { A: string; B: string; C: string; D: string };
  answered?: boolean; // Track if question has been answered
  timestamp: Date;
}

export interface ConversationSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  flowState: "idle" | "story" | "reflection" | "mc" | "insight" | "done";
  currentReflectionIndex: number;
  currentMCIndex: number;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// PROGRESS TYPES
// ============================================

export interface QuestionProgress {
  current: number;
  total: number;
}
