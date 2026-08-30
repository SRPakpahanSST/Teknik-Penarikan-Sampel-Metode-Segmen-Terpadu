/**
 * ================================================================
 * AI SMART OPTIMIZER - Optimasi Parameter P dan S
 * ================================================================
 */

async function runAIOptimizer() {
    if (!currentResult) return '⚠️ Silakan hitung sampel terlebih dahulu.';
    const { P, S, uniqueCount } = currentResult;
    const optimalS = Math.round(P * 0.2);
    const minS = Math.max(2, Math.round(P * 0.05));
    const maxS = Math.min(P, Math.round(P * 0.35));
    const prompt = `
Anda adalah AI Smart Parameter Optimizer.
Data: Populasi P=${P}, Sampel S=${S}, Sampel Unik=${uniqueCount}.
Rentang S yang disarankan: ${minS} - ${maxS}, S Optimal Teoritis: ${optimalS}.

Tugas: analisis apakah S sudah optimal, berikan rekomendasi penyesuaian, tampilkan tabel skenario alternatif, dan berikan skor kepercayaan.
Output dalam Markdown dengan judul "⚙️ AI Smart Optimizer".
`;
    try {
        return await callAIAPI(prompt);
    } catch (e) {
        return `❌ Error: ${e.message}`;
    }
}