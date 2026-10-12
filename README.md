# SIP-REKOM APBDes Kecamatan Waru, Kabupaten Penajam Paser Utara

**Sistem Informasi Pelayanan & Generator Surat Rekomendasi Pencairan APBDes (ADD, DD, DBH, dan Bantuan Keuangan)**

Aplikasi web interaktif modern berbasis **HTML5**, **Tailwind CSS**, dan **Vanilla JavaScript** yang dirancang khusus untuk memfasilitasi Seksi Pemberdayaan Masyarakat dan Desa (PMD) / Seksi Ekonomi dan Pembangunan (Ekbang) di Kantor Camat Waru, Kabupaten Penajam Paser Utara dalam menerbitkan, memverifikasi, mencetak, serta mengarsipkan surat rekomendasi pencairan APBDes sesuai standar Tata Naskah Dinas Pemerintahan Republik Indonesia.

---

## 🌟 Fitur Utama

1. **Integrasi Database Google Sheets via Google Apps Script (GAS)**:
   - Menggunakan Google Sheets sebagai database online untuk menyimpan master data desa, nomor rekening kas desa (RKD), dan riwayat pengajuan surat rekomendasi secara otomatis.
   - Fitur **Sinkronisasi 2 Arah** (Tarik Data Master & Push Riwayat Pengajuan).
   - Mode **Offline / Local Database (LocalStorage)** bawaan sehingga aplikasi tetap berjalan 100% lancar walau tanpa koneksi internet atau sebelum URL Google Sheets diatur.

2. **Antarmuka Split View Interaktif**:
   - **Panel Form Input (Kiri)**:
     - Master Desa Terintegrasi: *Desa Api-Api, Desa Sesulu, dan Desa Bangun Mulya* (Kecamatan Waru terdiri dari 3 Desa dan 1 Kelurahan Waru).
     - Fitur **Auto-Fill**: Memilih desa akan otomatis mengisi nama Kepala Desa, Kaur Keuangan / Bendahara Desa, Bank Penyalur (*PT BPD Kaltim Kaltara / Bankaltimtara Capem Waru*), dan Nomor Rekening Kas Desa (RKD).
     - Pilihan Jenis Dana: **ADD** (Alokasi Dana Desa), **DD** (Dana Desa), **DBH** (Bagi Hasil Pajak & Retribusi), dan **Bankeu** (Bantuan Keuangan Khusus).
     - Pilihan Tahap: Tahap I, Tahap II, Tahap III, Salur Sekaligus, hingga Siltap per Triwulan.
     - Generator Penomoran Surat Otomatis dengan kode klasifikasi arsip naskah dinas: `100.3.3.7 / [No] / Ekbang / [Bulan_Romawi] / [Tahun]`.
     - Konversi Mata Uang & **Auto Terbilang Bahasa Indonesia** (hingga miliaran/triliunan rupiah secara instan).
     - Checklist Kelengkapan Berkas Persyaratan Verifikasi Tim Fasilitasi Keuangan Desa Kecamatan Waru.
     - Mode Pengesahan: **TTE Elektronik BSrE (BSSN)** dengan visualisasi QR Code resmi atau **Tanda Tangan Basah & Stempel Dinas Kecamatan Waru**.
   - **Panel Live Preview (Kanan)**:
     - Tata letak dokumen resmi standar pemerintahan Kabupaten Penajam Paser Utara (Kop surat dengan Lambang Daerah *Benuo Taka*, garis pembatas ganda tebal-tipis, tipografi resmi, format penanggalan, nomor, dan perihal).
     - Rincian tabel rekomendasi pencairan, klausul tanggung jawab mutlak (SPTJM), dan tembusan resmi (Bupati PPU, Inspektur Daerah, Kepala DPMD, Kepala Desa ybs, Arsip).
     - Pilihan Kertas Fisik: **Folio / F4 (215 x 330 mm)** dan **A4 (210 x 297 mm)**.
     - Opsi Halaman 2: Lampiran Berita Acara Hasil Verifikasi Kelengkapan Berkas Tim Kecamatan.
     - Zoom kontrol interaktif (Zoom In, Zoom Out, Fit).

3. **Cetak & Arsip PDF Berstandar Tinggi**:
   - Tombol **"Cetak / PDF"** dengan styling CSS `@media print` murni. Elemen navigasi web, form input, dan toolbar otomatis disembunyikan saat mencetak, menghasilkan PDF yang rapi, presisi, dan siap ditandatangani.
   - Tombol **"Simpan Data"**: Menyimpan otomatis ke Google Sheets dan arsip lokal.
   - Drawer **Riwayat Arsip**: Pencarian cepat, filter, fitur *Muat Ulang ke Form* untuk dicetak ulang, hapus arsip, serta tombol *Unduh CSV / Excel*.

---

## 📁 Struktur Berkas

```
d:\RUDIANSYAH\Aplikasku\Rekomendasi\
│
├── index.html               # Halaman web utama (Split View UI, Modal, Drawer, & Print Styles)
├── app.js                   # Logika JavaScript (State, Terbilang, Auto-fill, Live Preview, GAS API, CSV)
├── google_apps_script.gs    # Kode backend Google Apps Script siap deploi ke Google Sheets
└── README.md                # Dokumentasi petunjuk penggunaan dan integrasi
```

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini tidak membutuhkan instalasi server atau dependensi tambahan (zero-dependency).

1. Cukup buka file **`index.html`** langsung menggunakan browser modern apa pun (Google Chrome, Microsoft Edge, Mozilla Firefox, dll):
   - Klik ganda pada berkas `index.html`, atau
   - Buka browser, lalu seret (drag & drop) berkas `index.html` ke jendela browser.
2. Aplikasi akan langsung memuat formulir input di sebelah kiri dan Live Preview dokumen resmi Kecamatan Waru di sebelah kanan.

---

## ⚙️ Panduan Pemasangan Database Google Sheets (Google Apps Script)

Untuk mengaktifkan database online Google Sheets:

### Langkah 1: Buat Spreadsheet Baru
1. Buka browser dan kunjungi [https://sheets.new](https://sheets.new) (atau buat Google Spreadsheet baru di Google Drive Anda).
2. Beri nama spreadsheet, contoh: `DATABASE REKOMENDASI APBDES KECAMATAN WARU`.

### Langkah 2: Pasang Kode Apps Script
1. Di Google Sheets, klik menu **Extensions (Ekstensi)** > **Apps Script**.
2. Hapus seluruh isi kode bawaan di editor Apps Script.
3. Buka file **`google_apps_script.gs`** dari folder aplikasi ini, salin seluruh kodenya, lalu tempelkan (paste) ke editor Apps Script.
4. Klik ikon **Simpan (Save)** atau tekan `Ctrl + S`.

### Langkah 3: Deploy sebagai Web App
1. Klik tombol **Deploy (Terapkan)** di pojok kanan atas > pilih **New deployment (Penerapan baru)**.
2. Klik ikon gerigi di samping *Select type* > pilih **Web app**.
3. Konfigurasikan:
   - **Description**: `SIP Rekom APBDes v1`
   - **Execute as**: `Me (email-anda@gmail.com)`
   - **Who has access**: `Anyone` *(Sangat penting: pilih "Anyone" agar aplikasi web dapat mengirim dan menarik data tanpa diblokir CORS/login)*.
4. Klik **Deploy**. Jika muncul permintaan otorisasi akun Google (*Authorization Required*), klik *Authorize access*, pilih akun Google Anda, klik *Advanced*, lalu klik *Go to (Untitled project) (unsafe)*, dan klik *Allow*.
5. Setelah berhasil, salin **Web app URL** yang muncul (contoh format: `https://script.google.com/macros/s/AKfycb.../exec`).

### Langkah 4: Hubungkan ke Aplikasi Web
1. Buka aplikasi web `index.html`.
2. Klik tombol **"Google Sheets"** di header atas aplikasi.
3. Tempelkan URL Web App yang telah disalin ke dalam kolom **Google Apps Script Web App URL**.
4. Klik tombol **"Tes Koneksi Spreadsheet"**. Jika berhasil, akan muncul notifikasi hijau bertuliskan *"Terhubung ke Spreadsheet"*.
5. Klik **"Simpan Konfigurasi"**.

Sekarang setiap kali Anda menekan tombol **"Simpan Data"**, data rekomendasi pencairan akan otomatis masuk sebagai baris baru di Google Spreadsheet Anda!

---

## 📜 Format Naskah Dinas Kabupaten Penajam Paser Utara

- **Kode Klasifikasi Arsip**: `100.3.3.7` (Fasilitasi Pengelolaan Keuangan dan Aset Desa sesuai Permendagri tentang Klasifikasi Arsip).
- **Format Nomor Surat**: `100.3.3.7 / [Nomor_Urut] / Ekbang / [Bulan_Romawi] / [Tahun]`
- **Tujuan Surat**: Kepala Badan Keuangan dan Aset Daerah (BKAD) Kabupaten Penajam Paser Utara cq. Kuasa Bendahara Umum Daerah (BUD) di Penajam.
- **Tembusan Resmi**:
  1. Bupati Penajam Paser Utara (sebagai laporan)
  2. Inspektur Daerah Kabupaten Penajam Paser Utara
  3. Kepala Dinas Pemberdayaan Masyarakat dan Desa (DPMD) Kabupaten Penajam Paser Utara
  4. Kepala Desa berkenaan
  5. Arsip Kecamatan Waru

---

## 🖨️ Tips Mencetak / Ekspor ke PDF

1. Klik tombol biru **"Cetak / PDF"** di pojok kanan atas aplikasi atau tekan `Ctrl + P`.
2. Pada jendela Print browser:
   - **Destination**: Pilih *"Save as PDF"* (Simpan sebagai PDF) atau nama printer Anda.
   - **Paper Size**: Pilih *Legal* atau *Folio/F4* (jika tersedia), atau *A4*.
   - **Margins**: Pilih *Default* atau *None*.
   - **Options**: Centang *"Background graphics"* agar warna tabel dan watermark tampil sempurna.
3. Klik **Save** / **Print**.
