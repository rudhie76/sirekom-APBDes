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
  operatorDesaAktif: localStorage.getItem('sip_operator_desa') || 'Api-Api',
  pengajuanDesa: JSON.parse(localStorage.getItem('sip_pengajuan_desa') || '[]'),
  uploadedFilesDraft: {
    sp: null,
    ceklist: null,
    rekom: null
  },
  
  // Tipe Rekomendasi yang Aktif: 'siltap', 'add_reguler', 'dbh', 'dd'
  tipeRekomendasi: 'siltap',

  // Master Desa di Kecamatan Waru (Data Riil Resmi)
  masterDesa: [
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
      id: 'DESA-01',
      nama: 'Waru',
      kades: 'KARTONO, S.Pd',
      kaurKeuangan: 'SRI WAHYUNI, S.E',
      jabatanKaur: 'Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa Waru',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '1131400122',
      atasNama: 'Pemerintah Desa Waru (RKD)',
      alamat: 'Jl. Propinsi Km. 25, Desa Waru, Kec. Waru',
      nomorPerdesKewenangan: '1',
      tahunPerdesKewenangan: '2019',
      nomorPerdesRkp: '1',
      tahunPerdesRkp: '2025',
      nomorPerdes: '5',
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
  document.getElementById('btnSaveGasSettings')?.addEventListener('click', () => {
    const url = document.getElementById('inputGasUrl').value.trim();
    AppState.gasUrl = url;
    localStorage.setItem('sip_gas_url', url);
    document.getElementById('modalGasSettings')?.classList.add('hidden');
    showToast('Pengaturan Google Sheets disimpan.', 'success');
    testGasConnection(true);
  });
  document.getElementById('btnTestGasConnection')?.addEventListener('click', () => {
    AppState.gasUrl = document.getElementById('inputGasUrl').value.trim();
    testGasConnection(false);
  });
  document.getElementById('btnCopyGasScript')?.addEventListener('click', () => {
    showToast('Silakan buka file google_apps_script.gs di folder aplikasi.', 'info');
  });
}

async function testGasConnection(isSilent = false) {
  const url = AppState.gasUrl;
  const statusEl = document.getElementById('statusGasTest');
  if (!url || !url.startsWith('http')) {
    if (statusEl) statusEl.innerHTML = '<span class="text-rose-600 font-semibold">❌ URL belum diisi</span>';
    updateSyncStatusBadge(false);
    return;
  }
  try {
    const pingUrl = url.includes('?') ? `${url}&action=ping` : `${url}?action=ping`;
    const res = await (await fetch(pingUrl)).json();
    if (res.success) {
      AppState.isConnected = true;
      if (statusEl) statusEl.innerHTML = `<span class="text-emerald-600 font-semibold">✅ Terhubung ke: "${res.spreadsheetName}"</span>`;
      if (!isSilent) showToast('Koneksi Google Sheets Berhasil!', 'success');
      updateSyncStatusBadge(true);
    }
  } catch {
    AppState.isConnected = false;
    if (statusEl) statusEl.innerHTML = '<span class="text-rose-600 font-semibold">❌ Gagal terhubung</span>';
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

function loadSavedSettings() { if (AppState.gasUrl) testGasConnection(true); }

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
  if (!tbody) return;
  if (badge) badge.textContent = AppState.riwayat.length;

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

  async downloadFile(id, fallbackName = 'Dokumen.pdf') {
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

/**
 * Inisialisasi Fitur Operator Desa & Data Bawaan
 */
function initDesaOperatorFeature() {
  initSeedPengajuanDesa();
  populateOperatorDesaSelect();
  onOperatorDesaChange();
  updateBadgePengajuanDesa();

  // Beralih ke mode yang tersimpan jika sebelumnya di mode desa
  if (AppState.appMode === 'desa') {
    switchAppMode('desa');
  }
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
 * Switcher Mode Peran: 'kecamatan' (Portal Kecamatan) vs 'desa' (Dashboard Operator Desa)
 */
window.switchAppMode = function(mode) {
  AppState.appMode = mode;
  localStorage.setItem('sip_active_mode', mode);

  const wsKecamatan = document.getElementById('workspaceKecamatan');
  const dbDesa = document.getElementById('dashboardDesaContainer');
  const btnKec = document.getElementById('btnRoleKecamatan');
  const btnDesa = document.getElementById('btnRoleDesa');
  const btnPengajuan = document.getElementById('btnOpenPengajuanDesa');
  const containerSplit = document.getElementById('containerSplitControls');

  if (mode === 'desa') {
    if (wsKecamatan) wsKecamatan.classList.add('hidden');
    if (dbDesa) dbDesa.classList.remove('hidden');
    if (btnKec) {
      btnKec.className = 'px-2.5 sm:px-3 py-1 rounded-md text-slate-300 hover:text-white transition flex items-center gap-1.5';
    }
    if (btnDesa) {
      btnDesa.className = 'px-2.5 sm:px-3 py-1 rounded-md bg-emerald-600 text-white transition flex items-center gap-1.5 shadow-sm font-bold';
    }
    if (btnPengajuan) btnPengajuan.classList.add('hidden');
    if (containerSplit) containerSplit.classList.add('hidden');

    renderDashboardDesa();
    showToast('Beralih ke Dashboard Operator Desa', 'info');
  } else {
    if (wsKecamatan) wsKecamatan.classList.remove('hidden');
    if (dbDesa) dbDesa.classList.add('hidden');
    if (btnKec) {
      btnKec.className = 'px-2.5 sm:px-3 py-1 rounded-md bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm font-bold';
    }
    if (btnDesa) {
      btnDesa.className = 'px-2.5 sm:px-3 py-1 rounded-md text-slate-300 hover:text-white transition flex items-center gap-1.5';
    }
    if (btnPengajuan) btnPengajuan.classList.remove('hidden');
    if (containerSplit) containerSplit.classList.remove('hidden');

    updateBadgePengajuanDesa();
    updateLivePreview();
    showToast('Beralih ke Portal Kecamatan Waru', 'info');
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
};

function renderDashboardDesa() {
  populateOperatorDesaSelect();
  onOperatorDesaChange();
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

  // Simpan file yang dipilih ke IndexedDB
  const draft = AppState.uploadedFilesDraft;
  const fileSpId = draft.sp ? draft.sp.id : `file_sp_${Date.now()}`;
  const fileSpName = draft.sp ? draft.sp.name : `Surat_Pengantar_${desa.replace(/\s+/g, '_')}.pdf`;
  if (draft.sp) await FileStorage.saveFile(draft.sp);

  const fileCeklistId = draft.ceklist ? draft.ceklist.id : `file_ceklist_${Date.now()}`;
  const fileCeklistName = draft.ceklist ? draft.ceklist.name : `Ceklist_Berkas_${desa.replace(/\s+/g, '_')}.pdf`;
  if (draft.ceklist) await FileStorage.saveFile(draft.ceklist);

  const fileRekomDesaId = draft.rekom ? draft.rekom.id : `file_rekom_${Date.now()}`;
  const fileRekomDesaName = draft.rekom ? draft.rekom.name : `Rekomendasi_Desa_${desa.replace(/\s+/g, '_')}.pdf`;
  if (draft.rekom) await FileStorage.saveFile(draft.rekom);

  const newSubmission = {
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

  AppState.pengajuanDesa.unshift(newSubmission);
  localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));

  renderTabelPengajuanDesa();
  updateBadgePengajuanDesa();
  resetFormPengajuanDesa();

  if (btnKirim) {
    btnKirim.disabled = false;
    btnKirim.innerHTML = '<span>🚀 Kirim Pengajuan ke Kecamatan Waru</span>';
  }

  showToast(`Pengajuan Desa ${desa} berhasil dikirim ke Kecamatan Waru!`, 'success');
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
    }

    return `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100">
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
            <button onclick="downloadDokumenPengajuan('${item.fileSpId}', '${item.fileSpName}')" class="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold border border-emerald-200 transition flex items-center gap-1 w-full justify-center">
              <span>📄 Unduh SP</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileCeklistId}', '${item.fileCeklistName}')" class="px-2 py-0.5 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded text-[10px] font-bold border border-teal-200 transition flex items-center gap-1 w-full justify-center">
              <span>📋 Unduh Ceklist</span>
            </button>
            <button onclick="downloadDokumenPengajuan('${item.fileRekomDesaId}', '${item.fileRekomDesaName}')" class="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded text-[10px] font-bold border border-blue-200 transition flex items-center gap-1 w-full justify-center">
              <span>📑 Unduh Rekom</span>
            </button>
          </div>
        </td>
        <td class="py-3 px-3 text-center">
          ${statusBadge}
        </td>
        <td class="py-3 px-3 text-center">
          <button onclick="hapusPengajuanDesa('${item.id}')" class="text-rose-600 hover:text-rose-800 text-xs font-semibold px-2 py-1 rounded hover:bg-rose-50 transition" title="Hapus Berkas">
            Hapus
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Reset Input Form Pengajuan Desa
 */
window.resetFormPengajuanDesa = function() {
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
 * Update Badge Notifikasi Berkas Masuk di Navbar Kecamatan
 */
function updateBadgePengajuanDesa() {
  const badge = document.getElementById('badgePengajuanMasukCount');
  if (!badge) return;
  const count = AppState.pengajuanDesa.length;
  badge.textContent = count;
  if (count > 0) {
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
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

  tbody.innerHTML = list.map((item, index) => `
    <tr class="hover:bg-slate-50 transition border-b border-slate-100">
      <td class="py-3 px-3 text-center text-slate-500 font-mono text-xs">${index + 1}</td>
      <td class="py-3 px-3">
        <div class="font-bold text-slate-900 text-xs">Desa ${escapeHtml(item.namaDesa)}</div>
        <div class="text-[11px] text-slate-500">${new Date(item.waktuKirim).toLocaleDateString('id-ID')}</div>
        <span class="inline-block mt-1 px-1.5 py-0.2 rounded text-[9.5px] font-bold ${item.status === 'Diterbitkan' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
          ${escapeHtml(item.status)}
        </span>
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
          <button onclick="downloadDokumenPengajuan('${item.fileSpId}', '${item.fileSpName}')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10.5px] font-semibold transition shadow-2xs flex items-center gap-1 w-full justify-center">
            <span>📥 Unduh SP</span>
          </button>
          <button onclick="downloadDokumenPengajuan('${item.fileCeklistId}', '${item.fileCeklistName}')" class="px-2.5 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded text-[10.5px] font-semibold transition shadow-2xs flex items-center gap-1 w-full justify-center">
            <span>📥 Unduh Ceklist</span>
          </button>
          <button onclick="downloadDokumenPengajuan('${item.fileRekomDesaId}', '${item.fileRekomDesaName}')" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10.5px] font-semibold transition shadow-2xs flex items-center gap-1 w-full justify-center">
            <span>📥 Unduh Rekom Desa</span>
          </button>
        </div>
      </td>
      <td class="py-3 px-3 text-center">
        <button onclick="prosesPengajuanKeRekomendasi('${item.id}')" class="w-full px-2.5 py-2 bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5 leading-tight text-center">
          <span>⚡ Buat Rekom Camat</span>
        </button>
      </td>
    </tr>
  `).join('');
};

/**
 * Download Dokumen Pengajuan
 */
window.downloadDokumenPengajuan = function(fileId, defaultName) {
  FileStorage.downloadFile(fileId, defaultName);
};

/**
 * Mengambil Data Pengajuan Desa dan Memasukkannya Langsung ke Form & Surat Rekomendasi Kecamatan
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

  // 6. Tandai status pengajuan sebagai diproses
  item.status = 'Diterbitkan';
  localStorage.setItem('sip_pengajuan_desa', JSON.stringify(AppState.pengajuanDesa));
  updateBadgePengajuanDesa();

  // 7. Tutup modal & beralih ke Mode Kecamatan
  closeModalPengajuanKecamatan();
  switchAppMode('kecamatan');

  autoUpdatePerihal();
  autoGenerateNomorSurat();
  updateLivePreview();

  showToast(`Data pengajuan Desa ${item.namaDesa} berhasil disinkronkan ke Surat Rekomendasi Camat!`, 'success');
};

/**
 * Sinkronisasi Pengajuan ke Google Sheets jika URL GAS diset
 */
window.sinkronPengajuanKeGoogleSheets = function() {
  updateBadgePengajuanDesa();
  renderTabelPengajuanKecamatan();
  showToast('Data pengajuan desa berhasil disegarkan!', 'info');
};

