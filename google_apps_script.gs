/**
 * =========================================================================================
 * GOOGLE APPS SCRIPT: SIP-REKOM APBDES KECAMATAN WARU
 * KABUPATEN PENAJAM PASER UTARA
 * =========================================================================================
 * Backend Database Google Sheets & Penyimpanan Berkas Google Drive Otomatis
 * untuk:
 * 1. Penyimpanan Berkas Pengajuan Operator Desa (Surat Pengantar, Ceklist, Rekomendasi Desa)
 *    ke Folder Google Drive dan Pencatatan ke Sheet "Pengajuan_Berkas_Desa"
 * 2. Penyimpanan Arsip Surat Rekomendasi Camat Waru ke Sheet "Riwayat_Rekomendasi"
 * 3. Master Data Desa ke Sheet "Master_Desa"
 * 
 * -----------------------------------------------------------------------------------------
 * PETUNJUK PENERAPAN / DEPLOYMENT DI GOOGLE SPREADSHEET:
 * 1. Buka Google Sheets baru di https://sheets.new (atau gunakan Spreadsheet yang sudah ada).
 * 2. Beri nama file Spreadsheet, misalnya: "DATABASE SIP-REKOM KECAMATAN WARU".
 * 3. Klik menu: Extensions (Ekstensi) > Apps Script.
 * 4. Hapus seluruh kode default di editor, lalu paste (tempelkan) SELURUH isi file ini.
 * 5. Klik icon Simpan (Save) / tekan Ctrl + S.
 * 6. Klik tombol "Deploy" (Terapkan) di pojok kanan atas > pilih "New deployment" (Penerapan baru).
 * 7. Pada jenis penerapan (ikon roda gigi), pilih "Web app" (Aplikasi web).
 * 8. Konfigurasi penting:
 *    - Description : "SIP Rekom APBDes API v2 Drive & Sheets"
 *    - Execute as  : "Me" (Saya / akun Google Anda)
 *    - Who has access : "Anyone" (Siapa saja)  <-- WAJIB agar aplikasi web dapat mengirim file!
 * 9. Klik "Deploy". Klik "Authorize access" (Izinkan akses) dan setujui izin Google Drive & Sheets.
 * 10. Salin "Web app URL" (contoh: https://script.google.com/macros/s/AKfycb.../exec).
 * 11. Buka aplikasi web SIP-REKOM > klik tombol "Google Sheets" > tempelkan URL tersebut > klik "Simpan Konfigurasi".
 * =========================================================================================
 */

// Konstanta Nama Sheet
var SHEET_PENGAJUAN_DESA  = "Pengajuan_Berkas_Desa";
var SHEET_REKOMENDASI     = "Riwayat_Rekomendasi";
var SHEET_MASTER_DESA     = "Master_Desa";
var SHEET_USER            = "Data_User";
var SHEET_KIRIM_REKOM_DESA = "Kirim_Rekom_Desa";

// Nama Folder Induk di Google Drive
var NAMA_FOLDER_UTAMA_DRIVE = "SIP-REKOM APBDES KECAMATAN WARU";

/**
 * =========================================================================================
 * FUNGSI OTORISASI IZIN GOOGLE DRIVE & SPREADSHEET (JALANKAN 1 KALI DI APPS SCRIPT):
 * =========================================================================================
 * Jika saat tes koneksi muncul pesan izin Google Drive belum diaktifkan:
 * 1. Di bagian atas editor Apps Script (dekat tombol 'Debug' dan 'Jalankan'),
 *    pilih fungsi: "AKTIFKAN_IZIN_DAN_TEST"
 * 2. Klik tombol "Jalankan" (Run) ▶️
 * 3. Akan muncul kotak dialog "Otorisasi Diperlukan" (Authorization required)
 * 4. Klik "Tinjau Izin" (Review permissions) -> Pilih Akun Google Anda
 * 5. Klik "Lanjutan" (Advanced) di bagian kiri bawah
 * 6. Klik "Buka [Nama Spreadsheet] (tidak aman)"
 * 7. Klik "Izinkan" (Allow)
 * 8. Setelah itu, buat penerapan baru:
 *    Klik "Terapkan" (Deploy) > "Kelola Penerapan" > Edit > Versi: "Baru" > "Terapkan".
 * =========================================================================================
 */
function AKTIFKAN_IZIN_DAN_TEST() {
  initSheets();
  var mainFolder = getOrCreateFolder(NAMA_FOLDER_UTAMA_DRIVE);
  Logger.log("✅ BERHASIL! Izin Google Drive & Spreadsheet sudah aktif.");
  Logger.log("📁 Folder Google Drive: " + mainFolder.getName());
  Logger.log("🔗 URL Folder: " + mainFolder.getUrl());
  return "Izin Google Drive & Spreadsheet BERHASIL diaktifkan!";
}

/**
 * Inisialisasi Sheet dan Struktur Kolom
 */
function initSheets() {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
  } catch (e) {
    Logger.log("Peringatan LockService: " + e.toString());
  }

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. Sheet Pengajuan Berkas Desa (Lengkap dengan Link Google Drive)
  var sheetPengajuan = ss.getSheetByName(SHEET_PENGAJUAN_DESA);
  if (!sheetPengajuan) {
    sheetPengajuan = ss.insertSheet(SHEET_PENGAJUAN_DESA);
    var headersPengajuan = [
      "ID Pengajuan",
      "Waktu Kirim (WITA)",
      "Nama Desa",
      "Jenis Dana",
      "Tahap / Bulan",
      "Tahun Anggaran",
      "Nominal (Rp)",
      "Nomor Surat Pengantar (SP)",
      "Tanggal SP Desa",
      "Nomor Rekomendasi Desa",
      "Tanggal Rekom Desa",
      "Nama File SP",
      "Link Google Drive SP",
      "Nama File Ceklist",
      "Link Google Drive Ceklist",
      "Nama File Rekom Desa",
      "Link Google Drive Rekom Desa",
      "Folder Google Drive Desa",
      "Status Verifikasi",
      "Catatan Verifikasi / Alasan Pengembalian"
    ];
    sheetPengajuan.appendRow(headersPengajuan);

    var headerRangeP = sheetPengajuan.getRange(1, 1, 1, headersPengajuan.length);
    headerRangeP.setBackground("#047857"); // Emerald Dark
    headerRangeP.setFontColor("#FFFFFF");
    headerRangeP.setFontWeight("bold");
    sheetPengajuan.setFrozenRows(1);
  }

  // 2. Sheet Riwayat Rekomendasi Camat yang Diterbitkan
  var sheetRekom = ss.getSheetByName(SHEET_REKOMENDASI);
  if (!sheetRekom) {
    sheetRekom = ss.insertSheet(SHEET_REKOMENDASI);
    var headersRekom = [
      "ID Rekomendasi",
      "Waktu Terbit",
      "Nomor Surat Rekomendasi",
      "Tanggal Surat",
      "Nama Desa",
      "Jenis Dana",
      "Tahap",
      "Tahun Anggaran",
      "Nominal (Rp)",
      "Terbilang",
      "Bank Penyalur",
      "Nomor Rekening RKD",
      "Kepala Desa",
      "Kaur Keuangan",
      "Nama Camat",
      "NIP Camat",
      "Metode TTE / Format",
      "Status Penyaluran"
    ];
    sheetRekom.appendRow(headersRekom);

    var headerRangeR = sheetRekom.getRange(1, 1, 1, headersRekom.length);
    headerRangeR.setBackground("#1E3A8A"); // Navy Blue
    headerRangeR.setFontColor("#FFFFFF");
    headerRangeR.setFontWeight("bold");
    sheetRekom.setFrozenRows(1);
  }

  // 3. Sheet Master Data Desa di Kecamatan Waru
  var sheetDesa = ss.getSheetByName(SHEET_MASTER_DESA);
  if (!sheetDesa) {
    sheetDesa = ss.insertSheet(SHEET_MASTER_DESA);
    var headersDesa = [
      "ID Desa",
      "Nama Desa",
      "Kepala Desa",
      "Kaur Keuangan / Bendahara",
      "Bank Penyalur",
      "Nomor Rekening RKD",
      "Atas Nama Rekening",
      "Alamat Kantor Desa",
      "Kontak / HP"
    ];
    sheetDesa.appendRow(headersDesa);

    var headerRangeD = sheetDesa.getRange(1, 1, 1, headersDesa.length);
    headerRangeD.setBackground("#0F172A"); // Slate Dark
    headerRangeD.setFontColor("#FFFFFF");
    headerRangeD.setFontWeight("bold");
    sheetDesa.setFrozenRows(1);

    var defaultDesa = [
      [
        "DESA-03", "Api-Api", "SUDIRMAN", "JUMIATI, S.KM",
        "PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru",
        "1131400345", "Pemerintah Desa Api-Api (RKD)",
        "Jl. Silkar RT. 02, Desa Api-Api, Kec. Waru", "082155880003"
      ],
      [
        "DESA-02", "Sesulu", "H. RAHMAN SALEH", "MASNI",
        "PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru",
        "1131400337", "Pemerintah Desa Sesulu (RKD)",
        "Jl. Negara Km. 32 RT. 04, Desa Sesulu, Kec. Waru", "081347650002"
      ],
      [
        "DESA-04", "Bangun Mulya", "BOIMIN, S.Sos", "EKO PRASETYO",
        "PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru",
        "1131400678", "Pemerintah Desa Bangun Mulya (RKD)",
        "Jl. Usaha Tani RT. 06, Desa Bangun Mulya, Kec. Waru", "085246770004"
      ]
    ];

    for (var i = 0; i < defaultDesa.length; i++) {
      sheetDesa.appendRow(defaultDesa[i]);
    }
  }

  // 4. Sheet Data User / Pengguna Akses Sistem
  var sheetUser = ss.getSheetByName(SHEET_USER);
  if (!sheetUser) {
    sheetUser = ss.insertSheet(SHEET_USER);
    var headersUser = [
      "ID User",
      "Username",
      "Nama Akun",
      "Peran",
      "Desa / Instansi",
      "Jabatan",
      "PIN / Password",
      "Status Akun",
      "Kontak / HP"
    ];
    sheetUser.appendRow(headersUser);

    var headerRangeU = sheetUser.getRange(1, 1, 1, headersUser.length);
    headerRangeU.setBackground("#3730A3"); // Indigo Dark
    headerRangeU.setFontColor("#FFFFFF");
    headerRangeU.setFontWeight("bold");
    sheetUser.setFrozenRows(1);

    var defaultUsers = [
      [
        "USR-01", "admin_kecamatan", "Kecamatan Waru", "Kecamatan",
        "Kecamatan Waru", "Seksi PMD - Tim Fasilitasi & Verifikator Berkas",
        "pmd2026", "Aktif", "081254320000"
      ],
      [
        "USR-02", "camat_waru", "Camat Waru", "Kecamatan",
        "Kecamatan Waru", "Camat Waru (Ahmad Yani, SSTP)",
        "camat2026", "Aktif", "081154320001"
      ],
      [
        "USR-03", "desa_apiapi", "Desa Api-Api", "Desa",
        "Api-Api", "Operator & Kaur Keuangan Desa Api-Api",
        "desa2026", "Aktif", "082155880003"
      ],
      [
        "USR-04", "desa_sesulu", "Desa Sesulu", "Desa",
        "Sesulu", "Operator & Kaur Keuangan Desa Sesulu",
        "desa2026", "Aktif", "081347650002"
      ],
      [
        "USR-05", "desa_bangunmulya", "Desa Bangun Mulya", "Desa",
        "Bangun Mulya", "Operator & Kaur Keuangan Desa Bangun Mulya",
        "desa2026", "Aktif", "085246770004"
      ]
    ];

    for (var u = 0; u < defaultUsers.length; u++) {
      sheetUser.appendRow(defaultUsers[u]);
    }
  }

  // 5. Sheet Kirim Rekom Ke Desa (Arsip Berkas Rekomendasi Resmi Kecamatan Siap BKAD)
  var sheetKirimDesa = ss.getSheetByName(SHEET_KIRIM_REKOM_DESA);
  if (!sheetKirimDesa) {
    sheetKirimDesa = ss.insertSheet(SHEET_KIRIM_REKOM_DESA);
    var headersKirim = [
      "ID Kirim Rekom",
      "Waktu Kirim (WITA)",
      "Nama Desa",
      "Jenis Dana",
      "Tahap / Bulan",
      "Tahun Anggaran",
      "Nominal (Rp)",
      "Nomor Rekomendasi",
      "Tanggal Rekomendasi",
      "Nomor SP Kecamatan",
      "Tanggal SP Kecamatan",
      "Nama File Rekom TTD",
      "Link Google Drive Rekom TTD",
      "Nama File SP Kecamatan",
      "Link Google Drive SP Kecamatan",
      "Nama File Ceklist Kecamatan",
      "Link Google Drive Ceklist Kecamatan",
      "Folder Google Drive Kecamatan",
      "Status",
      "Catatan untuk Desa"
    ];
    sheetKirimDesa.appendRow(headersKirim);

    var headerRangeK = sheetKirimDesa.getRange(1, 1, 1, headersKirim.length);
    headerRangeK.setBackground("#1E3A8A"); // Navy Dark
    headerRangeK.setFontColor("#FFFFFF");
    headerRangeK.setFontWeight("bold");
    sheetKirimDesa.setFrozenRows(1);
  }
  } finally {
    try {
      lock.releaseLock();
    } catch (_) {}
  }
}

/**
 * Mengambil atau Membuat Folder di Google Drive Secara Otomatis
 */
function getOrCreateFolder(folderName, parentFolder) {
  try {
    if (parentFolder) {
      var folders = parentFolder.getFoldersByName(folderName);
      if (folders.hasNext()) {
        return folders.next();
      }
      var newFolder = parentFolder.createFolder(folderName);
      try {
        newFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      } catch (shErr) {}
      return newFolder;
    } else {
      var rootFolders = DriveApp.getFoldersByName(folderName);
      if (rootFolders.hasNext()) {
        return rootFolders.next();
      }
      var newRootFolder = DriveApp.createFolder(folderName);
      try {
        newRootFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      } catch (shErr2) {}
      return newRootFolder;
    }
  } catch (err) {
    Logger.log("Error getOrCreateFolder (" + folderName + "): " + err.toString());
    throw err;
  }
}

/**
 * Menyimpan File Base64 ke dalam Folder Google Drive
 */
function saveFileToDrive(filePayload, targetFolder, prefixName) {
  if (!filePayload || (!filePayload.base64 && !filePayload.dataUrl)) {
    return { name: "-", url: "-", id: "-" };
  }

  try {
    var rawData = filePayload.base64 || "";
    var mimeType = filePayload.type || "application/pdf";
    var originalName = filePayload.name || (prefixName + ".pdf");

    // Jika format dataUrl (data:application/pdf;base64,....)
    if (filePayload.dataUrl && filePayload.dataUrl.indexOf("base64,") > -1) {
      var parts = filePayload.dataUrl.split("base64,");
      rawData = parts[1];
      var metaPart = parts[0];
      if (metaPart.indexOf(":") > -1 && metaPart.indexOf(";") > -1) {
        mimeType = metaPart.substring(metaPart.indexOf(":") + 1, metaPart.indexOf(";"));
      }
    }

    if (!rawData) {
      return { name: originalName, url: "-", id: "-" };
    }

    var decodedBytes = Utilities.base64Decode(rawData);
    var blob = Utilities.newBlob(decodedBytes, mimeType, originalName);
    var savedFile = targetFolder.createFile(blob);
    savedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    return {
      name: savedFile.getName(),
      url: savedFile.getUrl(),
      downloadUrl: "https://drive.google.com/uc?export=download&id=" + savedFile.getId(),
      id: savedFile.getId()
    };
  } catch (err) {
    Logger.log("Error saveFileToDrive: " + err.toString());
    return { name: filePayload.name || "-", url: "Error: " + err.toString(), id: "-" };
  }
}

/**
 * Handle GET Requests
 * Contoh: ?action=ping
 *         ?action=getPengajuanDesa
 *         ?action=getRiwayat
 *         ?action=getMasterDesa
 */
function doGet(e) {
  try {
    initSheets();
    var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "ping";
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Tes Koneksi & Info Drive
    if (action === "ping") {
      var driveStatus = "OK";
      var driveUrl = "-";
      var driveKecamatanUrl = "-";
      var driveFolderName = NAMA_FOLDER_UTAMA_DRIVE;
      var driveMessage = "Google Drive Aktif";

      try {
        var mainFolder = getOrCreateFolder(NAMA_FOLDER_UTAMA_DRIVE);
        driveUrl = mainFolder.getUrl();
        driveFolderName = mainFolder.getName();
        var subFolderKec = getOrCreateFolder("kecamatan", mainFolder);
        driveKecamatanUrl = subFolderKec.getUrl();
      } catch (driveErr) {
        driveStatus = "PERLU_IZIN";
        driveMessage = "Izin Google Drive belum diaktifkan. Jalankan fungsi 'AKTIFKAN_IZIN_DAN_TEST' di Apps Script: " + driveErr.toString();
        Logger.log("DriveApp warning: " + driveErr.toString());
      }

      return jsonResponse({
        success: true,
        message: driveStatus === "OK"
          ? "Koneksi Google Sheets & Google Drive SIP-REKOM Kecamatan Waru Aktif!"
          : "Koneksi Google Sheets Aktif. Namun izin Google Drive perlu diotorisasi.",
        spreadsheetName: ss.getName(),
        spreadsheetId: ss.getId(),
        driveStatus: driveStatus,
        driveFolderName: driveFolderName,
        driveFolderUrl: driveUrl,
        driveKecamatanFolderUrl: driveKecamatanUrl,
        driveMessage: driveMessage,
        timestamp: Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd HH:mm:ss")
      });
    }

    // 2. Ambil Semua Pengajuan Berkas Desa Lengkap dengan Link Drive
    if (action === "getPengajuanDesa") {
      var sheetP = ss.getSheetByName(SHEET_PENGAJUAN_DESA) || ss.getSheetByName("Pengajuan Berkas Desa") || ss.getSheetByName("pengajuan_desa");
      if (!sheetP) {
        return jsonResponse({
          success: true,
          data: [],
          count: 0
        });
      }
      var dataP = sheetP.getDataRange().getValues();
      if (!dataP || dataP.length < 2) {
        return jsonResponse({
          success: true,
          data: [],
          count: 0
        });
      }
      var headersP = dataP[0];
      var resultP = [];

      for (var r = 1; r < dataP.length; r++) {
        var row = dataP[r];
        var hasContent = false;
        for (var c = 0; c < row.length; c++) {
          if (row[c] !== "" && row[c] !== null && row[c] !== undefined) {
            hasContent = true;
            break;
          }
        }
        if (!hasContent) continue;

        var item = {};
        for (var c2 = 0; c2 < headersP.length; c2++) {
          var hName = String(headersP[c2] || "").trim();
          if (hName) {
            item[hName] = row[c2];
          }
        }
        resultP.push(item);
      }

      return jsonResponse({
        success: true,
        data: resultP,
        count: resultP.length
      });
    }

    // 3. Ambil Riwayat Rekomendasi Camat
    if (action === "getRiwayat") {
      var sheetR = ss.getSheetByName(SHEET_REKOMENDASI) || ss.getSheetByName("Rekomendasi Pencairan") || ss.getSheetByName("riwayat");
      if (!sheetR) {
        return jsonResponse({
          success: true,
          data: [],
          count: 0
        });
      }
      var dataR = sheetR.getDataRange().getValues();
      if (!dataR || dataR.length < 2) {
        return jsonResponse({
          success: true,
          data: [],
          count: 0
        });
      }
      var headersR = dataR[0];
      var resultR = [];

      for (var i = 1; i < dataR.length; i++) {
        var rowR = dataR[i];
        var hasContentR = false;
        for (var j = 0; j < rowR.length; j++) {
          if (rowR[j] !== "" && rowR[j] !== null && rowR[j] !== undefined) {
            hasContentR = true;
            break;
          }
        }
        if (!hasContentR) continue;

        var itemR = {};
        for (var j2 = 0; j2 < headersR.length; j2++) {
          var hNameR = String(headersR[j2] || "").trim();
          if (hNameR) {
            itemR[hNameR] = rowR[j2];
          }
        }
        resultR.push(itemR);
      }

      return jsonResponse({
        success: true,
        data: resultR,
        count: resultR.length
      });
    }

    // 4. Ambil Master Data Desa (Nama Kades, Kaur Keuangan, Rekening, dsb.)
    if (action === "getMasterDesa") {
      var sheetD = ss.getSheetByName(SHEET_MASTER_DESA) || ss.getSheetByName("Master Desa") || ss.getSheetByName("master_desa");
      if (!sheetD) {
        var allSheets = ss.getSheets();
        for (var s = 0; s < allSheets.length; s++) {
          var sName = allSheets[s].getName().toLowerCase();
          if (sName.indexOf("desa") !== -1 && sName.indexOf("pengajuan") === -1 && sName.indexOf("user") === -1) {
            sheetD = allSheets[s];
            break;
          }
        }
      }

      if (!sheetD) {
        return jsonResponse({
          success: false,
          error: "Sheet Master_Desa tidak ditemukan di spreadsheet."
        });
      }

      var dataD = sheetD.getDataRange().getValues();
      if (!dataD || dataD.length < 2) {
        return jsonResponse({
          success: true,
          data: [],
          count: 0
        });
      }

      var headersD = dataD[0];
      var resultD = [];

      for (var d = 1; d < dataD.length; d++) {
        var rowD = dataD[d];
        var hasContent = false;
        for (var c = 0; c < rowD.length; c++) {
          if (rowD[c] !== "" && rowD[c] !== null && rowD[c] !== undefined) {
            hasContent = true;
            break;
          }
        }
        if (!hasContent) continue;

        var itemD = {};
        for (var k = 0; k < headersD.length; k++) {
          var headerName = String(headersD[k] || "").trim();
          if (headerName) {
            itemD[headerName] = rowD[k];
          }
        }
        resultD.push(itemD);
      }

      return jsonResponse({
        success: true,
        data: resultD,
        count: resultD.length
      });
    }

    // 5. Ambil Data User / Pengguna untuk Autentikasi
    if (action === "getUser" || action === "getDataUser") {
      var sheetU = ss.getSheetByName(SHEET_USER);
      var dataU = sheetU.getDataRange().getValues();
      var headersU = dataU[0];
      var resultU = [];

      for (var u = 1; u < dataU.length; u++) {
        var rowU = dataU[u];
        if (!rowU[0]) continue;
        var itemU = {};
        for (var cu = 0; cu < headersU.length; cu++) {
          itemU[headersU[cu]] = rowU[cu];
        }
        resultU.push(itemU);
      }

      return jsonResponse({
        success: true,
        data: resultU,
        count: resultU.length
      });
    }

    // 6. Ambil Data Kirim Rekomendasi ke Desa Lengkap dengan Link Drive
    if (action === "getKirimRekomDesa") {
      var sheetK = ss.getSheetByName(SHEET_KIRIM_REKOM_DESA) || ss.getSheetByName("Kirim_Rekom_Desa") || ss.getSheetByName("kirim_rekom_desa");
      if (!sheetK) {
        return jsonResponse({
          success: true,
          data: [],
          count: 0
        });
      }
      var dataK = sheetK.getDataRange().getValues();
      if (!dataK || dataK.length < 2) {
        return jsonResponse({
          success: true,
          data: [],
          count: 0
        });
      }
      var headersK = dataK[0];
      var resultK = [];

      for (var r = 1; r < dataK.length; r++) {
        var row = dataK[r];
        var hasContent = false;
        for (var c = 0; c < row.length; c++) {
          if (row[c] !== "" && row[c] !== null && row[c] !== undefined) {
            hasContent = true;
            break;
          }
        }
        if (!hasContent) continue;

        var item = {};
        for (var c2 = 0; c2 < headersK.length; c2++) {
          var hName = String(headersK[c2] || "").trim();
          if (hName) {
            item[hName] = row[c2];
          }
        }
        resultK.push(item);
      }

      return jsonResponse({
        success: true,
        data: resultK,
        count: resultK.length
      });
    }

    return jsonResponse({
      success: false,
      message: "Action GET tidak dikenali: " + action
    });

  } catch (err) {
    return jsonResponse({
      success: false,
      error: err.toString()
    });
  }
}

/**
 * Handle POST Requests
 * 1. simpanPengajuanDesa: Unggah 3 Dokumen (SP, Ceklist, Rekomendasi) ke Google Drive & Catat ke Sheet
 * 2. simpanRekomendasi: Catat Rekomendasi Camat ke Sheet Riwayat
 * 3. updateStatusPengajuan: Perbarui status verifikasi pengajuan desa
 */
function doPost(e) {
  try {
    initSheets();
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var payload;

    if (e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (ex) {
        payload = e.parameter;
      }
    } else {
      payload = e.parameter;
    }

    var action = payload.action || "simpanPengajuanDesa";

    // -------------------------------------------------------------------------------------
    // AKSI 1: SIMPAN PENGAJUAN DESA LENGKAP DENGAN UPLOAD FILE KE GOOGLE DRIVE
    // -------------------------------------------------------------------------------------
    if (action === "simpanPengajuanDesa") {
      var sheetPengajuan = ss.getSheetByName(SHEET_PENGAJUAN_DESA);
      var namaDesa = payload.namaDesa || "Desa";
      var id = payload.id || ("PENG-" + Utilities.formatDate(new Date(), "GMT+8", "yyyyMMdd-HHmmss"));
      var timestamp = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd HH:mm:ss");

      var subFolderUrl = "-";
      var spResult = { name: "-", url: "-", id: "-" };
      var ceklistResult = { name: "-", url: "-", id: "-" };
      var rekomResult = { name: "-", url: "-", id: "-" };

      try {
        // 1. Buat / Ambil Folder Induk & Subfolder Desa di Google Drive
        var mainFolder = getOrCreateFolder(NAMA_FOLDER_UTAMA_DRIVE);
        var subFolderDesa = getOrCreateFolder("Berkas_" + namaDesa.replace(/\s+/g, "_"), mainFolder);
        subFolderUrl = subFolderDesa.getUrl();

        // 2. Simpan Ketiga Berkas ke Google Drive
        spResult = saveFileToDrive(payload.fileSp, subFolderDesa, "SP_" + namaDesa);
        ceklistResult = saveFileToDrive(payload.fileCeklist, subFolderDesa, "Ceklist_" + namaDesa);
        rekomResult = saveFileToDrive(payload.fileRekom, subFolderDesa, "Rekomendasi_" + namaDesa);
      } catch (driveErr) {
        Logger.log("Peringatan DriveApp (perlu izin): " + driveErr.toString());
      }

      // 3. Catat Seluruh Data dan Link Google Drive ke Baris Spreadsheet
      var rowData = [
        id,
        timestamp,
        namaDesa,
        payload.jenisDana || "-",
        payload.tahap || "-",
        payload.tahunAnggaran || "-",
        payload.nominal || 0,
        payload.nomorSp || "-",
        payload.tanggalSp || "-",
        payload.nomorRekomDesa || "-",
        payload.tanggalRekomDesa || "-",
        spResult.name,
        spResult.url,
        ceklistResult.name,
        ceklistResult.url,
        rekomResult.name,
        rekomResult.url,
        subFolderUrl,
        payload.status || "Menunggu Verifikasi"
      ];

      sheetPengajuan.appendRow(rowData);

      return jsonResponse({
        success: true,
        message: subFolderUrl !== "-"
          ? "Berkas berhasil diunggah ke Google Drive dan dicatat di Google Sheets!"
          : "Pengajuan berhasil dicatat di Google Sheets (Google Drive perlu otorisasi).",
        id: id,
        driveFolderUrl: subFolderUrl,
        driveFiles: {
          sp: spResult,
          ceklist: ceklistResult,
          rekom: rekomResult
        }
      });
    }

    // -------------------------------------------------------------------------------------
    // AKSI 2: SIMPAN REKOMENDASI CAMAT YANG DITERBITKAN
    // -------------------------------------------------------------------------------------
    if (action === "simpanRekomendasi") {
      var sheetRekom = ss.getSheetByName(SHEET_REKOMENDASI);
      var idRekom = payload.id || ("REK-" + Utilities.formatDate(new Date(), "GMT+8", "yyyyMMdd-HHmmss"));
      var timestampRekom = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd HH:mm:ss");

      var rowRekom = [
        idRekom,
        timestampRekom,
        payload.nomorSurat || "-",
        payload.tanggalSurat || "-",
        payload.namaDesa || "-",
        payload.jenisDana || "-",
        payload.tahap || "-",
        payload.tahunAnggaran || "-",
        payload.nominalAngka || 0,
        payload.terbilang || "-",
        payload.bankPenyalur || "-",
        payload.nomorRekening || "-",
        payload.kepalaDesa || "-",
        payload.kaurKeuangan || "-",
        payload.namaCamat || "-",
        payload.nipCamat || "-",
        payload.metodeTte || "TTE Elektronik BSrE",
        payload.status || "Diterbitkan"
      ];

      sheetRekom.appendRow(rowRekom);

      return jsonResponse({
        success: true,
        message: "Surat Rekomendasi Camat berhasil dicatat ke Google Sheets!",
        id: idRekom
      });
    }

    // -------------------------------------------------------------------------------------
    // AKSI 3: UPDATE STATUS PENGAJUAN DESA (MISAL KETIKA DIVERIFIKASI / DIKEMBALIKAN / DITERBITKAN)
    // -------------------------------------------------------------------------------------
    if (action === "updateStatusPengajuan") {
      var sheetP = ss.getSheetByName(SHEET_PENGAJUAN_DESA);
      var dataP = sheetP.getDataRange().getValues();
      var targetId = payload.id;
      var newStatus = payload.status || "Diverifikasi";
      var catatan = payload.catatan || "";
      var updated = false;

      // Pastikan header kolom ke-20 tersedia untuk catatan
      if (dataP[0] && dataP[0].length < 20) {
        sheetP.getRange(1, 20).setValue("Catatan Verifikasi / Alasan Pengembalian");
        sheetP.getRange(1, 20).setBackground("#047857");
        sheetP.getRange(1, 20).setFontColor("#FFFFFF");
        sheetP.getRange(1, 20).setFontWeight("bold");
      }

      for (var r = 1; r < dataP.length; r++) {
        if (dataP[r][0] === targetId) {
          sheetP.getRange(r + 1, 19).setValue(newStatus); // Kolom 19: Status Verifikasi
          if (catatan) {
            sheetP.getRange(r + 1, 20).setValue(catatan); // Kolom 20: Catatan Verifikasi / Alasan Pengembalian
          }
          updated = true;
          break;
        }
      }

      return jsonResponse({
        success: updated,
        message: updated ? "Status berhasil diperbarui." : "ID pengajuan tidak ditemukan."
      });
    }

    // -------------------------------------------------------------------------------------
    // AKSI 4: SIMPAN / KIRIM REKOM KE DESA (UPLOAD 3 BERKAS KE SUBFOLDER KECAMATAN & CATAT SHEET)
    // -------------------------------------------------------------------------------------
    if (action === "simpanKirimRekomDesa") {
      var sheetKirim = ss.getSheetByName(SHEET_KIRIM_REKOM_DESA);
      if (!sheetKirim) {
        initSheets();
        sheetKirim = ss.getSheetByName(SHEET_KIRIM_REKOM_DESA);
      }
      var namaDesa = payload.namaDesa || "Desa";
      var id = payload.id || ("KRM-" + Utilities.formatDate(new Date(), "GMT+8", "yyyyMMdd-HHmmss"));
      var timestamp = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd HH:mm:ss");

      var subFolderUrl = "-";
      var rekomTtdResult = { name: "-", url: "-", id: "-" };
      var spKecResult = { name: "-", url: "-", id: "-" };
      var ceklistKecResult = { name: "-", url: "-", id: "-" };

      try {
        // 1. Buat / Ambil Folder Induk & Subfolder "kecamatan" di Google Drive
        var mainFolder = getOrCreateFolder(NAMA_FOLDER_UTAMA_DRIVE);
        var subFolderKecamatan = getOrCreateFolder("kecamatan", mainFolder);
        subFolderUrl = subFolderKecamatan.getUrl();

        // 2. Simpan Ketiga Berkas ke Google Drive dalam subfolder kecamatan
        if (payload.fileRekomTtd && (payload.fileRekomTtd.base64 || payload.fileRekomTtd.dataUrl)) {
          rekomTtdResult = saveFileToDrive(payload.fileRekomTtd, subFolderKecamatan, "Rekom_TTD_" + namaDesa.replace(/\s+/g, '_'));
        } else if (payload.existingRekomTtd) {
          rekomTtdResult = payload.existingRekomTtd;
        }

        if (payload.fileSpKecamatan && (payload.fileSpKecamatan.base64 || payload.fileSpKecamatan.dataUrl)) {
          spKecResult = saveFileToDrive(payload.fileSpKecamatan, subFolderKecamatan, "SP_Kecamatan_" + namaDesa.replace(/\s+/g, '_'));
        } else if (payload.existingSpKecamatan) {
          spKecResult = payload.existingSpKecamatan;
        }

        if (payload.fileCeklistKecamatan && (payload.fileCeklistKecamatan.base64 || payload.fileCeklistKecamatan.dataUrl)) {
          ceklistKecResult = saveFileToDrive(payload.fileCeklistKecamatan, subFolderKecamatan, "Ceklist_Kecamatan_" + namaDesa.replace(/\s+/g, '_'));
        } else if (payload.existingCeklistKecamatan) {
          ceklistKecResult = payload.existingCeklistKecamatan;
        }
      } catch (driveErr) {
        Logger.log("Peringatan DriveApp kecamatan: " + driveErr.toString());
      }

      var rowData = [
        id,
        timestamp,
        namaDesa,
        payload.jenisDana || "-",
        payload.tahap || "-",
        payload.tahunAnggaran || "-",
        payload.nominal || 0,
        payload.nomorRekom || "-",
        payload.tanggalRekom || "-",
        payload.nomorSpKec || "-",
        payload.tanggalSpKec || "-",
        rekomTtdResult.name,
        rekomTtdResult.url,
        spKecResult.name,
        spKecResult.url,
        ceklistKecResult.name,
        ceklistKecResult.url,
        subFolderUrl,
        payload.status || "Siap Kirim ke BKAD",
        payload.catatan || "-"
      ];

      // Cek apakah mode update
      var dataK = sheetKirim.getDataRange().getValues();
      var rowIndexToUpdate = -1;
      for (var r = 1; r < dataK.length; r++) {
        if (String(dataK[r][0]) === String(id)) {
          rowIndexToUpdate = r + 1;
          break;
        }
      }

      if (rowIndexToUpdate > 0) {
        sheetKirim.getRange(rowIndexToUpdate, 1, 1, rowData.length).setValues([rowData]);
      } else {
        sheetKirim.appendRow(rowData);
      }

      return jsonResponse({
        success: true,
        message: subFolderUrl !== "-"
          ? "Berkas berhasil diunggah ke subfolder 'kecamatan' Google Drive dan dicatat di sheet Kirim_Rekom_Desa!"
          : "Data berhasil dicatat di sheet Kirim_Rekom_Desa.",
        id: id,
        driveFolderUrl: subFolderUrl,
        driveFiles: {
          rekomTtd: rekomTtdResult,
          spKecamatan: spKecResult,
          ceklistKecamatan: ceklistKecResult
        }
      });
    }

    // -------------------------------------------------------------------------------------
    // AKSI 5: HAPUS KIRIM REKOM KE DESA
    // -------------------------------------------------------------------------------------
    if (action === "hapusKirimRekomDesa") {
      var sheetK = ss.getSheetByName(SHEET_KIRIM_REKOM_DESA);
      if (!sheetK) {
        return jsonResponse({ success: false, message: "Sheet tidak ditemukan." });
      }
      var dataK = sheetK.getDataRange().getValues();
      var targetId = payload.id;
      var deleted = false;

      for (var r = 1; r < dataK.length; r++) {
        if (String(dataK[r][0]) === String(targetId)) {
          sheetK.deleteRow(r + 1);
          deleted = true;
          break;
        }
      }

      return jsonResponse({
        success: deleted,
        message: deleted ? "Data kiriman rekomendasi berhasil dihapus." : "ID tidak ditemukan."
      });
    }

    // -------------------------------------------------------------------------------------
    // AKSI 6: SIMPAN / UPDATE MASTER DATA DESA
    // -------------------------------------------------------------------------------------
    if (action === "simpanMasterDesa") {
      var sheetDesa = ss.getSheetByName(SHEET_MASTER_DESA) || ss.getSheetByName("Master Desa") || ss.getSheetByName("master_desa");
      if (!sheetDesa) {
        var allSheets = ss.getSheets();
        for (var s = 0; s < allSheets.length; s++) {
          var sName = allSheets[s].getName().toLowerCase();
          if (sName.indexOf("desa") !== -1 && sName.indexOf("pengajuan") === -1 && sName.indexOf("user") === -1 && sName.indexOf("kirim") === -1) {
            sheetDesa = allSheets[s];
            break;
          }
        }
      }
      if (!sheetDesa) {
        initSheets();
        sheetDesa = ss.getSheetByName(SHEET_MASTER_DESA);
      }

      var namaDesa = (payload.namaDesa || payload.nama || "").trim();
      var idDesa = payload.id || payload.idDesa || ("DESA-" + namaDesa.toUpperCase().replace(/\s+/g, ''));
      var kades = payload.kades || payload.kepalaDesa || "";
      var kaur = payload.kaurKeuangan || "";
      var bank = payload.bank || "PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru";
      var rekening = payload.rekening !== undefined && payload.rekening !== null ? String(payload.rekening).trim() : "";
      var atasNama = payload.atasNama || ("Pemerintah Desa " + namaDesa + " (RKD)");
      var alamat = payload.alamat || "";
      var kontak = payload.kontak || "";
      var noPerkades = payload.nomorPerkades || "";
      var thnPerkades = payload.tahunPerkades || "";
      var noPerdes = payload.nomorPerdes || "";
      var thnPerdes = payload.tahunPerdes || "";

      var dataD = sheetDesa.getDataRange().getValues();
      var headersD = dataD[0] || [];

      // Fungsi fleksibel pencarian kolom berdasarkan variasi nama header
      function findCol(aliases) {
        for (var a = 0; a < aliases.length; a++) {
          var alias = aliases[a].toLowerCase().replace(/[^a-z0-9]/g, '');
          for (var c = 0; c < headersD.length; c++) {
            var hClean = String(headersD[c] || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            if (hClean === alias || hClean.indexOf(alias) !== -1 || alias.indexOf(hClean) !== -1) {
              return c + 1; // 1-based index
            }
          }
        }
        return null;
      }

      function getOrAddCol(defaultHeader, aliases) {
        var col = findCol(aliases);
        if (!col) {
          col = sheetDesa.getLastColumn() + 1;
          sheetDesa.getRange(1, col).setValue(defaultHeader);
          sheetDesa.getRange(1, col).setBackground("#0F172A");
          sheetDesa.getRange(1, col).setFontColor("#FFFFFF");
          sheetDesa.getRange(1, col).setFontWeight("bold");
          headersD[col - 1] = defaultHeader;
        }
        return col;
      }

      var colId = getOrAddCol("ID Desa", ["ID Desa", "ID", "Kode Desa"]);
      var colNama = getOrAddCol("Nama Desa", ["Nama Desa", "Desa", "Nama"]);
      var colKades = getOrAddCol("Kepala Desa", ["Kepala Desa", "Kades", "Nama Kepala Desa", "Nama Kades"]);
      var colKaur = getOrAddCol("Kaur Keuangan / Bendahara", ["Kaur Keuangan / Bendahara", "Kaur Keuangan", "Bendahara", "Kaur"]);
      var colBank = getOrAddCol("Bank Penyalur", ["Bank Penyalur", "Bank", "Nama Bank"]);
      var colRek = getOrAddCol("Nomor Rekening RKD", ["Nomor Rekening RKD", "Nomor Rekening", "Rekening RKD", "Rekening", "RKD", "No Rekening", "No. Rekening"]);
      var colAtasNama = getOrAddCol("Atas Nama Rekening", ["Atas Nama Rekening", "Atas Nama", "Nama Rekening", "Pemilik Rekening"]);
      var colAlamat = getOrAddCol("Alamat Kantor Desa", ["Alamat Kantor Desa", "Alamat", "Alamat Kantor"]);
      var colKontak = getOrAddCol("Kontak / HP", ["Kontak / HP", "Kontak", "HP", "No HP", "No. HP", "Telepon"]);
      var colNoPerkades = getOrAddCol("Nomor Perkades", ["Nomor Perkades", "No Perkades", "Perkades"]);
      var colThnPerkades = getOrAddCol("Tahun Perkades", ["Tahun Perkades", "Thn Perkades"]);
      var colNoPerdes = getOrAddCol("Nomor Perdes", ["Nomor Perdes", "No Perdes", "Perdes"]);
      var colThnPerdes = getOrAddCol("Tahun Perdes", ["Tahun Perdes", "Thn Perdes"]);

      // Cari baris desa: cek kolom nama, kolom id, atau cari kecocokan di setiap sel baris
      var cleanN = function(str) { return (str || "").toString().trim().replace(/^desa\s+/i, '').toLowerCase(); };
      var targetNorm = cleanN(namaDesa);
      var rowIndex = -1;

      for (var r = 1; r < dataD.length; r++) {
        var rowId = String(dataD[r][colId - 1] || "").trim().toLowerCase();
        var rowNama = cleanN(String(dataD[r][colNama - 1] || ""));
        var rowMatched = (rowNama === targetNorm || rowId === idDesa.toLowerCase());

        if (!rowMatched) {
          for (var c2 = 0; c2 < dataD[r].length; c2++) {
            if (cleanN(String(dataD[r][c2] || "")) === targetNorm) {
              rowMatched = true;
              break;
            }
          }
        }

        if (rowMatched) {
          rowIndex = r + 1;
          break;
        }
      }

      if (rowIndex > 0) {
        if (colId) sheetDesa.getRange(rowIndex, colId).setValue(idDesa);
        if (colNama) sheetDesa.getRange(rowIndex, colNama).setValue(namaDesa);
        if (colKades) sheetDesa.getRange(rowIndex, colKades).setValue(kades);
        if (colKaur) sheetDesa.getRange(rowIndex, colKaur).setValue(kaur);
        if (colBank) sheetDesa.getRange(rowIndex, colBank).setValue(bank);
        if (colRek) {
          // Format sebagai teks agar angka rekening tidak terpotong atau terkonversi
          sheetDesa.getRange(rowIndex, colRek).setNumberFormat("@").setValue(String(rekening).trim());
        }
        if (colAtasNama) sheetDesa.getRange(rowIndex, colAtasNama).setValue(atasNama);
        if (colAlamat) sheetDesa.getRange(rowIndex, colAlamat).setValue(alamat);
        if (colKontak) sheetDesa.getRange(rowIndex, colKontak).setNumberFormat("@").setValue(String(kontak).trim());
        if (colNoPerkades) sheetDesa.getRange(rowIndex, colNoPerkades).setValue(noPerkades);
        if (colThnPerkades) sheetDesa.getRange(rowIndex, colThnPerkades).setValue(thnPerkades);
        if (colNoPerdes) sheetDesa.getRange(rowIndex, colNoPerdes).setValue(noPerdes);
        if (colThnPerdes) sheetDesa.getRange(rowIndex, colThnPerdes).setValue(thnPerdes);
      } else {
        var newRow = [];
        var totalCols = sheetDesa.getLastColumn();
        for (var c3 = 1; c3 <= totalCols; c3++) {
          newRow.push("");
        }
        if (colId) newRow[colId - 1] = idDesa;
        if (colNama) newRow[colNama - 1] = namaDesa;
        if (colKades) newRow[colKades - 1] = kades;
        if (colKaur) newRow[colKaur - 1] = kaur;
        if (colBank) newRow[colBank - 1] = bank;
        if (colRek) newRow[colRek - 1] = "'" + String(rekening).trim();
        if (colAtasNama) newRow[colAtasNama - 1] = atasNama;
        if (colAlamat) newRow[colAlamat - 1] = alamat;
        if (colKontak) newRow[colKontak - 1] = "'" + String(kontak).trim();
        if (colNoPerkades) newRow[colNoPerkades - 1] = noPerkades;
        if (colThnPerkades) newRow[colThnPerkades - 1] = thnPerkades;
        if (colNoPerdes) newRow[colNoPerdes - 1] = noPerdes;
        if (colThnPerdes) newRow[colThnPerdes - 1] = thnPerdes;
        sheetDesa.appendRow(newRow);
        rowIndex = sheetDesa.getLastRow();
      }

      return jsonResponse({
        success: true,
        message: "Data Master Desa " + namaDesa + " berhasil diperbarui di sheet '" + sheetDesa.getName() + "' baris ke-" + rowIndex + "!",
        updatedSheet: sheetDesa.getName(),
        updatedRow: rowIndex,
        updatedRekening: rekening
      });
    }

    return jsonResponse({
      success: false,
      message: "Action POST tidak dikenali: " + action
    });

  } catch (err) {
    return jsonResponse({
      success: false,
      error: err.toString()
    });
  }
}

/**
 * Output Response JSON dengan Header CORS
 */
function jsonResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
