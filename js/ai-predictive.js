/**
 * ================================================================
 * AI PREDICTIVE SAMPLING - Prediksi Hasil Terbaik
 * ================================================================
 */

async function runAIPredictive() {
    if (!currentResult) return '⚠️ Silakan hitung sampel terlebih dahulu.';
    const { P, S } = currentResult;
    const scenarios = [
        { S: Math.round(P * 0.08), label: 'Minimal' },
        { S: Math.round(P * 0.12), label: 'Kecil' },
        { S: Math.round(P * 0.15), label: 'Sedang' },
        { S: Math.round(P * 0.2), label: 'Optimal' },
        { S: Math.round(P * 0.25), label: 'Besar' },
        { S: Math.round(P * 0.3), label: 'Maksimal' }
    ].filter(s => s.S >= 2 && s.S <= P);
    const scenarioData = scenarios.map(sc => {
        const ss = 2 * (sc.S - 1);
        const int = P / sc.S;
        const r1 = P - (ss - sc.S);
        const uniqueness = Math.min(100, Math.round((sc.S / P) * 100 + 20));
        return { ...sc, ss, int, r1: Math.round(r1), uniqueness, quality: uniqueness > 70 ? 'Sangat Baik' : uniqueness > 50 ? 'Baik' : 'Perlu Perbaikan' };
    });
    const prompt = `
Anda adalah AI Predictive Sampling. Data populasi P=${P}, sampel saat ini S=${S}.
Skenario yang dianalisis:
${scenarioData.map(s => `- ${s.label}: S=${s.S}, Ss=${s.ss}, Int=${s.int.toFixed(2)}, R₁=${s.r1}, Unik=${s.uniqueness}%, Kualitas=${s.quality}`).join('\n')}

Tugas: analisis skenario terbaik, berikan rekomendasi S optimal, jelaskan alasannya, dan tampilkan tabel perbandingan.
Output dalam Markdown dengan judul "📊 AI Predictive Sampling".
`;
    try {
        return await callAIAPI(prompt);
    } catch (e) {
        return `❌ Error: ${e.message}`;
    }
}