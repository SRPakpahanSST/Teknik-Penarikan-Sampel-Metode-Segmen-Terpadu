/**
 * ================================================================
 * AI CONTROLLER - Orchestrator untuk Semua Fitur AI
 * ================================================================
 */

let aiState = { isRunning: false, currentFeature: null, results: {} };

// ================================================================
//  MAIN - RUN AI FEATURE
// ================================================================

async function runAIFeature(feature) {
    if (!currentResult) {
        showAIError('⚠️ Silakan hitung sampel terlebih dahulu.');
        return;
    }
    if (aiState.isRunning) {
        showAIError('⏳ AI sedang memproses...');
        return;
    }

    aiState.isRunning = true;
    aiState.currentFeature = feature;
    const btn = document.querySelector(`.ai-feature-btn[data-ai="${feature}"]`);
    if (btn) { btn.disabled = true; btn.classList.add('active'); btn.querySelector('.ai-feature-status').textContent = '⏳'; }

    showAILoading(`🤖 ${getFeatureName(feature)} sedang menganalisis...`);

    try {
        let result;
        switch (feature) {
            case 'assistant': result = await runAIAssistant(); break;
            case 'predictive': result = await runAIPredictive(); break;
            case 'optimizer': result = await runAIOptimizer(); break;
            case 'report': result = await runAIReport(); break;
            case 'anomaly': result = await runAIAnomaly(); break;
            default: throw new Error('Fitur tidak dikenal.');
        }
        if (result.startsWith('❌') || result.startsWith('⚠️')) {
            showAIError(result);
        } else {
            showAIResponse(result);
            aiState.results[feature] = result;
        }
    } catch (error) {
        showAIError(`❌ Error: ${error.message}`);
    }

    aiState.isRunning = false;
    aiState.currentFeature = null;
    if (btn) { btn.disabled = false; btn.classList.remove('active'); btn.querySelector('.ai-feature-status').textContent = '●'; }
}

// ================================================================
//  RUN ALL
// ================================================================

async function runAllAIFeatures() {
    if (!currentResult) { showAIError('⚠️ Hitung sampel dulu.'); return; }
    if (aiState.isRunning) { showAIError('⏳ Tunggu proses selesai.'); return; }

    const features = ['assistant', 'predictive', 'optimizer', 'report', 'anomaly'];
    showAILoading('🚀 Menjalankan semua analisis AI...');

    for (const f of features) {
        await runAIFeature(f);
        await new Promise(r => setTimeout(r, 500));
    }

    const summary = `
## 📊 Ringkasan Analisis AI - 5 Fitur
| Fitur | Status |
|-------|--------|
| 🤖 Smart Assistant | ✅ Selesai |
| 📊 Predictive Sampling | ✅ Selesai |
| ⚙️ Smart Optimizer | ✅ Selesai |
| 📄 Report Generator | ✅ Selesai |
| 🔍 Anomaly Detector | ✅ Selesai |

💡 Semua analisis selesai. Scroll ke atas untuk melihat detail.
`;
    const area = document.getElementById('aiResponseArea');
    area.innerHTML += marked.parse(summary);
    area.scrollTop = area.scrollHeight;
}

// ================================================================
//  UI HELPERS
// ================================================================

function getFeatureName(f) {
    const names = {
        assistant: 'Smart Assistant',
        predictive: 'Predictive Sampling',
        optimizer: 'Smart Optimizer',
        report: 'Report Generator',
        anomaly: 'Anomaly Detector'
    };
    return names[f] || f;
}

function showAILoading(msg) {
    document.getElementById('aiResponseArea').innerHTML = `
        <div class="ai-loading">
            <div class="ai-thinking"></div>
            <span>${msg}</span>
        </div>
    `;
}

function showAIResponse(content) {
    const area = document.getElementById('aiResponseArea');
    area.innerHTML = `<div class="ai-response-content">${marked.parse(content)}</div>`;
    area.scrollTop = 0;
}

function showAIError(msg) {
    document.getElementById('aiResponseArea').innerHTML = `
        <div style="color:#dc3545; padding:10px; background:#f8d7da; border-radius:6px; border-left:4px solid #dc3545;">
            ${msg}
        </div>
    `;
}

function clearAIResponse() {
    document.getElementById('aiResponseArea').innerHTML = `
        <div class="ai-response-placeholder">
            <span class="ai-placeholder-icon">🤖</span>
            <p>Pilih salah satu fitur AI di atas untuk memulai analisis</p>
            <p style="font-size:13px; color:#888;">AI akan menganalisis data sampel Anda dan memberikan rekomendasi cerdas</p>
        </div>
    `;
    document.querySelectorAll('.ai-feature-btn').forEach(b => {
        b.disabled = false;
        b.classList.remove('active');
        b.querySelector('.ai-feature-status').textContent = '●';
    });
}

// ================================================================
//  TOGGLE AI PANEL (dipanggil dari tombol)
// ================================================================

function toggleAIPanel() {
    const panel = document.getElementById('aiPanel');
    const btn = document.getElementById('btnToggleAI');
    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        btn.textContent = '🤖 Tutup AI Panel';
        if (!currentResult) hitungSampel();
    } else {
        panel.style.display = 'none';
        btn.textContent = '🤖 Buka AI Panel';
    }
}