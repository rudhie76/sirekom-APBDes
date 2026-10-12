/**
 * =========================================================================================
 * SIP-REKOM APBDES - KECAMATAN WARU, KABUPATEN PENAJAM PASER UTARA
 * Generator Surat Rekomendasi Resmi:
 * 1. Rekomendasi Siltap / Gaji & Tunjangan Kepala Desa, BPD, Insentif RT, & Staf Desa
 * 2. Rekomendasi Penyaluran APBDes Reguler (ADD, DD, DBH, Bankeu)
 * =========================================================================================
 */

// STATE MANAGEMENT GLOBAL
const AppState = {
  // Pengaturan Google Sheets
  gasUrl: localStorage.getItem('sip_gas_url') || '',
  isConnected: false,
  
  // Tipe Rekomendasi: 'siltap' (Gaji & Tunjangan) atau 'reguler' (APBDes Umum)
  tipeRekomendasi: 'siltap',

  // Data Master Desa di Kecamatan Waru
  masterDesa: [
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
      nomorPerdes: '7',
      tahunPerdes: '2025',
      nomorPerkades: '3',
      tahunPerkades: '2025'
    },
    {
      id: 'DESA-01',
      nama: 'Waru',
      kades: 'KARTONO, S.Pd',
      kaurKeuangan: 'SRI WAHYUNI, S.E',
      jabatanKaur: 'Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa Waru',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '1131400122',
      atasNama: 'Pemerintah Desa Waru (RKD)',
      alamat: 'Jl. Propinsi Km. 25, Desa Waru, Kec. Waru',
      nomorPerdes: '5',
      tahunPerdes: '2025',
      nomorPerkades: '2',
      tahunPerkades: '2025'
    },
    {
      id: 'DESA-03',
      nama: 'Api-Api',
      kades: 'SUDIRMAN',
      kaurKeuangan: 'M. FACHRI ROZI',
      jabatanKaur: 'Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa Api-Api',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '1131400455',
      atasNama: 'Pemerintah Desa Api-Api (RKD)',
      alamat: 'Jl. Silkar RT. 02, Desa Api-Api, Kec. Waru',
      nomorPerdes: '6',
      tahunPerdes: '2025',
      nomorPerkades: '2',
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
      nomorPerdes: '4',
      tahunPerdes: '2025',
      nomorPerkades: '1',
      tahunPerkades: '2025'
    }
  ],

  // Pejabat Camat Waru Resmi
  camat: {
    nama: 'Ahmad Yani, SSTP',
    pangkat: 'Pembina (IV/a)',
    nip: '198610082006021001',
    jabatan: 'Camat Waru'
  },

  // Riwayat Surat yang Tersimpan
  riwayat: JSON.parse(localStorage.getItem('sip_riwayat_rekom') || '[]'),

  // Kelengkapan Berkas Siltap (7 Item Resmi Sesuai PDF Rekom Gaji)
  berkasSiltap: [
    { id: 's1', teks: 'Permohonan Pencairan Dari Kepala Desa;', checked: true },
    { id: 's2', teks: 'Rekomendasi Pencairan Dari Camat;', checked: true },
    { id: 's3', teks: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;', checked: true },
    { id: 's4', teks: 'Surat Pengantar, Surat permintaan Pembayaran (SPP) dan Pernyataan Tanggung Jawab Belanja Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif RT dan Honorarium Staf Desa;', checked: true },
    { id: 's5', teks: 'Daftar Tanda Terima Belanja Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif RT dan Honorarium Staf Desa;', checked: true },
    { id: 's6', teks: 'Cek Giro; dan', checked: true },
    { id: 's7', teks: 'Fotocopy NPWP Desa.', checked: true }
  ],

  // Kelengkapan Berkas Reguler
  berkasReguler: [
    { id: 'r1', teks: 'Surat Permohonan Penyaluran / Pencairan dari Kepala Desa', checked: true },
    { id: 'r2', teks: 'Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) Kepala Desa', checked: true },
    { id: 'r3', teks: 'Surat Permintaan Pembayaran (SPP) dan Rencana Penggunaan Dana (RPD)', checked: true },
    { id: 'r4', teks: 'Laporan Realisasi Penyerapan Anggaran & Capaian Output Tahap Sebelumnya', checked: true },
    { id: 'r5', teks: 'Bukti Setor Pajak (Surat Setoran Pajak / BPN) Tahap Sebelumnya', checked: true },
    { id: 'r6', teks: 'Berita Acara Hasil Verifikasi Tim Fasilitasi Pengelolaan Keuangan Desa Kec. Waru', checked: true },
    { id: 'r7', teks: 'Kuitansi Penerimaan Bermaterai Cukup yang telah ditandatangani Kepala Desa', checked: true },
    { id: 'r8', teks: 'Fotokopi Buku Rekening Kas Desa (RKD) Bankaltimtara yang masih aktif', checked: true }
  ],

  // Mode Tampilan & Kertas
  currentZoom: 100,
  paperSize: 'folio', // 'folio' (F4) atau 'a4'
  viewMode: 'split'
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
  if (angka < 12) {
    return bilangan[angka];
  } else if (angka < 20) {
    return bilangSatuan(angka - 10) + ' Belas';
  } else if (angka < 100) {
    return bilangSatuan(Math.floor(angka / 10)) + ' Puluh ' + bilangSatuan(angka % 10);
  } else if (angka < 200) {
    return 'Seratus ' + bilangSatuan(angka - 100);
  } else if (angka < 1000) {
    return bilangSatuan(Math.floor(angka / 100)) + ' Ratus ' + bilangSatuan(angka % 100);
  } else if (angka < 2000) {
    return 'Seribu ' + bilangSatuan(angka - 1000);
  } else if (angka < 1000000) {
    return bilangSatuan(Math.floor(angka / 1000)) + ' Ribu ' + bilangSatuan(angka % 1000);
  } else if (angka < 1000000000) {
    return bilangSatuan(Math.floor(angka / 1000000)) + ' Juta ' + bilangSatuan(angka % 1000000);
  } else if (angka < 1000000000000) {
    return bilangSatuan(Math.floor(angka / 1000000000)) + ' Miliar ' + bilangSatuan(angka % 1000000000);
  } else if (angka < 1000000000000000) {
    return bilangSatuan(Math.floor(angka / 1000000000000)) + ' Triliun ' + bilangSatuan(angka % 1000000000000);
  }
  return '';
}

function convertTerbilang(angka) {
  if (isNaN(angka) || angka <= 0) return 'Nol rupiah';
  let hasil = bilangSatuan(angka).replace(/\s+/g, ' ').trim();
  if (!hasil) hasil = 'Nol';
  return hasil.toLowerCase() + ' rupiah';
}

function convertTerbilangKapital(angka) {
  const terbilang = convertTerbilang(angka);
  // Huruf awal besar: "Seratus Enam belas juta lima ratus lima puluh ribu rupiah"
  return terbilang.charAt(0).toUpperCase() + terbilang.slice(1);
}

// =========================================================================================
// FORMATTING UTILITIES
// =========================================================================================
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
  const hari = date.getDate();
  const namaBulan = bulan[date.getMonth()];
  const tahun = date.getFullYear();
  return `${hari} ${namaBulan} ${tahun}`;
}

// =========================================================================================
// INISIALISASI & SETUP
// =========================================================================================
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  populateDesaSelect();
  renderBerkasChecklist();
  setupEventListeners();
  loadSavedSettings();
  triggerAutoFillDesa();
  updateLivePreview();
  renderHistoryTable();
  updateSyncStatusBadge();
});

function initUI() {
  // Set default tanggal sesuai surat contoh (atau hari ini)
  const today = new Date().toISOString().split('T')[0];
  const inputTgl = document.getElementById('inputTanggalSurat');
  if (inputTgl && !inputTgl.value) {
    inputTgl.value = '2026-05-25'; // Sesuai contoh: 25 Mei 2026
  }

  // Set default nominal gaji sesuai contoh: 116.550.000
  const inputNominal = document.getElementById('inputNominalAngka');
  if (inputNominal && !inputNominal.value) {
    inputNominal.value = '116.550.000';
  }
}

function populateDesaSelect() {
  const select = document.getElementById('selectNamaDesa');
  if (!select) return;
  
  select.innerHTML = '';
  AppState.masterDesa.forEach((desa) => {
    const opt = document.createElement('option');
    opt.value = desa.nama;
    opt.textContent = `Desa ${desa.nama}`;
    if (desa.nama === 'Sesulu') opt.selected = true; // Default Sesulu sesuai contoh
    select.appendChild(opt);
  });
}

function renderBerkasChecklist() {
  const container = document.getElementById('containerBerkasChecklist');
  if (!container) return;
  
  const items = AppState.tipeRekomendasi === 'siltap' ? AppState.berkasSiltap : AppState.berkasReguler;
  container.innerHTML = '';
  
  items.forEach((item, index) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'flex items-start gap-2.5 p-2 bg-slate-50 hover:bg-emerald-50/50 rounded-lg border border-slate-200 cursor-pointer transition text-xs text-slate-700';
    wrapper.innerHTML = `
      <input type="checkbox" id="berkas_${item.id}" value="${item.teks}" ${item.checked ? 'checked' : ''} 
             class="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 berkas-checkbox" />
      <span class="flex-1 leading-relaxed">${index + 1}. ${item.teks}</span>
    `;
    container.appendChild(wrapper);
  });
}

// =========================================================================================
// EVENT LISTENERS
// =========================================================================================
function setupEventListeners() {
  // Tipe Rekomendasi Switcher (Siltap vs Reguler)
  const radSiltap = document.getElementById('radioTipeSiltap');
  const radReguler = document.getElementById('radioTipeReguler');

  if (radSiltap) {
    radSiltap.addEventListener('change', () => {
      AppState.tipeRekomendasi = 'siltap';
      toggleSectionVisibility();
      autoUpdatePerihal();
      renderBerkasChecklist();
      autoGenerateNomorSurat();
      updateLivePreview();
    });
  }

  if (radReguler) {
    radReguler.addEventListener('change', () => {
      AppState.tipeRekomendasi = 'reguler';
      toggleSectionVisibility();
      autoUpdatePerihal();
      renderBerkasChecklist();
      autoGenerateNomorSurat();
      updateLivePreview();
    });
  }

  // Input fields yang mentrigger real-time update
  const watchInputs = [
    'selectNamaDesa', 'inputKepalaDesa', 'inputKaurKeuangan', 'inputJabatanKaur', 'inputNomorRekening',
    'selectBulanGaji', 'inputTahunAnggaran', 'inputNominalAngka',
    'inputNomorSurat', 'inputNomorPerdes', 'inputTahunPerdes', 'inputNomorPerkades', 'inputTahunPerkades',
    'inputTanggalSurat', 'inputNamaCamat', 'inputPangkatCamat', 'inputNipCamat', 'selectMetodeTte'
  ];

  watchInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        if (id === 'inputNominalAngka') handleNominalInput();
        if (id === 'selectBulanGaji' || id === 'selectNamaDesa' || id === 'inputTahunAnggaran') autoUpdatePerihal();
        updateLivePreview();
      });
      el.addEventListener('change', () => {
        if (id === 'selectNamaDesa') triggerAutoFillDesa();
        updateLivePreview();
      });
    }
  });

  // Checkbox berkas change
  document.addEventListener('change', (e) => {
    if (e.target && e.target.classList.contains('berkas-checkbox')) {
      updateLivePreview();
    }
  });

  // Tombol Auto Generate Nomor
  const btnGenNomor = document.getElementById('btnGenNomorSurat');
  if (btnGenNomor) {
    btnGenNomor.addEventListener('click', () => {
      autoGenerateNomorSurat();
      updateLivePreview();
      showToast('Nomor surat berhasil diperbarui!', 'info');
    });
  }

  // Tombol Cetak / PDF
  const btnPrint = document.getElementById('btnPrintDoc');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => triggerPrint());
  }

  // Tombol Simpan ke Database
  const btnSave = document.getElementById('btnSaveToDb');
  if (btnSave) {
    btnSave.addEventListener('click', () => saveRecommendationData());
  }

  // Zoom controls
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnZoomReset = document.getElementById('btnZoomReset');
  if (btnZoomIn) btnZoomIn.addEventListener('click', () => changeZoom(10));
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => changeZoom(-10));
  if (btnZoomReset) btnZoomReset.addEventListener('click', () => resetZoom());

  // Paper Size Selector
  const selectPaperSize = document.getElementById('selectPaperSize');
  if (selectPaperSize) {
    selectPaperSize.addEventListener('change', (e) => {
      AppState.paperSize = e.target.value;
      applyPaperSize();
    });
  }

  // Modal Settings & Sync
  setupModalSettingsListeners();

  // Riwayat Drawer
  setupHistoryDrawerListeners();

  // View Mode switcher
  const btnViewSplit = document.getElementById('btnViewSplit');
  const btnViewForm = document.getElementById('btnViewForm');
  const btnViewPreview = document.getElementById('btnViewPreview');
  if (btnViewSplit) btnViewSplit.addEventListener('click', () => setViewMode('split'));
  if (btnViewForm) btnViewForm.addEventListener('click', () => setViewMode('form'));
  if (btnViewPreview) btnViewPreview.addEventListener('click', () => setViewMode('preview'));
}

function toggleSectionVisibility() {
  const isSiltap = AppState.tipeRekomendasi === 'siltap';
  const secSiltap = document.getElementById('sectionSiltapFields');
  const secReguler = document.getElementById('sectionRegulerFields');

  if (secSiltap) secSiltap.classList.toggle('hidden', !isSiltap);
  if (secReguler) secReguler.classList.toggle('hidden', isSiltap);
}

// =========================================================================================
// LOGIKA AUTO-FILL & PENOMORAN
// =========================================================================================
function triggerAutoFillDesa() {
  const desaName = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const data = AppState.masterDesa.find(d => d.nama === desaName);
  
  if (data) {
    const kadesInput = document.getElementById('inputKepalaDesa');
    const kaurInput = document.getElementById('inputKaurKeuangan');
    const jabatanKaurInput = document.getElementById('inputJabatanKaur');
    const rekInput = document.getElementById('inputNomorRekening');
    const perdesInput = document.getElementById('inputNomorPerdes');
    const perkadesInput = document.getElementById('inputNomorPerkades');

    if (kadesInput) kadesInput.value = data.kades;
    if (kaurInput) kaurInput.value = data.kaurKeuangan;
    if (jabatanKaurInput) jabatanKaurInput.value = data.jabatanKaur;
    if (rekInput) rekInput.value = data.rekening;
    if (perdesInput) perdesInput.value = data.nomorPerdes;
    if (perkadesInput) perkadesInput.value = data.nomorPerkades;
  }

  autoUpdatePerihal();
  updateLivePreview();
}

function autoUpdatePerihal() {
  const desa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const tahun = document.getElementById('inputTahunAnggaran')?.value || '2026';

  if (AppState.tipeRekomendasi === 'siltap') {
    const bulan = document.getElementById('selectBulanGaji')?.value || 'Juni';
    const perihal = `Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${bulan} Desa ${desa} Tahun ${tahun}`;
    const inputPerihal = document.getElementById('inputPerihalSurat');
    if (inputPerihal) inputPerihal.value = perihal;
  } else {
    const dana = document.getElementById('selectJenisDana')?.value || 'ADD';
    const tahap = document.getElementById('selectTahap')?.value || 'Tahap I';
    const perihal = `Rekomendasi Penyaluran ${dana} ${tahap} Tahun Anggaran ${tahun} Desa ${desa}`;
    const inputPerihal = document.getElementById('inputPerihalSurat');
    if (inputPerihal) inputPerihal.value = perihal;
  }
}

function autoGenerateNomorSurat() {
  const tahun = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const inputNomor = document.getElementById('inputNomorSurat');
  if (!inputNomor) return;

  if (AppState.tipeRekomendasi === 'siltap') {
    // Format Resmi Surat Gaji di Kecamatan Waru:
    // R-900/[No_Urut]/PMDK/Kec.Waru/[Tahun] (Sesuai dokumen PDF asli!)
    let nextNo = 179;
    if (AppState.riwayat && AppState.riwayat.length > 0) {
      nextNo = 179 + AppState.riwayat.length;
    }
    inputNomor.value = `R-900/${nextNo}/PMDK/Kec.Waru/${tahun}`;
  } else {
    // Format APBDes Reguler
    let nextNo = 1;
    if (AppState.riwayat && AppState.riwayat.length > 0) {
      nextNo = AppState.riwayat.length + 1;
    }
    const padded = String(nextNo).padStart(3, '0');
    inputNomor.value = `100.3.3.7 / ${padded} / Ekbang / V / ${tahun}`;
  }
}

function handleNominalInput() {
  const input = document.getElementById('inputNominalAngka');
  const terbilangOutput = document.getElementById('outputTerbilang');
  if (!input) return;

  const rawValue = parseCurrencyInput(input.value);
  input.value = rawValue ? rawValue.toLocaleString('id-ID') : '';

  const terbilangText = convertTerbilangKapital(rawValue);
  if (terbilangOutput) {
    terbilangOutput.textContent = terbilangText;
  }
}

// =========================================================================================
// RENDER LIVE PREVIEW DOKUMEN RESMI (KECAMATAN WARU - PPU)
// =========================================================================================
function updateLivePreview() {
  if (AppState.tipeRekomendasi === 'siltap') {
    renderLivePreviewSiltap();
  } else {
    renderLivePreviewReguler();
  }
  applyPaperSize();
}

/**
 * -----------------------------------------------------------------------------------------
 * 1. RENDER SURAT REKOMENDASI GAJI / SILTAP RESMI KECAMATAN WARU (PERSIS SESUAI PDF ASLI)
 * -----------------------------------------------------------------------------------------
 */
function renderLivePreviewSiltap() {
  const previewDoc = document.getElementById('previewDocumentContainer');
  if (!previewDoc) return;

  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const kaurKeuangan = document.getElementById('inputKaurKeuangan')?.value || 'MASNI';
  const jabatanKaur = document.getElementById('inputJabatanKaur')?.value || `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${namaDesa}`;
  const nomorRekening = document.getElementById('inputNomorRekening')?.value || '1131400337';
  
  const bulanGaji = document.getElementById('selectBulanGaji')?.value || 'Juni';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/179/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSurat = document.getElementById('inputTanggalSurat')?.value || '2026-05-25';
  const tanggalSuratIndo = formatTanggalIndo(tanggalSurat);

  const nomorPerdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const tahunPerdes = document.getElementById('inputTahunPerdes')?.value || '2025';
  const nomorPerkades = document.getElementById('inputNomorPerkades')?.value || '3';
  const tahunPerkades = document.getElementById('inputTahunPerkades')?.value || '2025';

  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '116550000');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilangKapital(nominalAngka);

  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'tte';

  // Perihal Surat Gaji
  const perihalText = `Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)}`;

  // Ambil checklist berkas yang tercentang
  const berkasChecked = [];
  document.querySelectorAll('.berkas-checkbox:checked').forEach(cb => {
    berkasChecked.push(cb.value);
  });

  const docHtml = `
    <!-- ========================================================================= -->
    <!-- HALAMAN 1 SURAT REKOMENDASI GAJI / SILTAP -->
    <!-- ========================================================================= -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative print:shadow-none print:m-0 font-sans" id="suratHalaman1">
      
      <!-- KOP SURAT RESMI KECAMATAN WARU KABUPATEN PENAJAM PASER UTARA -->
      <div class="kop-surat flex items-center justify-between pb-2 border-b-[3px] border-black relative">
        <div class="w-20 flex-shrink-0 flex items-center justify-center">
          ${getLogoPenajamSvg()}
        </div>
        <div class="flex-1 text-center px-1">
          <h3 class="text-[15px] font-bold uppercase tracking-wider text-black leading-tight">
            PEMERINTAH KABUPATEN PENAJAM PASER UTARA
          </h3>
          <h2 class="text-[17px] font-black uppercase tracking-wider text-black leading-tight mt-0.5">
            KECAMATAN WARU
          </h2>
          <p class="text-[11px] text-black leading-snug mt-1">
            Jalan Propinsi KM. 25, Telp. (0543) 5232668
          </p>
          <p class="text-[11px] text-black leading-snug">
            Website : <span class="text-blue-700 underline">https://kecwaru.penajamkab.go.id/</span>
          </p>
          <p class="text-[11px] text-black leading-snug">
            Email : <span class="text-blue-700 underline">kecamatanwaru2014@gmail.com</span> Pos 76284
          </p>
        </div>
        <div class="w-16 flex-shrink-0"></div>
      </div>

      <!-- BARIS TANGGAL & KEPADA YTH (KANAN), NOMOR & PERIHAL (KIRI) -->
      <div class="mt-4 flex justify-between text-[11.5px] leading-relaxed">
        
        <!-- SISI KIRI: NOMOR, LAMPIRAN, PERIHAL -->
        <div class="w-[55%] pr-2">
          <table class="w-full border-collapse">
            <tr>
              <td class="w-16 align-top py-0.5">Nomor</td>
              <td class="w-3 align-top py-0.5">:</td>
              <td class="align-top py-0.5 font-medium">${escapeHtml(nomorSurat)}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Lampiran</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5">-</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Perihal</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5 text-justify leading-snug">
                ${perihalText}
              </td>
            </tr>
          </table>
        </div>

        <!-- SISI KANAN: TANGGAL & TUJUAN SURAT -->
        <div class="w-[45%] pl-4 text-left">
          <div class="mb-3 text-right">
            Waru, ${tanggalSuratIndo}
          </div>
          <div class="leading-normal pl-4">
            <div>Kepada</div>
            <div class="font-normal">Yth. Bupati Penajam Paser Utara</div>
            <div class="pl-4 leading-tight">Up. Kepala Badan Keuangan</div>
            <div class="pl-4 leading-tight">dan Aset Daerah Kab. PPU</div>
            <div class="mt-0.5">di-</div>
            <div class="pl-6">Tempat</div>
          </div>
        </div>

      </div>

      <!-- DASAR HUKUM (9 POIN RESMI) -->
      <div class="mt-4 text-[11px] text-justify leading-normal">
        <div class="flex items-start">
          <div class="w-16 font-normal">Dasar</div>
          <div class="w-3">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-4 space-y-1">
              <li class="pl-1">
                Undang-undang Nomor 3 Tahun 2024 tentang Perubahan Kedua Atas Undang-undang Nomor 6 Tahun 2014 Tentang Desa;
              </li>
              <li class="pl-1">
                Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah beberapa kali terakhir dengan Peraturan Pemerintah Nomor 11 Tahun 2019;
              </li>
              <li class="pl-1">
                Instruksi Menteri Dalam Negeri Nomor 28 Tahun 2022 tentang Pembayaran Penghasilan Tetap Kepala Desa dan Perangkat Desa;
              </li>
              <li class="pl-1">
                Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa;
              </li>
              <li class="pl-1">
                Peraturan Bupati Penajam Paser Utara Nomor 7 Tahun 2019 tentang Pengelolaan Keuangan Desa sebagaimana telah diubah dengan Peraturan Bupati Penajam Paser Utara Nomor 16 Tahun 2021;
              </li>
              <li class="pl-1">
                Peraturan Bupati Penajam Paser Utara Nomor 14 Tahun 2024 tentang Pengangkatan dan Honorarium Staf Desa di Lingkungan Pemerintah Desa;
              </li>
              <li class="pl-1">
                Peraturan Bupati Penajam Paser Utara Nomor 08 Tahun 2025 tentang Perubahan Atas Peraturan Bupati Penajam Paser Utara Nomor 13 Tahun 2024 tentang Besaran Penghasilan Tetap Kepala Desa dan Perangkat Desa, Serta Tunjangan Badan Permusyawaratan Desa;
              </li>
              <li class="pl-1">
                Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(nomorPerdes)} Tahun ${escapeHtml(tahunPerdes)} tentang Anggaran Pendapatan dan Belanja Desa ( APBDes ) Tahun Anggaran ${escapeHtml(tahunAnggaran)};
              </li>
              <li class="pl-1">
                Peraturan Kepala Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(nomorPerkades)} Tahun ${escapeHtml(tahunPerkades)} tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)};
              </li>
            </ol>
          </div>
        </div>
      </div>

      <!-- PARAGRAF PENGHUBUNG AKHIR HALAMAN 1 -->
      <div class="mt-4 text-[11px] text-justify leading-relaxed">
        <p class="indent-10">
          Memperhatikan dasar diatas dan setelah dilakukan chek list tentang Dokumen Persyaratan Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)} sesuai dengan
        </p>
      </div>

      <!-- FOOTER TTE RESMI BSrE HALAMAN 1 -->
      <div class="absolute bottom-4 left-8 right-8 text-[9px] text-neutral-800 leading-tight pt-2 border-t border-slate-200 flex justify-between items-end">
        <div class="max-w-[85%] text-left">
          Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik<br>
          yang diterbitkan oleh Balai Besar Sertifikasi Elektronik (BSrE), Badan Siber dan Sandi Negara (BSSN).
        </div>
        <div class="font-mono text-neutral-600 font-medium">
          1 / 2
        </div>
      </div>

    </div>

    <!-- PAGE BREAK CETAK -->
    <div class="page-break my-8 print:my-0"></div>

    <!-- ========================================================================= -->
    <!-- HALAMAN 2 SURAT REKOMENDASI GAJI / SILTAP -->
    <!-- ========================================================================= -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative print:shadow-none print:m-0 font-sans" id="suratHalaman2">
      
      <!-- SAMBUNGAN KALIMAT HALAMAN 1 -->
      <div class="text-[11px] text-justify leading-relaxed">
        <p>
          ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>

        <!-- IDENTITAS PENERIMA REKOMENDASI -->
        <div class="my-3 pl-8">
          <table class="border-collapse text-[11px] leading-relaxed">
            <tr>
              <td class="w-48 align-top py-0.5">Nama</td>
              <td class="w-3 align-top py-0.5">:</td>
              <td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Jabatan</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Nomor Rekening Kas Desa</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td>
            </tr>
          </table>
        </div>

        <!-- JUMLAH DANA DAN PERUNTUKAN -->
        <p class="indent-10">
          Untuk menerima (mengambil) Dana ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)} Sebesar <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <!-- PENGANTAR LAMPIRAN BERKAS PERSYARATAN -->
        <p class="indent-10 mt-2">
          Sebagai bahan pertimbangan, bersama ini kami lampirkan berkas-berkas persyaratan Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)} sebagai berikut:
        </p>

        <!-- 7 BERKAS PERSYARATAN RESMI -->
        <div class="my-2 pl-4">
          <ol class="list-decimal pl-4 space-y-0.5">
            ${AppState.berkasSiltap.map(item => `
              <li class="pl-1">${escapeHtml(item.teks)}</li>
            `).join('')}
          </ol>
        </div>

        <!-- KLAUSUL TANGGUNG JAWAB KADES & CAMAT -->
        <p class="indent-10 mt-2">
          Bahwa Camat hanya bertanggung jawab pada Verifikasi kelengkapan dokumen dan kebenaran substansi yang terdapat pada dokumen persyaratan tersebut merupakan tanggung jawab Kepala Desa ${escapeHtml(namaDesa)}.
        </p>

        <!-- PENUTUP -->
        <p class="indent-10 mt-2">
          Demikian Rekomendasi ini disampaikan sebagai bahan kebijakan lebih lanjut.
        </p>
      </div>

      <!-- TANDA TANGAN CAMAT WARU -->
      <div class="mt-4 flex justify-end text-[11.5px]">
        <div class="w-64 text-center">
          <div class="font-normal">
            Camat Waru,
          </div>

          <!-- AREA QR CODE BSrE RESMI -->
          <div class="h-24 flex items-center justify-center my-1">
            ${metodeTte === 'tte' ? `
              <div class="flex items-center justify-center">
                ${getQrCodeSvg()}
              </div>
            ` : `
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="absolute left-2 opacity-80 pointer-events-none transform -rotate-12">
                  ${getStempelKecamatanSvg()}
                </div>
                <div class="text-xs text-slate-400 italic">
                  (Tanda Tangan Basah)
                </div>
              </div>
            `}
          </div>

          <!-- NAMA & NIP CAMAT -->
          <div class="font-bold text-black">
            ${escapeHtml(namaCamat)}
          </div>
          <div class="text-[11px] font-mono text-black">
            NIP. ${escapeHtml(nipCamat)}
          </div>
        </div>
      </div>

      <!-- TEMBUSAN -->
      <div class="mt-4 text-[11px] text-black">
        <div class="font-bold underline mb-0.5">Tembusan :</div>
        <ol class="list-decimal pl-5 space-y-0.5 leading-tight">
          <li>Kepala Dinas Pemberdayaan Masyarakat dan Desa Kab. Penajam Paser Utara;</li>
          <li>Arsip.</li>
        </ol>
      </div>

      <!-- FOOTER TTE RESMI BSrE HALAMAN 2 -->
      <div class="absolute bottom-4 left-8 right-8 text-[9px] text-neutral-800 leading-tight pt-2 border-t border-slate-200 flex justify-between items-end">
        <div class="max-w-[85%] text-left">
          Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik<br>
          yang diterbitkan oleh Balai Besar Sertifikasi Elektronik (BSrE), Badan Siber dan Sandi Negara (BSSN).
        </div>
        <div class="font-mono text-neutral-600 font-medium">
          2 / 2
        </div>
      </div>

    </div>
  `;

  previewDoc.innerHTML = docHtml;
}

/**
 * -----------------------------------------------------------------------------------------
 * 2. RENDER SURAT REKOMENDASI APBDES REGULER
 * -----------------------------------------------------------------------------------------
 */
function renderLivePreviewReguler() {
  const previewDoc = document.getElementById('previewDocumentContainer');
  if (!previewDoc) return;

  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const kepalaDesa = document.getElementById('inputKepalaDesa')?.value || 'H. RAHMAN SALEH';
  const kaurKeuangan = document.getElementById('inputKaurKeuangan')?.value || 'MASNI';
  const bankPenyalur = 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru';
  const nomorRekening = document.getElementById('inputNomorRekening')?.value || '1131400337';

  const jenisDana = document.getElementById('selectJenisDana')?.value || 'ADD';
  const tahap = document.getElementById('selectTahap')?.value || 'Tahap I';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '0');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilangKapital(nominalAngka);

  const nomorSurat = document.getElementById('inputNomorSurat')?.value || '100.3.3.7 / 082 / Ekbang / V / 2026';
  const tanggalSurat = document.getElementById('inputTanggalSurat')?.value || '2026-05-25';
  const tanggalSuratIndo = formatTanggalIndo(tanggalSurat);

  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'tte';

  const perihal = `Rekomendasi Penyaluran ${jenisDana} ${tahap} Tahun Anggaran ${tahunAnggaran} Desa ${namaDesa}`;

  const docHtml = `
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative print:shadow-none print:m-0 font-sans" id="suratHalaman1">
      
      <!-- KOP SURAT -->
      <div class="kop-surat flex items-center justify-between pb-2 border-b-[3px] border-black relative">
        <div class="w-20 flex-shrink-0 flex items-center justify-center">
          ${getLogoPenajamSvg()}
        </div>
        <div class="flex-1 text-center px-1">
          <h3 class="text-[15px] font-bold uppercase tracking-wider text-black leading-tight">
            PEMERINTAH KABUPATEN PENAJAM PASER UTARA
          </h3>
          <h2 class="text-[17px] font-black uppercase tracking-wider text-black leading-tight mt-0.5">
            KECAMATAN WARU
          </h2>
          <p class="text-[11px] text-black leading-snug mt-1">
            Jalan Propinsi KM. 25, Telp. (0543) 5232668
          </p>
          <p class="text-[11px] text-black leading-snug">
            Website : <span class="text-blue-700 underline">https://kecwaru.penajamkab.go.id/</span>
          </p>
          <p class="text-[11px] text-black leading-snug">
            Email : <span class="text-blue-700 underline">kecamatanwaru2014@gmail.com</span> Pos 76284
          </p>
        </div>
        <div class="w-16 flex-shrink-0"></div>
      </div>

      <!-- KEPALA SURAT -->
      <div class="mt-4 flex justify-between text-[11.5px] leading-relaxed">
        <div class="w-[55%] pr-2">
          <table class="w-full border-collapse">
            <tr>
              <td class="w-16 align-top py-0.5">Nomor</td>
              <td class="w-3 align-top py-0.5">:</td>
              <td class="align-top py-0.5 font-medium">${escapeHtml(nomorSurat)}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Lampiran</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5">-</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Perihal</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5 text-justify leading-snug font-semibold">
                ${escapeHtml(perihal)}
              </td>
            </tr>
          </table>
        </div>

        <div class="w-[45%] pl-4 text-left">
          <div class="mb-3 text-right">
            Waru, ${tanggalSuratIndo}
          </div>
          <div class="leading-normal pl-4">
            <div>Kepada</div>
            <div class="font-normal">Yth. Bupati Penajam Paser Utara</div>
            <div class="pl-4 leading-tight">Up. Kepala Badan Keuangan</div>
            <div class="pl-4 leading-tight">dan Aset Daerah Kab. PPU</div>
            <div class="mt-0.5">di-</div>
            <div class="pl-6">Tempat</div>
          </div>
        </div>
      </div>

      <!-- ISI REGULER -->
      <div class="mt-4 text-[11.5px] text-justify leading-relaxed">
        <p class="indent-10">
          Berdasarkan hasil verifikasi berkas permohonan penyaluran yang diajukan oleh Pemerintah Desa <strong>${escapeHtml(namaDesa)}</strong>, bersama ini Camat Waru memberikan rekomendasi pencairan dana APBDes Tahun Anggaran ${escapeHtml(tahunAnggaran)} dengan rincian:
        </p>

        <div class="my-3 px-2">
          <table class="w-full border-collapse border border-black text-[11px]">
            <tbody>
              <tr class="border-b border-black">
                <td class="w-8 text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">1.</td>
                <td class="w-52 py-1 px-2 border-r border-black">Nama Desa</td>
                <td class="py-1 px-2 font-bold">: Desa ${escapeHtml(namaDesa)}, Kecamatan Waru</td>
              </tr>
              <tr class="border-b border-black">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">2.</td>
                <td class="py-1 px-2 border-r border-black">Sumber / Jenis Dana</td>
                <td class="py-1 px-2 font-bold">: ${escapeHtml(jenisDana)} (${escapeHtml(tahap)})</td>
              </tr>
              <tr class="border-b border-black bg-amber-50/40">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">3.</td>
                <td class="py-1 px-2 font-bold border-r border-black">Jumlah Dana Direkomendasikan</td>
                <td class="py-1 px-2 font-black text-[12px]">: ${nominalFormatted}</td>
              </tr>
              <tr class="border-b border-black">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">4.</td>
                <td class="py-1 px-2 border-r border-black">Terbilang</td>
                <td class="py-1 px-2 italic font-semibold">: "${terbilangText}"</td>
              </tr>
              <tr class="border-b border-black">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">5.</td>
                <td class="py-1 px-2 border-r border-black">Nomor Rekening Kas Desa (RKD)</td>
                <td class="py-1 px-2 font-mono font-bold">: ${escapeHtml(nomorRekening)} (${escapeHtml(bankPenyalur)})</td>
              </tr>
              <tr>
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">6.</td>
                <td class="py-1 px-2 border-r border-black">Kepala Desa / Bendahara</td>
                <td class="py-1 px-2">: ${escapeHtml(kepalaDesa)} / ${escapeHtml(kaurKeuangan)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="indent-10">
          Bahwa Camat hanya bertanggung jawab pada Verifikasi kelengkapan dokumen dan kebenaran substansi yang terdapat pada dokumen persyaratan tersebut merupakan tanggung jawab Kepala Desa ${escapeHtml(namaDesa)}.
        </p>

        <p class="indent-10 mt-2">
          Demikian Rekomendasi ini disampaikan sebagai bahan kebijakan lebih lanjut.
        </p>
      </div>

      <!-- TANDA TANGAN -->
      <div class="mt-6 flex justify-end text-[11.5px]">
        <div class="w-64 text-center">
          <div>Camat Waru,</div>
          <div class="h-24 flex items-center justify-center my-1">
            ${metodeTte === 'tte' ? getQrCodeSvg() : '<div class="text-xs text-slate-400 italic">(Tanda Tangan Basah)</div>'}
          </div>
          <div class="font-bold underline">${escapeHtml(namaCamat)}</div>
          <div class="text-[11px] font-mono">NIP. ${escapeHtml(nipCamat)}</div>
        </div>
      </div>

      <!-- TEMBUSAN -->
      <div class="mt-6 text-[11px]">
        <div class="font-bold underline mb-0.5">Tembusan :</div>
        <ol class="list-decimal pl-5 space-y-0.5 leading-tight">
          <li>Kepala Dinas Pemberdayaan Masyarakat dan Desa Kab. Penajam Paser Utara;</li>
          <li>Arsip.</li>
        </ol>
      </div>

      <!-- FOOTER -->
      <div class="absolute bottom-4 left-8 right-8 text-[9px] text-neutral-800 leading-tight pt-2 border-t border-slate-200 flex justify-between items-end">
        <div>
          Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik<br>
          yang diterbitkan oleh Balai Besar Sertifikasi Elektronik (BSrE), Badan Siber dan Sandi Negara (BSSN).
        </div>
        <div class="font-mono text-neutral-600">1 / 1</div>
      </div>

    </div>
  `;

  previewDoc.innerHTML = docHtml;
}

// =========================================================================================
// SVG LOGO, QR CODE BSrE, & STEMPEL
// =========================================================================================
function getLogoPenajamSvg() {
  return `
    <svg viewBox="0 0 100 125" class="w-16 h-20 filter drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10,10 L 90,10 L 90,70 C 90,100 50,120 50,120 C 50,120 10,100 10,70 Z" 
            fill="#FACC15" stroke="#1E293B" stroke-width="2.5" />
      <path d="M 16,16 L 84,16 L 84,68 C 84,94 50,112 50,112 C 50,112 16,94 16,68 Z" 
            fill="#059669" stroke="#FFFFFF" stroke-width="1.5" />
      <path d="M 22,50 L 78,50 L 78,65 C 78,85 50,104 50,104 C 50,104 22,85 22,65 Z" 
            fill="#DC2626" opacity="0.9" />
      <path d="M 15,35 Q 50,42 85,35 L 82,46 Q 50,53 18,46 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="1" />
      <text x="50" y="44" font-family="'Times New Roman', serif" font-weight="900" font-size="7.5" 
            fill="#0F172A" text-anchor="middle" letter-spacing="1">BENUO TAKA</text>
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

function getStempelKecamatanSvg() {
  return `
    <svg class="w-24 h-24 text-violet-800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="2,1" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="1.8" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.2" />
      <path id="curveAtas" d="M 18,50 A 32,32 0 1,1 82,50" fill="none" />
      <text font-size="7.5" font-family="sans-serif" font-weight="900" fill="currentColor" letter-spacing="1.2">
        <textPath href="#curveAtas" startOffset="50%" text-anchor="middle">
          KECAMATAN WARU
        </textPath>
      </text>
      <path id="curveBawah" d="M 82,50 A 32,32 0 0,1 18,50" fill="none" />
      <text font-size="6" font-family="sans-serif" font-weight="900" fill="currentColor" letter-spacing="0.8">
        <textPath href="#curveBawah" startOffset="50%" text-anchor="middle">
          KAB. PENAJAM PASER UTARA
        </textPath>
      </text>
      <text x="50" y="53" font-size="10" font-family="sans-serif" font-weight="bold" fill="currentColor" text-anchor="middle">★</text>
    </svg>
  `;
}

// =========================================================================================
// PRINTING & FORMAT KERTAS (FOLIO / F4 & A4)
// =========================================================================================
function applyPaperSize() {
  const size = AppState.paperSize;
  const sheets = document.querySelectorAll('.surat-sheet');
  
  sheets.forEach(sheet => {
    if (size === 'folio') {
      sheet.style.width = '215mm';
      sheet.style.minHeight = '330mm';
      sheet.style.padding = '18mm 20mm 15mm 22mm';
    } else {
      sheet.style.width = '210mm';
      sheet.style.minHeight = '297mm';
      sheet.style.padding = '16mm 18mm 15mm 20mm';
    }
  });
}

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
  window.print();
}

// =========================================================================================
// GOOGLE SHEETS & DATABASE OPERASIONAL
// =========================================================================================
async function saveRecommendationData() {
  const saveBtn = document.getElementById('btnSaveToDb');
  const originalText = saveBtn ? saveBtn.innerHTML : '';
  if (saveBtn) {
    saveBtn.innerHTML = `⏳ Menyimpan...`;
    saveBtn.disabled = true;
  }

  const data = getFormData();
  
  // 1. Simpan ke Local Storage
  AppState.riwayat.unshift(data);
  localStorage.setItem('sip_riwayat_rekom', JSON.stringify(AppState.riwayat));
  renderHistoryTable();

  // 2. Kirim ke Google Sheets jika URL tersedia
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    try {
      const response = await fetch(AppState.gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'simpanRekomendasi',
          ...data
        })
      });

      const resJson = await response.json();
      if (resJson.success) {
        showToast('Tersimpan di Google Sheets & Arsip Lokal!', 'success');
        AppState.isConnected = true;
      } else {
        showToast(`Tersimpan di lokal. Status Sheets: ${resJson.message}`, 'warning');
      }
    } catch (err) {
      showToast('Tersimpan di Arsip Lokal. (Koneksi Google Sheets offline)', 'info');
    }
  } else {
    showToast('Surat Rekomendasi berhasil disimpan ke Arsip Lokal!', 'success');
  }

  if (saveBtn) {
    saveBtn.innerHTML = originalText;
    saveBtn.disabled = false;
  }
}

function getFormData() {
  const isSiltap = AppState.tipeRekomendasi === 'siltap';
  const desa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const bulan = isSiltap ? (document.getElementById('selectBulanGaji')?.value || 'Juni') : '-';
  const tahun = document.getElementById('inputTahunAnggaran')?.value || '2026';

  const berkasChecked = [];
  document.querySelectorAll('.berkas-checkbox:checked').forEach(cb => {
    berkasChecked.push(cb.value);
  });

  return {
    id: 'REK-' + Date.now(),
    waktuSimpan: new Date().toLocaleString('id-ID'),
    nomorSurat: document.getElementById('inputNomorSurat')?.value || '',
    tanggalSurat: document.getElementById('inputTanggalSurat')?.value || '',
    namaDesa: desa,
    jenisDana: isSiltap ? 'ADD (Gaji/Siltap & Tunjangan)' : (document.getElementById('selectJenisDana')?.value || 'ADD'),
    tahap: isSiltap ? `Bulan ${bulan}` : (document.getElementById('selectTahap')?.value || 'Tahap I'),
    tahunAnggaran: tahun,
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
}

// Setup Modal Settings
function setupModalSettingsListeners() {
  const btnOpenSettings = document.getElementById('btnOpenSettings');
  const modalSettings = document.getElementById('modalGasSettings');
  const btnCloseSettings = document.getElementById('btnCloseSettings');
  const btnSaveSettings = document.getElementById('btnSaveGasSettings');
  const btnTestConn = document.getElementById('btnTestGasConnection');
  const btnSyncData = document.getElementById('btnSyncGasData');
  const btnCopyScript = document.getElementById('btnCopyGasScript');

  if (btnOpenSettings && modalSettings) {
    btnOpenSettings.addEventListener('click', () => {
      document.getElementById('inputGasUrl').value = AppState.gasUrl;
      modalSettings.classList.remove('hidden');
    });
  }

  if (btnCloseSettings && modalSettings) {
    btnCloseSettings.addEventListener('click', () => modalSettings.classList.add('hidden'));
  }

  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', () => {
      const url = document.getElementById('inputGasUrl').value.trim();
      AppState.gasUrl = url;
      localStorage.setItem('sip_gas_url', url);
      modalSettings.classList.add('hidden');
      showToast('Pengaturan Google Sheets disimpan.', 'success');
      testGasConnection(true);
    });
  }

  if (btnTestConn) {
    btnTestConn.addEventListener('click', () => {
      const url = document.getElementById('inputGasUrl').value.trim();
      AppState.gasUrl = url;
      testGasConnection(false);
    });
  }

  if (btnSyncData) {
    btnSyncData.addEventListener('click', () => fetchMasterAndHistoryFromSheets());
  }

  if (btnCopyScript) {
    btnCopyScript.addEventListener('click', () => copyGasScriptToClipboard());
  }
}

async function testGasConnection(isSilent = false) {
  const url = AppState.gasUrl;
  const statusEl = document.getElementById('statusGasTest');
  
  if (!url || !url.startsWith('http')) {
    if (statusEl) statusEl.innerHTML = '<span class="text-rose-600 font-semibold">❌ URL belum diisi!</span>';
    if (!isSilent) showToast('Harap masukkan URL Web App Google Apps Script', 'error');
    updateSyncStatusBadge(false);
    return;
  }

  if (statusEl) statusEl.innerHTML = '<span class="text-blue-600">⏳ Menghubungi Google Sheets...</span>';

  try {
    const pingUrl = url.includes('?') ? `${url}&action=ping` : `${url}?action=ping`;
    const response = await fetch(pingUrl, { method: 'GET' });
    const res = await response.json();

    if (res.success) {
      AppState.isConnected = true;
      if (statusEl) statusEl.innerHTML = `<span class="text-emerald-600 font-semibold">✅ Terhubung ke: "${res.spreadsheetName || 'Database PPU'}"</span>`;
      if (!isSilent) showToast('Koneksi Google Sheets Berhasil!', 'success');
      updateSyncStatusBadge(true);
    } else {
      throw new Error(res.error || 'Respon error');
    }
  } catch (err) {
    AppState.isConnected = false;
    if (statusEl) statusEl.innerHTML = `<span class="text-rose-600 font-semibold">❌ Gagal terhubung</span>`;
    if (!isSilent) showToast('Gagal terhubung ke Google Sheets', 'error');
    updateSyncStatusBadge(false);
  }
}

async function fetchMasterAndHistoryFromSheets() {
  if (!AppState.gasUrl) {
    showToast('Konfigurasi URL Google Sheets terlebih dahulu!', 'warning');
    return;
  }

  const syncBtn = document.getElementById('btnSyncGasData');
  if (syncBtn) {
    syncBtn.innerHTML = '⏳ Menarik Data...';
    syncBtn.disabled = true;
  }

  try {
    const urlRiwayat = AppState.gasUrl.includes('?') ? `${AppState.gasUrl}&action=getRiwayat` : `${AppState.gasUrl}?action=getRiwayat`;
    const resRiwayat = await fetch(urlRiwayat);
    const dataRiwayat = await resRiwayat.json();

    if (dataRiwayat.success && Array.isArray(dataRiwayat.data)) {
      AppState.riwayat = dataRiwayat.data.map(r => ({
        id: r['ID'],
        waktuSimpan: r['Waktu Simpan'],
        nomorSurat: r['Nomor Surat'],
        tanggalSurat: r['Tanggal Surat'],
        namaDesa: r['Nama Desa'],
        jenisDana: r['Jenis Dana'],
        tahap: r['Tahap'],
        tahunAnggaran: r['Tahun Anggaran'],
        nominalAngka: Number(r['Nominal (Rp)']) || 0,
        terbilang: r['Terbilang'],
        bankPenyalur: r['Bank Penyalur'],
        nomorRekening: r['Nomor Rekening RKD'],
        kepalaDesa: r['Kepala Desa'],
        kaurKeuangan: r['Kaur Keuangan'],
        namaCamat: r['Nama Camat'],
        nipCamat: r['NIP Camat'],
        metodeTte: r['Metode TTE / Tanda Tangan']?.includes('BSrE') ? 'tte' : 'manual',
        status: r['Status Penyaluran'] || 'Diterbitkan'
      }));
      localStorage.setItem('sip_riwayat_rekom', JSON.stringify(AppState.riwayat));
      renderHistoryTable();
      showToast('Riwayat berhasil disinkronkan dari Google Sheets!', 'success');
    }
  } catch (err) {
    showToast(`Gagal sinkronisasi data: ${err.message}`, 'error');
  }

  if (syncBtn) {
    syncBtn.innerHTML = '🔄 Tarik Master & Riwayat dari Google Sheets';
    syncBtn.disabled = false;
  }
}

function updateSyncStatusBadge(connected = AppState.isConnected) {
  const badge = document.getElementById('badgeSyncStatus');
  if (!badge) return;

  if (connected && AppState.gasUrl) {
    badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-300';
    badge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
      <span>Google Sheets Aktif</span>
    `;
  } else {
    badge.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-300';
    badge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-amber-500"></span>
      <span>Mode Database Lokal</span>
    `;
  }
}

function loadSavedSettings() {
  if (AppState.gasUrl) {
    testGasConnection(true);
  }
}

// Setup History Drawer
function setupHistoryDrawerListeners() {
  const btnOpenHistory = document.getElementById('btnOpenHistory');
  const drawerHistory = document.getElementById('drawerHistory');
  const btnCloseHistory = document.getElementById('btnCloseHistory');
  const inputSearchHistory = document.getElementById('inputSearchHistory');
  const btnExportCsv = document.getElementById('btnExportCsv');

  if (btnOpenHistory && drawerHistory) {
    btnOpenHistory.addEventListener('click', () => {
      renderHistoryTable();
      drawerHistory.classList.remove('hidden');
    });
  }

  if (btnCloseHistory && drawerHistory) {
    btnCloseHistory.addEventListener('click', () => drawerHistory.classList.add('hidden'));
  }

  if (inputSearchHistory) {
    inputSearchHistory.addEventListener('input', (e) => renderHistoryTable(e.target.value));
  }

  if (btnExportCsv) {
    btnExportCsv.addEventListener('click', () => exportHistoryToCsv());
  }
}

function renderHistoryTable(query = '') {
  const tbody = document.getElementById('tbodyRiwayat');
  const badgeCount = document.getElementById('badgeHistoryCount');
  if (!tbody) return;

  if (badgeCount) badgeCount.textContent = AppState.riwayat.length;

  let filtered = AppState.riwayat;
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(item => 
      (item.namaDesa && item.namaDesa.toLowerCase().includes(q)) ||
      (item.nomorSurat && item.nomorSurat.toLowerCase().includes(q)) ||
      (item.jenisDana && item.jenisDana.toLowerCase().includes(q)) ||
      (item.tahap && item.tahap.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-8 text-slate-400">
          Belum ada arsip surat rekomendasi ${query ? 'yang cocok dengan pencarian' : ''}.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map((item, index) => {
    return `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100">
        <td class="py-3 px-3 text-center text-slate-500 font-mono text-xs">${index + 1}</td>
        <td class="py-3 px-3">
          <div class="font-bold text-slate-900 text-xs">${escapeHtml(item.nomorSurat || '-')}</div>
          <div class="text-[11px] text-slate-500">${formatTanggalIndo(item.tanggalSurat)}</div>
        </td>
        <td class="py-3 px-3">
          <span class="font-bold text-slate-800 text-xs">Desa ${escapeHtml(item.namaDesa || '-')}</span>
        </td>
        <td class="py-3 px-3">
          <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
            ${escapeHtml(item.jenisDana || '-')}
          </span>
          <span class="text-[11px] text-slate-600 block mt-0.5">${escapeHtml(item.tahap || '')} TA ${escapeHtml(item.tahunAnggaran || '')}</span>
        </td>
        <td class="py-3 px-3 text-right font-mono font-bold text-xs text-emerald-800">
          ${formatRupiah(item.nominalAngka)}
        </td>
        <td class="py-3 px-3 text-center">
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800">
            ${escapeHtml(item.status || 'Diterbitkan')}
          </span>
        </td>
        <td class="py-3 px-3 text-center space-x-1 whitespace-nowrap">
          <button onclick="loadHistoryItem('${item.id}')" title="Muat ke Form & Preview"
                  class="px-2 py-1 text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 rounded border border-blue-200 transition">
            Muat
          </button>
          <button onclick="deleteHistoryItem('${item.id}')" title="Hapus Arsip"
                  class="px-2 py-1 text-xs bg-rose-50 text-rose-700 hover:bg-rose-100 rounded border border-rose-200 transition">
            Hapus
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function loadHistoryItem(id) {
  const item = AppState.riwayat.find(r => r.id === id);
  if (!item) return;

  if (item.namaDesa) document.getElementById('selectNamaDesa').value = item.namaDesa;
  if (item.kepalaDesa) document.getElementById('inputKepalaDesa').value = item.kepalaDesa;
  if (item.kaurKeuangan) document.getElementById('inputKaurKeuangan').value = item.kaurKeuangan;
  if (item.nomorRekening) document.getElementById('inputNomorRekening').value = item.nomorRekening;
  if (item.tahunAnggaran) document.getElementById('inputTahunAnggaran').value = item.tahunAnggaran;
  
  if (item.nominalAngka) {
    document.getElementById('inputNominalAngka').value = Number(item.nominalAngka).toLocaleString('id-ID');
    document.getElementById('outputTerbilang').textContent = convertTerbilangKapital(item.nominalAngka);
  }

  if (item.nomorSurat) document.getElementById('inputNomorSurat').value = item.nomorSurat;
  if (item.tanggalSurat) document.getElementById('inputTanggalSurat').value = item.tanggalSurat;

  autoUpdatePerihal();
  updateLivePreview();
  
  const drawer = document.getElementById('drawerHistory');
  if (drawer) drawer.classList.add('hidden');

  showToast(`Arsip ${item.nomorSurat} dimuat ke formulir!`, 'info');
}

function deleteHistoryItem(id) {
  if (!confirm('Yakin ingin menghapus arsip surat ini?')) return;
  AppState.riwayat = AppState.riwayat.filter(r => r.id !== id);
  localStorage.setItem('sip_riwayat_rekom', JSON.stringify(AppState.riwayat));
  renderHistoryTable();
  showToast('Arsip surat berhasil dihapus.', 'info');
}

function exportHistoryToCsv() {
  if (!AppState.riwayat || AppState.riwayat.length === 0) {
    showToast('Tidak ada data riwayat untuk diekspor.', 'warning');
    return;
  }

  const headers = ['ID', 'Waktu Simpan', 'Nomor Surat', 'Tanggal Surat', 'Desa', 'Jenis Dana', 'Tahap', 'Tahun', 'Nominal', 'Terbilang', 'Rekening', 'Kaur Keuangan', 'Status'];
  const rows = AppState.riwayat.map(item => [
    `"${item.id || ''}"`, `"${item.waktuSimpan || ''}"`, `"${item.nomorSurat || ''}"`, `"${item.tanggalSurat || ''}"`,
    `"${item.namaDesa || ''}"`, `"${item.jenisDana || ''}"`, `"${item.tahap || ''}"`, `"${item.tahunAnggaran || ''}"`,
    `"${item.nominalAngka || 0}"`, `"${(item.terbilang || '').replace(/"/g, '""')}"`, `"'${item.nomorRekening || ''}"`,
    `"${item.kaurKeuangan || ''}"`, `"${item.status || 'Diterbitkan'}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Riwayat_Rekomendasi_Waru_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('File CSV berhasil diunduh!', 'success');
}

// Layout Switcher
function setViewMode(mode) {
  AppState.viewMode = mode;
  const leftPanel = document.getElementById('panelFormKiri');
  const rightPanel = document.getElementById('panelPreviewKanan');
  if (!leftPanel || !rightPanel) return;

  if (mode === 'split') {
    leftPanel.classList.remove('hidden', 'w-full');
    leftPanel.classList.add('w-full', 'lg:w-[45%]', 'xl:w-[42%]');
    rightPanel.classList.remove('hidden', 'w-full');
    rightPanel.classList.add('w-full', 'lg:w-[55%]', 'xl:w-[58%]');
  } else if (mode === 'form') {
    leftPanel.classList.remove('hidden', 'lg:w-[45%]', 'xl:w-[42%]');
    leftPanel.classList.add('w-full');
    rightPanel.classList.add('hidden');
  } else if (mode === 'preview') {
    leftPanel.classList.add('hidden');
    rightPanel.classList.remove('hidden', 'lg:w-[55%]', 'xl:w-[58%]');
    rightPanel.classList.add('w-full');
  }

  ['btnViewSplit', 'btnViewForm', 'btnViewPreview'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('bg-slate-700', 'text-white');
  });
  const activeBtn = mode === 'split' ? 'btnViewSplit' : (mode === 'form' ? 'btnViewForm' : 'btnViewPreview');
  const btnEl = document.getElementById(activeBtn);
  if (btnEl) btnEl.classList.add('bg-slate-700', 'text-white');
}

// Toast
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  let bgClass = 'bg-slate-800 text-white';
  let icon = 'ℹ️';

  if (type === 'success') {
    bgClass = 'bg-emerald-700 text-white';
    icon = '✅';
  } else if (type === 'error') {
    bgClass = 'bg-rose-700 text-white';
    icon = '❌';
  } else if (type === 'warning') {
    bgClass = 'bg-amber-600 text-white';
    icon = '⚠️';
  }

  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-lg shadow-xl text-xs font-medium ${bgClass} transform transition-all duration-300 opacity-0 translate-y-2`;
  toast.innerHTML = `<span>${icon}</span><span class="flex-1">${escapeHtml(message)}</span>`;

  container.appendChild(toast);
  setTimeout(() => toast.classList.remove('opacity-0', 'translate-y-2'), 10);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function copyGasScriptToClipboard() {
  const scriptContent = `// Silakan lihat file google_apps_script.gs`;
  navigator.clipboard.writeText(scriptContent).then(() => {
    showToast('Silakan buka file google_apps_script.gs di folder aplikasi.', 'info');
  });
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
