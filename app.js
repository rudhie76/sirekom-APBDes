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
    { id: 'dd1', teks: 'Surat Permohonan Penyaluran Dana Desa dari Kepala Desa;', checked: true },
    { id: 'dd2', teks: 'Surat Rekomendasi Penyaluran dari Camat;', checked: true },
    { id: 'dd3', teks: 'Ceklist Kelengkapan Berkas Verifikasi Tim Kecamatan;', checked: true },
    { id: 'dd4', teks: 'Peraturan Desa tentang APBDes Tahun Anggaran Berjalan;', checked: true },
    { id: 'dd5', teks: 'Laporan Realisasi Penyerapan dan Capaian Output Dana Desa Tahap Sebelumnya;', checked: true },
    { id: 'dd6', teks: 'Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) Kepala Desa;', checked: true },
    { id: 'dd7', teks: 'Fotokopi Rekening Kas Desa (RKD) yang aktif;', checked: true },
    { id: 'dd8', teks: 'Fotokopi NPWP Pemerintah Desa.', checked: true }
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
    if (nominalInput) nominalInput.value = '280.000.000';
    if (tglInput) tglInput.value = '2026-06-15';
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
    const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap I';
    inputPerihal.value = `Rekomendasi Penyaluran Dana Desa (DD) ${tahap} Tahun Anggaran ${tahun} Desa ${desa}`;
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
  else if (AppState.tipeRekomendasi === 'dd') nomorUrut = 210;

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
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman1">
      ${getKopSuratHtml()}
      <div class="mt-4 flex justify-between text-[11.5px] leading-relaxed">
        <div class="w-[55%] pr-2">
          <table class="w-full border-collapse">
            <tr><td class="w-16 align-top py-0.5">Nomor</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-medium">${escapeHtml(nomorSurat)}</td></tr>
            <tr><td class="align-top py-0.5">Lampiran</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">-</td></tr>
            <tr><td class="align-top py-0.5">Perihal</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 text-justify leading-snug">${perihalText}</td></tr>
          </table>
        </div>
        <div class="w-[45%] pl-4 text-left">
          <div class="mb-3 text-right">Waru, ${tanggalSuratIndo}</div>
          <div class="leading-normal pl-4">
            <div>Kepada</div>
            <div>Yth. Bupati Penajam Paser Utara</div>
            <div class="pl-4 leading-tight">Up. Kepala Badan Keuangan</div>
            <div class="pl-4 leading-tight">dan Aset Daerah Kab. PPU</div>
            <div>di-</div>
            <div class="pl-6">Tempat</div>
          </div>
        </div>
      </div>

      <div class="mt-4 text-[11px] text-justify leading-normal">
        <div class="flex items-start">
          <div class="w-16">Dasar</div><div class="w-3">:</div>
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
              <li class="pl-1">Peraturan Kepala Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(nomorPerkades)} Tahun ${escapeHtml(tahunPerkades)} tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)};</li>
            </ol>
          </div>
        </div>
      </div>

      <div class="mt-4 text-[11px] text-justify leading-relaxed">
        <p class="indent-10">
          Memperhatikan dasar diatas dan setelah dilakukan chek list tentang Dokumen Persyaratan Rekomendasi Pencairan ADD untuk Pembayaran Penghasilan Tetap dan Tunjangan Jabatan Kepala Desa dan Perangkat Desa, Tunjangan Kedudukan BPD, Insentif Rukun Tetangga dan Honorarium Staf Desa untuk Bulan ${escapeHtml(bulanGaji)} Desa ${escapeHtml(namaDesa)} Tahun ${escapeHtml(tahunAnggaran)} sesuai dengan
        </p>
      </div>

      ${getFooterBsreHtml('1 / 2')}
    </div>

    <div class="page-break my-8 print:my-0"></div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman2">
      <div class="text-[11px] text-justify leading-relaxed">
        <p>ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :</p>
        <div class="my-3 pl-8">
          <table class="border-collapse text-[11px]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>

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

        <p class="indent-10 mt-2">
          Bahwa Camat hanya bertanggung jawab pada Verifikasi kelengkapan dokumen dan kebenaran substansi yang terdapat pada dokumen persyaratan tersebut merupakan tanggung jawab Kepala Desa ${escapeHtml(namaDesa)}.
        </p>
        <p class="indent-10 mt-2">Demikian Rekomendasi ini disampaikan sebagai bahan kebijakan lebih lanjut.</p>
      </div>

      ${getTtdCamatHtml(namaCamat, nipCamat, metodeTte)}
      ${getFooterBsreHtml('2 / 2')}
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
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman1">
      ${getKopSuratHtml()}
      <div class="mt-4 flex justify-between text-[11.5px] leading-relaxed">
        <div class="w-[55%] pr-2">
          <table class="w-full border-collapse">
            <tr><td class="w-16 align-top py-0.5">Nomor</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-medium">${escapeHtml(nomorSurat)}</td></tr>
            <tr><td class="align-top py-0.5">Lampiran</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">-</td></tr>
            <tr><td class="align-top py-0.5">Perihal</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 text-justify leading-snug">${perihalText}</td></tr>
          </table>
        </div>
        <div class="w-[45%] pl-4 text-left">
          <div class="mb-3 text-right">Waru, ${tanggalSuratIndo}</div>
          <div class="leading-normal pl-4">
            <div>Kepada</div>
            <div>Yth. Bupati Penajam Paser Utara</div>
            <div class="pl-4 leading-tight">Up. Kepala Badan Keuangan</div>
            <div class="pl-4 leading-tight">dan Aset Daerah Kab. PPU</div>
            <div>di-</div>
            <div class="pl-6">Tempat</div>
          </div>
        </div>
      </div>

      <div class="mt-3 text-[10.5px] text-justify leading-tight">
        <div class="flex items-start">
          <div class="w-14">Dasar</div><div class="w-2">:</div>
          <div class="flex-1">
            <ol class="list-decimal pl-4 space-y-1">
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

      ${getFooterBsreHtml('1 / 3')}
    </div>

    <div class="page-break my-8 print:my-0"></div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman2">
      <div class="text-[10.5px] text-justify leading-tight">
        <ol start="12" class="list-decimal pl-6 space-y-1">
          <li class="pl-1">Peraturan Desa ${escapeHtml(namaDesa)} Nomor ${escapeHtml(perdesKewenangan)} Tahun 2019 tentang Daftar Kewenangan Desa Berdasarkan Hak Asal Usul dan Kewenangan Lokal Berskala Desa;</li>
          <li class="pl-1">Peraturan Desa Nomor ${escapeHtml(perdesRkp)} Tahun 2025 tentang Rencana Kerja Pemerintah (RKP) Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)};</li>
          <li class="pl-1">Peraturan Desa Nomor ${escapeHtml(perdes)} Tahun 2025 tentang Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)};</li>
          <li class="pl-1">Peraturan Kepala Desa Nomor ${escapeHtml(perkades)} Tahun 2025 tentang Penjabaran Anggaran Pendapatan dan Belanja Desa Tahun Anggaran ${escapeHtml(tahunAnggaran)}.</li>
        </ol>

        <p class="indent-10 mt-3 leading-relaxed">
          Memperhatikan dasar diatas dan setelah dilakukan chek list tentang Dokumen Persyaratan Rekomendasi Pencairan Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} (${escapeHtml(persen)} %) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>

        <div class="my-2 pl-8">
          <table class="border-collapse text-[10.5px]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>

        <p class="indent-10 leading-relaxed">
          Untuk menerima (mengambil) Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} (${escapeHtml(persen)} %) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sebesar. <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <p class="indent-10 mt-2 leading-relaxed">
          Sebagai Bahan Pertimbangan, bersama ini kami lampirkan berkas-berkas Persyaratan Pencairan Alokasi Dana Desa (ADD) ${escapeHtml(tahap)} (${escapeHtml(persen)} %) Tahun Anggaran ${escapeHtml(tahunAnggaran)} antara lain:
        </p>

        <div class="my-2 pl-4">
          <ol class="list-decimal pl-4 space-y-0.5">
            ${AppState.berkasAddReguler.slice(0, 11).map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
          </ol>
        </div>
      </div>

      ${getFooterBsreHtml('2 / 3')}
    </div>

    <div class="page-break my-8 print:my-0"></div>

    <!-- HALAMAN 3 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman3">
      <div class="text-[10.5px] text-justify leading-tight">
        <ol start="12" class="list-decimal pl-6 space-y-0.5">
          ${AppState.berkasAddReguler.slice(11).map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
        </ol>

        <p class="indent-10 mt-4 leading-relaxed">
          Bahwa Camat hanya bertanggung jawab pada Verifikasi kelengkapan dokumen dan kebenaran substansi yang terdapat pada dokumen persyaratan tersebut merupakan tanggung jawab Kepala Desa ${escapeHtml(namaDesa)}.
        </p>
        <p class="indent-10 mt-2 leading-relaxed">
          Demikian Rekomendasi ini disampaikan sebagai bahan kebijakan lebih lanjut.
        </p>
      </div>

      ${getTtdCamatHtml(namaCamat, nipCamat, metodeTte)}
      ${getFooterBsreHtml('3 / 3')}
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
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman1">
      ${getKopSuratHtml(true)}
      <div class="mt-4 flex justify-between text-[11.5px] leading-relaxed">
        <div class="w-[55%] pr-2">
          <table class="w-full border-collapse">
            <tr><td class="w-16 align-top py-0.5">Nomor</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-medium">${escapeHtml(nomorSurat)}</td></tr>
            <tr><td class="align-top py-0.5">Lampiran</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">-</td></tr>
            <tr><td class="align-top py-0.5">Perihal</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 text-justify leading-snug">${perihalText}</td></tr>
          </table>
        </div>
        <div class="w-[45%] pl-4 text-left">
          <div class="mb-3 text-right">Waru, ${tanggalSuratIndo}</div>
          <div class="leading-normal pl-4">
            <div>Kepada</div>
            <div>Yth. Bupati Penajam Paser Utara</div>
            <div class="pl-4 leading-tight">Up. Kepala Badan Keuangan</div>
            <div class="pl-4 leading-tight">dan Aset Daerah Kab. PPU</div>
            <div>di-</div>
            <div class="pl-6">Tempat</div>
          </div>
        </div>
      </div>

      <div class="mt-3 text-[11px] text-justify leading-tight">
        <div class="flex items-start">
          <div class="w-16">Dasar</div><div class="w-3">:</div>
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

      <div class="mt-3 text-[11px] text-justify leading-relaxed">
        <p class="indent-10">
          Memperhatikan dasar diatas dan setelah dilakukan chek list tentang Dokumen Persyaratan Rekomendasi Pencairan Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} (${escapeHtml(persen)}%) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sesuai dengan ketentuan yang berlaku, maka bersama ini kami berikan Rekomendasi Kepada :
        </p>
        <div class="my-2 pl-8">
          <table class="border-collapse text-[11px]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>
      </div>

      ${getFooterBsreHtml('1 / 2')}
    </div>

    <div class="page-break my-8 print:my-0"></div>

    <!-- HALAMAN 2 -->
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman2">
      <div class="text-[11px] text-justify leading-relaxed">
        <p class="indent-10">
          Untuk menerima (mengambil) Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} (${escapeHtml(persen)}%) Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)} sebesar <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <p class="indent-10 mt-2">
          Sebagai Bahan Pertimbangan, bersama ini kami lampirkan berkas-berkas Persyaratan Pencairan Dana Bagi Hasil Pajak dan Retribusi Daerah (PBH) ${escapeHtml(tahap)} (${escapeHtml(persen)}%) Tahun Anggaran ${escapeHtml(tahunAnggaran)} antara lain:
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
      ${getFooterBsreHtml('2 / 2')}
    </div>
  `;

  previewDoc.innerHTML = docHtml;
}

/**
 * 4. TEMPLATE DANA DESA (DD)
 */
function renderLivePreviewDd() {
  const previewDoc = document.getElementById('previewDocumentContainer');
  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Api-Api';
  const kaurKeuangan = document.getElementById('inputKaurKeuangan')?.value || 'JUMIATI, S.KM';
  const jabatanKaur = document.getElementById('inputJabatanKaur')?.value || `Kaur Keuangan selaku Pelaksana Fungsi Kebendaharaan Desa ${namaDesa}`;
  const nomorRekening = document.getElementById('inputNomorRekening')?.value || '1131400345';
  const tahap = document.getElementById('selectTahapReguler')?.value || 'Tahap I';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nomorSurat = document.getElementById('inputNomorSurat')?.value || `R-900/210/PMDK/Kec.Waru/${tahunAnggaran}`;
  const tanggalSuratIndo = formatTanggalIndo(document.getElementById('inputTanggalSurat')?.value || '2026-06-15');
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '280000000');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);
  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'tte';

  const perihalText = `Rekomendasi Penyaluran Dana Desa (DD) ${escapeHtml(tahap)} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)}`;

  const docHtml = `
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative font-sans" id="suratHalaman1">
      ${getKopSuratHtml()}
      <div class="mt-4 flex justify-between text-[11.5px] leading-relaxed">
        <div class="w-[55%] pr-2">
          <table class="w-full border-collapse">
            <tr><td class="w-16 align-top py-0.5">Nomor</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-medium">${escapeHtml(nomorSurat)}</td></tr>
            <tr><td class="align-top py-0.5">Lampiran</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">-</td></tr>
            <tr><td class="align-top py-0.5">Perihal</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 text-justify leading-snug">${perihalText}</td></tr>
          </table>
        </div>
        <div class="w-[45%] pl-4 text-left">
          <div class="mb-3 text-right">Waru, ${tanggalSuratIndo}</div>
          <div class="leading-normal pl-4">
            <div>Kepada</div>
            <div>Yth. Bupati Penajam Paser Utara</div>
            <div class="pl-4 leading-tight">Up. Kepala Badan Keuangan</div>
            <div class="pl-4 leading-tight">dan Aset Daerah Kab. PPU</div>
            <div>di-</div>
            <div class="pl-6">Tempat</div>
          </div>
        </div>
      </div>

      <div class="mt-4 text-[11px] text-justify leading-relaxed">
        <p class="indent-10">
          Berdasarkan hasil verifikasi dokumen persyaratan penyaluran Dana Desa yang diajukan oleh Pemerintah Desa <strong>${escapeHtml(namaDesa)}</strong>, bersama ini Camat Waru memberikan Rekomendasi Penyaluran Dana Desa (DD) ${escapeHtml(tahap)} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Kepada :
        </p>
        <div class="my-3 pl-8">
          <table class="border-collapse text-[11px]">
            <tr><td class="w-48 align-top py-0.5">Nama</td><td class="w-3 align-top py-0.5">:</td><td class="align-top py-0.5 font-bold uppercase">${escapeHtml(kaurKeuangan)}</td></tr>
            <tr><td class="align-top py-0.5">Jabatan</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5">${escapeHtml(jabatanKaur)}</td></tr>
            <tr><td class="align-top py-0.5">Nomor Rekening Kas Desa</td><td class="align-top py-0.5">:</td><td class="align-top py-0.5 font-mono font-medium">${escapeHtml(nomorRekening)}</td></tr>
          </table>
        </div>

        <p class="indent-10">
          Untuk menerima (mengambil) Dana Desa (DD) ${escapeHtml(tahap)} Tahun Anggaran ${escapeHtml(tahunAnggaran)} Sebesar <strong>${nominalFormatted} (${terbilangText})</strong>.
        </p>

        <p class="indent-10 mt-2">
          Sebagai bahan pertimbangan, bersama ini dilampirkan berkas persyaratan penyaluran yang telah diverifikasi lengkap.
        </p>

        <div class="my-2 pl-4">
          <ol class="list-decimal pl-4 space-y-0.5">
            ${AppState.berkasDd.map(item => `<li class="pl-1">${escapeHtml(item.teks)}</li>`).join('')}
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
      ${getFooterBsreHtml('1 / 1')}
    </div>
  `;

  previewDoc.innerHTML = docHtml;
}

// =========================================================================================
// HTML BUILDERS & REUSABLE COMPONENTS
// =========================================================================================
function getKopSuratHtml(withWa = false) {
  return `
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
          Jalan Propinsi KM. 25, ${withWa ? 'WA. 0821-9564-7788' : 'Telp. (0543) 5232668'}
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
  `;
}

function getTtdCamatHtml(namaCamat, nipCamat, metodeTte) {
  return `
    <div class="mt-4 flex justify-end text-[11.5px]">
      <div class="w-64 text-center">
        <div>Camat Waru,</div>
        <div class="h-24 flex items-center justify-center my-1">
          ${metodeTte === 'tte' ? getQrCodeSvg() : '<div class="text-xs text-slate-400 italic">(Tanda Tangan Basah)</div>'}
        </div>
        <div class="font-bold text-black">${escapeHtml(namaCamat)}</div>
        <div class="text-[11px] font-mono text-black">NIP. ${escapeHtml(nipCamat)}</div>
      </div>
    </div>
    <div class="mt-3 text-[11px] text-black">
      <div class="font-bold underline mb-0.5">Tembusan :</div>
      <ol class="list-decimal pl-5 space-y-0.5 leading-tight">
        <li>Kepala Dinas Pemberdayaan Masyarakat dan Desa Kab. Penajam Paser Utara;</li>
        <li>Arsip.</li>
      </ol>
    </div>
  `;
}

function getFooterBsreHtml(pageStr) {
  return `
    <div class="absolute bottom-4 left-8 right-8 text-[9px] text-neutral-800 leading-tight pt-2 border-t border-slate-200 flex justify-between items-end">
      <div class="max-w-[85%] text-left">
        Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik<br>
        yang diterbitkan oleh Balai Besar Sertifikasi Elektronik (BSrE), Badan Siber dan Sandi Negara (BSSN).
      </div>
      <div class="font-mono text-neutral-600 font-medium">${pageStr}</div>
    </div>
  `;
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
