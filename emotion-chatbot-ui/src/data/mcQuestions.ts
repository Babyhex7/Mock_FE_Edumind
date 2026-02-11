import { MCQuestion } from "../types";

// ============================================
// MC QUESTIONS - HAPPY.AROUSED
// ============================================

export const mcQuestionsHappyAroused: MCQuestion[] = [
  {
    id: "mc_happy_aroused_1",
    emotionKey: "Happy.Aroused",
    questionIndex: 1,
    questionText: "Akhir-akhir ini, bagaimana perasaanmu tentang pencapaianmu?",
    options: {
      A: "Tertekan dan berat",
      B: "Netral, seperti rutinitas biasa",
      C: "Merasa cukup nyaman dan menikmatinya",
      D: "Cemas dan tidak tenang",
    },
    expectedAnswer: "C",
  },
  {
    id: "mc_happy_aroused_2",
    emotionKey: "Happy.Aroused",
    questionIndex: 2,
    questionText: "Ketika menghadapi tantangan baru, apa yang kamu rasakan?",
    options: {
      A: "Takut dan ingin menghindar",
      B: "Biasa saja, tidak special",
      C: "Excited dan penuh semangat",
      D: "Stress dan overwhelmed",
    },
    expectedAnswer: "C",
  },
  {
    id: "mc_happy_aroused_3",
    emotionKey: "Happy.Aroused",
    questionIndex: 3,
    questionText: "Bagaimana energi emosionalmu saat ini?",
    options: {
      A: "Sangat rendah dan lesu",
      B: "Stabil tapi tidak ada gairah",
      C: "Tinggi dan ingin beraktivitas",
      D: "Tidak menentu dan chaos",
    },
    expectedAnswer: "C",
  },
];

// ============================================
// MC QUESTIONS - SAD.LONELY.ISOLATED
// ============================================

export const mcQuestionsSadLonelyIsolated: MCQuestion[] = [
  {
    id: "mc_sad_lonely_1",
    emotionKey: "Sad.Lonely.Isolated",
    questionIndex: 1,
    questionText:
      "Akhir-akhir ini, apakah kamu merasa terpisah dari orang-orang di sekitarmu?",
    options: {
      A: "Tidak, aku merasa dekat dengan mereka",
      B: "Kadang-kadang saja",
      C: "Ya, seperti ada jarak",
      D: "Aku tidak yakin",
    },
    expectedAnswer: "C",
  },
  {
    id: "mc_sad_lonely_2",
    emotionKey: "Sad.Lonely.Isolated",
    questionIndex: 2,
    questionText:
      "Apakah kamu merasa sendirian meskipun ada orang di sekitarmu?",
    options: {
      A: "Tidak pernah",
      B: "Jarang",
      C: "Sering",
      D: "Tidak tahu",
    },
    expectedAnswer: "C",
  },
  {
    id: "mc_sad_lonely_3",
    emotionKey: "Sad.Lonely.Isolated",
    questionIndex: 3,
    questionText: "Bagaimana perasaanmu tentang koneksi sosialmu saat ini?",
    options: {
      A: "Sangat terhubung dan dekat",
      B: "Cukup okay",
      C: "Merasa terisolasi dan jauh",
      D: "Bingung",
    },
    expectedAnswer: "C",
  },
];

// ============================================
// HELPER FUNCTION
// ============================================

export function getMCQuestions(emotionPath: string): MCQuestion[] {
  switch (emotionPath) {
    case "Happy.Aroused":
      return mcQuestionsHappyAroused;
    case "Sad.Lonely.Isolated":
      return mcQuestionsSadLonelyIsolated;
    default:
      return mcQuestionsHappyAroused; // Default fallback
  }
}
