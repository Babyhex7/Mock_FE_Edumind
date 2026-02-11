import { EmotionInsight } from "../types";

// ============================================
// INSIGHT - HAPPY.AROUSED
// ============================================

export const insightHappyAroused: EmotionInsight = {
  emotion: {
    primary: "Happy",
    secondary: "Playful",
    tertiary: "Aroused",
  },
  emotionLabel: "Happy > Aroused",
  insight: `Dari cerita dan jawabanmu, aku melihat bahwa kamu sedang mengalami perasaan **happy.aroused**. 

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

Ingat, perasaan ini adalah bagian alami dari pengalaman emosi manusia yang sehat. Kamu sedang dalam kondisi yang baik untuk tumbuh dan berkembang. 🌟`,
  tone: "encouraging",
};

// ============================================
// INSIGHT - SAD.LONELY.ISOLATED
// ============================================

export const insightSadLonelyIsolated: EmotionInsight = {
  emotion: {
    primary: "Sad",
    secondary: "Lonely",
    tertiary: "Isolated",
  },
  emotionLabel: "Sad > Lonely > Isolated",
  insight: `Dari cerita dan jawabanmu, aku melihat bahwa kamu sedang mengalami perasaan **sad.lonely.isolated**.

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

Ingat, perasaan kesepian adalah bagian dari pengalaman manusia dan bukan berarti ada yang salah denganmu. Kamu layak untuk merasa terhubung dan dipahami. 💙`,
  tone: "empathetic",
};

// ============================================
// HELPER FUNCTION
// ============================================

export function getInsight(emotionPath: string): EmotionInsight {
  switch (emotionPath) {
    case "Happy.Aroused":
      return insightHappyAroused;
    case "Sad.Lonely.Isolated":
      return insightSadLonelyIsolated;
    default:
      return insightHappyAroused; // Default fallback
  }
}
