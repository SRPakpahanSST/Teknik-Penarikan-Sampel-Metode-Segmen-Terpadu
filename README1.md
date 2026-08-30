📊 Teknik Penarikan Sampel Metode Segmen Terpadu

AI-Powered Application for APINDO Innovation Challenge 2026

---

📖 Tentang Aplikasi

Aplikasi web ini merupakan implementasi dari Teknik Penarikan Sampel Metode Segmen Terpadu, Semua Untuk Satu yang dikembangkan oleh SR. Pakpahan, SST. Aplikasi ini telah ditingkatkan dengan 5 fitur Kecerdasan Buatan (AI) untuk memberikan analisis yang lebih mendalam, rekomendasi cerdas, dan kemudahan dalam pengambilan keputusan statistik.

Dirancang khusus untuk memenuhi kriteria kompetisi APINDO Innovation Challenge 2026 dengan tema "Teman Cerdas, Solusi Tuntas", aplikasi ini menggabungkan metode statistik ilmiah dengan teknologi AI mutakhir.

---

✨ Fitur Unggulan

📊 Fitur Inti (Core Sampling)

Fitur Deskripsi
Dua Metode Input Populasi Input melalui daftar item (pisahkan koma) atau langsung memasukkan jumlah populasi (P)
Perhitungan Otomatis Menghitung Ss (Sampel Sementara), Int (Interval), dan R₁ (Sampel Pertama)
Pola Perguliran Perputaran penarikan sampel setiap 5 unit sesuai rumus baku
Sampel Tetap Berbasis Frekuensi Menentukan sampel tetap dari nilai dengan frekuensi tertinggi di sampel sementara
5 Tingkat Representatif Mengelompokkan sampel ke dalam 5 tingkat representativitas berdasarkan frekuensi kemunculan
Koreksi Otomatis Validasi dan koreksi otomatis jika jumlah sampel tetap kurang 1 dari target

🤖 Fitur AI (Artificial Intelligence)

Fitur AI Fungsi
🤖 Smart Assistant Menganalisis data sampel dan memberikan rekomendasi optimal beserta skor kepercayaan
📊 Predictive Sampling Mensimulasikan berbagai skenario sampel untuk menemukan kombinasi terbaik
⚙️ Smart Optimizer Mengoptimalkan parameter P dan S untuk hasil yang lebih representatif
📄 Report Generator Membuat laporan profesional secara otomatis dalam format Markdown yang siap diunduh
🔍 Anomaly Detector Mendeteksi keanehan atau outlier dalam data sampel dan memberikan peringatan dini

🔑 Mode AI API Key

Aplikasi mendukung 3 mode untuk fleksibilitas penggunaan:

Mode Keterangan
🚀 Auto (Default) Menggunakan API Key bawaan, langsung jalan tanpa setup (kuota terbatas untuk demo)
🔑 Custom Pengguna dapat memasukkan API Key sendiri untuk penggunaan produksi
📡 Offline (Simulasi) Tidak memerlukan koneksi internet, menggunakan simulasi AI cerdas

---

📐 Rumus Baku yang Digunakan

Rumus Keterangan
Ss = 2(S − 1) Jumlah sampel sementara
Int = P / S Interval penarikan
R₁ = P − (Ss − S) Sampel pertama
Rᵢ = Rᵢ₋₁ + (k × Int) Sampel berikutnya (k = 1,2,3,4 sesuai urutan)
R₅ⱼ₊₁ = R₁ − (j × Int) Perputaran setiap 5 sampel (j = 1,2,3,...)

Pola Perputaran

Setiap putaran (j) dimulai dari R₁ − (j × Int), lalu dilanjutkan dengan:

· +1×Int
· +2×Int (dari nilai sebelumnya)
· +3×Int (dari nilai sebelumnya)
· +4×Int (dari nilai sebelumnya)

---

🎨 Antarmuka Pengguna (UI/UX)

Aplikasi dirancang dengan 4 tab utama untuk navigasi yang mudah:

Tab Konten
🏠 Beranda Pengenalan metode dan pintasan cepat ke fitur utama
📊 Aplikasi Area kerja utama untuk menghitung sampel dan mengakses fitur AI
🎓 Tutorial Panduan langkah-demi-langkah penggunaan aplikasi
📖 Dokumentasi Dokumentasi lengkap metode dari karya ilmiah asli (file dokumentasi.md)

Keunggulan UI

· Responsif — Dapat diakses dari desktop, tablet, maupun smartphone
· Siap Cetak — Hasil perhitungan dapat dicetak dengan tata letak yang rapi
· Kode Warna — Visualisasi sampel sementara dengan warna (Normal, Duplikat, Unik, Koreksi)
· Highlight — Sampel dengan frekuensi tertinggi ditonjolkan

---

🚀 Cara Penggunaan

1. Persiapan

Pastikan file dokumentasi.md berada di direktori yang sama dengan index.html.

2. Buka Aplikasi

Buka file index.html di browser modern (Chrome, Firefox, Edge, dll.)

3. Masukkan Data Populasi

Pilih salah satu metode input:

· 📝 Item Populasi: Masukkan daftar angka dipisahkan koma (contoh: 1,2,3,4,5,6,7,8,9,10)
· 🔢 Jumlah Populasi (P): Masukkan langsung jumlah total populasi (contoh: 200)

4. Tentukan Jumlah Sampel (S)

Masukkan jumlah sampel tetap yang diinginkan (contoh: 120)

5. Klik "🚀 Proses"

Aplikasi akan:

· Menghitung Ss, Int, dan R₁
· Menampilkan daftar sampel sementara (dengan kode warna)
· Menentukan sampel tetap berdasarkan frekuensi tertinggi
· Menjalankan validasi dan koreksi otomatis jika diperlukan

6. Gunakan AI Panel

Klik tombol "🤖 Buka AI Panel" untuk mengakses 5 fitur AI:

1. Pilih mode API Key (Auto/Custom/Offline)
2. Klik salah satu tombol fitur AI atau "Jalankan Semua Analisis"
3. Baca hasil analisis yang ditampilkan dalam format Markdown

7. Ekspor Hasil

Gunakan tombol "🖨️ Cetak" untuk mencetak hasil atau "📥 Export Laporan" (di AI Panel) untuk mengunduh laporan.

---

🔧 Mekanisme Koreksi Otomatis

Aplikasi dilengkapi dengan validasi cerdas untuk memastikan jumlah sampel tetap sesuai target:

Kondisi Tindakan
Jumlah sampel tetap = S ✅ Tidak ada koreksi, hasil sempurna
Jumlah sampel tetap = S − 1 🔴 Koreksi aktif: Ambil sampel sementara terakhir, kurangi 1, tambahkan ke sampel tetap
Jumlah sampel tetap < S − 1 ⚠️ Tambahkan dari nilai dengan frekuensi tertinggi (duplikat terbaik)

Contoh Kasus Koreksi:

· Target S = 7, nomor unik = 6 → Koreksi aktif
· Sampel sementara terakhir = 4 → 4 − 1 = 3 → Tambahkan 3 ke sampel tetap
· Hasil: 7 sampel tetap (6 unik + 1 koreksi)

---

📁 Struktur File

```
Teknik-Penarikan-Sampel/
│
├── index.html                 # Halaman utama (aplikasi lengkap)
├── dokumentasi.md             # Dokumentasi metode (harus ada)
└── README.md                  # Dokumentasi proyek (file ini)
```

Catatan: Aplikasi ini menggunakan CDN untuk Marked.js (render Markdown). Pastikan koneksi internet aktif untuk memuat dokumentasi.

---

🛠️ Teknologi yang Digunakan

Teknologi Fungsi
HTML5 Struktur halaman
CSS3 Styling dan animasi
JavaScript (ES6+) Logika perhitungan dan AI
Marked.js Render file Markdown ke HTML
Google Gemini API AI (opsional, untuk mode Auto/Custom)
Local Storage Menyimpan API Key dan preferensi pengguna

---

🎯 Tujuan APINDO Innovation Challenge 2026

Kriteria Implementasi
Aplikatif Aplikasi web siap pakai dengan antarmuka intuitif dan responsif
Berdampak AI membantu pengambilan keputusan statistik yang lebih baik dan akurat
Solutif AI memberikan solusi optimal untuk penarikan sampel dengan koreksi otomatis

---

👨‍💻 Kredit & Pengembang

· Metode Ilmiah: SR. Pakpahan, SST
· Pengembangan Aplikasi: Tim Pengembang APINDO 2026
· AI Integration: Ditingkatkan untuk kompetisi APINDO Innovation Challenge 2026

---

📄 Lisensi

Hak cipta © 2026 - SR. Pakpahan, SST

---

🚀 Siap digunakan untuk penelitian, statistik, dan pengambilan keputusan berbasis data!