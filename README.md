# Teknik-Penarikan-Sampel-Metode-Segmen-Terpadu

# 📊 Teknik Penarikan Sampel Metode Segmen Terpadu

Aplikasi web untuk menghitung penarikan sampel menggunakan **Metode Segmen Terpadu — Semua Untuk Satu** yang dikembangkan oleh **SR. Pakpahan, SST**.

URL Link Aplikasi: 
https://srpakpahansst.github.io/Teknik-Penarikan-Sampel-Metode-Segmen-Terpadu/

## 📖 Tentang Metode

Metode Segmen Terpadu adalah teknik penarikan sampel baru yang menggunakan pendekatan **sampel sementara** sebelum menentukan sampel tetap. Metode ini berbeda dengan metode konvensional yang menggunakan Tabel Angka Random (TAR).

### Keunggulan Metode:
- ✅ Setiap unit populasi memiliki peluang yang sama untuk terpilih
- ✅ Menghasilkan sampel yang **representatif** bahkan **sangat representatif**
- ✅ Perhitungan lebih sederhana dan cepat
- ✅ Menggunakan rumus matematis yang sistematis
- ✅ Mendeteksi tingkat kerepresentatifan berdasarkan frekuensi kemunculan

## 📐 Rumus Dasar

| Rumus | Keterangan |
|-------|------------|
| **Ss = 2(S − 1)** | Jumlah sampel sementara |
| **Int = P / S** | Interval penarikan |
| **Rs₁ = P − (Ss − S)** | Sampel pertama |
| **Rsᵢ = Rsᵢ₋₁ + (k × Int)** | Sampel berikutnya (k = 1,2,3,4) |
| **Rs₅ⱼ₊₁ = Rs₁ − (j × Int)** | Perguliran setiap 5 sampel |

### Pola Perguliran:
Setiap putaran (j) dimulai dari **Rs₁ − (j × Int)**, lalu dilanjutkan dengan:
- +1×Int
- +2×Int (dari nilai sebelumnya)
- +3×Int (dari nilai sebelumnya)
- +4×Int (dari nilai sebelumnya)

## 🚀 Cara Penggunaan

### 1. Buka Aplikasi
Buka file `index.html` di browser (Chrome, Firefox, Edge, dll.)

### 2. Masukkan Data
| Field | Deskripsi | Contoh |
|-------|-----------|--------|
| **Jumlah Populasi (P)** | Total unit dalam populasi | 87 |
| **Jumlah Sampel Tetap (S)** | Jumlah sampel yang diinginkan | 12 |

### 3. Klik "Hitung Sampel"
Aplikasi akan menampilkan:
- 📋 Ringkasan perhitungan
- 📐 Rumus dan detail perhitungan
- 📌 Daftar sampel sementara
- 📋 Daftar sampel tetap terpilih
- ⭐ Tingkat kerepresentatifan

### 4. Fitur Tambahan
- **Reset**: Mengembalikan ke nilai default
- **Cetak**: Mencetak hasil perhitungan

## 📊 Contoh Hasil

### Input:
- Populasi (P) = 87
- Sampel Tetap (S) = 12

### Output:
| Parameter | Nilai |
|-----------|-------|
| Sampel Sementara (Ss) | 22 |
| Interval (Int) | 7.25 |
| R₁ | 77 |

**Daftar Sampel Sementara:**
```

77, 84, 12, 34, 63, 70, 77, 5, 26, 55, 63, 70, 84, 19, 48, 55, 63, 77, 12, 41, 48, 55

```

**Daftar Sampel Tetap (12 unit):**
```

5, 12, 19, 26, 34, 41, 48, 55, 63, 70, 77, 84

```

### Tingkat Representatif:

| Tingkat | Nomor | Frekuensi |
|---------|-------|-----------|
| ⭐ Sangat Representatif | 77, 63, 55 | 3x |
| ✦ Representatif | 84, 12, 70, 48 | 2x |
| • Cukup Representatif | 34, 5, 26, 19, 41 | 1x |

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan responsivitas
- **JavaScript (ES6)** - Logika perhitungan

## 📁 Struktur File

```

/
├── index.html          # Aplikasi utama
└── README.md           # Dokumentasi

```

## 🎨 Fitur Visual

- 📱 **Responsif** - Bisa digunakan di desktop maupun mobile
- 🖨️ **Dukungan Cetak** - Hasil dapat dicetak dengan warna yang tetap
- 🎨 **Kode Warna**:
  - 🔵 Normal (biru)
  - 🟡 Duplikat (kuning) - muncul > 1x
  - 🟢 Unik (hijau) - pertama kali muncul
- ⭐ **Highlight** - Sampel dengan frekuensi tertinggi ditandai

## 📖 Interpretasi Hasil

### Sampel Sementara
Daftar semua sampel yang dihasilkan dari proses perguliran. Beberapa nomor mungkin muncul beberapa kali (duplikat).

### Sampel Tetap
Nomor unik yang diambil dari sampel sementara. Jumlahnya harus sama dengan S (jumlah sampel tetap yang diinginkan).

### Tingkat Representatif
- **Tingkat 1 (Sangat Representatif)** : Frekuensi tertinggi
- **Tingkat 2 (Representatif)** : Frekuensi menengah
- **Tingkat 3 (Cukup Representatif)** : Frekuensi terendah

## ⚠️ Catatan Penting

1. **Jumlah sampel tetap (S) harus lebih kecil dari populasi (P)**
2. **Nilai P dan S harus bilangan bulat positif ≥ 2**
3. **Jika sampel tetap < S**, berarti interval terlalu kecil sehingga banyak nilai berulang. Gunakan nilai P dan S yang lebih besar.

## 🔗 Referensi

Berdasarkan artikel:
> [TEKNIK PENARIKAN SAMPEL METODE SEGMEN TERPADU SEMUA UNTUK SATU](https://taospiritministry.blogspot.com/2023/08/teknik-penarikan-sampel-metode-segmen.html?m=1)
>
> Oleh: SR. Pakpahan, SST

## 📝 Lisensi

Hak cipta © 2024 - SR. Pakpahan, SST

---

**Dibuat untuk keperluan statistik dan penelitian.**
```