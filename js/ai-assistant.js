/**
 * ================================================================
 * AI SMART ASSISTANT - Rekomendasi & Analisis Sampel
 * ================================================================
 */

async function runAIAssistant() {
    if (!currentResult) return '⚠️ Silakan hitung sampel terlebih dahulu.';
    const { P, S, sampelTerpilih, maxFreq, minFreq, uniqueCount } = currentResult;
    const prompt = `
Anda adalah AI Smart Assistant untuk analisis penarikan sampel.
Data:
- Populasi (P): ${P}
- Sampel Tetap (S): ${S}
- Sampel Unik: ${uniqueCount}
- Frekuensi Tertinggi: ${maxFreq}x
- Frekuensi Terendah: ${minFreq}x
- Daftar Sampel: ${sampelTerpilih.join(', ')}

Buat analisis dan rekomendasi dalam bahasa Indonesia dengan format Markdown.
Sertakan:
1. 📊 Ringkasan Data (tabel)
2. 🎯 Analisis AI (apakah sudah optimal?)
3. 💡 Rekomendasi (saran perbaikan jika perlu)
4. 📌 Kesimpulan
Berikan skor kepercayaan (0-100%).
`;
    try {
        return await callAIAPI(prompt);
    } catch (e) {
        return `❌ Error: ${e.message}`;
    }
}