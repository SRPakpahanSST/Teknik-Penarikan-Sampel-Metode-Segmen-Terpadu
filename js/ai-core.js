/**
 * ================================================================
 * AI CORE - Konfigurasi, API Calls, Mode Management
 * ================================================================
 */

const AI_CONFIG = {
    DEFAULT_API_KEY: 'AIzaSyDemoKeyForAPINDO2026', // Ganti dengan key demo
    QUOTA_LIMIT: 50,
    mode: 'auto', // auto, custom, offline
    customKey: localStorage.getItem('ai_custom_api_key') || '',
    quotaUsed: parseInt(localStorage.getItem('ai_quota_used') || '0'),
};

// ================================================================
//  API CALL (Multi-Provider)
// ================================================================

async function callAIAPI(prompt, mode = null) {
    const useMode = mode || AI_CONFIG.mode;

    if (useMode === 'auto' && AI_CONFIG.quotaUsed >= AI_CONFIG.QUOTA_LIMIT) {
        throw new Error('⚠️ Kuota AI Auto habis. Gunakan Custom atau Offline.');
    }

    let response;
    switch (useMode) {
        case 'auto':
            response = await callGeminiAPI(AI_CONFIG.DEFAULT_API_KEY, prompt);
            break;
        case 'custom':
            const key = AI_CONFIG.customKey || promptCustomKey();
            if (!key) throw new Error('⚠️ Masukkan API Key terlebih dahulu.');
            response = await callGeminiAPI(key, prompt);
            break;
        case 'offline':
            response = await callOfflineAI(prompt);
            break;
        default:
            throw new Error('Mode AI tidak dikenali.');
    }

    if (useMode === 'auto') {
        AI_CONFIG.quotaUsed++;
        localStorage.setItem('ai_quota_used', AI_CONFIG.quotaUsed.toString());
        updateQuotaDisplay();
    }
    return response;
}

// ================================================================
//  GOOGLE GEMINI API
// ================================================================

async function callGeminiAPI(apiKey, prompt) {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        const body = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
        };
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error?.message || `HTTP ${res.status}`);
        }
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (!text) throw new Error('Tidak ada respons dari AI.');
        return text;
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
}

// ================================================================
//  OFFLINE AI (Simulasi Cerdas)
// ================================================================

async function callOfflineAI(prompt) {
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));
    // Panggil generator sesuai konteks (akan diimplementasikan di file masing-masing)
    // Di sini kita return placeholder, karena generator spesifik ada di file fitur.
    // Namun kita akan override di controller dengan memanggil fungsi yang sesuai.
    // Untuk keperluan core, kita hanya return placeholder.
    return "🧠 AI Offline: Analisis simulasi akan dihasilkan oleh fitur spesifik.";
}

// ================================================================
//  HELPER FUNCTIONS
// ================================================================

function promptCustomKey() {
    const key = prompt('🔑 Masukkan API Key Google Gemini Anda:');
    if (key) {
        AI_CONFIG.customKey = key;
        localStorage.setItem('ai_custom_api_key', key);
        document.getElementById('customApiKey').value = key;
        return key;
    }
    return null;
}

function updateQuotaDisplay() {
    const el = document.getElementById('aiQuotaDisplay');
    if (el) {
        const remaining = AI_CONFIG.QUOTA_LIMIT - AI_CONFIG.quotaUsed;
        el.textContent = `⚡ ${remaining}/${AI_CONFIG.QUOTA_LIMIT}`;
    }
}

// ================================================================
//  MODE CHANGE
// ================================================================

function changeAIMode(mode) {
    AI_CONFIG.mode = mode;
    document.getElementById('aiModeDisplay').textContent = `Mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
    const customRow = document.getElementById('customKeyRow');
    const offlineInfo = document.getElementById('offlineInfo');
    customRow.style.display = mode === 'custom' ? 'flex' : 'none';
    offlineInfo.style.display = mode === 'offline' ? 'block' : 'none';
    const statusEl = document.getElementById('aiStatus');
    if (mode === 'offline') {
        statusEl.textContent = '● Offline (Simulasi)';
        statusEl.className = 'ai-status offline';
    } else {
        statusEl.textContent = '● Online';
        statusEl.className = 'ai-status online';
    }
    localStorage.setItem('ai_mode_preference', mode);
    clearAIResponse();
}

function saveCustomKey() {
    const key = document.getElementById('customApiKey').value.trim();
    if (!key) { alert('⚠️ Masukkan API Key.'); return; }
    if (key.length < 20) { alert('⚠️ API Key tidak valid.'); return; }
    AI_CONFIG.customKey = key;
    localStorage.setItem('ai_custom_api_key', key);
    alert('✅ API Key tersimpan!');
}

// ================================================================
//  INIT
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    const savedMode = localStorage.getItem('ai_mode_preference') || 'auto';
    const radio = document.querySelector(`input[name="aiMode"][value="${savedMode}"]`);
    if (radio) radio.checked = true;
    changeAIMode(savedMode);

    const savedKey = localStorage.getItem('ai_custom_api_key');
    if (savedKey) {
        document.getElementById('customApiKey').value = savedKey;
        AI_CONFIG.customKey = savedKey;
    }
    updateQuotaDisplay();
});