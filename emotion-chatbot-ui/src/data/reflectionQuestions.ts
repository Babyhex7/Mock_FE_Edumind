import { ReflectionQuestion } from "../types";

// ============================================
// REFLECTION QUESTIONS - HAPPY.AROUSED
// ============================================

export const reflectionQuestionsHappyAroused: ReflectionQuestion[] = [
  {
    id: "ref_happy_aroused_1",
    emotionKey: "Happy.Aroused",
    questionIndex: 1,
    questionText:
      "Apakah saat ini kamu merasa cukup puas dengan keadaan hidupmu, meskipun tidak semuanya sempurna?",
    options: ["Yes", "No"],
  },
  {
    id: "ref_happy_aroused_2",
    emotionKey: "Happy.Aroused",
    questionIndex: 2,
    questionText:
      "Ketika memikirkan masa depan, apakah kamu merasa excited dan optimis?",
    options: ["Yes", "No"],
  },
];

// ============================================
// REFLECTION QUESTIONS - SAD.LONELY.ISOLATED
// ============================================

export const reflectionQuestionsSadLonelyIsolated: ReflectionQuestion[] = [
  {
    id: "ref_sad_lonely_1",
    emotionKey: "Sad.Lonely.Isolated",
    questionIndex: 1,
    questionText:
      "Apakah akhir-akhir ini kamu merasa sulit untuk terhubung dengan orang lain secara emosional?",
    options: ["Yes", "No"],
  },
  {
    id: "ref_sad_lonely_2",
    emotionKey: "Sad.Lonely.Isolated",
    questionIndex: 2,
    questionText:
      "Ketika sendirian, apakah perasaan kesepian menjadi sangat kuat?",
    options: ["Yes", "No"],
  },
];

// ============================================
// HELPER FUNCTION
// ============================================

export function getReflectionQuestions(
  emotionPath: string,
): ReflectionQuestion[] {
  switch (emotionPath) {
    case "Happy.Aroused":
      return reflectionQuestionsHappyAroused;
    case "Sad.Lonely.Isolated":
      return reflectionQuestionsSadLonelyIsolated;
    default:
      return reflectionQuestionsHappyAroused; // Default fallback
  }
}
