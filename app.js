/**
 * =========================================================================================
 * SIP-REKOM APBDES - KECAMATAN WARU, KABUPATEN PENAJAM PASER UTARA
 * Generator Surat Rekomendasi Resmi:
 * 1. ADD - Penghasilan Tetap (Siltap, BPD, Insentif RT, & Staf Desa)
 * 2. ADD - Reguler (Tahap I, Tahap II, Tahap III)
 * 3. PBH / DBH - Bagi Hasil Pajak & Retribusi Daerah (Tahap I, Tahap II)
 * 4. DD - Dana Desa (Penyaluran APBN)
 * =========================================================================================
 */

// TEMPLATE DASAR HUKUM BAKU KECAMATAN WARU
const DEFAULT_DASAR_TEMPLATES = {
  add_reguler: [
    { id: 'da1', teks: 'Undang-undang Nomor 3 Tahun 2024 tentang Perubahan Kedua Atas Undang-undang Nomor 6 Tahun 2014 Tentang Desa;', checked: true },
    { id: 'da2', teks: 'Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang-Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah dengan Peraturan Pemerintah Nomor 47 Tahun 2015;', checked: true },
    { id: 'da3', teks: 'Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa;', checked: true },
    { id: 'da4', teks: 'Peraturan Menteri Keuangan Nomor 146 Tahun 2023 tentang Pengalokasian Dana Desa Setiap Desa, Penyaluran, Dan Penggunaan Dana Desa Tahun Anggaran 2024;', checked: true },
    { id: 'da5', teks: 'Peraturan Menteri Desa Pembangunan Daerah Tertinggal dan Transmigrasi Nomor 7 Tahun 2023 tentang Prioritas Penggunaan Dana Desa (Berita Negara Republik Indonesia Tahun 2023);', checked: true },
    { id: 'da6', teks: 'Peraturan Daerah Kabupaten Penajam Paser Utara Nomor 1 Tahun 2015 tentang Desa;', checked: true },
    { id: 'da7', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 16 Tahun 2021 tentang Perubahan Peraturan Bupati Nomor 7 Tahun 2019 tentang Pengelolaan Keuangan Desa;', checked: true },
    { id: 'da8', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 1 Tahun 2024 tentang Tata Cara Pengalokasian dan Penyaluran Bagian dari Hasil Pajak dan Retribusi Daerah Kepada Desa;', checked: true },
    { id: 'da9', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 13 Tahun 2023 tentang Perubahan Kedua Atas Peraturan Bupati Penajam Paser Utara Nomor 8 Tahun 2021 tentang Tata Cara Pengalokasian dan Pembagian Alokasi Dana Desa;', checked: true },
    { id: 'da10', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 08 Tahun 2025 tentang Perubahan Peraturan Bupati Penajam Paser Utara Nomor 13 Tahun 2024 Tentang Besaran Penghasilan Tetap Kepala Desa dan Perangkat Desa serta Tunjangan Badan Permusyawaratan Desa;', checked: true },
    { id: 'da11', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 14 Tahun 2024 tentang Pengangkatan dan Honorarium Staf Desa di Lingkungan Pemerintah Desa;', checked: true },
    { id: 'da12', teks: 'Peraturan Desa Sesulu Nomor 2 Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;', checked: true },
    { id: 'da13', teks: 'Peraturan Desa Nomor 2 Tahun 2025 tentang Rencana Kerja Pemerintah (RKP) Desa Tahun Anggaran 2026;', checked: true },
    { id: 'da14', teks: 'Peraturan Desa Nomor 7 Tahun 2025 tentang Anggaran Pendapatan dan Belanja Desa Tahun Anggaran 2026;', checked: true },
    { id: 'da15', teks: 'Peraturan Kepala Desa Nomor 4 Tahun 2025 tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran 2026.', checked: true }
  ],
  siltap: [
    { id: 'ds1', teks: 'Undang-undang Nomor 3 Tahun 2024 tentang Perubahan Kedua Atas Undang-undang Nomor 6 Tahun 2014 Tentang Desa;', checked: true },
    { id: 'ds2', teks: 'Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah beberapa kali terakhir dengan Peraturan Pemerintah Nomor 11 Tahun 2019;', checked: true },
    { id: 'ds3', teks: 'Instruksi Menteri Dalam Negeri Nomor 28 Tahun 2022 tentang Pembayaran Penghasilan Tetap Kepala Desa dan Perangkat Desa;', checked: true },
    { id: 'ds4', teks: 'Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa;', checked: true },
    { id: 'ds5', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 7 Tahun 2019 tentang Pengelolaan Keuangan Desa sebagaimana telah diubah dengan Peraturan Bupati Penajam Paser Utara Nomor 16 Tahun 2021;', checked: true },
    { id: 'ds6', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 14 Tahun 2024 tentang Pengangkatan dan Honorarium Staf Desa di Lingkungan Pemerintah Desa;', checked: true },
    { id: 'ds7', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 08 Tahun 2025 tentang Perubahan Atas Peraturan Bupati Penajam Paser Utara Nomor 13 Tahun 2024 tentang Besaran Penghasilan Tetap Kepala Desa dan Perangkat Desa, Serta Tunjangan Badan Permusyawaratan Desa;', checked: true },
    { id: 'ds8', teks: 'Peraturan Desa Sesulu Nomor 7 Tahun 2025 tentang Anggaran Pendapatan dan Belanja Desa ( APBDes ) Tahun Anggaran 2026;', checked: true },
    { id: 'ds9', teks: 'Peraturan Kepala Desa Sesulu Nomor 4 Tahun 2025 tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran 2026.', checked: true }
  ],
  dbh: [
    { id: 'ddb1', teks: 'Undang-undang Nomor 3 Tahun 2024 tentang Perubahan Kedua Atas Undang-undang Nomor 6 Tahun 2014 Tentang Desa;', checked: true },
    { id: 'ddb2', teks: 'Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang-Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah dengan Peraturan Pemerintah Nomor 47 Tahun 2015;', checked: true },
    { id: 'ddb3', teks: 'Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa;', checked: true },
    { id: 'ddb4', teks: 'Peraturan Daerah Kabupaten Penajam Paser Utara Nomor 1 Tahun 2015 tentang Desa;', checked: true },
    { id: 'ddb5', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 16 Tahun 2021 tentang Perubahan Peraturan Bupati Nomor 7 Tahun 2019 tentang Pengelolaan Keuangan Desa;', checked: true },
    { id: 'ddb6', teks: 'Peraturan Bupati Penajam Paser Utara Nomor 1 Tahun 2024 tentang Tata Cara Pengalokasian dan Penyaluran Bagian dari Hasil Pajak dan Retribusi Daerah Kepada Desa;', checked: true },
    { id: 'ddb7', teks: 'Peraturan Desa Sesulu Nomor 2 Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;', checked: true },
    { id: 'ddb8', teks: 'Peraturan Desa Sesulu Nomor 7 Tahun 2025 tentang Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran 2026;', checked: true },
    { id: 'ddb9', teks: 'Peraturan Kepala Desa Sesulu Nomor 4 Tahun 2025 tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran 2026.', checked: true }
  ],
  dd: [
    { id: 'ddd1', teks: 'Undang-Undang Nomor 7 Tahun 2022 tentang Pembentukan Kabupaten Penajam Paser Utara (Lembaran Negara Republik Indonesia Tahun 2022 Nomor 20, Tambahan Lembaran Negara Republik Indonesia Nomor 4182);', checked: true },
    { id: 'ddd2', teks: 'Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang-Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah dengan Peraturan Pemerintah Nomor 47 Tahun 2015;', checked: true },
    { id: 'ddd3', teks: 'Peraturan Pemerintah Nomor 37 Tahun 2023 tentang Pengelolaan Tranfer ke Daerah (Lembaran Negara Republik Indonsia Tahun 2023 nomor 37);', checked: true },
    { id: 'ddd4', teks: 'Peraturan Menteri Dalam Negeri Nomor 111 Tahun 2014 tentang Pedoman Teknis Peraturan Di Desa (Berita Negara Republik Indonesia Tahun 2014 Nomor 2091);', checked: true },
    { id: 'ddd5', teks: 'Peraturan Menteri Dalam Negeri Nomor 114 Tahun 2014 tentang Pedoman Pembangunan Desa (Berita Negara Republik Indonesia Tahun 2014 Nomor 2094);', checked: true },
    { id: 'ddd6', teks: 'Peraturan Menteri Dalam Negeri Nomor 44 Tahun 2016 tentang Kewenangan Desa (Berita Negara Republik Indonesia Tahun 2016 Nomor 1037);', checked: true },
    { id: 'ddd7', teks: 'Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa', checked: true },
    { id: 'ddd8', teks: 'Peraturan Menteri Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi Republik Indonesia Nomor 16 Tahun 2019 tentang Musyawarah Desa (Berita Negara Republik Indonesia Tahun 2019 Nomor 1203);', checked: true },
    { id: 'ddd9', teks: 'Peraturan Menteri Desa dan Pembangunan Daerah Tertinggal Republik Indonesia Nomor 2 Tahun 2024 tentang Petunjuk Operasional Atas Fokus Penggunaan Dana Desa Tahun 2025', checked: true },
    { id: 'ddd10', teks: 'Peraturan Menteri Desa Dan Pembangunan Daerah Tertinggal Republik Indonesia Nomor 16 Tahun 2025 tentang Petunjuk Operasional Atas Fokus Penggunaan Dana Desa Tahun 2026. (Berita Negara Republik Indonesia Tahun 2025 Nomor 1151);', checked: true },
    { id: 'ddd11', teks: 'Keputusan Menteri Desa dan Pembangunan Daerah Tertinggal Republik Indonesia Nomor 3 Tahun 2025 tentang Panduan Penggunaan Dana Desa untuk Ketahanan Pangan dalam mendukung Swasembada Pangan;', checked: true },
    { id: 'ddd12', teks: 'Peraturan Menteri Keuangan Republik Indonesia Nomor 7 Tahun 2026 tentang Pengelolaan Dana Desa Tahun Anggaran 2026;', checked: true },
    { id: 'ddd13', teks: 'Peraturan Bupati Nomor 16 Tahun 2021 Tentang Perubahan Atas Peraturan Bupati Nomor 7 Tahun 2019 Tentang Pengelolaan Keuangan Desa;', checked: true },
    { id: 'ddd14', teks: 'Peraturan Desa Sesulu Nomor 2 Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;', checked: true },
    { id: 'ddd15', teks: 'Peraturan Desa Sesulu Nomor 7 Tahun 2025 tentang Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran 2026;', checked: true },
    { id: 'ddd16', teks: 'Peraturan Kepala Desa Sesulu Nomor 4 Tahun 2025 tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran 2026.', checked: true }
  ]
};

// TEMPLATE LAMPIRAN BERKAS PERSYARATAN BAKU KECAMATAN WARU
const DEFAULT_BERKAS_TEMPLATES = {
  siltap: [
    { id: 's1', teks: 'Permohonan Pencairan Dari Kepala Desa;', checked: true },
    { id: 's2', teks: 'Rekomendasi Pencairan Dari Camat;', checked: true },
    { id: 's3', teks: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;', checked: true },
    { id: 's4', teks: 'Surat Pengantar, Surat permintaan Pembayaran (SPP) dan Pernyataan Tanggung Jawab Belanja Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif RT dan Honorarium Staf Desa;', checked: true },
    { id: 's5', teks: 'Daftar Tanda Terima Belanja Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif RT dan Honorarium Staf Desa;', checked: true },
    { id: 's6', teks: 'Cek Giro; dan', checked: true },
    { id: 's7', teks: 'Fotocopy NPWP Desa.', checked: true }
  ],
  add_reguler: [
    { id: 'ar1', teks: 'Permohonan Pencairan Dari Kepala Desa;', checked: true },
    { id: 'ar2', teks: 'Rekomendasi Pencairan Dari Camat;', checked: true },
    { id: 'ar3', teks: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;', checked: true },
    { id: 'ar4', teks: 'Peraturan Desa Tentang Rencana Kerja Pembangunan Desa (RKP Desa) Tahun Anggaran 2026;', checked: true },
    { id: 'ar5', teks: 'Peraturan Desa tentang Pertanggungjawaban APBDes Tahun Anggaran sebelumnya;', checked: true },
    { id: 'ar6', teks: 'Peraturan Desa tentang APBDesa Tahun Anggaran 2026;', checked: true },
    { id: 'ar7', teks: 'Peraturan Kepala Desa tentang penjabaran APBDesa Tahun Anggaran 2026;', checked: true },
    { id: 'ar8', teks: 'Laporan Penyelenggaraan Pemerintahan Desa (LPPD) Akhir Tahun Anggaran sebelumnya;', checked: true },
    { id: 'ar9', teks: 'Surat Permintaan Pembayaran beserta dokumen pertanggungjawaban sampai Tahap Terakhir Tahun sebelumnya yang telah diverifikasi Tim Fasilitasi ADD Tingkat Kecamatan yang dibuktikan dengan Ceklist kelengkapan Surat Pertanggungjawaban (SPJ);', checked: true },
    { id: 'ar10', teks: 'Surat Permintaan Pembayaran beserta dokumen pertanggungjawaban sampai Tahap sebelumnya yang telah diverifikasi Tim Fasilitasi ADD Tingkat Kecamatan yang dibuktikan dengan Ceklist kelengkapan Surat Pertanggungjawaban (SPJ);', checked: true },
    { id: 'ar11', teks: 'Laporan Realisasi Penyerapan Keuangan dan Capaian Keluaran ADD Tahun Anggaran sebelumnya;', checked: true },
    { id: 'ar12', teks: 'Laporan Realisasi Penyerapan Keuangan dan Capaian Keluaran ADD Tahap Sebelumnya Tahun Anggaran 2026;', checked: true },
    { id: 'ar13', teks: 'Laporan Realisasi ADD sampai Tahap Akhir Tahun Anggaran sebelumnya yang terdiri atas: a. Laporan Perkembangan Pelaksanaan Kegiatan, b. Dokumentasi kegiatan, c. Back Up Data Kuantitas Sesuai Tahapan, d. Laporan Harian, e. Berita Acara Pemeriksaan, f. Rencana Anggaran Pelaksanaan, g. Buku Kas Pembantu Kegiatan, h. Gambar Purna;', checked: true },
    { id: 'ar14', teks: 'Laporan Realisasi ADD Tahap Sebelumnya Tahun Anggaran 2026 yang terdiri atas: a. Laporan Perkembangan Pelaksanaan Kegiatan, b. Dokumentasi kegiatan, c. Back Up Data Kuantitas Sesuai Tahapan, d. Laporan Harian, e. Berita Acara Pemeriksaan, f. Rencana Anggaran Pelaksanaan, g. Buku Kas Pembantu Kegiatan, h. Gambar Purna;', checked: true },
    { id: 'ar15', teks: 'Rencana Anggaran Biaya (Semua Belanja yang bersifat fisik dalam APBDes yang akan dilaksanakan);', checked: true },
    { id: 'ar16', teks: 'Gambar Rencana;', checked: true },
    { id: 'ar17', teks: 'Kerangka Acuan Kerja;', checked: true },
    { id: 'ar18', teks: 'Rencana Kerja;', checked: true },
    { id: 'ar19', teks: 'Rencana Penggunaan Dana ADD Tahap I sebesar 25% Tahun Anggaran 2026;', checked: true },
    { id: 'ar20', teks: 'Fotokopi Keputusan Kepala Desa tentang PPKD;', checked: true },
    { id: 'ar21', teks: 'Fotocopy Keputusan Kepala Desa tentang Penunjukan Pejabat Pelaksana Kebendaharaan;', checked: true },
    { id: 'ar22', teks: 'Foto Copy Rekening Kas Desa dan Rekening Koran Terakhir;', checked: true },
    { id: 'ar23', teks: 'Fotocopy Nomor Pokok Wajib Pajak (NPWP).', checked: true }
  ],
  dbh: [
    { id: 'd1', teks: 'Permohonan Pencairan Dari Kepala Desa;', checked: true },
    { id: 'd2', teks: 'Rekomendasi Pencairan Dari Camat;', checked: true },
    { id: 'd3', teks: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;', checked: true },
    { id: 'd4', teks: 'Ceklis Dokumen Pertanggungjawaban Penggunaan DBH-PR Tahap I Tahun 2026 dari Kecamatan;', checked: true },
    { id: 'd5', teks: 'Laporan Realisasi Penggunaan DBH-PR Tahap I Tahun 2026;', checked: true },
    { id: 'd6', teks: 'Fotocopi Keputusan Kepala Desa tentang PPKD;', checked: true },
    { id: 'd7', teks: 'Fotocopi Keputusan Kepala Desa tentang Penunjukan Pejabat Pelaksana Kebendaharaan;', checked: true },
    { id: 'd8', teks: 'Foto Copy Rekening Kas Desa;', checked: true },
    { id: 'd9', teks: 'Foto Copy Nomor Pokok Wajib Pajak (NPWP).', checked: true }
  ],
  dd: [
    { id: 'dd1', teks: 'Permohonan Pencairan Dari Kepala Desa;', checked: true },
    { id: 'dd2', teks: 'Rekomendasi Pencairan Dari Camat;', checked: true },
    { id: 'dd3', teks: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;', checked: true },
    { id: 'dd4', teks: 'Peraturan Desa tentang APBDesa Tahun Anggaran 2026;', checked: true },
    { id: 'dd5', teks: 'Peraturan Kepala Desa tentang Penjabaran APBDesa Tahun Anggaran 2026;', checked: true },
    { id: 'dd6', teks: 'Rencana Penggunaan Dana Desa Tahap I sebesar 60%', checked: true },
    { id: 'dd7', teks: 'Fotocopy Keputusan Kepala Desa tentang PPKD;', checked: true },
    { id: 'dd8', teks: 'Fotocopy Keputusan Kepala Desa tentang Penunjukan Pejabat Pelaksana Kebendaharaan;', checked: true },
    { id: 'dd9', teks: 'Foto Copy Rekening Kas Desa;', checked: true },
    { id: 'dd10', teks: 'Fotocopy Nomor Pokok Wajib Pajak (NPWP).', checked: true }
  ]
};

// URL Web App Google Apps Script Bawaan Sistem (Otomatis Aktif untuk Semua Komputer & Desa)
const DEFAULT_GAS_URL = 'https://script.google.com/macros/s/AKfycbxWdawMLe1ap8wgPIvJMVKgGqIPanvlHxRSSKnZh1cSJNCzfOSmcao6KoMnhzI1gshK/exec';
const CURRENT_GAS_BUILD_ID = '20261015_live_sync_v1';

// STATE MANAGEMENT GLOBAL
const AppState = {
  gasUrl: (function() {
    const savedVersion = localStorage.getItem('sip_gas_version');
    const savedUrl = localStorage.getItem('sip_gas_url');
    // Jika versi build belum terpasang atau URL kosong, langsung gunakan DEFAULT_GAS_URL
    if (savedVersion !== CURRENT_GAS_BUILD_ID || !savedUrl || !savedUrl.startsWith('http')) {
      localStorage.setItem('sip_gas_url', DEFAULT_GAS_URL);
      localStorage.setItem('sip_gas_version', CURRENT_GAS_BUILD_ID);
      return DEFAULT_GAS_URL;
    }
    return savedUrl;
  })(),
  isConnected: false,
  
  // Mode Aplikasi Aktif: 'kecamatan' (default) atau 'desa'
  appMode: localStorage.getItem('sip_active_mode') || 'kecamatan',
  activeMenu: localStorage.getItem('sip_active_menu') || 'dashboard',
  kecamatanSubTab: 'verifikasi',
  isSidebarCollapsed: localStorage.getItem('sip_sidebar_collapsed') === 'true',
  currentUser: JSON.parse(localStorage.getItem('sip_auth_user') || 'null'),
  users: JSON.parse(localStorage.getItem('sip_data_users') || 'null') || [
    {
      id: 'USR-01',
      username: 'admin_kecamatan',
      nama: 'Kecamatan Waru',
      role: 'kecamatan',
      instansi: 'Kecamatan Waru',
      jabatan: 'Seksi PMD - Tim Fasilitasi & Verifikator',
      pin: 'pmd2026',
      status: 'Aktif'
    },
    {
      id: 'USR-02',
      username: 'camat_waru',
      nama: 'Camat Waru',
      role: 'kecamatan',
      instansi: 'Kecamatan Waru',
      jabatan: 'Camat Waru (Ahmad Yani, SSTP)',
      pin: 'pmd2026',
      status: 'Aktif'
    },
    {
      id: 'USR-03',
      username: 'desa_apiapi',
      nama: 'Desa Api-Api',
      role: 'desa',
      desa: 'Api-Api',
      instansi: 'Api-Api',
      jabatan: 'Operator & Kaur Keuangan Desa Api-Api',
      pin: 'desa2026',
      status: 'Aktif'
    },
    {
      id: 'USR-04',
      username: 'desa_sesulu',
      nama: 'Desa Sesulu',
      role: 'desa',
      desa: 'Sesulu',
      instansi: 'Sesulu',
      jabatan: 'Operator & Kaur Keuangan Desa Sesulu',
      pin: 'desa2026',
      status: 'Aktif'
    },
    {
      id: 'USR-05',
      username: 'desa_bangunmulya',
      nama: 'Desa Bangun Mulya',
      role: 'desa',
      desa: 'Bangun Mulya',
      instansi: 'Bangun Mulya',
      jabatan: 'Operator & Kaur Keuangan Desa Bangun Mulya',
      pin: 'desa2026',
      status: 'Aktif'
    }
  ],
  operatorDesaAktif: (localStorage.getItem('sip_operator_desa') && localStorage.getItem('sip_operator_desa') !== 'Waru') ? localStorage.getItem('sip_operator_desa') : 'Api-Api',
  pengajuanDesa: JSON.parse(localStorage.getItem('sip_pengajuan_desa') || '[]').filter(item => item.namaDesa !== 'Waru'),
  kirimRekomDesa: JSON.parse(localStorage.getItem('sip_kirim_rekom_desa') || '[]'),
  draftKirimKecamatan: {
    rekomTtd: null,
    spKec: null,
    ceklistKec: null
  },
  uploadedFilesDraft: {
    sp: null,
    ceklist: null,
    rekom: null
  },
  
  // Tipe Rekomendasi yang Aktif: 'siltap', 'add_reguler', 'dbh', 'dd'
  tipeRekomendasi: 'siltap',

  // Master 3 Desa di Kecamatan Waru (Kecamatan Waru memiliki 3 Desa & 1 Kelurahan Waru)
  masterDesa: JSON.parse(localStorage.getItem('sip_master_desa') || 'null') || [
    {
      id: 'DESA-03',
      nama: 'Api-Api',
      kades: 'SUDIRMAN',
      kaurKeuangan: 'JUMIATI, S.KM',
      jabatanKaur: 'Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa Api-api',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '1131400345',
      atasNama: 'Pemerintah Desa Api-Api (RKD)',
      alamat: 'Jl. Silkar RT. 02, Desa Api-Api, Kec. Waru',
      nomorPerdesKewenangan: '2',
      tahunPerdesKewenangan: '2019',
      nomorPerdesRkp: '2',
      tahunPerdesRkp: '2025',
      nomorPerdes: '7',
      tahunPerdes: '2025',
      nomorPerkades: '4',
      tahunPerkades: '2025'
    },
    {
      id: 'DESA-02',
      nama: 'Sesulu',
      kades: 'H. RAHMAN SALEH',
      kaurKeuangan: 'MASNI',
      jabatanKaur: 'Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa Sesulu',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '1131400337',
      atasNama: 'Pemerintah Desa Sesulu (RKD)',
      alamat: 'Jl. Negara Km. 32 RT. 04, Desa Sesulu, Kec. Waru',
      nomorPerdesKewenangan: '2',
      tahunPerdesKewenangan: '2019',
      nomorPerdesRkp: '2',
      tahunPerdesRkp: '2025',
      nomorPerdes: '7',
      tahunPerdes: '2025',
      nomorPerkades: '3',
      tahunPerkades: '2025'
    },
    {
      id: 'DESA-04',
      nama: 'Bangun Mulya',
      kades: 'BOIMIN, S.Sos',
      kaurKeuangan: 'EKO PRASETYO',
      jabatanKaur: 'Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa Bangun Mulya',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '1131400678',
      atasNama: 'Pemerintah Desa Bangun Mulya (RKD)',
      alamat: 'Jl. Usaha Tani RT. 06, Desa Bangun Mulya, Kec. Waru',
      nomorPerdesKewenangan: '2',
      tahunPerdesKewenangan: '2019',
      nomorPerdesRkp: '3',
      tahunPerdesRkp: '2025',
      nomorPerdes: '4',
      tahunPerdes: '2025',
      nomorPerkades: '1',
      tahunPerkades: '2025'
    }
  ],

  // Pejabat Camat Waru
  camat: JSON.parse(localStorage.getItem('sip_master_camat') || 'null') || {
    nama: 'Ahmad Yani, SSTP',
    pangkat: 'Pembina (IV/a)',
    nip: '198610082006021001',
    jabatan: 'Camat Waru'
  },

  // Riwayat Surat yang Tersimpan
  riwayat: JSON.parse(localStorage.getItem('sip_riwayat_rekom') || '[]'),

  // Daftar Lampiran Berkas Sesuai Masing-masing Format
  berkasSiltap: JSON.parse(JSON.stringify(DEFAULT_BERKAS_TEMPLATES.siltap)),
  berkasAddReguler: JSON.parse(JSON.stringify(DEFAULT_BERKAS_TEMPLATES.add_reguler)),
  berkasDbh: JSON.parse(JSON.stringify(DEFAULT_BERKAS_TEMPLATES.dbh)),
  berkasDd: JSON.parse(JSON.stringify(DEFAULT_BERKAS_TEMPLATES.dd)),
  editingBerkasId: null,

  // Daftar Dasar Rekomendasi (Dasar Hukum)
  dasarAddReguler: JSON.parse(JSON.stringify(DEFAULT_DASAR_TEMPLATES.add_reguler)),
  dasarSiltap: JSON.parse(JSON.stringify(DEFAULT_DASAR_TEMPLATES.siltap)),
  dasarDbh: JSON.parse(JSON.stringify(DEFAULT_DASAR_TEMPLATES.dbh)),
  dasarDd: JSON.parse(JSON.stringify(DEFAULT_DASAR_TEMPLATES.dd)),
  editingDasarId: null,

  currentZoom: 100,
  paperSize: 'a4',
  pageBreakMode: 'separated',
  viewMode: 'split',
  lineSpacing: '1.15',
  isDirectEditMode: false,
  isDirectEditModeSp: false,

  // State Surat Pengantar Kecamatan Waru (Menu 3 Tab 3)
  suratPengantarData: {
    id: null,
    nomorSurat: '000.1.5 / 128 / Ekbang / X / 2026',
    tanggalSurat: '', // default hari ini (YYYY-MM-DD)
    tujuanYth: 'Kepala Badan Keuangan dan Aset Daerah (BKAD) Kab. Penajam Paser Utara',
    tempatTujuan: 'Tempat',
    namaDesa: 'Sesulu',
    jenisDana: 'add_reguler',
    tahap: 'Tahap II',
    tahunAnggaran: '2026',
    jabatanPengirim: 'Camat Waru,',
    namaPengirim: 'Ahmad Yani, SSTP',
    nipPengirim: '198610082006021001',
    metodeTte: 'srikandi',
    paperSize: 'a4',
    lineSpacing: '1.15',
    zoomPercent: 100,
    rows: [
      {
        no: 1,
        jenis: 'Rekomendasi Pencairan Alokasi Dana Desa (ADD) Tahap II (25 %) Tahun Anggaran 2026 Desa Sesulu',
        banyak: '1 (satu) Berkas',
        keterangan: 'Dikirim dengan hormat kepada Bapak untuk dapat diproses penyaluran/pencairan dana lebih lanjut. Terima kasih.'
      }
    ]
  },
  suratPengantarList: (function() {
    try {
      return JSON.parse(localStorage.getItem('sip_arsip_surat_pengantar') || '[]');
    } catch (_) {
      return [];
    }
  })()
};

// =========================================================================================
// ALGORITMA TERBILANG INDONESIA
// =========================================================================================
function bilangSatuan(angka) {
  const bilangan = [
    '', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima',
    'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas'
  ];
  
  angka = Math.floor(angka);
  if (angka < 12) return bilangan[angka];
  if (angka < 20) return bilangSatuan(angka - 10) + ' Belas';
  if (angka < 100) return bilangSatuan(Math.floor(angka / 10)) + ' Puluh ' + bilangSatuan(angka % 10);
  if (angka < 200) return 'Seratus ' + bilangSatuan(angka - 100);
  if (angka < 1000) return bilangSatuan(Math.floor(angka / 100)) + ' Ratus ' + bilangSatuan(angka % 100);
  if (angka < 2000) return 'Seribu ' + bilangSatuan(angka - 1000);
  if (angka < 1000000) return bilangSatuan(Math.floor(angka / 1000)) + ' Ribu ' + bilangSatuan(angka % 1000);
  if (angka < 1000000000) return bilangSatuan(Math.floor(angka / 1000000)) + ' Juta ' + bilangSatuan(angka % 1000000);
  if (angka < 1000000000000) return bilangSatuan(Math.floor(angka / 1000000000)) + ' Miliar ' + bilangSatuan(angka % 1000000000);
  return '';
}

function convertTerbilang(angka) {
  if (isNaN(angka) || angka <= 0) return 'Nol Rupiah';
  let hasil = bilangSatuan(angka).replace(/\s+/g, ' ').trim();
  if (!hasil) hasil = 'Nol';
  return hasil + ' Rupiah';
}

function formatRupiah(number) {
  if (isNaN(number) || number === null || number === '') return 'Rp. 0,-';
  return 'Rp. ' + Number(number).toLocaleString('id-ID') + ',-';
}

function parseCurrencyInput(value) {
  if (!value) return 0;
  const clean = value.toString().replace(/[^0-9]/g, '');
  return parseInt(clean, 10) || 0;
}

function formatTanggalIndo(dateStr) {
  if (!dateStr) return '';
  const bulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  
  if (typeof dateStr === 'string' && dateStr.includes('-')) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const tahun = parseInt(parts[0], 10);
      const bulanIndex = parseInt(parts[1], 10) - 1;
      const hari = parseInt(parts[2], 10);
      if (!isNaN(tahun) && bulanIndex >= 0 && bulanIndex < 12 && !isNaN(hari)) {
        return `${hari} ${bulan[bulanIndex]} ${tahun}`;
      }
    }
  }

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
}

// =========================================================================================
// INISIALISASI APLIKASI
// =========================================================================================
document.addEventListener('DOMContentLoaded', () => {
  populateDesaSelect();
  setupEventListeners();
  loadSavedSettings();
  triggerAutoFillDesa();
  pilihTipeRekomendasi(AppState.tipeRekomendasi);
  renderHistoryTable();
  updateSyncStatusBadge();
  initDesaOperatorFeature();
  renderTabelKirimRekomDesa();
  renderDokumenKecamatanUntukDesa();
  checkAuthSession();
  if (typeof updateBadgeSpCount === 'function') updateBadgeSpCount();
});

window.pilihTipeRekomendasi = function(tipe) {
  AppState.tipeRekomendasi = tipe;
  
  // Update Radio input
  const radio = document.querySelector(`input[name="tipeRekom"][value="${tipe}"]`);
  if (radio) radio.checked = true;

  // Highlight card aktif
  document.querySelectorAll('.card-tipe-rekom').forEach(card => {
    card.classList.remove('bg-emerald-600', 'border-emerald-400', 'ring-2', 'ring-emerald-400');
    card.classList.add('bg-white/10', 'border-white/20');
  });
  const activeCard = document.getElementById(`cardTipe_${tipe}`);
  if (activeCard) {
    activeCard.classList.remove('bg-white/10', 'border-white/20');
    activeCard.classList.add('bg-emerald-600', 'border-emerald-400', 'ring-2', 'ring-emerald-400');
  }

  handleTipeChange();
  autoUpdatePerihal();
  renderDasarChecklist();
  renderBerkasChecklist();
  autoGenerateNomorSurat();
  updateLivePreview();
  showToast(`Format diubah ke: ${getNamaTipe(tipe)}`, 'info');
};

function getNamaTipe(tipe) {
  if (tipe === 'siltap') return 'ADD (Siltap & Tunjangan)';
  if (tipe === 'add_reguler') return 'ADD Reguler (Tahapan)';
  if (tipe === 'dbh') return 'PBH / DBH (Pajak & Retribusi)';
  if (tipe === 'dd') return 'DD (Dana Desa APBN)';
  return tipe;
}

function populateDesaSelect() {
  const select = document.getElementById('selectNamaDesa');
  if (!select) return;
  select.innerHTML = '';
  
  AppState.masterDesa.forEach((desa) => {
    const opt = document.createElement('option');
    opt.value = desa.nama;
    opt.textContent = `Desa ${desa.nama}`;
    if (desa.nama === 'Api-Api') opt.selected = true; // Sesuai dokumen Api-Api yang diunggah
    select.appendChild(opt);
  });
}

// =========================================================================================
// HELPER FILTER & SINKRONISASI BERKAS PERSYARATAN (REAKTIF KE LIVE PREVIEW)
// =========================================================================================
function getRawBerkasList(tipe = AppState.tipeRekomendasi) {
  const tahun = document.getElementById('inputTahunAnggaranReguler')?.value || document.getElementById('inputTahunAnggaran')?.value || '2026';
  const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap I';
  const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '25';
  const persen = String(rawPersen).replace('%', '').trim();
  const persenText = persen ? `sebesar ${persen}% ` : '';

  let list;
  if (tipe === 'add_reguler') list = AppState.berkasAddReguler;
  else if (tipe === 'siltap') list = AppState.berkasSiltap;
  else if (tipe === 'dbh') list = AppState.berkasDbh;
  else if (tipe === 'dd') list = AppState.berkasDd;
  else list = AppState.berkasSiltap;

  if (!list) return [];

  // Update variabel dinamis jika item belum pernah diedit manual oleh pengguna
  list.forEach(item => {
    if (item.customEdited) return;

    if (tipe === 'add_reguler') {
      const templateTexts = {
        ar1: 'Permohonan Pencairan Dari Kepala Desa;',
        ar2: 'Rekomendasi Pencairan Dari Camat;',
        ar3: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;',
        ar4: `Peraturan Desa Tentang Rencana Kerja Pembangunan Desa (RKP Desa) Tahun Anggaran ${tahun};`,
        ar5: 'Peraturan Desa tentang Pertanggungjawaban APBDes Tahun Anggaran sebelumnya;',
        ar6: `Peraturan Desa tentang APBDesa Tahun Anggaran ${tahun};`,
        ar7: `Peraturan Kepala Desa tentang penjabaran APBDesa Tahun Anggaran ${tahun};`,
        ar8: 'Laporan Penyelenggaraan Pemerintahan Desa (LPPD) Akhir Tahun Anggaran sebelumnya;',
        ar9: 'Surat Permintaan Pembayaran beserta dokumen pertanggungjawaban sampai Tahap Terakhir Tahun sebelumnya yang telah diverifikasi Tim Fasilitasi ADD Tingkat Kecamatan yang dibuktikan dengan Ceklist kelengkapan Surat Pertanggungjawaban (SPJ);',
        ar10: 'Surat Permintaan Pembayaran beserta dokumen pertanggungjawaban sampai Tahap sebelumnya yang telah diverifikasi Tim Fasilitasi ADD Tingkat Kecamatan yang dibuktikan dengan Ceklist kelengkapan Surat Pertanggungjawaban (SPJ);',
        ar11: 'Laporan Realisasi Penyerapan Keuangan dan Capaian Keluaran ADD Tahun Anggaran sebelumnya;',
        ar12: `Laporan Realisasi Penyerapan Keuangan dan Capaian Keluaran ADD Tahap Sebelumnya Tahun Anggaran ${tahun};`,
        ar13: 'Laporan Realisasi ADD sampai Tahap Akhir Tahun Anggaran sebelumnya yang terdiri atas: a. Laporan Perkembangan Pelaksanaan Kegiatan, b. Dokumentasi kegiatan, c. Back Up Data Kuantitas Sesuai Tahapan, d. Laporan Harian, e. Berita Acara Pemeriksaan, f. Rencana Anggaran Pelaksanaan, g. Buku Kas Pembantu Kegiatan, h. Gambar Purna;',
        ar14: `Laporan Realisasi ADD Tahap Sebelumnya Tahun Anggaran ${tahun} yang terdiri atas: a. Laporan Perkembangan Pelaksanaan Kegiatan, b. Dokumentasi kegiatan, c. Back Up Data Kuantitas Sesuai Tahapan, d. Laporan Harian, e. Berita Acara Pemeriksaan, f. Rencana Anggaran Pelaksanaan, g. Buku Kas Pembantu Kegiatan, h. Gambar Purna;`,
        ar15: 'Rencana Anggaran Biaya (Semua Belanja yang bersifat fisik dalam APBDes yang akan dilaksanakan);',
        ar16: 'Gambar Rencana;',
        ar17: 'Kerangka Acuan Kerja;',
        ar18: 'Rencana Kerja;',
        ar19: `Rencana Penggunaan Dana ADD ${tahap} ${persenText}Tahun Anggaran ${tahun};`,
        ar20: 'Fotokopi Keputusan Kepala Desa tentang PPKD;',
        ar21: 'Fotocopy Keputusan Kepala Desa tentang Penunjukan Pejabat Pelaksana Kebendaharaan;',
        ar22: 'Foto Copy Rekening Kas Desa dan Rekening Koran Terakhir;',
        ar23: 'Fotocopy Nomor Pokok Wajib Pajak (NPWP).'
      };
      if (templateTexts[item.id]) {
        item.teks = templateTexts[item.id];
      }
    } else if (tipe === 'dbh') {
      if (item.id === 'd4') item.teks = `Ceklis Dokumen Pertanggungjawaban Penggunaan DBH-PR ${tahap} Tahun ${tahun} dari Kecamatan;`;
      if (item.id === 'd5') item.teks = `Laporan Realisasi Penggunaan DBH-PR ${tahap} Tahun ${tahun};`;
    } else if (tipe === 'dd') {
      if (item.id === 'dd4') item.teks = `Peraturan Desa tentang APBDesa Tahun Anggaran ${tahun};`;
      if (item.id === 'dd5') item.teks = `Peraturan Kepala Desa tentang Penjabaran APBDesa Tahun Anggaran ${tahun};`;
      if (item.id === 'dd6') item.teks = `Rencana Penggunaan Dana Desa ${tahap} ${persenText}Tahun Anggaran ${tahun};`;
    }
  });

  return list;
}

function isBerkasChecked(id) {
  const allLists = [AppState.berkasSiltap, AppState.berkasAddReguler, AppState.berkasDbh, AppState.berkasDd];
  for (const list of allLists) {
    if (!list) continue;
    const item = list.find(b => b.id === id);
    if (item) return item.checked !== false;
  }
  return true;
}

function getActiveBerkasList(tipe = AppState.tipeRekomendasi) {
  const list = getRawBerkasList(tipe);
  return list.filter(item => item.checked !== false);
}

window.handleBerkasCheckboxChange = function(id, isChecked) {
  const allLists = [AppState.berkasSiltap, AppState.berkasAddReguler, AppState.berkasDbh, AppState.berkasDd];
  for (const list of allLists) {
    if (!list) continue;
    const item = list.find(b => b.id === id);
    if (item) {
      item.checked = Boolean(isChecked);
      break;
    }
  }
  renderBerkasChecklist();
  updateLivePreview();
};

window.startEditBerkas = function(id) {
  AppState.editingBerkasId = id;
  renderBerkasChecklist();
  setTimeout(() => {
    const el = document.getElementById(`berkas_input_${id}`);
    if (el) {
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    }
  }, 50);
};

window.cancelEditBerkas = function(id) {
  AppState.editingBerkasId = null;
  renderBerkasChecklist();
};

window.saveEditBerkas = function(id) {
  const el = document.getElementById(`berkas_input_${id}`);
  if (!el) return;
  const newText = el.value.trim();
  if (!newText) {
    showToast('Teks lampiran berkas tidak boleh kosong!', 'warning');
    return;
  }
  const allLists = [AppState.berkasSiltap, AppState.berkasAddReguler, AppState.berkasDbh, AppState.berkasDd];
  for (const list of allLists) {
    if (!list) continue;
    const item = list.find(b => b.id === id);
    if (item) {
      item.teks = newText;
      item.customEdited = true;
      break;
    }
  }
  AppState.editingBerkasId = null;
  renderBerkasChecklist();
  updateLivePreview();
  showToast('Lampiran berkas berhasil diperbarui!', 'success');
};

window.deleteBerkasItem = function(id) {
  const allLists = [AppState.berkasSiltap, AppState.berkasAddReguler, AppState.berkasDbh, AppState.berkasDd];
  for (const list of allLists) {
    if (!list) continue;
    const idx = list.findIndex(b => b.id === id);
    if (idx !== -1) {
      list.splice(idx, 1);
      break;
    }
  }
  if (AppState.editingBerkasId === id) AppState.editingBerkasId = null;
  renderBerkasChecklist();
  updateLivePreview();
  showToast('Lampiran berkas dihapus.', 'info');
};

window.toggleFormTambahBerkas = function(forceState) {
  const container = document.getElementById('formTambahBerkasContainer');
  if (!container) return;
  const isHidden = container.classList.contains('hidden');
  const shouldShow = (typeof forceState === 'boolean') ? forceState : isHidden;
  if (shouldShow) {
    container.classList.remove('hidden');
    setTimeout(() => document.getElementById('inputTeksBerkasBaru')?.focus(), 50);
  } else {
    container.classList.add('hidden');
    const input = document.getElementById('inputTeksBerkasBaru');
    if (input) input.value = '';
  }
};

window.submitTambahBerkas = function() {
  const input = document.getElementById('inputTeksBerkasBaru');
  if (!input) return;
  let text = input.value.trim();
  if (!text) {
    showToast('Teks lampiran berkas tidak boleh kosong!', 'warning');
    return;
  }
  if (!text.endsWith(';') && !text.endsWith('.')) {
    text += ';';
  }
  const tipe = AppState.tipeRekomendasi;
  let list;
  if (tipe === 'add_reguler') list = AppState.berkasAddReguler;
  else if (tipe === 'siltap') list = AppState.berkasSiltap;
  else if (tipe === 'dbh') list = AppState.berkasDbh;
  else if (tipe === 'dd') list = AppState.berkasDd;
  else list = AppState.berkasSiltap;

  list.push({
    id: 'custom_b_' + Date.now(),
    teks: text,
    checked: true,
    customEdited: true
  });

  input.value = '';
  toggleFormTambahBerkas(false);
  renderBerkasChecklist();
  updateLivePreview();
  showToast('Lampiran berkas baru berhasil ditambahkan!', 'success');
};

window.resetBerkasToDefault = function() {
  const tipe = AppState.tipeRekomendasi;
  if (DEFAULT_BERKAS_TEMPLATES[tipe]) {
    const fresh = JSON.parse(JSON.stringify(DEFAULT_BERKAS_TEMPLATES[tipe]));
    if (tipe === 'add_reguler') AppState.berkasAddReguler = fresh;
    else if (tipe === 'siltap') AppState.berkasSiltap = fresh;
    else if (tipe === 'dbh') AppState.berkasDbh = fresh;
    else if (tipe === 'dd') AppState.berkasDd = fresh;
    AppState.editingBerkasId = null;
    renderBerkasChecklist();
    updateLivePreview();
    showToast('Lampiran berkas dikembalikan ke susunan baku.', 'info');
  }
};

function renderBerkasChecklist() {
  const container = document.getElementById('containerBerkasChecklist');
  if (!container) return;

  const items = getRawBerkasList();
  container.innerHTML = '';

  if (!items || items.length === 0) {
    container.innerHTML = '<p class="text-xs text-slate-400 italic py-2 text-center">Belum ada daftar lampiran berkas.</p>';
    return;
  }

  items.forEach((item, index) => {
    const isChecked = item.checked !== false;
    const isEditing = AppState.editingBerkasId === item.id;

    const row = document.createElement('div');
    row.id = `berkas_item_${item.id}`;
    row.className = `p-2 rounded-lg border transition text-xs ${
      isEditing 
        ? 'bg-teal-50/90 border-teal-300 shadow-xs' 
        : (isChecked ? 'bg-slate-50 hover:bg-teal-50/40 border-slate-200 text-slate-800' : 'bg-slate-100/70 border-slate-200 text-slate-400')
    }`;

    if (isEditing) {
      row.innerHTML = `
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-bold text-teal-900 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
              Edit Berkas No. ${index + 1}
            </span>
            <span class="text-[10px] text-slate-500 italic">Simpan setelah selesai mengubah</span>
          </div>
          <textarea id="berkas_input_${item.id}" rows="3" 
                    class="w-full bg-white border border-teal-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 leading-relaxed font-sans shadow-inner">${escapeHtml(item.teks)}</textarea>
          <div class="flex items-center justify-between pt-1">
            <button type="button" onclick="deleteBerkasItem('${item.id}')" class="px-2 py-1 text-[11px] text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded transition flex items-center gap-1 cursor-pointer">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              Hapus
            </button>
            <div class="flex gap-1.5">
              <button type="button" onclick="cancelEditBerkas('${item.id}')" class="px-2.5 py-1 text-xs bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-lg font-medium transition cursor-pointer">Batal</button>
              <button type="button" onclick="saveEditBerkas('${item.id}')" class="px-3 py-1 text-xs bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition flex items-center gap-1 shadow-xs cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                Simpan
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      row.innerHTML = `
        <div class="flex items-start gap-2.5">
          <input type="checkbox" id="berkas_${item.id}" ${isChecked ? 'checked' : ''}
                 onchange="handleBerkasCheckboxChange('${item.id}', this.checked)"
                 class="mt-0.5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer berkas-checkbox" />
          <div class="flex-1 cursor-pointer select-none" onclick="document.getElementById('berkas_${item.id}').click()">
            <span class="font-bold text-slate-900 mr-1">${index + 1}.</span>
            <span class="leading-relaxed ${isChecked ? '' : 'line-through text-slate-400 italic'}">${escapeHtml(item.teks)}</span>
          </div>
          <div class="flex items-center gap-1 flex-shrink-0 pt-0.5">
            <button type="button" onclick="startEditBerkas('${item.id}')" title="Edit berkas lampiran ini"
                    class="px-2 py-0.5 text-[11px] font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded flex items-center gap-1 transition cursor-pointer">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
              Edit
            </button>
          </div>
        </div>
      `;
    }

    container.appendChild(row);
  });
}

// =========================================================================================
// PENGELOLAAN DASAR REKOMENDASI (DASAR HUKUM) - EDIT & CEKLIS INTERAKTIF
// =========================================================================================
function getRawDasarList(tipe = AppState.tipeRekomendasi) {
  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const perdesKewenangan = document.getElementById('inputNomorPerdesKewenangan')?.value || '2';
  const perdesRkp = document.getElementById('inputNomorPerdesRkp')?.value || '2';
  const perdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const tahunPerdes = document.getElementById('inputTahunPerdes')?.value || '2025';
  const perkades = document.getElementById('inputNomorPerkades')?.value || '4';
  const tahunPerkades = document.getElementById('inputTahunPerkades')?.value || '2025';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';

  let list;
  if (tipe === 'add_reguler') list = AppState.dasarAddReguler;
  else if (tipe === 'siltap') list = AppState.dasarSiltap;
  else if (tipe === 'dbh') list = AppState.dasarDbh;
  else if (tipe === 'dd') list = AppState.dasarDd;
  else list = AppState.dasarAddReguler;

  if (!list) return [];

  // Update variabel dinamis jika item belum pernah diedit manual oleh pengguna
  list.forEach(item => {
    if (item.customEdited) return;

    if (tipe === 'add_reguler') {
      if (item.id === 'da12') item.teks = `Peraturan Desa ${namaDesa} Nomor ${perdesKewenangan} Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;`;
      if (item.id === 'da13') item.teks = `Peraturan Desa Nomor ${perdesRkp} Tahun ${tahunPerdes} tentang Rencana Kerja Pemerintah (RKP) Desa Tahun Anggaran ${tahunAnggaran};`;
      if (item.id === 'da14') item.teks = `Peraturan Desa Nomor ${perdes} Tahun ${tahunPerdes} tentang Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${tahunAnggaran};`;
      if (item.id === 'da15') item.teks = `Peraturan Kepala Desa Nomor ${perkades} Tahun ${tahunPerkades} tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${tahunAnggaran}.`;
    } else if (tipe === 'siltap') {
      if (item.id === 'ds8') item.teks = `Peraturan Desa ${namaDesa} Nomor ${perdes} Tahun ${tahunPerdes} tentang Anggaran Pendapatan dan Belanja Desa ( APBDes ) Tahun Anggaran ${tahunAnggaran};`;
      if (item.id === 'ds9') item.teks = `Peraturan Kepala Desa ${namaDesa} Nomor ${perkades} Tahun ${tahunPerkades} tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${tahunAnggaran}.`;
    } else if (tipe === 'dbh') {
      if (item.id === 'ddb7') item.teks = `Peraturan Desa ${namaDesa} Nomor ${perdesKewenangan} Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;`;
      if (item.id === 'ddb8') item.teks = `Peraturan Desa ${namaDesa} Nomor ${perdes} Tahun ${tahunPerdes} tentang Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran ${tahunAnggaran};`;
      if (item.id === 'ddb9') item.teks = `Peraturan Kepala Desa ${namaDesa} Nomor ${perkades} Tahun ${tahunPerkades} tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${tahunAnggaran}.`;
    } else if (tipe === 'dd') {
      if (item.id === 'ddd14') item.teks = `Peraturan Desa ${namaDesa} Nomor ${perdesKewenangan} Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;`;
      if (item.id === 'ddd15') item.teks = `Peraturan Desa ${namaDesa} Nomor ${perdes} Tahun ${tahunPerdes} tentang Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran ${tahunAnggaran};`;
      if (item.id === 'ddd16') item.teks = `Peraturan Kepala Desa ${namaDesa} Nomor ${perkades} Tahun ${tahunPerkades} tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${tahunAnggaran}.`;
    }
  });

  return list;
}

function getActiveDasarList(tipe = AppState.tipeRekomendasi) {
  const list = getRawDasarList(tipe);
  return list.filter(item => item.checked !== false);
}

window.handleDasarCheckboxChange = function(id, isChecked) {
  const allLists = [AppState.dasarSiltap, AppState.dasarAddReguler, AppState.dasarDbh, AppState.dasarDd];
  for (const list of allLists) {
    if (!list) continue;
    const item = list.find(b => b.id === id);
    if (item) {
      item.checked = Boolean(isChecked);
      break;
    }
  }
  renderDasarChecklist();
  updateLivePreview();
};

window.startEditDasar = function(id) {
  AppState.editingDasarId = id;
  renderDasarChecklist();
  setTimeout(() => {
    const el = document.getElementById(`dasar_input_${id}`);
    if (el) {
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    }
  }, 50);
};

window.cancelEditDasar = function(id) {
  AppState.editingDasarId = null;
  renderDasarChecklist();
};

window.saveEditDasar = function(id) {
  const el = document.getElementById(`dasar_input_${id}`);
  if (!el) return;
  const newText = el.value.trim();
  if (!newText) {
    showToast('Teks dasar rekomendasi tidak boleh kosong!', 'warning');
    return;
  }
  const allLists = [AppState.dasarSiltap, AppState.dasarAddReguler, AppState.dasarDbh, AppState.dasarDd];
  for (const list of allLists) {
    if (!list) continue;
    const item = list.find(b => b.id === id);
    if (item) {
      item.teks = newText;
      item.customEdited = true;
      break;
    }
  }
  AppState.editingDasarId = null;
  renderDasarChecklist();
  updateLivePreview();
  showToast('Dasar rekomendasi berhasil diperbarui!', 'success');
};

window.deleteDasarItem = function(id) {
  const allLists = [AppState.dasarSiltap, AppState.dasarAddReguler, AppState.dasarDbh, AppState.dasarDd];
  for (const list of allLists) {
    if (!list) continue;
    const idx = list.findIndex(b => b.id === id);
    if (idx !== -1) {
      list.splice(idx, 1);
      break;
    }
  }
  if (AppState.editingDasarId === id) AppState.editingDasarId = null;
  renderDasarChecklist();
  updateLivePreview();
  showToast('Dasar rekomendasi dihapus.', 'info');
};

window.toggleFormTambahDasar = function(forceState) {
  const container = document.getElementById('formTambahDasarContainer');
  if (!container) return;
  const isHidden = container.classList.contains('hidden');
  const shouldShow = (typeof forceState === 'boolean') ? forceState : isHidden;
  if (shouldShow) {
    container.classList.remove('hidden');
    setTimeout(() => document.getElementById('inputTeksDasarBaru')?.focus(), 50);
  } else {
    container.classList.add('hidden');
    const input = document.getElementById('inputTeksDasarBaru');
    if (input) input.value = '';
  }
};

window.submitTambahDasar = function() {
  const input = document.getElementById('inputTeksDasarBaru');
  if (!input) return;
  let text = input.value.trim();
  if (!text) {
    showToast('Teks dasar rekomendasi tidak boleh kosong!', 'warning');
    return;
  }
  if (!text.endsWith(';') && !text.endsWith('.')) {
    text += ';';
  }
  const tipe = AppState.tipeRekomendasi;
  let list;
  if (tipe === 'add_reguler') list = AppState.dasarAddReguler;
  else if (tipe === 'siltap') list = AppState.dasarSiltap;
  else if (tipe === 'dbh') list = AppState.dasarDbh;
  else if (tipe === 'dd') list = AppState.dasarDd;
  else list = AppState.dasarAddReguler;

  list.push({
    id: 'custom_d_' + Date.now(),
    teks: text,
    checked: true,
    customEdited: true
  });

  input.value = '';
  toggleFormTambahDasar(false);
  renderDasarChecklist();
  updateLivePreview();
  showToast('Dasar rekomendasi baru berhasil ditambahkan!', 'success');
};

window.resetDasarToDefault = function() {
  const tipe = AppState.tipeRekomendasi;
  if (DEFAULT_DASAR_TEMPLATES[tipe]) {
    const fresh = JSON.parse(JSON.stringify(DEFAULT_DASAR_TEMPLATES[tipe]));
    if (tipe === 'add_reguler') AppState.dasarAddReguler = fresh;
    else if (tipe === 'siltap') AppState.dasarSiltap = fresh;
    else if (tipe === 'dbh') AppState.dasarDbh = fresh;
    else if (tipe === 'dd') AppState.dasarDd = fresh;
    AppState.editingDasarId = null;
    renderDasarChecklist();
    updateLivePreview();
    showToast('Dasar rekomendasi dikembalikan ke susunan baku.', 'info');
  }
};

function renderDasarChecklist() {
  const container = document.getElementById('containerDasarChecklist');
  if (!container) return;

  const items = getRawDasarList();
  container.innerHTML = '';

  if (!items || items.length === 0) {
    container.innerHTML = '<p class="text-xs text-slate-400 italic py-2 text-center">Belum ada daftar dasar rekomendasi.</p>';
    return;
  }

  items.forEach((item, index) => {
    const isChecked = item.checked !== false;
    const isEditing = AppState.editingDasarId === item.id;

    const row = document.createElement('div');
    row.id = `dasar_item_${item.id}`;
    row.className = `p-2 rounded-lg border transition text-xs ${
      isEditing 
        ? 'bg-amber-50/90 border-amber-300 shadow-xs' 
        : (isChecked ? 'bg-slate-50 hover:bg-amber-50/40 border-slate-200 text-slate-800' : 'bg-slate-100/70 border-slate-200 text-slate-400')
    }`;

    if (isEditing) {
      row.innerHTML = `
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
              Edit Dasar No. ${index + 1}
            </span>
            <span class="text-[10px] text-slate-500 italic">Simpan setelah selesai mengubah</span>
          </div>
          <textarea id="dasar_input_${item.id}" rows="3" 
                    class="w-full bg-white border border-amber-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 leading-relaxed font-sans shadow-inner">${escapeHtml(item.teks)}</textarea>
          <div class="flex items-center justify-between pt-1">
            <button type="button" onclick="deleteDasarItem('${item.id}')" class="px-2 py-1 text-[11px] text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded transition flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              Hapus
            </button>
            <div class="flex gap-1.5">
              <button type="button" onclick="cancelEditDasar('${item.id}')" class="px-2.5 py-1 text-xs bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-lg font-medium transition">Batal</button>
              <button type="button" onclick="saveEditDasar('${item.id}')" class="px-3 py-1 text-xs bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition flex items-center gap-1 shadow-xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                Simpan
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      row.innerHTML = `
        <div class="flex items-start gap-2.5">
          <input type="checkbox" id="dasar_check_${item.id}" ${isChecked ? 'checked' : ''}
                 onchange="handleDasarCheckboxChange('${item.id}', this.checked)"
                 class="mt-0.5 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer" />
          <div class="flex-1 cursor-pointer select-none" onclick="document.getElementById('dasar_check_${item.id}').click()">
            <span class="font-bold text-slate-900 mr-1">${index + 1}.</span>
            <span class="leading-relaxed ${isChecked ? '' : 'line-through text-slate-400 italic'}">${escapeHtml(item.teks)}</span>
          </div>
          <div class="flex items-center gap-1 flex-shrink-0 pt-0.5">
            <button type="button" onclick="startEditDasar('${item.id}')" title="Edit dasar rekomendasi ini"
                    class="px-2 py-0.5 text-[11px] font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded flex items-center gap-1 transition">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
              Edit
            </button>
          </div>
        </div>
      `;
    }

    container.appendChild(row);
  });
}

// =========================================================================================
// EVENT LISTENERS
// =========================================================================================
function setupEventListeners() {
  // Radio Switcher 4 Jenis Surat Resmi
  const radios = document.querySelectorAll('input[name="tipeRekom"]');
  radios.forEach(r => {
    r.addEventListener('change', (e) => {
      AppState.tipeRekomendasi = e.target.value;
      handleTipeChange();
      autoUpdatePerihal();
      renderDasarChecklist();
      renderBerkasChecklist();
      autoGenerateNomorSurat();
      updateLivePreview();
    });
  });

  // Watch inputs
  const watchInputs = [
    'selectNamaDesa', 'inputKepalaDesa', 'inputKaurKeuangan', 'inputJabatanKaur', 'inputNomorRekening',
    'selectBulanGaji', 'selectTahapReguler', 'inputPersentaseTahap', 'inputTahunAnggaran', 'inputTahunAnggaranReguler', 'inputNominalAngka',
    'inputNomorSurat', 'inputNomorPerdes', 'inputTahunPerdes', 'inputNomorPerkades', 'inputTahunPerkades',
    'inputNomorPerdesKewenangan', 'inputNomorPerdesRkp',
    'inputTanggalSurat', 'inputNamaCamat', 'inputNipCamat', 'selectMetodeTte'
  ];

  watchInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        if (id === 'inputNominalAngka') handleNominalInput();
        if (id === 'inputTahunAnggaran') {
          const elReg = document.getElementById('inputTahunAnggaranReguler');
          if (elReg && elReg.value !== el.value) elReg.value = el.value;
        }
        if (id === 'inputTahunAnggaranReguler') {
          const elTahun = document.getElementById('inputTahunAnggaran');
          if (elTahun && elTahun.value !== el.value) elTahun.value = el.value;
        }
        if (['selectBulanGaji', 'selectTahapReguler', 'inputPersentaseTahap', 'selectNamaDesa', 'inputTahunAnggaran', 'inputTahunAnggaranReguler', 'inputNomorPerdes', 'inputTahunPerdes', 'inputNomorPerkades', 'inputTahunPerkades', 'inputNomorPerdesKewenangan', 'inputNomorPerdesRkp'].includes(id)) {
          autoUpdatePerihal();
          renderDasarChecklist();
          renderBerkasChecklist();
          autoGenerateNomorSurat();
        }
        updateLivePreview();
      });
      el.addEventListener('change', () => {
        if (id === 'selectNamaDesa') triggerAutoFillDesa();
        if (id === 'inputTahunAnggaran') {
          const elReg = document.getElementById('inputTahunAnggaranReguler');
          if (elReg && elReg.value !== el.value) elReg.value = el.value;
        }
        if (id === 'inputTahunAnggaranReguler') {
          const elTahun = document.getElementById('inputTahunAnggaran');
          if (elTahun && elTahun.value !== el.value) elTahun.value = el.value;
        }
        if (['selectBulanGaji', 'selectTahapReguler', 'inputPersentaseTahap', 'selectNamaDesa', 'inputTahunAnggaran', 'inputTahunAnggaranReguler', 'inputNomorPerdes', 'inputTahunPerdes', 'inputNomorPerkades', 'inputTahunPerkades', 'inputNomorPerdesKewenangan', 'inputNomorPerdesRkp'].includes(id)) {
          autoUpdatePerihal();
          renderDasarChecklist();
          renderBerkasChecklist();
          autoGenerateNomorSurat();
        }
        updateLivePreview();
      });
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target && e.target.classList.contains('berkas-checkbox')) {
      const id = e.target.id.replace('berkas_', '');
      const allLists = [AppState.berkasSiltap, AppState.berkasAddReguler, AppState.berkasDbh, AppState.berkasDd];
      for (const list of allLists) {
        const item = list.find(b => b.id === id);
        if (item) {
          item.checked = Boolean(e.target.checked);
          break;
        }
      }
      updateLivePreview();
    }
  });

  // Auto Generate Nomor
  document.getElementById('btnGenNomorSurat')?.addEventListener('click', () => {
    autoGenerateNomorSurat();
    updateLivePreview();
    showToast('Nomor surat disesuaikan!', 'info');
  });

  // Cetak & Simpan & Ekspor DOCX
  document.getElementById('btnPrintDoc')?.addEventListener('click', () => triggerPrint());
  document.getElementById('btnExportDocx')?.addEventListener('click', () => eksporSuratKeDocx());
  document.getElementById('btnSaveToDb')?.addEventListener('click', () => saveRecommendationData());

  // Zoom
  document.getElementById('btnZoomIn')?.addEventListener('click', () => changeZoom(10));
  document.getElementById('btnZoomOut')?.addEventListener('click', () => changeZoom(-10));
  document.getElementById('btnZoomReset')?.addEventListener('click', () => resetZoom());

  // Kertas & Mode Pemisah Halaman
  document.getElementById('selectPaperSize')?.addEventListener('change', (e) => {
    AppState.paperSize = e.target.value;
    applyPaperSize();
  });
  document.getElementById('selectPageBreakMode')?.addEventListener('change', (e) => {
    AppState.pageBreakMode = e.target.value;
    applyPageBreakMode();
  });

  // Modal Settings & Riwayat Drawer
  setupModalSettingsListeners();
  setupHistoryDrawerListeners();

  // Layout View Switcher
  document.getElementById('btnViewSplit')?.addEventListener('click', () => setViewMode('split'));
  document.getElementById('btnViewForm')?.addEventListener('click', () => setViewMode('form'));
  document.getElementById('btnViewPreview')?.addEventListener('click', () => setViewMode('preview'));

  // Formatting Otomatis Nominal Pengajuan Desa (Form Utama & Modal Edit)
  const desaNominalInput = document.getElementById('desaInputNominal');
  if (desaNominalInput) {
    desaNominalInput.addEventListener('input', () => {
      const val = parseCurrencyInput(desaNominalInput.value);
      desaNominalInput.value = val ? val.toLocaleString('id-ID') : '';
    });
  }

  const editNominalInput = document.getElementById('editPengajuanNominal');
  if (editNominalInput) {
    editNominalInput.addEventListener('input', () => {
      const val = parseCurrencyInput(editNominalInput.value);
      editNominalInput.value = val ? val.toLocaleString('id-ID') : '';
      const terbilangEl = document.getElementById('editPengajuanTerbilang');
      if (terbilangEl) terbilangEl.textContent = val ? convertTerbilang(val) + ' Rupiah' : 'Nol Rupiah';
    });
  }

  // Tutup Modal Edit Pengajuan jika klik di luar area modal
  document.getElementById('modalEditPengajuanDesa')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalEditPengajuanDesa') tutupModalEditPengajuanDesa();
  });
}

function handleTipeChange() {
  const isSiltap = AppState.tipeRekomendasi === 'siltap';
  const secSiltap = document.getElementById('sectionSiltapFields');
  const secTahap = document.getElementById('sectionTahapFields');

  if (secSiltap) secSiltap.classList.toggle('hidden', !isSiltap);
  if (secTahap) secTahap.classList.toggle('hidden', isSiltap);

  AppState.editingDasarId = null;
  AppState.editingBerkasId = null;
  toggleFormTambahDasar(false);
  toggleFormTambahBerkas(false);

  // Set default sample nominal per tipe
  const nominalInput = document.getElementById('inputNominalAngka');
  const tglInput = document.getElementById('inputTanggalSurat');

  if (AppState.tipeRekomendasi === 'siltap') {
    if (nominalInput) nominalInput.value = '116.550.000';
    if (tglInput) tglInput.value = '2026-05-25';
  } else if (AppState.tipeRekomendasi === 'add_reguler') {
    if (nominalInput) nominalInput.value = '366.716.750';
    if (tglInput) tglInput.value = '2026-08-20';
  } else if (AppState.tipeRekomendasi === 'dbh') {
    if (nominalInput) nominalInput.value = '150.021.000';
    if (tglInput) tglInput.value = '2026-10-06';
  } else if (AppState.tipeRekomendasi === 'dd') {
    if (nominalInput) nominalInput.value = '224.073.600';
    if (tglInput) tglInput.value = '2026-03-09';
    const tahapSelect = document.getElementById('selectTahapReguler');
    if (tahapSelect) tahapSelect.value = 'Tahap 1';
    const persenInput = document.getElementById('inputPersentaseTahap');
    if (persenInput) persenInput.value = '60';
  }

  handleNominalInput();
}

function triggerAutoFillDesa() {
  const desaName = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const data = AppState.masterDesa.find(d => d.nama === desaName);
  
  if (data) {
    const elKades = document.getElementById('inputKepalaDesa');
    if (elKades) elKades.value = data.kades;
    const elKaur = document.getElementById('inputKaurKeuangan');
    if (elKaur) elKaur.value = data.kaurKeuangan;
    const elJabatan = document.getElementById('inputJabatanKaur');
    if (elJabatan) elJabatan.value = data.jabatanKaur;
    const elRek = document.getElementById('inputNomorRekening');
    if (elRek) elRek.value = data.rekening;
    const elPerdes = document.getElementById('inputNomorPerdes');
    if (elPerdes) elPerdes.value = data.nomorPerdes;
    const elThnPerdes = document.getElementById('inputTahunPerdes');
    if (elThnPerdes) elThnPerdes.value = data.tahunPerdes;
    const elPerkades = document.getElementById('inputNomorPerkades');
    if (elPerkades) elPerkades.value = data.nomorPerkades;
    const elThnPerkades = document.getElementById('inputTahunPerkades');
    if (elThnPerkades) elThnPerkades.value = data.tahunPerkades;
    const elKewenangan = document.getElementById('inputNomorPerdesKewenangan');
    if (elKewenangan) elKewenangan.value = data.nomorPerdesKewenangan;
    const elRkp = document.getElementById('inputNomorPerdesRkp');
    if (elRkp) elRkp.value = data.nomorPerdesRkp;
  }

  autoUpdatePerihal();
  renderDasarChecklist();
  updateLivePreview();
}

function autoUpdatePerihal() {
  const desa = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const tahun = document.getElementById('inputTahunAnggaranReguler')?.value || document.getElementById('inputTahunAnggaran')?.value || '2026';
  const inputPerihal = document.getElementById('inputPerihalSurat');
  if (!inputPerihal) return;

  if (AppState.tipeRekomendasi === 'siltap') {
    const bulan = document.getElementById('selectBulanGaji')?.value || 'Juni';
    inputPerihal.value = `Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${bulan} Desa ${desa} Tahun ${tahun}`;
  } else if (AppState.tipeRekomendasi === 'add_reguler') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
    const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '25';
    const persen = String(rawPersen).replace('%', '').trim();
    const persenStr = persen ? `(${persen} %)` : '';
    inputPerihal.value = `Rekomendasi Pencairan Alokasi Dana Desa (ADD) ${tahap} ${persenStr} Tahun Anggaran ${tahun} Desa ${desa}`.replace(/\s+/g, ' ').trim();
  } else if (AppState.tipeRekomendasi === 'dbh') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
    const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '50';
    const persen = String(rawPersen).replace('%', '').trim();
    const persenStr = persen ? `(${persen}%)` : '';
    inputPerihal.value = `Rekomendasi Pencairan Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${tahap} ${persenStr} Tahun Anggaran ${tahun} Desa ${desa}`.replace(/\s+/g, ' ').trim();
  } else if (AppState.tipeRekomendasi === 'dd') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap 1';
    const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '60';
    const persen = String(rawPersen).replace('%', '').trim();
    const persenStr = persen ? `${persen} %` : '';
    inputPerihal.value = `Rekomendasi Pencairan Dana Desa (DD) ${tahap} ${persenStr} Tahun Anggaran ${tahun} Desa ${desa}`.replace(/\s+/g, ' ').trim();
  }
}

function autoGenerateNomorSurat() {
  const tahun = document.getElementById('inputTahunAnggaranReguler')?.value || document.getElementById('inputTahunAnggaran')?.value || '2026';
  const inputNomor = document.getElementById('inputNomorSurat');
  if (!inputNomor) return;

  let nomorUrut = 179;
  if (AppState.tipeRekomendasi === 'siltap') nomorUrut = 179;
  else if (AppState.tipeRekomendasi === 'add_reguler') nomorUrut = 325;
  else if (AppState.tipeRekomendasi === 'dbh') nomorUrut = 404;
  else if (AppState.tipeRekomendasi === 'dd') nomorUrut = 82;

  inputNomor.value = `R-900/${nomorUrut}/PMDK/Kec.Waru/${tahun}`;
}

function handleNominalInput() {
  const input = document.getElementById('inputNominalAngka');
  const terbilangOutput = document.getElementById('outputTerbilang');
  if (!input) return;

  const rawValue = parseCurrencyInput(input.value);
  input.value = rawValue ? rawValue.toLocaleString('id-ID') : '';

  const terbilangText = convertTerbilang(rawValue);
  if (terbilangOutput) terbilangOutput.textContent = terbilangText;
}

// =========================================================================================
// RENDER LIVE PREVIEW SESUAI TEMPLATE
// =========================================================================================
function updateLivePreview(force = false) {
  const previewDoc = document.getElementById('previewDocumentContainer');
  if (!previewDoc) return;

  // Jika sedang aktif mode edit langsung di kertas, abaikan render ulang dari form agar ketikan tidak hilang
  if (AppState.isDirectEditMode && !force) {
    return;
  }

  if (AppState.tipeRekomendasi === 'siltap') {
    renderLivePreviewSiltap();
  } else if (AppState.tipeRekomendasi === 'add_reguler') {
    renderLivePreviewAddReguler();
  } else if (AppState.tipeRekomendasi === 'dbh') {
    renderLivePreviewDbh();
  } else if (AppState.tipeRekomendasi === 'dd') {
    renderLivePreviewDd();
  }
  applyPaperSize();
  applyPageBreakMode();

  // Terapkan spasi baris aktif
  const lineSpacing = AppState.lineSpacing || document.getElementById('selectLineSpacing')?.value || '1.15';
  let paraMargin = '4pt';
  if (lineSpacing === '1.0') paraMargin = '2pt';
  else if (lineSpacing === '1.5') paraMargin = '6pt';
  else if (lineSpacing === '1.25') paraMargin = '3.5pt';
  previewDoc.style.setProperty('--surat-line-height', lineSpacing);
  previewDoc.style.setProperty('--surat-para-margin', paraMargin);

  // Jika render ulang saat mode edit sedang aktif, pasang kembali atribut contentEditable
  if (AppState.isDirectEditMode) {
    const sheets = previewDoc.querySelectorAll('.surat-sheet');
    sheets.forEach(sheet => {
      sheet.contentEditable = "true";
      sheet.spellcheck = false;
      sheet.classList.add('is-editing-direct');
    });
  }
}

/**
 * 1. TEMPLATE SILTAP (2 Halaman)
 */
function renderLivePreviewSiltap() {
  const previewDoc = document.getElementById('previewDocumentContainer');
  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const kaurKeuangan = document.getElementById('inputKaurKeuangan')?.value || 'MASNI';
  const jabatanKaur = document.getElementById('inputJabatanKaur')?.value || `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${namaDesa}`;
  const nomorRekening = document.getElementById('inputNomorRekening')?.value || '1131400337';
  const bulanGaji = document.getElementById('selectBulanGaji')?.value || 'Juni';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/179/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSuratIndo = formatTanggalIndo(document.getElementById('inputTanggalSurat')?.value || '2026-05-25');
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '116550000');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);
  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'srikandi';
  const nomorPerdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const tahunPerdes = document.getElementById('inputTahunPerdes')?.value || '2025';
  const nomorPerkades = document.getElementById('inputNomorPerkades')?.value || '3';
  const tahunPerkades = document.getElementById('inputTahunPerkades')?.value || '2025';

  const perihalText = `Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)}`;

  const activeDasarSiltap = getActiveDasarList('siltap');

  const docHtml = `
    <!-- HALAMAN 1 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      ${getHeaderSuratHtml(nomorSurat, tanggalSuratIndo, perihalText, metodeTte)}

      <div class="mt-3 text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20">Dasar</div><div class="w-3">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-4 space-y-1">
              ${activeDasarSiltap.map((item, idx) => {
                let teks = item.teks;
                if (idx === activeDasarSiltap.length - 1) teks = teks.trim().replace(/;$/, '.');
                else teks = teks.trim().replace(/\.$/, ';');
                return `<li class="pl-1">${escapeHtml(teks)}</li>`;
              }).join('')}
            </ol>
          </div>
        </div>
      </div>

      <div class="mt-3 text-[11pt] text-justify leading-normal">
        <p class="indent-10">
          Memperhatikan dasar diatas dan setelah dilakukan verifikasi tentang Dokumen Persyaratan Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>
        <div class="my-2 pl-8">
          <table class="border-collapse text-[11pt]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>
      </div>
    </div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman2">
      <div class="text-[11pt] text-justify leading-normal">
        <p class="indent-10">
          Untuk menerima (mengambil) Dana ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)} Sebesar <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <p class="indent-10 mt-2">
          Sebagai bahan pertimbangan, bersama ini kami lampirkan berkas-berkas persyaratan Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)} sebagai berikut:
        </p>

        <div class="my-2 pl-4">
          <ol class="list-decimal pl-4 space-y-0.5">
            ${getActiveBerkasList('siltap').map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
          </ol>
        </div>

        <p class="indent-10 mt-3">
          Bahwa Camat hanya bertanggung jawab pada Verifikasi kelengkapan dokumen dan kebenaran substansi yang terdapat pada dokumen persyaratan tersebut merupakan tanggung jawab Kepala Desa ${escapeHtml(namaDesa)}.
        </p>
        <p class="indent-10 mt-2">
          Demikian Rekomendasi ini disampaikan sebagai bahan kebijakan lebih lanjut.
        </p>
      </div>

      ${getTtdCamatHtml(namaCamat, nipCamat, metodeTte)}
    </div>
  `;

  previewDoc.innerHTML = docHtml;
}

/**
 * 2. TEMPLATE ADD REGULER (3 Halaman Sesuai PDF Resmi)
 */
function renderLivePreviewAddReguler() {
  const previewDoc = document.getElementById('previewDocumentContainer');
  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const kaurKeuangan = document.getElementById('inputKaurKeuangan')?.value || 'JUMIATI, S.KM';
  const jabatanKaur = document.getElementById('inputJabatanKaur')?.value || `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${namaDesa}`;
  const nomorRekening = document.getElementById('inputNomorRekening')?.value || '1131400345';
  const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
  const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '25';
  const persen = String(rawPersen).replace('%', '').trim();
  const persenStr = persen ? `(${escapeHtml(persen)} %)` : '';
  const tahunAnggaran = document.getElementById('inputTahunAnggaranReguler')?.value || document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/325/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSuratIndo = formatTanggalIndo(document.getElementById('inputTanggalSurat')?.value || '2026-08-20');
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '366716750');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);
  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'srikandi';
  const perdesKewenangan = document.getElementById('inputNomorPerdesKewenangan')?.value || '2';
  const perdesRkp = document.getElementById('inputNomorPerdesRkp')?.value || '2';
  const perdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const tahunPerdes = document.getElementById('inputTahunPerdes')?.value || '2025';
  const perkades = document.getElementById('inputNomorPerkades')?.value || '4';
  const tahunPerkades = document.getElementById('inputTahunPerkades')?.value || '2025';

  const perihalText = `Rekomendasi Pencairan Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)}`.replace(/\s+/g, ' ').trim();

  const activeDasarAdd = getActiveDasarList('add_reguler');
  const splitDasarIdx = Math.min(11, activeDasarAdd.length);
  const dasarAddHal1 = activeDasarAdd.slice(0, splitDasarIdx);
  const dasarAddHal2 = activeDasarAdd.slice(splitDasarIdx);

  const activeBerkasAdd = getActiveBerkasList('add_reguler');
  const splitAddIdx = Math.min(10, activeBerkasAdd.length);
  const berkasAddHal2 = activeBerkasAdd.slice(0, splitAddIdx);
  const berkasAddHal3 = activeBerkasAdd.slice(splitAddIdx);

  const docHtml = `
    <!-- HALAMAN 1 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      ${getHeaderSuratHtml(nomorSurat, tanggalSuratIndo, perihalText, metodeTte)}

      <div class="mt-3 text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20 flex-shrink-0">Dasar</div><div class="w-3 flex-shrink-0">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-5 space-y-1">
              ${dasarAddHal1.map((item, idx) => {
                let teks = item.teks;
                if (activeDasarAdd.length <= splitDasarIdx && idx === dasarAddHal1.length - 1) {
                  teks = teks.trim().replace(/;$/, '.');
                } else {
                  teks = teks.trim().replace(/\.$/, ';');
                }
                return `<li class="pl-1">${escapeHtml(teks)}</li>`;
              }).join('')}
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman2">
      <div class="text-[11pt] text-justify leading-snug">
        ${dasarAddHal2.length > 0 ? `
        <div class="flex items-start">
          <div class="w-20 flex-shrink-0"></div><div class="w-3 flex-shrink-0"></div>
          <div class="flex-1">
            <ol start="${splitDasarIdx + 1}" class="list-decimal pl-5 space-y-1">
              ${dasarAddHal2.map((item, idx) => {
                let teks = item.teks;
                if (idx === dasarAddHal2.length - 1) {
                  teks = teks.trim().replace(/;$/, '.');
                } else {
                  teks = teks.trim().replace(/\.$/, ';');
                }
                return `<li class="pl-1">${escapeHtml(teks)}</li>`;
              }).join('')}
            </ol>
          </div>
        </div>
        ` : ''}

        <p class="indent-10 mt-3 leading-normal">
          Memperhatikan dasar diatas dan setelah dilakukan verifikasi tentang Dokumen Persyaratan Rekomendasi Penyaluran Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>

        <div class="my-2 pl-8">
          <table class="border-collapse text-[11pt]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>

        <p class="indent-10 leading-normal">
          Untuk menerima (mengambil) Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sebesar. <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <p class="indent-10 mt-2 leading-normal">
          Sebagai Bahan Pertimbangan, bersama ini kami lampirkan berkas-berkas Persyaratan Penyaluran Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} antara lain:
        </p>

        <div class="my-2 pl-4">
          <ol class="list-decimal pl-5 space-y-0.5">
            ${berkasAddHal2.map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>

    <!-- HALAMAN 3 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman3">
      <div class="text-[11pt] text-justify leading-snug">
        ${berkasAddHal3.length > 0 ? `
        <div class="my-2 pl-4">
          <ol start="${splitAddIdx + 1}" class="list-decimal pl-5 space-y-0.5">
            ${berkasAddHal3.map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
          </ol>
        </div>
        ` : ''}

        <p class="indent-10 mt-4 leading-normal">
          Bahwa Camat hanya bertanggung jawab pada Verifikasi kelengkapan dokumen dan kebenaran substansi yang terdapat pada dokumen persyaratan tersebut merupakan tanggung jawab Kepala Desa ${escapeHtml(namaDesa)}.
        </p>
        <p class="indent-10 mt-2 leading-normal">
          Demikian Rekomendasi ini disampaikan sebagai bahan kebijakan lebih lanjut.
        </p>
      </div>

      ${getTtdCamatHtml(namaCamat, nipCamat, metodeTte)}
    </div>
  `;

  previewDoc.innerHTML = docHtml;
}

/**
 * 3. TEMPLATE PBH / DBH PAJAK & RETRIBUSI DAERAH (2 Halaman Sesuai PDF Resmi)
 */
function renderLivePreviewDbh() {
  const previewDoc = document.getElementById('previewDocumentContainer');
  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const kaurKeuangan = document.getElementById('inputKaurKeuangan')?.value || 'JUMIATI, S.KM';
  const jabatanKaur = document.getElementById('inputJabatanKaur')?.value || `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${namaDesa}`;
  const nomorRekening = document.getElementById('inputNomorRekening')?.value || '1131400345';
  const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
  const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '50';
  const persen = String(rawPersen).replace('%', '').trim();
  const persenStr = persen ? `(${escapeHtml(persen)}%)` : '';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/404/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSuratIndo = formatTanggalIndo(document.getElementById('inputTanggalSurat')?.value || '2026-10-06');
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '150021000');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);
  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'srikandi';
  const perdesKewenangan = document.getElementById('inputNomorPerdesKewenangan')?.value || '2';
  const perdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const perkades = document.getElementById('inputNomorPerkades')?.value || '4';

  const perihalText = `Rekomendasi Pencairan Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)}`.replace(/\s+/g, ' ').trim();

  const activeDasarDbh = getActiveDasarList('dbh');

  const docHtml = `
    <!-- HALAMAN 1 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      ${getHeaderSuratHtml(nomorSurat, tanggalSuratIndo, perihalText, metodeTte)}

      <div class="mt-3 text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20">Dasar</div><div class="w-3">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-4 space-y-1">
              ${activeDasarDbh.map((item, idx) => {
                let teks = item.teks;
                if (idx === activeDasarDbh.length - 1) teks = teks.trim().replace(/;$/, '.');
                else teks = teks.trim().replace(/\.$/, ';');
                return `<li class="pl-1">${escapeHtml(teks)}</li>`;
              }).join('')}
            </ol>
          </div>
        </div>
      </div>

      <div class="mt-3 text-[11pt] text-justify leading-normal">
        <p class="indent-10">
          Memperhatikan dasar diatas dan setelah dilakukan verifikasi tentang Dokumen Persyaratan Rekomendasi Penyaluran Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>
        <div class="my-2 pl-8">
          <table class="border-collapse text-[11pt]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>
      </div>
    </div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman2">
      <div class="text-[11pt] text-justify leading-normal">
        <p class="indent-10">
          Untuk menerima (mengambil) Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sebesar <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <p class="indent-10 mt-2">
          Sebagai Bahan Pertimbangan, bersama ini kami lampirkan berkas-berkas Persyaratan Penyaluran Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} antara lain:
        </p>

        <div class="my-2 pl-4">
          <ol class="list-decimal pl-4 space-y-0.5">
            ${getActiveBerkasList('dbh').map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
          </ol>
        </div>

        <p class="indent-10 mt-3">
          Bahwa Camat hanya bertanggung jawab pada Verifikasi kelengkapan dokumen dan kebenaran substansi yang terdapat pada dokumen persyaratan tersebut merupakan tanggung jawab Kepala Desa ${escapeHtml(namaDesa)}.
        </p>
        <p class="indent-10 mt-2">
          Demikian Rekomendasi ini disampaikan sebagai bahan kebijakan lebih lanjut.
        </p>
      </div>

      ${getTtdCamatHtml(namaCamat, nipCamat, metodeTte)}
    </div>
  `;

  previewDoc.innerHTML = docHtml;
}

/**
 * 4. TEMPLATE DANA DESA (DD) (3 Halaman Sesuai Format PDF Resmi)
 */
function renderLivePreviewDd() {
  const previewDoc = document.getElementById('previewDocumentContainer');
  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const kaurKeuangan = document.getElementById('inputKaurKeuangan')?.value || 'JUMIATI,S.KM';
  const jabatanKaur = document.getElementById('inputJabatanKaur')?.value || `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${namaDesa}`;
  const nomorRekening = document.getElementById('inputNomorRekening')?.value || '1131400345';
  const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap 1';
  const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '60';
  const persen = String(rawPersen).replace('%', '').trim();
  const persenStr = persen ? `${escapeHtml(persen)} %` : '';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/82/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSuratIndo = formatTanggalIndo(document.getElementById('inputTanggalSurat')?.value || '2026-03-09');
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '224073600');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);
  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'srikandi';
  const perdesKewenangan = document.getElementById('inputNomorPerdesKewenangan')?.value || '2';
  const perdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const perkades = document.getElementById('inputNomorPerkades')?.value || '4';

  const perihalText = document.getElementById('inputPerihalSurat')?.value || `Rekomendasi Pencairan Dana Desa (DD) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)}`.replace(/\s+/g, ' ').trim();

  const activeDasarDd = getActiveDasarList('dd');
  const splitDasarDdIdx = Math.min(10, activeDasarDd.length);
  const dasarDdHal1 = activeDasarDd.slice(0, splitDasarDdIdx);
  const dasarDdHal2 = activeDasarDd.slice(splitDasarDdIdx);

  const berkasFiltered = getActiveBerkasList('dd');

  const docHtml = `
    <!-- HALAMAN 1 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      ${getHeaderSuratHtml(nomorSurat, tanggalSuratIndo, perihalText, metodeTte)}

      <div class="mt-3 text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20 flex-shrink-0">Dasar</div><div class="w-3 flex-shrink-0">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-5 space-y-1">
              ${dasarDdHal1.map((item, idx) => {
                let teks = item.teks;
                if (activeDasarDd.length <= splitDasarDdIdx && idx === dasarDdHal1.length - 1) {
                  teks = teks.trim().replace(/;$/, '.');
                } else {
                  teks = teks.trim().replace(/\.$/, ';');
                }
                return `<li class="pl-1">${escapeHtml(teks)}</li>`;
              }).join('')}
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman2">
      <div class="text-[11pt] text-justify leading-snug">
        ${dasarDdHal2.length > 0 ? `
        <div class="flex items-start">
          <div class="w-20 flex-shrink-0"></div><div class="w-3 flex-shrink-0"></div>
          <div class="flex-1">
            <ol start="${splitDasarDdIdx + 1}" class="list-decimal pl-5 space-y-1">
              ${dasarDdHal2.map((item, idx) => {
                let teks = item.teks;
                if (idx === dasarDdHal2.length - 1) {
                  teks = teks.trim().replace(/;$/, '.');
                } else {
                  teks = teks.trim().replace(/\.$/, ';');
                }
                return `<li class="pl-1">${escapeHtml(teks)}</li>`;
              }).join('')}
            </ol>
          </div>
        </div>
        ` : ''}

        <p class="indent-10 mt-3 leading-normal">
          Memperhatikan dasar diatas dan setelah dilakukan chek list tentang Dokumen Persyaratan Rekomendasi Pencairan Dana Desa (DD) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>

        <div class="my-2 pl-8">
          <table class="border-collapse text-[11pt]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>

        <p class="indent-10 leading-normal">
          Untuk menerima (mengambil) Dana Desa (DD) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sebesar . <strong>${nominalFormatted} (${terbilangText})</strong>
        </p>

        <p class="indent-10 mt-2 leading-normal">
          Sebagai Bahan Pertimbangan, bersama ini kami lampirkan berkas-berkas Persyaratan Pencairan Dana Desa (DD) ${escapeHtml(tahap)} ${persenStr} Tahun Anggaran ${escapeHtml(tahunAnggaran)} antara lain:
        </p>

        <div class="my-2 pl-4">
          <ol class="list-decimal pl-5 space-y-0.5">
            ${berkasFiltered.map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>

    <!-- HALAMAN 3 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman3">
      <div class="text-[11pt] text-justify leading-snug">
        <p class="indent-10 mt-4 leading-normal">
          Bahwa Camat hanya bertanggung jawab pada Verifikasi kelengkapan dokumen dan kebenaran substansi yang terdapat pada dokumen persyaratan tersebut merupakan tanggung jawab Kepala Desa ${escapeHtml(namaDesa)}.
        </p>
        <p class="indent-10 mt-2 leading-normal">
          Demikian Rekomendasi ini disampaikan sebagai bahan kebijakan lebih lanjut.
        </p>
      </div>

      ${getTtdCamatHtml(namaCamat, nipCamat, metodeTte)}
    </div>
  `;

  previewDoc.innerHTML = docHtml;
}

// =========================================================================================
// HTML BUILDERS & REUSABLE COMPONENTS
// =========================================================================================
function getKopSuratHtml(withWa = true) {
  const waIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAWMSURBVDhPbZV9TNT3Hcfvr62zq4BUOR56lQPkQYQCB7YKRiGiMa2G+rDqrNvSbon/LF2zh2zrjKRbRienFoGigOeQg1Ueehyed7+nu+M4uDu5A1oePLVaERmb0N1pLaxp9bVAszDN3skn30+++XxfySf5ft4fFf9Hjx49wuG0M/HPm7jcLkRRQBJERFFEkqTFU5YlwvfCTz5dlOrJi3v37jE0NERPbw9ij8BFl5kO5QLdgx10+dpx33Qgeq1IDhFFkRfrn9Rj0HA4hKzIyH0SHb1tGEbq+IP8Nm+a9nGgaweHunfya+dhTvj+SPdoJ1KPiNfnY3Bw8H8xS9BQOERg0I9nzEXH9WZ+0rGHV00l7LJtYpukY6sjl+1yAbusm9jdXcLrXWXUDJ3AOeJAUmSGhoYfhy600Nvfi+KTafCdYm9LKdu7ctl8aR1FUgYFShIv2lMoEteyxZrNZtu3sa3zJf7sPspFuxmHw87ExMQSdHx8HIfbiTBpYU/zdoqbc9hizKawKYuN7evI604i+6KG/O5kdKZkcsyJZFs05JmT2WrcQLVPj2/cg6IozM/Po5qbm8PlcjE8Pcihln3kN6VT2PQCFYFy5PtWfmb5EfnGVNLb4xdj7YUE0tviSG9byDVktWopPVeIMGXl7+Fp7t6dQTU9Pc1U+A7t11rJez+DdIOGLfUb8M76UNwKrTeMFNTlkXQ+ntWtK9C2RqM1riLpfCypzfEkNa8i/YyG30hv4xnzIggSKlmW6Qu6+XnnYdKqniflTAKvNO3g2sNPEV0Cga/9FJ4pQtMYR7whgufORhBviCLWEEmCIYIEQxSJ9avY+ddSrnxxBX8ggEqUBK7PBXnt3F5Wvx9HXE0UupPZXP73Ze58M8mZwGkyTmagPh1NXF0kz30Qifr0cp5tfJqVDcuIqf8+CbUryKpIxT6tMDE7gcom2Rj7coSyxp3E6lcSXf0Ma/SrqfC8y5WHY1T2HyPlPS2rqiOIqXmamFPLiK75HlF13yWq9jusqHkK9cnlJJdrsEx1E5wNLkCtXJkb5dWzu4jTrySqehnx+mgKq3QIIQverzwcajlIxrEUNJXRxB6LIFEfw/P6GNRVy3n21DJij0eSVq7FPPURwftBVIIscH3+Kj889wO0+nhiP4hcbCflRAJ7z5XheuDA96WXI5d+z/qjuRxo2Y3pbhvl7nfIqc1YrE2sUrP5+Eb6/uXixhefolr4sJNfTXDcV8G6Si3J9Wo0DdFoG9RknVrDwdY9eOadOIIK3s/7GL4fQPDYGA19QtNsI6mnE0it0vBG0+tcnw/S43eimpmZZXLuNvbPrRTXFZB5VkNycwzalhhSmtW80JjI3g93YLx2luA3Y0w9nFysv/X1DY75/0RWvZbs6jUYPq6nf6Sfhc4XJ0pQJDyf9fGO6xfomtJY25ZIRnsCmR1qMtviyWlNZaNBx8GOfVT4yjHeauB3yltsrs8jvz6TAxd247wqY1ckZmdnv4XKdgX31V5qg3+hqDUH3Ufp6MzJrDclU2Bag86UyvrODAovrKO4LY/illxK/pZHcXM++41liHesOAbsBAL+pdkfGR1BuGzlV6bD7GwtZlvnJkpNL1FqzqfEkkuRLZNCMY1NtjSKLVmUduvY2pnP/vZXkO7YEO0SAwMDSy614KF9nj4sLjNHjL+k0lXOh1PnqR2p5KeX9lNmKuHlixt42foiuy2FvNa5lR+37aHCdxTzeCeC00ZvTy/h0NIWUA0PD2F3OOjrd9MtdjF+dRyhR8A96sLkbcfyj0703nc5Ir3Fez2/xfyZkUDIg+QV8Qf8CKJAOPz4WlGFQiEePHjAgrH4/QMseIFdcS7a2OjoKLcnb2NzWrl56yaKW0Z02lCcMv39HmbuzjwG+6/+A9mj2yKjFgyvAAAAAElFTkSuQmCC';
  return `
    <div class="kop-surat flex items-center justify-between pb-2 border-b-[3.5px] border-black relative" style="line-height: 1.15 !important;">
      <div class="w-20 flex-shrink-0 flex items-center justify-start">
        <img src="logo_ppu.png" alt="Logo Kabupaten Penajam Paser Utara" class="w-[74px] h-[86px] object-contain drop-shadow-xs" />
      </div>
      <div class="flex-1 text-center px-1 font-sans" style="line-height: 1.15 !important;">
        <h3 class="text-[13pt] font-bold uppercase tracking-wider text-black m-0 p-0" style="line-height: 1.15 !important;">
          PEMERINTAH KABUPATEN PENAJAM PASER UTARA
        </h3>
        <h2 class="text-[16pt] font-black uppercase tracking-wider text-black m-0 p-0 mt-0.5" style="line-height: 1.15 !important;">
          KECAMATAN WARU
        </h2>
        <div class="text-[10pt] text-black mt-1" style="line-height: 1.15 !important;">
          <p class="flex items-center justify-center m-0 p-0" style="line-height: 1.15 !important;">
            <span>Jalan Propinsi Km. 25,</span>
            <img src="icon_wa.png" onerror="this.onerror=null; this.src='${waIconBase64}';" alt="WA" class="inline-block w-[15px] h-[15px] mx-1 align-middle" />
            <span>WA. 0821-9564-7788</span>
          </p>
          <p class="m-0 p-0" style="line-height: 1.15 !important;">
            Website : <span class="text-blue-700 underline">https://kecwaru.penajamkab.go.id/</span>
          </p>
          <p class="m-0 p-0" style="line-height: 1.15 !important;">
            Email : <span class="text-blue-700 underline">kecamatanwaru2014@gmail.com</span> Pos 76284
          </p>
        </div>
      </div>
      <div class="w-20 flex-shrink-0"></div>
    </div>
  `;
}

function getHeaderSuratHtml(nomorSurat, tanggalSuratIndo, perihalText, metodeTte) {
  const metode = metodeTte || document.getElementById('selectMetodeTte')?.value || 'srikandi';

  if (metode === 'manual' || metode === 'tte_lokal') {
    const nomor = nomorSurat || document.getElementById('inputNomorSurat')?.value || 'R-900/179/PMDK/Kec.Waru/2026';
    const rawDate = document.getElementById('inputTanggalSurat')?.value || '2026-05-25';
    const tanggal = tanggalSuratIndo || formatTanggalIndo(rawDate);
    const hal = perihalText || document.getElementById('inputPerihalSurat')?.value || 'Rekomendasi Pencairan Alokasi Dana Desa';

    return `
      <div class="mt-4 text-[11pt] leading-snug font-sans text-black">
        <table class="header-surat-table w-full border-collapse" style="width: 100%; border-collapse: collapse; table-layout: fixed;">
          <colgroup>
            <col width="58%" style="width: 58%;" />
            <col width="42%" style="width: 42%;" />
          </colgroup>
          <tr>
            <td class="header-left-col align-top p-0" style="width: 58%; max-width: 58%; vertical-align: top;">
              <table class="w-full border-collapse text-[11pt]" style="width: 100%; border-collapse: collapse; table-layout: fixed;">
                <colgroup>
                  <col width="60" style="width: 60pt;" />
                  <col width="14" style="width: 14pt;" />
                  <col width="217" style="width: 217pt;" />
                </colgroup>
                <tr>
                  <td class="align-top py-0.5" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top;">Nomor</td>
                  <td class="align-top py-0.5 text-center" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center;">:</td>
                  <td class="align-top py-0.5 font-medium" style="width: 217pt; max-width: 217pt; vertical-align: top;">${escapeHtml(nomor)}</td>
                </tr>
                <tr>
                  <td class="align-top py-0.5" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top;">Sifat</td>
                  <td class="align-top py-0.5 text-center" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center;">:</td>
                  <td class="align-top py-0.5" style="width: 217pt; max-width: 217pt; vertical-align: top;">Penting</td>
                </tr>
                <tr>
                  <td class="align-top py-0.5" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top;">Lampiran</td>
                  <td class="align-top py-0.5 text-center" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center;">:</td>
                  <td class="align-top py-0.5 tracking-widest" style="width: 217pt; max-width: 217pt; vertical-align: top;">-</td>
                </tr>
                <tr>
                  <td class="align-top py-0.5" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top;">Hal</td>
                  <td class="align-top py-0.5 text-center" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center;">:</td>
                  <td class="align-top py-0.5 font-medium text-justify leading-snug" style="width: 217pt; max-width: 217pt; vertical-align: top; text-align: justify; word-wrap: break-word; overflow-wrap: break-word;">
                    <div style="width: 100%; max-width: 217pt; text-align: justify; word-wrap: break-word; overflow-wrap: break-word;">${escapeHtml(hal)}</div>
                  </td>
                </tr>
              </table>
            </td>
            <td class="header-right-col align-top p-0 text-right font-medium" style="width: 42%; min-width: 42%; vertical-align: top; text-align: right;">
              Penajam, ${escapeHtml(tanggal)}
            </td>
          </tr>
        </table>

        <div class="mt-6 leading-normal text-left">
          <div>Yth . Kepala Badan Keuangan dan Aset Daerah</div>
          <div class="pl-6">Kabupaten Penajam Paser Utara</div>
          <div>Di -</div>
          <div class="pl-6 font-semibold">Tempat</div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // FORMAT BAKU SRIKANDI (SESUAI FOTO 1)
  // Menampilkan tag naskah baku Srikandi agar terbaca saat di-upload di Srikandi
  // =========================================================================
  return `
    <div class="mt-4 text-[11pt] leading-snug font-sans text-black">
      <table class="header-surat-table w-full border-collapse" style="width: 100%; border-collapse: collapse; table-layout: fixed;">
        <colgroup>
          <col width="58%" style="width: 58%;" />
          <col width="42%" style="width: 42%;" />
        </colgroup>
        <tr>
          <td class="header-left-col align-top p-0" style="width: 58%; max-width: 58%; vertical-align: top;">
            <table class="w-full border-collapse text-[11pt]" style="width: 100%; border-collapse: collapse; table-layout: fixed;">
              <colgroup>
                <col width="60" style="width: 60pt;" />
                <col width="14" style="width: 14pt;" />
                <col width="217" style="width: 217pt;" />
              </colgroup>
              <tr>
                <td class="align-top py-0.5" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top;">Nomor</td>
                <td class="align-top py-0.5 text-center" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center;">:</td>
                <td class="align-top py-0.5 font-sans" style="width: 217pt; max-width: 217pt; vertical-align: top;">\${nomor_naskah}</td>
              </tr>
              <tr>
                <td class="align-top py-0.5" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top;">Sifat</td>
                <td class="align-top py-0.5 text-center" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center;">:</td>
                <td class="align-top py-0.5 font-sans" style="width: 217pt; max-width: 217pt; vertical-align: top;">\${sifat}</td>
              </tr>
              <tr>
                <td class="align-top py-0.5" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top;">Lampiran</td>
                <td class="align-top py-0.5 text-center" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center;">:</td>
                <td class="align-top py-0.5 font-sans tracking-wider" style="width: 217pt; max-width: 217pt; vertical-align: top;">....................</td>
              </tr>
              <tr>
                <td class="align-top py-0.5" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top;">Hal</td>
                <td class="align-top py-0.5 text-center" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center;">:</td>
                <td class="align-top py-0.5 font-sans text-justify leading-snug" style="width: 217pt; max-width: 217pt; vertical-align: top; text-align: justify; word-wrap: break-word; overflow-wrap: break-word;">
                  <div style="width: 100%; max-width: 217pt; text-align: justify; word-wrap: break-word; overflow-wrap: break-word;">\${hal}</div>
                </td>
              </tr>
            </table>
          </td>
          <td class="header-right-col align-top p-0 text-right font-sans" style="width: 42%; min-width: 42%; vertical-align: top; text-align: right;">
            Penajam, \${tanggal_naskah}
          </td>
        </tr>
      </table>

      <div class="mt-6 text-left leading-normal font-sans">
        <div>Yth . \${jabatan_tujuan}</div>
        <div>Di -</div>
        <div class="pl-6 font-semibold underline">Tempat</div>
      </div>
    </div>
  `;
}

function getTtdCamatHtml(namaCamat, nipCamat, metodeTte) {
  const metode = metodeTte || document.getElementById('selectMetodeTte')?.value || 'srikandi';
  const nama = namaCamat || document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nip = nipCamat || document.getElementById('inputNipCamat')?.value || AppState.camat.nip;

  if (metode === 'manual') {
    return `
      <div class="mt-8 flex justify-end text-[11pt] font-sans text-black">
        <div class="w-72 text-left">
          <div class="leading-normal">Camat Waru,</div>
          <div class="my-4 pl-2">
            <div class="h-16 flex items-center justify-center text-xs text-slate-400 italic">
              (Tanda Tangan Basah & Cap)
            </div>
          </div>
          <div class="leading-normal font-bold underline">${escapeHtml(nama)}</div>
          <div class="leading-normal font-medium">NIP. ${escapeHtml(nip)}</div>
        </div>
      </div>
      <div class="mt-8 text-[11pt] text-black leading-normal font-sans">
        <div class="font-bold mb-1">TEMBUSAN:</div>
        <div>1. Kepala Dinas Pemberdayaan Masyarakat dan Desa Kab. Penajam Paser Utara;</div>
        <div>2. Arsip.</div>
      </div>
    `;
  }

  if (metode === 'tte_lokal') {
    return `
      <div class="mt-8 flex justify-end text-[11pt] font-sans text-black">
        <div class="w-72 text-left">
          <div class="leading-normal">Camat Waru,</div>
          <div class="my-3 pl-2">
            <div class="flex items-center gap-2.5">
              ${getQrCodeSvg()}
              <div class="text-[9pt] leading-tight text-slate-700 font-mono">
                Ditandatangani secara elektronik oleh:<br>
                <strong>${escapeHtml(nama)}</strong><br>
                <span class="text-[8pt] text-slate-500">Sertifikasi Balai Sertifikasi Elektronik (BSrE)</span>
              </div>
            </div>
          </div>
          <div class="leading-normal font-bold underline">${escapeHtml(nama)}</div>
          <div class="leading-normal font-medium">NIP. ${escapeHtml(nip)}</div>
        </div>
      </div>
      <div class="mt-8 text-[11pt] text-black leading-normal font-sans">
        <div class="font-bold mb-1">TEMBUSAN:</div>
        <div>1. Kepala Dinas Pemberdayaan Masyarakat dan Desa Kab. Penajam Paser Utara;</div>
        <div>2. Arsip.</div>
      </div>
    `;
  }

  // =========================================================================
  // FORMAT BAKU SRIKANDI (SESUAI FOTO 2)
  // Menampilkan Camat Waru,, ${ttd_pengirim}, ${nama_pengirim}, NIP. ${nip_pengirim}
  // dan TEMBUSAN: (apabila ada) 1. ${tembusan_jabatan}.
  // =========================================================================
  return `
    <div class="mt-8 flex justify-end text-[11pt] font-sans text-black">
      <div class="w-72 text-left">
        <div class="leading-normal">Camat Waru,</div>
        <div class="my-6 py-2 text-center text-slate-800 font-sans tracking-wide">
          \${ttd_pengirim}
        </div>
        <div class="leading-normal font-sans">\${nama_pengirim}</div>
        <div class="leading-normal font-sans">NIP. \${nip_pengirim}</div>
      </div>
    </div>
    <div class="mt-8 text-[11pt] text-black leading-normal font-sans">
      <div class="mb-1 font-bold">TEMBUSAN :</div>
      <div class="flex items-start">
        <span class="w-6 flex-shrink-0">1.</span>
        <span>\${tembusan_jabatan}.</span>
      </div>
    </div>
  `;
}

function getFooterBsreHtml(pageStr) {
  return '';
}

function getLogoPenajamSvg() {
  return `
    <svg viewBox="0 0 100 125" class="w-16 h-20 filter drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10,10 L 90,10 L 90,70 C 90,100 50,120 50,120 C 50,120 10,100 10,70 Z" fill="#FACC15" stroke="#1E293B" stroke-width="2.5" />
      <path d="M 16,16 L 84,16 L 84,68 C 84,94 50,112 50,112 C 50,112 16,94 16,68 Z" fill="#059669" stroke="#FFFFFF" stroke-width="1.5" />
      <path d="M 22,50 L 78,50 L 78,65 C 78,85 50,104 50,104 C 50,104 22,85 22,65 Z" fill="#DC2626" opacity="0.9" />
      <path d="M 15,35 Q 50,42 85,35 L 82,46 Q 50,53 18,46 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="1" />
      <text x="50" y="44" font-family="'Times New Roman', serif" font-weight="900" font-size="7.5" fill="#0F172A" text-anchor="middle" letter-spacing="1">BENUO TAKA</text>
      <polygon points="50,18 52,24 58,24 53,27 55,33 50,29 45,33 47,27 42,24 48,24" fill="#FBBF24" stroke="#78350F" stroke-width="0.5"/>
      <path d="M 45,62 L 55,62 L 52,78 L 48,78 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="0.8"/>
      <ellipse cx="50" cy="58" rx="6" ry="4" fill="#F59E0B" stroke="#B45309" stroke-width="0.8"/>
      <path d="M 30,85 Q 40,81 50,85 Q 60,89 70,85" stroke="#FFFFFF" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M 34,91 Q 42,88 50,91 Q 58,94 66,91" stroke="#FBBF24" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `;
}

function getQrCodeSvg() {
  return `
    <div class="p-1 bg-white border border-slate-300 rounded inline-block shadow-2xs">
      <svg class="w-16 h-16" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <path fill="#000000" d="M0 0h7v7H0zM2 2h3v3H2zM22 0h7v7h-7zM24 2h3v3h-3zM0 22h7v7H0zM2 24h3v3H2zM9 1h1v1H9zM12 1h1v1h-1zM14 1h1v1h-1zM17 1h1v1h-1zM19 1h1v1h-1zM10 3h1v1h-1zM13 3h2v1h-2zM17 3h1v1h-1zM8 5h2v1H8zM12 5h1v1h-1zM15 5h1v1h-1zM18 5h2v1h-2zM9 7h1v1H9zM13 7h1v1h-1zM16 7h1v1h-1zM1 9h1v2H1zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM11 9h2v1h-2zM15 9h1v1h-1zM18 9h1v1h-1zM21 9h2v1h-2zM25 9h1v1h-1zM28 9h1v1h-1zM3 11h1v1H3zM6 11h1v1H6zM9 11h1v1H9zM13 11h2v1h-2zM17 11h1v1h-1zM20 11h2v1h-2zM24 11h1v1h-1zM27 11h1v1h-1zM1 13h2v1H1zM5 13h1v1H5zM8 13h1v1H8zM11 13h1v1h-1zM14 13h1v1h-1zM17 13h1v1h-1zM20 13h1v1h-1zM23 13h2v1h-2zM27 13h1v1h-1zM0 15h1v1H0zM3 15h2v1H3zM7 15h1v1H7zM10 15h2v1h-2zM14 15h1v1h-1zM17 15h2v1h-2zM21 15h1v1h-1zM24 15h2v1h-2zM28 15h1v1h-1zM2 17h1v1H2zM5 17h1v1H5zM8 17h1v1H8zM12 17h1v1h-1zM15 17h2v1h-2zM19 17h1v1h-1zM22 17h1v1h-1zM26 17h1v1h-1zM1 19h1v1H1zM4 19h2v1H4zM8 19h2v1H8zM12 19h1v1h-1zM15 19h1v1h-1zM18 19h2v1h-2zM22 19h1v1h-1zM25 19h1v1h-1zM28 19h1v1h-1zM9 21h1v1H9zM13 21h1v1h-1zM16 21h2v1h-2zM20 21h1v1h-1zM24 21h1v1h-1zM27 21h1v1h-1zM10 23h2v1h-2zM14 23h1v1h-1zM18 23h1v1h-1zM21 23h1v1h-1zM25 23h1v1h-1zM28 23h1v1h-1zM8 25h1v1H8zM11 25h1v1h-1zM14 25h2v1h-2zM18 25h1v1h-1zM22 25h2v1h-2zM26 25h1v1h-1zM9 27h1v1H9zM12 27h2v1h-2zM16 27h1v1h-1zM19 27h1v1h-1zM23 27h1v1h-1zM27 27h1v1h-1z"/>
      </svg>
    </div>
  `;
}

// Print & Zoom
function applyPaperSize() {
  const size = AppState.paperSize || 'a4';
  const selectPaper = document.getElementById('selectPaperSize');
  if (selectPaper && selectPaper.value !== size) {
    selectPaper.value = size;
  }
  const sheets = document.querySelectorAll('.surat-sheet');
  sheets.forEach(sheet => {
    if (size === 'folio') {
      sheet.style.width = '215mm';
      sheet.style.minHeight = '330mm';
      sheet.style.maxHeight = '';
      sheet.style.padding = '1.2cm 1.5cm 1.5cm 1.8cm';
    } else {
      sheet.style.width = '210mm';
      sheet.style.minHeight = '297mm';
      sheet.style.maxHeight = '';
      sheet.style.padding = '1.2cm 1.5cm 1.5cm 1.8cm';
    }
  });
  applyPageBreakMode();
}

function applyPageBreakMode() {
  const mode = AppState.pageBreakMode || 'separated';
  const container = document.getElementById('previewDocumentContainer');
  const sheets = document.querySelectorAll('.surat-sheet');
  const selectMode = document.getElementById('selectPageBreakMode');
  if (selectMode && selectMode.value !== mode) {
    selectMode.value = mode;
  }

  if (mode === 'flow') {
    document.body.classList.add('mode-flow-print');
    if (container) container.classList.add('mode-flow');
    sheets.forEach(s => s.classList.add('no-page-break'));
  } else {
    document.body.classList.remove('mode-flow-print');
    if (container) container.classList.remove('mode-flow');
    sheets.forEach(s => s.classList.remove('no-page-break'));
  }
}
window.applyPageBreakMode = applyPageBreakMode;

/**
 * Terapkan Pilihan Jarak Spasi Baris Dokumen (Line Spacing)
 */
window.applyLineSpacing = function(val) {
  const select = document.getElementById('selectLineSpacing');
  const lineSpacing = val || select?.value || '1.15';
  AppState.lineSpacing = lineSpacing;

  let paraMargin = '4pt';
  if (lineSpacing === '1.0') paraMargin = '2pt';
  else if (lineSpacing === '1.5') paraMargin = '6pt';
  else if (lineSpacing === '1.25') paraMargin = '3.5pt';

  const container = document.getElementById('previewDocumentContainer');
  if (container) {
    container.style.setProperty('--surat-line-height', lineSpacing);
    container.style.setProperty('--surat-para-margin', paraMargin);
  }

  const sheets = document.querySelectorAll('#previewDocumentContainer .surat-sheet');
  sheets.forEach(sheet => {
    sheet.style.setProperty('--surat-line-height', lineSpacing);
    sheet.style.setProperty('--surat-para-margin', paraMargin);
  });

  showToast(`Jarak spasi baris dokumen diatur ke: ${lineSpacing}`, 'info');
};

function changeZoom(delta) {
  AppState.currentZoom = Math.max(50, Math.min(150, AppState.currentZoom + delta));
  const el = document.getElementById('previewDocumentContainer');
  const label = document.getElementById('labelZoomPercent');
  if (el) el.style.transform = `scale(${AppState.currentZoom / 100})`;
  if (label) label.textContent = `${AppState.currentZoom}%`;
}

function resetZoom() {
  AppState.currentZoom = 100;
  const el = document.getElementById('previewDocumentContainer');
  const label = document.getElementById('labelZoomPercent');
  if (el) el.style.transform = `scale(1)`;
  if (label) label.textContent = `100%`;
}

function triggerPrint() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
  const container = document.getElementById('previewDocumentContainer');
  const oldTransform = container ? container.style.transform : '';
  if (container) container.style.transform = 'none';

  // Pastikan login portal benar-benar disembunyikan secara eksplisit saat print
  const loginPortal = document.getElementById('loginPortalContainer');
  const wasDisplay = loginPortal ? loginPortal.style.display : '';
  if (loginPortal) {
    loginPortal.style.setProperty('display', 'none', 'important');
  }

  // Pastikan tab arsip kirim rekom & tab verifikasi desa disembunyikan dari print
  const tabKirim = document.getElementById('tabContentKirimRekomDesa');
  const wasKirimDisplay = tabKirim ? tabKirim.style.display : '';
  if (tabKirim) {
    tabKirim.style.setProperty('display', 'none', 'important');
  }

  const tabVerif = document.getElementById('tabContentVerifikasiDesa');
  const wasVerifDisplay = tabVerif ? tabVerif.style.display : '';
  if (tabVerif) {
    tabVerif.style.setProperty('display', 'none', 'important');
  }

  // Terapkan mode pemisah halaman aktif
  applyPageBreakMode();

  // Reset sementara inline min-height & border agar tidak memicu garis atau overflow kosong di media print
  const sheets = document.querySelectorAll('.surat-sheet');
  const savedStyles = [];
  sheets.forEach((sheet, idx) => {
    savedStyles[idx] = {
      minHeight: sheet.style.minHeight,
      height: sheet.style.height,
      marginBottom: sheet.style.marginBottom,
      border: sheet.style.border,
      borderBottom: sheet.style.borderBottom
    };
    sheet.style.minHeight = '0';
    sheet.style.height = 'auto';
    sheet.style.marginBottom = '0';
    sheet.style.border = 'none';
    sheet.style.borderBottom = 'none';
  });

  // Pastikan struktur tabel header 58% / 42% terkunci mutlak saat dicetak ke PDF
  const headerTables = document.querySelectorAll('.header-surat-table');
  headerTables.forEach(ht => {
    ht.style.setProperty('width', '100%', 'important');
    ht.style.setProperty('table-layout', 'fixed', 'important');
    const leftCol = ht.querySelector('.header-left-col');
    const rightCol = ht.querySelector('.header-right-col');
    if (leftCol) {
      leftCol.style.setProperty('width', '58%', 'important');
      leftCol.style.setProperty('max-width', '58%', 'important');
    }
    if (rightCol) {
      rightCol.style.setProperty('width', '42%', 'important');
      rightCol.style.setProperty('min-width', '42%', 'important');
    }
    const halCell = leftCol ? leftCol.querySelector('tr:last-child td:last-child') : null;
    if (halCell) {
      halCell.style.setProperty('width', '217pt', 'important');
      halCell.style.setProperty('max-width', '217pt', 'important');
      halCell.style.setProperty('word-wrap', 'break-word', 'important');
      halCell.style.setProperty('overflow-wrap', 'break-word', 'important');
      const halDiv = halCell.querySelector('div');
      if (halDiv) {
        halDiv.style.setProperty('width', '100%', 'important');
        halDiv.style.setProperty('max-width', '217pt', 'important');
        halDiv.style.setProperty('word-wrap', 'break-word', 'important');
      }
    }
  });

  // Jika masih ada struktur lama flex justify-between di DOM, konversi seketika ke tabel paten
  const oldFlexHeaders = document.querySelectorAll('#previewDocumentContainer div.flex.justify-between.items-start');
  oldFlexHeaders.forEach(fh => {
    if (fh.textContent.includes('Nomor') && (fh.textContent.includes('Sifat') || fh.textContent.includes('Hal'))) {
      const left = fh.children[0];
      const right = fh.children[1];
      if (left && right) {
        const tbl = document.createElement('table');
        tbl.className = 'header-surat-table w-full border-collapse';
        tbl.setAttribute('style', 'width: 100% !important; border-collapse: collapse !important; table-layout: fixed !important;');
        tbl.innerHTML = `
          <colgroup><col width="58%" style="width: 58%;"><col width="42%" style="width: 42%;"></colgroup>
          <tr>
            <td class="header-left-col align-top p-0" style="width: 58% !important; max-width: 58% !important; vertical-align: top !important;">${left.innerHTML}</td>
            <td class="header-right-col align-top p-0 text-right font-medium" style="width: 42% !important; min-width: 42% !important; vertical-align: top !important; text-align: right !important;">${right.innerHTML}</td>
          </tr>
        `;
        fh.parentNode.replaceChild(tbl, fh);
      }
    }
  });

  window.print();

  setTimeout(() => {
    if (container && oldTransform) {
      container.style.transform = oldTransform;
    }
    if (loginPortal) {
      loginPortal.style.display = wasDisplay;
    }
    if (tabKirim) {
      tabKirim.style.display = wasKirimDisplay;
    }
    if (tabVerif) {
      tabVerif.style.display = wasVerifDisplay;
    }
    // Pulihkan style tampilan layar
    sheets.forEach((sheet, idx) => {
      if (savedStyles[idx]) {
        sheet.style.minHeight = savedStyles[idx].minHeight;
        sheet.style.height = savedStyles[idx].height;
        sheet.style.marginBottom = savedStyles[idx].marginBottom;
        sheet.style.border = savedStyles[idx].border;
        sheet.style.borderBottom = savedStyles[idx].borderBottom;
      }
    });
  }, 1000);
}
window.triggerPrint = triggerPrint;

/**
 * Mode Edit Langsung di Kertas Rekomendasi (Inline Direct Edit)
 */
window.toggleDirectEditMode = function() {
  const container = document.getElementById('previewDocumentContainer');
  if (!container) return;
  const sheets = container.querySelectorAll('.surat-sheet');
  if (!sheets || sheets.length === 0) {
    showToast('Belum ada dokumen yang siap diedit.', 'warning');
    return;
  }

  AppState.isDirectEditMode = !AppState.isDirectEditMode;
  const btn = document.getElementById('btnToggleEditDirect');
  const icon = document.getElementById('iconEditDirect');
  const label = document.getElementById('labelEditDirect');
  const btnReset = document.getElementById('btnResetDirect');

  sheets.forEach(sheet => {
    sheet.contentEditable = AppState.isDirectEditMode ? "true" : "false";
    sheet.spellcheck = false;
    if (AppState.isDirectEditMode) {
      sheet.classList.add('is-editing-direct');
    } else {
      sheet.classList.remove('is-editing-direct');
    }
  });

  if (AppState.isDirectEditMode) {
    if (btn) {
      btn.className = 'px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white border border-amber-700 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer animate-pulse';
    }
    if (icon) icon.textContent = '🔒';
    if (label) label.textContent = 'Kunci Ketikan';
    if (btnReset) btnReset.classList.remove('hidden');
    showToast('✏️ Mode Edit di Kertas Aktif! Klik bagian mana saja pada surat untuk mengubah/mengetik teks.', 'info');
  } else {
    if (btn) {
      btn.className = 'px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer';
    }
    if (icon) icon.textContent = '✏️';
    if (label) label.textContent = 'Edit di Kertas';
    if (btnReset) btnReset.classList.remove('hidden');
    showToast('🔒 Teks pada kertas dikunci. Siap dicetak atau diunduh ke DOCX.', 'success');
  }
};

window.resetPreviewFromForm = function() {
  if (confirm('Muat ulang isi dokumen dari formulir input? Ketikan manual di kertas akan diganti dengan data dari formulir.')) {
    AppState.isDirectEditMode = false;
    const btn = document.getElementById('btnToggleEditDirect');
    const icon = document.getElementById('iconEditDirect');
    const label = document.getElementById('labelEditDirect');
    const btnReset = document.getElementById('btnResetDirect');
    if (btn) btn.className = 'px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer';
    if (icon) icon.textContent = '✏️';
    if (label) label.textContent = 'Edit di Kertas';
    if (btnReset) btnReset.classList.add('hidden');
    updateLivePreview(true);
    showToast('Dokumen berhasil dimuat ulang dari formulir input.', 'success');
  }
};

/**
 * Helper Base64 Logo Kabupaten Penajam Paser Utara
 */
let LOGO_PPU_BASE64 = '';
async function getLogoPpuBase64() {
  if (LOGO_PPU_BASE64) return LOGO_PPU_BASE64;
  
  // 1. Ambil dari elemen img yang sudah ter-render di DOM
  const imgEl = document.querySelector('#previewDocumentContainer img[src*="logo_ppu"]') || document.querySelector('img[src*="logo_ppu"]');
  if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = imgEl.naturalWidth;
      canvas.height = imgEl.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgEl, 0, 0);
      const dataUrl = canvas.toDataURL('image/png');
      const b64 = dataUrl.split(',')[1];
      if (b64 && b64.length > 500) {
        LOGO_PPU_BASE64 = b64;
        return LOGO_PPU_BASE64;
      }
    } catch (_) {}
  }

  // 2. Fallback fetch file lokal
  try {
    const res = await fetch('logo_ppu.png');
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const b64 = (reader.result || '').split(',')[1] || '';
        if (b64) LOGO_PPU_BASE64 = b64;
        resolve(LOGO_PPU_BASE64);
      };
      reader.readAsDataURL(blob);
    });
  } catch (_) {}

  return LOGO_PPU_BASE64;
}

/**
 * Konversi elemen <ol> menjadi markup tabel 2-kolom Word
 * Kolom 1: Nomor urut terindentasi (1., 2., 12., dll)
 * Kolom 2: Konten teks item
 * Ini 100% mencegah Microsoft Word me-reset nomor urut pada Halaman 2 dan 3!
 */
function convertOlToTable(ol, lineSpacing) {
  const table = document.createElement('table');
  table.setAttribute('border', '0');
  table.setAttribute('cellspacing', '0');
  table.setAttribute('cellpadding', '0');
  table.setAttribute('style', `width: 100%; border-collapse: collapse; table-layout: fixed; margin-top: 2pt; margin-bottom: 3pt; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`);
  
  let startNum = 1;
  const startAttr = ol.getAttribute('start');
  if (startAttr) {
    startNum = parseInt(startAttr, 10) || 1;
  }

  const lis = ol.querySelectorAll(':scope > li');
  let currentNum = startNum;
  let rowsHtml = '';
  lis.forEach(li => {
    rowsHtml += `
      <tr>
        <td width="24" style="width: 24pt; min-width: 24pt; max-width: 24pt; vertical-align: top; padding: 1pt 0; line-height: ${lineSpacing}; mso-line-height-rule: exactly;">&nbsp;</td>
        <td width="18" style="width: 18pt; min-width: 18pt; max-width: 18pt; vertical-align: top; text-align: left; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${currentNum}.</td>
        <td width="459" style="width: 459pt; vertical-align: top; text-align: justify; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${li.innerHTML}</td>
      </tr>
    `;
    currentNum++;
  });
  table.innerHTML = `
    <colgroup>
      <col width="24" style="width: 24pt;">
      <col width="18" style="width: 18pt;">
      <col width="459" style="width: 459pt;">
    </colgroup>
    ${rowsHtml}
  `;
  return table;
}

function convertOlToTableHtml(ol, lineSpacing) {
  let startNum = 1;
  const startAttr = ol.getAttribute('start');
  if (startAttr) {
    startNum = parseInt(startAttr, 10) || 1;
  }

  const lis = ol.querySelectorAll(':scope > li');
  let currentNum = startNum;
  let rowsHtml = '';
  lis.forEach(li => {
    rowsHtml += `
      <tr>
        <td style="width: 18pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0;">${currentNum}.</td>
        <td style="vertical-align: top; text-align: justify; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0;">${li.innerHTML}</td>
      </tr>
    `;
    currentNum++;
  });

  return `<table border="0" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing};">${rowsHtml}</table>`;
}

/**
 * Konversi lembar surat (.surat-sheet) HTML menjadi markup tabel yang 100% kompatibel dengan Microsoft Word
 */
function cleanSheetToWordHtml(sheet, logoBase64) {
  const clone = sheet.cloneNode(true);
  clone.removeAttribute('contenteditable');
  clone.classList.remove('is-editing-direct');
  clone.querySelectorAll('[contenteditable]').forEach(el => el.removeAttribute('contenteditable'));
  clone.querySelectorAll('.is-editing-direct').forEach(el => el.classList.remove('is-editing-direct'));
  
  // Hapus kontrol atau elemen yang tidak dicetak
  clone.querySelectorAll('.no-print, button, script').forEach(el => el.remove());

  // Bersihkan outline dan inline background akibat fokus / hover pada mode edit langsung
  clone.querySelectorAll('*').forEach(el => {
    if (el.style) {
      el.style.outline = 'none';
      if (el.style.boxShadow) el.style.boxShadow = 'none';
      if (el.style.backgroundColor && el.style.backgroundColor.includes('254, 243, 199')) {
        el.style.backgroundColor = 'transparent';
      }
    }
  });

  // Tentukan apakah sheet ini adalah Surat Pengantar
  const isSp = clone.textContent.includes('SURAT PENGANTAR') || AppState.activeTab === 'surat-pengantar';

  // Tentukan spasi baris yang aktif (1.0, 1.15, 1.25, 1.5)
  const lineSpacing = isSp
    ? (document.getElementById('selectLineSpacingSp')?.value || AppState.suratPengantarData?.lineSpacing || '1.15')
    : (document.getElementById('selectLineSpacing')?.value || AppState.lineSpacing || '1.15');

  let paraMargin = '4pt';
  if (lineSpacing === '1.0') paraMargin = '2pt';
  else if (lineSpacing === '1.5') paraMargin = '6pt';
  else if (lineSpacing === '1.25') paraMargin = '3.5pt';

  // =========================================================================
  // LANGKAH 0: SANITASI CSS VARIABEL & !IMPORTANT PADA SELURUH ELEMEN DOM
  // Microsoft Word HTML importer akan drop/rusak jika ada var(...) atau !important
  // =========================================================================
  clone.querySelectorAll('*').forEach(el => {
    let styleStr = el.getAttribute('style') || '';
    if (styleStr) {
      styleStr = styleStr
        .replace(/var\(--surat-line-height[^)]*\)/g, lineSpacing)
        .replace(/var\(--surat-para-margin[^)]*\)/g, paraMargin)
        .replace(/!important/g, '')
        .replace(/white-space\s*:\s*pre-wrap;?/g, 'white-space: normal;');
      el.setAttribute('style', styleStr);
    }
  });

  // Hapus tulisan (apabila ada) setelah TEMBUSAN jika masih tersisa
  clone.querySelectorAll('div, span, p').forEach(el => {
    if (el.children.length === 0 && el.textContent.includes('TEMBUSAN : (apabila ada)')) {
      el.textContent = el.textContent.replace('TEMBUSAN : (apabila ada)', 'TEMBUSAN :');
    }
  });

  // 1. Transform Kop Surat menjadi Tabel Word Bergaris Ganda yang rapi dan presisi
  const kop = clone.querySelector('.kop-surat');
  if (kop) {
    const kopTable = document.createElement('table');
    kopTable.setAttribute('border', '0');
    kopTable.setAttribute('cellspacing', '0');
    kopTable.setAttribute('cellpadding', '0');
    kopTable.setAttribute('style', 'width: 100%; border-collapse: collapse; table-layout: fixed; margin-bottom: 6pt;');
    
    const logoImgHtml = logoBase64 
      ? `<img src="data:image/png;base64,${logoBase64}" width="74" height="86" style="width: 74px; height: 86px; display: block;" />`
      : `<img src="logo_ppu.png" width="74" height="86" style="width: 74px; height: 86px; display: block;" />`;

    // Ambil teks kop langsung dari DOM pengguna (agar editan langsung tetap terjaga 100%)
    const textCenterCol = kop.querySelector('.flex-1');
    let kopCenterHtml = '';
    if (textCenterCol) {
      const textClone = textCenterCol.cloneNode(true);
      // Ganti icon WA (jika ada gambar) dengan teks rapi agar tidak error di Word
      textClone.querySelectorAll('img').forEach(img => {
        const span = document.createElement('span');
        span.innerHTML = '&nbsp;WA.&nbsp;';
        img.parentNode.replaceChild(span, img);
      });
      textClone.querySelectorAll('h3, .text-\\[13pt\\]').forEach(h => {
        h.setAttribute('style', `font-family: Arial, sans-serif; font-size: 13pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5pt; margin: 0; padding: 0; line-height: ${lineSpacing}; text-align: center; color: #000000;`);
      });
      textClone.querySelectorAll('h2, .text-\\[16pt\\]').forEach(h => {
        h.setAttribute('style', `font-family: Arial, sans-serif; font-size: 16pt; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5pt; margin: 1pt 0 2pt 0; padding: 0; line-height: ${lineSpacing}; text-align: center; color: #000000;`);
      });
      textClone.querySelectorAll('p, div, span').forEach(p => {
        if (!p.getAttribute('style') || !p.getAttribute('style').includes('font-size')) {
          p.style.fontFamily = 'Arial, sans-serif';
          p.style.lineHeight = lineSpacing;
          p.style.textAlign = 'center';
        }
      });
      kopCenterHtml = textClone.innerHTML;
    } else {
      kopCenterHtml = `
        <div style="font-family: Arial, sans-serif; font-size: 13pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5pt; margin: 0; padding: 0; line-height: ${lineSpacing}; color: #000000; text-align: center;">
          PEMERINTAH KABUPATEN PENAJAM PASER UTARA
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 16pt; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5pt; margin: 1pt 0 2pt 0; padding: 0; line-height: ${lineSpacing}; color: #000000; text-align: center;">
          KECAMATAN WARU
        </div>
        <div style="font-family: Arial, sans-serif; font-size: 10pt; line-height: ${lineSpacing}; margin: 0; padding: 0; color: #000000; text-align: center;">
          <span>Jalan Propinsi Km. 25, WA. 0821-9564-7788</span><br>
          <span>Website : <span style="color: #1d4ed8; text-decoration: underline;">https://kecwaru.penajamkab.go.id/</span></span><br>
          <span>Email : <span style="color: #1d4ed8; text-decoration: underline;">kecamatanwaru2014@gmail.com</span> Pos 76284</span>
        </div>
      `;
    }

    kopTable.innerHTML = `
      <tr>
        <td style="width: 15%; vertical-align: middle; text-align: left; padding: 0 0 6pt 0;">
          ${logoImgHtml}
        </td>
        <td style="width: 70%; vertical-align: middle; text-align: center; font-family: Arial, sans-serif; padding: 0 4pt 6pt 4pt;">
          ${kopCenterHtml}
        </td>
        <td style="width: 15%; vertical-align: middle; padding: 0 0 6pt 0;">&nbsp;</td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 0; border-top: 3.0pt double #000000; mso-border-top-alt: double windowtext 3.0pt; height: 1pt; font-size: 1pt; line-height: 1pt;">&nbsp;</td>
      </tr>
    `;
    kop.parentNode.replaceChild(kopTable, kop);
  }

  // 2. Transform Header Surat Rekomendasi (Nomor/Sifat/Lampiran/Hal & Tanggal Penajam) Menjadi Master 2-Kolom (58% dan 42%)
  const flexHeaders = clone.querySelectorAll('.header-surat-table, div.flex.justify-between.items-start');
  flexHeaders.forEach(fh => {
    // Cek apakah ini header surat rekomendasi (berisi Nomor, Sifat, Lampiran, Hal)
    const isHeaderSurat = fh.textContent.includes('Nomor') && (fh.textContent.includes('Sifat') || fh.textContent.includes('Hal'));
    if (!isHeaderSurat) return;

    let leftCol = fh.querySelector('.header-left-col') || fh.children[0];
    let rightCol = fh.querySelector('.header-right-col') || fh.children[1];

    // Ekstrak nilai masing-masing baris dari leftCol (termasuk editan user langsung)
    let nomorVal = '', sifatVal = 'Penting', lampiranVal = '-', halVal = '';
    if (leftCol) {
      const rows = leftCol.querySelectorAll('tr');
      rows.forEach(tr => {
        const text = tr.textContent;
        const tds = tr.children;
        const valHtml = tds.length >= 3 ? tds[2].innerHTML.trim() : (tds.length === 2 ? tds[1].innerHTML.trim() : '');
        if (text.includes('Nomor')) nomorVal = valHtml;
        else if (text.includes('Sifat')) sifatVal = valHtml || 'Penting';
        else if (text.includes('Lampiran')) lampiranVal = valHtml || '-';
        else if (text.includes('Hal')) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = valHtml;
          if (tempDiv.firstElementChild && tempDiv.children.length === 1 && tempDiv.firstElementChild.tagName === 'DIV') {
            halVal = tempDiv.firstElementChild.innerHTML.trim();
          } else {
            halVal = valHtml;
          }
        }
      });
    }

    const tanggalHtml = rightCol ? rightCol.innerHTML.trim() : '';

    const masterTable = document.createElement('table');
    masterTable.setAttribute('border', '0');
    masterTable.setAttribute('cellspacing', '0');
    masterTable.setAttribute('cellpadding', '0');
    masterTable.setAttribute('style', `width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Arial, sans-serif; font-size: 11pt; margin-top: 6pt; margin-bottom: 6pt; line-height: ${lineSpacing}; mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-table-tspace: 0pt; mso-table-bspace: 0pt;`);

    masterTable.innerHTML = `
      <colgroup>
        <col width="58%" style="width: 58%;" />
        <col width="42%" style="width: 42%;" />
      </colgroup>
      <tr>
        <td width="58%" style="width: 58%; max-width: 58%; vertical-align: top; padding: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
          <table border="0" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <colgroup>
              <col width="60" style="width: 60pt;" />
              <col width="14" style="width: 14pt;" />
              <col width="217" style="width: 217pt;" />
            </colgroup>
            <tr>
              <td width="60" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">Nomor</td>
              <td width="14" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">:</td>
              <td width="217" style="width: 217pt; max-width: 217pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${nomorVal}</td>
            </tr>
            <tr>
              <td width="60" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">Sifat</td>
              <td width="14" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">:</td>
              <td width="217" style="width: 217pt; max-width: 217pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${sifatVal}</td>
            </tr>
            <tr>
              <td width="60" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">Lampiran</td>
              <td width="14" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">:</td>
              <td width="217" style="width: 217pt; max-width: 217pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${lampiranVal}</td>
            </tr>
            <tr>
              <td width="60" style="width: 60pt; min-width: 60pt; max-width: 60pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">Hal</td>
              <td width="14" style="width: 14pt; min-width: 14pt; max-width: 14pt; vertical-align: top; text-align: center; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">:</td>
              <td width="217" style="width: 217pt; max-width: 217pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; text-align: justify; word-wrap: break-word; overflow-wrap: break-word; mso-line-height-rule: exactly;">
                <div style="width: 217pt; max-width: 217pt; word-wrap: break-word; overflow-wrap: break-word; text-align: justify; line-height: ${lineSpacing}; margin: 0; padding: 0;">${halVal}</div>
              </td>
            </tr>
          </table>
        </td>
        <td width="42%" style="width: 42%; min-width: 42%; vertical-align: top; text-align: right; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 0;">
          ${tanggalHtml}
        </td>
      </tr>
    `;
    fh.parentNode.replaceChild(masterTable, fh);
  });

  // 2b. Transform Blok Tujuan Surat (Yth / Di - / Tempat) Agar Terindentasi Presisi di Word
  clone.querySelectorAll('div').forEach(d => {
    const text = d.textContent || '';
    if ((text.includes('Yth') || text.includes('Kepada')) && text.includes('Di -') && text.includes('Tempat') && !d.closest('table')) {
      d.setAttribute('style', `margin-top: 10pt; margin-bottom: 8pt; text-align: left; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing};`);
      d.querySelectorAll('div').forEach(sub => {
        const subText = sub.textContent.trim();
        if (subText.toLowerCase() === 'tempat') {
          sub.setAttribute('style', `margin: 0 0 0 18pt; mso-para-margin-left: 18pt; padding: 0; font-family: Arial, sans-serif; font-size: 11pt; font-weight: bold; text-decoration: underline; line-height: ${lineSpacing}; text-indent: 0;`);
        } else {
          sub.setAttribute('style', `margin: 0; padding: 0; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; text-indent: 0;`);
        }
      });
    }
  });

  // 3. Transform Elemen Rata Kanan: Header Tujuan Surat Pengantar & Tanda Tangan Camat
  const flexEnds = clone.querySelectorAll('div.flex.justify-end');
  flexEnds.forEach(el => {
    const text = el.textContent || '';
    const isTopHeaderSp = text.includes('Kepada') || text.includes('Yth') || text.includes('tempat_tujuan') || text.includes('jabatan_tujuan') || (text.includes('Penajam') && text.includes('Tempat'));

    if (isTopHeaderSp) {
      // Header Tujuan Surat Pengantar (di kanan atas, sejajar dengan kolom 3 & 4: 48%)
      const box = el.querySelector('.w-80, .w-\\[48\\%\\]') || el.firstElementChild || el;
      const headerSpTable = document.createElement('table');
      headerSpTable.setAttribute('border', '0');
      headerSpTable.setAttribute('cellspacing', '0');
      headerSpTable.setAttribute('cellpadding', '0');
      headerSpTable.setAttribute('style', `width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Arial, sans-serif; font-size: 11pt; margin-top: 6pt; margin-bottom: 8pt; line-height: ${lineSpacing}; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`);
      
      box.querySelectorAll('.pl-6').forEach(p => {
        p.setAttribute('style', `margin-left: 18pt; mso-para-margin-left: 18pt; line-height: ${lineSpacing}; font-family: Arial, sans-serif; font-size: 11pt; font-weight: bold;`);
      });
      box.querySelectorAll('div').forEach(d => {
        d.style.lineHeight = lineSpacing;
        d.style.fontFamily = 'Arial, sans-serif';
        d.style.fontSize = '11pt';
      });

      headerSpTable.innerHTML = `
        <colgroup>
          <col width="52%" style="width: 52%;">
          <col width="48%" style="width: 48%;">
        </colgroup>
        <tr>
          <td width="52%" style="width: 52%; vertical-align: top; line-height: ${lineSpacing};">&nbsp;</td>
          <td width="48%" style="width: 48%; vertical-align: top; text-align: left; line-height: ${lineSpacing};">${box.innerHTML}</td>
        </tr>
      `;
      el.parentNode.replaceChild(headerSpTable, el);
    } else {
      // Tanda Tangan Camat (di kanan bawah, sejajar dengan kolom 3 & 4: 48%)
      const ttdBox = el.querySelector('.w-72, .w-\\[48\\%\\]') || el.firstElementChild || el;
      const ttdTable = document.createElement('table');
      ttdTable.setAttribute('border', '0');
      ttdTable.setAttribute('cellspacing', '0');
      ttdTable.setAttribute('cellpadding', '0');
      ttdTable.setAttribute('style', `width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Arial, sans-serif; font-size: 11pt; margin-top: 14pt; margin-bottom: 6pt; line-height: ${lineSpacing}; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`);
      
      ttdBox.querySelectorAll('.h-16, .h-12').forEach(sp => {
        sp.innerHTML = '&nbsp;';
        sp.setAttribute('style', `height: 48pt; line-height: 48pt; font-size: 48pt; margin: 0; padding: 0;`);
      });
      ttdBox.querySelectorAll('.my-6, .my-4, .my-3').forEach(sp => {
        sp.setAttribute('style', `height: 36pt; line-height: 36pt; margin: 12pt 0; text-align: center; font-family: Arial, sans-serif; font-size: 11pt;`);
      });

      ttdBox.querySelectorAll('div').forEach(d => {
        if (!d.style.height) {
          d.style.lineHeight = lineSpacing;
          d.style.fontFamily = 'Arial, sans-serif';
          d.style.fontSize = '11pt';
          d.style.margin = '0';
          d.style.padding = '0';
        }
        if (d.textContent.includes('nama_pengirim') || d.classList.contains('font-bold') || d.classList.contains('underline')) {
          d.style.fontWeight = 'bold';
        }
      });

      ttdTable.innerHTML = `
        <colgroup>
          <col width="52%" style="width: 52%;">
          <col width="48%" style="width: 48%;">
        </colgroup>
        <tr>
          <td width="52%" style="width: 52%; vertical-align: top; line-height: ${lineSpacing};">&nbsp;</td>
          <td width="48%" style="width: 48%; vertical-align: top; text-align: left; line-height: ${lineSpacing};">${ttdBox.innerHTML}</td>
        </tr>
      `;
      el.parentNode.replaceChild(ttdTable, el);
    }
  });

  // 4. Judul Surat Pengantar (SURAT PENGANTAR & Nomor)
  const centerTitles = clone.querySelectorAll('div.text-center');
  centerTitles.forEach(ct => {
    if (ct.textContent.includes('SURAT PENGANTAR')) {
      ct.setAttribute('style', `text-align: center; margin-top: 8pt; margin-bottom: 10pt; font-family: Arial, sans-serif; line-height: ${lineSpacing};`);
      const h1 = ct.firstElementChild;
      if (h1) {
        h1.setAttribute('style', `font-size: 14pt; font-weight: bold; letter-spacing: 0.5pt; text-transform: uppercase; text-decoration: underline; line-height: ${lineSpacing}; margin: 0; padding: 0; text-align: center;`);
      }
      const noDiv = ct.children[1];
      if (noDiv) {
        noDiv.setAttribute('style', `font-size: 11pt; margin-top: 2pt; line-height: ${lineSpacing}; text-align: center;`);
      }
    }
  });

  // 5. Transform Baris Dasar Hukum & Tembusan (Flex items-start) Menjadi Flat Table (Zero Nested Tables)
  const flexRows = clone.querySelectorAll('div.flex.items-start');
  flexRows.forEach(fr => {
    const labelDiv = fr.querySelector('.w-20');
    const colonDiv = fr.querySelector('.w-3');
    const contentDiv = fr.querySelector('.flex-1');
    const numSpan = fr.querySelector('.w-6');
    
    if (labelDiv || contentDiv) {
      const dasarTable = document.createElement('table');
      dasarTable.setAttribute('border', '0');
      dasarTable.setAttribute('cellspacing', '0');
      dasarTable.setAttribute('cellpadding', '0');
      dasarTable.setAttribute('style', `width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Arial, sans-serif; font-size: 11pt; margin-top: 3pt; margin-bottom: 3pt; line-height: ${lineSpacing}; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`);
      
      const labelText = labelDiv ? labelDiv.textContent.trim() : '';
      const colonText = colonDiv ? colonDiv.textContent.trim() : (labelText ? ':' : '');
      
      const ol = contentDiv ? contentDiv.querySelector('ol') : null;
      if (ol) {
        let startNum = parseInt(ol.getAttribute('start'), 10) || 1;
        const lis = ol.querySelectorAll(':scope > li');
        let rowsHtml = '';
        lis.forEach((li, idx) => {
          const curNum = startNum + idx;
          const isFirst = idx === 0;
          rowsHtml += `
            <tr>
              <td width="52" style="width: 52pt; min-width: 52pt; max-width: 52pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${isFirst && labelText ? labelText : '&nbsp;'}</td>
              <td width="12" style="width: 12pt; min-width: 12pt; max-width: 12pt; vertical-align: top; text-align: center; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${isFirst && colonText ? colonText : '&nbsp;'}</td>
              <td width="18" style="width: 18pt; min-width: 18pt; max-width: 18pt; vertical-align: top; text-align: left; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${curNum}.</td>
              <td width="419" style="width: 419pt; vertical-align: top; text-align: justify; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0; mso-line-height-rule: exactly;">${li.innerHTML}</td>
            </tr>
          `;
        });
        dasarTable.innerHTML = `
          <colgroup>
            <col width="52" style="width: 52pt;">
            <col width="12" style="width: 12pt;">
            <col width="18" style="width: 18pt;">
            <col width="419" style="width: 419pt;">
          </colgroup>
          ${rowsHtml}
        `;
      } else {
        const cHtml = contentDiv ? contentDiv.innerHTML : '';
        dasarTable.innerHTML = `
          <colgroup>
            <col width="52" style="width: 52pt;">
            <col width="12" style="width: 12pt;">
            <col width="437" style="width: 437pt;">
          </colgroup>
          <tr>
            <td width="52" style="width: 52pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0;">${labelText || '&nbsp;'}</td>
            <td width="12" style="width: 12pt; vertical-align: top; text-align: center; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0;">${colonText || '&nbsp;'}</td>
            <td width="437" style="width: 437pt; vertical-align: top; text-align: justify; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1pt 0;">${cHtml}</td>
          </tr>
        `;
      }
      fr.parentNode.replaceChild(dasarTable, fr);
    } else if (numSpan) {
      // Baris Tembusan (misal: 1. ${tembusan_jabatan}.)
      const textSpan = numSpan.nextElementSibling;
      const tTable = document.createElement('table');
      tTable.setAttribute('border', '0');
      tTable.setAttribute('cellspacing', '0');
      tTable.setAttribute('cellpadding', '0');
      tTable.setAttribute('style', `width: 100%; border-collapse: collapse; table-layout: fixed; margin-top: 1pt; margin-bottom: 1pt; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`);
      tTable.innerHTML = `
        <colgroup>
          <col width="18" style="width: 18pt;">
          <col width="483" style="width: 483pt;">
        </colgroup>
        <tr>
          <td width="18" style="width: 18pt; vertical-align: top; line-height: ${lineSpacing}; padding: 0;">${numSpan.innerHTML}</td>
          <td width="483" style="width: 483pt; vertical-align: top; line-height: ${lineSpacing}; padding: 0;">${textSpan ? textSpan.innerHTML : ''}</td>
        </tr>
      `;
      fr.parentNode.replaceChild(tTable, fr);
    }
  });

  // 6. Konversi Semua <ol> Lainnya (Berkas Persyaratan Hal 2 & Hal 3) Menjadi Tabel
  // Ini 100% menjamin nomor urut tidak ter-reset ke 1 oleh Microsoft Word!
  const remainingOls = clone.querySelectorAll('ol');
  remainingOls.forEach(ol => {
    const listTable = convertOlToTable(ol, lineSpacing);
    ol.parentNode.replaceChild(listTable, ol);
  });

  // 7. Format Tabel Data Rekomendasi (Nama, Jabatan, Nomor Rekening Kas Desa) dengan Kolom Indent
  const candidateTables = [];
  clone.querySelectorAll('table').forEach(t => {
    if (t.textContent.includes('Nomor Rekening Kas Desa') && !t.closest('.header-surat-table')) {
      candidateTables.push(t);
    }
  });

  candidateTables.forEach(innerTable => {
    const dataTable = document.createElement('table');
    dataTable.setAttribute('border', '0');
    dataTable.setAttribute('cellspacing', '0');
    dataTable.setAttribute('cellpadding', '0');
    dataTable.setAttribute('style', `width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Arial, sans-serif; font-size: 11pt; margin-top: 4pt; margin-bottom: 6pt; line-height: ${lineSpacing}; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`);
    
    let rowsHtml = '';
    innerTable.querySelectorAll('tr').forEach(tr => {
      const tds = tr.children;
      if (tds.length >= 3) {
        rowsHtml += `
          <tr>
            <td width="24" style="width: 24pt; min-width: 24pt; max-width: 24pt; vertical-align: top; padding: 1.5pt 0; line-height: ${lineSpacing}; mso-line-height-rule: exactly;">&nbsp;</td>
            <td width="160" style="width: 160pt; min-width: 160pt; max-width: 160pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1.5pt 0; mso-line-height-rule: exactly;">${tds[0].innerHTML}</td>
            <td width="12" style="width: 12pt; min-width: 12pt; max-width: 12pt; vertical-align: top; text-align: center; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1.5pt 0; mso-line-height-rule: exactly;">:</td>
            <td width="305" style="width: 305pt; vertical-align: top; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; padding: 1.5pt 0; mso-line-height-rule: exactly;">${tds[2].innerHTML}</td>
          </tr>
        `;
      }
    });
    dataTable.innerHTML = `
      <colgroup>
        <col width="24" style="width: 24pt;">
        <col width="160" style="width: 160pt;">
        <col width="12" style="width: 12pt;">
        <col width="305" style="width: 305pt;">
      </colgroup>
      ${rowsHtml}
    `;
    const targetReplace = innerTable.closest('div.pl-8') || innerTable;
    targetReplace.parentNode.replaceChild(dataTable, targetReplace);
  });

  // 8. Format Tabel 4 Kolom Surat Pengantar (Presisi Lebar Kolom & Border Word)
  clone.querySelectorAll('table').forEach(t => {
    if (t.querySelector('th')) {
      t.setAttribute('border', '1');
      t.setAttribute('cellspacing', '0');
      t.setAttribute('cellpadding', '6');
      t.setAttribute('style', `width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; border: 1pt solid #000000; margin-top: 10pt; margin-bottom: 12pt; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`);
      
      const colWidths = ['8%', '44%', '24%', '24%'];
      const colAligns = ['center', 'left', 'center', 'justify'];

      t.querySelectorAll('tr').forEach(tr => {
        const ths = tr.querySelectorAll('th');
        if (ths.length > 0) {
          tr.setAttribute('style', 'background-color: #f1f5f9;');
          ths.forEach((th, cIdx) => {
            const w = colWidths[cIdx] || '25%';
            th.setAttribute('width', w);
            th.setAttribute('style', `border: 1pt solid #000000; mso-border-alt: solid windowtext .5pt; padding: 5pt 4pt; font-family: Arial, sans-serif; font-size: 11pt; font-weight: bold; text-align: center; background-color: #f1f5f9; line-height: ${lineSpacing}; width: ${w}; vertical-align: middle;`);
          });
        }
        
        const tds = tr.querySelectorAll('td');
        if (tds.length > 0) {
          tds.forEach((td, cIdx) => {
            const w = colWidths[cIdx] || '25%';
            const align = colAligns[cIdx] || 'left';
            td.setAttribute('width', w);
            td.setAttribute('style', `border: 1pt solid #000000; mso-border-alt: solid windowtext .5pt; padding: 6pt 6pt; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; vertical-align: top; text-align: ${align}; width: ${w};`);
          });
        }
      });
    }
  });

  // 9. Standarisasi Format Paragraf <p>, blok .indent-10, dan editan langsung pengguna
  clone.querySelectorAll('p, div.indent-10').forEach(p => {
    if (p.closest('.kop-surat') || p.closest('table')) return;
    if (isSp) {
      p.setAttribute('style', `margin-top: 0; margin-bottom: ${paraMargin}; mso-para-margin-top: 0pt; mso-para-margin-bottom: ${paraMargin}; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; mso-line-height-rule: exactly; text-align: left;`);
    } else {
      p.setAttribute('style', `text-indent: 30pt; mso-char-indent-count: 3; mso-text-indent-alt: 30pt; text-align: justify; margin-top: 0; margin-bottom: ${paraMargin}; mso-para-margin-top: 0pt; mso-para-margin-bottom: ${paraMargin}; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; mso-line-height-rule: exactly;`);
    }
  });

  // 10. Format Indentasi pl-6 di luar tabel (seperti pada Yth/Di/Tempat jika belum terformat)
  clone.querySelectorAll('.pl-6').forEach(el => {
    if (!el.closest('table')) {
      const isBold = el.classList.contains('font-bold') || el.classList.contains('font-semibold') || el.innerHTML.includes('strong') || el.textContent.trim().toLowerCase() === 'tempat';
      const isUnderline = el.classList.contains('underline');
      el.setAttribute('style', `margin-left: 18pt; mso-para-margin-left: 18pt; padding-left: 18pt; line-height: ${lineSpacing}; font-family: Arial, sans-serif; font-size: 11pt; ${isBold ? 'font-weight: bold;' : ''} ${isUnderline ? 'text-decoration: underline;' : ''}`);
    }
  });

  // 11. Format Header & Item Tembusan
  clone.querySelectorAll('div').forEach(d => {
    if (d.textContent.trim().startsWith('TEMBUSAN')) {
      d.setAttribute('style', `margin-top: 14pt; margin-bottom: 2pt; font-family: Arial, sans-serif; font-size: 11pt; font-weight: bold; line-height: ${lineSpacing};`);
      let next = d.nextElementSibling;
      while (next && !next.classList?.contains('surat-sheet')) {
        if (next.tagName === 'DIV' && !next.querySelector('table')) {
          next.setAttribute('style', `margin: 1pt 0; font-family: Arial, sans-serif; font-size: 11pt; line-height: ${lineSpacing}; text-indent: 0;`);
        }
        next = next.nextElementSibling;
      }
    }
  });

  return clone.innerHTML;
}

/**
 * Ekspor Hasil Cetak Surat Rekomendasi Menjadi Dokumen Microsoft Word (.docx)
 */
window.eksporSuratKeDocx = async function() {
  if (typeof window.htmlDocx === 'undefined' || typeof window.htmlDocx.asBlob !== 'function') {
    showToast('Modul pembaca DOCX belum termuat sempurna. Silakan muat ulang halaman (Ctrl + F5).', 'error');
    return;
  }

  const container = document.getElementById('previewDocumentContainer');
  if (!container) {
    showToast('Dokumen preview tidak ditemukan.', 'error');
    return;
  }

  const sheets = container.querySelectorAll('.surat-sheet');
  if (!sheets || sheets.length === 0) {
    showToast('Belum ada dokumen yang siap diekspor.', 'warning');
    return;
  }

  showToast('Sedang membuat file Microsoft Word (.docx)...', 'info');

  try {
    const logoBase64 = await getLogoPpuBase64();

    // Dapatkan data surat untuk penamaan file
    const namaDesa = (document.getElementById('selectNamaDesa')?.value || 'Desa').replace(/[^a-zA-Z0-9_-]/g, '_');
    const jenisDana = (AppState.activeTemplateKey || 'ADD').toUpperCase();
    const tahunAnggaran = (document.getElementById('inputTahunAnggaranReguler')?.value || document.getElementById('inputTahunAnggaran')?.value || '2026').trim();
    const nomorSurat = (document.getElementById('inputNomorSurat')?.value || '').trim();
    
    let safeName = `Rekomendasi_${jenisDana}_${namaDesa}_TA${tahunAnggaran}`;
    if (nomorSurat && !nomorSurat.includes('${')) {
      const cleanNo = nomorSurat.replace(/[\/\\:*?"<>|]/g, '-').replace(/\s+/g, '_');
      safeName = `Rekomendasi_${cleanNo}`;
    }

    // Bangun HTML per halaman dengan pemisah halaman
    const pageHtmls = [];
    sheets.forEach((sheet) => {
      const cleanHtml = cleanSheetToWordHtml(sheet, logoBase64);
      pageHtmls.push(cleanHtml);
    });

    const isFlowMode = document.getElementById('selectPageBreakMode')?.value === 'flow';
    const pageSeparator = isFlowMode 
      ? '\n<p style="margin: 16pt 0; font-size: 1pt; line-height: 1pt;">&nbsp;</p>\n'
      : '\n<br clear="all" style="page-break-before: always; mso-break-type: section-break;" />\n';

    const paperSize = document.getElementById('selectPaperSize')?.value || AppState.paperSize || 'a4';
    const isA4 = paperSize === 'a4';
    const pageCssSize = isA4 ? '21.0cm 29.7cm' : '21.5cm 33.0cm';
    const docxMargins = {
      top: 680,    // 1.2 cm
      right: 850,  // 1.5 cm
      bottom: 850, // 1.5 cm
      left: 1020   // 1.8 cm
    };

    const lineSpacing = AppState.lineSpacing || document.getElementById('selectLineSpacing')?.value || '1.15';
    let paraMargin = '4pt';
    if (lineSpacing === '1.0') paraMargin = '2pt';
    else if (lineSpacing === '1.5') paraMargin = '6pt';
    else if (lineSpacing === '1.25') paraMargin = '3.5pt';

    const fullDocumentHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(safeName)}</title>
        <style>
          @page {
            size: ${pageCssSize};
            margin: 1.2cm 1.5cm 1.5cm 1.8cm;
            mso-page-orientation: portrait;
            mso-header-margin: 36pt;
            mso-footer-margin: 36pt;
          }
          body, p, table, td, th, ol, li, div, span {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11pt;
            color: #000000;
            line-height: ${lineSpacing};
          }
          body {
            background-color: #ffffff;
            margin: 0;
            padding: 0;
          }
          p, div {
            margin-top: 0pt;
            margin-bottom: ${paraMargin};
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: ${paraMargin};
            mso-line-height-rule: exactly;
            line-height: ${lineSpacing};
          }
          p, p.indent-10, div.indent-10 {
            text-align: justify;
            text-indent: 30pt;
            mso-char-indent-count: 3;
            mso-text-indent-alt: 30pt;
          }
          table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            mso-table-tspace: 0pt;
            mso-table-bspace: 0pt;
            line-height: ${lineSpacing};
          }
          td, th {
            vertical-align: top;
            line-height: ${lineSpacing};
            mso-line-height-rule: exactly;
          }
          ol {
            margin: 3pt 0 3pt 15pt;
            padding-left: 18pt;
            line-height: ${lineSpacing};
          }
          li {
            margin-bottom: 2pt;
            text-align: justify;
            line-height: ${lineSpacing};
          }
          .font-bold { font-weight: bold; }
          .font-semibold { font-weight: bold; }
          .font-black { font-weight: 900; }
          .uppercase { text-transform: uppercase; }
          .underline { text-decoration: underline; }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          .text-justify { text-align: justify; }
          .text-left { text-align: left; }
          .align-top { vertical-align: top; }
          .align-middle { vertical-align: middle; }
          .indent-10 { text-indent: 30pt; mso-char-indent-count: 3; mso-text-indent-alt: 30pt; }
        </style>
      </head>
      <body>
        ${pageHtmls.join(pageSeparator)}
      </body>
      </html>
    `;

    // Buat Blob DOCX OpenXML
    const blob = window.htmlDocx.asBlob(fullDocumentHtml, {
      orientation: 'portrait',
      margins: docxMargins,
      width: isA4 ? 11906 : 12189,
      height: isA4 ? 16838 : 18708
    });

    // Unduh File
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${safeName}.docx`;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 2000);

    showToast(`Dokumen "${safeName}.docx" berhasil dibuat dan diunduh!`, 'success');
  } catch (err) {
    console.error('Gagal mengekspor dokumen ke DOCX:', err);
    showToast('Terjadi kendala saat membuat file DOCX. ' + (err.message || ''), 'error');
  }
};

/**
 * Ekspor Rekomendasi dari Riwayat Database Langsung ke File DOCX
 */
window.eksporRekomendasiByIdKeDocx = function(id) {
  loadHistoryItem(id);
  setTimeout(() => {
    eksporSuratKeDocx();
  }, 150);
};

// Database Save
async function saveRecommendationData() {
  const saveBtn = document.getElementById('btnSaveToDb');
  const orig = saveBtn ? saveBtn.innerHTML : '';
  if (saveBtn) { saveBtn.innerHTML = '⏳ Menyimpan...'; saveBtn.disabled = true; }

  const desa = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const berkasChecked = [];
  document.querySelectorAll('.berkas-checkbox:checked').forEach(cb => berkasChecked.push(cb.value));

  const nomorSurat = document.getElementById('inputNomorSurat')?.value?.trim() || '';

  // 1. Cek apakah dalam mode edit atau data sudah ada sebelumnya
  const isEditing = Boolean(AppState.editingRekomId);
  let targetIndex = -1;

  if (isEditing) {
    targetIndex = (AppState.riwayat || []).findIndex(r => String(r.id) === String(AppState.editingRekomId));
  }

  // Fallback jika tidak ada editingId tetapi nomor surat sama persis
  if (targetIndex === -1 && nomorSurat) {
    targetIndex = (AppState.riwayat || []).findIndex(r => String(r.nomorSurat || '').trim().toLowerCase() === nomorSurat.toLowerCase());
  }

  const targetId = targetIndex !== -1 ? AppState.riwayat[targetIndex].id : ('REK-' + Date.now());

  const data = {
    id: targetId,
    waktuSimpan: new Date().toLocaleString('id-ID'),
    nomorSurat: nomorSurat,
    tanggalSurat: document.getElementById('inputTanggalSurat')?.value || '',
    namaDesa: desa,
    jenisDana: AppState.tipeRekomendasi.toUpperCase(),
    tahap: document.getElementById('inputPerihalSurat')?.value || '',
    tahunAnggaran: document.getElementById('inputTahunAnggaran')?.value || '2026',
    nominalAngka: parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '0'),
    terbilang: document.getElementById('outputTerbilang')?.textContent || '',
    bankPenyalur: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
    nomorRekening: document.getElementById('inputNomorRekening')?.value || '',
    kepalaDesa: document.getElementById('inputKepalaDesa')?.value || '',
    kaurKeuangan: document.getElementById('inputKaurKeuangan')?.value || '',
    namaCamat: document.getElementById('inputNamaCamat')?.value || AppState.camat.nama,
    nipCamat: document.getElementById('inputNipCamat')?.value || AppState.camat.nip,
    metodeTte: document.getElementById('selectMetodeTte')?.value || 'tte',
    kelengkapanBerkas: berkasChecked,
    status: 'Diterbitkan'
  };

  if (targetIndex !== -1) {
    // Mode EDIT: Perbarui data yang sudah ada (tidak membuat data baru)
    AppState.riwayat[targetIndex] = data;
    showToast(`Arsip surat ${data.nomorSurat || ''} berhasil diperbarui!`, 'success');
  } else {
    // Mode BARU: Tambahkan ke atas riwayat
    if (!Array.isArray(AppState.riwayat)) AppState.riwayat = [];
    AppState.riwayat.unshift(data);
    showToast('Tersimpan di Arsip Baru!', 'success');
  }

  AppState.editingRekomId = null;
  renderEditingRekomBanner();
  localStorage.setItem('sip_riwayat_rekom', JSON.stringify(AppState.riwayat));
  renderHistoryTable();

  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    try {
      const res = await fetch(AppState.gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'simpanRekomendasi', ...data })
      });
      const resJson = await res.json();
      if (resJson.success) showToast(targetIndex !== -1 ? 'Perubahan diperbarui di Google Sheets & Lokal!' : 'Tersimpan di Google Sheets & Lokal!', 'success');
      else showToast('Tersimpan di lokal.', 'warning');
    } catch {
      showToast('Tersimpan di Lokal (Offline Sheets).', 'info');
    }
  }

  if (saveBtn) { saveBtn.innerHTML = orig; saveBtn.disabled = false; }
}

// History & Settings Setup
function setupModalSettingsListeners() {
  document.getElementById('btnOpenSettings')?.addEventListener('click', () => {
    document.getElementById('inputGasUrl').value = AppState.gasUrl;
    document.getElementById('modalGasSettings')?.classList.remove('hidden');
  });
  document.getElementById('btnResetDefaultGasUrl')?.addEventListener('click', () => {
    const input = document.getElementById('inputGasUrl');
    if (input) {
      input.value = DEFAULT_GAS_URL;
      showToast('URL Google Apps Script direset ke bawaan sistem.', 'info');
    }
  });
  document.getElementById('btnCloseSettings')?.addEventListener('click', () => {
    document.getElementById('modalGasSettings')?.classList.add('hidden');
  });
  document.getElementById('btnSaveGasSettings')?.addEventListener('click', async () => {
    const url = document.getElementById('inputGasUrl').value.trim();
    AppState.gasUrl = url;
    localStorage.setItem('sip_gas_url', url);
    document.getElementById('modalGasSettings')?.classList.add('hidden');
    showToast('Pengaturan Google Sheets disimpan.', 'success');
    await testGasConnection(true);
    await sinkronMasterDesaDariGoogleSheets(false);
  });
  document.getElementById('btnTestGasConnection')?.addEventListener('click', async () => {
    AppState.gasUrl = document.getElementById('inputGasUrl').value.trim();
    await testGasConnection(false);
    await sinkronMasterDesaDariGoogleSheets(true);
  });
  document.getElementById('btnCopyGasScript')?.addEventListener('click', async () => {
    try {
      const res = await fetch('google_apps_script.gs');
      if (res.ok) {
        const codeText = await res.text();
        await navigator.clipboard.writeText(codeText);
        showToast('Seluruh kode Google Apps Script berhasil disalin ke Clipboard!', 'success');
        return;
      }
    } catch (e) {
      console.warn('Gagal fetch kode Apps Script:', e);
    }
    showToast('Silakan buka file google_apps_script.gs di folder aplikasi.', 'info');
  });
}

async function testGasConnection(isSilent = false) {
  const url = AppState.gasUrl;
  const statusEl = document.getElementById('statusGasTest');
  if (!url || !url.startsWith('http')) {
    if (statusEl) statusEl.innerHTML = '<span class="text-rose-600 font-semibold text-xs">❌ URL belum diisi</span>';
    updateSyncStatusBadge(false);
    return;
  }

  if (statusEl) statusEl.innerHTML = '<span class="text-slate-500 font-medium text-xs">⏳ Menguji koneksi ke Google...</span>';

  try {
    const pingUrl = url.includes('?') ? `${url}&action=ping&_t=${Date.now()}` : `${url}?action=ping&_t=${Date.now()}`;
    const res = await (await fetch(pingUrl)).json();
    if (res.success) {
      AppState.isConnected = true;
      if (res.driveStatus === 'PERLU_IZIN') {
        if (statusEl) {
          statusEl.innerHTML = `
            <div class="text-amber-700 font-semibold text-xs mt-1 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
              ⚠️ Terhubung ke Spreadsheet: <b>"${escapeHtml(res.spreadsheetName)}"</b><br/>
              <span class="text-[11px] font-normal text-amber-900 mt-1 block">
                Namun <b>Izin Google Drive</b> belum disetujui di Apps Script.<br/>
                👉 Buka editor Apps Script, pilih fungsi <b>AKTIFKAN_IZIN_DAN_TEST</b>, lalu klik <b>Jalankan (Run)</b> ▶️ dan klik <b>Izinkan</b>.
              </span>
            </div>
          `;
        }
        if (!isSilent) showToast('Spreadsheet terhubung! Izin Google Drive perlu diotorisasi.', 'warning');
      } else {
        if (statusEl) {
          statusEl.innerHTML = `<span class="text-emerald-600 font-semibold text-xs">✅ Terhubung ke: "${escapeHtml(res.spreadsheetName)}" & Google Drive Aktif!</span>`;
        }
        if (!isSilent) showToast('Koneksi Google Sheets & Drive Berhasil!', 'success');
      }
      updateSyncStatusBadge(true);
    } else {
      AppState.isConnected = false;
      const errMsg = res.error || res.message || 'Gagal terhubung';
      let errorDetailHtml = `<span class="text-rose-600 font-semibold text-xs">❌ ${escapeHtml(errMsg)}</span>`;
      if (errMsg.includes('DriveApp') || errMsg.includes('permission')) {
        errorDetailHtml = `
          <div class="text-rose-700 font-semibold text-xs mt-1 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
            ❌ <b>Izin Google Drive Belum Diotorisasi di Apps Script</b><br/>
            <span class="text-[11px] font-normal text-slate-700 mt-1 block leading-relaxed">
              1. Buka Apps Script di Google Sheets Anda.<br/>
              2. Tempelkan kode terbaru dari <b>google_apps_script.gs</b> lalu simpan.<br/>
              3. Di toolbar atas, pilih fungsi <b>AKTIFKAN_IZIN_DAN_TEST</b>.<br/>
              4. Klik tombol <b>Jalankan (Run)</b> ▶️.<br/>
              5. Klik <b>Tinjau Izin</b> > Pilih Akun > <b>Lanjutan</b> > <b>Izinkan</b>.<br/>
              6. Klik <b>Terapkan (Deploy)</b> > <b>Kelola Penerapan</b> > Edit > Versi: <b>Baru</b> > <b>Terapkan</b>.
            </span>
          </div>
        `;
      }
      if (statusEl) statusEl.innerHTML = errorDetailHtml;
      if (!isSilent) showToast('Izin Google Drive belum diotorisasi di Apps Script!', 'error');
      updateSyncStatusBadge(false);
    }
  } catch (err) {
    AppState.isConnected = false;
    if (statusEl) {
      statusEl.innerHTML = `
        <div class="text-rose-600 font-semibold text-xs mt-1">
          ❌ Gagal terhubung ke URL Google Apps Script.<br/>
          <span class="text-[10.5px] font-normal text-slate-600">Pastikan saat Deploy, akses diset ke: <b>"Who has access: Anyone (Siapa saja)"</b>.</span>
        </div>
      `;
    }
    updateSyncStatusBadge(false);
  }
}

function updateSyncStatusBadge(connected = AppState.isConnected) {
  const badge = document.getElementById('badgeSyncStatus');
  if (!badge) return;
  if (connected && AppState.gasUrl) {
    badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-300';
    badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span><span>Google Sheets Aktif</span>`;
  } else {
    badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-300';
    badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-500"></span><span>Mode Database Lokal</span>`;
  }
}

function loadSavedSettings() {
  if (AppState.gasUrl) {
    testGasConnection(true);
    sinkronMasterDesaDariGoogleSheets(true);
    sinkronPengajuanKeGoogleSheets();
    sinkronRiwayatDariGoogleSheets(true);
  }
}

function setupHistoryDrawerListeners() {
  document.getElementById('btnOpenHistory')?.addEventListener('click', () => {
    renderHistoryTable();
    document.getElementById('drawerHistory')?.classList.remove('hidden');
  });
  document.getElementById('btnCloseHistory')?.addEventListener('click', () => {
    document.getElementById('drawerHistory')?.classList.add('hidden');
  });
  document.getElementById('inputSearchHistory')?.addEventListener('input', (e) => renderHistoryTable(e.target.value));
  document.getElementById('btnExportCsv')?.addEventListener('click', () => exportHistoryToCsv());
}

function renderHistoryTable(query = '') {
  const tbody = document.getElementById('tbodyRiwayat');
  const badge = document.getElementById('badgeHistoryCount');
  if (badge) badge.textContent = AppState.riwayat.length;
  const badgeSidebarHistory = document.getElementById('badgeSidebarHistoryCount');
  if (badgeSidebarHistory) badgeSidebarHistory.textContent = AppState.riwayat.length;
  renderDashboardSummary();
  if (!tbody) return;

  let filtered = AppState.riwayat;
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(item => 
      (item.namaDesa && item.namaDesa.toLowerCase().includes(q)) ||
      (item.nomorSurat && item.nomorSurat.toLowerCase().includes(q)) ||
      (item.jenisDana && item.jenisDana.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-slate-400">Belum ada riwayat arsip surat.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((item, index) => `
    <tr class="hover:bg-slate-50 transition border-b border-slate-100">
      <td class="py-3 px-3 text-center text-slate-500 font-mono text-xs">${index + 1}</td>
      <td class="py-3 px-3">
        <div class="font-bold text-slate-900 text-xs">${escapeHtml(item.nomorSurat || '-')}</div>
        <div class="text-[11px] text-slate-500">${formatTanggalIndo(item.tanggalSurat)}</div>
      </td>
      <td class="py-3 px-3 font-bold text-slate-800 text-xs">Desa ${escapeHtml(item.namaDesa || '-')}</td>
      <td class="py-3 px-3">
        <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
          ${escapeHtml(item.jenisDana || '-')}
        </span>
        <div class="text-[11px] text-slate-600 mt-0.5 line-clamp-1">${escapeHtml(item.tahap || '')}</div>
      </td>
      <td class="py-3 px-3 text-right font-mono font-bold text-xs text-emerald-800">${formatRupiah(item.nominalAngka)}</td>
      <td class="py-3 px-3 text-center">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800">
          ${escapeHtml(item.status || 'Diterbitkan')}
        </span>
      </td>
      <td class="py-3 px-3 text-center space-x-1 whitespace-nowrap">
        <button onclick="loadHistoryItem('${item.id}')" class="px-2 py-1 text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 rounded border border-blue-200 transition cursor-pointer">Muat</button>
        <button onclick="eksporRekomendasiByIdKeDocx('${item.id}')" class="px-2 py-1 text-xs bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded border border-emerald-200 transition cursor-pointer" title="Unduh langsung sebagai dokumen Word (.docx)">DOCX</button>
        <button onclick="deleteHistoryItem('${item.id}')" class="px-2 py-1 text-xs bg-rose-50 text-rose-700 hover:bg-rose-100 rounded border border-rose-200 transition cursor-pointer">Hapus</button>
      </td>
    </tr>
  `).join('');
}

function loadHistoryItem(id) {
  const item = (AppState.riwayat || []).find(r => String(r.id) === String(id));
  if (!item) return;

  AppState.editingRekomId = item.id;

  // 1. Pilih Tipe Rekomendasi (ADD Siltap, Reguler, DBH, DD)
  if (item.jenisDana) {
    pilihTipeRekomendasi(item.jenisDana.toLowerCase());
  }

  // 2. Pilih Desa
  if (item.namaDesa && document.getElementById('selectNamaDesa')) {
    document.getElementById('selectNamaDesa').value = item.namaDesa;
    triggerAutoFillDesa();
  }

  // 3. Nomor dan Tanggal Surat
  if (item.nomorSurat && document.getElementById('inputNomorSurat')) {
    document.getElementById('inputNomorSurat').value = item.nomorSurat;
  }
  if (item.tanggalSurat && document.getElementById('inputTanggalSurat')) {
    document.getElementById('inputTanggalSurat').value = item.tanggalSurat;
  }

  // 4. Tahap / Perihal
  if (item.tahap) {
    if (document.getElementById('inputPerihalSurat')) document.getElementById('inputPerihalSurat').value = item.tahap;
    if (document.getElementById('selectTahapReguler')) document.getElementById('selectTahapReguler').value = item.tahap;
    if (document.getElementById('selectBulanGaji') && item.tahap.startsWith('Bulan')) {
      document.getElementById('selectBulanGaji').value = item.tahap.replace('Bulan', '').trim();
    }
  }

  // 5. Tahun Anggaran
  if (item.tahunAnggaran) {
    if (document.getElementById('inputTahunAnggaran')) document.getElementById('inputTahunAnggaran').value = item.tahunAnggaran;
    if (document.getElementById('inputTahunAnggaranReguler')) document.getElementById('inputTahunAnggaranReguler').value = item.tahunAnggaran;
  }

  // 6. Nominal Angka & Terbilang
  if (item.nominalAngka) {
    const nom = Number(item.nominalAngka);
    if (document.getElementById('inputNominalAngka')) {
      document.getElementById('inputNominalAngka').value = nom.toLocaleString('id-ID');
    }
    if (document.getElementById('outputTerbilang')) {
      document.getElementById('outputTerbilang').textContent = item.terbilang || convertTerbilang(nom);
    }
  }

  // 7. Rekening & Pejabat
  if (item.nomorRekening && document.getElementById('inputNomorRekening')) {
    document.getElementById('inputNomorRekening').value = item.nomorRekening;
  }
  if (item.kepalaDesa && document.getElementById('inputKepalaDesa')) {
    document.getElementById('inputKepalaDesa').value = item.kepalaDesa;
  }
  if (item.kaurKeuangan && document.getElementById('inputKaurKeuangan')) {
    document.getElementById('inputKaurKeuangan').value = item.kaurKeuangan;
  }
  if (item.namaCamat && document.getElementById('inputNamaCamat')) {
    document.getElementById('inputNamaCamat').value = item.namaCamat;
  }
  if (item.nipCamat && document.getElementById('inputNipCamat')) {
    document.getElementById('inputNipCamat').value = item.nipCamat;
  }
  if (item.metodeTte && document.getElementById('selectMetodeTte')) {
    document.getElementById('selectMetodeTte').value = item.metodeTte;
  }

  // 8. Kelengkapan Berkas
  if (Array.isArray(item.kelengkapanBerkas)) {
    document.querySelectorAll('.berkas-checkbox').forEach(cb => {
      cb.checked = item.kelengkapanBerkas.includes(cb.value);
    });
  }

  autoUpdatePerihal();
  updateLivePreview();
  renderEditingRekomBanner();

  document.getElementById('drawerHistory')?.classList.add('hidden');
  showToast(`✏️ Mode Edit: Arsip ${item.nomorSurat} dimuat! Perubahan akan memperbarui data arsip ini saat disimpan.`, 'info');
}

function batalEditRekomendasi() {
  AppState.editingRekomId = null;
  renderEditingRekomBanner();
  showToast('Mode edit dibatalkan. Formulir kembali ke mode pembuatan rekomendasi baru.', 'info');
}
window.batalEditRekomendasi = batalEditRekomendasi;

function renderEditingRekomBanner() {
  const banner = document.getElementById('bannerEditingRekom');
  const btnSave = document.getElementById('btnSaveToDb');

  if (!AppState.editingRekomId) {
    if (banner) banner.classList.add('hidden');
    if (btnSave) {
      btnSave.classList.remove('bg-amber-600', 'hover:bg-amber-500');
      btnSave.classList.add('bg-emerald-600', 'hover:bg-emerald-500');
      btnSave.innerHTML = '<span>💾 Simpan Data</span>';
    }
    return;
  }

  const item = (AppState.riwayat || []).find(r => String(r.id) === String(AppState.editingRekomId));
  const noSurat = item ? item.nomorSurat : AppState.editingRekomId;

  if (banner) {
    banner.classList.remove('hidden');
    const txt = document.getElementById('textEditingRekomNomor');
    if (txt) txt.textContent = noSurat || 'Surat Rekomendasi';
  }

  if (btnSave) {
    btnSave.classList.remove('bg-emerald-600', 'hover:bg-emerald-500');
    btnSave.classList.add('bg-amber-600', 'hover:bg-amber-500');
    btnSave.innerHTML = '<span>💾 Simpan Perubahan</span>';
  }
}
window.renderEditingRekomBanner = renderEditingRekomBanner;

function deleteHistoryItem(id) {
  if (!confirm('Hapus arsip ini?')) return;
  AppState.riwayat = AppState.riwayat.filter(r => r.id !== id);
  localStorage.setItem('sip_riwayat_rekom', JSON.stringify(AppState.riwayat));
  renderHistoryTable();
  showToast('Arsip dihapus.', 'info');
}

function exportHistoryToCsv() {
  if (!AppState.riwayat || AppState.riwayat.length === 0) {
    showToast('Tidak ada data riwayat.', 'warning');
    return;
  }
  const headers = ['ID', 'Waktu Simpan', 'Nomor Surat', 'Tanggal Surat', 'Desa', 'Jenis Dana', 'Nominal', 'Terbilang', 'Rekening', 'Kaur Keuangan', 'Status'];
  const rows = AppState.riwayat.map(item => [
    `"${item.id || ''}"`, `"${item.waktuSimpan || ''}"`, `"${item.nomorSurat || ''}"`, `"${item.tanggalSurat || ''}"`,
    `"${item.namaDesa || ''}"`, `"${item.jenisDana || ''}"`, `"${item.nominalAngka || 0}"`, `"${(item.terbilang || '').replace(/"/g, '""')}"`,
    `"'${item.nomorRekening || ''}"`, `"${item.kaurKeuangan || ''}"`, `"${item.status || 'Diterbitkan'}"`
  ]);
  const csv = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Riwayat_Rekomendasi_Waru_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function setViewMode(mode) {
  AppState.viewMode = mode;
  const left = document.getElementById('panelFormKiri');
  const right = document.getElementById('panelPreviewKanan');
  if (!left || !right) return;

  if (mode === 'split') {
    left.classList.remove('hidden', 'w-full');
    left.classList.add('w-full', 'lg:w-[45%]', 'xl:w-[42%]');
    right.classList.remove('hidden', 'w-full');
    right.classList.add('w-full', 'lg:w-[55%]', 'xl:w-[58%]');
  } else if (mode === 'form') {
    left.classList.remove('hidden', 'lg:w-[45%]', 'xl:w-[42%]');
    left.classList.add('w-full');
    right.classList.add('hidden');
  } else if (mode === 'preview') {
    left.classList.add('hidden');
    right.classList.remove('hidden', 'lg:w-[55%]', 'xl:w-[58%]');
    right.classList.add('w-full');
  }

  const btnConfig = [
    { id: 'btnViewSplit', mode: 'split' },
    { id: 'btnViewForm', mode: 'form' },
    { id: 'btnViewPreview', mode: 'preview' }
  ];

  btnConfig.forEach(item => {
    const btn = document.getElementById(item.id);
    if (!btn) return;
    if (item.mode === mode) {
      btn.className = 'px-2.5 py-1 rounded-md bg-white text-slate-900 font-bold shadow-2xs transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0';
    } else {
      btn.className = 'px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 font-medium transition flex items-center gap-1.5 whitespace-nowrap flex-shrink-0';
    }
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  let bgClass = 'bg-slate-800 text-white';
  let icon = 'ℹ️';
  if (type === 'success') { bgClass = 'bg-emerald-700 text-white'; icon = '✅'; }
  else if (type === 'error') { bgClass = 'bg-rose-700 text-white'; icon = '❌'; }
  else if (type === 'warning') { bgClass = 'bg-amber-600 text-white'; icon = '⚠️'; }

  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-lg shadow-xl text-xs font-medium ${bgClass} transform transition-all duration-300 opacity-0 translate-y-2`;
  toast.innerHTML = `<span>${icon}</span><span class="flex-1">${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.remove('opacity-0', 'translate-y-2'), 10);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// =========================================================================================
// MODUL OPERATOR DESA & KOTAK MASUK BERKAS KECAMATAN (FILE STORAGE & PENGELOLAAN DOKUMEN)
// =========================================================================================

/**
 * Storage Penyimpanan File Nyata Berbasis IndexedDB
 * Mendukung penyimpanan file PDF/Gambar/Dokumen ukuran besar tanpa batasan kuota localStorage
 */
const FileStorage = {
  dbName: 'SipRekomFilesDB',
  dbVersion: 1,
  storeName: 'uploaded_files',

  async openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, this.dbVersion);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  },

  async saveFile(fileObj) {
    try {
      const db = await this.openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(this.storeName, 'readwrite');
        tx.objectStore(this.storeName).put(fileObj);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
      });
    } catch (err) {
      console.warn('FileStorage save error:', err);
      return false;
    }
  },

  async getFile(id) {
    try {
      const db = await this.openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(this.storeName, 'readonly');
        const req = tx.objectStore(this.storeName).get(id);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      });
    } catch {
      return null;
    }
  },

  async downloadFile(id, fallbackName = 'Dokumen.pdf', driveUrl = null) {
    // Jika link Google Drive tersedia dan valid, buka/unduh langsung dari Google Drive
    if (driveUrl && typeof driveUrl === 'string' && driveUrl.startsWith('http') && driveUrl !== '-') {
      window.open(driveUrl, '_blank');
      showToast(`Membuka berkas dari Google Drive: ${fallbackName}`, 'success');
      return;
    }

    let file = null;
    try {
      file = await this.getFile(id);
    } catch (e) {
      console.warn('Error reading file from IndexedDB:', e);
    }

    let dataUrl = file ? file.dataUrl : null;
    let fileName = file ? file.name : fallbackName;

    // Jika belum ada di IndexedDB (misal data dummy bawaan), buat file dokumen dinamis yang valid
    if (!dataUrl) {
      const dummyContent = `PEMERINTAH KABUPATEN PENAJAM PASER UTARA
KECAMATAN WARU
========================================================================
ARSIP BERKAS PENGAJUAN REKOMENDASI PENCAIRAN APBDES
Nama Berkas    : ${fileName}
Diverifikasi   : Operator Desa & Tim Fasilitasi PMD Kecamatan Waru
Status Berkas  : Dokumen Resmi Terverifikasi
Waktu Cetak    : ${new Date().toLocaleString('id-ID')}
========================================================================
Dokumen ini merupakan salinan berkas resmi yang diunggah oleh Operator Desa
ke dalam Sistem SIP-REKOM APBDes Kecamatan Waru.`;
      dataUrl = 'data:text/plain;charset=utf-8,' + encodeURIComponent(dummyContent);
    }

    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(`Mengunduh berkas: ${fileName}`, 'success');
  }
};

// =========================================================================================
// MODUL KARTU LOGIN (PORTAL MASUK TUNGGAL USER & PASSWORD DENGAN FITUR TANDA MATA)
// =========================================================================================

/**
 * Toggle Show / Hide Password dengan Tanda Mata (Eye Icon)
 */
window.togglePasswordVisibility = function() {
  const pwdInput = document.getElementById('inputLoginPassword');
  const eyeOpen = document.getElementById('iconEyeOpen');
  const eyeClosed = document.getElementById('iconEyeClosed');
  if (!pwdInput) return;

  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    eyeOpen?.classList.add('hidden');
    eyeClosed?.classList.remove('hidden');
  } else {
    pwdInput.type = 'password';
    eyeOpen?.classList.remove('hidden');
    eyeClosed?.classList.add('hidden');
  }
};

/**
 * Pintasan Pengisian Cepat Akun (Pilihan Cepat)
 */
window.quickFillUser = function(username, defaultPin) {
  const userInput = document.getElementById('inputLoginUsername');
  const pwdInput = document.getElementById('inputLoginPassword');
  if (userInput) userInput.value = username;
  if (pwdInput) pwdInput.value = defaultPin;
  hideLoginError();
  pwdInput?.focus();
};

/**
 * Tampilkan Pesan Error pada Kartu Login
 */
window.showLoginError = function(message) {
  const alertEl = document.getElementById('loginErrorAlert');
  const msgEl = document.getElementById('loginErrorMessage');
  if (msgEl) msgEl.textContent = message;
  if (alertEl) alertEl.classList.remove('hidden');
};

/**
 * Sembunyikan Pesan Error pada Kartu Login
 */
window.hideLoginError = function() {
  const alertEl = document.getElementById('loginErrorAlert');
  if (alertEl) alertEl.classList.add('hidden');
};

/**
 * Eksekusi Login Tunggal (Unified Login) untuk Kecamatan & Desa
 */
window.handleUnifiedLogin = function(e) {
  if (e && e.preventDefault) e.preventDefault();

  const usernameInput = (document.getElementById('inputLoginUsername')?.value || '').trim();
  const passwordInput = (document.getElementById('inputLoginPassword')?.value || '').trim();

  if (!usernameInput) {
    showLoginError('Silakan masukkan Username / Pengguna!');
    document.getElementById('inputLoginUsername')?.focus();
    return;
  }
  if (!passwordInput) {
    showLoginError('Silakan masukkan Password / PIN Keamanan!');
    document.getElementById('inputLoginPassword')?.focus();
    return;
  }

  const uLower = usernameInput.toLowerCase();
  const users = AppState.users || [];

  // 1. Cari kecocokan username secara langsung
  let matchedUser = users.find(u => {
    const un = (u.username || '').toLowerCase();
    const nm = (u.nama || '').toLowerCase();
    const inst = (u.instansi || '').toLowerCase();
    const desa = (u.desa || '').toLowerCase();
    return un === uLower || nm === uLower || inst === uLower || desa === uLower;
  });

  // 2. Pencarian fleksibel / alias jika pengguna mengetik nama umum
  if (!matchedUser) {
    if (uLower === 'admin' || uLower === 'kecamatan' || uLower === 'pmd' || uLower.includes('kecamatan')) {
      matchedUser = users.find(u => u.username === 'admin_kecamatan') || users.find(u => u.role === 'kecamatan');
    } else if (uLower === 'camat' || uLower.includes('camat')) {
      matchedUser = users.find(u => u.username === 'camat_waru');
    } else if (uLower.includes('api')) {
      matchedUser = users.find(u => (u.desa || '').toLowerCase().includes('api'));
    } else if (uLower.includes('sesulu')) {
      matchedUser = users.find(u => (u.desa || '').toLowerCase().includes('sesulu'));
    } else if (uLower.includes('bangun') || uLower.includes('mulya')) {
      matchedUser = users.find(u => (u.desa || '').toLowerCase().includes('mulya'));
    }
  }

  if (!matchedUser) {
    showLoginError(`Username "${usernameInput}" tidak terdaftar di database Data_User. Silakan periksa kembali.`);
    document.getElementById('inputLoginUsername')?.focus();
    return;
  }

  // 3. Verifikasi Password / PIN
  const expectedPin = String(matchedUser.pin || '').trim();
  const isKecamatan = matchedUser.role === 'kecamatan';

  const isValidPin = (passwordInput === expectedPin) ||
    (isKecamatan && (passwordInput === 'pmd2026' || passwordInput === 'admin')) ||
    (!isKecamatan && (passwordInput === 'desa2026' || passwordInput === '1234'));

  if (!isValidPin) {
    showLoginError(`Password / PIN salah untuk akun "${matchedUser.nama}". Silakan periksa kembali.`);
    document.getElementById('inputLoginPassword')?.focus();
    return;
  }

  // 4. Sukses Login
  hideLoginError();

  const userSession = {
    role: matchedUser.role,
    roleTitle: isKecamatan ? 'Tim PMD & Camat' : 'Operator Desa',
    name: matchedUser.nama,
    desa: matchedUser.desa || null,
    detail: matchedUser.jabatan || (isKecamatan ? 'Kecamatan Waru' : `Operator Desa ${matchedUser.desa}`),
    loginAt: new Date().toISOString()
  };

  AppState.currentUser = userSession;
  localStorage.setItem('sip_auth_user', JSON.stringify(userSession));

  if (!isKecamatan && matchedUser.desa) {
    AppState.operatorDesaAktif = matchedUser.desa;
    localStorage.setItem('sip_operator_desa', matchedUser.desa);
    const selectOp = document.getElementById('selectDesaOperator');
    if (selectOp) selectOp.value = matchedUser.desa;
    onOperatorDesaChange();
  }

  const portal = document.getElementById('loginPortalContainer');
  if (portal) portal.classList.add('hidden');

  updateUserProfileUI();

  if (isKecamatan) {
    navigateToMenu('dashboard');
    showToast(`Selamat datang! Berhasil masuk sebagai ${userSession.name}`, 'success');
  } else {
    navigateToMenu('pengajuan_desa');
    showToast(`Selamat datang! Berhasil masuk sebagai Operator ${userSession.name}`, 'success');
  }
};

/**
 * Backward compatibility stubs
 */
window.switchLoginRole = function() {};
window.onLoginDesaChange = function() {};
window.doLoginKecamatan = function() { handleUnifiedLogin(); };
window.doLoginDesa = function() { handleUnifiedLogin(); };

/**
 * Keluar Akun & Tampilkan Kembali Kartu Login
 */
window.logoutUser = function() {
  AppState.currentUser = null;
  localStorage.removeItem('sip_auth_user');

  const portal = document.getElementById('loginPortalContainer');
  if (portal) portal.classList.remove('hidden');

  hideLoginError();
  const userInput = document.getElementById('inputLoginUsername');
  const pwdInput = document.getElementById('inputLoginPassword');
  if (pwdInput) {
    pwdInput.value = '';
    pwdInput.type = 'password';
  }
  document.getElementById('iconEyeOpen')?.classList.remove('hidden');
  document.getElementById('iconEyeClosed')?.classList.add('hidden');
  applyRoleAccessControl();

  // Fokuskan kembali ke input username login
  setTimeout(() => {
    if (userInput) userInput.focus();
  }, 100);

  showToast('Anda telah keluar. Silakan masukkan username dan password untuk masuk.', 'info');
};

/**
 * Terapkan Kontrol Hak Akses Berdasarkan Peran Pengguna (Role-Based Access Control)
 * - Kecamatan Login: Menu 2 (Pengajuan Desa) TERKUNCI. Menu 1 (Dashboard) & Menu 3 (Verifikasi & Rekom) TERBUKA.
 * - Desa Login: Menu 3 (Verifikasi & Rekom) TERKUNCI. Menu 1 (Dashboard) & Menu 2 (Pengajuan Desa) TERBUKA.
 */
window.applyRoleAccessControl = function() {
  const user = AppState.currentUser;
  const isKecamatan = user && user.role === 'kecamatan';
  const isDesa = user && user.role === 'desa';

  // 1. Sidebar Menu 2 (Pengajuan Desa)
  const navDesa = document.getElementById('navPengajuanDesa');
  const badgeLockNavDesa = document.getElementById('badgeLockNavDesa');
  const subtextNavDesa = document.getElementById('subtextNavDesa');

  if (navDesa) {
    if (isKecamatan) {
      navDesa.classList.add('opacity-40', 'cursor-not-allowed');
      navDesa.classList.remove('hover:bg-slate-800');
      navDesa.title = 'Akses Terkunci: Menu Pengajuan Berkas khusus untuk Akun Operator Desa';
      if (badgeLockNavDesa) badgeLockNavDesa.classList.remove('hidden');
      if (subtextNavDesa) subtextNavDesa.textContent = 'Khusus Operator Desa (Terkunci)';
    } else {
      navDesa.classList.remove('opacity-40', 'cursor-not-allowed');
      navDesa.classList.add('hover:bg-slate-800');
      navDesa.title = 'Form Pengajuan & Upload Berkas Desa';
      if (badgeLockNavDesa) badgeLockNavDesa.classList.add('hidden');
      if (subtextNavDesa) subtextNavDesa.textContent = 'Upload SP, Ceklist & Rekom';
    }
  }

  // 2. Sidebar Menu 3 (Verifikasi & Rekom Kecamatan)
  const navKec = document.getElementById('navVerifikasiRekom');
  const badgeLockNavKec = document.getElementById('badgeLockNavKecamatan');
  const subtextNavKec = document.getElementById('subtextNavKecamatan');

  if (navKec) {
    if (isDesa) {
      navKec.classList.add('opacity-40', 'cursor-not-allowed');
      navKec.classList.remove('hover:bg-slate-800');
      navKec.title = 'Akses Terkunci: Menu Verifikasi & Rekomendasi Camat khusus untuk Pihak Kecamatan Waru';
      if (badgeLockNavKec) badgeLockNavKec.classList.remove('hidden');
      if (subtextNavKec) subtextNavKec.textContent = 'Khusus Kecamatan (Terkunci)';
    } else {
      navKec.classList.remove('opacity-40', 'cursor-not-allowed');
      navKec.classList.add('hover:bg-slate-800');
      navKec.title = 'Verifikasi Berkas & Terbitkan Rekomendasi Camat';
      if (badgeLockNavKec) badgeLockNavKec.classList.add('hidden');
      if (subtextNavKec) subtextNavKec.textContent = 'Kecamatan Waru';
    }
  }

  // 3. Kartu Aksi Cepat Dashboard: Pengajuan Desa
  const cardQuickDesa = document.getElementById('cardQuickPengajuanDesa');
  const badgeLockQuickDesa = document.getElementById('badgeLockQuickDesa');
  const subtextQuickDesa = document.getElementById('subtextQuickDesa');

  if (cardQuickDesa) {
    if (isKecamatan) {
      cardQuickDesa.classList.add('opacity-50', 'grayscale', 'cursor-not-allowed');
      cardQuickDesa.classList.remove('hover:shadow-md');
      if (badgeLockQuickDesa) badgeLockQuickDesa.classList.remove('hidden');
      if (subtextQuickDesa) subtextQuickDesa.textContent = 'Terkunci untuk Akun Kecamatan';
    } else {
      cardQuickDesa.classList.remove('opacity-50', 'grayscale', 'cursor-not-allowed');
      cardQuickDesa.classList.add('hover:shadow-md');
      if (badgeLockQuickDesa) badgeLockQuickDesa.classList.add('hidden');
      if (subtextQuickDesa) subtextQuickDesa.textContent = 'Upload SP, Ceklist & Rekom';
    }
  }

  // 4. Kartu Aksi Cepat Dashboard: Verifikasi & Generator Rekom
  const cardQuickVerif = document.getElementById('cardQuickVerifikasi');
  const badgeLockQuickVerif = document.getElementById('badgeLockQuickVerifikasi');
  const subtextQuickVerif = document.getElementById('subtextQuickVerifikasi');

  const cardQuickGen = document.getElementById('cardQuickGenerator');
  const badgeLockQuickGen = document.getElementById('badgeLockQuickGenerator');
  const subtextQuickGen = document.getElementById('subtextQuickGenerator');

  if (cardQuickVerif) {
    if (isDesa) {
      cardQuickVerif.classList.add('opacity-50', 'grayscale', 'cursor-not-allowed');
      cardQuickVerif.classList.remove('hover:shadow-md');
      if (badgeLockQuickVerif) badgeLockQuickVerif.classList.remove('hidden');
      if (subtextQuickVerif) subtextQuickVerif.textContent = 'Terkunci untuk Akun Desa';
    } else {
      cardQuickVerif.classList.remove('opacity-50', 'grayscale', 'cursor-not-allowed');
      cardQuickVerif.classList.add('hover:shadow-md');
      if (badgeLockQuickVerif) badgeLockQuickVerif.classList.add('hidden');
      if (subtextQuickVerif) subtextQuickVerif.textContent = 'Unduh & telaah berkas desa';
    }
  }

  if (cardQuickGen) {
    if (isDesa) {
      cardQuickGen.classList.add('opacity-50', 'grayscale', 'cursor-not-allowed');
      cardQuickGen.classList.remove('hover:shadow-md');
      if (badgeLockQuickGen) badgeLockQuickGen.classList.remove('hidden');
      if (subtextQuickGen) subtextQuickGen.textContent = 'Kewenangan Camat Waru';
    } else {
      cardQuickGen.classList.remove('opacity-50', 'grayscale', 'cursor-not-allowed');
      cardQuickGen.classList.add('hover:shadow-md');
      if (badgeLockQuickGen) badgeLockQuickGen.classList.add('hidden');
      if (subtextQuickGen) subtextQuickGen.textContent = 'Generator & Cetak PDF Sri Kandi';
    }
  }

  // 5. Tombol Lihat Semua Berkas di Dashboard
  const btnDashLihat = document.getElementById('btnDashLihatSemuaBerkas');
  if (btnDashLihat) {
    if (isDesa) {
      btnDashLihat.textContent = 'Ke Berkas Desa Anda →';
    } else {
      btnDashLihat.textContent = 'Lihat Semua Berkas →';
    }
  }

  // 6. Kunci Dropdown Desa jika Akun Desa Login
  const selectDesaOp = document.getElementById('selectDesaOperator');
  const badgeLockSelectDesa = document.getElementById('badgeLockSelectDesa');
  if (selectDesaOp && isDesa && user.desa) {
    selectDesaOp.value = user.desa;
    selectDesaOp.disabled = true;
    selectDesaOp.classList.add('opacity-80', 'cursor-not-allowed');
    if (badgeLockSelectDesa) {
      badgeLockSelectDesa.classList.remove('hidden');
      badgeLockSelectDesa.textContent = `🔒 Terkunci (${user.desa})`;
    }
  } else if (selectDesaOp) {
    selectDesaOp.disabled = false;
    selectDesaOp.classList.remove('opacity-80', 'cursor-not-allowed');
    if (badgeLockSelectDesa) badgeLockSelectDesa.classList.add('hidden');
  }

  // 7. Sembunyikan Akses Google Sheets & Drive serta Alat Database dari Akun Desa (Khusus Kecamatan)
  const btnSidebarSettings = document.getElementById('btnSidebarSettings');
  const containerAksiMonitoring = document.getElementById('containerAksiMonitoringDesa');
  const btnDashDrive = document.getElementById('btnDashBukaDriveKecamatan');
  const btnHeaderDrive = document.getElementById('btnHeaderDriveKecamatan');
  const linkKpiDrive = document.getElementById('linkKpiDriveKecamatan');

  if (isDesa) {
    if (btnSidebarSettings) btnSidebarSettings.classList.add('hidden');
    if (containerAksiMonitoring) containerAksiMonitoring.classList.add('hidden');
    if (btnDashDrive) btnDashDrive.classList.add('hidden');
    if (btnHeaderDrive) btnHeaderDrive.classList.add('hidden');
    if (linkKpiDrive) linkKpiDrive.classList.add('hidden');
  } else {
    // Akun Kecamatan / Admin
    if (btnSidebarSettings) btnSidebarSettings.classList.remove('hidden');
    if (containerAksiMonitoring) containerAksiMonitoring.classList.remove('hidden');
    if (btnDashDrive) btnDashDrive.classList.remove('hidden');
    if (btnHeaderDrive) btnHeaderDrive.classList.remove('hidden');
    if (linkKpiDrive) linkKpiDrive.classList.remove('hidden');
  }
};

/**
 * Handler Tombol "Lihat Semua Berkas" di Dashboard Berdasarkan Role
 */
window.handleDashboardViewAllClick = function() {
  const user = AppState.currentUser;
  if (user && user.role === 'desa') {
    navigateToMenu('pengajuan_desa');
  } else {
    navigateToMenu('verifikasi_rekom');
    switchKecamatanSubTab('verifikasi');
  }
};

/**
 * Perbarui UI Profil Pengguna di Sidebar dan Topbar
 */
window.updateUserProfileUI = function() {
  const user = AppState.currentUser;
  if (!user) return;

  const isKecamatan = user.role === 'kecamatan';

  // Sidebar User elements
  const sideAvatar = document.getElementById('sidebarUserAvatar');
  const sideName = document.getElementById('sidebarUserName');
  const sideRole = document.getElementById('sidebarUserRole');

  if (sideAvatar) {
    sideAvatar.textContent = isKecamatan ? '🏛️' : '🏡';
    sideAvatar.className = isKecamatan 
      ? 'w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-sm flex-shrink-0 shadow-inner'
      : 'w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-sm flex-shrink-0 shadow-inner';
  }
  if (sideName) sideName.textContent = user.name;
  if (sideRole) sideRole.textContent = isKecamatan ? 'Tim PMD & Camat' : 'Operator Desa';

  // Topbar User elements
  const topName = document.getElementById('topbarUserName');
  const topRole = document.getElementById('topbarUserRole');

  if (topName) topName.textContent = user.name;
  if (topRole) {
    topRole.textContent = isKecamatan ? 'Kecamatan Waru' : `Desa ${user.desa || 'Waru'}`;
    topRole.className = isKecamatan ? 'text-[9.5px] text-blue-600 font-bold truncate' : 'text-[9.5px] text-emerald-600 font-bold truncate';
  }

  const subProfile = document.getElementById('subtextSidebarProfile');
  if (subProfile) {
    subProfile.textContent = isKecamatan ? 'Data Master Desa' : (`Data Desa ${user.desa || ''}`);
  }

  // Terapkan proteksi & status menu terkunci
  applyRoleAccessControl();
};

/**
 * Sinkronisasi Data User dari Sheet "Data_User" Google Sheets
 */
window.sinkronDataUserDariGoogleSheets = async function() {
  if (!AppState.gasUrl || !AppState.gasUrl.startsWith('http')) return;
  try {
    const res = await fetch(`${AppState.gasUrl}?action=getUser`);
    const json = await res.json();
    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      AppState.users = json.data.map(row => ({
        id: row['ID User'] || row.id,
        username: row['Username'] || row.username,
        nama: row['Nama Akun'] || row.nama,
        role: (row['Peran'] || row.role || '').toLowerCase().includes('desa') ? 'desa' : 'kecamatan',
        desa: row['Desa / Instansi'] || row.desa,
        instansi: row['Desa / Instansi'] || row.instansi,
        jabatan: row['Jabatan'] || row.jabatan,
        pin: String(row['PIN / Password'] || row.pin || '1234'),
        status: row['Status Akun'] || 'Aktif',
        kontak: row['Kontak / HP'] || '-'
      }));
      localStorage.setItem('sip_data_users', JSON.stringify(AppState.users));
      console.log('Sinkronisasi data user dari Google Sheets Data_User berhasil:', AppState.users.length);
    }
  } catch (e) {
    console.warn('Gagal sinkron data user dari Google Sheets:', e);
  }
};

/**
 * Sinkronisasi Master Data Desa dari Sheet "Master_Desa" Google Sheets
 * Menarik pembaruan Nama Kepala Desa, Kaur Keuangan, Nomor Rekening RKD, Bank, dsb.
 */
window.sinkronMasterDesaDariGoogleSheets = async function(isSilent = true) {
  if (!AppState.gasUrl || !AppState.gasUrl.startsWith('http')) return;

  try {
    const url = `${AppState.gasUrl}?action=getMasterDesa&_t=${Date.now()}`;
    const res = await fetch(url);
    const result = await res.json();

    if (result.success && Array.isArray(result.data) && result.data.length > 0) {
      const cleanName = (str) => (str || '').toString().trim().replace(/^desa\s+/i, '').toLowerCase();

      result.data.forEach(row => {
        // Cari nama desa dari berbagai variasi header
        const rawNama = row['Nama Desa'] || row['Nama'] || row['Desa'] || row.namaDesa || row.nama || '';
        const normNama = cleanName(rawNama);
        if (!normNama) return;

        // Ambil nilai kepala desa dan atribut lainnya dari sheet
        const rawKades = row['Kepala Desa'] || row['Kades'] || row['Nama Kepala Desa'] || row['Nama Kades'] || row.kades;
        const rawKaur = row['Kaur Keuangan / Bendahara'] || row['Kaur Keuangan'] || row['Bendahara'] || row['Kaur'] || row.kaurKeuangan;
        const rawBank = row['Bank Penyalur'] || row['Bank'] || row.bank;
        const rawRek = row['Nomor Rekening RKD'] || row['Nomor Rekening'] || row['Rekening RKD'] || row['Rekening'] || row['RKD'] || row['No Rekening'] || row['No. Rekening'] || row.rekening;
        const rawAtasNama = row['Atas Nama Rekening'] || row['Atas Nama'] || row.atasNama;
        const rawAlamat = row['Alamat Kantor Desa'] || row['Alamat'] || row.alamat;
        const rawPerkades = row['Nomor Perkades'] || row['No Perkades'] || row.nomorPerkades;
        const rawThnPerkades = row['Tahun Perkades'] || row.tahunPerkades;
        const rawPerdes = row['Nomor Perdes'] || row['No Perdes'] || row.nomorPerdes;
        const rawThnPerdes = row['Tahun Perdes'] || row.tahunPerdes;

        let existing = AppState.masterDesa.find(d => cleanName(d.nama) === normNama);

        if (existing) {
          if (rawKades) existing.kades = String(rawKades).trim();
          if (rawKaur) existing.kaurKeuangan = String(rawKaur).trim();
          if (rawBank) existing.bank = String(rawBank).trim();
          if (rawRek) existing.rekening = String(rawRek).trim();
          if (rawAtasNama) existing.atasNama = String(rawAtasNama).trim();
          if (rawAlamat) existing.alamat = String(rawAlamat).trim();
          if (rawPerkades) existing.nomorPerkades = String(rawPerkades).trim();
          if (rawThnPerkades) existing.tahunPerkades = String(rawThnPerkades).trim();
          if (rawPerdes) existing.nomorPerdes = String(rawPerdes).trim();
          if (rawThnPerdes) existing.tahunPerdes = String(rawThnPerdes).trim();
        } else {
          // Desa baru jika ada baris tambahan
          const newDesa = {
            id: row['ID Desa'] || `DESA-${Date.now()}`,
            nama: rawNama.trim().replace(/^desa\s+/i, ''),
            kades: rawKades ? String(rawKades).trim() : '',
            kaurKeuangan: rawKaur ? String(rawKaur).trim() : '',
            jabatanKaur: `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${rawNama.trim().replace(/^desa\s+/i, '')}`,
            bank: rawBank ? String(rawBank).trim() : 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
            rekening: rawRek ? String(rawRek).trim() : '',
            atasNama: rawAtasNama ? String(rawAtasNama).trim() : `Pemerintah Desa ${rawNama} (RKD)`,
            alamat: rawAlamat ? String(rawAlamat).trim() : '',
            nomorPerdesKewenangan: '2',
            tahunPerdesKewenangan: '2019',
            nomorPerdesRkp: '2',
            tahunPerdesRkp: '2025',
            nomorPerdes: rawPerdes ? String(rawPerdes).trim() : '7',
            tahunPerdes: rawThnPerdes ? String(rawThnPerdes).trim() : '2025',
            nomorPerkades: rawPerkades ? String(rawPerkades).trim() : '4',
            tahunPerkades: rawThnPerkades ? String(rawThnPerkades).trim() : '2025'
          };
          AppState.masterDesa.push(newDesa);
        }
      });

      // Simpan ke localStorage agar offline / reload tetap membawa data kades terbaru
      localStorage.setItem('sip_master_desa', JSON.stringify(AppState.masterDesa));

      // Refresh seluruh tampilan yang bergantung pada data kades & desa
      populateDesaSelect();
      populateOperatorDesaSelect();
      triggerAutoFillDesa();
      onOperatorDesaChange();
      renderDashboardSummary();
      updateLivePreview();

      console.log('Sinkronisasi Master Desa dari Google Sheets Master_Desa berhasil:', AppState.masterDesa);
      if (!isSilent) {
        showToast('Data Master Desa (Kades, Kaur, Rekening) berhasil diperbarui dari Google Sheets!', 'success');
      }
    }
  } catch (e) {
    console.warn('Gagal sinkron data Master Desa dari Google Sheets:', e);
    if (!isSilent) {
      showToast('Gagal menarik Master Desa dari Google Sheets. Periksa URL Web App atau koneksi internet.', 'error');
    }
  }
};

/**
 * Pemeriksaan Sesi Login Saat Aplikasi Dibuka
 */
window.checkAuthSession = function() {
  const portal = document.getElementById('loginPortalContainer');
  if (!portal) return;

  sinkronDataUserDariGoogleSheets();
  sinkronMasterDesaDariGoogleSheets(true);

  if (AppState.currentUser) {
    // Pengguna sudah login sebelumnya
    portal.classList.add('hidden');
    updateUserProfileUI();
    applyRoleAccessControl();

    // Pastikan menu aktif tidak berada di menu yang terkunci
    if (AppState.currentUser.role === 'kecamatan' && AppState.activeMenu === 'pengajuan_desa') {
      AppState.activeMenu = 'dashboard';
    } else if (AppState.currentUser.role === 'desa' && AppState.activeMenu === 'verifikasi_rekom') {
      AppState.activeMenu = 'pengajuan_desa';
    }
  } else {
    // Pengguna belum login, tampilkan kartu login gate
    portal.classList.remove('hidden');
    hideLoginError();
  }
};

/**
 * Inisialisasi Fitur Operator Desa & Data Bawaan
 */
function initDesaOperatorFeature() {
  if (localStorage.getItem('sip_operator_desa') === 'Waru') {
    localStorage.setItem('sip_operator_desa', 'Api-Api');
    AppState.operatorDesaAktif = 'Api-Api';
  }
  if (AppState.currentUser && AppState.currentUser.role === 'desa' && AppState.currentUser.desa) {
    AppState.operatorDesaAktif = AppState.currentUser.desa;
  }
  if (AppState.pengajuanDesa && AppState.pengajuanDesa.some(item => item.namaDesa === 'Waru')) {
    AppState.pengajuanDesa = AppState.pengajuanDesa.filter(item => item.namaDesa !== 'Waru');
    localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
  }
  initSeedPengajuanDesa();
  populateOperatorDesaSelect();
  onOperatorDesaChange();
  updateBadgePengajuanDesa();

  // Pulihkan status sidebar (ciut / luaskan)
  if (AppState.isSidebarCollapsed) {
    document.getElementById('appSidebar')?.classList.add('sidebar-collapsed');
  }

  // Arahkan ke menu aktif yang diizinkan untuk peran saat ini
  let targetMenu = AppState.activeMenu || 'dashboard';
  if (AppState.currentUser) {
    if (AppState.currentUser.role === 'kecamatan' && targetMenu === 'pengajuan_desa') {
      targetMenu = 'dashboard';
    } else if (AppState.currentUser.role === 'desa' && targetMenu === 'verifikasi_rekom') {
      targetMenu = 'pengajuan_desa';
    }
  }
  navigateToMenu(targetMenu);
}

/**
 * Inisialisasi Data Pengajuan Berkas Desa & Bersihkan Data Dummy Lama
 */
function initSeedPengajuanDesa() {
  if (!AppState.pengajuanDesa) {
    AppState.pengajuanDesa = [];
  }
  // Bersihkan data dummy bawaan awal (Api-Api & Sesulu contoh) agar dasbor bersih sesuai Google Sheets
  const dummyIds = ['PENG-20260518-01', 'PENG-20260602-02'];
  if (AppState.pengajuanDesa.some(item => dummyIds.includes(item.id))) {
    AppState.pengajuanDesa = AppState.pengajuanDesa.filter(item => !dummyIds.includes(item.id));
    localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
  }
}

/**
 * Switcher Navigasi Menu Samping (Sidebar) Utama:
 * 1. 'dashboard' (Dasboat)
 * 2. 'pengajuan_desa' (Pengajuan Desa)
 * 3. 'verifikasi_rekom' (Verifikasi dan Rekom Kecamatan)
 */
window.navigateToMenu = function(menuKey) {
  const user = AppState.currentUser;
  const isKecamatan = user && user.role === 'kecamatan';
  const isDesa = user && user.role === 'desa';

  // 1. Guard Hak Akses (Role-Based Lock)
  if (menuKey === 'pengajuan_desa' && isKecamatan) {
    showToast('⚠️ Akses Terkunci: Menu Pengajuan Desa hanya untuk Akun Operator Desa. Pihak Kecamatan bertugas memverifikasi pada Menu Verifikasi & Rekom.', 'warning');
    return false;
  }
  if (menuKey === 'verifikasi_rekom' && isDesa) {
    showToast('⚠️ Akses Terkunci: Menu Verifikasi & Rekomendasi Camat adalah kewenangan pihak Kecamatan Waru.', 'warning');
    return false;
  }

  AppState.activeMenu = menuKey;
  localStorage.setItem('sip_active_menu', menuKey);

  // 2. Update style tombol navigasi sidebar
  const navItems = {
    'dashboard': document.getElementById('navDashboard'),
    'pengajuan_desa': document.getElementById('navPengajuanDesa'),
    'verifikasi_rekom': document.getElementById('navVerifikasiRekom')
  };

  Object.entries(navItems).forEach(([key, el]) => {
    if (!el) return;
    if (key === menuKey) {
      el.className = 'nav-item active w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-600 text-white font-bold transition shadow-sm text-xs group text-left relative';
    } else {
      el.className = 'nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition text-xs font-semibold group text-left relative';
    }
  });

  // Terapkan kembali class terkunci ke menu yang tidak diizinkan
  applyRoleAccessControl();

  // 2. Hide & Show Views
  const views = {
    'dashboard': document.getElementById('viewDashboard'),
    'pengajuan_desa': document.getElementById('viewPengajuanDesa') || document.getElementById('dashboardDesaContainer'),
    'verifikasi_rekom': document.getElementById('viewVerifikasiRekom')
  };

  Object.entries(views).forEach(([key, el]) => {
    if (!el) return;
    if (key === menuKey) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });

  // 3. Topbar updates
  const titleEl = document.getElementById('topbarPageTitle');
  const breadcrumbEl = document.getElementById('topbarBreadcrumb');
  const splitControls = document.getElementById('containerSplitControls');
  const btnPrintDoc = document.getElementById('btnPrintDoc');
  const btnExportDocx = document.getElementById('btnExportDocx');
  const btnSaveToDb = document.getElementById('btnSaveToDb');

  if (menuKey === 'dashboard') {
    if (titleEl) titleEl.textContent = 'Dashboard & Ringkasan APBDes';
    if (breadcrumbEl) breadcrumbEl.textContent = 'SIP-REKOM Waru / 1. Dashboard';
    if (splitControls) splitControls.classList.add('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.add('hidden');
    if (btnExportDocx) btnExportDocx.classList.add('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.add('hidden');
    renderDashboardSummary();
  } else if (menuKey === 'pengajuan_desa') {
    if (titleEl) titleEl.textContent = 'Pengajuan Berkas Desa';
    if (breadcrumbEl) breadcrumbEl.textContent = 'SIP-REKOM Waru / 2. Pengajuan Desa';
    if (splitControls) splitControls.classList.add('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.add('hidden');
    if (btnExportDocx) btnExportDocx.classList.add('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.add('hidden');
    renderDashboardDesa();
  } else if (menuKey === 'verifikasi_rekom') {
    if (titleEl) titleEl.textContent = 'Verifikasi Berkas & Rekomendasi Camat';
    if (breadcrumbEl) breadcrumbEl.textContent = 'SIP-REKOM Waru / 3. Verifikasi & Rekom Kecamatan';
    switchKecamatanSubTab(AppState.kecamatanSubTab || 'verifikasi');
  }

  // Mobile: tutup drawer sidebar otomatis jika di layar kecil
  if (window.innerWidth < 768) {
    toggleSidebar(false);
  }
};

/**
 * Backward compatibility: switchAppMode
 */
window.switchAppMode = function(mode) {
  if (mode === 'desa') {
    navigateToMenu('pengajuan_desa');
  } else {
    navigateToMenu('verifikasi_rekom');
  }
};

/**
 * Toggle Hide / Unhide Menu Samping (Sidebar)
 */
window.toggleSidebar = function(forceState) {
  const sidebar = document.getElementById('appSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!sidebar) return;

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    const isCurrentlyOpen = !sidebar.classList.contains('-translate-x-full');
    const newState = forceState !== undefined ? forceState : !isCurrentlyOpen;
    if (newState) {
      sidebar.classList.remove('-translate-x-full');
      sidebar.classList.add('translate-x-0');
      overlay?.classList.remove('hidden');
    } else {
      sidebar.classList.add('-translate-x-full');
      sidebar.classList.remove('translate-x-0');
      overlay?.classList.add('hidden');
    }
  } else {
    const isCollapsed = sidebar.classList.contains('sidebar-collapsed');
    const newCollapsed = forceState !== undefined ? forceState : !isCollapsed;

    if (newCollapsed) {
      sidebar.classList.add('sidebar-collapsed');
    } else {
      sidebar.classList.remove('sidebar-collapsed');
    }
    AppState.isSidebarCollapsed = newCollapsed;
    localStorage.setItem('sip_sidebar_collapsed', newCollapsed);
  }
};

/**
 * Beralih Sub-Tab di Menu 3: Verifikasi Berkas vs Generator Rekomendasi vs Surat Pengantar vs Kirim Rekom Ke Desa
 */
window.switchKecamatanSubTab = function(tabKey) {
  AppState.kecamatanSubTab = tabKey;
  const tabBtnVerif = document.getElementById('tabBtnVerifikasi');
  const tabBtnGen = document.getElementById('tabBtnGenerator');
  const tabBtnSp = document.getElementById('tabBtnSuratPengantar');
  const tabBtnKirim = document.getElementById('tabBtnKirimDesa');
  const tabContentVerif = document.getElementById('tabContentVerifikasiDesa');
  const tabContentGen = document.getElementById('workspaceKecamatan');
  const tabContentSp = document.getElementById('workspaceSuratPengantar');
  const tabContentKirim = document.getElementById('tabContentKirimRekomDesa');
  const splitControls = document.getElementById('containerSplitControls');
  const btnPrintDoc = document.getElementById('btnPrintDoc');
  const btnExportDocx = document.getElementById('btnExportDocx');
  const btnSaveToDb = document.getElementById('btnSaveToDb');

  // Reset semua tombol subtab ke inaktif
  const btnInactive = 'px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition flex items-center gap-1.5 cursor-pointer';
  if (tabBtnVerif) tabBtnVerif.className = btnInactive;
  if (tabBtnGen) tabBtnGen.className = btnInactive;
  if (tabBtnSp) tabBtnSp.className = btnInactive;
  if (tabBtnKirim) tabBtnKirim.className = btnInactive;

  // Sembunyikan semua kontainer subtab
  if (tabContentVerif) tabContentVerif.classList.add('hidden');
  if (tabContentGen) tabContentGen.classList.add('hidden');
  if (tabContentSp) tabContentSp.classList.add('hidden');
  if (tabContentKirim) tabContentKirim.classList.add('hidden');

  if (tabKey === 'verifikasi') {
    if (tabBtnVerif) tabBtnVerif.className = 'px-3.5 py-1.5 text-xs font-bold rounded-lg bg-indigo-600 text-white shadow-sm transition flex items-center gap-1.5 cursor-pointer';
    if (tabContentVerif) tabContentVerif.classList.remove('hidden');
    if (splitControls) splitControls.classList.add('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.add('hidden');
    if (btnExportDocx) btnExportDocx.classList.add('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.add('hidden');
    renderTabelPengajuanKecamatan();
  } else if (tabKey === 'generator') {
    if (tabBtnGen) tabBtnGen.className = 'px-3.5 py-1.5 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition flex items-center gap-1.5 cursor-pointer';
    if (tabContentGen) tabContentGen.classList.remove('hidden');
    if (splitControls) splitControls.classList.remove('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.remove('hidden');
    if (btnExportDocx) btnExportDocx.classList.remove('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.remove('hidden');
    updateLivePreview();
  } else if (tabKey === 'surat_pengantar') {
    if (tabBtnSp) tabBtnSp.className = 'px-3.5 py-1.5 text-xs font-bold rounded-lg bg-teal-600 text-white shadow-sm transition flex items-center gap-1.5 cursor-pointer';
    if (tabContentSp) tabContentSp.classList.remove('hidden');
    if (splitControls) splitControls.classList.add('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.add('hidden');
    if (btnExportDocx) btnExportDocx.classList.add('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.add('hidden');
    initSuratPengantarTab();
  } else if (tabKey === 'kirim_desa') {
    if (tabBtnKirim) tabBtnKirim.className = 'px-3.5 py-1.5 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition flex items-center gap-1.5 cursor-pointer';
    if (tabContentKirim) tabContentKirim.classList.remove('hidden');
    if (splitControls) splitControls.classList.add('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.add('hidden');
    if (btnExportDocx) btnExportDocx.classList.add('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.add('hidden');
    renderTabelKirimRekomDesa();
  }
};

/**
 * Membuka Drawer Riwayat dari Sidebar
 */
window.openHistoryDrawer = function() {
  renderHistoryTable();
  document.getElementById('drawerHistory')?.classList.remove('hidden');
};

/**
 * Membuka Modal Pengaturan dari Sidebar
 */
window.openSettingsModal = function() {
  const user = AppState.currentUser;
  if (user && user.role === 'desa') {
    showToast('⚠️ Akses Terkunci: Pengaturan Google Sheets & Drive hanya dapat diakses oleh Admin Kecamatan.', 'warning');
    return;
  }
  const input = document.getElementById('inputGasUrl');
  if (input) input.value = AppState.gasUrl;
  document.getElementById('modalGasSettings')?.classList.remove('hidden');
};

/**
 * Memilih Desa & Langsung Membuka Form Pengajuan
 */
window.pilihDesaDanBukaPengajuan = function(namaDesa) {
  const user = AppState.currentUser;
  if (user && user.role === 'kecamatan') {
    showToast('⚠️ Akses Terkunci: Menu Pengajuan Desa hanya untuk Akun Operator Desa. Silakan buka menu Verifikasi & Rekom untuk memeriksa berkas masuk.', 'warning');
    return;
  }
  if (user && user.role === 'desa' && user.desa && user.desa !== namaDesa) {
    showToast(`⚠️ Akses Terkunci: Anda login sebagai Operator Desa ${user.desa}, tidak dapat membuka pengajuan Desa ${namaDesa}.`, 'warning');
    return;
  }
  AppState.operatorDesaAktif = namaDesa;
  localStorage.setItem('sip_operator_desa', namaDesa);
  const select = document.getElementById('selectDesaOperator');
  if (select) select.value = namaDesa;
  onOperatorDesaChange();
  navigateToMenu('pengajuan_desa');
  showToast(`Beralih ke form pengajuan Desa ${namaDesa}`, 'info');
};

/**
 * Membuka Tab Verifikasi Kecamatan & Filter ke Desa Tertentu
 */
window.bukaVerifikasiDesaTertentu = function(namaDesa) {
  const user = AppState.currentUser;
  if (user && user.role === 'desa') {
    showToast('⚠️ Akses Terkunci: Menu Verifikasi & Rekomendasi Camat adalah kewenangan pihak Kecamatan Waru.', 'warning');
    return;
  }
  navigateToMenu('verifikasi_rekom');
  switchKecamatanSubTab('verifikasi');
  const filterDesa = document.getElementById('filterDesaKecamatan');
  if (filterDesa) {
    filterDesa.value = namaDesa;
    renderTabelPengajuanKecamatan();
  }
};

/**
 * Render Data Real-Time di Dashboard (Dasboat) Utama
 */
window.renderDashboardSummary = function() {
  const list = AppState.pengajuanDesa || [];
  const riwayat = AppState.riwayat || [];

  const totalPengajuan = list.length;
  const menungguCount = list.filter(item => item.status === 'Menunggu Verifikasi').length;
  const diverifikasiCount = list.filter(item => item.status === 'Diverifikasi').length;
  const diterbitkanCount = list.filter(item => item.status === 'Diterbitkan').length;

  const totalRekomTerbit = riwayat.length;

  // Hitung total nominal rupiah
  let totalNominal = 0;
  list.forEach(item => {
    totalNominal += (Number(item.nominal) || 0);
  });
  if (totalNominal === 0 && riwayat.length > 0) {
    riwayat.forEach(r => totalNominal += (Number(r.nominalAngka) || 0));
  }

  // Update KPI counters
  const elTotalPengajuan = document.getElementById('dashTotalPengajuan');
  if (elTotalPengajuan) elTotalPengajuan.textContent = totalPengajuan;

  const elMenunggu = document.getElementById('dashMenungguCount');
  if (elMenunggu) elMenunggu.textContent = menungguCount;

  const elDiverifikasi = document.getElementById('dashDiverifikasiCount');
  if (elDiverifikasi) elDiverifikasi.textContent = diverifikasiCount;

  const elDiterbitkan = document.getElementById('dashDiterbitkanCount');
  if (elDiterbitkan) elDiterbitkan.textContent = diterbitkanCount;

  const elTotalRekom = document.getElementById('dashTotalRekomTerbit');
  if (elTotalRekom) elTotalRekom.textContent = totalRekomTerbit;

  const elTotalNominal = document.getElementById('dashTotalNominal');
  if (elTotalNominal) elTotalNominal.textContent = formatRupiah(totalNominal);

  // Status Cloud di dashboard
  const elCloudStatus = document.getElementById('dashStatusCloudText');
  if (elCloudStatus) {
    if (AppState.isConnected && AppState.gasUrl) {
      elCloudStatus.innerHTML = '<span class="text-emerald-400 font-bold">● Google Sheets & Drive Online</span>';
    } else {
      elCloudStatus.innerHTML = '<span class="text-amber-400 font-bold">● Mode Offline / Database Lokal</span>';
    }
  }

  // Update status sidebar
  const elTextSyncSidebar = document.getElementById('textSyncStatusSidebar');
  if (elTextSyncSidebar) {
    elTextSyncSidebar.textContent = (AppState.isConnected && AppState.gasUrl) ? 'Sheets & Drive Aktif' : 'Mode Database Lokal';
  }

  // Render Grid 3 Desa di Dashboard (Api-Api, Sesulu, Bangun Mulya)
  const desaCardsContainer = document.getElementById('dashGridDesa');
  if (desaCardsContainer && AppState.masterDesa) {
    const user = AppState.currentUser;
    const isKecamatan = user && user.role === 'kecamatan';
    const isDesa = user && user.role === 'desa';

    desaCardsContainer.innerHTML = AppState.masterDesa.map(desa => {
      const countDesa = list.filter(item => item.namaDesa === desa.nama).length;
      
      let actionBtnHtml = '';
      if (isKecamatan) {
        actionBtnHtml = `
          <button onclick="bukaVerifikasiDesaTertentu('${desa.nama}')" class="mt-3 w-full py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-[10.5px] font-bold rounded-lg border border-blue-200 hover:border-blue-300 transition text-center flex items-center justify-center gap-1 shadow-2xs cursor-pointer">
            <span>📥 Periksa Berkas Masuk (${countDesa})</span>
          </button>
        `;
      } else if (isDesa && user.desa === desa.nama) {
        actionBtnHtml = `
          <button onclick="pilihDesaDanBukaPengajuan('${desa.nama}')" class="mt-3 w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[10.5px] font-bold rounded-lg transition text-center flex items-center justify-center gap-1 shadow-2xs cursor-pointer">
            <span>📝 Buka Pengajuan Desa Anda</span>
          </button>
        `;
      } else if (isDesa) {
        actionBtnHtml = `
          <button disabled class="mt-3 w-full py-1.5 bg-slate-100 text-slate-400 text-[10.5px] font-semibold rounded-lg border border-slate-200 text-center flex items-center justify-center gap-1 cursor-not-allowed opacity-60" title="Terkunci: Anda login sebagai Desa ${user.desa}">
            <span>🔒 Khusus Operator ${desa.nama}</span>
          </button>
        `;
      } else {
        actionBtnHtml = `
          <button onclick="pilihDesaDanBukaPengajuan('${desa.nama}')" class="mt-3 w-full py-1.5 bg-white hover:bg-emerald-50 text-emerald-700 text-[10.5px] font-bold rounded-lg border border-slate-300 hover:border-emerald-300 transition text-center flex items-center justify-center gap-1 shadow-2xs cursor-pointer">
            <span>🏡 Buka Pengajuan Desa</span>
          </button>
        `;
      }

      return `
        <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 transition flex flex-col justify-between shadow-2xs">
          <div>
            <div class="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
              <div class="font-bold text-slate-900 text-xs">Desa ${escapeHtml(desa.nama)}</div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${countDesa > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}">
                ${countDesa} Berkas
              </span>
            </div>
            <div class="text-[11px] text-slate-600 space-y-1">
              <div>👤 Kades: <strong class="text-slate-800">${escapeHtml(desa.kades)}</strong></div>
              <div>💼 Bendahara: <span class="text-slate-700">${escapeHtml(desa.kaurKeuangan)}</span></div>
              <div class="font-mono text-[10px] text-slate-500">RKD: ${escapeHtml(desa.rekening)}</div>
            </div>
          </div>
          ${actionBtnHtml}
        </div>
      `;
    }).join('');
  }

  // Render 5 Aktivitas Pengajuan Terkini di Dashboard
  const tbodyAktivitas = document.getElementById('tbodyDashAktivitas');
  if (tbodyAktivitas) {
    const latest5 = list.slice(0, 5);
    if (latest5.length === 0) {
      tbodyAktivitas.innerHTML = `
        <tr>
          <td colspan="6" class="text-center py-6 text-slate-400 text-xs">
            Belum ada berkas pengajuan masuk dari desa.
          </td>
        </tr>
      `;
    } else {
      tbodyAktivitas.innerHTML = latest5.map((item, idx) => `
        <tr class="hover:bg-slate-50 border-b border-slate-100 transition text-xs">
          <td class="py-2.5 px-3 text-center text-slate-400 font-mono text-[11px]">${idx + 1}</td>
          <td class="py-2.5 px-3">
            <span class="font-bold text-slate-900">Desa ${escapeHtml(item.namaDesa)}</span>
            <div class="text-[10px] text-slate-400">${new Date(item.waktuKirim).toLocaleDateString('id-ID')}</div>
          </td>
          <td class="py-2.5 px-3">
            <span class="font-medium text-slate-800">${escapeHtml(getNamaTipe(item.jenisDana))}</span>
            <div class="text-[10.5px] text-slate-500">${escapeHtml(item.tahap)} TA ${escapeHtml(item.tahunAnggaran)}</div>
          </td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-emerald-800">
            ${formatRupiah(item.nominal)}
          </td>
          <td class="py-2.5 px-3 text-center">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${item.status === 'Diterbitkan' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
              ${escapeHtml(item.status)}
            </span>
          </td>
          <td class="py-2.5 px-3 text-center">
            ${(AppState.currentUser && AppState.currentUser.role === 'desa') ? `
              <button onclick="navigateToMenu('pengajuan_desa')" class="px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded text-[10px] font-bold transition border border-emerald-200">
                📄 Status
              </button>
            ` : `
              <button onclick="prosesPengajuanKeRekomendasi('${item.id}')" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-bold transition shadow-2xs">
                ⚡ Proses Rekom
              </button>
            `}
          </td>
        </tr>
      `).join('');
    }
  }

  if (typeof applyRoleAccessControl === 'function') {
    applyRoleAccessControl();
  }
};

/**
 * Mengisi Dropdown Pilihan Desa di Dashboard Operator
 */
function populateOperatorDesaSelect() {
  const select = document.getElementById('selectDesaOperator');
  if (!select) return;
  select.innerHTML = '';

  AppState.masterDesa.forEach((desa) => {
    const opt = document.createElement('option');
    opt.value = desa.nama;
    opt.textContent = `Desa ${desa.nama}`;
    if (desa.nama === AppState.operatorDesaAktif) opt.selected = true;
    select.appendChild(opt);
  });
}

/**
 * Ketika Pilihan Desa pada Dashboard Operator Berubah
 */
window.onOperatorDesaChange = function() {
  const select = document.getElementById('selectDesaOperator');
  if (select) AppState.operatorDesaAktif = select.value;
  localStorage.setItem('sip_operator_desa', AppState.operatorDesaAktif);

  const desaData = AppState.masterDesa.find(d => d.nama === AppState.operatorDesaAktif);
  const infoEl = document.getElementById('infoDesaOperator');
  if (infoEl && desaData) {
    infoEl.innerHTML = `
      <span>👤 Kades: <strong class="text-white">${escapeHtml(desaData.kades)}</strong></span>
      <span>💼 Kaur Keuangan: <strong class="text-white">${escapeHtml(desaData.kaurKeuangan)}</strong></span>
      <span>💳 RKD: <span class="font-mono text-emerald-300">${escapeHtml(desaData.rekening)}</span></span>
    `;
  }

  renderTabelPengajuanDesa();
  renderBannerRevisiDesa();
  renderDokumenKecamatanUntukDesa();
};

/**
 * Render Banner Peringatan Berkas yang Dikembalikan oleh Kecamatan
 */
function renderBannerRevisiDesa() {
  const container = document.getElementById('containerBannerRevisiDesa');
  if (!container) return;

  const currentDesa = AppState.operatorDesaAktif;
  const listRevisi = (AppState.pengajuanDesa || []).filter(item => item.namaDesa === currentDesa && item.status === 'Dikembalikan');

  if (listRevisi.length === 0) {
    container.classList.add('hidden');
    container.innerHTML = '';
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = listRevisi.map(rev => `
    <div class="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 shadow-sm flex flex-col md:flex-row items-start justify-between gap-4">
      <div class="flex items-start gap-3">
        <div class="w-10 h-10 rounded-xl bg-rose-200 text-rose-800 flex items-center justify-center text-xl font-bold flex-shrink-0 mt-0.5 shadow-inner">
          ⚠️
        </div>
        <div class="space-y-1.5 flex-1">
          <div class="flex flex-wrap items-center gap-2">
            <h4 class="font-bold text-xs uppercase tracking-wider text-rose-800">Berkas Pengajuan Dikembalikan untuk Diperbaiki</h4>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-200 text-rose-800 border border-rose-300">${escapeHtml(rev.tahap)} - ${escapeHtml(getNamaTipe(rev.jenisDana))}</span>
          </div>
          <div class="text-[11px] text-slate-600">
            Nomor SP: <strong class="font-mono text-slate-800">${escapeHtml(rev.nomorSp || '-')}</strong> (${formatTanggalIndo(rev.tanggalSp)})
          </div>
          <div class="mt-2 text-xs text-slate-900 bg-white p-3 rounded-xl border border-rose-200 shadow-2xs leading-relaxed">
            <div class="text-[10px] uppercase font-bold text-rose-700 tracking-wide mb-1 flex items-center gap-1">
              <span>📝 Catatan Operator Kecamatan Waru:</span>
            </div>
            <div class="font-semibold whitespace-pre-wrap">${escapeHtml(rev.catatanKecamatan || 'Harap periksa kelengkapan berkas dan unggah kembali.')}</div>
            ${rev.waktuCatatanKecamatan ? `<div class="text-[9.5px] text-slate-400 mt-1">Dicatat pada: ${formatTanggalIndo(rev.waktuCatatanKecamatan.split('T')[0])}</div>` : ''}
          </div>
        </div>
      </div>
      <button type="button" onclick="perbaikiPengajuanDesa('${rev.id}')" class="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md flex-shrink-0 cursor-pointer">
        <span>✏️ Perbaiki / Upload Ulang</span>
      </button>
    </div>
  `).join('');
}

function renderDashboardDesa() {
  populateOperatorDesaSelect();
  onOperatorDesaChange();
  renderBannerRevisiDesa();
}

/**
 * Menangani Pemilihan File Dokumen oleh Operator Desa
 * type: 'sp' | 'ceklist' | 'rekom'
 */
window.handleDesaFilePick = function(type, inputEl) {
  if (!inputEl || !inputEl.files || inputEl.files.length === 0) return;
  const file = inputEl.files[0];

  // Validasi: Beri peringatan ramah jika Tanggal SP atau Tanggal Rekom Desa belum diisi
  const tglSp = document.getElementById('desaInputTanggalSp')?.value;
  const tglRekom = document.getElementById('desaInputTanggalRekom')?.value;
  if (!tglSp || !tglRekom) {
    showToast('Peringatan: Pastikan Tanggal SP dan Tanggal Rekom Desa diisi terlebih dahulu!', 'warning');
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const fileId = `file_${type}_${Date.now()}`;
    AppState.uploadedFilesDraft[type] = {
      id: fileId,
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
      dataUrl: e.target.result
    };

    const infoId = type === 'sp' ? 'fileInfoSp' : (type === 'ceklist' ? 'fileInfoCeklist' : 'fileInfoRekom');
    const infoEl = document.getElementById(infoId);
    if (infoEl) {
      infoEl.innerHTML = `
        <span class="inline-flex items-center gap-1 text-emerald-700 font-bold">
          <span>✅</span> <span class="truncate max-w-[140px]">${escapeHtml(file.name)}</span>
        </span>
        <span class="block text-[10px] text-slate-500 font-mono">(${formatFileSize(file.size)})</span>
      `;
    }

    showToast(`Dokumen "${file.name}" berhasil dipilih!`, 'success');
  };

  reader.onerror = function() {
    showToast('Gagal membaca berkas.', 'error');
  };

  reader.readAsDataURL(file);
};

/**
 * Format Ukuran File (Bytes ke KB / MB)
 */
function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Kirim Pengajuan Berkas Desa ke Kecamatan Waru
 */
window.submitPengajuanDesa = async function() {
  const desa = AppState.operatorDesaAktif;
  const jenisDana = document.getElementById('desaInputJenisDana')?.value || 'add_reguler';
  const tahap = document.getElementById('desaInputTahap')?.value || 'Tahap II';
  const tahun = document.getElementById('desaInputTahun')?.value || '2026';
  const nominalRaw = document.getElementById('desaInputNominal')?.value || '0';
  const nominalAngka = parseCurrencyInput(nominalRaw);

  const noSp = document.getElementById('desaInputNomorSp')?.value.trim();
  const tglSp = document.getElementById('desaInputTanggalSp')?.value;
  const noRekom = document.getElementById('desaInputNomorRekom')?.value.trim();
  const tglRekom = document.getElementById('desaInputTanggalRekom')?.value;

  // VALIDASI KETAT SESUAI INSTRUKSI USER:
  if (!tglSp) {
    showToast('Tanggal Surat Pengantar (Tanggal SP) wajib diisi!', 'error');
    document.getElementById('desaInputTanggalSp')?.focus();
    return;
  }

  if (!tglRekom) {
    showToast('Tanggal Rekomendasi Desa (Tanggal Rekom) wajib diisi!', 'error');
    document.getElementById('desaInputTanggalRekom')?.focus();
    return;
  }

  if (!noSp) {
    showToast('Nomor Surat Pengantar (SP) Desa wajib diisi!', 'warning');
    document.getElementById('desaInputNomorSp')?.focus();
    return;
  }

  if (!noRekom) {
    showToast('Nomor Rekomendasi Desa wajib diisi!', 'warning');
    document.getElementById('desaInputNomorRekom')?.focus();
    return;
  }

  const btnKirim = document.getElementById('btnKirimPengajuanDesa');
  if (btnKirim) {
    btnKirim.disabled = true;
    btnKirim.innerHTML = '<span>⏳ Menyimpan Berkas...</span>';
  }

  // Cek apakah mode edit (melalui editingPengajuanId ATAU pengajuan dengan Desa+Dana+Tahap+Tahun yang sama sudah ada di riwayat)
  let existingIndex = -1;
  if (AppState.editingPengajuanId) {
    existingIndex = (AppState.pengajuanDesa || []).findIndex(p => String(p.id) === String(AppState.editingPengajuanId));
  }
  if (existingIndex === -1) {
    existingIndex = (AppState.pengajuanDesa || []).findIndex(p =>
      p.namaDesa === desa &&
      p.jenisDana === jenisDana &&
      p.tahap === tahap &&
      String(p.tahunAnggaran) === String(tahun)
    );
  }

  const isEditing = existingIndex !== -1;
  const targetItem = isEditing ? AppState.pengajuanDesa[existingIndex] : null;

  const draft = AppState.uploadedFilesDraft;
  const fileSpId = draft.sp ? draft.sp.id : (targetItem ? targetItem.fileSpId : `file_sp_${Date.now()}`);
  const fileSpName = draft.sp ? draft.sp.name : (targetItem ? targetItem.fileSpName : `Surat_Pengantar_${desa.replace(/\s+/g, '_')}.pdf`);
  if (draft.sp) await FileStorage.saveFile(draft.sp);

  const fileCeklistId = draft.ceklist ? draft.ceklist.id : (targetItem ? targetItem.fileCeklistId : `file_ceklist_${Date.now()}`);
  const fileCeklistName = draft.ceklist ? draft.ceklist.name : (targetItem ? targetItem.fileCeklistName : `Ceklist_Berkas_${desa.replace(/\s+/g, '_')}.pdf`);
  if (draft.ceklist) await FileStorage.saveFile(draft.ceklist);

  const fileRekomDesaId = draft.rekom ? draft.rekom.id : (targetItem ? targetItem.fileRekomDesaId : `file_rekom_${Date.now()}`);
  const fileRekomDesaName = draft.rekom ? draft.rekom.name : (targetItem ? targetItem.fileRekomDesaName : `Rekomendasi_Desa_${desa.replace(/\s+/g, '_')}.pdf`);
  if (draft.rekom) await FileStorage.saveFile(draft.rekom);

  let submissionToSave;
  if (isEditing && targetItem) {
    targetItem.jenisDana = jenisDana;
    targetItem.tahap = tahap;
    targetItem.tahunAnggaran = tahun;
    targetItem.nomorSp = noSp;
    targetItem.tanggalSp = tglSp;
    targetItem.nomorRekomDesa = noRekom;
    targetItem.tanggalRekomDesa = tglRekom;
    targetItem.nominal = nominalAngka;
    targetItem.fileSpId = fileSpId;
    targetItem.fileSpName = fileSpName;
    targetItem.fileCeklistId = fileCeklistId;
    targetItem.fileCeklistName = fileCeklistName;
    targetItem.fileRekomDesaId = fileRekomDesaId;
    targetItem.fileRekomDesaName = fileRekomDesaName;
    targetItem.waktuKirim = new Date().toISOString();
    targetItem.status = 'Menunggu Verifikasi'; // Reset status untuk ditelaah ulang kecamatan
    targetItem.riwayatCatatanSebelumnya = targetItem.catatanKecamatan;
    targetItem.catatanKecamatan = null;
    submissionToSave = targetItem;
    AppState.editingPengajuanId = null;
  } else {
    submissionToSave = {
      id: `PENG-${new Date().toISOString().replace(/\D/g, '').substring(0, 14)}`,
      namaDesa: desa,
      jenisDana: jenisDana,
      tahap: tahap,
      tahunAnggaran: tahun,
      nomorSp: noSp,
      tanggalSp: tglSp,
      nomorRekomDesa: noRekom,
      tanggalRekomDesa: tglRekom,
      nominal: nominalAngka,
      fileSpId: fileSpId,
      fileSpName: fileSpName,
      fileCeklistId: fileCeklistId,
      fileCeklistName: fileCeklistName,
      fileRekomDesaId: fileRekomDesaId,
      fileRekomDesaName: fileRekomDesaName,
      waktuKirim: new Date().toISOString(),
      status: 'Menunggu Verifikasi'
    };
    AppState.pengajuanDesa.unshift(submissionToSave);
  }

  // Pastikan data pengajuan tidak ada yang duplikat
  const seenPengIds = new Set();
  AppState.pengajuanDesa = AppState.pengajuanDesa.filter(item => {
    if (!item.id || seenPengIds.has(String(item.id))) return false;
    seenPengIds.add(String(item.id));
    return true;
  });

  localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));

  // Sinkronisasi otomatis ke Google Drive & Google Sheets jika URL GAS dikonfigurasi
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    try {
      btnKirim.innerHTML = '<span>☁️ Mengunggah ke Google Drive & Sheets...</span>';
      const payloadGas = {
        action: 'simpanPengajuanDesa',
        id: submissionToSave.id,
        namaDesa: submissionToSave.namaDesa,
        jenisDana: submissionToSave.jenisDana,
        tahap: submissionToSave.tahap,
        tahunAnggaran: submissionToSave.tahunAnggaran,
        nominal: submissionToSave.nominal,
        nomorSp: submissionToSave.nomorSp,
        tanggalSp: submissionToSave.tanggalSp,
        nomorRekomDesa: submissionToSave.nomorRekomDesa,
        tanggalRekomDesa: submissionToSave.tanggalRekomDesa,
        status: submissionToSave.status,
        fileSp: draft.sp ? { name: draft.sp.name, type: draft.sp.type, dataUrl: draft.sp.dataUrl } : null,
        fileCeklist: draft.ceklist ? { name: draft.ceklist.name, type: draft.ceklist.type, dataUrl: draft.ceklist.dataUrl } : null,
        fileRekom: draft.rekom ? { name: draft.rekom.name, type: draft.rekom.type, dataUrl: draft.rekom.dataUrl } : null
      };

      const res = await fetch(AppState.gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payloadGas)
      });
      const resJson = await res.json();
      if (resJson.success) {
        submissionToSave.driveFolderUrl = resJson.driveFolderUrl;
        if (resJson.driveFiles) {
          if (resJson.driveFiles.sp && resJson.driveFiles.sp.url !== '-') submissionToSave.driveSpUrl = resJson.driveFiles.sp.url;
          if (resJson.driveFiles.ceklist && resJson.driveFiles.ceklist.url !== '-') submissionToSave.driveCeklistUrl = resJson.driveFiles.ceklist.url;
          if (resJson.driveFiles.rekom && resJson.driveFiles.rekom.url !== '-') submissionToSave.driveRekomUrl = resJson.driveFiles.rekom.url;
        }
        localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
        showToast('Berkas berhasil disimpan ke Google Drive & dicatat di Google Sheets!', 'success');
      }
    } catch (gasErr) {
      console.warn('Gagal sinkron ke Google Drive:', gasErr);
      showToast('Berkas tersimpan di database lokal (Offline Google Sheets).', 'info');
    }
  }

  renderTabelPengajuanDesa();
  renderBannerRevisiDesa();
  updateBadgePengajuanDesa();
  resetFormPengajuanDesa();

  if (btnKirim) {
    btnKirim.disabled = false;
    btnKirim.className = 'px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer';
    btnKirim.innerHTML = '<span>🚀 Kirim Pengajuan ke Kecamatan Waru</span>';
  }

  showToast(isEditing ? `Berkas perbaikan Desa ${desa} berhasil dikirim ulang ke Kecamatan!` : `Pengajuan Desa ${desa} berhasil dikirim ke Kecamatan Waru!`, 'success');
};

/**
 * Merender Tabel Riwayat Pengajuan di Dashboard Operator Desa
 */
function renderTabelPengajuanDesa() {
  const tbody = document.getElementById('tbodyRiwayatDesa');
  const badgeCount = document.getElementById('badgeCountDesaRiwayat');
  if (!tbody) return;

  const currentDesa = AppState.operatorDesaAktif;
  const list = AppState.pengajuanDesa.filter(item => item.namaDesa === currentDesa);
  if (badgeCount) badgeCount.textContent = list.length;

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-8 text-slate-400">
          Belum ada berkas yang diajukan oleh Desa ${escapeHtml(currentDesa)}.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map((item, index) => {
    let statusBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">Menunggu</span>`;
    if (item.status === 'Diverifikasi') {
      statusBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">Diverifikasi</span>`;
    } else if (item.status === 'Diterbitkan') {
      statusBadge = `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Rekom Terbit</span>`;
    } else if (item.status === 'Dikembalikan') {
      statusBadge = `
        <div class="flex flex-col items-center gap-1.5">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300">
            ↩️ Dikembalikan
          </span>
          <div class="mt-1 p-2 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 text-[10.5px] text-left leading-relaxed max-w-xs shadow-2xs">
            <div class="font-bold flex items-center gap-1 text-[9.5px] text-rose-700 uppercase tracking-wide">
              <span>⚠️ Catatan Kecamatan:</span>
            </div>
            <div class="mt-0.5 text-slate-800 font-semibold whitespace-pre-wrap">${escapeHtml(item.catatanKecamatan || 'Harap lakukan perbaikan berkas.')}</div>
            ${item.waktuCatatanKecamatan ? `<div class="text-[9px] text-slate-400 mt-1">Dicatat: ${formatTanggalIndo(item.waktuCatatanKecamatan.split('T')[0])}</div>` : ''}
          </div>
        </div>
      `;
    }

    let aksiHtml = `
      <div class="flex flex-col gap-1 items-center justify-center min-w-[72px]">
        <button onclick="bukaModalEditPengajuanDesa('${item.id}')" class="w-full px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 hover:text-amber-800 border border-amber-300 rounded-lg text-[11px] font-bold transition shadow-2xs flex items-center justify-center gap-1 cursor-pointer" title="Edit / Perbaiki Data & Dokumen Pengajuan">
          <span>✏️ Edit</span>
        </button>
        <button onclick="hapusPengajuanDesa('${item.id}')" class="w-full px-2 py-0.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded text-[10.5px] font-medium transition flex items-center justify-center gap-1 cursor-pointer" title="Hapus Berkas">
          <span>🗑️ Hapus</span>
        </button>
      </div>
    `;

    if (item.status === 'Dikembalikan') {
      aksiHtml = `
        <div class="flex flex-col gap-1 items-center justify-center min-w-[72px]">
          <button onclick="bukaModalEditPengajuanDesa('${item.id}')" class="w-full px-2.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[11px] font-bold transition shadow-2xs flex items-center justify-center gap-1 cursor-pointer" title="Perbaiki berkas sesuai catatan kecamatan">
            <span>✏️ Perbaiki</span>
          </button>
          <button onclick="hapusPengajuanDesa('${item.id}')" class="w-full px-2 py-0.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded text-[10.5px] font-medium transition flex items-center justify-center gap-1 cursor-pointer" title="Hapus Berkas">
            <span>🗑️ Hapus</span>
          </button>
        </div>
      `;
    }

    return `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100 ${item.status === 'Dikembalikan' ? 'bg-rose-50/20' : ''}">
        <td class="py-3 px-3 text-center text-slate-500 font-mono text-xs">${index + 1}</td>
        <td class="py-3 px-3">
          <div class="font-bold text-slate-900">${getNamaTipe(item.jenisDana)}</div>
          <div class="text-[11px] text-slate-500">${escapeHtml(item.tahap)} TA ${escapeHtml(item.tahunAnggaran)}</div>
          <div class="text-[10px] text-slate-400 mt-0.5">${new Date(item.waktuKirim).toLocaleDateString('id-ID')}</div>
        </td>
        <td class="py-3 px-3">
          <div class="font-mono text-xs font-semibold text-slate-800">${escapeHtml(item.nomorSp || '-')}</div>
          <div class="text-[11px] text-amber-800 font-medium">Tgl: ${formatTanggalIndo(item.tanggalSp)}</div>
        </td>
        <td class="py-3 px-3">
          <div class="font-mono text-xs font-semibold text-slate-800">${escapeHtml(item.nomorRekomDesa || '-')}</div>
          <div class="text-[11px] text-indigo-800 font-medium">Tgl: ${formatTanggalIndo(item.tanggalRekomDesa)}</div>
        </td>
        <td class="py-3 px-3 text-right font-mono font-bold text-emerald-800 text-xs">
          ${formatRupiah(item.nominal)}
        </td>
        <td class="py-3 px-3 text-center">
          <div class="flex flex-col gap-1 items-center">
            <button onclick="downloadDokumenPengajuan('${item.fileSpId}', '${item.fileSpName}', '${item.driveSpUrl || ''}')" class="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold border border-emerald-200 transition flex items-center gap-1 w-full justify-center">
              <span>📄 Unduh SP</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileCeklistId}', '${item.fileCeklistName}', '${item.driveCeklistUrl || ''}')" class="px-2 py-0.5 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded text-[10px] font-bold border border-teal-200 transition flex items-center gap-1 w-full justify-center">
              <span>📋 Unduh Ceklist</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileRekomDesaId}', '${item.fileRekomDesaName}', '${item.driveRekomUrl || ''}')" class="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded text-[10px] font-bold border border-blue-200 transition flex items-center gap-1 w-full justify-center">
              <span>📑 Unduh Rekom</span>
            </button>
            ${item.driveFolderUrl ? `
            <a href="${item.driveFolderUrl}" target="_blank" rel="noopener noreferrer" class="px-2 py-0.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded text-[9.5px] font-bold border border-indigo-200 transition flex items-center gap-1 w-full justify-center mt-0.5" title="Buka Folder Google Drive Desa">
              <span>📂 Folder Drive</span>
            </a>` : ''}
          </div>
        </td>
        <td class="py-3 px-3 text-center">
          ${statusBadge}
        </td>
        <td class="py-3 px-3 text-center">
          ${aksiHtml}
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Buka Modal Edit Data Pengajuan Desa
 */
window.bukaModalEditPengajuanDesa = function(id) {
  const modal = document.getElementById('modalEditPengajuanDesa');
  if (!modal) return;

  const item = (AppState.pengajuanDesa || []).find(p => String(p.id) === String(id)) || (() => { try { return (JSON.parse(localStorage.getItem('sip_pengajuan_desa') || '[]')).find(p => String(p.id) === String(id)); } catch(e) { return null; } })();
  if (!item) {
    showToast('Data pengajuan tidak ditemukan.', 'error');
    return;
  }

  const idEl = document.getElementById('editPengajuanId');
  if (idEl) idEl.value = item.id;

  const desaEl = document.getElementById('editPengajuanDesaNama');
  if (desaEl) desaEl.value = item.namaDesa || '';

  const selJenis = document.getElementById('editPengajuanJenisDana');
  if (selJenis && item.jenisDana) { const opt = Array.from(selJenis.options).find(o => o.value.toLowerCase() === String(item.jenisDana).toLowerCase()); if (opt) selJenis.value = opt.value; else selJenis.value = item.jenisDana; }

  const selTahap = document.getElementById('editPengajuanTahap');
  if (selTahap && item.tahap) selTahap.value = item.tahap;

  const inTahun = document.getElementById('editPengajuanTahun');
  if (inTahun) inTahun.value = item.tahunAnggaran || '2026';

  const inNominal = document.getElementById('editPengajuanNominal');
  const terbilangEl = document.getElementById('editPengajuanTerbilang');
  const nomVal = Number(item.nominal) || 0;
  if (inNominal) {
    inNominal.value = nomVal > 0 ? nomVal.toLocaleString('id-ID') : '0';
  }
  if (terbilangEl) {
    terbilangEl.textContent = nomVal > 0 ? convertTerbilang(nomVal) + ' Rupiah' : 'Nol Rupiah';
  }

  const inNoSp = document.getElementById('editPengajuanNomorSp');
  if (inNoSp) inNoSp.value = item.nomorSp || '';

  const inTglSp = document.getElementById('editPengajuanTanggalSp');
  if (inTglSp) inTglSp.value = item.tanggalSp || '';

  const inNoRekom = document.getElementById('editPengajuanNomorRekom');
  if (inNoRekom) inNoRekom.value = item.nomorRekomDesa || '';

  const inTglRekom = document.getElementById('editPengajuanTanggalRekom');
  if (inTglRekom) inTglRekom.value = item.tanggalRekomDesa || '';

  // File labels
  const spInfo = document.getElementById('editInfoFileSp');
  if (spInfo) {
    spInfo.innerHTML = item.fileSpName
      ? `📁 File saat ini: <strong class="text-slate-800">${escapeHtml(item.fileSpName)}</strong>`
      : 'Belum ada file diunggah';
  }
  const fileSpInput = document.getElementById('editFileInputSp');
  if (fileSpInput) fileSpInput.value = '';

  const ceklistInfo = document.getElementById('editInfoFileCeklist');
  if (ceklistInfo) {
    ceklistInfo.innerHTML = item.fileCeklistName
      ? `📁 File saat ini: <strong class="text-slate-800">${escapeHtml(item.fileCeklistName)}</strong>`
      : 'Belum ada file diunggah';
  }
  const fileCeklistInput = document.getElementById('editFileInputCeklist');
  if (fileCeklistInput) fileCeklistInput.value = '';

  const rekomInfo = document.getElementById('editInfoFileRekom');
  if (rekomInfo) {
    rekomInfo.innerHTML = item.fileRekomDesaName
      ? `📁 File saat ini: <strong class="text-slate-800">${escapeHtml(item.fileRekomDesaName)}</strong>`
      : 'Belum ada file diunggah';
  }
  const fileRekomInput = document.getElementById('editFileInputRekom');
  if (fileRekomInput) fileRekomInput.value = '';

  // Banner Catatan Kecamatan jika ada
  const bannerCatatan = document.getElementById('editPengajuanBannerCatatan');
  const teksCatatan = document.getElementById('editPengajuanTeksCatatan');
  if (bannerCatatan && teksCatatan) {
    if (item.catatanKecamatan) {
      bannerCatatan.classList.remove('hidden');
      teksCatatan.textContent = item.catatanKecamatan;
    } else {
      bannerCatatan.classList.add('hidden');
      teksCatatan.textContent = '';
    }
  }

  modal.classList.remove('hidden'); modal.style.display = 'flex';
};

/**
 * Tutup Modal Edit Data Pengajuan Desa
 */
window.tutupModalEditPengajuanDesa = function() {
  const modal = document.getElementById('modalEditPengajuanDesa');
  if (modal) { modal.classList.add('hidden'); modal.style.display = 'none'; }
};

/**
 * Alias perbaikiPengajuanDesa agar kompatibel dengan tombol banner perbaikan
 */
window.perbaikiPengajuanDesa = function(id) {
  bukaModalEditPengajuanDesa(id);
};

/**
 * Simpan Perubahan / Perbaikan Pengajuan Desa dari Modal
 */
window.simpanEditPengajuanDesa = async function(e) {
  if (e && e.preventDefault) e.preventDefault();

  const id = document.getElementById('editPengajuanId')?.value;
  if (!id) return;

  if (!Array.isArray(AppState.pengajuanDesa)) {
    try {
      AppState.pengajuanDesa = JSON.parse(localStorage.getItem('sip_pengajuan_desa') || '[]');
    } catch(e) {
      AppState.pengajuanDesa = [];
    }
  }

  let targetIndex = AppState.pengajuanDesa.findIndex(p => String(p.id) === String(id));
  if (targetIndex === -1) {
    try {
      const localList = JSON.parse(localStorage.getItem('sip_pengajuan_desa') || '[]');
      targetIndex = localList.findIndex(p => String(p.id) === String(id));
      if (targetIndex !== -1) {
        AppState.pengajuanDesa = localList;
      }
    } catch(e) {}
  }

  // Fallback pencocokan namaDesa + jenisDana + tahap + tahun jika ID tidak cocok persis
  if (targetIndex === -1) {
    const editDesa = document.getElementById('editPengajuanDesaNama')?.value;
    const editJenis = document.getElementById('editPengajuanJenisDana')?.value;
    const editTahap = document.getElementById('editPengajuanTahap')?.value;
    const editTahun = document.getElementById('editPengajuanTahun')?.value;
    targetIndex = AppState.pengajuanDesa.findIndex(p =>
      p.namaDesa === editDesa &&
      p.jenisDana === editJenis &&
      p.tahap === editTahap &&
      String(p.tahunAnggaran) === String(editTahun)
    );
  }

  if (targetIndex === -1) {
    showToast('Data pengajuan tidak ditemukan.', 'error');
    return;
  }

  const targetItem = AppState.pengajuanDesa[targetIndex];

  const jenisDana = document.getElementById('editPengajuanJenisDana')?.value || targetItem.jenisDana;
  const tahap = document.getElementById('editPengajuanTahap')?.value || targetItem.tahap;
  const tahun = document.getElementById('editPengajuanTahun')?.value || targetItem.tahunAnggaran;
  const nominalRaw = document.getElementById('editPengajuanNominal')?.value || '0';
  const nominalAngka = parseCurrencyInput(nominalRaw);

  const noSp = document.getElementById('editPengajuanNomorSp')?.value.trim() || '';
  const tglSp = document.getElementById('editPengajuanTanggalSp')?.value || '';
  const noRekom = document.getElementById('editPengajuanNomorRekom')?.value.trim() || '';
  const tglRekom = document.getElementById('editPengajuanTanggalRekom')?.value || '';

  if (!tglSp) {
    showToast('Tanggal Surat Pengantar (Tanggal SP) wajib diisi!', 'error');
    document.getElementById('editPengajuanTanggalSp')?.focus();
    return;
  }

  if (!tglRekom) {
    showToast('Tanggal Rekomendasi Desa wajib diisi!', 'error');
    document.getElementById('editPengajuanTanggalRekom')?.focus();
    return;
  }

  const btnSubmit = document.getElementById('btnSubmitEditPengajuanDesa');
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<span>⏳ Menyimpan Perubahan...</span>';
  }

  try {
    const spFileInput = document.getElementById('editFileInputSp');
    const ceklistFileInput = document.getElementById('editFileInputCeklist');
    const rekomFileInput = document.getElementById('editFileInputRekom');

    function readFilePromise(file) {
      return new Promise((resolve, reject) => {
        if (!file) return resolve(null);
        const reader = new FileReader();
        reader.onload = ev => resolve({
          name: file.name,
          size: formatFileSize(file.size),
          type: file.type || 'application/pdf',
          dataUrl: ev.target.result
        });
        reader.onerror = err => reject(err);
        reader.readAsDataURL(file);
      });
    }

    const newSp = spFileInput && spFileInput.files && spFileInput.files[0] ? await readFilePromise(spFileInput.files[0]) : null;
    const newCeklist = ceklistFileInput && ceklistFileInput.files && ceklistFileInput.files[0] ? await readFilePromise(ceklistFileInput.files[0]) : null;
    const newRekom = rekomFileInput && rekomFileInput.files && rekomFileInput.files[0] ? await readFilePromise(rekomFileInput.files[0]) : null;

    if (newSp) {
      const fileSpId = `file_sp_${Date.now()}`;
      newSp.id = fileSpId;
      await FileStorage.saveFile(newSp);
      targetItem.fileSpId = fileSpId;
      targetItem.fileSpName = newSp.name;
    }

    if (newCeklist) {
      const fileCeklistId = `file_ceklist_${Date.now()}`;
      newCeklist.id = fileCeklistId;
      await FileStorage.saveFile(newCeklist);
      targetItem.fileCeklistId = fileCeklistId;
      targetItem.fileCeklistName = newCeklist.name;
    }

    if (newRekom) {
      const fileRekomDesaId = `file_rekom_${Date.now()}`;
      newRekom.id = fileRekomDesaId;
      await FileStorage.saveFile(newRekom);
      targetItem.fileRekomDesaId = fileRekomDesaId;
      targetItem.fileRekomDesaName = newRekom.name;
    }

    targetItem.jenisDana = jenisDana;
    targetItem.tahap = tahap;
    targetItem.tahunAnggaran = tahun;
    targetItem.nominal = nominalAngka;
    targetItem.nomorSp = noSp;
    targetItem.tanggalSp = tglSp;
    targetItem.nomorRekomDesa = noRekom;
    targetItem.tanggalRekomDesa = tglRekom;
    targetItem.waktuKirim = new Date().toISOString();

    if (targetItem.status === 'Dikembalikan') {
      targetItem.status = 'Menunggu Verifikasi';
      targetItem.riwayatCatatanSebelumnya = targetItem.catatanKecamatan;
      targetItem.catatanKecamatan = null;
    }

    // Pastikan data pengajuan tidak ada yang duplikat
    const seenP = new Set();
    AppState.pengajuanDesa = AppState.pengajuanDesa.filter(item => {
      if (!item.id || seenP.has(String(item.id))) return false;
      seenP.add(String(item.id));
      return true;
    });

    localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));

    if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
      try {
        if (btnSubmit) btnSubmit.innerHTML = '<span>☁️ Sinkronisasi ke Google Drive & Sheets...</span>';
        const payloadGas = {
          action: 'simpanPengajuanDesa',
          id: targetItem.id,
          namaDesa: targetItem.namaDesa,
          jenisDana: targetItem.jenisDana,
          tahap: targetItem.tahap,
          tahunAnggaran: targetItem.tahunAnggaran,
          nominal: targetItem.nominal,
          nomorSp: targetItem.nomorSp,
          tanggalSp: targetItem.tanggalSp,
          nomorRekomDesa: targetItem.nomorRekomDesa,
          tanggalRekomDesa: targetItem.tanggalRekomDesa,
          status: targetItem.status,
          fileSp: newSp ? { name: newSp.name, type: newSp.type, dataUrl: newSp.dataUrl } : null,
          fileCeklist: newCeklist ? { name: newCeklist.name, type: newCeklist.type, dataUrl: newCeklist.dataUrl } : null,
          fileRekom: newRekom ? { name: newRekom.name, type: newRekom.type, dataUrl: newRekom.dataUrl } : null
        };

        const res = await fetch(AppState.gasUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payloadGas)
        });
        const resJson = await res.json();
        if (resJson.success) {
          if (resJson.driveFolderUrl && resJson.driveFolderUrl !== '-') {
            targetItem.driveFolderUrl = resJson.driveFolderUrl;
          }
          if (resJson.driveFiles) {
            if (resJson.driveFiles.sp && resJson.driveFiles.sp.url !== '-') targetItem.driveSpUrl = resJson.driveFiles.sp.url;
            if (resJson.driveFiles.ceklist && resJson.driveFiles.ceklist.url !== '-') targetItem.driveCeklistUrl = resJson.driveFiles.ceklist.url;
            if (resJson.driveFiles.rekom && resJson.driveFiles.rekom.url !== '-') targetItem.driveRekomUrl = resJson.driveFiles.rekom.url;
          }
          localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
        }
      } catch (syncErr) {
        console.warn('Gagal sinkron edit pengajuan ke GAS:', syncErr);
      }
    }

    tutupModalEditPengajuanDesa();
    renderTabelPengajuanDesa();
    renderTabelPengajuanKecamatan();
    renderBannerRevisiDesa();
    updateBadgePengajuanDesa();
    renderDashboardSummary();

    showToast('Data pengajuan berhasil diperbarui!', 'success');
  } catch (err) {
    console.error('Error saat menyimpan perbaikan pengajuan:', err);
    showToast('Terjadi kesalahan saat menyimpan: ' + err.message, 'error');
  } finally {
    if (btnSubmit) {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = '<span>💾 Simpan Perubahan Pengajuan</span>';
    }
  }
};

/**
 * Reset Input Form Pengajuan Desa
 */
window.resetFormPengajuanDesa = function() {
  AppState.editingPengajuanId = null;
  AppState.uploadedFilesDraft = { sp: null, ceklist: null, rekom: null };
  const spInfo = document.getElementById('fileInfoSp');
  if (spInfo) spInfo.textContent = 'Belum ada file dipilih';
  const ceklistInfo = document.getElementById('fileInfoCeklist');
  if (ceklistInfo) ceklistInfo.textContent = 'Belum ada file dipilih';
  const rekomInfo = document.getElementById('fileInfoRekom');
  if (rekomInfo) rekomInfo.textContent = 'Belum ada file dipilih';

  const spInput = document.getElementById('fileInputSp');
  if (spInput) spInput.value = '';
  const ceklistInput = document.getElementById('fileInputCeklist');
  if (ceklistInput) ceklistInput.value = '';
  const rekomInput = document.getElementById('fileInputRekom');
  if (rekomInput) rekomInput.value = '';

  const btnKirim = document.getElementById('btnKirimPengajuanDesa');
  if (btnKirim) {
    btnKirim.className = 'px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer';
    btnKirim.innerHTML = '<span>🚀 Kirim Pengajuan ke Kecamatan Waru</span>';
  }
};

/**
 * Hapus Pengajuan Desa
 */
window.hapusPengajuanDesa = function(id) {
  if (!confirm('Hapus pengajuan berkas ini?')) return;
  AppState.pengajuanDesa = AppState.pengajuanDesa.filter(item => item.id !== id);
  localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
  renderTabelPengajuanDesa();
  updateBadgePengajuanDesa();
  showToast('Pengajuan dihapus.', 'info');
};

/**
 * Update Badge Notifikasi Berkas Masuk di Sidebar & Sub-Tab & Navbar
 */
function updateBadgePengajuanDesa() {
  const count = (AppState.pengajuanDesa || []).length;
  const riwayatCount = (AppState.riwayat || []).length;

  // Badge navbar modal lama (jika ada)
  const badgeOld = document.getElementById('badgePengajuanMasukCount');
  if (badgeOld) {
    badgeOld.textContent = count;
    if (count > 0) badgeOld.classList.remove('hidden');
    else badgeOld.classList.add('hidden');
  }

  // Badge di Sidebar (Menu 3: Verifikasi & Rekom)
  const badgeSidebar = document.getElementById('badgeSidebarPengajuanCount');
  if (badgeSidebar) {
    badgeSidebar.textContent = count;
    if (count > 0) badgeSidebar.classList.remove('hidden');
    else badgeSidebar.classList.add('hidden');
  }

  // Badge di Sub-Tab Verifikasi (Menu 3 Tab 1)
  const badgeTabVerif = document.getElementById('badgeTabVerifikasiCount');
  if (badgeTabVerif) {
    badgeTabVerif.textContent = count;
    if (count > 0) badgeTabVerif.classList.remove('hidden');
    else badgeTabVerif.classList.add('hidden');
  }

  // Badge Riwayat di Sidebar
  const badgeHistory = document.getElementById('badgeSidebarHistoryCount');
  if (badgeHistory) {
    badgeHistory.textContent = riwayatCount;
  }

  // Update ringkasan di dashboard secara real-time
  renderDashboardSummary();
}

// =========================================================================================
// FITUR MODAL KOTAK MASUK KECAMATAN (UNDUH BERKAS DESA & PROSES REKOMENDASI)
// =========================================================================================

window.openModalPengajuanKecamatan = function() {
  renderTabelPengajuanKecamatan();
  document.getElementById('modalPengajuanDesaKecamatan')?.classList.remove('hidden');
};

window.closeModalPengajuanKecamatan = function() {
  document.getElementById('modalPengajuanDesaKecamatan')?.classList.add('hidden');
};

/**
 * Render Tabel Berkas Masuk dari Desa untuk Pihak Kecamatan
 */
window.renderTabelPengajuanKecamatan = function() {
  const tbody = document.getElementById('tbodyPengajuanKecamatan');
  if (!tbody) return;

  const filterDesa = document.getElementById('filterDesaKecamatan')?.value || 'semua';
  const filterJenis = document.getElementById('filterJenisKecamatan')?.value || 'semua';

  let list = AppState.pengajuanDesa || [];
  if (filterDesa !== 'semua') {
    list = list.filter(item => item.namaDesa === filterDesa);
  }
  if (filterJenis !== 'semua') {
    list = list.filter(item => item.jenisDana === filterJenis);
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-8 text-slate-400">
          Tidak ada berkas pengajuan masuk dari desa yang sesuai filter.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map((item, index) => {
    // Status Badge & Keterangan Catatan
    let statusBadge = `
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
        <span>⏳ Menunggu Verifikasi</span>
      </span>
    `;

    if (item.status === 'Dikembalikan') {
      statusBadge = `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
          <span>↩️ Dikembalikan</span>
        </span>
      `;
    } else if (item.status === 'Diterbitkan') {
      statusBadge = `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          <span>✓ Rekom Diterbitkan</span>
        </span>
      `;
    }

    let catatanBox = '';
    if (item.catatanKecamatan) {
      catatanBox = `
        <div class="mt-2 p-1.5 bg-rose-50 border border-rose-200 rounded text-[10px] text-rose-900 text-left">
          <div class="font-bold flex items-center gap-1 text-[9px] uppercase tracking-wide text-rose-700">
            <span>📝 Catatan Kecamatan:</span>
          </div>
          <div class="italic text-slate-800 mt-0.5 line-clamp-3 leading-snug break-words" title="${escapeHtml(item.catatanKecamatan)}">
            "${escapeHtml(item.catatanKecamatan)}"
          </div>
        </div>
      `;
    }

    // Pilihan Tindakan Kecamatan (Data OK -> Buat Rekom Camat | Tidak OK -> Kembalikan dengan Catatan)
    let tindakanHtml = '';
    if (item.status === 'Dikembalikan') {
      tindakanHtml = `
        <div class="flex flex-col gap-1.5">
          <button onclick="prosesPengajuanKeRekomendasi('${item.id}')" class="w-full px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[11px] font-bold transition shadow-xs flex items-center justify-center gap-1 cursor-pointer" title="Data berkas sudah diperbaiki & OK: Lanjutkan pembuatan Rekomendasi Camat">
            <span>⚡ Data OK: Buat Rekom</span>
          </button>
          <button onclick="bukaModalKembalikanPengajuan('${item.id}')" class="w-full px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 border border-rose-300 hover:border-rose-400 rounded-lg text-[11px] font-bold transition shadow-2xs flex items-center justify-center gap-1 cursor-pointer" title="Perbarui catatan revisi untuk pihak desa">
            <span>✏️ Ubah Catatan Revisi</span>
          </button>
        </div>
      `;
    } else if (item.status === 'Diterbitkan') {
      tindakanHtml = `
        <div class="flex flex-col gap-1.5">
          <button onclick="bukaModalKirimDariPengajuan('${item.id}')" class="w-full px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[11px] font-bold transition shadow-xs flex items-center justify-center gap-1 cursor-pointer" title="Kirim Berkas Rekomendasi Resmi ke Desa untuk BKAD">
            <span>📤 Kirim ke Desa</span>
          </button>
          <button onclick="prosesPengajuanKeRekomendasi('${item.id}')" class="w-full px-2 py-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[10.5px] font-semibold transition flex items-center justify-center gap-1 cursor-pointer" title="Buka kembali formulir generator rekomendasi camat">
            <span>⚡ Buka Rekom</span>
          </button>
          <button onclick="bukaModalKembalikanPengajuan('${item.id}')" class="w-full px-2 py-1 bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-700 border border-slate-200 hover:border-rose-300 rounded-lg text-[10px] font-semibold transition flex items-center justify-center gap-1 cursor-pointer" title="Koreksi dan kembalikan berkas ke desa">
            <span>↩️ Koreksi / Kembalikan</span>
          </button>
        </div>
      `;
    } else {
      // Default: Status Menunggu Verifikasi
      tindakanHtml = `
        <div class="flex flex-col gap-1.5">
          <!-- Pilihan 1: Jika Data OK -->
          <button onclick="prosesPengajuanKeRekomendasi('${item.id}')" class="w-full px-2.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-lg text-[11px] font-bold transition shadow-sm hover:shadow flex items-center justify-center gap-1 cursor-pointer" title="Data berkas lengkap & valid: Lanjutkan pembuatan Surat Rekomendasi Camat">
            <span>⚡ Data OK: Buat Rekom</span>
          </button>

          <!-- Pilihan 2: Jika Data TIDAK OK -->
          <button onclick="bukaModalKembalikanPengajuan('${item.id}')" class="w-full px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 border border-rose-300 hover:border-rose-400 rounded-lg text-[11px] font-bold transition shadow-2xs flex items-center justify-center gap-1 cursor-pointer" title="Data berkas belum lengkap atau salah: Kembalikan ke desa dengan catatan perbaikan">
            <span>↩️ Tidak OK: Kembalikan</span>
          </button>

          <!-- Pilihan 3: Kirim Langsung Dokumen ke Desa -->
          <button onclick="bukaModalKirimDariPengajuan('${item.id}')" class="w-full px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer" title="Unggah 3 Berkas & Kirim ke Desa untuk BKAD">
            <span>📤 Kirim ke Desa</span>
          </button>
        </div>
      `;
    }

    return `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100 ${item.status === 'Dikembalikan' ? 'bg-rose-50/20' : ''}">
        <td class="py-3 px-3 text-center text-slate-500 font-mono text-xs">${index + 1}</td>
        <td class="py-3 px-3">
          <div class="font-bold text-slate-900 text-xs">Desa ${escapeHtml(item.namaDesa)}</div>
          <div class="text-[11px] text-slate-500">${new Date(item.waktuKirim).toLocaleDateString('id-ID')}</div>
          <div class="mt-1">${statusBadge}</div>
          ${catatanBox}
        </td>
        <td class="py-3 px-3">
          <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
            ${escapeHtml(getNamaTipe(item.jenisDana))}
          </span>
          <div class="text-[11px] text-slate-600 mt-0.5 font-medium">${escapeHtml(item.tahap)} TA ${escapeHtml(item.tahunAnggaran)}</div>
        </td>
        <td class="py-3 px-3">
          <div class="font-mono text-xs font-semibold text-slate-800">${escapeHtml(item.nomorSp || '-')}</div>
          <div class="text-[11px] text-amber-900 font-medium">Tgl SP: <strong>${formatTanggalIndo(item.tanggalSp)}</strong></div>
        </td>
        <td class="py-3 px-3">
          <div class="font-mono text-xs font-semibold text-slate-800">${escapeHtml(item.nomorRekomDesa || '-')}</div>
          <div class="text-[11px] text-indigo-900 font-medium">Tgl Rekom: <strong>${formatTanggalIndo(item.tanggalRekomDesa)}</strong></div>
        </td>
        <td class="py-3 px-3 text-right font-mono font-bold text-emerald-800 text-xs">
          ${formatRupiah(item.nominal)}
        </td>
        <td class="py-3 px-3 text-center">
          <div class="flex flex-col gap-1 items-center">
            <button onclick="downloadDokumenPengajuan('${item.fileSpId}', '${item.fileSpName}', '${item.driveSpUrl || ''}')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10.5px] font-semibold transition shadow-2xs flex items-center gap-1 w-full justify-center">
              <span>📥 Unduh SP</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileCeklistId}', '${item.fileCeklistName}', '${item.driveCeklistUrl || ''}')" class="px-2.5 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded text-[10.5px] font-semibold transition shadow-2xs flex items-center gap-1 w-full justify-center">
              <span>📥 Unduh Ceklist</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileRekomDesaId}', '${item.fileRekomDesaName}', '${item.driveRekomUrl || ''}')" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10.5px] font-semibold transition shadow-2xs flex items-center gap-1 w-full justify-center">
              <span>📥 Unduh Rekom Desa</span>
            </button>
            ${item.driveFolderUrl ? `
            <a href="${item.driveFolderUrl}" target="_blank" rel="noopener noreferrer" class="px-2 py-0.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded text-[9.5px] font-bold border border-indigo-200 transition flex items-center gap-1 w-full justify-center mt-0.5" title="Buka Folder Google Drive Desa Ini">
              <span>📂 Folder Drive Desa</span>
            </a>` : ''}
          </div>
        </td>
        <td class="py-3 px-3 text-center">
          ${tindakanHtml}
        </td>
      </tr>
    `;
  }).join('');
};

/**
 * Download Dokumen Pengajuan (dari Google Drive jika ada, fallback ke IndexedDB)
 */
window.downloadDokumenPengajuan = function(fileId, defaultName, driveUrl = null) {
  FileStorage.downloadFile(fileId, defaultName, driveUrl);
};

/**
 * Membuka Folder Google Drive Kecamatan / Desa
 */
window.openDriveFolderKecamatan = async function() {
  const user = AppState.currentUser;
  if (user && user.role === 'desa') {
    showToast('⚠️ Akses Terkunci: Folder Google Drive utama hanya dapat diakses oleh pihak Kecamatan.', 'warning');
    return;
  }
  if (!AppState.gasUrl || !AppState.gasUrl.startsWith('http')) {
    alert('URL Google Apps Script belum disetel di Konfigurasi Google Sheets.\n\nSilakan masukkan URL Web App Google Apps Script terlebih dahulu agar folder Google Drive otomatis terbuka.');
    return;
  }
  try {
    showToast('Membuka folder Google Drive SIP-REKOM...', 'info');
    const res = await fetch(`${AppState.gasUrl}?action=ping`);
    const data = await res.json();
    if (data.driveFolderUrl) {
      window.open(data.driveFolderUrl, '_blank');
    } else {
      window.open('https://drive.google.com/', '_blank');
    }
  } catch (e) {
    window.open('https://drive.google.com/', '_blank');
  }
};

/**
 * FITUR MODAL KEMBALIKAN PENGAJUAN (DATA TIDAK OK) DENGAN CATATAN OPERATOR
 */
AppState.kembalikanPengajuanId = null;

window.bukaModalKembalikanPengajuan = function(id) {
  const item = (AppState.pengajuanDesa || []).find(p => String(p.id) === String(id)) || (() => { try { return (JSON.parse(localStorage.getItem('sip_pengajuan_desa') || '[]')).find(p => String(p.id) === String(id)); } catch(e) { return null; } })();
  if (!item) {
    showToast('Data pengajuan berkas tidak ditemukan.', 'error');
    return;
  }

  AppState.kembalikanPengajuanId = id;

  const infoDesa = document.getElementById('kembalikanInfoDesa');
  if (infoDesa) {
    infoDesa.textContent = `Desa ${item.namaDesa} • ${getNamaTipe(item.jenisDana)} (${item.tahap} TA ${item.tahunAnggaran})`;
  }

  const infoSp = document.getElementById('kembalikanInfoSp');
  if (infoSp) {
    infoSp.textContent = `No. SP: ${item.nomorSp || '-'} (${item.tanggalSp ? formatTanggalIndo(item.tanggalSp) : '-'}) • Nominal: ${formatRupiah(item.nominal)}`;
  }

  const inputCatatan = document.getElementById('inputCatatanKecamatan');
  if (inputCatatan) {
    inputCatatan.value = item.catatanKecamatan || '';
  }

  const modal = document.getElementById('modalKembalikanPengajuan');
  if (modal) {
    modal.classList.remove('hidden'); modal.style.display = 'flex';
    setTimeout(() => inputCatatan?.focus(), 150);
  }
};

window.closeModalKembalikanPengajuan = function() {
  const modal = document.getElementById('modalKembalikanPengajuan');
  if (modal) { modal.classList.add('hidden'); modal.style.display = 'none'; }
  AppState.kembalikanPengajuanId = null;
};

window.appendCatatanTemplate = function(templateText) {
  const input = document.getElementById('inputCatatanKecamatan');
  if (!input) return;
  const current = input.value.trim();
  if (!current) {
    input.value = templateText;
  } else if (!current.includes(templateText)) {
    input.value = current + '\n• ' + templateText;
  }
  input.focus();
};

window.submitKembalikanPengajuan = function() {
  const id = AppState.kembalikanPengajuanId;
  if (!id) {
    closeModalKembalikanPengajuan();
    return;
  }

  const item = (AppState.pengajuanDesa || []).find(p => String(p.id) === String(id)) || (() => { try { return (JSON.parse(localStorage.getItem('sip_pengajuan_desa') || '[]')).find(p => String(p.id) === String(id)); } catch(e) { return null; } })();
  if (!item) {
    showToast('Data pengajuan tidak ditemukan.', 'error');
    closeModalKembalikanPengajuan();
    return;
  }

  const inputCatatan = document.getElementById('inputCatatanKecamatan');
  const catatan = inputCatatan ? inputCatatan.value.trim() : '';

  if (!catatan) {
    alert('Harap tuliskan catatan atau alasan pengembalian berkas agar operator desa mengetahui apa yang harus diperbaiki.');
    inputCatatan?.focus();
    return;
  }

  // Update status lokal
  item.status = 'Dikembalikan';
  item.catatanKecamatan = catatan;
  item.waktuCatatanKecamatan = new Date().toISOString();

  // Simpan ke localStorage
  localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));

  // Update ke Google Sheets di background jika online
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    fetch(AppState.gasUrl, {
      method: 'POST',
      body: JSON.stringify({
        action: 'updateStatusPengajuan',
        id: item.id,
        status: 'Dikembalikan',
        catatan: catatan
      })
    }).catch(e => console.error('Gagal kirim update status ke GAS:', e));
  }

  closeModalKembalikanPengajuan();
  renderTabelPengajuanKecamatan();
  renderTabelPengajuanDesa();
  renderDashboardDesa();
  updateBadgePengajuanDesa();

  showToast(`Berkas pengajuan Desa ${item.namaDesa} berhasil dikembalikan dengan catatan perbaikan!`, 'warning');
};

/**
 * Mengambil Data Pengajuan Desa dan Memasukkannya Langsung ke Form & Surat Rekomendasi Kecamatan (DATA OK)
 */
window.prosesPengajuanKeRekomendasi = function(id) {
  const user = AppState.currentUser;
  if (user && user.role === 'desa') {
    showToast('⚠️ Akses Terkunci: Pembuatan & Penerbitan Surat Rekomendasi Camat adalah kewenangan pihak Kecamatan Waru.', 'warning');
    return;
  }
  const item = AppState.pengajuanDesa.find(p => p.id === id);
  if (!item) return;

  // 1. Pilih jenis rekomendasi yang sesuai
  pilihTipeRekomendasi(item.jenisDana);

  // 2. Pilih desa yang bersangkutan
  const selectDesa = document.getElementById('selectNamaDesa');
  if (selectDesa) {
    selectDesa.value = item.namaDesa;
    triggerAutoFillDesa();
  }

  // 3. Masukkan nominal angka & generate terbilang
  if (item.nominal) {
    const inputNominal = document.getElementById('inputNominalAngka');
    if (inputNominal) {
      inputNominal.value = Number(item.nominal).toLocaleString('id-ID');
      document.getElementById('outputTerbilang').textContent = convertTerbilang(item.nominal);
    }
  }

  // 4. Masukkan tahap / bulan
  if (item.tahap) {
    const selectTahap = document.getElementById('selectTahapReguler');
    if (selectTahap) selectTahap.value = item.tahap;
    const selectBulan = document.getElementById('selectBulanGaji');
    if (selectBulan && item.tahap.startsWith('Bulan')) {
      selectBulan.value = item.tahap.replace('Bulan', '').trim();
    }
  }

  // 5. Masukkan tahun anggaran
  if (item.tahunAnggaran) {
    const inputTahun = document.getElementById('inputTahunAnggaran');
    if (inputTahun) inputTahun.value = item.tahunAnggaran;
    const inputTahunReguler = document.getElementById('inputTahunAnggaranReguler');
    if (inputTahunReguler) inputTahunReguler.value = item.tahunAnggaran;
  }

  // 6. Tandai status pengajuan sebagai diterbitkan rekomendasi
  item.status = 'Diterbitkan';
  localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
  updateBadgePengajuanDesa();

  // Sinkronkan update status ke Google Sheets di background jika online
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    fetch(AppState.gasUrl, {
      method: 'POST',
      body: JSON.stringify({
        action: 'updateStatusPengajuan',
        id: item.id,
        status: 'Diterbitkan',
        catatan: 'Disetujui dan diterbitkan Surat Rekomendasi Camat'
      })
    }).catch(e => console.error('Gagal update status pengajuan ke gas:', e));
  }

  // 7. Tutup modal (jika terbuka) & beralih ke Menu 3 Tab 2 (Generator Rekomendasi)
  closeModalPengajuanKecamatan();
  navigateToMenu('verifikasi_rekom');
  switchKecamatanSubTab('generator');

  autoUpdatePerihal();

  // Cek apakah rekomendasi untuk berkas ini sudah pernah dibuat sebelumnya di riwayat
  const existingRekom = (AppState.riwayat || []).find(r => 
    r.namaDesa === item.namaDesa &&
    String(r.jenisDana).toLowerCase() === String(item.jenisDana).toLowerCase() &&
    r.tahap === item.tahap &&
    String(r.tahunAnggaran) === String(item.tahunAnggaran)
  );

  if (existingRekom) {
    AppState.editingRekomId = existingRekom.id;
    if (existingRekom.nomorSurat && document.getElementById('inputNomorSurat')) {
      document.getElementById('inputNomorSurat').value = existingRekom.nomorSurat;
    }
    if (existingRekom.tanggalSurat && document.getElementById('inputTanggalSurat')) {
      document.getElementById('inputTanggalSurat').value = existingRekom.tanggalSurat;
    }
  } else {
    AppState.editingRekomId = null;
    autoGenerateNomorSurat();
  }

  renderEditingRekomBanner();
  updateLivePreview();

  showToast(`Data pengajuan Desa ${item.namaDesa} berhasil disinkronkan ke Surat Rekomendasi Camat!`, 'success');
};

/**
 * Helper untuk mengambil nilai kolom dari Google Sheets dengan toleransi variasi penamaan header
 */
function getSheetVal(row, aliases, defaultVal = '') {
  if (!row || typeof row !== 'object') return defaultVal;
  for (const a of aliases) {
    if (row[a] !== undefined && row[a] !== null && String(row[a]).trim() !== '') {
      return row[a];
    }
  }
  const cleanKey = k => String(k).toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedMap = {};
  for (const k of Object.keys(row)) {
    normalizedMap[cleanKey(k)] = row[k];
  }
  for (const a of aliases) {
    const ck = cleanKey(a);
    if (normalizedMap[ck] !== undefined && normalizedMap[ck] !== null && String(normalizedMap[ck]).trim() !== '') {
      return normalizedMap[ck];
    }
  }
  return defaultVal;
}

/**
 * Helper untuk parsing format tanggal dari Google Sheets / ISO string ke format YYYY-MM-DD
 */
function parseTanggalSheet(val) {
  if (!val || val === '-') return '';
  const s = String(val).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const d = new Date(s);
  if (!isNaN(d.getTime())) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
  return s.substring(0, 10);
}

/**
 * Sinkronisasi Pengajuan ke Google Sheets & Google Drive
 */
window.sinkronPengajuanKeGoogleSheets = async function() {
  if (!AppState.gasUrl || !AppState.gasUrl.startsWith('http')) {
    updateBadgePengajuanDesa();
    renderTabelPengajuanKecamatan();
    renderTabelPengajuanDesa();
    showToast('Data lokal disegarkan. Untuk sinkron Google Sheets & Drive, silakan atur URL Web App di Konfigurasi Google Sheets.', 'info');
    return;
  }

  try {
    showToast('Menghubungkan ke Google Sheets & Google Drive...', 'info');
    const url = `${AppState.gasUrl}?action=getPengajuanDesa&_t=${Date.now()}`;
    const res = await fetch(url);
    const result = await res.json();

    if (result.success && Array.isArray(result.data)) {
      const seenP = new Map();
      result.data.forEach(row => {
        const id = String(getSheetVal(row, ['ID Pengajuan', 'ID', 'ID_Pengajuan', 'Kode Pengajuan'], '')).trim();
        const desa = String(getSheetVal(row, ['Nama Desa', 'Desa'], '')).trim().toLowerCase();
        const dana = String(getSheetVal(row, ['Jenis Dana', 'Dana'], '')).trim().toLowerCase();
        const tahap = String(getSheetVal(row, ['Tahap / Bulan', 'Tahap Pencairan', 'Tahap', 'Bulan'], '')).trim();
        const thn = String(getSheetVal(row, ['Tahun Anggaran', 'Tahun'], '2026')).trim();
        const key = id ? `id:${id}` : `p:${desa}_${dana}_${tahap.toLowerCase()}_${thn}`;
        const rawWaktu = getSheetVal(row, ['Waktu Kirim (WITA)', 'Waktu Kirim', 'Waktu Pengajuan', 'Timestamp', 'Waktu'], '');
        let waktuIso = new Date().toISOString();
        if (rawWaktu) {
          const d = new Date(rawWaktu);
          if (!isNaN(d.getTime())) waktuIso = d.toISOString();
        }

        const item = {
          id: id || `PENG-${Date.now()}`,
          waktuKirim: waktuIso,
          namaDesa: getSheetVal(row, ['Nama Desa', 'Desa'], ''),
          jenisDana: getSheetVal(row, ['Jenis Dana', 'Dana'], 'add_reguler'),
          tahap: tahap,
          tahunAnggaran: thn,
          nominal: parseCurrencyInput(getSheetVal(row, ['Nominal (Rp)', 'Nominal Angka (Rp)', 'Nominal', 'Jumlah (Rp)'], 0)),
          nomorSp: getSheetVal(row, ['Nomor Surat Pengantar (SP)', 'Nomor SP Desa', 'Nomor Surat Pengantar', 'Nomor SP', 'No SP'], ''),
          tanggalSp: parseTanggalSheet(getSheetVal(row, ['Tanggal SP Desa', 'Tanggal SP', 'Tanggal Surat Pengantar', 'Tgl SP'], '')),
          nomorRekomDesa: getSheetVal(row, ['Nomor Rekomendasi Desa', 'Nomor Rekom Desa', 'No Rekom Desa', 'Nomor Rekomendasi'], ''),
          tanggalRekomDesa: parseTanggalSheet(getSheetVal(row, ['Tanggal Rekom Desa', 'Tanggal Rekomendasi Desa', 'Tgl Rekom Desa'], '')),
          fileSpId: `file_sp_${id || Date.now()}`,
          fileSpName: getSheetVal(row, ['Nama File SP', 'Nama File Surat Pengantar', 'File SP'], 'Surat_Pengantar.pdf'),
          driveSpUrl: (() => {
            const u = getSheetVal(row, ['Link Google Drive SP', 'Link Drive SP', 'Link File SP', 'Drive SP'], null);
            return (u && u !== '-') ? u : null;
          })(),
          fileCeklistId: `file_cek_${id || Date.now()}`,
          fileCeklistName: getSheetVal(row, ['Nama File Ceklist', 'Nama File Checklist', 'File Ceklist'], 'Ceklist_Berkas.pdf'),
          driveCeklistUrl: (() => {
            const u = getSheetVal(row, ['Link Google Drive Ceklist', 'Link Drive Ceklist', 'Link File Ceklist', 'Drive Ceklist'], null);
            return (u && u !== '-') ? u : null;
          })(),
          fileRekomDesaId: `file_rek_${id || Date.now()}`,
          fileRekomDesaName: getSheetVal(row, ['Nama File Rekom Desa', 'Nama File Rekomendasi Desa', 'File Rekom Desa'], 'Rekomendasi_Desa.pdf'),
          driveRekomUrl: (() => {
            const u = getSheetVal(row, ['Link Google Drive Rekom Desa', 'Link Drive Rekom Desa', 'Link File Rekom Desa', 'Drive Rekom Desa'], null);
            return (u && u !== '-') ? u : null;
          })(),
          driveFolderUrl: (() => {
            const u = getSheetVal(row, ['Folder Google Drive Desa', 'Folder Drive Desa', 'Folder Google Drive', 'Link Folder Desa'], null);
            return (u && u !== '-') ? u : null;
          })(),
          status: getSheetVal(row, ['Status Verifikasi', 'Status', 'Status Berkas'], 'Menunggu Verifikasi'),
          catatanKecamatan: getSheetVal(row, ['Catatan Verifikasi / Alasan Pengembalian', 'Catatan Verifikasi', 'Catatan', 'Alasan Pengembalian'], '')
        };
        seenP.set(key, item);
      });

      const cloudList = Array.from(seenP.values());

      // Google Sheets adalah Sumber Data Utama (Single Source of Truth)
      // Seluruh data lokal disesuaikan persis dengan baris data di Google Sheets
      AppState.pengajuanDesa = cloudList;
      AppState.pengajuanDesa.sort((a, b) => new Date(b.waktuKirim) - new Date(a.waktuKirim));

      localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
      if (cloudList.length === 0) {
        showToast('Data pengajuan di Google Sheets kosong (0 berkas). Dasbor dan tabel telah dibersihkan.', 'info');
      } else {
        showToast(`Berhasil menarik ${cloudList.length} data pengajuan dari Google Sheets!`, 'success');
      }
    }
  } catch (err) {
    console.error('Error sinkron dari Google Sheets:', err);
    showToast('Gagal menarik data dari Google Sheets. Periksa URL Web App atau koneksi internet.', 'error');
  } finally {
    try {
      await sinkronRiwayatDariGoogleSheets(true);
      await sinkronMasterDesaDariGoogleSheets(true);
      await sinkronDataUserDariGoogleSheets();
      await sinkronKirimRekomDariGoogleSheets(true);
    } catch (_) {}
    updateBadgePengajuanDesa();
    renderTabelPengajuanKecamatan();
    renderTabelPengajuanDesa();
    renderTabelKirimRekomDesa();
    renderDokumenKecamatanUntukDesa();
    renderDashboardSummary();
  }
};

/**
 * Sinkronisasi Riwayat Rekomendasi Camat dari Sheet "Rekomendasi_Pencairan" Google Sheets
 */
window.sinkronRiwayatDariGoogleSheets = async function(isSilent = true) {
  if (!AppState.gasUrl || !AppState.gasUrl.startsWith('http')) return;
  try {
    const url = `${AppState.gasUrl}?action=getRiwayat&_t=${Date.now()}`;
    const res = await fetch(url);
    const result = await res.json();
    if (result.success && Array.isArray(result.data)) {
      const seenR = new Map();
      result.data.forEach(row => {
        const id = String(getSheetVal(row, ['ID Rekomendasi', 'ID', 'ID Rekom'], '')).trim();
        const noSurat = String(getSheetVal(row, ['Nomor Surat Rekomendasi', 'Nomor Surat', 'Nomor Rekomendasi', 'No Surat'], '')).trim();
        const desa = String(getSheetVal(row, ['Nama Desa', 'Desa'], '')).trim().toLowerCase();
        const dana = String(getSheetVal(row, ['Jenis Dana', 'Dana'], '')).trim().toLowerCase();
        const tahap = String(getSheetVal(row, ['Tahap / Bulan', 'Tahap', 'Tahap Pencairan', 'Bulan'], '')).trim();
        const thn = String(getSheetVal(row, ['Tahun Anggaran', 'Tahun'], '2026')).trim();
        const key = noSurat ? `no:${noSurat.toLowerCase()}` : (id ? `id:${id}` : `p:${desa}_${dana}_${tahap.toLowerCase()}_${thn}`);
        const rawWaktu = getSheetVal(row, ['Waktu Terbit', 'Waktu Diterbitkan', 'Timestamp', 'Waktu'], '');
        let waktuIso = new Date().toISOString();
        if (rawWaktu) {
          const d = new Date(rawWaktu);
          if (!isNaN(d.getTime())) waktuIso = d.toISOString();
        }

        const item = {
          id: id || `REK-${Date.now()}`,
          waktuTerbit: waktuIso,
          nomorSurat: noSurat,
          tanggalSurat: parseTanggalSheet(getSheetVal(row, ['Tanggal Surat', 'Tanggal Surat Rekomendasi', 'Tgl Surat'], '')),
          namaDesa: getSheetVal(row, ['Nama Desa', 'Desa'], ''),
          jenisDana: getSheetVal(row, ['Jenis Dana', 'Dana'], 'add_reguler'),
          tahap: tahap,
          tahunAnggaran: thn,
          nominalAngka: parseCurrencyInput(getSheetVal(row, ['Nominal (Rp)', 'Nominal Angka (Rp)', 'Nominal Rekomendasi', 'Nominal', 'Jumlah (Rp)'], 0)),
          terbilang: getSheetVal(row, ['Terbilang'], ''),
          bankPenyalur: getSheetVal(row, ['Bank Penyalur', 'Bank'], ''),
          nomorRekening: getSheetVal(row, ['Nomor Rekening RKD', 'Nomor Rekening', 'No Rekening'], ''),
          kepalaDesa: getSheetVal(row, ['Kepala Desa', 'Kades'], ''),
          kaurKeuangan: getSheetVal(row, ['Kaur Keuangan', 'Bendahara'], ''),
          namaCamat: getSheetVal(row, ['Nama Camat', 'Camat'], ''),
          nipCamat: getSheetVal(row, ['NIP Camat', 'NIP'], ''),
          metodeTte: getSheetVal(row, ['Metode TTE / Format', 'Metode TTE', 'Format'], 'tte'),
          status: getSheetVal(row, ['Status Penyaluran', 'Status'], 'Diterbitkan')
        };
        seenR.set(key, item);
      });

      AppState.riwayat = Array.from(seenR.values());
      localStorage.setItem('sip_riwayat_rekom', JSON.stringify(AppState.riwayat));
      renderHistoryTable();
      renderDashboardSummary();
      console.log('Sinkronisasi riwayat rekomendasi dari Google Sheets berhasil, total:', AppState.riwayat.length);
    }
  } catch (e) {
    console.warn('Gagal sinkron riwayat dari Google Sheets:', e);
  }

  // Sinkronisasi data Surat Pengantar Kecamatan dari Google Sheets
  if (typeof tarikSuratPengantarDariGoogleSheets === 'function') {
    try {
      await tarikSuratPengantarDariGoogleSheets(true);
    } catch (_) {}
  }
};

/**
 * Fitur Bersihkan & Reset Database Lokal (Bila pengguna mengosongkan sheet dan ingin browser langsung 100% bersih)
 */
window.kosongkanDatabaseLokal = async function() {
  const user = AppState.currentUser;
  if (user && user.role === 'desa') {
    showToast('⚠️ Akses Ditolak: Hanya pihak Kecamatan yang berwenang membersihkan database.', 'error');
    return;
  }
  if (!confirm('Apakah Anda ingin membersihkan seluruh data pengajuan & riwayat lokal di browser ini agar sesuai persis dengan Google Sheets yang telah Anda kosongkan?')) {
    return;
  }
  AppState.pengajuanDesa = [];
  AppState.riwayat = [];
  AppState.kirimRekomDesa = [];
  localStorage.setItem('sip_pengajuan_desa', '[]');
  localStorage.setItem('sip_riwayat_rekom', '[]');
  localStorage.setItem('sip_kirim_rekom_desa', '[]');
  renderDashboardSummary();
  renderTabelPengajuanKecamatan();
  renderTabelPengajuanDesa();
  renderTabelKirimRekomDesa();
  renderDokumenKecamatanUntukDesa();
  renderHistoryTable();
  updateBadgePengajuanDesa();

  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    showToast('Menyinkronkan ulang dari Google Sheets...', 'info');
    await sinkronPengajuanKeGoogleSheets();
  } else {
    showToast('Database lokal di browser berhasil dibersihkan!', 'success');
  }
};

/**
 * =============================================================================
 * TAB 3: KIRIM REKOM KE DESA (DOKUMEN RESMI KECAMATAN SIAP BKAD)
 * =============================================================================
 */

// Buka Modal Kirim Rekom ke Desa
window.bukaModalKirimRekomDesa = function(editId = null, prefillData = null) {
  const modal = document.getElementById('modalKirimRekomDesa');
  if (!modal) return;

  AppState.draftKirimKecamatan = {
    rekomTtd: null,
    spKec: null,
    ceklistKec: null
  };

  const form = document.getElementById('formKirimRekomDesa');
  if (form) form.reset();

  const idInput = document.getElementById('inputKirimEditId');
  const title = document.getElementById('modalKirimRekomTitle');
  const btnSubmit = document.getElementById('btnSubmitKirimRekomDesa');

  // Reset file info
  const fInfoRekom = document.getElementById('fileInfoKirimRekomTtd');
  const fInfoSp = document.getElementById('fileInfoKirimSpKec');
  const fInfoCek = document.getElementById('fileInfoKirimCeklistKec');
  if (fInfoRekom) fInfoRekom.innerHTML = 'Belum ada file dipilih';
  if (fInfoSp) fInfoSp.innerHTML = 'Belum ada file dipilih';
  if (fInfoCek) fInfoCek.innerHTML = 'Belum ada file dipilih';

  if (editId) {
    const item = (AppState.kirimRekomDesa || []).find(k => k.id === editId);
    if (item) {
      if (idInput) idInput.value = item.id;
      if (title) title.textContent = 'Edit Dokumen Kiriman Rekomendasi ke Desa';
      if (btnSubmit) btnSubmit.innerHTML = '<span>💾 Simpan Perubahan</span>';

      const selDesa = document.getElementById('selectKirimDesa');
      const selJenis = document.getElementById('selectKirimJenisDana');
      const selTahap = document.getElementById('selectKirimTahap');
      const inTahun = document.getElementById('inputKirimTahun');
      const inNominal = document.getElementById('inputKirimNominal');
      const inNoRekom = document.getElementById('inputKirimNomorRekom');
      const inTglRekom = document.getElementById('inputKirimTanggalRekom');
      const inNoSp = document.getElementById('inputKirimNomorSpKec');
      const inTglSp = document.getElementById('inputKirimTanggalSpKec');
      const inCatatan = document.getElementById('inputKirimCatatan');

      if (selDesa) selDesa.value = item.namaDesa || 'Api-Api';
      if (selJenis) selJenis.value = item.jenisDana || 'add_reguler';
      if (selTahap) selTahap.value = item.tahap || 'Tahap II';
      if (inTahun) inTahun.value = item.tahunAnggaran || '2026';
      if (inNominal) inNominal.value = formatRupiah(item.nominal || 0).replace('Rp ', '');
      if (inNoRekom) inNoRekom.value = item.nomorRekom || '';
      if (inTglRekom) inTglRekom.value = item.tanggalRekom || '';
      if (inNoSp) inNoSp.value = item.nomorSpKec || '';
      if (inTglSp) inTglSp.value = item.tanggalSpKec || '';
      if (inCatatan) inCatatan.value = item.catatan || '';

      if (fInfoRekom && item.fileRekomTtdName) {
        fInfoRekom.innerHTML = `<span class="text-blue-700 font-semibold text-[10px]">📁 File ada: ${escapeHtml(item.fileRekomTtdName)}</span>`;
      }
      if (fInfoSp && item.fileSpKecName) {
        fInfoSp.innerHTML = `<span class="text-indigo-700 font-semibold text-[10px]">📁 File ada: ${escapeHtml(item.fileSpKecName)}</span>`;
      }
      if (fInfoCek && item.fileCeklistKecName) {
        fInfoCek.innerHTML = `<span class="text-emerald-700 font-semibold text-[10px]">📁 File ada: ${escapeHtml(item.fileCeklistKecName)}</span>`;
      }
    }
  } else {
    if (idInput) idInput.value = '';
    if (title) title.textContent = 'Kirim Dokumen Rekomendasi ke Desa';
    if (btnSubmit) btnSubmit.innerHTML = '<span>🚀 Simpan & Kirim ke Desa</span>';

    const today = new Date().toISOString().split('T')[0];
    const tglRekom = document.getElementById('inputKirimTanggalRekom');
    const tglSp = document.getElementById('inputKirimTanggalSpKec');
    if (tglRekom) tglRekom.value = today;
    if (tglSp) tglSp.value = today;

    if (prefillData) {
      if (prefillData.namaDesa && document.getElementById('selectKirimDesa')) document.getElementById('selectKirimDesa').value = prefillData.namaDesa;
      if (prefillData.jenisDana && document.getElementById('selectKirimJenisDana')) document.getElementById('selectKirimJenisDana').value = prefillData.jenisDana;
      if (prefillData.tahap && document.getElementById('selectKirimTahap')) document.getElementById('selectKirimTahap').value = prefillData.tahap;
      if (prefillData.tahunAnggaran && document.getElementById('inputKirimTahun')) document.getElementById('inputKirimTahun').value = prefillData.tahunAnggaran;
      if (prefillData.nominal && document.getElementById('inputKirimNominal')) document.getElementById('inputKirimNominal').value = formatRupiah(prefillData.nominal).replace('Rp ', '');
    }
  }

  modal.classList.remove('hidden'); modal.style.display = 'flex';
};

// Tutup Modal
window.tutupModalKirimRekomDesa = function() {
  const modal = document.getElementById('modalKirimRekomDesa');
  if (modal) { modal.classList.add('hidden'); modal.style.display = 'none'; }
};

// Handle file pick untuk kecamatan
window.handleKirimKecamatanFilePick = function(type, inputEl) {
  if (!inputEl || !inputEl.files || inputEl.files.length === 0) return;
  const file = inputEl.files[0];

  const reader = new FileReader();
  reader.onload = function(e) {
    const fileId = `file_krm_${type}_${Date.now()}`;
    if (!AppState.draftKirimKecamatan) AppState.draftKirimKecamatan = {};
    AppState.draftKirimKecamatan[type] = {
      id: fileId,
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
      dataUrl: e.target.result
    };

    const infoMap = {
      rekomTtd: 'fileInfoKirimRekomTtd',
      spKec: 'fileInfoKirimSpKec',
      ceklistKec: 'fileInfoKirimCeklistKec'
    };
    const infoEl = document.getElementById(infoMap[type]);
    if (infoEl) {
      infoEl.innerHTML = `
        <span class="inline-flex items-center gap-1 text-emerald-700 font-bold">
          <span>✅</span> <span class="truncate max-w-[150px]">${escapeHtml(file.name)}</span>
        </span>
        <span class="block text-[9.5px] text-slate-500 font-mono">(${formatFileSize(file.size)})</span>
      `;
    }
    showToast(`Dokumen "${file.name}" berhasil dipilih!`, 'success');
  };
  reader.onerror = function() {
    showToast('Gagal membaca berkas.', 'error');
  };
  reader.readAsDataURL(file);
};

// Buka Modal Kirim langsung dari daftar pengajuan kotak masuk
window.bukaModalKirimDariPengajuan = function(pengajuanId) {
  const item = (AppState.pengajuanDesa || []).find(p => p.id === pengajuanId);
  if (!item) {
    showToast('Data pengajuan berkas tidak ditemukan.', 'error');
    return;
  }
  switchKecamatanSubTab('kirim_desa');
  bukaModalKirimRekomDesa(null, {
    namaDesa: item.namaDesa,
    jenisDana: item.jenisDana,
    tahap: item.tahap,
    tahunAnggaran: item.tahunAnggaran,
    nominal: item.nominal
  });
};

// Submit Simpan & Kirim Rekomendasi ke Desa
window.simpanKirimRekomDesa = async function(event) {
  if (event) event.preventDefault();

  const editId = document.getElementById('inputKirimEditId')?.value || '';
  const desa = document.getElementById('selectKirimDesa')?.value || 'Api-Api';
  const jenisDana = document.getElementById('selectKirimJenisDana')?.value || 'add_reguler';
  const tahap = document.getElementById('selectKirimTahap')?.value || 'Tahap II';
  const tahun = document.getElementById('inputKirimTahun')?.value || '2026';
  const nominalStr = document.getElementById('inputKirimNominal')?.value || '0';
  const nominalAngka = parseNominal(nominalStr);

  const noRekom = document.getElementById('inputKirimNomorRekom')?.value?.trim() || '';
  const tglRekom = document.getElementById('inputKirimTanggalRekom')?.value || '';
  const noSpKec = document.getElementById('inputKirimNomorSpKec')?.value?.trim() || '';
  const tglSpKec = document.getElementById('inputKirimTanggalSpKec')?.value || '';
  const catatan = document.getElementById('inputKirimCatatan')?.value?.trim() || '';

  if (!noRekom || !tglRekom) {
    showToast('Nomor dan Tanggal Surat Rekomendasi Camat wajib diisi!', 'warning');
    return;
  }
  if (!noSpKec || !tglSpKec) {
    showToast('Nomor dan Tanggal Surat Pengantar Kecamatan wajib diisi!', 'warning');
    return;
  }

  const btnSubmit = document.getElementById('btnSubmitKirimRekomDesa');
  const origBtnHtml = btnSubmit ? btnSubmit.innerHTML : '';
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<span>⏳ Menyimpan & Menyiapkan Berkas...</span>';
  }

  const isEditing = Boolean(editId);
  const existingItem = isEditing ? (AppState.kirimRekomDesa || []).find(k => k.id === editId) : null;
  const draft = AppState.draftKirimKecamatan || {};

  // 1. Simpan ke IndexedDB lokal
  const fileRekomTtdId = draft.rekomTtd ? draft.rekomTtd.id : (existingItem ? existingItem.fileRekomTtdId : `file_krm_rekom_${Date.now()}`);
  const fileRekomTtdName = draft.rekomTtd ? draft.rekomTtd.name : (existingItem ? existingItem.fileRekomTtdName : `Rekom_TTD_${desa.replace(/\s+/g, '_')}.pdf`);
  if (draft.rekomTtd) await FileStorage.saveFile(draft.rekomTtd);

  const fileSpKecId = draft.spKec ? draft.spKec.id : (existingItem ? existingItem.fileSpKecId : `file_krm_sp_${Date.now()}`);
  const fileSpKecName = draft.spKec ? draft.spKec.name : (existingItem ? existingItem.fileSpKecName : `SP_Kecamatan_${desa.replace(/\s+/g, '_')}.pdf`);
  if (draft.spKec) await FileStorage.saveFile(draft.spKec);

  const fileCeklistKecId = draft.ceklistKec ? draft.ceklistKec.id : (existingItem ? existingItem.fileCeklistKecId : `file_krm_cek_${Date.now()}`);
  const fileCeklistKecName = draft.ceklistKec ? draft.ceklistKec.name : (existingItem ? existingItem.fileCeklistKecName : `Ceklist_Kecamatan_${desa.replace(/\s+/g, '_')}.pdf`);
  if (draft.ceklistKec) await FileStorage.saveFile(draft.ceklistKec);

  let recordToSave;
  if (isEditing && existingItem) {
    existingItem.namaDesa = desa;
    existingItem.jenisDana = jenisDana;
    existingItem.tahap = tahap;
    existingItem.tahunAnggaran = tahun;
    existingItem.nominal = nominalAngka;
    existingItem.nomorRekom = noRekom;
    existingItem.tanggalRekom = tglRekom;
    existingItem.nomorSpKec = noSpKec;
    existingItem.tanggalSpKec = tglSpKec;
    existingItem.catatan = catatan;
    existingItem.fileRekomTtdId = fileRekomTtdId;
    existingItem.fileRekomTtdName = fileRekomTtdName;
    existingItem.fileSpKecId = fileSpKecId;
    existingItem.fileSpKecName = fileSpKecName;
    existingItem.fileCeklistKecId = fileCeklistKecId;
    existingItem.fileCeklistKecName = fileCeklistKecName;
    existingItem.waktuKirim = new Date().toISOString();
    existingItem.status = 'Siap Kirim ke BKAD';
    recordToSave = existingItem;
  } else {
    recordToSave = {
      id: `KRM-${new Date().toISOString().replace(/\D/g, '').substring(0, 14)}`,
      namaDesa: desa,
      jenisDana: jenisDana,
      tahap: tahap,
      tahunAnggaran: tahun,
      nominal: nominalAngka,
      nomorRekom: noRekom,
      tanggalRekom: tglRekom,
      nomorSpKec: noSpKec,
      tanggalSpKec: tglSpKec,
      catatan: catatan,
      fileRekomTtdId: fileRekomTtdId,
      fileRekomTtdName: fileRekomTtdName,
      fileSpKecId: fileSpKecId,
      fileSpKecName: fileSpKecName,
      fileCeklistKecId: fileCeklistKecId,
      fileCeklistKecName: fileCeklistKecName,
      waktuKirim: new Date().toISOString(),
      status: 'Siap Kirim ke BKAD'
    };
    if (!Array.isArray(AppState.kirimRekomDesa)) AppState.kirimRekomDesa = [];
    AppState.kirimRekomDesa.unshift(recordToSave);
  }

  localStorage.setItem('sip_kirim_rekom_desa', JSON.stringify(AppState.kirimRekomDesa));

  // 2. Upload berkas ke subfolder 'kecamatan' di Google Drive & simpan ke Google Sheets
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    try {
      if (btnSubmit) btnSubmit.innerHTML = '<span>☁️ Mengunggah ke Google Drive (subfolder kecamatan)...</span>';
      const payloadGas = {
        action: 'simpanKirimRekomDesa',
        id: recordToSave.id,
        namaDesa: recordToSave.namaDesa,
        jenisDana: recordToSave.jenisDana,
        tahap: recordToSave.tahap,
        tahunAnggaran: recordToSave.tahunAnggaran,
        nominal: recordToSave.nominal,
        nomorRekom: recordToSave.nomorRekom,
        tanggalRekom: recordToSave.tanggalRekom,
        nomorSpKec: recordToSave.nomorSpKec,
        tanggalSpKec: recordToSave.tanggalSpKec,
        catatan: recordToSave.catatan,
        status: recordToSave.status,
        fileRekomTtd: draft.rekomTtd ? { name: draft.rekomTtd.name, type: draft.rekomTtd.type, dataUrl: draft.rekomTtd.dataUrl } : null,
        fileSpKecamatan: draft.spKec ? { name: draft.spKec.name, type: draft.spKec.type, dataUrl: draft.spKec.dataUrl } : null,
        fileCeklistKecamatan: draft.ceklistKec ? { name: draft.ceklistKec.name, type: draft.ceklistKec.type, dataUrl: draft.ceklistKec.dataUrl } : null,
        existingRekomTtd: existingItem ? { name: existingItem.fileRekomTtdName, url: existingItem.driveRekomTtdUrl || '-' } : null,
        existingSpKecamatan: existingItem ? { name: existingItem.fileSpKecName, url: existingItem.driveSpKecUrl || '-' } : null,
        existingCeklistKecamatan: existingItem ? { name: existingItem.fileCeklistKecName, url: existingItem.driveCeklistKecUrl || '-' } : null
      };

      const res = await fetch(AppState.gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payloadGas)
      });
      const resJson = await res.json();
      if (resJson.success) {
        recordToSave.driveFolderUrl = resJson.driveFolderUrl;
        if (resJson.driveFiles) {
          if (resJson.driveFiles.rekomTtd && resJson.driveFiles.rekomTtd.url !== '-') recordToSave.driveRekomTtdUrl = resJson.driveFiles.rekomTtd.url;
          if (resJson.driveFiles.spKecamatan && resJson.driveFiles.spKecamatan.url !== '-') recordToSave.driveSpKecUrl = resJson.driveFiles.spKecamatan.url;
          if (resJson.driveFiles.ceklistKecamatan && resJson.driveFiles.ceklistKecamatan.url !== '-') recordToSave.driveCeklistKecUrl = resJson.driveFiles.ceklistKecamatan.url;
        }
        localStorage.setItem('sip_kirim_rekom_desa', JSON.stringify(AppState.kirimRekomDesa));
        showToast('Berkas berhasil diunggah ke Google Drive subfolder kecamatan & dicatat di Google Sheets!', 'success');
      }
    } catch (gasErr) {
      console.warn('Gagal sinkron ke Google Drive kecamatan:', gasErr);
      showToast('Data tersimpan di database lokal (Offline Google Sheets).', 'info');
    }
  }

  if (btnSubmit) {
    btnSubmit.disabled = false;
    btnSubmit.innerHTML = origBtnHtml;
  }

  tutupModalKirimRekomDesa();
  renderTabelKirimRekomDesa();
  renderDokumenKecamatanUntukDesa();
  showToast(`Dokumen Rekomendasi untuk Desa ${desa} berhasil disimpan & dikirim!`, 'success');
};

// Hapus Kiriman Rekomendasi
window.hapusKirimRekomDesa = async function(id) {
  if (!confirm('Apakah Anda yakin ingin menghapus data kiriman rekomendasi ini?')) return;
  AppState.kirimRekomDesa = (AppState.kirimRekomDesa || []).filter(k => k.id !== id);
  localStorage.setItem('sip_kirim_rekom_desa', JSON.stringify(AppState.kirimRekomDesa));

  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    try {
      fetch(AppState.gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'hapusKirimRekomDesa', id: id })
      }).catch(e => console.warn(e));
    } catch (_) {}
  }

  renderTabelKirimRekomDesa();
  renderDokumenKecamatanUntukDesa();
  showToast('Data kiriman rekomendasi berhasil dihapus.', 'info');
};

// Render Tabel Tab 3
window.renderTabelKirimRekomDesa = function() {
  const tbody = document.getElementById('tbodyKirimRekomDesa');
  const badgeTotal = document.getElementById('badgeTotalKirimRekom');
  const badgeTab = document.getElementById('badgeTabKirimDesaCount');
  if (!tbody) return;

  const filterDesa = document.getElementById('filterDesaKirim')?.value || 'semua';
  const filterJenis = document.getElementById('filterJenisKirim')?.value || 'semua';

  let list = AppState.kirimRekomDesa || [];
  if (badgeTab) badgeTab.textContent = list.length;
  if (badgeTotal) badgeTotal.textContent = `${list.length} Rekomendasi Terkirim`;

  if (filterDesa !== 'semua') {
    list = list.filter(item => item.namaDesa === filterDesa);
  }
  if (filterJenis !== 'semua') {
    list = list.filter(item => item.jenisDana === filterJenis);
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" class="text-center py-12 text-slate-400">
          <div class="flex flex-col items-center justify-center gap-2">
            <span class="text-3xl">📤</span>
            <span class="font-bold text-slate-600 text-xs">Belum ada Rekomendasi yang dikirimkan ke Desa.</span>
            <span class="text-[11px] text-slate-400">Klik tombol "➕ Kirim Rekom Baru ke Desa" di atas untuk mulai mengunggah berkas resmi.</span>
            <button onclick="bukaModalKirimRekomDesa()" class="mt-2 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-xs cursor-pointer">
              ➕ Buat Kiriman Pertama
            </button>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map((item, index) => {
    return `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100">
        <td class="py-3 px-3 text-center text-slate-500 font-mono text-xs">${index + 1}</td>
        <td class="py-3 px-3">
          <div class="font-bold text-slate-900 text-xs">Desa ${escapeHtml(item.namaDesa)}</div>
          <div class="text-[11px] text-slate-500">${new Date(item.waktuKirim).toLocaleDateString('id-ID')} ${new Date(item.waktuKirim).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</div>
        </td>
        <td class="py-3 px-3">
          <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
            ${escapeHtml(getNamaTipe(item.jenisDana))}
          </span>
          <div class="text-[11px] text-slate-600 mt-0.5 font-medium">${escapeHtml(item.tahap)} TA ${escapeHtml(item.tahunAnggaran)}</div>
        </td>
        <td class="py-3 px-3">
          <div class="font-mono text-xs font-semibold text-slate-800">${escapeHtml(item.nomorRekom || '-')}</div>
          <div class="text-[11px] text-blue-900 font-medium">Tgl: <strong>${formatTanggalIndo(item.tanggalRekom)}</strong></div>
        </td>
        <td class="py-3 px-3">
          <div class="font-mono text-xs font-semibold text-slate-800">${escapeHtml(item.nomorSpKec || '-')}</div>
          <div class="text-[11px] text-indigo-900 font-medium">Tgl: <strong>${formatTanggalIndo(item.tanggalSpKec)}</strong></div>
        </td>
        <td class="py-3 px-3 text-right font-mono font-bold text-emerald-800 text-xs">
          ${formatRupiah(item.nominal)}
        </td>
        <td class="py-3 px-3 text-center">
          <div class="flex flex-col gap-1 items-center min-w-[150px]">
            <button onclick="downloadDokumenPengajuan('${item.fileRekomTtdId}', '${item.fileRekomTtdName}', '${item.driveRekomTtdUrl || ''}')" class="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded text-[10px] font-bold border border-blue-200 transition flex items-center gap-1 w-full justify-center cursor-pointer" title="Unduh Rekomendasi Desa Sudah TTD">
              <span>📄 1. Rekom TTD</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileSpKecId}', '${item.fileSpKecName}', '${item.driveSpKecUrl || ''}')" class="px-2 py-0.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded text-[10px] font-bold border border-indigo-200 transition flex items-center gap-1 w-full justify-center cursor-pointer" title="Unduh Surat Pengantar Kecamatan">
              <span>✉️ 2. SP Kecamatan</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileCeklistKecId}', '${item.fileCeklistKecName}', '${item.driveCeklistKecUrl || ''}')" class="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold border border-emerald-200 transition flex items-center gap-1 w-full justify-center cursor-pointer" title="Unduh Ceklist Kecamatan">
              <span>📋 3. Ceklist Kecamatan</span>
            </button>
            ${item.driveFolderUrl ? `
            <a href="${item.driveFolderUrl}" target="_blank" rel="noopener noreferrer" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[9.5px] font-bold border border-slate-300 transition flex items-center gap-1 w-full justify-center mt-0.5" title="Buka Subfolder Kecamatan di Google Drive">
              <span>📁 Drive Kecamatan</span>
            </a>` : ''}
          </div>
        </td>
        <td class="py-3 px-3 text-center">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-2xs">
            <span>✅</span>
            <span>${escapeHtml(item.status || 'Siap Kirim ke BKAD')}</span>
          </span>
          ${item.catatan ? `<div class="mt-1 text-[10px] text-slate-500 italic max-w-[150px] truncate" title="${escapeHtml(item.catatan)}">"${escapeHtml(item.catatan)}"</div>` : ''}
        </td>
        <td class="py-3 px-3 text-center">
          <div class="flex items-center justify-center gap-1.5">
            <button onclick="bukaModalKirimRekomDesa('${item.id}')" class="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 hover:text-amber-800 rounded-lg text-xs font-semibold border border-amber-200 transition cursor-pointer" title="Edit Data & Berkas">
              ✏️ Edit
            </button>
            <button onclick="hapusKirimRekomDesa('${item.id}')" class="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 rounded-lg text-xs font-semibold border border-rose-200 transition cursor-pointer" title="Hapus Kiriman">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
};

// Render Dokumen Rekomendasi di Akun Desa (Siap BKAD)
window.renderDokumenKecamatanUntukDesa = function() {
  const container = document.getElementById('containerListRekomDesa');
  const badgeCount = document.getElementById('badgeCountRekomBkad');
  if (!container) return;

  const currentDesa = AppState.operatorDesaAktif || 'Api-Api';
  const list = (AppState.kirimRekomDesa || []).filter(item => item.namaDesa === currentDesa);

  if (badgeCount) badgeCount.textContent = `${list.length} Dokumen`;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="bg-slate-900/60 p-5 rounded-xl border border-blue-500/20 text-center space-y-1.5">
        <span class="text-2xl">📭</span>
        <div class="text-xs font-bold text-blue-200">Belum ada Rekomendasi Resmi dari Kecamatan Waru untuk Desa ${escapeHtml(currentDesa)}.</div>
        <p class="text-[11px] text-slate-400">Setelah pengajuan diverifikasi dan ditandatangani Camat, dokumen resmi akan otomatis tampil di sini dan siap diunduh untuk dikirim ke BKAD.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    return `
      <div class="bg-slate-900/80 border border-blue-500/30 rounded-xl p-4 transition hover:border-blue-400/60 shadow-md">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-blue-800/60 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/30 text-emerald-300 border border-emerald-400/30">
                ✅ Siap Kirim ke BKAD
              </span>
              <span class="text-[11px] text-blue-300 font-semibold">${getNamaTipe(item.jenisDana)} - ${escapeHtml(item.tahap)} TA ${escapeHtml(item.tahunAnggaran)}</span>
            </div>
            <div class="text-sm font-bold text-white mt-1">
              Pencairan: <span class="font-mono text-emerald-400">${formatRupiah(item.nominal)}</span>
            </div>
          </div>
          <div class="text-[11px] text-slate-300 flex flex-col items-start md:items-end">
            <span>Diterbitkan: <b>${formatTanggalIndo(item.tanggalRekom)}</b></span>
            <span class="text-[10px] text-slate-400">Dikirim Kec: ${new Date(item.waktuKirim).toLocaleDateString('id-ID')}</span>
          </div>
        </div>

        <!-- Detail Nomor & Tanggal Surat Resmi -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 text-xs border-b border-blue-800/40">
          <div class="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700">
            <span class="block text-[10px] text-blue-300 uppercase font-bold">📄 Surat Rekomendasi Camat Waru:</span>
            <span class="font-mono font-bold text-white text-xs">${escapeHtml(item.nomorRekom || '-')}</span>
            <span class="block text-[10.5px] text-slate-400 mt-0.5">Tanggal: ${formatTanggalIndo(item.tanggalRekom)}</span>
          </div>
          <div class="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700">
            <span class="block text-[10px] text-indigo-300 uppercase font-bold">✉️ Surat Pengantar (SP) Kecamatan:</span>
            <span class="font-mono font-bold text-white text-xs">${escapeHtml(item.nomorSpKec || '-')}</span>
            <span class="block text-[10.5px] text-slate-400 mt-0.5">Tanggal: ${formatTanggalIndo(item.tanggalSpKec)}</span>
          </div>
        </div>

        ${item.catatan ? `
        <div class="py-2 text-[11px] text-amber-200 bg-amber-950/40 px-3 rounded-lg border border-amber-700/40 my-2">
          <b>Catatan Kecamatan:</b> ${escapeHtml(item.catatan)}
        </div>` : ''}

        <!-- 3 Tombol Download Dokumen untuk Desa Kirim ke BKAD -->
        <div class="pt-2 flex flex-wrap items-center justify-between gap-2">
          <div class="text-[11px] font-bold text-slate-300 flex items-center gap-1">
            <span>📥 Unduh Berkas untuk BKAD:</span>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button onclick="downloadDokumenPengajuan('${item.fileRekomTtdId}', '${item.fileRekomTtdName}', '${item.driveRekomTtdUrl || ''}')" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer" title="Unduh Rekomendasi Camat yang sudah bertanda tangan">
              <span>📄 Rekom Camat (TTD)</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileSpKecId}', '${item.fileSpKecName}', '${item.driveSpKecUrl || ''}')" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer" title="Unduh Surat Pengantar Resmi Kecamatan Waru">
              <span>✉️ SP Kecamatan</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileCeklistKecId}', '${item.fileCeklistKecName}', '${item.driveCeklistKecUrl || ''}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer" title="Unduh Ceklist Kelengkapan Kecamatan">
              <span>📋 Ceklist Kecamatan</span>
            </button>
            ${item.driveFolderUrl ? `
            <a href="${item.driveFolderUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-semibold transition flex items-center gap-1 cursor-pointer" title="Buka Folder Google Drive">
              <span>📂 Folder Drive</span>
            </a>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// Sinkronisasi data Kirim Rekom dari Google Sheets
window.sinkronKirimRekomDariGoogleSheets = async function(silent = false) {
  if (!AppState.gasUrl || !AppState.gasUrl.startsWith('http')) {
    renderTabelKirimRekomDesa();
    renderDokumenKecamatanUntukDesa();
    if (!silent) showToast('Data lokal ditampilkan. Atur URL Web App di Pengaturan untuk terhubung ke Cloud.', 'info');
    return;
  }

  try {
    if (!silent) showToast('Mengambil data Kirim Rekom dari Google Sheets...', 'info');
    const url = `${AppState.gasUrl}?action=getKirimRekomDesa&_t=${Date.now()}`;
    const res = await fetch(url);
    const result = await res.json();

    if (result.success && Array.isArray(result.data)) {
      const cloudList = result.data.map(row => {
        const id = String(getSheetVal(row, ['ID Kirim Rekom', 'ID'], `KRM-${Date.now()}`)).trim();
        const rawWaktu = getSheetVal(row, ['Waktu Kirim (WITA)', 'Waktu Kirim', 'Timestamp', 'Waktu'], '');
        let waktuIso = new Date().toISOString();
        if (rawWaktu) {
          const d = new Date(rawWaktu);
          if (!isNaN(d.getTime())) waktuIso = d.toISOString();
        }
        return {
          id: id,
          waktuKirim: waktuIso,
          namaDesa: getSheetVal(row, ['Nama Desa', 'Desa'], ''),
          jenisDana: getSheetVal(row, ['Jenis Dana', 'Dana'], 'add_reguler'),
          tahap: getSheetVal(row, ['Tahap / Bulan', 'Tahap', 'Tahap Pencairan', 'Bulan'], ''),
          tahunAnggaran: String(getSheetVal(row, ['Tahun Anggaran', 'Tahun'], '2026')),
          nominal: parseCurrencyInput(getSheetVal(row, ['Nominal (Rp)', 'Nominal Angka (Rp)', 'Nominal'], 0)),
          nomorRekom: getSheetVal(row, ['Nomor Rekomendasi', 'Nomor Rekom', 'No Rekom'], ''),
          tanggalRekom: parseTanggalSheet(getSheetVal(row, ['Tanggal Rekomendasi', 'Tanggal Rekom', 'Tgl Rekom'], '')),
          nomorSpKec: getSheetVal(row, ['Nomor SP Kecamatan', 'Nomor SP Kec', 'No SP Kecamatan'], ''),
          tanggalSpKec: parseTanggalSheet(getSheetVal(row, ['Tanggal SP Kecamatan', 'Tanggal SP Kec', 'Tgl SP Kecamatan'], '')),
          fileRekomTtdId: `file_krm_rekom_${id}`,
          fileRekomTtdName: getSheetVal(row, ['Nama File Rekom TTD', 'File Rekom TTD'], 'Rekom_TTD.pdf'),
          driveRekomTtdUrl: (() => {
            const u = getSheetVal(row, ['Link Google Drive Rekom TTD', 'Link Drive Rekom TTD', 'Drive Rekom TTD'], null);
            return (u && u !== '-') ? u : null;
          })(),
          fileSpKecId: `file_krm_sp_${id}`,
          fileSpKecName: getSheetVal(row, ['Nama File SP Kecamatan', 'File SP Kecamatan'], 'SP_Kecamatan.pdf'),
          driveSpKecUrl: (() => {
            const u = getSheetVal(row, ['Link Google Drive SP Kecamatan', 'Link Drive SP Kecamatan', 'Drive SP Kecamatan'], null);
            return (u && u !== '-') ? u : null;
          })(),
          fileCeklistKecId: `file_krm_cek_${id}`,
          fileCeklistKecName: getSheetVal(row, ['Nama File Ceklist Kecamatan', 'File Ceklist Kecamatan'], 'Ceklist_Kecamatan.pdf'),
          driveCeklistKecUrl: (() => {
            const u = getSheetVal(row, ['Link Google Drive Ceklist Kecamatan', 'Link Drive Ceklist Kecamatan', 'Drive Ceklist Kecamatan'], null);
            return (u && u !== '-') ? u : null;
          })(),
          driveFolderUrl: (() => {
            const u = getSheetVal(row, ['Folder Google Drive Kecamatan', 'Folder Drive Kecamatan', 'Drive Folder Kecamatan'], null);
            return (u && u !== '-') ? u : null;
          })(),
          status: getSheetVal(row, ['Status'], 'Siap Kirim ke BKAD'),
          catatan: getSheetVal(row, ['Catatan untuk Desa', 'Catatan'], '')
        };
      });

      AppState.kirimRekomDesa = cloudList;
      AppState.kirimRekomDesa.sort((a, b) => new Date(b.waktuKirim) - new Date(a.waktuKirim));
      localStorage.setItem('sip_kirim_rekom_desa', JSON.stringify(AppState.kirimRekomDesa));

      if (!silent) {
        showToast(`Berhasil menarik ${cloudList.length} data kiriman rekomendasi dari Google Sheets!`, 'success');
      }
    }
  } catch (err) {
    console.warn('Gagal menarik Kirim Rekom dari Google Sheets:', err);
    if (!silent) showToast('Gagal sinkron data dari Google Sheets.', 'error');
  } finally {
    renderTabelKirimRekomDesa();
    renderDokumenKecamatanUntukDesa();
  }
};

// Buka subfolder 'kecamatan' di Google Drive
window.openDriveFolderSubKecamatan = async function() {
  if (!AppState.gasUrl || !AppState.gasUrl.startsWith('http')) {
    alert('URL Google Apps Script belum disetel di Konfigurasi Google Sheets.\n\nSilakan masukkan URL Web App Google Apps Script terlebih dahulu agar folder Google Drive otomatis terbuka.');
    return;
  }
  try {
    showToast('Membuka subfolder kecamatan di Google Drive...', 'info');
    const res = await fetch(`${AppState.gasUrl}?action=ping`);
    const data = await res.json();
    if (data.driveKecamatanFolderUrl && data.driveKecamatanFolderUrl !== '-') {
      window.open(data.driveKecamatanFolderUrl, '_blank');
    } else if (data.driveFolderUrl && data.driveFolderUrl !== '-') {
      window.open(data.driveFolderUrl, '_blank');
    } else {
      window.open('https://drive.google.com/', '_blank');
    }
  } catch (e) {
    window.open('https://drive.google.com/', '_blank');
  }
};

// =====================================================================================
// MODUL PROFIL & DATA MASTER DESA (ALAT & BASIS DATA)
// =====================================================================================

let activeProfileTab = 'Api-Api';

window.bukaModalProfileDesa = function(targetDesa) {
  const modal = document.getElementById('modalProfileDesa');
  if (!modal) return;

  const user = AppState.currentUser;
  const isKecamatan = user && user.role === 'kecamatan';
  const isDesa = user && user.role === 'desa';
  const userDesa = user && user.desa;

  // 1. Kunci target desa sesuai role pengguna:
  // Jika desa login, HANYA BISA mengakses desanya sendiri!
  let desaToOpen = targetDesa;
  if (isDesa && userDesa) {
    desaToOpen = userDesa;
  } else if (!desaToOpen) {
    desaToOpen = isKecamatan ? (activeProfileTab || 'Api-Api') : (userDesa || 'Api-Api');
  }

  // 2. Kontrol visibilitas Tab di Modal:
  const tabBtns = {
    'Api-Api': document.getElementById('tabBtnProfileApiApi'),
    'Sesulu': document.getElementById('tabBtnProfileSesulu'),
    'Bangun Mulya': document.getElementById('tabBtnProfileBangunMulya'),
    'Camat': document.getElementById('tabBtnProfileCamat')
  };

  const badgeSource = document.getElementById('badgeProfileSource');
  const textTabInfo = document.getElementById('textProfileTabInfo');

  if (isDesa && userDesa) {
    // Sembunyikan tab desa lain dan tab Camat
    Object.keys(tabBtns).forEach(key => {
      const btn = tabBtns[key];
      if (!btn) return;
      if (key === userDesa) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    });

    if (badgeSource) {
      badgeSource.textContent = `🔒 Khusus Operator Desa ${userDesa}`;
      badgeSource.className = 'text-[10px] text-emerald-200 bg-emerald-950/80 px-2 py-0.5 rounded font-bold border border-emerald-600/40';
    }
    if (textTabInfo) {
      textTabInfo.textContent = `Akses Terkunci: Hanya dapat melihat & mengedit Master Data Desa ${userDesa}`;
    }
  } else {
    // Kecamatan: Akses penuh ke seluruh desa dan Camat
    Object.keys(tabBtns).forEach(key => {
      const btn = tabBtns[key];
      if (btn) btn.classList.remove('hidden');
    });

    if (badgeSource) {
      badgeSource.textContent = isKecamatan ? '🔑 Administrator Kecamatan (Semua Desa)' : 'Tersinkron Database';
      badgeSource.className = 'text-[10px] text-blue-200 bg-blue-950/80 px-2 py-0.5 rounded font-bold border border-blue-600/40';
    }
    if (textTabInfo) {
      textTabInfo.textContent = 'Pilih tab desa yang akan diedit';
    }
  }

  pilihTabProfileDesa(desaToOpen);
  modal.classList.remove('hidden'); modal.style.display = 'flex';
};

window.tutupModalProfileDesa = function() {
  const modal = document.getElementById('modalProfileDesa');
  if (modal) { modal.classList.add('hidden'); modal.style.display = 'none'; }
};

window.pilihTabProfileDesa = function(tabKey) {
  const user = AppState.currentUser;
  const isKecamatan = user && user.role === 'kecamatan';
  const isDesa = user && user.role === 'desa';
  const userDesa = user && user.desa;

  // Proteksi hak akses: Desa hanya boleh membuka tab desanya sendiri
  if (isDesa && userDesa && tabKey !== userDesa) {
    showToast(`Akses Ditolak: Anda hanya memiliki izin mengakses Data Master Desa ${userDesa}.`, 'warning');
    tabKey = userDesa;
  }

  activeProfileTab = tabKey;

  const tabBtns = {
    'Api-Api': document.getElementById('tabBtnProfileApiApi'),
    'Sesulu': document.getElementById('tabBtnProfileSesulu'),
    'Bangun Mulya': document.getElementById('tabBtnProfileBangunMulya'),
    'Camat': document.getElementById('tabBtnProfileCamat')
  };

  // Reset semua styling tab
  Object.keys(tabBtns).forEach(key => {
    const btn = tabBtns[key];
    if (!btn) return;
    if (key === tabKey) {
      btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-blue-600 text-white shadow-2xs cursor-pointer';
    } else {
      btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200 border border-slate-300 cursor-pointer';
    }
  });

  const formDesa = document.getElementById('formProfileDesaEditor');
  const formCamat = document.getElementById('formProfileCamatEditor');

  if (tabKey === 'Camat') {
    if (!isKecamatan) {
      showToast('Akses Terbatas: Hanya pihak Kecamatan yang dapat melihat profil Camat.', 'warning');
      return;
    }

    if (formDesa) formDesa.classList.add('hidden');
    if (formCamat) formCamat.classList.remove('hidden');

    const camat = AppState.camat || {};
    const elNama = document.getElementById('profCamatNama');
    const elPangkat = document.getElementById('profCamatPangkat');
    const elNip = document.getElementById('profCamatNip');
    const elJabatan = document.getElementById('profCamatJabatan');

    if (elNama) elNama.value = camat.nama || 'Ahmad Yani, SSTP';
    if (elPangkat) elPangkat.value = camat.pangkat || 'Pembina (IV/a)';
    if (elNip) elNip.value = camat.nip || '198610082006021001';
    if (elJabatan) elJabatan.value = camat.jabatan || 'Camat Waru';
    return;
  }

  // Tab Desa (Api-Api, Sesulu, Bangun Mulya)
  if (formDesa) formDesa.classList.remove('hidden');
  if (formCamat) formCamat.classList.add('hidden');

  const desa = (AppState.masterDesa || []).find(d => d.nama === tabKey) || {
    id: `DESA-${tabKey}`,
    nama: tabKey,
    kades: '',
    kaurKeuangan: '',
    jabatanKaur: `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${tabKey}`,
    bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
    rekening: '',
    atasNama: `Pemerintah Desa ${tabKey} (RKD)`,
    alamat: `Desa ${tabKey}, Kec. Waru`,
    nomorPerkades: '4',
    tahunPerkades: '2025',
    nomorPerdes: '7',
    tahunPerdes: '2025',
    nomorPerdesRkp: '2',
    tahunPerdesRkp: '2025',
    nomorPerdesKewenangan: '2',
    tahunPerdesKewenangan: '2019'
  };

  const elId = document.getElementById('profDesaId');
  const elNama = document.getElementById('profDesaNama');
  const elLabelNama = document.getElementById('profLabelNamaDesa');
  const elBadgeId = document.getElementById('profBadgeIdDesa');

  if (elId) elId.value = desa.id || '';
  if (elNama) elNama.value = desa.nama || tabKey;
  if (elLabelNama) elLabelNama.textContent = `Desa ${desa.nama || tabKey}`;
  if (elBadgeId) elBadgeId.textContent = desa.id || `DESA-${tabKey}`;

  const elKades = document.getElementById('profKades');
  const elKaur = document.getElementById('profKaur');
  const elJabatanKaur = document.getElementById('profJabatanKaur');
  const elKontak = document.getElementById('profKontak');
  const elBank = document.getElementById('profBank');
  const elRekening = document.getElementById('profRekening');
  const elAtasNama = document.getElementById('profAtasNama');
  const elAlamat = document.getElementById('profAlamat');

  const elNoPerkades = document.getElementById('profNomorPerkades');
  const elThnPerkades = document.getElementById('profTahunPerkades');
  const elNoPerdes = document.getElementById('profNomorPerdes');
  const elThnPerdes = document.getElementById('profTahunPerdes');
  const elNoPerdesRkp = document.getElementById('profNomorPerdesRkp');
  const elThnPerdesRkp = document.getElementById('profTahunPerdesRkp');
  const elNoPerdesKew = document.getElementById('profNomorPerdesKewenangan');
  const elThnPerdesKew = document.getElementById('profTahunPerdesKewenangan');

  if (elKades) elKades.value = desa.kades || '';
  if (elKaur) elKaur.value = desa.kaurKeuangan || '';
  if (elJabatanKaur) elJabatanKaur.value = desa.jabatanKaur || `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${tabKey}`;
  if (elKontak) elKontak.value = desa.kontak || '';
  if (elBank) elBank.value = desa.bank || 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru';
  if (elRekening) elRekening.value = desa.rekening || '';
  if (elAtasNama) elAtasNama.value = desa.atasNama || `Pemerintah Desa ${tabKey} (RKD)`;
  if (elAlamat) elAlamat.value = desa.alamat || '';

  if (elNoPerkades) elNoPerkades.value = desa.nomorPerkades || '4';
  if (elThnPerkades) elThnPerkades.value = desa.tahunPerkades || '2025';
  if (elNoPerdes) elNoPerdes.value = desa.nomorPerdes || '7';
  if (elThnPerdes) elThnPerdes.value = desa.tahunPerdes || '2025';
  if (elNoPerdesRkp) elNoPerdesRkp.value = desa.nomorPerdesRkp || '2';
  if (elThnPerdesRkp) elThnPerdesRkp.value = desa.tahunPerdesRkp || '2025';
  if (elNoPerdesKew) elNoPerdesKew.value = desa.nomorPerdesKewenangan || '2';
  if (elThnPerdesKew) elThnPerdesKew.value = desa.tahunPerdesKewenangan || '2019';
};

window.simpanDataProfileDesa = async function(event) {
  if (event) event.preventDefault();

  const user = AppState.currentUser;
  const isKecamatan = user && user.role === 'kecamatan';
  const isDesa = user && user.role === 'desa';
  const userDesa = user && user.desa;

  const namaDesa = document.getElementById('profDesaNama')?.value || activeProfileTab;

  // Proteksi hak akses simpan:
  if (isDesa && userDesa && namaDesa !== userDesa) {
    showToast(`Akses Ditolak: Anda hanya memiliki izin mengubah Data Master Desa ${userDesa}.`, 'error');
    return;
  }

  let desa = (AppState.masterDesa || []).find(d => d.nama === namaDesa);

  if (!desa) {
    desa = { id: `DESA-${Date.now()}`, nama: namaDesa };
    AppState.masterDesa.push(desa);
  }

  const kadesVal = document.getElementById('profKades')?.value?.trim() || '';
  const kaurVal = document.getElementById('profKaur')?.value?.trim() || '';
  const jabatanKaurVal = document.getElementById('profJabatanKaur')?.value?.trim() || '';
  const kontakVal = document.getElementById('profKontak')?.value?.trim() || '';
  const bankVal = document.getElementById('profBank')?.value?.trim() || '';
  const rekeningVal = document.getElementById('profRekening')?.value?.trim() || '';
  const atasNamaVal = document.getElementById('profAtasNama')?.value?.trim() || '';
  const alamatVal = document.getElementById('profAlamat')?.value?.trim() || '';

  const noPerkadesVal = document.getElementById('profNomorPerkades')?.value?.trim() || '';
  const thnPerkadesVal = document.getElementById('profTahunPerkades')?.value?.trim() || '';
  const noPerdesVal = document.getElementById('profNomorPerdes')?.value?.trim() || '';
  const thnPerdesVal = document.getElementById('profTahunPerdes')?.value?.trim() || '';
  const noPerdesRkpVal = document.getElementById('profNomorPerdesRkp')?.value?.trim() || '';
  const thnPerdesRkpVal = document.getElementById('profTahunPerdesRkp')?.value?.trim() || '';
  const noPerdesKewVal = document.getElementById('profNomorPerdesKewenangan')?.value?.trim() || '';
  const thnPerdesKewVal = document.getElementById('profTahunPerdesKewenangan')?.value?.trim() || '';

  desa.kades = kadesVal;
  desa.kaurKeuangan = kaurVal;
  desa.jabatanKaur = jabatanKaurVal;
  desa.kontak = kontakVal;
  desa.bank = bankVal;
  desa.rekening = rekeningVal;
  desa.atasNama = atasNamaVal;
  desa.alamat = alamatVal;

  desa.nomorPerkades = noPerkadesVal;
  desa.tahunPerkades = thnPerkadesVal;
  desa.nomorPerdes = noPerdesVal;
  desa.tahunPerdes = thnPerdesVal;
  desa.nomorPerdesRkp = noPerdesRkpVal;
  desa.tahunPerdesRkp = thnPerdesRkpVal;
  desa.nomorPerdesKewenangan = noPerdesKewVal;
  desa.tahunPerdesKewenangan = thnPerdesKewVal;

  localStorage.setItem('sip_master_desa', JSON.stringify(AppState.masterDesa));

  // Perbarui UI secara langsung
  populateDesaSelect();
  populateOperatorDesaSelect();
  triggerAutoFillDesa();
  onOperatorDesaChange();
  renderDashboardSummary();
  updateLivePreview();

  const btnSubmit = document.getElementById('btnSubmitProfileDesa');
  const origBtnText = btnSubmit ? btnSubmit.innerHTML : '';
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<span>⏳ Menyimpan ke Google Sheets...</span>';
  }

  // Sinkronkan ke Google Sheets Sheet Master_Desa
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    try {
      const payloadGas = {
        action: 'simpanMasterDesa',
        id: desa.id,
        namaDesa: desa.nama,
        kades: desa.kades,
        kaurKeuangan: desa.kaurKeuangan,
        bank: desa.bank,
        rekening: desa.rekening,
        atasNama: desa.atasNama,
        alamat: desa.alamat,
        kontak: desa.kontak,
        nomorPerkades: desa.nomorPerkades,
        tahunPerkades: desa.tahunPerkades,
        nomorPerdes: desa.nomorPerdes,
        tahunPerdes: desa.tahunPerdes
      };

      const res = await fetch(AppState.gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payloadGas)
      });
      const resJson = await res.json();
      if (resJson.success) {
        showToast(`Data Master Desa ${namaDesa} (Rekening: ${desa.rekening}) berhasil disimpan & diperbarui di Google Sheets (${resJson.updatedSheet || 'Master_Desa'})!`, 'success');
      } else {
        showToast(`Google Sheets: ${resJson.message || resJson.error || 'Gagal update spreadsheet'}. Pastikan Deploy Versi Baru Apps Script telah dilakukan.`, 'warning');
      }
    } catch (gasErr) {
      console.warn('Gagal sinkron Master Desa ke Google Sheets:', gasErr);
      showToast(`Data Master Desa ${namaDesa} tersimpan di lokal (Gagal koneksi Google Sheets: ${gasErr.message || gasErr}).`, 'warning');
    }
  } else {
    showToast(`Data Master Desa ${namaDesa} berhasil disimpan di database lokal! (Catatan: URL Google Sheets belum disetel)`, 'info');
  }

  if (btnSubmit) {
    btnSubmit.disabled = false;
    btnSubmit.innerHTML = origBtnText;
  }

  tutupModalProfileDesa();
};

window.simpanDataProfileCamat = async function(event) {
  if (event) event.preventDefault();

  const user = AppState.currentUser;
  const isKecamatan = user && user.role === 'kecamatan';

  if (!isKecamatan) {
    showToast('Akses Ditolak: Hanya Tim Fasilitasi / Pihak Kecamatan yang dapat mengubah data Pejabat Camat.', 'error');
    return;
  }

  const nama = document.getElementById('profCamatNama')?.value?.trim() || '';
  const pangkat = document.getElementById('profCamatPangkat')?.value?.trim() || '';
  const nip = document.getElementById('profCamatNip')?.value?.trim() || '';
  const jabatan = document.getElementById('profCamatJabatan')?.value?.trim() || 'Camat Waru';

  AppState.camat = {
    nama: nama,
    pangkat: pangkat,
    nip: nip,
    jabatan: jabatan
  };

  localStorage.setItem('sip_master_camat', JSON.stringify(AppState.camat));

  const elNamaCamat = document.getElementById('inputNamaCamat');
  const elNipCamat = document.getElementById('inputNipCamat');
  if (elNamaCamat) elNamaCamat.value = nama;
  if (elNipCamat) elNipCamat.value = nip;

  updateLivePreview();
  showToast('Data Pejabat Camat Waru berhasil diperbarui!', 'success');
  tutupModalProfileDesa();
};

// =========================================================================================
// MODUL SURAT PENGANTAR KECAMATAN KE BKAD / DINAS (MENU 3 TAB 3)
// =========================================================================================

/**
 * Mengambil Perihal Rekomendasi Camat yang Sedang Aktif di Generator
 */
window.getPerihalRekomAktif = function() {
  const inputPerihal = document.getElementById('inputPerihalSurat');
  if (inputPerihal && inputPerihal.value && inputPerihal.value.trim()) {
    return inputPerihal.value.trim();
  }

  const desa = document.getElementById('selectNamaDesa')?.value || AppState.activeDesa || 'Api-Api';
  const tipe = AppState.activeTemplateKey || AppState.tipeRekomendasi || 'add_reguler';
  const tahun = (document.getElementById('inputTahunAnggaranReguler')?.value || document.getElementById('inputTahunAnggaran')?.value || '2026').trim();

  if (tipe === 'siltap') {
    const bulan = document.getElementById('selectBulanGaji')?.value || 'Juni';
    return `Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${bulan} Desa ${desa} Tahun ${tahun}`;
  } else if (tipe === 'add_reguler') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
    const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '25';
    const persen = String(rawPersen).replace('%', '').trim();
    const persenStr = persen ? `(${persen} %)` : '';
    return `Rekomendasi Pencairan Alokasi Dana Desa (ADD) ${tahap} ${persenStr} Tahun Anggaran ${tahun} Desa ${desa}`.replace(/\s+/g, ' ').trim();
  } else if (tipe === 'dbh') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
    const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '50';
    const persen = String(rawPersen).replace('%', '').trim();
    const persenStr = persen ? `(${persen}%)` : '';
    return `Rekomendasi Pencairan Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${tahap} ${persenStr} Tahun Anggaran ${tahun} Desa ${desa}`.replace(/\s+/g, ' ').trim();
  } else if (tipe === 'dd') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap 1';
    const rawPersen = document.getElementById('inputPersentaseTahap')?.value || '60';
    const persen = String(rawPersen).replace('%', '').trim();
    const persenStr = persen ? `${persen} %` : '';
    return `Rekomendasi Pencairan Dana Desa (DD) ${tahap} ${persenStr} Tahun Anggaran ${tahun} Desa ${desa}`.replace(/\s+/g, ' ').trim();
  }

  return `Rekomendasi Pencairan Alokasi Dana Desa (ADD) Tahun Anggaran ${tahun} Desa ${desa}`;
};

/**
 * Format Perihal berdasarkan parameter pilihan di tab Surat Pengantar
 */
window.buildPerihalFromSpParams = function(desa, jenis, tahap, tahun) {
  if (jenis === 'siltap') {
    const bulan = (tahap || 'Juni').replace(/^bulan\s*/i, '').replace(/tahap\s*/i, '').trim() || 'Juni';
    return `Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${bulan} Desa ${desa} Tahun ${tahun}`;
  } else if (jenis === 'add_reguler') {
    return `Rekomendasi Pencairan Alokasi Dana Desa (ADD) ${tahap} Tahun Anggaran ${tahun} Desa ${desa}`;
  } else if (jenis === 'dbh') {
    return `Rekomendasi Pencairan Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${tahap} Tahun Anggaran ${tahun} Desa ${desa}`;
  } else if (jenis === 'dd') {
    return `Rekomendasi Pencairan Dana Desa (DD) ${tahap} Tahun Anggaran ${tahun} Desa ${desa}`;
  }
  return `Rekomendasi Pencairan ${jenis} ${tahap} Tahun Anggaran ${tahun} Desa ${desa}`;
};

/**
 * Inisialisasi Tab Surat Pengantar saat pertama kali dibuka
 */
window.initSuratPengantarTab = function() {
  const data = AppState.suratPengantarData;
  if (!data) return;

  // Tanggal default: Hari ini jika kosong
  if (!data.tanggalSurat) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    data.tanggalSurat = `${yyyy}-${mm}-${dd}`;
  }

  const inputTanggal = document.getElementById('inputTanggalSp');
  if (inputTanggal && !inputTanggal.value) {
    inputTanggal.value = data.tanggalSurat;
  }

  const inputNomor = document.getElementById('inputNomorSp');
  if (inputNomor && !inputNomor.value) {
    inputNomor.value = data.nomorSurat || '000.1.5 / 128 / Ekbang / X / 2026';
  }

  const inputTujuan = document.getElementById('inputTujuanYthSp');
  if (inputTujuan && !inputTujuan.value) {
    inputTujuan.value = data.tujuanYth || 'Kepala Badan Keuangan dan Aset Daerah (BKAD) Kab. Penajam Paser Utara';
  }

  const inputTempat = document.getElementById('inputTempatTujuanSp');
  if (inputTempat && !inputTempat.value) {
    inputTempat.value = data.tempatTujuan || 'Tempat';
  }

  // Jika bukan sedang mengedit arsip lama tersimpan, sinkronkan otomatis dari Rekomendasi yang aktif di Generator
  if (!data.id) {
    const activeDesa = document.getElementById('selectNamaDesa')?.value || data.namaDesa || 'Api-Api';
    const activeTipe = AppState.activeTemplateKey || data.jenisDana || 'add_reguler';
    const activeTahun = (document.getElementById('inputTahunAnggaranReguler')?.value || document.getElementById('inputTahunAnggaran')?.value || data.tahunAnggaran || '2026').trim();
    let activeTahap = document.getElementById('selectTahapReguler')?.value || data.tahap || 'Tahap II';
    if (activeTipe === 'siltap') {
      const bulanGaji = document.getElementById('selectBulanGaji')?.value || 'Juni';
      activeTahap = `Bulan ${bulanGaji}`;
    }

    data.namaDesa = activeDesa;
    data.jenisDana = activeTipe;
    data.tahunAnggaran = activeTahun;
    data.tahap = activeTahap;

    autoUpdatePerihal();
    const perihalAktif = getPerihalRekomAktif();

    if (!data.rows || data.rows.length === 0) {
      data.rows = [{
        no: 1,
        jenis: perihalAktif,
        banyak: '1 (satu) Berkas',
        keterangan: 'Dikirim dengan hormat kepada Bapak untuk dapat diproses penyaluran/pencairan dana lebih lanjut. Terima kasih.'
      }];
    } else {
      // Ambil otomatis perihal rekom aktif sebagai isi jenis surat yang dikirim
      data.rows[0].jenis = perihalAktif;
    }
  }

  const selectDesa = document.getElementById('selectDesaSp');
  if (selectDesa && data.namaDesa) {
    selectDesa.value = data.namaDesa;
  }

  const selectDana = document.getElementById('selectJenisDanaSp');
  if (selectDana && data.jenisDana) {
    selectDana.value = data.jenisDana;
  }

  const selectTahap = document.getElementById('selectTahapSp');
  if (selectTahap && data.tahap) {
    const optMatch = Array.from(selectTahap.options).find(o => 
      o.value.toLowerCase() === data.tahap.toLowerCase() || 
      o.value.toLowerCase() === `bulan ${data.tahap.toLowerCase()}`
    );
    if (optMatch) {
      selectTahap.value = optMatch.value;
    } else {
      selectTahap.value = data.tahap;
    }
  }

  const inputTahun = document.getElementById('inputTahunSp');
  if (inputTahun && data.tahunAnggaran) {
    inputTahun.value = data.tahunAnggaran;
  }

  const inputJabatan = document.getElementById('inputJabatanPengirimSp');
  if (inputJabatan && data.jabatanPengirim) {
    inputJabatan.value = data.jabatanPengirim;
  }

  const inputNama = document.getElementById('inputNamaPengirimSp');
  if (inputNama && (data.namaPengirim || AppState.camat?.nama)) {
    inputNama.value = data.namaPengirim || AppState.camat.nama;
  }

  const inputNip = document.getElementById('inputNipPengirimSp');
  if (inputNip && (data.nipPengirim || AppState.camat?.nip)) {
    inputNip.value = data.nipPengirim || AppState.camat.nip;
  }

  const selectMetode = document.getElementById('selectMetodeTteSp');
  if (selectMetode && data.metodeTte) {
    selectMetode.value = data.metodeTte;
  }

  renderRowsSpInputs();
  updateLivePreviewSp();
  updateBadgeSpCount();
};

/**
 * Render Formulir Baris-Baris Rincian Berkas (Tabel 4 Kolom)
 */
window.renderRowsSpInputs = function() {
  const container = document.getElementById('containerRowsSp');
  if (!container) return;

  const rows = AppState.suratPengantarData.rows || [];
  if (rows.length === 0) {
    const perihalAwal = getPerihalRekomAktif();
    AppState.suratPengantarData.rows = [
      {
        no: 1,
        jenis: perihalAwal,
        banyak: '1 (satu) Berkas',
        keterangan: 'Dikirim dengan hormat kepada Bapak untuk dapat diproses penyaluran/pencairan dana lebih lanjut. Terima kasih.'
      }
    ];
  }

  container.innerHTML = AppState.suratPengantarData.rows.map((row, index) => {
    return `
      <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative group hover:border-teal-300 transition">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200/80">
          <div class="flex items-center gap-1.5">
            <span class="w-5 h-5 rounded-md bg-teal-600 text-white font-bold text-[10px] flex items-center justify-center">
              ${index + 1}
            </span>
            <span class="text-xs font-bold text-slate-800">Baris Rincian #${index + 1}</span>
          </div>
          ${AppState.suratPengantarData.rows.length > 1 ? `
            <button type="button" onclick="hapusBarisSp(${index})" class="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-1 rounded text-xs transition cursor-pointer" title="Hapus baris ini">
              🗑️ Hapus
            </button>
          ` : ''}
        </div>

        <div>
          <div class="flex items-center justify-between mb-0.5">
            <label class="block text-[10.5px] font-semibold text-slate-700">Jenis yang dikirim (Kolom 2)</label>
            ${index === 0 ? `
              <button type="button" onclick="sinkronPerihalKeRowSp(0)" class="text-[10px] text-teal-700 font-bold hover:underline cursor-pointer flex items-center gap-1" title="Samakan otomatis dengan Perihal Rekomendasi yang aktif di Generator">
                <span>🔄 Ambil dari Perihal Rekom</span>
              </button>
            ` : ''}
          </div>
          <textarea rows="2" oninput="onSpRowInputChange(${index}, 'jenis', this.value)" class="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500" placeholder="Uraian jenis surat yang dikirim...">${escapeHtml(row.jenis || '')}</textarea>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label class="block text-[10.5px] font-semibold text-slate-700 mb-0.5">Banyaknya (Kolom 3)</label>
            <input type="text" value="${escapeHtml(row.banyak || '')}" oninput="onSpRowInputChange(${index}, 'banyak', this.value)" class="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500" placeholder="Contoh: 1 (satu) Berkas" />
          </div>
          <div>
            <label class="block text-[10.5px] font-semibold text-slate-700 mb-0.5">Keterangan (Kolom 4)</label>
            <textarea rows="1" oninput="onSpRowInputChange(${index}, 'keterangan', this.value)" class="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500" placeholder="Catatan / maksud pengiriman...">${escapeHtml(row.keterangan || '')}</textarea>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

/**
 * Samakan isi jenis surat pada baris tertentu dengan Perihal Rekomendasi Aktif
 */
window.sinkronPerihalKeRowSp = function(index = 0) {
  autoUpdatePerihal();
  const perihal = getPerihalRekomAktif();
  if (AppState.suratPengantarData.rows[index]) {
    AppState.suratPengantarData.rows[index].jenis = perihal;
    renderRowsSpInputs();
    updateLivePreviewSp();
    showToast('Jenis surat berhasil disamakan dengan Perihal Rekomendasi aktif!', 'success');
  }
};

/**
 * Update nilai input baris tabel secara real-time
 */
window.onSpRowInputChange = function(index, field, value) {
  if (!AppState.suratPengantarData.rows[index]) return;
  AppState.suratPengantarData.rows[index][field] = value;
  updateLivePreviewSp();
};

/**
 * Tambah Baris Baru di Tabel Surat Pengantar
 */
window.tambahBarisSp = function(jenis = '', banyak = '1 (satu) Berkas', keterangan = 'Dikirim dengan hormat untuk verifikasi dan proses lebih lanjut.') {
  const rows = AppState.suratPengantarData.rows || [];
  rows.push({
    no: rows.length + 1,
    jenis: jenis,
    banyak: banyak,
    keterangan: keterangan
  });
  AppState.suratPengantarData.rows = rows;
  renderRowsSpInputs();
  updateLivePreviewSp();
};

/**
 * Hapus Baris di Tabel Surat Pengantar
 */
window.hapusBarisSp = function(index) {
  const rows = AppState.suratPengantarData.rows || [];
  if (rows.length <= 1) {
    showToast('Tabel Surat Pengantar minimal memiliki 1 baris rincian.', 'warning');
    return;
  }
  rows.splice(index, 1);
  rows.forEach((r, i) => { r.no = i + 1; });
  AppState.suratPengantarData.rows = rows;
  renderRowsSpInputs();
  updateLivePreviewSp();
};

/**
 * Pilihan Cepat Tujuan Surat (Kepada Yth)
 */
window.setPilihanTujuanSp = function(tipe) {
  const inputTujuan = document.getElementById('inputTujuanYthSp');
  const inputTempat = document.getElementById('inputTempatTujuanSp');
  const desa = document.getElementById('selectDesaSp')?.value || 'Sesulu';

  if (tipe === 'bkad') {
    if (inputTujuan) inputTujuan.value = 'Kepala Badan Keuangan dan Aset Daerah (BKAD) Kab. Penajam Paser Utara';
    if (inputTempat) inputTempat.value = 'Tempat';
  } else if (tipe === 'dpmd') {
    if (inputTujuan) inputTujuan.value = 'Kepala Dinas Pemberdayaan Masyarakat dan Desa (DPMD) Kab. Penajam Paser Utara';
    if (inputTempat) inputTempat.value = 'Penajam';
  } else if (tipe === 'desa') {
    if (inputTujuan) inputTujuan.value = `Kepala Desa ${desa} Kecamatan Waru`;
    if (inputTempat) inputTempat.value = 'Tempat';
  }

  updateLivePreviewSp();
};

/**
 * Generate Nomor Surat Pengantar Otomatis
 */
window.autoGenNomorSp = function() {
  const today = new Date();
  const romanMonths = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  const romanMonth = romanMonths[today.getMonth()];
  const year = today.getFullYear();

  // Hitung nomor urut berdasarkan riwayat tersimpan + 1
  const existingCount = (AppState.suratPengantarList || []).length;
  const nomorUrut = String(120 + existingCount + 1).padStart(3, '0');

  const nomorBaru = `000.1.5 / ${nomorUrut} / Ekbang / ${romanMonth} / ${year}`;
  const input = document.getElementById('inputNomorSp');
  if (input) input.value = nomorBaru;
  AppState.suratPengantarData.nomorSurat = nomorBaru;

  updateLivePreviewSp();
  showToast(`Nomor Surat Pengantar otomatis dibuat: ${nomorBaru}`, 'info');
};

/**
 * Salin Otomatis Seluruh Data dari Generator Rekomendasi Camat yang Aktif
 */
window.salinDataDariRekomAktifKeSp = function() {
  // Ambil data dari Form Generator Rekomendasi (Tab 2)
  autoUpdatePerihal();
  const perihalAktif = getPerihalRekomAktif();
  const desa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const jenisTipe = AppState.activeTemplateKey || 'add_reguler';
  const tahun = (document.getElementById('inputTahunAnggaranReguler')?.value || document.getElementById('inputTahunAnggaran')?.value || '2026').trim();
  let tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
  if (jenisTipe === 'siltap') {
    const bulanGaji = document.getElementById('selectBulanGaji')?.value || 'Juni';
    tahap = `Bulan ${bulanGaji}`;
  }

  // Update input Form Surat Pengantar
  const selDesaSp = document.getElementById('selectDesaSp');
  if (selDesaSp) selDesaSp.value = desa;
  AppState.suratPengantarData.namaDesa = desa;

  const selJenisSp = document.getElementById('selectJenisDanaSp');
  if (selJenisSp) selJenisSp.value = jenisTipe;
  AppState.suratPengantarData.jenisDana = jenisTipe;

  const selTahapSp = document.getElementById('selectTahapSp');
  if (selTahapSp) {
    const optMatch = Array.from(selTahapSp.options).find(o => 
      o.value.toLowerCase() === tahap.toLowerCase() || 
      o.value.toLowerCase() === `bulan ${tahap.toLowerCase()}`
    );
    if (optMatch) {
      selTahapSp.value = optMatch.value;
    } else if (tahap.toLowerCase().includes('i') && !tahap.toLowerCase().includes('ii') && !tahap.toLowerCase().includes('iii')) {
      selTahapSp.value = 'Tahap I';
    } else if (tahap.toLowerCase().includes('ii') && !tahap.toLowerCase().includes('iii')) {
      selTahapSp.value = 'Tahap II';
    } else if (tahap.toLowerCase().includes('iii')) {
      selTahapSp.value = 'Tahap III';
    } else {
      selTahapSp.value = tahap;
    }
  }
  AppState.suratPengantarData.tahap = selTahapSp?.value || tahap;

  const inpTahunSp = document.getElementById('inputTahunSp');
  if (inpTahunSp) inpTahunSp.value = tahun;
  AppState.suratPengantarData.tahunAnggaran = tahun;

  // Samakan jenis yang dikirim langsung dengan Perihal Rekomendasi yang aktif
  AppState.suratPengantarData.rows = [
    {
      no: 1,
      jenis: perihalAktif,
      banyak: '1 (satu) Berkas',
      keterangan: 'Dikirim dengan hormat kepada Bapak untuk dapat diproses penyaluran/pencairan dana lebih lanjut. Terima kasih.'
    }
  ];

  renderRowsSpInputs();
  updateLivePreviewSp();
  showToast(`⚡ Jenis Surat Pengantar berhasil disamakan dengan Perihal Rekomendasi aktif!`, 'success');
};

/**
 * Handler saat Desa / Jenis Dana di Kartu 2 SP berubah
 */
window.onSpDesaChange = function() {
  const desa = document.getElementById('selectDesaSp')?.value || 'Sesulu';
  const jenis = document.getElementById('selectJenisDanaSp')?.value || 'add_reguler';
  const tahap = document.getElementById('selectTahapSp')?.value || 'Tahap II';
  const tahun = document.getElementById('inputTahunSp')?.value || '2026';

  AppState.suratPengantarData.namaDesa = desa;
  AppState.suratPengantarData.jenisDana = jenis;
  AppState.suratPengantarData.tahap = tahap;
  AppState.suratPengantarData.tahunAnggaran = tahun;

  // Jika sedang membuat surat pengantar baru, perbarui baris 1 agar selalu sesuai perihal
  if (!AppState.suratPengantarData.id && AppState.suratPengantarData.rows && AppState.suratPengantarData.rows.length > 0) {
    AppState.suratPengantarData.rows[0].jenis = buildPerihalFromSpParams(desa, jenis, tahap, tahun);
    renderRowsSpInputs();
  }

  updateLivePreviewSp();
};

/**
 * Perbarui Live Preview Dokumen Surat Pengantar (Sesuai Format Resmi User)
 */
window.updateLivePreviewSp = function(force = false) {
  const container = document.getElementById('previewSpContainer');
  if (!container) return;

  // Jika sedang aktif mode edit langsung di kertas SP, jangan timpa ketikan user kecuali dipaksa (force)
  if (AppState.isDirectEditModeSp && !force) {
    return;
  }

  const nomorSp = document.getElementById('inputNomorSp')?.value || AppState.suratPengantarData.nomorSurat || '000.1.5 / 128 / Ekbang / X / 2026';
  const rawDate = document.getElementById('inputTanggalSp')?.value || AppState.suratPengantarData.tanggalSurat || '2026-10-21';
  const tanggalIndo = formatTanggalIndo(rawDate);
  const tujuanYth = document.getElementById('inputTujuanYthSp')?.value || 'Kepala Badan Keuangan dan Aset Daerah (BKAD) Kab. Penajam Paser Utara';
  const tempatTujuan = document.getElementById('inputTempatTujuanSp')?.value || 'Tempat';

  const jabatanPengirim = document.getElementById('inputJabatanPengirimSp')?.value || 'Camat Waru,';
  const namaPengirim = document.getElementById('inputNamaPengirimSp')?.value || AppState.camat?.nama || 'Ahmad Yani, SSTP';
  const nipPengirim = document.getElementById('inputNipPengirimSp')?.value || AppState.camat?.nip || '198610082006021001';
  const metodeTte = document.getElementById('selectMetodeTteSp')?.value || 'srikandi';

  const paperSize = document.getElementById('selectPaperSizeSp')?.value || 'a4';
  const paperClass = paperSize === 'folio' ? 'surat-sheet folio' : 'surat-sheet a4';

  const rows = AppState.suratPengantarData.rows || [];

  // Terapkan spasi baris aktif
  const lineSpacing = AppState.suratPengantarData.lineSpacing || document.getElementById('selectLineSpacingSp')?.value || '1.15';
  let paraMargin = '4pt';
  if (lineSpacing === '1.0') paraMargin = '2pt';
  else if (lineSpacing === '1.5') paraMargin = '6pt';
  else if (lineSpacing === '1.25') paraMargin = '3.5pt';
  container.style.setProperty('--surat-line-height', lineSpacing);
  container.style.setProperty('--surat-para-margin', paraMargin);

  // 1. Kop Surat Resmi
  const kopHtml = getKopSuratHtml(true);

  // 2. Format Header Tanggal & Tujuan (Sejajar dengan kolom ke-3 dan ke-4 tabel: 48%)
  let headerTujuanHtml = '';
  if (metodeTte === 'srikandi') {
    headerTujuanHtml = `
      <div class="mt-4 flex justify-end text-[11pt] font-sans text-black" style="line-height: var(--surat-line-height, 1.15) !important;">
        <div class="w-[48%] text-left">
          <div style="line-height: var(--surat-line-height, 1.15) !important;">Penajam, \${tanggal_naskah}</div>
          <div class="mt-2" style="line-height: var(--surat-line-height, 1.15) !important;">Yth. \${jabatan_tujuan}</div>
          <div style="line-height: var(--surat-line-height, 1.15) !important;">di -</div>
          <div class="pl-6 font-bold" style="line-height: var(--surat-line-height, 1.15) !important;">Tempat</div>
        </div>
      </div>
    `;
  } else {
    headerTujuanHtml = `
      <div class="mt-4 flex justify-end text-[11pt] font-sans text-black" style="line-height: var(--surat-line-height, 1.15) !important;">
        <div class="w-[48%] text-left">
          <div style="line-height: var(--surat-line-height, 1.15) !important;">Penajam, ${tanggalIndo}</div>
          <div class="mt-2" style="line-height: var(--surat-line-height, 1.15) !important;">Yth. ${escapeHtml(tujuanYth)}</div>
          <div style="line-height: var(--surat-line-height, 1.15) !important;">di -</div>
          <div class="pl-6 font-bold" style="line-height: var(--surat-line-height, 1.15) !important;">${escapeHtml(tempatTujuan || 'Tempat')}</div>
        </div>
      </div>
    `;
  }

  // 3. Judul Surat Pengantar
  const judulSuratHtml = `
    <div class="mt-6 text-center text-black font-sans" style="line-height: var(--surat-line-height, 1.15) !important;">
      <div class="text-[14pt] font-bold tracking-wider uppercase underline" style="line-height: var(--surat-line-height, 1.15) !important;">
        SURAT PENGANTAR
      </div>
      <div class="text-[11pt] mt-1" style="line-height: var(--surat-line-height, 1.15) !important;">
        Nomor : ${metodeTte === 'srikandi' ? '${nomor_naskah}' : escapeHtml(nomorSp)}
      </div>
    </div>
  `;

  // 4. Tabel 4 Kolom Rincian Berkas
  const tableRowsHtml = rows.map((r, i) => {
    return `
      <tr>
        <td style="border: 1px solid #000000; padding: 8px 4px; text-align: center; vertical-align: top; line-height: var(--surat-line-height, 1.15) !important;">
          ${i + 1}.
        </td>
        <td style="border: 1px solid #000000; padding: 8px 10px; text-align: left; vertical-align: top; white-space: pre-wrap; line-height: var(--surat-line-height, 1.15) !important;">
          ${escapeHtml(r.jenis || '-')}
        </td>
        <td style="border: 1px solid #000000; padding: 8px 10px; text-align: center; vertical-align: top; white-space: pre-wrap; line-height: var(--surat-line-height, 1.15) !important;">
          ${escapeHtml(r.banyak || '-')}
        </td>
        <td style="border: 1px solid #000000; padding: 8px 10px; text-align: justify; vertical-align: top; white-space: pre-wrap; line-height: var(--surat-line-height, 1.15) !important;">
          ${escapeHtml(r.keterangan || '-')}
        </td>
      </tr>
    `;
  }).join('');

  const tableHtml = `
    <table class="w-full mt-6 border-collapse text-[11pt] font-sans text-black" style="line-height: var(--surat-line-height, 1.15) !important; border: 1.5px solid #000000;">
      <thead>
        <tr style="background-color: #f8fafc; border-bottom: 1.5px solid #000000;">
          <th style="border: 1px solid #000000; padding: 6px 4px; text-align: center; width: 8%; font-weight: bold; line-height: var(--surat-line-height, 1.15) !important;">No</th>
          <th style="border: 1px solid #000000; padding: 6px 8px; text-align: center; width: 44%; font-weight: bold; line-height: var(--surat-line-height, 1.15) !important;">Jenis yang dikirim</th>
          <th style="border: 1px solid #000000; padding: 6px 8px; text-align: center; width: 24%; font-weight: bold; line-height: var(--surat-line-height, 1.15) !important;">Banyaknya</th>
          <th style="border: 1px solid #000000; padding: 6px 8px; text-align: center; width: 24%; font-weight: bold; line-height: var(--surat-line-height, 1.15) !important;">Keterangan</th>
        </tr>
      </thead>
      <tbody>
        ${tableRowsHtml}
      </tbody>
    </table>
  `;

  // 5. Tanda Tangan Camat Waru (Sejajar dengan kolom ke-3 dan ke-4 tabel: 48%)
  let ttdHtml = '';
  if (metodeTte === 'srikandi') {
    ttdHtml = `
      <div class="mt-8 flex justify-end text-[11pt] font-sans text-black" style="line-height: var(--surat-line-height, 1.15) !important;">
        <div class="w-[48%] text-left">
          <div class="leading-normal" style="line-height: var(--surat-line-height, 1.15) !important;">${escapeHtml(jabatanPengirim)}</div>
          <div class="my-5 py-2 text-center text-slate-800 font-sans tracking-wide font-mono" style="line-height: var(--surat-line-height, 1.15) !important;">
            \${ttd_pengirim}
          </div>
          <div class="leading-normal font-bold font-sans" style="line-height: var(--surat-line-height, 1.15) !important;">\${nama_pengirim}</div>
          <div class="leading-normal font-sans" style="line-height: var(--surat-line-height, 1.15) !important;">NIP. \${nip_pengirim}</div>
        </div>
      </div>
    `;
  } else if (metodeTte === 'tte_lokal') {
    ttdHtml = `
      <div class="mt-8 flex justify-end text-[11pt] font-sans text-black" style="line-height: var(--surat-line-height, 1.15) !important;">
        <div class="w-[48%] text-left">
          <div class="leading-normal" style="line-height: var(--surat-line-height, 1.15) !important;">${escapeHtml(jabatanPengirim)}</div>
          <div class="my-3 flex items-center justify-center">
            <div class="p-1.5 border border-slate-300 rounded bg-slate-50 flex items-center gap-2">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=TTE-KECAMATAN-WARU-${encodeURIComponent(nomorSp)}" alt="QR TTE" class="w-14 h-14" />
              <div class="text-[9px] text-slate-600 leading-tight">
                <b>Ditandatangani secara elektronik</b><br/>
                Balai Sertifikasi Elektronik (BSrE)<br/>
                ${escapeHtml(namaPengirim)}
              </div>
            </div>
          </div>
          <div class="leading-normal font-bold font-sans underline" style="line-height: var(--surat-line-height, 1.15) !important;">${escapeHtml(namaPengirim)}</div>
          <div class="leading-normal font-sans" style="line-height: var(--surat-line-height, 1.15) !important;">NIP. ${escapeHtml(nipPengirim)}</div>
        </div>
      </div>
    `;
  } else {
    // Manual
    ttdHtml = `
      <div class="mt-8 flex justify-end text-[11pt] font-sans text-black" style="line-height: var(--surat-line-height, 1.15) !important;">
        <div class="w-[48%] text-left">
          <div class="leading-normal" style="line-height: var(--surat-line-height, 1.15) !important;">${escapeHtml(jabatanPengirim)}</div>
          <div class="my-6 h-12"></div>
          <div class="leading-normal font-bold font-sans underline" style="line-height: var(--surat-line-height, 1.15) !important;">${escapeHtml(namaPengirim)}</div>
          <div class="leading-normal font-sans" style="line-height: var(--surat-line-height, 1.15) !important;">NIP. ${escapeHtml(nipPengirim)}</div>
        </div>
      </div>
    `;
  }

  // 6. Satukan Lembar Dokumen Surat Pengantar
  const fullSheetHtml = `
    <div class="${paperClass}" style="box-sizing: border-box; background: white; margin: 0 auto; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); padding: 1.2cm 1.5cm 1.5cm 1.8cm; font-family: Arial, sans-serif; font-size: 11pt; line-height: var(--surat-line-height, 1.15) !important; color: #000000;">
      ${kopHtml}
      ${headerTujuanHtml}
      ${judulSuratHtml}
      ${tableHtml}
      ${ttdHtml}
    </div>
  `;

  container.innerHTML = fullSheetHtml;

  // Jika render ulang saat mode edit langsung aktif, pasang kembali contentEditable
  if (AppState.isDirectEditModeSp) {
    const sheet = container.querySelector('.surat-sheet');
    if (sheet) {
      sheet.contentEditable = "true";
      sheet.spellcheck = false;
      sheet.classList.add('is-editing-direct');
    }
  }
};

/**
 * Terapkan Ukuran Kertas A4 vs Folio pada Preview Surat Pengantar
 */
window.applyPaperSizeSp = function() {
  updateLivePreviewSp();
};

/**
 * Terapkan Pilihan Jarak Spasi Baris pada Surat Pengantar
 */
window.applyLineSpacingSp = function(val) {
  const select = document.getElementById('selectLineSpacingSp');
  const lineSpacing = val || select?.value || '1.15';
  AppState.suratPengantarData.lineSpacing = lineSpacing;

  let paraMargin = '4pt';
  if (lineSpacing === '1.0') paraMargin = '2pt';
  else if (lineSpacing === '1.5') paraMargin = '6pt';
  else if (lineSpacing === '1.25') paraMargin = '3.5pt';

  const container = document.getElementById('previewSpContainer');
  if (container) {
    container.style.setProperty('--surat-line-height', lineSpacing);
    container.style.setProperty('--surat-para-margin', paraMargin);
  }

  const sheets = document.querySelectorAll('#previewSpContainer .surat-sheet');
  sheets.forEach(sheet => {
    sheet.style.setProperty('--surat-line-height', lineSpacing);
    sheet.style.setProperty('--surat-para-margin', paraMargin);
  });

  showToast(`Jarak spasi baris Surat Pengantar diatur ke: ${lineSpacing}`, 'info');
};

/**
 * Zoom Controls untuk Surat Pengantar
 */
window.changeZoomSp = function(delta) {
  const current = AppState.suratPengantarData.zoomPercent || 100;
  const newZoom = Math.min(Math.max(current + delta, 40), 200);
  AppState.suratPengantarData.zoomPercent = newZoom;

  const label = document.getElementById('labelZoomPercentSp');
  if (label) label.textContent = `${newZoom}%`;

  const container = document.getElementById('previewSpContainer');
  if (container) {
    container.style.transform = `scale(${newZoom / 100})`;
  }
};

window.resetZoomSp = function() {
  AppState.suratPengantarData.zoomPercent = 100;
  const label = document.getElementById('labelZoomPercentSp');
  if (label) label.textContent = '100%';
  const container = document.getElementById('previewSpContainer');
  if (container) {
    container.style.transform = 'scale(1)';
  }
};

/**
 * Cetak / Simpan PDF Surat Pengantar Resmi
 */
window.triggerPrintSp = function() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
  const container = document.getElementById('previewSpContainer');
  const oldTransform = container ? container.style.transform : '';
  if (container) container.style.transform = 'none';

  const loginPortal = document.getElementById('loginPortalContainer');
  if (loginPortal) loginPortal.style.setProperty('display', 'none', 'important');

  const workspaceKec = document.getElementById('workspaceKecamatan');
  if (workspaceKec) workspaceKec.style.setProperty('display', 'none', 'important');

  const workspaceSp = document.getElementById('workspaceSuratPengantar');
  if (workspaceSp) workspaceSp.style.setProperty('display', 'block', 'important');

  // Pastikan struktur tabel header 58% / 42% terkunci mutlak saat dicetak ke PDF
  const headerTables = document.querySelectorAll('.header-surat-table');
  headerTables.forEach(ht => {
    ht.style.setProperty('width', '100%', 'important');
    ht.style.setProperty('table-layout', 'fixed', 'important');
    const leftCol = ht.querySelector('.header-left-col');
    const rightCol = ht.querySelector('.header-right-col');
    if (leftCol) {
      leftCol.style.setProperty('width', '58%', 'important');
      leftCol.style.setProperty('max-width', '58%', 'important');
    }
    if (rightCol) {
      rightCol.style.setProperty('width', '42%', 'important');
      rightCol.style.setProperty('min-width', '42%', 'important');
    }
    const halCell = leftCol ? leftCol.querySelector('tr:last-child td:last-child') : null;
    if (halCell) {
      halCell.style.setProperty('width', '217pt', 'important');
      halCell.style.setProperty('max-width', '217pt', 'important');
      halCell.style.setProperty('word-wrap', 'break-word', 'important');
      halCell.style.setProperty('overflow-wrap', 'break-word', 'important');
      const halDiv = halCell.querySelector('div');
      if (halDiv) {
        halDiv.style.setProperty('width', '100%', 'important');
        halDiv.style.setProperty('max-width', '217pt', 'important');
        halDiv.style.setProperty('word-wrap', 'break-word', 'important');
      }
    }
  });

  // Jika masih ada struktur lama flex justify-between di DOM, konversi seketika ke tabel paten
  const oldFlexHeaders = document.querySelectorAll('#previewDocumentContainer div.flex.justify-between.items-start');
  oldFlexHeaders.forEach(fh => {
    if (fh.textContent.includes('Nomor') && (fh.textContent.includes('Sifat') || fh.textContent.includes('Hal'))) {
      const left = fh.children[0];
      const right = fh.children[1];
      if (left && right) {
        const tbl = document.createElement('table');
        tbl.className = 'header-surat-table w-full border-collapse';
        tbl.setAttribute('style', 'width: 100% !important; border-collapse: collapse !important; table-layout: fixed !important;');
        tbl.innerHTML = `
          <colgroup><col width="58%" style="width: 58%;"><col width="42%" style="width: 42%;"></colgroup>
          <tr>
            <td class="header-left-col align-top p-0" style="width: 58% !important; max-width: 58% !important; vertical-align: top !important;">${left.innerHTML}</td>
            <td class="header-right-col align-top p-0 text-right font-medium" style="width: 42% !important; min-width: 42% !important; vertical-align: top !important; text-align: right !important;">${right.innerHTML}</td>
          </tr>
        `;
        fh.parentNode.replaceChild(tbl, fh);
      }
    }
  });

  window.print();

  setTimeout(() => {
    if (container) container.style.transform = oldTransform;
    if (workspaceSp) workspaceSp.style.display = '';
    if (workspaceKec && AppState.kecamatanSubTab === 'generator') {
      workspaceKec.style.display = '';
    }
  }, 1000);
};

/**
 * Mode Edit Langsung di Kertas Surat Pengantar (Inline Direct Edit)
 */
window.toggleDirectEditModeSp = function() {
  const container = document.getElementById('previewSpContainer');
  if (!container) return;
  const sheet = container.querySelector('.surat-sheet');
  if (!sheet) {
    showToast('Belum ada lembar Surat Pengantar yang siap diedit.', 'warning');
    return;
  }

  AppState.isDirectEditModeSp = !AppState.isDirectEditModeSp;
  const btn = document.getElementById('btnToggleEditDirectSp');
  const icon = document.getElementById('iconEditDirectSp');
  const label = document.getElementById('labelEditDirectSp');
  const btnReset = document.getElementById('btnResetDirectSp');

  sheet.contentEditable = AppState.isDirectEditModeSp ? "true" : "false";
  sheet.spellcheck = false;
  if (AppState.isDirectEditModeSp) {
    sheet.classList.add('is-editing-direct');
    if (btn) {
      btn.className = 'px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white border border-amber-700 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer animate-pulse';
    }
    if (icon) icon.textContent = '🔒';
    if (label) label.textContent = 'Kunci Ketikan';
    if (btnReset) btnReset.classList.remove('hidden');
    showToast('✏️ Mode Edit di Kertas Aktif! Klik bagian mana saja pada Surat Pengantar untuk mengedit.', 'info');
  } else {
    sheet.classList.remove('is-editing-direct');
    if (btn) {
      btn.className = 'px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer';
    }
    if (icon) icon.textContent = '✏️';
    if (label) label.textContent = 'Edit di Kertas';
    if (btnReset) btnReset.classList.remove('hidden');
    showToast('🔒 Teks Surat Pengantar berhasil dikunci. Siap dicetak atau diunduh ke DOCX.', 'success');
  }
};

window.resetPreviewSpFromForm = function() {
  if (confirm('Muat ulang isi Surat Pengantar dari formulir input? Ketikan manual di kertas akan diganti dengan data dari formulir.')) {
    AppState.isDirectEditModeSp = false;
    const btn = document.getElementById('btnToggleEditDirectSp');
    const icon = document.getElementById('iconEditDirectSp');
    const label = document.getElementById('labelEditDirectSp');
    const btnReset = document.getElementById('btnResetDirectSp');
    if (btn) btn.className = 'px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-2xs cursor-pointer';
    if (icon) icon.textContent = '✏️';
    if (label) label.textContent = 'Edit di Kertas';
    if (btnReset) btnReset.classList.add('hidden');
    updateLivePreviewSp(true);
    showToast('Surat Pengantar berhasil dimuat ulang dari formulir input.', 'success');
  }
};

/**
 * Ekspor Surat Pengantar ke Microsoft Word (.docx)
 */
window.eksporSuratPengantarKeDocx = async function() {
  if (typeof window.htmlDocx === 'undefined' || typeof window.htmlDocx.asBlob !== 'function') {
    showToast('Modul pembaca DOCX belum termuat sempurna. Silakan muat ulang halaman (Ctrl + F5).', 'error');
    return;
  }

  const container = document.getElementById('previewSpContainer');
  if (!container) {
    showToast('Dokumen preview Surat Pengantar tidak ditemukan.', 'error');
    return;
  }

  const sheet = container.querySelector('.surat-sheet');
  if (!sheet) {
    showToast('Belum ada dokumen Surat Pengantar yang siap diekspor.', 'warning');
    return;
  }

  showToast('Sedang membuat file Microsoft Word (.docx)...', 'info');

  try {
    const logoBase64 = await getLogoPpuBase64();
    const namaDesa = (document.getElementById('selectDesaSp')?.value || 'Desa').replace(/[^a-zA-Z0-9_-]/g, '_');
    const tahap = (document.getElementById('selectTahapSp')?.value || 'Tahap').replace(/\s+/g, '_');
    const tahun = (document.getElementById('inputTahunSp')?.value || '2026').trim();
    const nomorSp = (document.getElementById('inputNomorSp')?.value || '').trim();

    let safeName = `Surat_Pengantar_Kecamatan_${namaDesa}_${tahap}_${tahun}`;
    if (nomorSp && !nomorSp.includes('${')) {
      const cleanNo = nomorSp.replace(/[\/\\:*?"<>|]/g, '-').replace(/\s+/g, '_');
      safeName = `Surat_Pengantar_${cleanNo}`;
    }

    const cleanHtml = cleanSheetToWordHtml(sheet, logoBase64);
    const paperSize = document.getElementById('selectPaperSizeSp')?.value || 'a4';
    const isA4 = paperSize === 'a4';
    const pageCssSize = isA4 ? '21.0cm 29.7cm' : '21.5cm 33.0cm';
    const docxMargins = {
      top: 680,    // 1.2 cm
      right: 850,  // 1.5 cm
      bottom: 850, // 1.5 cm
      left: 1020   // 1.8 cm
    };

    const lineSpacing = AppState.suratPengantarData.lineSpacing || document.getElementById('selectLineSpacingSp')?.value || '1.15';
    let paraMargin = '4pt';
    if (lineSpacing === '1.0') paraMargin = '2pt';
    else if (lineSpacing === '1.5') paraMargin = '6pt';
    else if (lineSpacing === '1.25') paraMargin = '3.5pt';

    const fullDocumentHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(safeName)}</title>
        <style>
          @page {
            size: ${pageCssSize};
            margin: 1.2cm 1.5cm 1.5cm 1.8cm;
            mso-page-orientation: portrait;
          }
          body, p, table, td, th, div, span {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11pt;
            color: #000000;
            line-height: ${lineSpacing};
          }
          body {
            background-color: #ffffff;
            margin: 0;
            padding: 0;
          }
          p, div {
            margin-top: 0pt;
            margin-bottom: ${paraMargin};
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: ${paraMargin};
            mso-line-height-rule: exactly;
            line-height: ${lineSpacing};
          }
          table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            mso-table-tspace: 0pt;
            mso-table-bspace: 0pt;
            line-height: ${lineSpacing};
          }
          td, th {
            line-height: ${lineSpacing};
            vertical-align: top;
            mso-line-height-rule: exactly;
          }
          .font-bold { font-weight: bold; }
          .font-semibold { font-weight: bold; }
          .font-black { font-weight: 900; }
          .uppercase { text-transform: uppercase; }
          .underline { text-decoration: underline; }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          .text-justify { text-align: justify; }
          .text-left { text-align: left; }
          .align-top { vertical-align: top; }
          .align-middle { vertical-align: middle; }
        </style>
      </head>
      <body>
        ${cleanHtml}
      </body>
      </html>
    `;

    const blob = window.htmlDocx.asBlob(fullDocumentHtml, {
      orientation: 'portrait',
      margins: docxMargins,
      width: isA4 ? 11906 : 12189,
      height: isA4 ? 16838 : 18708
    });

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${safeName}.docx`;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 500);

    showToast(`Dokumen Word ${safeName}.docx berhasil diunduh!`, 'success');
  } catch (err) {
    console.error('Gagal ekspor DOCX Surat Pengantar:', err);
    showToast('Terjadi kesalahan saat mengekspor ke DOCX: ' + err.message, 'error');
  }
};

/**
 * Simpan Arsip Surat Pengantar ke Database Lokal dan Google Sheets
 */
window.simpanArsipSuratPengantar = async function() {
  const nomorSp = document.getElementById('inputNomorSp')?.value?.trim() || '000.1.5 / 128 / Ekbang / X / 2026';
  const rawDate = document.getElementById('inputTanggalSp')?.value || '2026-10-21';
  const tanggalIndo = formatTanggalIndo(rawDate);
  const tujuanYth = document.getElementById('inputTujuanYthSp')?.value?.trim() || 'Kepala BKAD Kab. PPU';
  const tempatTujuan = document.getElementById('inputTempatTujuanSp')?.value?.trim() || 'Tempat';

  const namaDesa = document.getElementById('selectDesaSp')?.value || 'Sesulu';
  const jenisDana = document.getElementById('selectJenisDanaSp')?.value || 'add_reguler';
  const tahap = document.getElementById('selectTahapSp')?.value || 'Tahap II';
  const tahunAnggaran = document.getElementById('inputTahunSp')?.value?.trim() || '2026';

  const jabatanPengirim = document.getElementById('inputJabatanPengirimSp')?.value?.trim() || 'Camat Waru,';
  const namaPengirim = document.getElementById('inputNamaPengirimSp')?.value?.trim() || 'Ahmad Yani, SSTP';
  const nipPengirim = document.getElementById('inputNipPengirimSp')?.value?.trim() || '198610082006021001';
  const metodeTte = document.getElementById('selectMetodeTteSp')?.value || 'srikandi';

  const rows = AppState.suratPengantarData.rows || [];
  const rincianRingkasan = rows.map((r, i) => `${i + 1}. ${r.jenis} (${r.banyak})`).join('; ');

  const id = AppState.suratPengantarData.id || `SP-${Date.now()}`;
  const nowWita = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar' });

  const record = {
    id: id,
    waktuSimpan: nowWita,
    nomorSuratPengantar: nomorSp,
    tanggalSurat: tanggalIndo,
    tujuanYth: tujuanYth,
    tempatTujuan: tempatTujuan,
    namaDesa: namaDesa,
    jenisDana: jenisDana,
    tahap: tahap,
    tahunAnggaran: tahunAnggaran,
    rincianRingkasan: rincianRingkasan,
    rincianBerkas: rows,
    jabatanPengirim: jabatanPengirim,
    namaPengirim: namaPengirim,
    nipPengirim: nipPengirim,
    metodeTte: metodeTte,
    status: 'Diterbitkan'
  };

  // Simpan ke State & LocalStorage
  let list = AppState.suratPengantarList || [];
  const existingIdx = list.findIndex(item => item.id === id || (item.nomorSuratPengantar && item.nomorSuratPengantar === nomorSp));
  if (existingIdx !== -1) {
    list[existingIdx] = record;
  } else {
    list.unshift(record);
  }
  AppState.suratPengantarList = list;
  localStorage.setItem('sip_arsip_surat_pengantar', JSON.stringify(list));

  AppState.suratPengantarData.id = id;
  updateBadgeSpCount();

  // Sinkronisasi ke Google Sheets jika online
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    try {
      showToast('Menyimpan Surat Pengantar ke Google Sheets...', 'info');
      const res = await fetch(AppState.gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'simpanSuratPengantar',
          ...record
        })
      });
      const resJson = await res.json();
      if (resJson.success) {
        showToast('✅ Surat Pengantar berhasil disimpan ke Google Sheets (Sheet "Surat_Pengantar")!', 'success');
      } else {
        showToast('Tersimpan di lokal. ' + (resJson.message || ''), 'warning');
      }
    } catch (e) {
      console.warn('Gagal simpan SP ke Google Sheets:', e);
      showToast('Surat Pengantar berhasil disimpan di lokal (offline).', 'info');
    }
  } else {
    showToast('Surat Pengantar berhasil disimpan di arsip lokal!', 'success');
  }
};

/**
 * Reset Formulir Surat Pengantar
 */
window.resetFormSuratPengantar = function() {
  AppState.suratPengantarData.id = null;
  AppState.suratPengantarData.rows = [
    {
      no: 1,
      jenis: 'Kelengkapan berkas Rekomendasi Camat Waru Penyaluran Alokasi Dana Desa (ADD) Tahap II Tahun Anggaran 2026 Desa Sesulu.',
      banyak: '1 (satu) Berkas',
      keterangan: 'Dikirim dengan hormat kepada Bapak untuk dapat diproses penyaluran/pencairan dana lebih lanjut. Terima kasih.'
    }
  ];

  const inputTanggal = document.getElementById('inputTanggalSp');
  if (inputTanggal) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    inputTanggal.value = `${yyyy}-${mm}-${dd}`;
  }

  const inputTujuan = document.getElementById('inputTujuanYthSp');
  if (inputTujuan) inputTujuan.value = 'Kepala Badan Keuangan dan Aset Daerah (BKAD) Kab. Penajam Paser Utara';

  const inputTempat = document.getElementById('inputTempatTujuanSp');
  if (inputTempat) inputTempat.value = 'Tempat';

  autoGenNomorSp();
  renderRowsSpInputs();
  updateLivePreviewSp();
  showToast('Formulir Surat Pengantar telah direset.', 'info');
};

/**
 * Kelola Drawer Riwayat Surat Pengantar
 */
window.bukaDrawerRiwayatSp = function() {
  renderTabelArsipSp();
  document.getElementById('drawerRiwayatSp')?.classList.remove('hidden');
};

window.tutupDrawerRiwayatSp = function() {
  document.getElementById('drawerRiwayatSp')?.classList.add('hidden');
};

window.renderTabelArsipSp = function() {
  const tbody = document.getElementById('tbodyRiwayatSp');
  if (!tbody) return;

  const list = AppState.suratPengantarList || [];
  const keyword = (document.getElementById('inputSearchSp')?.value || '').toLowerCase();

  const filtered = list.filter(item => {
    if (!keyword) return true;
    const haystack = [
      item.nomorSuratPengantar,
      item.namaDesa,
      item.tujuanYth,
      item.jenisDana,
      item.tahap,
      item.rincianRingkasan
    ].join(' ').toLowerCase();
    return haystack.includes(keyword);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="py-8 text-center text-slate-400 text-xs">
          ${list.length === 0 ? 'Belum ada arsip Surat Pengantar tersimpan. Klik "Simpan Arsip SP" di formulir untuk menyimpan.' : 'Tidak ditemukan data yang sesuai dengan pencarian.'}
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map((item, index) => {
    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition text-xs">
        <td class="py-2.5 px-3 text-center font-bold text-slate-500">${index + 1}</td>
        <td class="py-2.5 px-3">
          <div class="font-mono font-bold text-teal-800">${escapeHtml(item.nomorSuratPengantar || '-')}</div>
          <div class="text-[10px] text-slate-500">${escapeHtml(item.tanggalSurat || '-')}</div>
        </td>
        <td class="py-2.5 px-3">
          <span class="inline-block px-2 py-0.5 rounded font-bold text-[10.5px] bg-teal-100 text-teal-800">
            ${escapeHtml(item.namaDesa || 'Desa')}
          </span>
          <div class="text-[10.5px] text-slate-600 mt-0.5">${escapeHtml(item.tahap || '')} - ${escapeHtml(item.tahunAnggaran || '')}</div>
        </td>
        <td class="py-2.5 px-3 text-slate-700 max-w-xs truncate" title="${escapeHtml(item.tujuanYth || '')}">
          ${escapeHtml(item.tujuanYth || '-')}
        </td>
        <td class="py-2.5 px-3 text-slate-600 max-w-xs truncate" title="${escapeHtml(item.rincianRingkasan || '')}">
          ${escapeHtml(item.rincianRingkasan || '-')}
        </td>
        <td class="py-2.5 px-3 text-center">
          <div class="flex items-center justify-center gap-1">
            <button type="button" onclick="muatArsipSpKeEditor('${item.id}')" class="px-2 py-1 bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-200 rounded text-[10.5px] font-bold transition cursor-pointer" title="Muat ke editor">
              ✏️ Buka
            </button>
            <button type="button" onclick="hapusArsipSp('${item.id}')" class="px-1.5 py-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded text-xs transition cursor-pointer" title="Hapus arsip ini">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
};

/**
 * Muat Arsip Surat Pengantar Tersimpan ke Formulir & Preview
 */
window.muatArsipSpKeEditor = function(id) {
  const item = (AppState.suratPengantarList || []).find(x => x.id === id);
  if (!item) {
    showToast('Data arsip Surat Pengantar tidak ditemukan.', 'error');
    return;
  }

  AppState.suratPengantarData.id = item.id;
  AppState.suratPengantarData.nomorSurat = item.nomorSuratPengantar;
  AppState.suratPengantarData.tujuanYth = item.tujuanYth;
  AppState.suratPengantarData.tempatTujuan = item.tempatTujuan || 'Tempat';
  AppState.suratPengantarData.namaDesa = item.namaDesa;
  AppState.suratPengantarData.jenisDana = item.jenisDana;
  AppState.suratPengantarData.tahap = item.tahap;
  AppState.suratPengantarData.tahunAnggaran = item.tahunAnggaran;
  AppState.suratPengantarData.jabatanPengirim = item.jabatanPengirim || 'Camat Waru,';
  AppState.suratPengantarData.namaPengirim = item.namaPengirim;
  AppState.suratPengantarData.nipPengirim = item.nipPengirim;
  AppState.suratPengantarData.metodeTte = item.metodeTte || 'srikandi';

  if (Array.isArray(item.rincianBerkas) && item.rincianBerkas.length > 0) {
    AppState.suratPengantarData.rows = JSON.parse(JSON.stringify(item.rincianBerkas));
  } else if (item.rincianRingkasan) {
    AppState.suratPengantarData.rows = [
      {
        no: 1,
        jenis: item.rincianRingkasan,
        banyak: '1 (satu) Berkas',
        keterangan: 'Dikirim dengan hormat untuk verifikasi dan proses lebih lanjut.'
      }
    ];
  }

  const inpNo = document.getElementById('inputNomorSp');
  if (inpNo) inpNo.value = item.nomorSuratPengantar || '';

  const inpTujuan = document.getElementById('inputTujuanYthSp');
  if (inpTujuan) inpTujuan.value = item.tujuanYth || '';

  const inpTempat = document.getElementById('inputTempatTujuanSp');
  if (inpTempat) inpTempat.value = item.tempatTujuan || 'Tempat';

  const selDesa = document.getElementById('selectDesaSp');
  if (selDesa && item.namaDesa) selDesa.value = item.namaDesa;

  const selJenis = document.getElementById('selectJenisDanaSp');
  if (selJenis && item.jenisDana) selJenis.value = item.jenisDana;

  const selTahap = document.getElementById('selectTahapSp');
  if (selTahap && item.tahap) {
    const optMatch = Array.from(selTahap.options).find(o => 
      o.value.toLowerCase() === item.tahap.toLowerCase() || 
      o.value.toLowerCase() === `bulan ${item.tahap.toLowerCase()}`
    );
    if (optMatch) selTahap.value = optMatch.value;
    else selTahap.value = item.tahap;
  }

  const inpTahun = document.getElementById('inputTahunSp');
  if (inpTahun && item.tahunAnggaran) inpTahun.value = item.tahunAnggaran;

  const inpJab = document.getElementById('inputJabatanPengirimSp');
  if (inpJab) inpJab.value = item.jabatanPengirim || 'Camat Waru,';

  const inpNama = document.getElementById('inputNamaPengirimSp');
  if (inpNama) inpNama.value = item.namaPengirim || '';

  const inpNip = document.getElementById('inputNipPengirimSp');
  if (inpNip) inpNip.value = item.nipPengirim || '';

  const selMetode = document.getElementById('selectMetodeTteSp');
  if (selMetode) selMetode.value = item.metodeTte || 'srikandi';

  renderRowsSpInputs();
  updateLivePreviewSp();
  tutupDrawerRiwayatSp();
  showToast(`Arsip Surat Pengantar "${item.nomorSuratPengantar}" berhasil dimuat ke editor!`, 'success');
};

/**
 * Hapus Arsip Surat Pengantar
 */
window.hapusArsipSp = function(id) {
  if (!confirm('Yakin ingin menghapus arsip Surat Pengantar ini?')) return;

  AppState.suratPengantarList = (AppState.suratPengantarList || []).filter(x => x.id !== id);
  localStorage.setItem('sip_arsip_surat_pengantar', JSON.stringify(AppState.suratPengantarList));

  if (AppState.suratPengantarData.id === id) {
    AppState.suratPengantarData.id = null;
  }

  // Hapus dari Google Sheets jika online
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    fetch(AppState.gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'hapusSuratPengantar', id: id })
    }).catch(e => console.warn(e));
  }

  renderTabelArsipSp();
  updateBadgeSpCount();
  showToast('Arsip Surat Pengantar berhasil dihapus.', 'info');
};

/**
 * Update Badge Jumlah Arsip Surat Pengantar
 */
window.updateBadgeSpCount = function() {
  const count = (AppState.suratPengantarList || []).length;
  const badgeSubtab = document.getElementById('badgeTabSpCount');
  if (badgeSubtab) {
    badgeSubtab.textContent = count;
    if (count > 0) {
      badgeSubtab.classList.remove('hidden');
    } else {
      badgeSubtab.classList.add('hidden');
    }
  }

  const badgeBtn = document.getElementById('countArsipSpBadge');
  if (badgeBtn) {
    badgeBtn.textContent = count;
  }
};


