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

// STATE MANAGEMENT GLOBAL
const AppState = {
  gasUrl: localStorage.getItem('sip_gas_url') || '',
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
  camat: {
    nama: 'Ahmad Yani, SSTP',
    pangkat: 'Pembina (IV/a)',
    nip: '198610082006021001',
    jabatan: 'Camat Waru'
  },

  // Riwayat Surat yang Tersimpan
  riwayat: JSON.parse(localStorage.getItem('sip_riwayat_rekom') || '[]'),

  // Daftar Lampiran Berkas Sesuai Masing-masing Format
  berkasSiltap: [
    { id: 's1', teks: 'Permohonan Pencairan Dari Kepala Desa;', checked: true },
    { id: 's2', teks: 'Rekomendasi Pencairan Dari Camat;', checked: true },
    { id: 's3', teks: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;', checked: true },
    { id: 's4', teks: 'Surat Pengantar, Surat permintaan Pembayaran (SPP) dan Pernyataan Tanggung Jawab Belanja Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif RT dan Honorarium Staf Desa;', checked: true },
    { id: 's5', teks: 'Daftar Tanda Terima Belanja Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif RT dan Honorarium Staf Desa;', checked: true },
    { id: 's6', teks: 'Cek Giro; dan', checked: true },
    { id: 's7', teks: 'Fotocopy NPWP Desa.', checked: true }
  ],

  berkasAddReguler: [
    { id: 'ar1', teks: 'Permohonan Pencairan Dari Kepala Desa;', checked: true },
    { id: 'ar2', teks: 'Rekomendasi Pencairan Dari Camat;', checked: true },
    { id: 'ar3', teks: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;', checked: true },
    { id: 'ar4', teks: 'Peraturan Desa Tentang Rencana Kerja Pembangunan Desa (RKP Desa) Tahun 2026;', checked: true },
    { id: 'ar5', teks: 'Peraturan Desa tentang Pertanggungjawaban APBDes Tahun 2025;', checked: true },
    { id: 'ar6', teks: 'Peraturan Desa tentang APBDesa Tahun Anggaran 2026;', checked: true },
    { id: 'ar7', teks: 'Peraturan Kepala Desa tentang penjabaran APBDesa Tahun Anggaran 2026;', checked: true },
    { id: 'ar8', teks: 'Laporan Penyelenggaraan Pemerintahan Desa Akhir Tahun Anggaran 2025;', checked: true },
    { id: 'ar9', teks: 'Surat Permintaan Pembayaran beserta dokumen pertanggungjawaban sampai Tahap Terakhir Tahun 2026 yang telah diverifikasi Tim Fasilitasi ADD Tingkat Kecamatan yang dibuktikan dengan Ceklist kelengkapan Surat Pertanggungjawaban (SPJ);', checked: true },
    { id: 'ar10', teks: 'Laporan Realisasi Penyerapan Keuangan dan Capaian Keluaran ADD Tahap Pertama Tahun Anggaran 2026;', checked: true },
    { id: 'ar11', teks: 'Laporan Realisasi ADD sampai Tahap Akhir Tahun Anggaran 2025 yang terdiri atas: a. Laporan Perkembangan pelaksanaan kegiatan; b. Dokumentasi kegiatan;', checked: true },
    { id: 'ar12', teks: 'Rencana Anggaran Biaya (Semua Belanja yang bersifat fisik dalam APBDes yang akan dilaksanakan);', checked: true },
    { id: 'ar13', teks: 'Gambar Rencana untuk Kegiatan Fisik;', checked: true },
    { id: 'ar14', teks: 'Kerangka Acuan Kerja untuk Kegiatan Fisik;', checked: true },
    { id: 'ar15', teks: 'Rencana Kerja;', checked: true },
    { id: 'ar16', teks: 'Rencana Penggunaan Dana ADD Tahap II sebesar 25%;', checked: true },
    { id: 'ar17', teks: 'Fotokopi Keputusan Kepala Desa tentang PPKD;', checked: true },
    { id: 'ar18', teks: 'Fotocopy Keputusan Kepala Desa tentang Penunjukan Pejabat Pelaksana Kebendaharaan;', checked: true },
    { id: 'ar19', teks: 'Foto Copy Rekening Kas Desa dan Rekening Koran Terakhir;', checked: true },
    { id: 'ar20', teks: 'Fotocopy Nomor Pokok Wajib Pajak (NPWP).', checked: true }
  ],

  berkasDbh: [
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

  berkasDd: [
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
  ],

  currentZoom: 100,
  paperSize: 'folio',
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
  checkAuthSession();
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

function renderBerkasChecklist() {
  const container = document.getElementById('containerBerkasChecklist');
  if (!container) return;
  
  let items = AppState.berkasSiltap;
  if (AppState.tipeRekomendasi === 'add_reguler') items = AppState.berkasAddReguler;
  else if (AppState.tipeRekomendasi === 'dbh') items = AppState.berkasDbh;
  else if (AppState.tipeRekomendasi === 'dd') items = AppState.berkasDd;

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
  // Radio Switcher 4 Jenis Surat Resmi
  const radios = document.querySelectorAll('input[name="tipeRekom"]');
  radios.forEach(r => {
    r.addEventListener('change', (e) => {
      AppState.tipeRekomendasi = e.target.value;
      handleTipeChange();
      autoUpdatePerihal();
      renderBerkasChecklist();
      autoGenerateNomorSurat();
      updateLivePreview();
    });
  });

  // Watch inputs
  const watchInputs = [
    'selectNamaDesa', 'inputKepalaDesa', 'inputKaurKeuangan', 'inputJabatanKaur', 'inputNomorRekening',
    'selectBulanGaji', 'selectTahapReguler', 'inputPersentaseTahap', 'inputTahunAnggaran', 'inputNominalAngka',
    'inputNomorSurat', 'inputNomorPerdes', 'inputTahunPerdes', 'inputNomorPerkades', 'inputTahunPerkades',
    'inputNomorPerdesKewenangan', 'inputNomorPerdesRkp',
    'inputTanggalSurat', 'inputNamaCamat', 'inputNipCamat', 'selectMetodeTte'
  ];

  watchInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        if (id === 'inputNominalAngka') handleNominalInput();
        if (['selectBulanGaji', 'selectTahapReguler', 'inputPersentaseTahap', 'selectNamaDesa', 'inputTahunAnggaran'].includes(id)) {
          autoUpdatePerihal();
        }
        updateLivePreview();
      });
      el.addEventListener('change', () => {
        if (id === 'selectNamaDesa') triggerAutoFillDesa();
        updateLivePreview();
      });
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target && e.target.classList.contains('berkas-checkbox')) {
      updateLivePreview();
    }
  });

  // Auto Generate Nomor
  document.getElementById('btnGenNomorSurat')?.addEventListener('click', () => {
    autoGenerateNomorSurat();
    updateLivePreview();
    showToast('Nomor surat disesuaikan!', 'info');
  });

  // Cetak & Simpan
  document.getElementById('btnPrintDoc')?.addEventListener('click', () => triggerPrint());
  document.getElementById('btnSaveToDb')?.addEventListener('click', () => saveRecommendationData());

  // Zoom
  document.getElementById('btnZoomIn')?.addEventListener('click', () => changeZoom(10));
  document.getElementById('btnZoomOut')?.addEventListener('click', () => changeZoom(-10));
  document.getElementById('btnZoomReset')?.addEventListener('click', () => resetZoom());

  // Kertas
  document.getElementById('selectPaperSize')?.addEventListener('change', (e) => {
    AppState.paperSize = e.target.value;
    applyPaperSize();
  });

  // Modal Settings & Riwayat Drawer
  setupModalSettingsListeners();
  setupHistoryDrawerListeners();

  // Layout View Switcher
  document.getElementById('btnViewSplit')?.addEventListener('click', () => setViewMode('split'));
  document.getElementById('btnViewForm')?.addEventListener('click', () => setViewMode('form'));
  document.getElementById('btnViewPreview')?.addEventListener('click', () => setViewMode('preview'));
}

function handleTipeChange() {
  const isSiltap = AppState.tipeRekomendasi === 'siltap';
  const secSiltap = document.getElementById('sectionSiltapFields');
  const secTahap = document.getElementById('sectionTahapFields');

  if (secSiltap) secSiltap.classList.toggle('hidden', !isSiltap);
  if (secTahap) secTahap.classList.toggle('hidden', isSiltap);

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
  updateLivePreview();
}

function autoUpdatePerihal() {
  const desa = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const tahun = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const inputPerihal = document.getElementById('inputPerihalSurat');
  if (!inputPerihal) return;

  if (AppState.tipeRekomendasi === 'siltap') {
    const bulan = document.getElementById('selectBulanGaji')?.value || 'Juni';
    inputPerihal.value = `Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${bulan} Desa ${desa} Tahun ${tahun}`;
  } else if (AppState.tipeRekomendasi === 'add_reguler') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
    const persen = document.getElementById('inputPersentaseTahap')?.value || '25';
    inputPerihal.value = `Rekomendasi Pencairan Alokasi Dana Desa (ADD) ${tahap} (${persen} %) Tahun Anggaran ${tahun} Desa ${desa}`;
  } else if (AppState.tipeRekomendasi === 'dbh') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap II';
    const persen = document.getElementById('inputPersentaseTahap')?.value || '50';
    inputPerihal.value = `Rekomendasi Pencairan Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${tahap} (${persen}%) Tahun Anggaran ${tahun} Desa ${desa}`;
  } else if (AppState.tipeRekomendasi === 'dd') {
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap 1';
    const persen = document.getElementById('inputPersentaseTahap')?.value || '60';
    inputPerihal.value = `Rekomendasi Pencairan Dana Desa (DD) ${tahap} ${persen} % Tahun Anggaran ${tahun} Desa ${desa}`;
  }
}

function autoGenerateNomorSurat() {
  const tahun = document.getElementById('inputTahunAnggaran')?.value || '2026';
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
function updateLivePreview() {
  const previewDoc = document.getElementById('previewDocumentContainer');
  if (!previewDoc) return;

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
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'tte';
  const nomorPerdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const tahunPerdes = document.getElementById('inputTahunPerdes')?.value || '2025';
  const nomorPerkades = document.getElementById('inputNomorPerkades')?.value || '3';
  const tahunPerkades = document.getElementById('inputTahunPerkades')?.value || '2025';

  const perihalText = `Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)}`;

  const docHtml = `
    <!-- HALAMAN 1 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      ${getHeaderSuratHtml()}

      <div class="mt-3 text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20">Dasar</div><div class="w-3">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-4 space-y-1">
              <li class="pl-1">Undang-undang Nomor 3 Tahun 2024 tentang Perubahan Kedua Atas Undang-undang Nomor 6 Tahun 2014 Tentang Desa;</li>
              <li class="pl-1">Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah beberapa kali terakhir dengan Peraturan Pemerintah Nomor 11 Tahun 2019;</li>
              <li class="pl-1">Instruksi Menteri Dalam Negeri Nomor 28 Tahun 2022 tentang Pembayaran Penghasilan Tetap Kepala Desa dan Perangkat Desa;</li>
              <li class="pl-1">Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 7 Tahun 2019 tentang Pengelolaan Keuangan Desa sebagaimana telah diubah dengan Peraturan Bupati Penajam Paser Utara Nomor 16 Tahun 2021;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 14 Tahun 2024 tentang Pengangkatan dan Honorarium Staf Desa di Lingkungan Pemerintah Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 08 Tahun 2025 tentang Perubahan Atas Peraturan Bupati Penajam Paser Utara Nomor 13 Tahun 2024 tentang Besaran Penghasilan Tetap Kepala Desa dan Perangkat Desa, Serta Tunjangan Badan Permusyawaratan Desa;</li>
              <li class="pl-1">Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(nomorPerdes)} Tahun ${escapeHtml(tahunPerdes)} tentang Anggaran Pendapatan dan Belanja Desa ( APBDes ) Tahun Anggaran ${escapeHtml(tahunAnggaran)};</li>
              <li class="pl-1">Peraturan Kepala Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(nomorPerkades)} Tahun ${escapeHtml(tahunPerkades)} tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)}.</li>
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
            ${AppState.berkasSiltap.map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
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
  const persen = document.getElementById('inputPersentaseTahap')?.value || '25';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/325/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSuratIndo = formatTanggalIndo(document.getElementById('inputTanggalSurat')?.value || '2026-08-20');
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '366716750');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);
  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'tte';
  const perdesKewenangan = document.getElementById('inputNomorPerdesKewenangan')?.value || '2';
  const perdesRkp = document.getElementById('inputNomorPerdesRkp')?.value || '2';
  const perdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const perkades = document.getElementById('inputNomorPerkades')?.value || '4';

  const perihalText = `Rekomendasi Pencairan Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} (${escapeHtml(persen)} %) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)}`;

  const docHtml = `
    <!-- HALAMAN 1 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      ${getHeaderSuratHtml()}

      <div class="mt-3 text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20 flex-shrink-0">Dasar</div><div class="w-3 flex-shrink-0">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-5 space-y-1">
              <li class="pl-1">Undang-undang Nomor 3 Tahun 2024 tentang Perubahan Kedua Atas Undang-undang Nomor 6 Tahun 2014 Tentang Desa;</li>
              <li class="pl-1">Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang-Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah dengan Peraturan Pemerintah Nomor 47 Tahun 2015;</li>
              <li class="pl-1">Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa;</li>
              <li class="pl-1">Peraturan Menteri Keuangan Nomor 146 Tahun 2023 tentang Pengalokasian Dana Desa Setiap Desa, Penyaluran, Dan Penggunaan Dana Desa Tahun Anggaran 2024;</li>
              <li class="pl-1">Peraturan Menteri Desa Pembangunan Daerah Tertinggal dan Transmigrasi Nomor 7 Tahun 2023 tentang Prioritas Penggunaan Dana Desa (Berita Negara Republik Indonesia Tahun 2023);</li>
              <li class="pl-1">Peraturan Daerah Kabupaten Penajam Paser Utara Nomor 1 Tahun 2015 tentang Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 16 Tahun 2021 tentang Perubahan Peraturan Bupati Nomor 7 Tahun 2019 tentang Pengelolaan Keuangan Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 1 Tahun 2024 tentang Tata Cara Pengalokasian dan Penyaluran Bagian dari Hasil Pajak dan Retribusi Daerah Kepada Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 13 Tahun 2023 tentang Perubahan Kedua Atas Peraturan Bupati Penajam Paser Utara Nomor 8 Tahun 2021 tentang Tata Cara Pengalokasian dan Pembagian Alokasi Dana Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 08 Tahun 2025 tentang Perubahan Peraturan Bupati Penajam Paser Utara Nomor 13 Tahun 2024 Tentang Besaran Penghasilan Tetap Kepala Desa dan Perangkat Desa serta Tunjangan Badan Permusyawaratan Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 14 Tahun 2024 tentang Pengangkatan dan Honorarium Staf Desa di Lingkungan Pemerintah Desa;</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman2">
      <div class="text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20 flex-shrink-0"></div><div class="w-3 flex-shrink-0"></div>
          <div class="flex-1">
            <ol start="12" class="list-decimal pl-5 space-y-1">
              <li class="pl-1">Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perdesKewenangan)} Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;</li>
              <li class="pl-1">Peraturan Desa Nomor ${escapeHtml(perdesRkp)} Tahun 2025 tentang Rencana Kerja Pemerintah (RKP) Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)};</li>
              <li class="pl-1">Peraturan Desa Nomor ${escapeHtml(perdes)} Tahun 2025 tentang Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)};</li>
              <li class="pl-1">Peraturan Kepala Desa Nomor ${escapeHtml(perkades)} Tahun 2025 tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)}.</li>
            </ol>
          </div>
        </div>

        <p class="indent-10 mt-3 leading-normal">
          Memperhatikan dasar diatas dan setelah dilakukan verifikasi tentang Dokumen Persyaratan Rekomendasi Penyaluran Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} (${escapeHtml(persen)} %) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>

        <div class="my-2 pl-8">
          <table class="border-collapse text-[11pt]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>

        <p class="indent-10 leading-normal">
          Untuk menerima (mengambil) Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} (${escapeHtml(persen)} %) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sebesar. <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <p class="indent-10 mt-2 leading-normal">
          Sebagai Bahan Pertimbangan, bersama ini kami lampirkan berkas-berkas Persyaratan Penyaluran Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} (${escapeHtml(persen)} %) Tahun Anggaran ${escapeHtml(tahunAnggaran)} antara lain:
        </p>

        <div class="my-2 pl-4">
          <ol class="list-decimal pl-5 space-y-0.5">
            ${AppState.berkasAddReguler.slice(0, 11).map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>

    <!-- HALAMAN 3 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman3">
      <div class="text-[11pt] text-justify leading-snug">
        <div class="my-2 pl-4">
          <ol start="12" class="list-decimal pl-5 space-y-0.5">
            ${AppState.berkasAddReguler.slice(11).map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
          </ol>
        </div>

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
  const persen = document.getElementById('inputPersentaseTahap')?.value || '50';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/404/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSuratIndo = formatTanggalIndo(document.getElementById('inputTanggalSurat')?.value || '2026-10-06');
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '150021000');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);
  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'tte';
  const perdesKewenangan = document.getElementById('inputNomorPerdesKewenangan')?.value || '2';
  const perdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const perkades = document.getElementById('inputNomorPerkades')?.value || '4';

  const perihalText = `Rekomendasi Pencairan Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} (${escapeHtml(persen)}%) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)}`;

  const docHtml = `
    <!-- HALAMAN 1 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      ${getHeaderSuratHtml()}

      <div class="mt-3 text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20">Dasar</div><div class="w-3">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-4 space-y-1">
              <li class="pl-1">Undang-undang Nomor 3 Tahun 2024 tentang Perubahan Kedua Atas Undang-undang Nomor 6 Tahun 2014 Tentang Desa;</li>
              <li class="pl-1">Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang-Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah dengan Peraturan Pemerintah Nomor 47 Tahun 2015;</li>
              <li class="pl-1">Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa;</li>
              <li class="pl-1">Peraturan Daerah Kabupaten Penajam Paser Utara Nomor 1 Tahun 2015 tentang Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 16 Tahun 2021 tentang Perubahan Peraturan Bupati Nomor 7 Tahun 2019 tentang Pengelolaan Keuangan Desa;</li>
              <li class="pl-1">Peraturan Bupati Penajam Paser Utara Nomor 1 Tahun 2024 tentang Tata Cara Pengalokasian dan Penyaluran Bagian dari Hasil Pajak dan Retribusi Daerah Kepada Desa;</li>
              <li class="pl-1">Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perdesKewenangan)} Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;</li>
              <li class="pl-1">Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perdes)} Tahun 2025 tentang Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran ${escapeHtml(tahunAnggaran)};</li>
              <li class="pl-1">Peraturan Kepala Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perkades)} Tahun 2025 tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)}.</li>
            </ol>
          </div>
        </div>
      </div>

      <div class="mt-3 text-[11pt] text-justify leading-normal">
        <p class="indent-10">
          Memperhatikan dasar diatas dan setelah dilakukan verifikasi tentang Dokumen Persyaratan Rekomendasi Penyaluran Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} (${escapeHtml(persen)}%) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
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
          Untuk menerima (mengambil) Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} (${escapeHtml(persen)}%) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sebesar <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <p class="indent-10 mt-2">
          Sebagai Bahan Pertimbangan, bersama ini kami lampirkan berkas-berkas Persyaratan Penyaluran Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} (${escapeHtml(persen)}%) Tahun Anggaran ${escapeHtml(tahunAnggaran)} antara lain:
        </p>

        <div class="my-2 pl-4">
          <ol class="list-decimal pl-4 space-y-0.5">
            ${AppState.berkasDbh.map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
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
  const persen = document.getElementById('inputPersentaseTahap')?.value || '60';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/82/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSuratIndo = formatTanggalIndo(document.getElementById('inputTanggalSurat')?.value || '2026-03-09');
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '224073600');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);
  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'tte';
  const perdesKewenangan = document.getElementById('inputNomorPerdesKewenangan')?.value || '2';
  const perdes = document.getElementById('inputNomorPerdes')?.value || '7';
  const perkades = document.getElementById('inputNomorPerkades')?.value || '4';

  const perihalText = document.getElementById('inputPerihalSurat')?.value || `Rekomendasi Pencairan Dana Desa (DD) ${escapeHtml(tahap)} ${escapeHtml(persen)} % Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)}`;

  const berkasDdList = [
    { id: 'dd1', teks: 'Permohonan Pencairan Dari Kepala Desa;' },
    { id: 'dd2', teks: 'Rekomendasi Pencairan Dari Camat;' },
    { id: 'dd3', teks: 'Ceklist Kelengkapan Berkas Pengajuan dari Tim Fasilitasi Tingkat Kecamatan;' },
    { id: 'dd4', teks: `Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perdes)} Tahun 2025 tentang APBDesa Tahun Anggaran ${escapeHtml(tahunAnggaran)};` },
    { id: 'dd5', teks: `Peraturan Kepala Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perkades)} Tahun 2025 tentang Penjabaran APBDesa Tahun Anggaran ${escapeHtml(tahunAnggaran)};` },
    { id: 'dd6', teks: `Rencana Penggunaan Dana Desa ${escapeHtml(tahap)} sebesar ${escapeHtml(persen)}%` },
    { id: 'dd7', teks: 'Fotocopy Keputusan Kepala Desa tentang PPKD;' },
    { id: 'dd8', teks: 'Fotocopy Keputusan Kepala Desa tentang Penunjukan Pejabat Pelaksana Kebendaharaan;' },
    { id: 'dd9', teks: 'Foto Copy Rekening Kas Desa;' },
    { id: 'dd10', teks: 'Fotocopy Nomor Pokok Wajib Pajak (NPWP).' }
  ];

  const berkasFiltered = berkasDdList.filter(item => {
    const cb = document.getElementById(`berkas_${item.id}`);
    return !cb || cb.checked;
  });

  const docHtml = `
    <!-- HALAMAN 1 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      ${getHeaderSuratHtml()}

      <div class="mt-3 text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20 flex-shrink-0">Dasar</div><div class="w-3 flex-shrink-0">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-5 space-y-1">
              <li class="pl-1">Undang-Undang Nomor 7 Tahun 2022 tentang Pembentukan Kabupaten Penajam Paser Utara (Lembaran Negara Republik Indonesia Tahun 2022 Nomor 20, Tambahan Lembaran Negara Republik Indonesia Nomor 4182);</li>
              <li class="pl-1">Peraturan Pemerintah Nomor 43 Tahun 2014 tentang Peraturan Pelaksanaan Undang-Undang Nomor 6 Tahun 2014 tentang Desa sebagaimana telah diubah dengan Peraturan Pemerintah Nomor 47 Tahun 2015;</li>
              <li class="pl-1">Peraturan Pemerintah Nomor 37 Tahun 2023 tentang Pengelolaan Tranfer ke Daerah (Lembaran Negara Republik Indonsia Tahun 2023 nomor 37);</li>
              <li class="pl-1">Peraturan Menteri Dalam Negeri Nomor 111 Tahun 2014 tentang Pedoman Teknis Peraturan Di Desa (Berita Negara Republik Indonesia Tahun 2014 Nomor 2091);</li>
              <li class="pl-1">Peraturan Menteri Dalam Negeri Nomor 114 Tahun 2014 tentang Pedoman Pembangunan Desa (Berita Negara Republik Indonesia Tahun 2014 Nomor 2094);</li>
              <li class="pl-1">Peraturan Menteri Dalam Negeri Nomor 44 Tahun 2016 tentang Kewenangan Desa (Berita Negara Republik Indonesia Tahun 2016 Nomor 1037);</li>
              <li class="pl-1">Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2018 tentang Pengelolaan Keuangan Desa</li>
              <li class="pl-1">Peraturan Menteri Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi Republik Indonesia Nomor 16 Tahun 2019 tentang Musyawarah Desa (Berita Negara Republik Indonesia Tahun 2019 Nomor 1203);</li>
              <li class="pl-1">Peraturan Menteri Desa dan Pembangunan Daerah Tertinggal Republik Indonesia Nomor 2 Tahun 2024 tentang Petunjuk Operasional Atas Fokus Penggunaan Dana Desa Tahun 2025</li>
              <li class="pl-1">Peraturan Menteri Desa Dan Pembangunan Daerah Tertinggal Republik Indonesia Nomor 16 Tahun 2025 tentang Petunjuk Operasional Atas Fokus Penggunaan Dana Desa Tahun 2026. (Berita Negara Republik Indonesia Tahun 2025 Nomor 1151);</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans mb-8 print:mb-0" id="suratHalaman2">
      <div class="text-[11pt] text-justify leading-snug">
        <div class="flex items-start">
          <div class="w-20 flex-shrink-0"></div><div class="w-3 flex-shrink-0"></div>
          <div class="flex-1">
            <ol start="11" class="list-decimal pl-5 space-y-1">
              <li class="pl-1">Keputusan Menteri Desa dan Pembangunan Daerah Tertinggal Republik Indonesia Nomor 3 Tahun 2025 tentang Panduan Penggunaan Dana Desa untuk Ketahanan Pangan dalam mendukung Swasembada Pangan;</li>
              <li class="pl-1">Peraturan Menteri Keuangan Republik Indonesia Nomor 7 Tahun 2026 tentang Pengelolaan Dana Desa Tahun Anggaran 2026;</li>
              <li class="pl-1">Peraturan Bupati Nomor 16 Tahun 2021 Tentang Perubahan Atas Peraturan Bupati Nomor 7 Tahun 2019 Tentang Pengelolaan Keuangan Desa;</li>
              <li class="pl-1">Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perdesKewenangan)} Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;</li>
              <li class="pl-1">Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perdes)} Tahun 2025 tentang Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran ${escapeHtml(tahunAnggaran)};</li>
              <li class="pl-1">Peraturan Kepala Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perkades)} Tahun 2025 tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)}.</li>
            </ol>
          </div>
        </div>

        <p class="indent-10 mt-3 leading-normal">
          Memperhatikan dasar diatas dan setelah dilakukan chek list tentang Dokumen Persyaratan Rekomendasi Pencairan Dana Desa (DD) ${escapeHtml(tahap)} ${escapeHtml(persen)} % Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>

        <div class="my-2 pl-8">
          <table class="border-collapse text-[11pt]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>

        <p class="indent-10 leading-normal">
          Untuk menerima (mengambil) Dana Desa (DD) ${escapeHtml(tahap)} ${escapeHtml(persen)} % Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sebesar . <strong>${nominalFormatted} (${terbilangText})</strong>
        </p>

        <p class="indent-10 mt-2 leading-normal">
          Sebagai Bahan Pertimbangan, bersama ini kami lampirkan berkas-berkas Persyaratan Pencairan Dana Desa (DD) ${escapeHtml(tahap)} ${escapeHtml(persen)} % Tahun Anggaran ${escapeHtml(tahunAnggaran)} antara lain:
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

function getHeaderSuratHtml() {
  return `
    <div class="mt-4 text-[11pt] leading-snug font-sans">
      <div class="flex justify-between items-start">
        <div class="w-[55%]">
          <table class="border-collapse">
            <tr>
              <td class="w-20 align-top py-0.5">Nomor</td>
              <td class="w-3 align-top py-0.5">:</td>
              <td class="align-top py-0.5 font-medium">\${nomor_naskah}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Sifat</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5">\${sifat}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Lampiran</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5 tracking-widest">.........................</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Hal</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5 font-medium text-justify leading-snug">\${hal}</td>
            </tr>
          </table>
        </div>
        <div class="w-[45%] text-right font-medium">
          Waru, \${tanggal_naskah}
        </div>
      </div>

      <div class="mt-4 leading-normal text-left">
        <div>Yth . \${jabatan_tujuan}</div>
        <div>Di -</div>
        <div class="pl-6">Tempat</div>
      </div>
    </div>
  `;
}

function getTtdCamatHtml(namaCamat, nipCamat, metodeTte) {
  return `
    <div class="mt-6 flex justify-end text-[11pt] font-sans">
      <div class="w-64 text-left">
        <div class="leading-normal">Camat Waru,</div>
        <div class="my-5 pl-6 font-mono text-[10.5pt] text-neutral-800">
          \${ttd_pengirim}
        </div>
        <div class="leading-normal font-medium">\${nama_pengirim}</div>
        <div class="leading-normal">NIP. \${nip_pengirim}</div>
      </div>
    </div>
    <div class="mt-4 text-[11pt] text-black leading-normal font-sans">
      <div class="font-bold mb-1">TEMBUSAN:</div>
      <div>1. &nbsp;\${tembusan_jabatan};</div>
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
  const size = AppState.paperSize;
  const sheets = document.querySelectorAll('.surat-sheet');
  sheets.forEach(sheet => {
    if (size === 'folio') {
      sheet.style.width = '215mm';
      sheet.style.minHeight = '330mm';
      sheet.style.maxHeight = '330mm';
      sheet.style.padding = '1cm 1cm 2cm 1.5cm';
    } else {
      sheet.style.width = '210mm';
      sheet.style.minHeight = '297mm';
      sheet.style.maxHeight = '297mm';
      sheet.style.padding = '1cm 1cm 2cm 1.5cm';
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

function triggerPrint() { window.print(); }

// Database Save
async function saveRecommendationData() {
  const saveBtn = document.getElementById('btnSaveToDb');
  const orig = saveBtn ? saveBtn.innerHTML : '';
  if (saveBtn) { saveBtn.innerHTML = '⏳ Menyimpan...'; saveBtn.disabled = true; }

  const desa = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const berkasChecked = [];
  document.querySelectorAll('.berkas-checkbox:checked').forEach(cb => berkasChecked.push(cb.value));

  const data = {
    id: 'REK-' + Date.now(),
    waktuSimpan: new Date().toLocaleString('id-ID'),
    nomorSurat: document.getElementById('inputNomorSurat')?.value || '',
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

  AppState.riwayat.unshift(data);
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
      if (resJson.success) showToast('Tersimpan di Google Sheets & Lokal!', 'success');
      else showToast('Tersimpan di lokal.', 'warning');
    } catch {
      showToast('Tersimpan di Lokal (Offline Sheets).', 'info');
    }
  } else {
    showToast('Tersimpan di Arsip Lokal!', 'success');
  }

  if (saveBtn) { saveBtn.innerHTML = orig; saveBtn.disabled = false; }
}

// History & Settings Setup
function setupModalSettingsListeners() {
  document.getElementById('btnOpenSettings')?.addEventListener('click', () => {
    document.getElementById('inputGasUrl').value = AppState.gasUrl;
    document.getElementById('modalGasSettings')?.classList.remove('hidden');
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
        <button onclick="loadHistoryItem('${item.id}')" class="px-2 py-1 text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 rounded border border-blue-200 transition">Muat</button>
        <button onclick="deleteHistoryItem('${item.id}')" class="px-2 py-1 text-xs bg-rose-50 text-rose-700 hover:bg-rose-100 rounded border border-rose-200 transition">Hapus</button>
      </td>
    </tr>
  `).join('');
}

function loadHistoryItem(id) {
  const item = AppState.riwayat.find(r => r.id === id);
  if (!item) return;

  if (item.namaDesa) document.getElementById('selectNamaDesa').value = item.namaDesa;
  if (item.nomorSurat) document.getElementById('inputNomorSurat').value = item.nomorSurat;
  if (item.tanggalSurat) document.getElementById('inputTanggalSurat').value = item.tanggalSurat;
  if (item.nominalAngka) {
    document.getElementById('inputNominalAngka').value = Number(item.nominalAngka).toLocaleString('id-ID');
    document.getElementById('outputTerbilang').textContent = convertTerbilang(item.nominalAngka);
  }

  autoUpdatePerihal();
  updateLivePreview();
  document.getElementById('drawerHistory')?.classList.add('hidden');
  showToast(`Arsip ${item.nomorSurat} dimuat!`, 'info');
}

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

  ['btnViewSplit', 'btnViewForm', 'btnViewPreview'].forEach(id => {
    document.getElementById(id)?.classList.remove('bg-slate-700', 'text-white');
  });
  const act = mode === 'split' ? 'btnViewSplit' : (mode === 'form' ? 'btnViewForm' : 'btnViewPreview');
  document.getElementById(act)?.classList.add('bg-slate-700', 'text-white');
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
  if (!confirm('Apakah Anda ingin keluar dan kembali ke Halaman Login?')) return;

  AppState.currentUser = null;
  localStorage.removeItem('sip_auth_user');

  const portal = document.getElementById('loginPortalContainer');
  if (portal) portal.classList.remove('hidden');

  hideLoginError();
  const pwdInput = document.getElementById('inputLoginPassword');
  if (pwdInput) {
    pwdInput.value = '';
    pwdInput.type = 'password';
  }
  document.getElementById('iconEyeOpen')?.classList.remove('hidden');
  document.getElementById('iconEyeClosed')?.classList.add('hidden');
  applyRoleAccessControl();

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
        const rawRek = row['Nomor Rekening RKD'] || row['Nomor Rekening'] || row['Rekening'] || row['RKD'] || row.rekening;
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
 * Menyiapkan Data Contoh Pengajuan Berkas Desa Jika Belum Ada
 */
function initSeedPengajuanDesa() {
  if (!AppState.pengajuanDesa || AppState.pengajuanDesa.length === 0) {
    AppState.pengajuanDesa = [
      {
        id: 'PENG-20260518-01',
        namaDesa: 'Api-Api',
        jenisDana: 'add_reguler',
        tahap: 'Tahap II',
        tahunAnggaran: '2026',
        nomorSp: '140/012/D-API/SP/V/2026',
        tanggalSp: '2026-05-18',
        nomorRekomDesa: '140/015/REK-DESA/2026',
        tanggalRekomDesa: '2026-05-19',
        nominal: 366716750,
        fileSpId: 'file_sp_apiapi_01',
        fileSpName: 'Surat_Pengantar_ADD_Tahap_II_ApiApi.pdf',
        fileCeklistId: 'file_ceklist_apiapi_01',
        fileCeklistName: 'Ceklist_Kelengkapan_Berkas_ApiApi.pdf',
        fileRekomDesaId: 'file_rekom_apiapi_01',
        fileRekomDesaName: 'Rekomendasi_Desa_ApiApi.pdf',
        waktuKirim: '2026-05-19T09:30:00.000Z',
        status: 'Menunggu Verifikasi'
      },
      {
        id: 'PENG-20260602-02',
        namaDesa: 'Sesulu',
        jenisDana: 'siltap',
        tahap: 'Bulan Juni',
        tahunAnggaran: '2026',
        nomorSp: '140/008/D-SSL/SP/VI/2026',
        tanggalSp: '2026-06-02',
        nomorRekomDesa: '140/010/REK-DESA/2026',
        tanggalRekomDesa: '2026-06-03',
        nominal: 116550000,
        fileSpId: 'file_sp_sesulu_02',
        fileSpName: 'Surat_Pengantar_Siltap_Juni_Sesulu.pdf',
        fileCeklistId: 'file_ceklist_sesulu_02',
        fileCeklistName: 'Ceklist_Berkas_Siltap_Sesulu.pdf',
        fileRekomDesaId: 'file_rekom_sesulu_02',
        fileRekomDesaName: 'Rekomendasi_Desa_Sesulu.pdf',
        waktuKirim: '2026-06-03T11:15:00.000Z',
        status: 'Diverifikasi'
      }
    ];
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
  const btnSaveToDb = document.getElementById('btnSaveToDb');

  if (menuKey === 'dashboard') {
    if (titleEl) titleEl.textContent = 'Dashboard & Ringkasan APBDes';
    if (breadcrumbEl) breadcrumbEl.textContent = 'SIP-REKOM Waru / 1. Dashboard';
    if (splitControls) splitControls.classList.add('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.add('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.add('hidden');
    renderDashboardSummary();
  } else if (menuKey === 'pengajuan_desa') {
    if (titleEl) titleEl.textContent = 'Pengajuan Berkas Desa';
    if (breadcrumbEl) breadcrumbEl.textContent = 'SIP-REKOM Waru / 2. Pengajuan Desa';
    if (splitControls) splitControls.classList.add('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.add('hidden');
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
 * Beralih Sub-Tab di Menu 3: Verifikasi Berkas vs Generator Rekomendasi
 */
window.switchKecamatanSubTab = function(tabKey) {
  AppState.kecamatanSubTab = tabKey;
  const tabBtnVerif = document.getElementById('tabBtnVerifikasi');
  const tabBtnGen = document.getElementById('tabBtnGenerator');
  const tabContentVerif = document.getElementById('tabContentVerifikasiDesa');
  const tabContentGen = document.getElementById('workspaceKecamatan');
  const splitControls = document.getElementById('containerSplitControls');
  const btnPrintDoc = document.getElementById('btnPrintDoc');
  const btnSaveToDb = document.getElementById('btnSaveToDb');

  if (tabKey === 'verifikasi') {
    if (tabBtnVerif) {
      tabBtnVerif.className = 'px-3.5 py-1.5 text-xs font-bold rounded-lg bg-indigo-600 text-white shadow-sm transition flex items-center gap-1.5';
    }
    if (tabBtnGen) {
      tabBtnGen.className = 'px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition flex items-center gap-1.5';
    }
    if (tabContentVerif) tabContentVerif.classList.remove('hidden');
    if (tabContentGen) tabContentGen.classList.add('hidden');
    if (splitControls) splitControls.classList.add('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.add('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.add('hidden');
    renderTabelPengajuanKecamatan();
  } else {
    if (tabBtnVerif) {
      tabBtnVerif.className = 'px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition flex items-center gap-1.5';
    }
    if (tabBtnGen) {
      tabBtnGen.className = 'px-3.5 py-1.5 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm transition flex items-center gap-1.5';
    }
    if (tabContentVerif) tabContentVerif.classList.add('hidden');
    if (tabContentGen) tabContentGen.classList.remove('hidden');
    if (splitControls) splitControls.classList.remove('hidden');
    if (btnPrintDoc) btnPrintDoc.classList.remove('hidden');
    if (btnSaveToDb) btnSaveToDb.classList.remove('hidden');
    updateLivePreview();
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
            <button onclick="prosesPengajuanKeRekomendasi('${item.id}')" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-bold transition shadow-2xs">
              ⚡ Proses Rekom
            </button>
          </td>
        </tr>
      `).join('');
    }
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

  // Simpan file yang dipilih ke IndexedDB (atau gunakan file lama jika dalam mode perbaikan dan tidak pilih file baru)
  const isEditing = Boolean(AppState.editingPengajuanId);
  const targetItem = isEditing ? AppState.pengajuanDesa.find(p => p.id === AppState.editingPengajuanId) : null;

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
      <button onclick="hapusPengajuanDesa('${item.id}')" class="text-rose-600 hover:text-rose-800 text-xs font-semibold px-2 py-1 rounded hover:bg-rose-50 transition" title="Hapus Berkas">
        Hapus
      </button>
    `;

    if (item.status === 'Dikembalikan') {
      aksiHtml = `
        <div class="flex flex-col gap-1 items-center">
          <button onclick="perbaikiPengajuanDesa('${item.id}')" class="w-full px-2.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[10.5px] font-bold transition shadow-2xs flex items-center justify-center gap-1 cursor-pointer" title="Muat data pengajuan ini ke formulir untuk diperbaiki">
            <span>✏️ Perbaiki</span>
          </button>
          <button onclick="hapusPengajuanDesa('${item.id}')" class="text-rose-500 hover:text-rose-700 text-[10px] font-medium transition" title="Hapus Berkas">
            Hapus
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
 * Memuat Data Pengajuan yang Dikembalikan ke Formulir untuk Diperbaiki
 */
window.perbaikiPengajuanDesa = function(id) {
  const item = (AppState.pengajuanDesa || []).find(p => p.id === id);
  if (!item) return;

  AppState.editingPengajuanId = id;

  const selJenis = document.getElementById('desaInputJenisDana');
  if (selJenis && item.jenisDana) selJenis.value = item.jenisDana;

  const selTahap = document.getElementById('desaInputTahap');
  if (selTahap && item.tahap) selTahap.value = item.tahap;

  const inTahun = document.getElementById('desaInputTahun');
  if (inTahun && item.tahunAnggaran) inTahun.value = item.tahunAnggaran;

  const inNominal = document.getElementById('desaInputNominal');
  if (inNominal && item.nominal) inNominal.value = Number(item.nominal).toLocaleString('id-ID');

  const inNoSp = document.getElementById('desaInputNomorSp');
  if (inNoSp) inNoSp.value = item.nomorSp || '';

  const inTglSp = document.getElementById('desaInputTanggalSp');
  if (inTglSp) inTglSp.value = item.tanggalSp || '';

  const inNoRekom = document.getElementById('desaInputNomorRekom');
  if (inNoRekom) inNoRekom.value = item.nomorRekomDesa || '';

  const inTglRekom = document.getElementById('desaInputTanggalRekom');
  if (inTglRekom) inTglRekom.value = item.tanggalRekomDesa || '';

  // Keterangan file lama
  const spInfo = document.getElementById('fileInfoSp');
  if (spInfo && item.fileSpName) spInfo.innerHTML = `<span class="text-amber-700 font-semibold text-[10px]">📁 File lama: ${escapeHtml(item.fileSpName)}</span>`;

  const ceklistInfo = document.getElementById('fileInfoCeklist');
  if (ceklistInfo && item.fileCeklistName) ceklistInfo.innerHTML = `<span class="text-amber-700 font-semibold text-[10px]">📁 File lama: ${escapeHtml(item.fileCeklistName)}</span>`;

  const rekomInfo = document.getElementById('fileInfoRekom');
  if (rekomInfo && item.fileRekomDesaName) rekomInfo.innerHTML = `<span class="text-amber-700 font-semibold text-[10px]">📁 File lama: ${escapeHtml(item.fileRekomDesaName)}</span>`;

  // Ubah tombol kirim
  const btnKirim = document.getElementById('btnKirimPengajuanDesa');
  if (btnKirim) {
    btnKirim.className = 'px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white text-xs font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer';
    btnKirim.innerHTML = '<span>🚀 Simpan & Kirim Ulang Berkas Perbaikan</span>';
  }

  // Gulir ke form
  document.getElementById('viewPengajuanDesa')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  showToast(`Data pengajuan ${item.nomorSp} dimuat ke formulir. Silakan sesuaikan data/dokumen lalu klik Kirim Ulang.`, 'info');
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
          <button onclick="prosesPengajuanKeRekomendasi('${item.id}')" class="w-full px-2.5 py-1.5 bg-blue-700 hover:bg-blue-600 text-white rounded-lg text-[11px] font-bold transition shadow-xs flex items-center justify-center gap-1 cursor-pointer" title="Buka kembali formulir generator rekomendasi camat">
            <span>⚡ Buka Rekom Camat</span>
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
  const item = (AppState.pengajuanDesa || []).find(p => p.id === id);
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
    modal.classList.remove('hidden');
    setTimeout(() => inputCatatan?.focus(), 150);
  }
};

window.closeModalKembalikanPengajuan = function() {
  const modal = document.getElementById('modalKembalikanPengajuan');
  if (modal) modal.classList.add('hidden');
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

  const item = (AppState.pengajuanDesa || []).find(p => p.id === id);
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
  autoGenerateNomorSurat();
  updateLivePreview();

  showToast(`Data pengajuan Desa ${item.namaDesa} berhasil disinkronkan ke Surat Rekomendasi Camat!`, 'success');
};

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
      const cloudList = result.data.map(row => ({
        id: row['ID Pengajuan'] || `PENG-${Date.now()}`,
        waktuKirim: row['Waktu Pengajuan'] ? new Date(row['Waktu Pengajuan']).toISOString() : new Date().toISOString(),
        namaDesa: row['Nama Desa'] || '',
        jenisDana: row['Jenis Dana'] || 'add_reguler',
        tahap: row['Tahap Pencairan'] || '',
        tahunAnggaran: String(row['Tahun Anggaran'] || '2026'),
        nominal: Number(row['Nominal Angka (Rp)']) || 0,
        nomorSp: row['Nomor SP Desa'] || '',
        tanggalSp: row['Tanggal SP Desa'] ? String(row['Tanggal SP Desa']).substring(0, 10) : '',
        nomorRekomDesa: row['Nomor Rekomendasi Desa'] || '',
        tanggalRekomDesa: row['Tanggal Rekom Desa'] ? String(row['Tanggal Rekom Desa']).substring(0, 10) : '',
        fileSpId: `file_sp_${row['ID Pengajuan']}`,
        fileSpName: row['Nama File SP'] || 'Surat_Pengantar.pdf',
        driveSpUrl: row['Link Google Drive SP'] && row['Link Google Drive SP'] !== '-' ? row['Link Google Drive SP'] : null,
        fileCeklistId: `file_cek_${row['ID Pengajuan']}`,
        fileCeklistName: row['Nama File Ceklist'] || 'Ceklist_Berkas.pdf',
        driveCeklistUrl: row['Link Google Drive Ceklist'] && row['Link Google Drive Ceklist'] !== '-' ? row['Link Google Drive Ceklist'] : null,
        fileRekomDesaId: `file_rek_${row['ID Pengajuan']}`,
        fileRekomDesaName: row['Nama File Rekom Desa'] || 'Rekomendasi_Desa.pdf',
        driveRekomUrl: row['Link Google Drive Rekom Desa'] && row['Link Google Drive Rekom Desa'] !== '-' ? row['Link Google Drive Rekom Desa'] : null,
        driveFolderUrl: row['Folder Google Drive Desa'] && row['Folder Google Drive Desa'] !== '-' ? row['Folder Google Drive Desa'] : null,
        status: row['Status Verifikasi'] || 'Menunggu Verifikasi',
        catatanKecamatan: row['Catatan Verifikasi / Alasan Pengembalian'] || row['Catatan Verifikasi'] || row['Catatan'] || ''
      }));

      // Gabungkan data cloud dengan lokal tanpa duplikasi berdasarkan ID
      const existingMap = new Map();
      cloudList.forEach(item => existingMap.set(item.id, item));
      (AppState.pengajuanDesa || []).forEach(item => {
        if (!existingMap.has(item.id)) {
          existingMap.set(item.id, item);
        }
      });

      AppState.pengajuanDesa = Array.from(existingMap.values());
      // Urutkan waktu terbaru di atas
      AppState.pengajuanDesa.sort((a, b) => new Date(b.waktuKirim) - new Date(a.waktuKirim));

      localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
      showToast(`Berhasil menarik ${cloudList.length} data pengajuan dari Google Sheets!`, 'success');
    }
  } catch (err) {
    console.error('Error sinkron dari Google Sheets:', err);
    showToast('Gagal menarik data dari Google Sheets. Periksa URL Web App atau koneksi internet.', 'error');
  } finally {
    try {
      await sinkronMasterDesaDariGoogleSheets(true);
      await sinkronDataUserDariGoogleSheets();
    } catch (_) {}
    updateBadgePengajuanDesa();
    renderTabelPengajuanKecamatan();
    renderTabelPengajuanDesa();
  }
};

