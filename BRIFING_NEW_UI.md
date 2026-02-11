# MHCM Chatbot — UI Design Brief Document

> Mental Health Conversational Mirror — Emotion Literacy with MC & Reflection Questions
> **Versi: 5.1 (UPDATED: Reflection Questions PERTAMA, MC Questions KEDUA)** | Tanggal: 11 Februari 2026

---

## 1. Ringkasan Produk

Chatbot refleksi literasi emosi berbasis storytelling dengan 2 tipe pertanyaan:

1. **Reflection Questions** (Yes/No only)
2. **MC Questions** (Multiple Choice dengan opsi A, B, C, D)

User bercerita → Chatbot merespons → **Reflection Questions** → **MC Questions** → **Chatbot memberikan insight literasi emosi**

**Prinsip Utama:**

- User bercerita tentang perasaannya
- Sistem mendeteksi emosi (e.g., happy.aroused, sad.lonely.isolated)
- Validasi awal dengan Reflection Questions (Yes/No)
- Validasi lanjutan dengan MC Questions (ABCD)
- Chatbot memberikan insight mendalam tentang literasi emosi user
- Bahasa humanis, empatik, non-klinis

---

## 2. Tech Stack untuk Frontend Dummy

```
┌──────────────┬──────────────────────────────────────────────────┐
│ Layer        │ Teknologi                                        │
├──────────────┼──────────────────────────────────────────────────┤
│ Frontend     │ Next.js + TypeScript + Tailwind CSS              │
│ State        │ React Context / Zustand                          │
│ UI Component │ Shadcn/ui atau custom components                 │
│ Animation    │ Framer Motion (optional)                         │
└──────────────┴──────────────────────────────────────────────────┘
```

**Catatan:**

- Ini adalah **dummy frontend** untuk presentasi UI/UX
- Dummy data untuk questions dan responses
- Fokus pada 3 UI components yang berbeda

---

## 3. Tipe Pertanyaan

### 3.1 Reflection Questions (Yes/No)

**Format:** Yes / No only
**Muncul:** Setelah user bercerita, sebagai validasi pertama
**Jumlah:** 2-3 soal per emotion path
**Tujuan:** Refleksi mendalam tentang perasaan user

**Contoh:**

```
Question Type: Reflection Questions

Q1: "Apakah saat ini kamu merasa cukup puas dengan keadaan
     hidupmu, meskipun tidak semuanya sempurna?"

   → [Yes] atau [No]

Q2: "Saat memikirkan aktivitas harimu, apa reaksi emosional
     yang paling muncul?"

   → [Yes] atau [No]
```

### 3.2 MC Questions (Multiple Choice)

**Format:** A, B, C, D
**Muncul:** Setelah Reflection Questions, sebagai validasi lanjutan
**Jumlah:** 3-5 soal per emotion path
**Tujuan:** Validasi emosi yang terdeteksi dengan pilihan lebih spesifik

**Contoh:**

```
Question Type: MC Questions
Emotion Detected: Happy.Proud.Confident

Q1: "Akhir-akhir ini, bagaimana perasaanmu tentang pencapaianmu?"
   A. Tertekan dan berat
   B. Netral, seperti rutinitas biasa
   C. Merasa cukup nyaman dan menikmatinya
   D. Cemas dan tidak tenang

→ User pilih: C
```

---

## 4. Flow Chatbot (User Journey)

```
USER MASUK KE CHATBOT
│
▼
╔═══════════════════════════════════════════════════════════════════╗
║ STEP 1: CHATBOT GREETING & SAFE FRAMING                          ║
║                                                                   ║
║ Bot: "Hai! Aku di sini untuk menemanimu mengenali perasaanmu.    ║
║       Ceritakan apa yang sedang kamu rasakan hari ini?"          ║
║                                                                   ║
║ User: [Ketik cerita bebas]                                        ║
╚═══════════════════════════════════════════════════════════════════╝
│
▼
╔═══════════════════════════════════════════════════════════════════╗
║ STEP 2: USER SUBMIT STORY                                        ║
║                                                                   ║
║ User submit → AI deteksi emosi → e.g., "Happy.Aroused"           ║
║                                                                   ║
║ Bot: "Terima kasih sudah berbagi! Aku ingin lebih memahami       ║
║       perasaanmu. Mari jawab beberapa pertanyaan ya."            ║
╚═══════════════════════════════════════════════════════════════════╝
│
▼
╔═══════════════════════════════════════════════════════════════════╗
║ STEP 3: REFLECTION QUESTIONS (Yes/No)                            ║
║                                                                   ║
║ [UI untuk Reflection Questions muncul]                            ║
║                                                                   ║
║ Q1: [Pertanyaan dengan 2 opsi: Yes atau No]                      ║
║ Q2: [Pertanyaan dengan 2 opsi: Yes atau No]                      ║
║                                                                   ║
║ User menjawab semua → Submit                                      ║
╚═══════════════════════════════════════════════════════════════════╝
│
▼
╔═══════════════════════════════════════════════════════════════════╗
║ STEP 4: MC QUESTIONS (Multiple Choice - ABCD)                    ║
║                                                                   ║
║ [UI untuk MC Questions muncul]                                    ║
║                                                                   ║
║ Q1: [Pertanyaan dengan 4 opsi: A, B, C, D]                       ║
║ Q2: [Pertanyaan dengan 4 opsi: A, B, C, D]                       ║
║ Q3: [Pertanyaan dengan 4 opsi: A, B, C, D]                       ║
║                                                                   ║
║ User menjawab semua → Submit                                      ║
╚═══════════════════════════════════════════════════════════════════╝
│
▼
╔═══════════════════════════════════════════════════════════════════╗
║ STEP 5: CHATBOT INSIGHT (Literasi Emosi)                         ║
║                                                                   ║
║ [UI untuk Insight muncul]                                         ║
║                                                                   ║
║ Bot: [Memberikan insight mendalam tentang literasi emosi]         ║
║                                                                   ║
║ Contoh response:                                                  ║
║ "Dari cerita dan jawabanmu, aku melihat bahwa kamu sedang        ║
║  mengalami perasaan happy.aroused. Ini adalah kondisi di mana    ║
║  energi emosionalmu tinggi dan positif..."                       ║
║                                                                   ║
║ [Penjelasan tentang emosi, kenapa user merasakannya, dan         ║
║  bagaimana memahami perasaan tersebut dengan lebih baik]         ║
║                                                                   ║
║ Emosi terdeteksi: Happy > Aroused                                 ║
╚═══════════════════════════════════════════════════════════════════╝
```

---

## 5. 3 UI Components yang Harus Dibuat

### UI Component 1: **Reflection Questions UI (Yes/No)**

**Deskripsi:** Interface untuk menampilkan reflection questions dengan 2 opsi (Yes / No)

**Requirements:**

- Tampilkan pertanyaan refleksi dengan jelas
- 2 pilihan jawaban (Yes / No) dalam bentuk button besar yang mudah diklik
- Visual feedback ketika user memilih opsi
- Progress indicator (e.g., "Pertanyaan 1 dari 2")
- Button "Next" untuk lanjut
- Button "Submit" di pertanyaan terakhir
- Tone lebih reflektif dan calm (bisa gunakan warna lebih soft)
- Responsive design

**Contoh Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  Refleksi 1 dari 2                            [Progress]│
│                                                          │
│  Apakah saat ini kamu merasa cukup puas dengan          │
│  keadaan hidupmu, meskipun tidak semuanya sempurna?     │
│                                                          │
│                                                          │
│         ┌────────────────┐   ┌────────────────┐         │
│         │                │   │                │         │
│         │      YES       │   │       NO       │         │
│         │                │   │                │         │
│         └────────────────┘   └────────────────┘         │
│                                                          │
│                                      [Next Question →]   │
└─────────────────────────────────────────────────────────┘
```

---

### UI Component 2: **MC Questions UI**

**Deskripsi:** Interface untuk menampilkan multiple choice questions dengan 4 opsi (A, B, C, D)

**Requirements:**

- Tampilkan pertanyaan dengan jelas
- 4 pilihan jawaban (A, B, C, D) dalam bentuk button atau card
- Visual feedback ketika user memilih opsi (highlight/active state)
- Progress indicator (e.g., "Pertanyaan 1 dari 3")
- Button "Next" untuk lanjut ke pertanyaan berikutnya
- Button "Submit" di pertanyaan terakhir
- Responsive design

**Contoh Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  Pertanyaan 1 dari 3                          [Progress]│
│                                                          │
│  Akhir-akhir ini, bagaimana perasaanmu tentang          │
│  pencapaianmu?                                           │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │ A. Tertekan dan berat                            │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │ B. Netral, seperti rutinitas biasa           [✓] │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │ C. Merasa cukup nyaman dan menikmatinya          │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │ D. Cemas dan tidak tenang                        │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│                                      [Next Question →]   │
└─────────────────────────────────────────────────────────┘
```

---

### UI Component 3: **Insight Literasi Emosi UI**

**Deskripsi:** Interface untuk chatbot memberikan insight setelah user menjawab semua pertanyaan

**Requirements:**

- Chat-style interface (chatbot avatar + message bubble)
- Tampilkan emosi yang terdeteksi dengan visual menarik (icon/badge)
- Breakdown emosi: Primary > Secondary > Tertiary (e.g., Happy > Aroused)
- Narasi insight yang panjang dan mendalam (scrollable)
- Tone empatik dan warm
- Optional: typing animation untuk chatbot response
- Button "Chat Lagi" atau "Selesai" di akhir
- Responsive design

**Contoh Layout:**

```
┌─────────────────────────────────────────────────────────┐
│  ┌───┐                                                   │
│  │🤖 │ Terima kasih sudah berbagi dan menjawab          │
│  └───┘ pertanyaan dengan jujur!                          │
│                                                          │
│  Emosi yang terdeteksi:                                  │
│  ┌──────────────────────────────────────────┐           │
│  │ 😊 Happy > Aroused                        │           │
│  └──────────────────────────────────────────┘           │
│                                                          │
│  Dari cerita dan jawabanmu, aku melihat bahwa kamu      │
│  sedang mengalami perasaan happy.aroused. Ini adalah    │
│  kondisi di mana energi emosionalmu tinggi dan          │
│  positif. Kamu mungkin merasa excited, bersemangat,     │
│  dan penuh energi untuk melakukan sesuatu.              │
│                                                          │
│  Perasaan ini biasanya muncul ketika:                   │
│  • Ada sesuatu yang membuatmu antusias                  │
│  • Kamu merasa terstimulasi secara positif              │
│  • Energimu tinggi dan ingin beraktivitas               │
│                                                          │
│  [Narasi insight lebih panjang...]                      │
│                                                          │
│                    [Chat Lagi] [Selesai]                │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Data Structure (Dummy Data untuk Frontend)

### Emotion Wheel Format

```typescript
// Format emosi: "Primary.Secondary.Tertiary"
type EmotionPath = string; // Contoh: "Happy.Aroused" atau "Sad.Lonely.Isolated"

interface EmotionWheel {
  primary: string; // "Happy", "Sad", "Angry", "Fearful", "Surprised", "Bad"
  secondary: string; // "Playful", "Content", "Interested", "Proud", etc.
  tertiary?: string; // "Aroused", "Cheeky", "Free", "Joyful", etc.
}

// Contoh data:
const detectedEmotion: EmotionWheel = {
  primary: "Happy",
  secondary: "Playful",
  tertiary: "Aroused",
};
```

### MC Question Data Structure

```typescript
interface MCQuestion {
  id: string;
  emotionKey: string; // "Happy.Aroused"
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

// Contoh data:
const mcQuestions: MCQuestion[] = [
  {
    id: "mc_001",
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
  // ... more questions
];
```

### Reflection Question Data Structure

```typescript
interface ReflectionQuestion {
  id: string;
  emotionKey: string; // "Happy.Aroused"
  questionIndex: number; // 1, 2
  questionText: string;
  options: ["Yes", "No"]; // Always Yes/No
}

// Contoh data:
const reflectionQuestions: ReflectionQuestion[] = [
  {
    id: "ref_001",
    emotionKey: "Happy.Aroused",
    questionIndex: 1,
    questionText:
      "Apakah saat ini kamu merasa cukup puas dengan keadaan hidupmu, meskipun tidak semuanya sempurna?",
    options: ["Yes", "No"],
  },
  {
    id: "ref_002",
    emotionKey: "Happy.Aroused",
    questionIndex: 2,
    questionText:
      "Saat memikirkan aktivitas harimu, apa reaksi emosional yang paling muncul?",
    options: ["Yes", "No"],
  },
];
```

### Insight Data Structure

```typescript
interface EmotionInsight {
  emotion: EmotionWheel;
  insight: string; // Narasi panjang dari chatbot
  emotionLabel: string; // "Happy > Aroused"
  tone: "empathetic" | "calm" | "encouraging";
}

// Contoh data:
const insight: EmotionInsight = {
  emotion: {
    primary: "Happy",
    secondary: "Playful",
    tertiary: "Aroused",
  },
  emotionLabel: "Happy > Aroused",
  insight: `Dari cerita dan jawabanmu, aku melihat bahwa kamu sedang mengalami perasaan happy.aroused. 
  
Ini adalah kondisi di mana energi emosionalmu tinggi dan positif. Kamu mungkin merasa excited, bersemangat, dan penuh energi untuk melakukan sesuatu.

Perasaan ini biasanya muncul ketika:
• Ada sesuatu yang membuatmu antusias
• Kamu merasa terstimulasi secara positif
• Energimu tinggi dan ingin beraktivitas

Ini adalah kondisi emosi yang sehat dan produktif. Nikmati momen ini dan manfaatkan energi positifmu untuk hal-hal yang bermakna bagimu.`,
  tone: "encouraging",
};
```

---

## 7. Frontend Routes (Next.js)

```
/                           → Landing page / Home
/chat                       → Main chatbot interface
  ├── Chatbot greeting
  ├── User story input
  └── After submit → redirect to /questions

/questions
  ├── /questions/reflection → Reflection Questions interface (Yes/No) - PERTAMA
  └── /questions/mc         → MC Questions interface (ABCD) - KEDUA

/insight                    → Insight Literasi Emosi
  └── Chatbot memberikan insight

/history (optional)         → Riwayat session user
```

---

## 8. Dummy Data Examples

### Contoh Data MC Questions (untuk UI testing)

```typescript
// Path: Happy.Aroused
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

// Path: Sad.Lonely.Isolated
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
```

### Contoh Data Reflection Questions

```typescript
// Path: Happy.Aroused
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

// Path: Sad.Lonely.Isolated
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
```

### Contoh Data Insight

```typescript
export const insightHappyAroused: EmotionInsight = {
  emotion: {
    primary: "Happy",
    secondary: "Playful",
    tertiary: "Aroused",
  },
  emotionLabel: "Happy > Aroused",
  insight: `Dari cerita dan jawabanmu, aku melihat bahwa kamu sedang mengalami perasaan happy.aroused. 

Ini adalah kondisi di mana energi emosionalmu tinggi dan positif. Kamu mungkin merasa excited, bersemangat, dan penuh energi untuk melakukan sesuatu. Ada gairah dan antusiasme yang kamu rasakan dalam aktivitas atau situasi yang kamu hadapi.

**Apa arti dari perasaan ini?**

Perasaan happy.aroused adalah tanda bahwa:
• Kamu sedang dalam kondisi emosional yang aktif dan positif
• Ada stimulasi yang membuatmu merasa hidup dan bersemangat
• Energimu tinggi dan siap untuk beraktivitas
• Kamu merasa engaged dengan apa yang terjadi di sekitarmu

**Kapan perasaan ini biasanya muncul?**

• Ketika ada tantangan baru yang exciting
• Saat kamu melakukan sesuatu yang kamu sukai
• Ketika ada peluang atau kemungkinan menarik
• Saat kamu merasa passionate tentang sesuatu

**Kenapa ini penting?**

Perasaan ini adalah kondisi emosi yang sehat dan produktif. Ini menunjukkan bahwa kamu:
- Mampu merasakan kegembiraan dan antusiasme
- Punya energi positif untuk diarahkan
- Terlibat aktif dengan hidupmu (bukan pasif)
- Dalam kondisi mental yang baik untuk berkembang

**Yang bisa kamu lakukan:**

Nikmati momen ini! Manfaatkan energi positifmu untuk:
• Mengejar goals atau projects yang penting bagimu
• Mencoba hal-hal baru yang sudah lama kamu ingin coba
• Berbagi energi positif ini dengan orang-orang di sekitarmu
• Seimbangkan dengan istirahat agar energimu tetap sustainable

Ingat, perasaan ini adalah bagian alami dari pengalaman emosi manusia yang sehat. Kamu sedang dalam kondisi yang baik untuk tumbuh dan berkembang.`,
  tone: "encouraging",
};

export const insightSadLonelyIsolated: EmotionInsight = {
  emotion: {
    primary: "Sad",
    secondary: "Lonely",
    tertiary: "Isolated",
  },
  emotionLabel: "Sad > Lonely > Isolated",
  insight: `Dari cerita dan jawabanmu, aku melihat bahwa kamu sedang mengalami perasaan sad.lonely.isolated.

Perasaan ini menunjukkan bahwa kamu mungkin merasa terpisah atau terisolasi dari orang-orang di sekitarmu, bahkan ketika mereka ada di dekatmu secara fisik. Ada perasaan kesepian yang mendalam dan sensasi tidak terhubung.

**Apa arti dari perasaan ini?**

Perasaan sad.lonely.isolated adalah tanda bahwa:
• Kamu merasa ada jarak emosional dengan orang lain
• Koneksi sosialmu terasa lemah atau tidak memuaskan
• Kamu mungkin merasa tidak dipahami atau tidak dilihat
• Ada kebutuhan untuk koneksi yang lebih dalam yang belum terpenuhi

**Kapan perasaan ini biasanya muncul?**

• Ketika melalui perubahan besar (pindah tempat, kehilangan, dll)
• Saat merasa tidak dipahami oleh orang terdekat
• Ketika kesulitan untuk membuka diri atau berkomunikasi
• Saat pola hubungan sosial berubah atau berkurang

**Kenapa perasaan ini penting untuk dipahami?**

Perasaan kesepian adalah sinyal bahwa ada kebutuhan emosional yang perlu diperhatikan:
- Kebutuhan untuk koneksi yang bermakna
- Keinginan untuk dipahami dan diterima
- Pentingnya belonging dalam kehidupan sosial
- Kebutuhan untuk berbagi pengalaman dengan orang lain

**Yang bisa kamu lakukan:**

Mengenali perasaan ini adalah langkah pertama yang penting. Beberapa hal yang bisa membantu:

• **Reach out**: Hubungi seseorang yang kamu percaya, bahkan untuk obrolan kecil
• **Ekspresikan**: Tulis atau ceritakan apa yang kamu rasakan (seperti yang sudah kamu lakukan!)
• **Small steps**: Mulai dari interaksi kecil yang nyaman untukmu
• **Be kind to yourself**: Perasaan ini valid dan banyak orang mengalaminya
• **Consider support**: Kalau perasaan ini intens dan berkelanjutan, pertimbangkan untuk berbicara dengan professional

Ingat, perasaan kesepian adalah bagian dari pengalaman manusia dan bukan berarti ada yang salah denganmu. Kamu layak untuk merasa terhubung dan dipahami.`,
  tone: "empathetic",
};
```

---

## 9. Design Considerations

### UI/UX Principles untuk 3 UI Components

#### 1. Reflection Questions UI

- **Calm & reflective tone**: Warna lebih soft, spacing lebih generous
- **Large touch targets**: Button Yes/No yang besar dan mudah di-tap
- **Minimal distraction**: Focus pada pertanyaan, less decorative elements
- **Breathing room**: Lebih banyak whitespace untuk perasaan tenang
- **Gentle transitions**: Smooth animation antara pertanyaan

#### 2. MC Questions UI

- **Visual hierarchy yang jelas**: Pertanyaan lebih besar dari opsi
- **Interactive states**: Hover, active, selected states yang jelas
- **Progressive disclosure**: Satu pertanyaan per screen, tidak overwhelming
- **Clear CTA**: Button "Next" dan "Submit" yang kontras
- **Accessibility**: Keyboard navigation, proper labels

#### 3. Insight UI

- **Conversational layout**: Mirip chat interface, natural dan familiar
- **Hierarchy of information**:
  1. Detected emotion (highlight dengan visual)
  2. Main insight (narrative)
  3. Breakdown explanation
- **Readability**: Font size yang nyaman, line spacing yang baik untuk long-form text
- **Emotion badge/icon**: Visual representation dari emotion detected
- **Empathetic colors**: Gunakan warna yang sesuai dengan tone (encouraging vs empathetic)

### Color Palette Suggestions

```
Primary Colors:
- Main: #6366F1 (Indigo) - untuk CTA buttons
- Secondary: #8B5CF6 (Purple) - untuk accents

Emotion Colors:
- Happy: #FCD34D (Warm Yellow)
- Sad: #60A5FA (Soft Blue)
- Angry: #F87171 (Soft Red)
- Fearful: #A78BFA (Light Purple)
- Surprised: #FB923C (Orange)

Neutral:
- Background: #F9FAFB
- Text Primary: #111827
- Text Secondary: #6B7280
- Border: #E5E7EB
```

---

## 10. Component File Structure (Next.js)

```
src/
├── app/
│   ├── page.tsx                 → Landing
│   ├── chat/
│   │   └── page.tsx             → Chatbot interface
│   ├── questions/
│   │   ├── reflection/
│   │   │   └── page.tsx         → Reflection Questions page (PERTAMA)
│   │   └── mc/
│   │       └── page.tsx         → MC Questions page (KEDUA)
│   └── insight/
│       └── page.tsx             → Insight page
│
├── components/
│   ├── chat/
│   │   ├── ChatBubble.tsx       → Chat message component
│   │   ├── ChatInput.tsx        → Story input area
│   │   └── ChatContainer.tsx    → Main chat wrapper
│   │
│   ├── questions/
│   │   ├── ReflectionCard.tsx   → Reflection Question UI (Yes/No) - PERTAMA
│   │   ├── MCQuestionCard.tsx   → MC Question UI (ABCD) - KEDUA
│   │   ├── ProgressBar.tsx      → Progress indicator
│   │   └── QuestionLayout.tsx   → Shared layout for questions
│   │
│   ├── insight/
│   │   ├── InsightCard.tsx      → Main insight display
│   │   ├── EmotionBadge.tsx     → Emotion visual badge
│   │   └── InsightLayout.tsx    → Layout for insight page
│   │
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Layout.tsx
│
├── data/
│   ├── mcQuestions.ts           → Dummy MC questions
│   ├── reflectionQuestions.ts   → Dummy reflection questions
│   ├── insights.ts              → Dummy insight data
│   └── emotions.ts              → Emotion wheel data
│
├── types/
│   └── index.ts                 → TypeScript interfaces
│
└── lib/
    └── utils.ts                 → Helper functions
```

---

## 11. Implementation Checklist

### Phase 1: Setup & Basic Layout

- [ ] Initialize Next.js project with TypeScript
- [ ] Setup Tailwind CSS
- [ ] Create basic routing structure
- [ ] Create dummy data files
- [ ] Setup TypeScript interfaces

### Phase 2: UI Component 1 - Reflection Questions

- [ ] Create ReflectionCard component
- [ ] Implement Yes/No selection
- [ ] Add progress indicator
- [ ] Implement softer/calmer design
- [ ] Test responsive design
- [ ] Add smooth transitions

### Phase 3: UI Component 2 - MC Questions

- [ ] Create MCQuestionCard component
- [ ] Implement option selection logic
- [ ] Add progress indicator
- [ ] Add navigation (Next/Submit buttons)
- [ ] Test responsive design
- [ ] Add animations/transitions

### Phase 4: UI Component 3 - Insight UI

- [ ] Create InsightCard component
- [ ] Create EmotionBadge component
- [ ] Implement chat-style layout
- [ ] Add emotion breakdown display
- [ ] Format long-form narrative text
- [ ] Add CTA buttons (Chat Lagi/Selesai)
- [ ] Test responsive design

### Phase 5: Chatbot Flow Integration

- [ ] Create chat interface
- [ ] Implement story input
- [ ] Connect flow: Chat → Reflection → MC → Insight
- [ ] Add state management (Context/Zustand)
- [ ] Test complete user journey

### Phase 6: Polish & Refinement

- [ ] Add animations (Framer Motion)
- [ ] Improve accessibility
- [ ] Test on mobile devices
- [ ] Optimize performance
- [ ] Add loading states
- [ ] Final UI/UX review

---

## 12. Notes untuk Developer

**Important:**

1. Ini adalah **dummy frontend** - fokus pada UI/UX presentation
2. Tidak perlu koneksi ke backend atau AI service (untuk sekarang)
3. Gunakan **dummy data** dari file data/
4. Fokus pada **3 UI components** yang berbeda dan polished
5. Pastikan **responsive** untuk mobile dan desktop
6. Gunakan **TypeScript** untuk type safety
7. Keep code **modular** dan **reusable**

**Testing Data:**

- Buat minimal 2 emotion paths dengan pertanyaan lengkap:
  - Happy.Aroused (positive emotion)
  - Sad.Lonely.Isolated (negative emotion)
- Setiap path punya **2 Reflection questions** (Yes/No) **PERTAMA**, kemudian **3 MC questions** (ABCD) **KEDUA**
- Setiap path punya 1 insight narrative

**UI/UX Priority:**

1. **Clarity**: User harus jelas apa yang harus dilakukan
2. **Feedback**: Visual feedback untuk setiap interaksi
3. **Empathy**: Tone dan warna harus sesuai dengan context emosional
4. **Flow**: Smooth transition antar steps, tidak jarring
5. **Accessibility**: Support keyboard navigation, proper contrast

---

## 13. Next Steps

1. **Diskusi Design Tool:**
   - Mau pakai Figma/design tool untuk mockup dulu?
   - Atau langsung code dengan inspirasi dari UI libraries?
2. **Timeline:**
   - Berapa lama untuk complete 3 UI components?
   - Kapan bisa demo/preview?

3. **Collaboration:**
   - Assign task di ClickUp
   - Setup git repository untuk frontend project
   - Code review process

---

**Contact untuk Questions:**

- [Your Name]
- [Task akan di-assign di ClickUp]

---

**Version History:**

- v5.1 (11 Feb 2026): **UPDATED** - Urutan diubah: Reflection Questions (Yes/No) muncul PERTAMA, baru MC Questions (ABCD) KEDUA
- v5.0 (11 Feb 2026): Initial brief untuk 3 UI components + MC & Reflection Questions
