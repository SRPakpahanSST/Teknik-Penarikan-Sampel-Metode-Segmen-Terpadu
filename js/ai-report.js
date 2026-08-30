/**
 * ================================================================
 * AI REPORT GENERATOR - Pembuatan Laporan Otomatis
 * ================================================================
 */

async function runAIReport() {
    if (!currentResult) return '⚠️ Silakan hitung sampel terlebih dahulu.';
    const { P, S, Ss, Int, R1, sampelTerpilih, uniqueCount, maxFreq, minFreq, sampleDetails } = currentResult;
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const prompt = `
Anda adalah AI Report Generator. Buat laporan profesional dalam bahasa Indonesia dengan format Markdown.
Data:
- Tanggal: ${dateStr} ${timeStr}
- Metode: Segmen Terpadu
- Populasi: ${P}, Sampel Tetap: ${S}, Sampel Sementara: ${Ss}
- Interval: ${Int.toFixed(2)}, R₁: ${Math.round(R1)}
- Sampel Unik: ${uniqueCount}, Daftar: ${sampelTerpilih.join(', ')}
- Frekuensi Tertinggi: ${maxFreq}x, Terendah: ${minFreq}x
- Detail Representatif: ${sampleDetails.map(d => `${d.labelTingkat}: ${d.nomor} (${d.frekuensi}x)`).join('; ')}

Laporan mencakup: header, ringkasan perhitungan, hasil penarikan, analisis representatif, kesimpulan.
`;
    try {
        return await callAIAPI(prompt);
    } catch (e) {
        return `❌ Error: ${e.message}`;
    }
}

async function exportAIReport() {
    const content = await runAIReport();
    if (content.startsWith('❌')) { alert(content); return; }
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `laporan-penarikan-sampel-${new Date().toISOString().slice(0,10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    document.getElementById('aiResponseArea').innerHTML = `
        <div class="ai-response-content">
            ${marked.parse(content)}
            <div style="margin-top:16px; padding:12px; background:#d4edda; border-radius:6px; color:#155724;">
                ✅ Laporan berhasil diekspor sebagai file Markdown!
            </div>
        </div>
    `;
}