/**
 * ================================================================
 * AI ANOMALY DETECTOR - Deteksi Anomali Data
 * ================================================================
 */

async function runAIAnomaly() {
    if (!currentResult) return '⚠️ Silakan hitung sampel terlebih dahulu.';
    const { P, S, sampelTerpilih, sampelSementara, freqMap, uniqueCount } = currentResult;
    const avgFreq = Object.values(freqMap).reduce((a, b) => a + b, 0) / Object.values(freqMap).length || 0;
    const totalDuplicates = sampelSementara.length - uniqueCount;
    const anomalies = [];
    for (const [val, freq] of Object.entries(freqMap)) {
        if (freq > avgFreq * 2.5) anomalies.push({ nomor: val, freq, type: 'terlalu sering', severity: 'sedang' });
        if (freq < avgFreq * 0.2 && freq === 1) anomalies.push({ nomor: val, freq, type: 'terlalu jarang', severity: 'rendah' });
    }
    if (totalDuplicates > S * 1.5) {
        anomalies.push({ type: 'duplikat berlebihan', severity: 'tinggi', detail: `Duplikat: ${totalDuplicates} dari ${sampelSementara.length} sampel sementara` });
    }
    const sorted = [...sampelTerpilih].sort((a, b) => a - b);
    if (sorted.length > 4) {
        const q1 = sorted[Math.floor(sorted.length * 0.25)];
        const q3 = sorted[Math.floor(sorted.length * 0.75)];
        const iqr = q3 - q1;
        const outliers = sorted.filter(v => v < q1 - 1.5 * iqr || v > q3 + 1.5 * iqr);
        if (outliers.length > 0) {
            anomalies.push({ type: 'outlier', severity: 'rendah', detail: `Outlier: ${outliers.join(', ')}` });
        }
    }
    const prompt = `
Anda adalah AI Anomaly Detector.
Data: Populasi=${P}, S=${S}, Sampel Sementara=${sampelSementara.length}, Unik=${uniqueCount}, Duplikat=${totalDuplicates}, Frekuensi Rata-rata=${avgFreq.toFixed(1)}x.
Anomali terdeteksi: ${anomalies.length > 0 ? anomalies.map(a => `${a.nomor ? 'Nomor '+a.nomor : ''} ${a.detail || a.type}`).join(', ') : 'Tidak ada'}.

Tugas: analisis anomali, berikan penjelasan dan rekomendasi, status akhir (Bersih / Perlu Perbaikan).
Output Markdown dengan judul "🔍 AI Anomaly Detector".
`;
    try {
        return await callAIAPI(prompt);
    } catch (e) {
        return `❌ Error: ${e.message}`;
    }
}