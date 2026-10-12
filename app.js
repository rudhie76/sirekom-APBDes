/**
 * =========================================================================================
 * SIP-REKOM APBDES - KECAMATAN WARU, KABUPATEN PENAJAM PASER UTARA
 * Logika Aplikasi, Sinkronisasi Google Sheets, Terbilang, dan Live Preview
 * =========================================================================================
 */

// STATE MANAGEMENT GLOBAL
const AppState = {
  // Pengaturan Google Sheets
  gasUrl: localStorage.getItem('sip_gas_url') || '',
  isConnected: false,
  
  // Data Master Desa di Kecamatan Waru
  masterDesa: [
    {
      id: 'DESA-01',
      nama: 'Waru',
      kades: 'KARTONO, S.Pd',
      kaurKeuangan: 'SRI WAHYUNI, S.E',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '007201889901',
      atasNama: 'Pemerintah Desa Waru (RKD)',
      alamat: 'Jl. Propinsi Km. 25, Desa Waru, Kec. Waru'
    },
    {
      id: 'DESA-02',
      nama: 'Sesulu',
      kades: 'H. RAHMAN SALEH',
      kaurKeuangan: 'NURDIANTO, S.Kom',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '007201889902',
      atasNama: 'Pemerintah Desa Sesulu (RKD)',
      alamat: 'Jl. Negara Km. 32 RT. 04, Desa Sesulu, Kec. Waru'
    },
    {
      id: 'DESA-03',
      nama: 'Api-Api',
      kades: 'SUDIRMAN',
      kaurKeuangan: 'M. FACHRI ROZI',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '007201889903',
      atasNama: 'Pemerintah Desa Api-Api (RKD)',
      alamat: 'Jl. Silkar RT. 02, Desa Api-Api, Kec. Waru'
    },
    {
      id: 'DESA-04',
      nama: 'Bangun Mulya',
      kades: 'BOIMIN, S.Sos',
      kaurKeuangan: 'EKO PRASETYO',
      bank: 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru',
      rekening: '007201889904',
      atasNama: 'Pemerintah Desa Bangun Mulya (RKD)',
      alamat: 'Jl. Usaha Tani RT. 06, Desa Bangun Mulya, Kec. Waru'
    }
  ],

  // Pejabat Camat Default
  camat: {
    nama: 'FIRMANSYAH, S.STP, M.Si',
    pangkat: 'Pembina (IV/a)',
    nip: '19800512 200212 1 003',
    jabatan: 'Camat Waru'
  },

  // Riwayat Surat yang Tersimpan
  riwayat: JSON.parse(localStorage.getItem('sip_riwayat_rekom') || '[]'),

  // Kelengkapan Berkas Default
  berkasDefault: [
    { id: 'b1', teks: 'Surat Permohonan Penyaluran / Pencairan dari Kepala Desa', checked: true },
    { id: 'b2', teks: 'Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) Kepala Desa', checked: true },
    { id: 'b3', teks: 'Surat Permintaan Pembayaran (SPP) dan Rencana Penggunaan Dana (RPD)', checked: true },
    { id: 'b4', teks: 'Laporan Realisasi Penyerapan Anggaran & Capaian Output Tahap Sebelumnya', checked: true },
    { id: 'b5', teks: 'Bukti Setor Pajak (Surat Setoran Pajak / BPN) Tahap Sebelumnya', checked: true },
    { id: 'b6', teks: 'Berita Acara Hasil Verifikasi Tim Fasilitasi Pengelolaan Keuangan Desa Kec. Waru', checked: true },
    { id: 'b7', teks: 'Kuitansi Penerimaan Bermaterai Cukup yang telah ditandatangani Kepala Desa', checked: true },
    { id: 'b8', teks: 'Fotokopi Buku Rekening Kas Desa (RKD) Bankaltimtara yang masih aktif', checked: true }
  ],

  // Mode Tampilan & Kertas
  currentZoom: 100,
  paperSize: 'folio', // 'folio' (F4) atau 'a4'
  viewMode: 'split' // 'split', 'form', 'preview'
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
  if (isNaN(angka) || angka <= 0) return 'Nol Rupiah';
  const hasil = bilangSatuan(angka).replace(/\s+/g, ' ').trim();
  return (hasil ? hasil : 'Nol') + ' Rupiah';
}

// =========================================================================================
// FORMATTING UTILITIES
// =========================================================================================
function formatRupiah(number) {
  if (isNaN(number) || number === null || number === '') return 'Rp 0';
  return 'Rp ' + Number(number).toLocaleString('id-ID');
}

function parseCurrencyInput(value) {
  if (!value) return 0;
  // Hapus semua karakter non-angka
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

function getBulanRomawi(monthIndex) {
  const romawi = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  return romawi[monthIndex] || 'X';
}

// =========================================================================================
// INISIALISASI & EVENT LISTENERS
// =========================================================================================
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  populateDesaSelect();
  renderBerkasChecklist();
  setupEventListeners();
  loadSavedSettings();
  autoGenerateNomorSurat();
  triggerAutoFillDesa();
  updateLivePreview();
  renderHistoryTable();
  updateSyncStatusBadge();
});

function initUI() {
  // Set default tanggal hari ini
  const today = new Date().toISOString().split('T')[0];
  const inputTgl = document.getElementById('inputTanggalSurat');
  const inputTglPengantar = document.getElementById('inputTanggalPengantarDesa');
  const inputTglBA = document.getElementById('inputTanggalBAVerifikasi');
  
  if (inputTgl && !inputTgl.value) inputTgl.value = today;
  if (inputTglPengantar && !inputTglPengantar.value) inputTglPengantar.value = today;
  if (inputTglBA && !inputTglBA.value) inputTglBA.value = today;

  // Set default tahun anggaran
  const inputTahun = document.getElementById('inputTahunAnggaran');
  if (inputTahun && !inputTahun.value) {
    inputTahun.value = new Date().getFullYear();
  }
}

function populateDesaSelect() {
  const select = document.getElementById('selectNamaDesa');
  if (!select) return;
  
  select.innerHTML = '';
  AppState.masterDesa.forEach((desa, index) => {
    const opt = document.createElement('option');
    opt.value = desa.nama;
    opt.textContent = `Desa ${desa.nama}`;
    if (index === 0) opt.selected = true;
    select.appendChild(opt);
  });
}

function renderBerkasChecklist() {
  const container = document.getElementById('containerBerkasChecklist');
  if (!container) return;
  
  container.innerHTML = '';
  AppState.berkasDefault.forEach((item, index) => {
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
// EVENT LISTENERS & LIVE BINDING
// =========================================================================================
function setupEventListeners() {
  // Input fields that trigger immediate live preview update
  const watchInputs = [
    'selectNamaDesa', 'inputKepalaDesa', 'inputKaurKeuangan', 'inputBankPenyalur', 'inputNomorRekening',
    'selectJenisDana', 'selectTahap', 'inputTahunAnggaran', 'inputNominalAngka',
    'inputNomorSurat', 'selectSifatSurat', 'inputLampiranSurat', 'inputPerihalSurat',
    'inputNomorPengantarDesa', 'inputTanggalPengantarDesa', 'inputNomorBAVerifikasi', 'inputTanggalBAVerifikasi',
    'inputTanggalSurat', 'inputTujuanBKAD', 'inputTujuanKota',
    'inputNamaCamat', 'inputPangkatCamat', 'inputNipCamat', 'selectMetodeTte',
    'inputKlausulKhusus'
  ];

  watchInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        if (id === 'inputNominalAngka') {
          handleNominalInput();
        }
        if (id === 'selectJenisDana' || id === 'selectTahap' || id === 'selectNamaDesa') {
          autoUpdatePerihal();
        }
        updateLivePreview();
      });
      el.addEventListener('change', () => {
        if (id === 'selectNamaDesa') {
          triggerAutoFillDesa();
        }
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

  // Tombol Format Nomor Surat Otomatis
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
    btnPrint.addEventListener('click', () => {
      triggerPrint();
    });
  }

  // Tombol Simpan ke Database
  const btnSave = document.getElementById('btnSaveToDb');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      saveRecommendationData();
    });
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

  // Modal Google Sheets Settings
  const btnOpenSettings = document.getElementById('btnOpenSettings');
  const modalSettings = document.getElementById('modalGasSettings');
  const btnCloseSettings = document.getElementById('btnCloseSettings');
  const btnSaveSettings = document.getElementById('btnSaveGasSettings');
  const btnTestConn = document.getElementById('btnTestGasConnection');
  const btnCopyScript = document.getElementById('btnCopyGasScript');
  const btnSyncData = document.getElementById('btnSyncGasData');

  if (btnOpenSettings && modalSettings) {
    btnOpenSettings.addEventListener('click', () => {
      document.getElementById('inputGasUrl').value = AppState.gasUrl;
      modalSettings.classList.remove('hidden');
    });
  }

  if (btnCloseSettings && modalSettings) {
    btnCloseSettings.addEventListener('click', () => {
      modalSettings.classList.add('hidden');
    });
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
    btnSyncData.addEventListener('click', () => {
      fetchMasterAndHistoryFromSheets();
    });
  }

  if (btnCopyScript) {
    btnCopyScript.addEventListener('click', () => {
      copyGasScriptToClipboard();
    });
  }

  // Riwayat Drawer
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
    btnCloseHistory.addEventListener('click', () => {
      drawerHistory.classList.add('hidden');
    });
  }

  if (inputSearchHistory) {
    inputSearchHistory.addEventListener('input', (e) => {
      renderHistoryTable(e.target.value);
    });
  }

  if (btnExportCsv) {
    btnExportCsv.addEventListener('click', () => {
      exportHistoryToCsv();
    });
  }

  // Toggle Lampiran Preview
  const checkTampilkanLampiran = document.getElementById('checkTampilkanLampiran');
  if (checkTampilkanLampiran) {
    checkTampilkanLampiran.addEventListener('change', () => {
      updateLivePreview();
    });
  }

  // View Mode switcher (Responsive Mobile/Desktop)
  const btnViewSplit = document.getElementById('btnViewSplit');
  const btnViewForm = document.getElementById('btnViewForm');
  const btnViewPreview = document.getElementById('btnViewPreview');

  if (btnViewSplit) btnViewSplit.addEventListener('click', () => setViewMode('split'));
  if (btnViewForm) btnViewForm.addEventListener('click', () => setViewMode('form'));
  if (btnViewPreview) btnViewPreview.addEventListener('click', () => setViewMode('preview'));
}

// =========================================================================================
// LOGIKA AUTO-FILL & PENOMORAN
// =========================================================================================
function triggerAutoFillDesa() {
  const desaName = document.getElementById('selectNamaDesa').value;
  const data = AppState.masterDesa.find(d => d.nama === desaName);
  
  if (data) {
    const kadesInput = document.getElementById('inputKepalaDesa');
    const kaurInput = document.getElementById('inputKaurKeuangan');
    const bankInput = document.getElementById('inputBankPenyalur');
    const rekInput = document.getElementById('inputNomorRekening');
    const pengantarDesa = document.getElementById('inputNomorPengantarDesa');

    if (kadesInput) kadesInput.value = data.kades;
    if (kaurInput) kaurInput.value = data.kaurKeuangan;
    if (bankInput) bankInput.value = data.bank;
    if (rekInput) rekInput.value = data.rekening;

    // Saran nomor pengantar dari desa jika masih kosong
    if (pengantarDesa && (!pengantarDesa.value || pengantarDesa.value.includes('D-'))) {
      const code = data.nama.substring(0, 3).toUpperCase();
      const bln = getBulanRomawi(new Date().getMonth());
      const thn = new Date().getFullYear();
      pengantarDesa.value = `140/012/D-${code}/${bln}/${thn}`;
    }
  }

  autoUpdatePerihal();
  updateLivePreview();
}

function autoUpdatePerihal() {
  const desa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const dana = document.getElementById('selectJenisDana')?.value || 'ADD';
  const tahap = document.getElementById('selectTahap')?.value || 'Tahap I';
  const tahun = document.getElementById('inputTahunAnggaran')?.value || new Date().getFullYear();

  let namaLengkapDana = dana;
  if (dana === 'ADD') namaLengkapDana = 'Alokasi Dana Desa (ADD)';
  else if (dana === 'DD') namaLengkapDana = 'Dana Desa (DD)';
  else if (dana === 'DBH') namaLengkapDana = 'Dana Bagi Hasil Pajak dan Retribusi Daerah (DBH)';
  else if (dana === 'Bankeu') namaLengkapDana = 'Bantuan Keuangan Khusus (Bankeu)';

  const perihal = `Rekomendasi Penyaluran ${namaLengkapDana} ${tahap} Tahun Anggaran ${tahun} Desa ${desa}`;
  const inputPerihal = document.getElementById('inputPerihalSurat');
  if (inputPerihal) {
    inputPerihal.value = perihal;
  }
}

function autoGenerateNomorSurat() {
  // Format baku Permendagri / Perbup Penajam Paser Utara:
  // 100.3.3.7 / [No_Urut] / Ekbang / [Bulan_Romawi] / [Tahun]
  // 100.3.3.7 adalah kode klasifikasi Fasilitasi Pengelolaan Keuangan dan Aset Desa
  const today = new Date();
  const bulanRomawi = getBulanRomawi(today.getMonth());
  const tahun = today.getFullYear();
  
  // Tentukan nomor urut berikutnya dari riwayat
  let nextNo = 1;
  if (AppState.riwayat && AppState.riwayat.length > 0) {
    nextNo = AppState.riwayat.length + 1;
  }
  const paddedNo = String(nextNo).padStart(3, '0');

  const formattedNomor = `100.3.3.7 / ${paddedNo} / Ekbang / ${bulanRomawi} / ${tahun}`;
  const inputNomor = document.getElementById('inputNomorSurat');
  if (inputNomor) {
    inputNomor.value = formattedNomor;
  }

  const inputNoBA = document.getElementById('inputNomorBAVerifikasi');
  if (inputNoBA && !inputNoBA.value) {
    inputNoBA.value = `900 / ${paddedNo} / BA-VERIF / Ekbang / ${bulanRomawi} / ${tahun}`;
  }
}

function handleNominalInput() {
  const input = document.getElementById('inputNominalAngka');
  const terbilangOutput = document.getElementById('outputTerbilang');
  if (!input) return;

  const rawValue = parseCurrencyInput(input.value);
  input.value = rawValue ? rawValue.toLocaleString('id-ID') : '';

  const terbilangText = convertTerbilang(rawValue);
  if (terbilangOutput) {
    terbilangOutput.textContent = terbilangText;
  }
}

// =========================================================================================
// RENDER LIVE PREVIEW DOKUMEN RESMI (KECAMATAN WARU - PPU)
// =========================================================================================
function updateLivePreview() {
  // Ambil semua nilai dari Form
  const namaDesa = document.getElementById('selectNamaDesa')?.value || 'Sesulu';
  const kepalaDesa = document.getElementById('inputKepalaDesa')?.value || 'H. RAHMAN SALEH';
  const kaurKeuangan = document.getElementById('inputKaurKeuangan')?.value || 'NURDIANTO, S.Kom';
  const bankPenyalur = document.getElementById('inputBankPenyalur')?.value || 'PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru';
  const nomorRekening = document.getElementById('inputNomorRekening')?.value || '007201889902';

  const jenisDana = document.getElementById('selectJenisDana')?.value || 'ADD';
  const tahap = document.getElementById('selectTahap')?.value || 'Tahap I';
  const tahunAnggaran = document.getElementById('inputTahunAnggaran')?.value || '2026';
  const nominalAngka = parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '0');
  const nominalFormatted = formatRupiah(nominalAngka);
  const terbilangText = convertTerbilang(nominalAngka);

  const nomorSurat = document.getElementById('inputNomorSurat')?.value || '100.3.3.7 / 082 / Ekbang / X / 2026';
  const sifatSurat = document.getElementById('selectSifatSurat')?.value || 'Penting';
  const lampiranSurat = document.getElementById('inputLampiranSurat')?.value || '1 (satu) Berkas';
  const perihalSurat = document.getElementById('inputPerihalSurat')?.value || `Rekomendasi Penyaluran ADD ${tahap} TA ${tahunAnggaran} Desa ${namaDesa}`;
  const tanggalSurat = document.getElementById('inputTanggalSurat')?.value || new Date().toISOString().split('T')[0];
  const tanggalSuratIndo = formatTanggalIndo(tanggalSurat);

  const nomorPengantar = document.getElementById('inputNomorPengantarDesa')?.value || '140/012/D-SSL/X/2026';
  const tglPengantar = document.getElementById('inputTanggalPengantarDesa')?.value || tanggalSurat;
  const tglPengantarIndo = formatTanggalIndo(tglPengantar);

  const nomorBA = document.getElementById('inputNomorBAVerifikasi')?.value || '900 / 082 / BA-VERIF / Ekbang / X / 2026';
  const tglBA = document.getElementById('inputTanggalBAVerifikasi')?.value || tanggalSurat;
  const tglBAIndo = formatTanggalIndo(tglBA);

  const tujuanBKAD = document.getElementById('inputTujuanBKAD')?.value || 'Kepala Badan Keuangan dan Aset Daerah (BKAD) Kab. Penajam Paser Utara';
  const tujuanKota = document.getElementById('inputTujuanKota')?.value || 'PENAJAM';

  const namaCamat = document.getElementById('inputNamaCamat')?.value || AppState.camat.nama;
  const pangkatCamat = document.getElementById('inputPangkatCamat')?.value || AppState.camat.pangkat;
  const nipCamat = document.getElementById('inputNipCamat')?.value || AppState.camat.nip;
  const metodeTte = document.getElementById('selectMetodeTte')?.value || 'tte';
  const klausulKhusus = document.getElementById('inputKlausulKhusus')?.value || '';

  const tampilkanLampiran = document.getElementById('checkTampilkanLampiran')?.checked;

  // Nama label dana panjang
  let jenisDanaLabel = jenisDana;
  if (jenisDana === 'ADD') jenisDanaLabel = 'Alokasi Dana Desa (ADD)';
  else if (jenisDana === 'DD') jenisDanaLabel = 'Dana Desa (DD)';
  else if (jenisDana === 'DBH') jenisDanaLabel = 'Bagi Hasil Pajak dan Retribusi Daerah (DBH)';
  else if (jenisDana === 'Bankeu') jenisDanaLabel = 'Bantuan Keuangan Khusus (Bankeu)';

  // Ambil berkas tercentang
  const berkasChecked = [];
  document.querySelectorAll('.berkas-checkbox:checked').forEach(cb => {
    berkasChecked.push(cb.value);
  });

  // Target Container Preview
  const previewDoc = document.getElementById('previewDocumentContainer');
  if (!previewDoc) return;

  // ==========================================
  // HTML SURAT REKOMENDASI UTAMA (HALAMAN 1)
  // ==========================================
  let docHtml = `
    <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative print:shadow-none print:m-0" id="suratHalaman1">
      
      <!-- KOP SURAT PEMKAB PPU KECAMATAN WARU -->
      <div class="kop-surat flex items-center justify-between pb-3 border-b-4 border-double border-black relative">
        <div class="w-24 flex-shrink-0 flex items-center justify-center">
          ${getLogoPenajamSvg()}
        </div>
        <div class="flex-1 text-center px-2">
          <h3 class="text-sm tracking-wide font-serif font-bold uppercase text-black leading-tight">
            PEMERINTAH KABUPATEN PENAJAM PASER UTARA
          </h3>
          <h2 class="text-xl tracking-wider font-serif font-black uppercase text-black leading-tight mt-0.5">
            KECAMATAN WARU
          </h2>
          <p class="text-[11px] font-sans text-neutral-800 leading-snug mt-1">
            Jl. Propinsi Km. 26 Desa Waru, Kecamatan Waru, Kabupaten Penajam Paser Utara, Prov. Kalimantan Timur 76284
          </p>
          <p class="text-[10px] font-sans text-neutral-700 leading-snug">
            Pos-el: <span class="text-blue-900 underline">kecamatanwaru.ppu@gmail.com</span> | Laman: <span class="text-blue-900">waru.penajamkab.go.id</span>
          </p>
        </div>
        <div class="w-16 flex-shrink-0"></div>
      </div>

      <!-- KEPALA SURAT (NOMOR, SIFAT, LAMPIRAN, HAL & TANGGAL, TUJUAN) -->
      <div class="mt-4 flex justify-between text-[12.5px] font-serif leading-relaxed">
        <!-- KIRI: Metadata Surat -->
        <div class="w-7/12">
          <table class="w-full border-collapse">
            <tr>
              <td class="w-20 align-top py-0.5">Nomor</td>
              <td class="w-3 align-top py-0.5">:</td>
              <td class="font-bold align-top py-0.5 text-black">${escapeHtml(nomorSurat)}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Sifat</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5">${escapeHtml(sifatSurat)}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Lampiran</td>
              <td class="align-top py-0.5">:</td>
              <td class="align-top py-0.5">${escapeHtml(lampiranSurat)}</td>
            </tr>
            <tr>
              <td class="align-top py-0.5">Hal</td>
              <td class="align-top py-0.5">:</td>
              <td class="font-bold align-top py-0.5 leading-snug text-black">
                <span class="underline">${escapeHtml(perihalSurat)}</span>
              </td>
            </tr>
          </table>
        </div>

        <!-- KANAN: Tanggal & Tujuan -->
        <div class="w-5/12 pl-4">
          <div class="text-right mb-2">
            Waru, ${tanggalSuratIndo || '12 Oktober 2026'}
          </div>
          <div class="mt-4 leading-normal">
            <div>Kepada Yth.</div>
            <div class="font-bold leading-snug text-black">${escapeHtml(tujuanBKAD)}</div>
            <div>cq. Kuasa Bendahara Umum Daerah (BUD)</div>
            <div class="mt-1">di -</div>
            <div class="font-bold pl-5 tracking-wide text-black">${escapeHtml(tujuanKota)}</div>
          </div>
        </div>
      </div>

      <!-- ISI SURAT -->
      <div class="mt-4 text-[12.5px] font-serif text-justify leading-relaxed text-black">
        <p class="indent-8">
          Berdasarkan Surat Kepala Desa ${escapeHtml(namaDesa)} Nomor: <strong>${escapeHtml(nomorPengantar)}</strong> 
          tanggal <strong>${tglPengantarIndo}</strong> perihal Permohonan Penyaluran/Pencairan 
          <strong>${escapeHtml(jenisDanaLabel)} ${escapeHtml(tahap)} Tahun Anggaran ${escapeHtml(tahunAnggaran)}</strong>, 
          serta Berita Acara Hasil Verifikasi Tim Fasilitasi Pengelolaan Keuangan Desa Tingkat Kecamatan Waru 
          Nomor: <strong>${escapeHtml(nomorBA)}</strong> tanggal <strong>${tglBAIndo}</strong>, 
          dengan ini Camat Waru memberikan:
        </p>

        <!-- JUDUL REKOMENDASI -->
        <div class="my-2.5 text-center">
          <h4 class="text-sm font-bold uppercase tracking-wider underline">
            REKOMENDASI PENCAIRAN DANA
          </h4>
        </div>

        <p class="indent-8">
          Kepada Pemerintah Desa <strong>${escapeHtml(namaDesa)}</strong> untuk melakukan pencairan 
          anggaran pada Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran ${escapeHtml(tahunAnggaran)}, dengan rincian sebagai berikut:
        </p>

        <!-- TABEL RINCIAN DANA -->
        <div class="my-2.5 px-2">
          <table class="w-full border-collapse border border-black text-[12px]">
            <tbody>
              <tr class="border-b border-black">
                <td class="w-8 text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">1.</td>
                <td class="w-56 py-1 px-2 font-medium border-r border-black">Nama Desa / Kecamatan</td>
                <td class="py-1 px-2 font-bold">: Desa ${escapeHtml(namaDesa)}, Kecamatan Waru</td>
              </tr>
              <tr class="border-b border-black">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">2.</td>
                <td class="py-1 px-2 font-medium border-r border-black">Sumber / Jenis Dana</td>
                <td class="py-1 px-2 font-bold">: ${escapeHtml(jenisDanaLabel)}</td>
              </tr>
              <tr class="border-b border-black">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">3.</td>
                <td class="py-1 px-2 font-medium border-r border-black">Tahap Penyaluran / TA</td>
                <td class="py-1 px-2 font-bold">: ${escapeHtml(tahap)} / Tahun Anggaran ${escapeHtml(tahunAnggaran)}</td>
              </tr>
              <tr class="border-b border-black bg-amber-50/40">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">4.</td>
                <td class="py-1 px-2 font-bold border-r border-black">Jumlah Dana Direkomendasikan</td>
                <td class="py-1 px-2 font-black text-emerald-900 text-[13px]">: ${nominalFormatted}</td>
              </tr>
              <tr class="border-b border-black">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">5.</td>
                <td class="py-1 px-2 font-medium border-r border-black">Terbilang</td>
                <td class="py-1 px-2 italic font-semibold leading-snug">: <em>"${terbilangText}"</em></td>
              </tr>
              <tr class="border-b border-black">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">6.</td>
                <td class="py-1 px-2 font-medium border-r border-black">Bank Penyalur</td>
                <td class="py-1 px-2 font-medium">: ${escapeHtml(bankPenyalur)}</td>
              </tr>
              <tr class="border-b border-black">
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">7.</td>
                <td class="py-1 px-2 font-medium border-r border-black">Nomor Rekening Kas Desa (RKD)</td>
                <td class="py-1 px-2 font-mono font-bold tracking-wider text-black">: ${escapeHtml(nomorRekening)}</td>
              </tr>
              <tr>
                <td class="text-center font-bold py-1 px-2 border-r border-black bg-neutral-100">8.</td>
                <td class="py-1 px-2 font-medium border-r border-black">Kepala Desa & Bendahara / Kaur</td>
                <td class="py-1 px-2 font-medium">: ${escapeHtml(kepalaDesa)} / ${escapeHtml(kaurKeuangan)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- KLAUSUL INTEGRITAS & PERSYARATAN -->
        <p class="indent-8 mt-2">
          Penerbitan rekomendasi ini didasarkan pada hasil verifikasi kelengkapan berkas administrasi 
          dan persyaratan penyaluran yang telah dinyatakan lengkap dan memenuhi syarat sesuai ketentuan peraturan 
          perundang-undangan yang berlaku. Kebenaran materiil dan formil atas penggunaan anggaran 
          menjadi tanggung jawab mutlak Pemerintah Desa ${escapeHtml(namaDesa)} sesuai dengan Surat Pernyataan Tanggung Jawab Mutlak (SPTJM).
        </p>

        ${klausulKhusus ? `<p class="indent-8 mt-1 italic text-slate-700 font-sans text-[11.5px]"><strong>Catatan Tambahan:</strong> ${escapeHtml(klausulKhusus)}</p>` : ''}

        <!-- PARAGRAF PENUTUP -->
        <p class="indent-8 mt-2">
          Demikian rekomendasi ini diberikan untuk dipergunakan sebagaimana mestinya dan diproses 
          sesuai mekanisme penyaluran keuangan daerah yang berlaku. Atas perhatian dan kerjasamanya diucapkan terima kasih.
        </p>
      </div>

      <!-- TANDA TANGAN CAMAT WARU -->
      <div class="mt-6 flex justify-end font-serif text-[12.5px]">
        <div class="w-72 text-center">
          <div class="font-bold uppercase tracking-wider text-black">
            CAMAT WARU,
          </div>

          <!-- AREA TANDA TANGAN (TTE BSRE vs BASAH) -->
          <div class="h-28 flex flex-col items-center justify-center my-1 relative">
            ${metodeTte === 'tte' ? `
              <!-- VISUALISASI TTE RESMI BSrE BSSN -->
              <div class="border border-slate-300 bg-slate-50/80 rounded p-1.5 flex items-center gap-2 text-left max-w-[270px]">
                <div class="flex-shrink-0">
                  ${getQrCodeSvg()}
                </div>
                <div class="text-[9px] leading-tight font-sans text-slate-700">
                  <div class="font-bold text-slate-900 flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                    DITANDATANGANI ELEKTRONIK
                  </div>
                  <div class="text-[8px] text-slate-500 mt-0.5">Balai Sertifikasi Elektronik (BSrE) - BSSN</div>
                  <div class="text-[8px] text-slate-600 mt-0.5 font-mono">ID: ${nomorSurat.replace(/[^a-zA-Z0-9]/g, '')}</div>
                </div>
              </div>
            ` : `
              <!-- TANDA TANGAN MANUAL DENGAN STEMPEL RESMI -->
              <div class="relative w-full h-full flex items-center justify-center">
                <div class="absolute left-4 opacity-80 pointer-events-none transform -rotate-12">
                  ${getStempelKecamatanSvg()}
                </div>
                <div class="text-xs text-slate-400 italic">
                  (Tanda Tangan Basah)
                </div>
              </div>
            `}
          </div>

          <!-- NAMA & NIP CAMAT -->
          <div class="font-bold uppercase tracking-wide underline text-black">
            ${escapeHtml(namaCamat)}
          </div>
          <div class="text-xs text-neutral-800 leading-tight">
            ${escapeHtml(pangkatCamat)}
          </div>
          <div class="text-xs text-neutral-800 font-mono">
            NIP. ${escapeHtml(nipCamat)}
          </div>
        </div>
      </div>

      <!-- TEMBUSAN -->
      <div class="mt-4 pt-3 border-t border-slate-300 font-serif text-[11px] text-black">
        <div class="font-bold underline mb-1">Tembusan disampaikan Kepada Yth:</div>
        <ol class="list-decimal pl-5 space-y-0.5 leading-snug">
          <li>Bupati Penajam Paser Utara (sebagai laporan);</li>
          <li>Inspektur Inspektorat Daerah Kabupaten Penajam Paser Utara di Penajam;</li>
          <li>Kepala Dinas Pemberdayaan Masyarakat dan Desa (DPMD) Kab. Penajam Paser Utara;</li>
          <li>Kepala Desa ${escapeHtml(namaDesa)} yang bersangkutan;</li>
          <li>Pertinggal / Arsip Kecamatan Waru.</li>
        </ol>
      </div>

      ${metodeTte === 'tte' ? `
        <!-- FOOTER RESMI BSrE PERMENDAGRI -->
        <div class="absolute bottom-3 left-8 right-8 text-[8.5px] font-sans text-slate-500 border-t border-slate-200 pt-1 flex justify-between items-center">
          <div>Dokumen ini telah ditandatangani secara elektronik bersertifikasi BSrE BSSN sesuai UU ITE</div>
          <div class="font-mono">Hal 1 dari ${tampilkanLampiran ? '2' : '1'}</div>
        </div>
      ` : ''}

    </div>
  `;

  // ==========================================
  // HALAMAN 2: LAMPIRAN BERKAS (OPTIONAL)
  // ==========================================
  if (tampilkanLampiran) {
    docHtml += `
      <div class="page-break my-6 print:my-0"></div>
      
      <div class="surat-sheet bg-white text-black shadow-xl mx-auto relative print:shadow-none print:m-0" id="suratHalaman2">
        
        <!-- HEADER LAMPIRAN -->
        <div class="text-right text-[11.5px] font-serif leading-snug pb-2 border-b border-black">
          <div><strong>LAMPIRAN SURAT REKOMENDASI CAMAT WARU</strong></div>
          <div>Nomor : ${escapeHtml(nomorSurat)}</div>
          <div>Tanggal : ${tanggalSuratIndo}</div>
          <div>Tentang : Rekomendasi Penyaluran ${escapeHtml(jenisDanaLabel)} ${escapeHtml(tahap)} TA ${escapeHtml(tahunAnggaran)} Desa ${escapeHtml(namaDesa)}</div>
        </div>

        <div class="mt-4 text-center">
          <h4 class="text-sm font-bold uppercase font-serif tracking-wide underline">
            DAFTAR KELENGKAPAN BERKAS VERIFIKASI PERSYARATAN PENCAIRAN
          </h4>
          <p class="text-xs font-serif text-slate-700 mt-1">
            Tim Fasilitasi Pengelolaan Keuangan Desa Tingkat Kecamatan Waru
          </p>
        </div>

        <!-- TABEL CHECKLIST BERKAS -->
        <div class="mt-4">
          <table class="w-full border-collapse border border-black text-[12px] font-serif">
            <thead>
              <tr class="bg-neutral-100 border-b border-black text-center font-bold">
                <th class="py-2 px-2 border-r border-black w-10">NO</th>
                <th class="py-2 px-3 border-r border-black text-left">URAIAN DOKUMEN / BERKAS PERSYARATAN</th>
                <th class="py-2 px-2 border-r border-black w-24">STATUS</th>
                <th class="py-2 px-3 border-black w-32">KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
              ${AppState.berkasDefault.map((item, idx) => {
                const isAda = berkasChecked.includes(item.teks);
                return `
                  <tr class="border-b border-black">
                    <td class="py-1.5 px-2 border-r border-black text-center">${idx + 1}.</td>
                    <td class="py-1.5 px-3 border-r border-black">${escapeHtml(item.teks)}</td>
                    <td class="py-1.5 px-2 border-r border-black text-center font-bold ${isAda ? 'text-emerald-700' : 'text-rose-600'}">
                      ${isAda ? 'LENGKAP' : 'BELUM'}
                    </td>
                    <td class="py-1.5 px-3 border-black text-center text-[11px] text-neutral-600">
                      ${isAda ? 'Memenuhi Syarat' : '-'}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <div class="mt-4 text-[12px] font-serif leading-relaxed">
          <p class="indent-6">
            Berdasarkan pemeriksaan dan verifikasi dokumen di atas, Tim Verifikasi Kecamatan Waru menyatakan 
            bahwa berkas permohonan penyaluran yang diajukan oleh Pemerintah Desa <strong>${escapeHtml(namaDesa)}</strong> 
            telah diverifikasi dengan seksama dan dinyatakan <strong>MEMENUHI SYARAT</strong> untuk diterbitkan rekomendasi pencairan.
          </p>
        </div>

        <!-- TANDA TANGAN TIM VERIFIKASI & CAMAT -->
        <div class="mt-8 flex justify-between font-serif text-[12px]">
          <div class="w-64 text-center">
            <div>Mengetahui/Memverifikasi:</div>
            <div class="font-bold">Ketua Tim Fasilitasi Desa Kec. Waru</div>
            <div class="font-bold">Kasi Pemberdayaan Masy. & Desa</div>
            <div class="h-16"></div>
            <div class="font-bold underline uppercase">SUHARTONO, S.Sos</div>
            <div class="text-[11px]">NIP. 19820715 200801 1 008</div>
          </div>

          <div class="w-64 text-center">
            <div>Waru, ${tanggalSuratIndo}</div>
            <div class="font-bold uppercase tracking-wider">CAMAT WARU,</div>
            <div class="h-16 flex items-center justify-center">
              ${metodeTte === 'tte' ? '<span class="text-[10px] bg-slate-100 border p-1 rounded font-sans">TTE Certified BSrE</span>' : ''}
            </div>
            <div class="font-bold underline uppercase">${escapeHtml(namaCamat)}</div>
            <div class="text-[11px]">NIP. ${escapeHtml(nipCamat)}</div>
          </div>
        </div>

        <div class="absolute bottom-3 left-8 right-8 text-[8.5px] font-sans text-slate-500 border-t border-slate-200 pt-1 flex justify-between">
          <div>Lampiran Verifikasi Pengelolaan Keuangan Desa Kec. Waru</div>
          <div class="font-mono">Hal 2 dari 2</div>
        </div>

      </div>
    `;
  }

  previewDoc.innerHTML = docHtml;
  applyPaperSize();
}

// =========================================================================================
// SVG LOGO & STEMPEL RESMI PEMKAB PENAJAM PASER UTARA
// =========================================================================================
function getLogoPenajamSvg() {
  // Vector Lambang Kabupaten Penajam Paser Utara (Benuo Taka)
  return `
    <svg viewBox="0 0 100 125" class="w-20 h-24 filter drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
      <!-- Perisai Luar -->
      <path d="M 10,10 L 90,10 L 90,70 C 90,100 50,120 50,120 C 50,120 10,100 10,70 Z" 
            fill="#FACC15" stroke="#1E293B" stroke-width="2.5" />
      <!-- Perisai Dalam Hijau / Biru -->
      <path d="M 16,16 L 84,16 L 84,68 C 84,94 50,112 50,112 C 50,112 16,94 16,68 Z" 
            fill="#059669" stroke="#FFFFFF" stroke-width="1.5" />
      <!-- Jalur Merah Bawah -->
      <path d="M 22,50 L 78,50 L 78,65 C 78,85 50,104 50,104 C 50,104 22,85 22,65 Z" 
            fill="#DC2626" opacity="0.9" />
      <!-- Pita Motto BENUO TAKA -->
      <path d="M 15,35 Q 50,42 85,35 L 82,46 Q 50,53 18,46 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="1" />
      <text x="50" y="44" font-family="'Times New Roman', serif" font-weight="900" font-size="7.5" 
            fill="#0F172A" text-anchor="middle" letter-spacing="1">BENUO TAKA</text>
      <!-- Bintang Emas Puncak -->
      <polygon points="50,18 52,24 58,24 53,27 55,33 50,29 45,33 47,27 42,24 48,24" fill="#FBBF24" stroke="#78350F" stroke-width="0.5"/>
      <!-- Belanga / Obor / Mandau Simbol Daerah -->
      <path d="M 45,62 L 55,62 L 52,78 L 48,78 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="0.8"/>
      <ellipse cx="50" cy="58" rx="6" ry="4" fill="#F59E0B" stroke="#B45309" stroke-width="0.8"/>
      <!-- Riak Gelombang Bahari -->
      <path d="M 30,85 Q 40,81 50,85 Q 60,89 70,85" stroke="#FFFFFF" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M 34,91 Q 42,88 50,91 Q 58,94 66,91" stroke="#FBBF24" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `;
}

function getQrCodeSvg() {
  // Representasi QR Code BSrE
  return `
    <svg class="w-12 h-12 bg-white p-0.5 border border-slate-300 rounded shadow-xs" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <path fill="#0f172a" d="M0 0h7v7H0zM2 2h3v3H2zM22 0h7v7h-7zM24 2h3v3h-3zM0 22h7v7H0zM2 24h3v3H2zM9 1h1v1H9zM12 1h1v1h-1zM14 1h1v1h-1zM17 1h1v1h-1zM19 1h1v1h-1zM10 3h1v1h-1zM13 3h2v1h-2zM17 3h1v1h-1zM8 5h2v1H8zM12 5h1v1h-1zM15 5h1v1h-1zM18 5h2v1h-2zM9 7h1v1H9zM13 7h1v1h-1zM16 7h1v1h-1zM1 9h1v2H1zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM11 9h2v1h-2zM15 9h1v1h-1zM18 9h1v1h-1zM21 9h2v1h-2zM25 9h1v1h-1zM28 9h1v1h-1zM3 11h1v1H3zM6 11h1v1H6zM9 11h1v1H9zM13 11h2v1h-2zM17 11h1v1h-1zM20 11h2v1h-2zM24 11h1v1h-1zM27 11h1v1h-1zM1 13h2v1H1zM5 13h1v1H5zM8 13h1v1H8zM11 13h1v1h-1zM14 13h1v1h-1zM17 13h1v1h-1zM20 13h1v1h-1zM23 13h2v1h-2zM27 13h1v1h-1zM0 15h1v1H0zM3 15h2v1H3zM7 15h1v1H7zM10 15h2v1h-2zM14 15h1v1h-1zM17 15h2v1h-2zM21 15h1v1h-1zM24 15h2v1h-2zM28 15h1v1h-1zM2 17h1v1H2zM5 17h1v1H5zM8 17h1v1H8zM12 17h1v1h-1zM15 17h2v1h-2zM19 17h1v1h-1zM22 17h1v1h-1zM26 17h1v1h-1zM1 19h1v1H1zM4 19h2v1H4zM8 19h2v1H8zM12 19h1v1h-1zM15 19h1v1h-1zM18 19h2v1h-2zM22 19h1v1h-1zM25 19h1v1h-1zM28 19h1v1h-1zM9 21h1v1H9zM13 21h1v1h-1zM16 21h2v1h-2zM20 21h1v1h-1zM24 21h1v1h-1zM27 21h1v1h-1zM10 23h2v1h-2zM14 23h1v1h-1zM18 23h1v1h-1zM21 23h1v1h-1zM25 23h1v1h-1zM28 23h1v1h-1zM8 25h1v1H8zM11 25h1v1h-1zM14 25h2v1h-2zM18 25h1v1h-1zM22 25h2v1h-2zM26 25h1v1h-1zM9 27h1v1H9zM12 27h2v1h-2zM16 27h1v1h-1zM19 27h1v1h-1zM23 27h1v1h-1zM27 27h1v1h-1z"/>
    </svg>
  `;
}

function getStempelKecamatanSvg() {
  // Stempel Ungu Basah Kecamatan Waru
  return `
    <svg class="w-24 h-24 text-violet-800" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="2,1" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="1.8" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.2" />
      
      <!-- Teks Melingkar Atas -->
      <path id="curveAtas" d="M 18,50 A 32,32 0 1,1 82,50" fill="none" />
      <text font-size="7.5" font-family="sans-serif" font-weight="900" fill="currentColor" letter-spacing="1.2">
        <textPath href="#curveAtas" startOffset="50%" text-anchor="middle">
          KECAMATAN WARU
        </textPath>
      </text>

      <!-- Teks Melingkar Bawah -->
      <path id="curveBawah" d="M 82,50 A 32,32 0 0,1 18,50" fill="none" />
      <text font-size="6" font-family="sans-serif" font-weight="900" fill="currentColor" letter-spacing="0.8">
        <textPath href="#curveBawah" startOffset="50%" text-anchor="middle">
          KAB. PENAJAM PASER UTARA
        </textPath>
      </text>

      <!-- Bintang Tengah -->
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
      // Standar Folio / F4 Indonesia: 215mm x 330mm
      sheet.style.width = '215mm';
      sheet.style.minHeight = '330mm';
      sheet.style.padding = '20mm 20mm 15mm 25mm'; // Margin: Atas Kanan Bawah Kiri
    } else {
      // Standar A4: 210mm x 297mm
      sheet.style.width = '210mm';
      sheet.style.minHeight = '297mm';
      sheet.style.padding = '18mm 18mm 15mm 22mm';
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
    saveBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Menyimpan...
    `;
    saveBtn.disabled = true;
  }

  // Kumpulkan payload data
  const data = getFormData();
  
  // 1. Simpan ke Local Storage terlebih dahulu
  AppState.riwayat.unshift(data);
  localStorage.setItem('sip_riwayat_rekom', JSON.stringify(AppState.riwayat));
  renderHistoryTable();

  // 2. Jika Google Apps Script URL dikonfigurasi, kirim ke Google Sheets
  if (AppState.gasUrl && AppState.gasUrl.startsWith('http')) {
    try {
      const response = await fetch(AppState.gasUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // mode text/plain menghindari preflight CORS di Google Apps Script
        },
        body: JSON.stringify({
          action: 'simpanRekomendasi',
          ...data
        })
      });

      const resJson = await response.json();
      if (resJson.success) {
        showToast('Berhasil disimpan ke Google Sheets & Arsip Lokal!', 'success');
        AppState.isConnected = true;
      } else {
        showToast(`Disimpan di lokal. Google Sheets respon: ${resJson.message || 'Gagal'}`, 'warning');
      }
    } catch (err) {
      console.warn('Google Sheets POST error:', err);
      showToast('Tersimpan di Arsip Lokal. (Google Sheets belum dapat dihubungi)', 'info');
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
  const berkasChecked = [];
  document.querySelectorAll('.berkas-checkbox:checked').forEach(cb => {
    berkasChecked.push(cb.value);
  });

  return {
    id: 'REK-' + Date.now(),
    waktuSimpan: new Date().toLocaleString('id-ID'),
    nomorSurat: document.getElementById('inputNomorSurat')?.value || '',
    tanggalSurat: document.getElementById('inputTanggalSurat')?.value || '',
    namaDesa: document.getElementById('selectNamaDesa')?.value || '',
    jenisDana: document.getElementById('selectJenisDana')?.value || '',
    tahap: document.getElementById('selectTahap')?.value || '',
    tahunAnggaran: document.getElementById('inputTahunAnggaran')?.value || '',
    nominalAngka: parseCurrencyInput(document.getElementById('inputNominalAngka')?.value || '0'),
    terbilang: document.getElementById('outputTerbilang')?.textContent || '',
    bankPenyalur: document.getElementById('inputBankPenyalur')?.value || '',
    nomorRekening: document.getElementById('inputNomorRekening')?.value || '',
    kepalaDesa: document.getElementById('inputKepalaDesa')?.value || '',
    kaurKeuangan: document.getElementById('inputKaurKeuangan')?.value || '',
    nomorSuratPengantar: document.getElementById('inputNomorPengantarDesa')?.value || '',
    tanggalPengantarDesa: document.getElementById('inputTanggalPengantarDesa')?.value || '',
    namaCamat: document.getElementById('inputNamaCamat')?.value || '',
    nipCamat: document.getElementById('inputNipCamat')?.value || '',
    metodeTte: document.getElementById('selectMetodeTte')?.value || 'tte',
    kelengkapanBerkas: berkasChecked,
    status: 'Diterbitkan'
  };
}

async function testGasConnection(isSilent = false) {
  const url = AppState.gasUrl;
  const statusEl = document.getElementById('statusGasTest');
  
  if (!url || !url.startsWith('http')) {
    if (statusEl) statusEl.innerHTML = '<span class="text-rose-600 font-semibold">❌ URL Google Apps Script belum diisi!</span>';
    if (!isSilent) showToast('Harap masukkan URL Web App Google Apps Script', 'error');
    updateSyncStatusBadge(false);
    return;
  }

  if (statusEl) {
    statusEl.innerHTML = '<span class="text-blue-600">⏳ Sedang menghubungi Google Sheets...</span>';
  }

  try {
    const pingUrl = url.includes('?') ? `${url}&action=ping` : `${url}?action=ping`;
    const response = await fetch(pingUrl, { method: 'GET' });
    const res = await response.json();

    if (res.success) {
      AppState.isConnected = true;
      if (statusEl) {
        statusEl.innerHTML = `<span class="text-emerald-600 font-semibold">✅ Terhubung ke Spreadsheet: "${res.spreadsheetName || 'Database PPU'}"</span>`;
      }
      if (!isSilent) showToast('Koneksi Google Sheets Berhasil!', 'success');
      updateSyncStatusBadge(true);
    } else {
      throw new Error(res.error || 'Respon tidak valid');
    }
  } catch (err) {
    AppState.isConnected = false;
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-rose-600 font-semibold">❌ Gagal terhubung: ${err.message || 'CORS / Izin Apps Script'}</span>`;
    }
    if (!isSilent) showToast('Gagal terhubung ke Google Sheets. Pastikan Who has access = Anyone!', 'error');
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
    // 1. Tarik Master Desa
    const urlDesa = AppState.gasUrl.includes('?') ? `${AppState.gasUrl}&action=getMasterDesa` : `${AppState.gasUrl}?action=getMasterDesa`;
    const resDesa = await fetch(urlDesa);
    const dataDesa = await resDesa.json();

    if (dataDesa.success && Array.isArray(dataDesa.data) && dataDesa.data.length > 0) {
      AppState.masterDesa = dataDesa.data.map(d => ({
        id: d['ID Desa'] || 'DESA',
        nama: d['Nama Desa'] || '',
        kades: d['Kepala Desa'] || '',
        kaurKeuangan: d['Kaur Keuangan / Bendahara'] || '',
        bank: d['Bank Penyalur'] || '',
        rekening: d['Nomor Rekening Kas Desa (RKD)'] || '',
        atasNama: d['Atas Nama Rekening'] || '',
        alamat: d['Alamat Kantor Desa'] || ''
      }));
      populateDesaSelect();
      triggerAutoFillDesa();
    }

    // 2. Tarik Riwayat Rekomendasi
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
        nomorSuratPengantar: r['Nomor Surat Pengantar'],
        tanggalPengantarDesa: r['Tanggal Pengantar Desa'],
        namaCamat: r['Nama Camat'],
        nipCamat: r['NIP Camat'],
        metodeTte: r['Metode TTE / Tanda Tangan']?.includes('BSrE') ? 'tte' : 'manual',
        status: r['Status Penyaluran'] || 'Diterbitkan'
      }));
      localStorage.setItem('sip_riwayat_rekom', JSON.stringify(AppState.riwayat));
      renderHistoryTable();
    }

    showToast('Data Master Desa & Riwayat berhasil disinkronkan dari Google Sheets!', 'success');
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

// =========================================================================================
// RIWAYAT & ARSIP SURAT
// =========================================================================================
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
          <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold ${getDanaBadgeColor(item.jenisDana)}">
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

function getDanaBadgeColor(jenisDana) {
  switch (jenisDana) {
    case 'ADD': return 'bg-blue-100 text-blue-800 border border-blue-200';
    case 'DD': return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
    case 'DBH': return 'bg-amber-100 text-amber-800 border border-amber-200';
    case 'Bankeu': return 'bg-purple-100 text-purple-800 border border-purple-200';
    default: return 'bg-slate-100 text-slate-800';
  }
}

function loadHistoryItem(id) {
  const item = AppState.riwayat.find(r => r.id === id);
  if (!item) return;

  // Set form fields
  if (item.namaDesa) document.getElementById('selectNamaDesa').value = item.namaDesa;
  if (item.kepalaDesa) document.getElementById('inputKepalaDesa').value = item.kepalaDesa;
  if (item.kaurKeuangan) document.getElementById('inputKaurKeuangan').value = item.kaurKeuangan;
  if (item.bankPenyalur) document.getElementById('inputBankPenyalur').value = item.bankPenyalur;
  if (item.nomorRekening) document.getElementById('inputNomorRekening').value = item.nomorRekening;

  if (item.jenisDana) document.getElementById('selectJenisDana').value = item.jenisDana;
  if (item.tahap) document.getElementById('selectTahap').value = item.tahap;
  if (item.tahunAnggaran) document.getElementById('inputTahunAnggaran').value = item.tahunAnggaran;
  
  if (item.nominalAngka) {
    document.getElementById('inputNominalAngka').value = Number(item.nominalAngka).toLocaleString('id-ID');
    document.getElementById('outputTerbilang').textContent = convertTerbilang(item.nominalAngka);
  }

  if (item.nomorSurat) document.getElementById('inputNomorSurat').value = item.nomorSurat;
  if (item.tanggalSurat) document.getElementById('inputTanggalSurat').value = item.tanggalSurat;
  if (item.nomorSuratPengantar) document.getElementById('inputNomorPengantarDesa').value = item.nomorSuratPengantar;
  if (item.tanggalPengantarDesa) document.getElementById('inputTanggalPengantarDesa').value = item.tanggalPengantarDesa;

  if (item.namaCamat) document.getElementById('inputNamaCamat').value = item.namaCamat;
  if (item.nipCamat) document.getElementById('inputNipCamat').value = item.nipCamat;
  if (item.metodeTte) document.getElementById('selectMetodeTte').value = item.metodeTte;

  autoUpdatePerihal();
  updateLivePreview();
  
  // Tutup drawer
  const drawer = document.getElementById('drawerHistory');
  if (drawer) drawer.classList.add('hidden');

  showToast(`Arsip ${item.nomorSurat} dimuat ke formulir!`, 'info');
}

function deleteHistoryItem(id) {
  if (!confirm('Yakin ingin menghapus arsip surat ini dari penyimpanan?')) return;
  
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

  const headers = [
    'ID', 'Waktu Simpan', 'Nomor Surat', 'Tanggal Surat', 'Desa',
    'Jenis Dana', 'Tahap', 'Tahun Anggaran', 'Nominal (Rp)', 'Terbilang',
    'Bank', 'Nomor Rekening', 'Kepala Desa', 'Kaur Keuangan', 'Status'
  ];

  const rows = AppState.riwayat.map(item => [
    `"${item.id || ''}"`,
    `"${item.waktuSimpan || ''}"`,
    `"${item.nomorSurat || ''}"`,
    `"${item.tanggalSurat || ''}"`,
    `"${item.namaDesa || ''}"`,
    `"${item.jenisDana || ''}"`,
    `"${item.tahap || ''}"`,
    `"${item.tahunAnggaran || ''}"`,
    `"${item.nominalAngka || 0}"`,
    `"${(item.terbilang || '').replace(/"/g, '""')}"`,
    `"${item.bankPenyalur || ''}"`,
    `"'${item.nomorRekening || ''}"`,
    `"${item.kepalaDesa || ''}"`,
    `"${item.kaurKeuangan || ''}"`,
    `"${item.status || 'Diterbitkan'}"`
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

// =========================================================================================
// VIEW MODE SWITCHER (SPLIT, FORM ONLY, PREVIEW ONLY)
// =========================================================================================
function setViewMode(mode) {
  AppState.viewMode = mode;
  const leftPanel = document.getElementById('panelFormKiri');
  const rightPanel = document.getElementById('panelPreviewKanan');

  if (!leftPanel || !rightPanel) return;

  if (mode === 'split') {
    leftPanel.classList.remove('hidden');
    leftPanel.classList.remove('w-full');
    leftPanel.classList.add('w-full', 'lg:w-[45%]', 'xl:w-[42%]');

    rightPanel.classList.remove('hidden');
    rightPanel.classList.remove('w-full');
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

  // Update active state di tombol navigasi
  ['btnViewSplit', 'btnViewForm', 'btnViewPreview'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('bg-slate-700', 'text-white');
  });

  const activeBtn = mode === 'split' ? 'btnViewSplit' : (mode === 'form' ? 'btnViewForm' : 'btnViewPreview');
  const btnEl = document.getElementById(activeBtn);
  if (btnEl) btnEl.classList.add('bg-slate-700', 'text-white');
}

// =========================================================================================
// HELPER TOAST NOTIFICATION & UTILS
// =========================================================================================
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
  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-2');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function copyGasScriptToClipboard() {
  const scriptContent = `/**
 * GOOGLE APPS SCRIPT: SIP-REKOM APBDES KECAMATAN WARU
 * Silakan lihat isi lengkap di file: google_apps_script.gs
 */
var SHEET_REKOMENDASI = "Riwayat_Rekomendasi";
var SHEET_MASTER_DESA = "Master_Desa";

function initSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetRekom = ss.getSheetByName(SHEET_REKOMENDASI);
  if (!sheetRekom) {
    sheetRekom = ss.insertSheet(SHEET_REKOMENDASI);
    sheetRekom.appendRow([
      "ID", "Waktu Simpan", "Nomor Surat", "Tanggal Surat", "Nama Desa",
      "Jenis Dana", "Tahap", "Tahun Anggaran", "Nominal (Rp)", "Terbilang",
      "Bank Penyalur", "Nomor Rekening RKD", "Kepala Desa", "Kaur Keuangan",
      "Nomor Surat Pengantar", "Tanggal Pengantar Desa", "Nama Camat",
      "NIP Camat", "Metode TTE / Tanda Tangan", "Kelengkapan Berkas", "Status Penyaluran"
    ]);
  }
}

function doGet(e) {
  initSheets();
  var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "ping";
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (action === "ping") {
    return jsonResponse({ success: true, message: "Koneksi Aktif!", spreadsheetName: ss.getName() });
  }
  if (action === "getMasterDesa") {
    var sheet = ss.getSheetByName(SHEET_MASTER_DESA);
    var data = sheet ? sheet.getDataRange().getValues() : [];
    return jsonResponse({ success: true, data: data });
  }
  if (action === "getRiwayat") {
    var sheet = ss.getSheetByName(SHEET_REKOMENDASI);
    var data = sheet ? sheet.getDataRange().getValues() : [];
    return jsonResponse({ success: true, data: data });
  }
  return jsonResponse({ success: false, message: "Aksi tidak dikenali" });
}

function doPost(e) {
  initSheets();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var payload = JSON.parse(e.postData.contents);
  var sheet = ss.getSheetByName(SHEET_REKOMENDASI);
  var id = payload.id || ("REK-" + Utilities.formatDate(new Date(), "GMT+8", "yyyyMMdd-HHmmss"));
  sheet.appendRow([
    id, new Date().toLocaleString(), payload.nomorSurat, payload.tanggalSurat,
    payload.namaDesa, payload.jenisDana, payload.tahap, payload.tahunAnggaran,
    payload.nominalAngka, payload.terbilang, payload.bankPenyalur, payload.nomorRekening,
    payload.kepalaDesa, payload.kaurKeuangan, payload.nomorSuratPengantar,
    payload.tanggalPengantarDesa, payload.namaCamat, payload.nipCamat,
    payload.metodeTte, Array.isArray(payload.kelengkapanBerkas) ? payload.kelengkapanBerkas.join("; ") : "",
    payload.status || "Diterbitkan"
  ]);
  return jsonResponse({ success: true, message: "Berhasil disimpan!", id: id });
}

function jsonResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}`;

  navigator.clipboard.writeText(scriptContent).then(() => {
    showToast('Kode Google Apps Script disalin ke clipboard!', 'success');
  }).catch(() => {
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
