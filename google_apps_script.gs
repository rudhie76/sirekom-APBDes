/**
 * =========================================================================================
 * GOOGLE APPS SCRIPT: SIP-REKOM APBDES KECAMATAN WARU
 * KABUPATEN PENAJAM PASER UTARA
 * =========================================================================================
 * Backend Database Google Sheets untuk Generator & Pengelola Surat Rekomendasi Pencairan APBDes
 * (ADD, DD, DBH, dan Bantuan Keuangan / Bankeu)
 * 
 * CARA PEMASANGAN (DEPLOI):
 * 1. Buka Google Sheets baru di https://sheets.new
 * 2. Beri nama spreadsheet, misal: "DATABASE REKOMENDASI APBDES KECAMATAN WARU"
 * 3. Klik menu: Extensions (Ekstensi) > Apps Script
 * 4. Hapus semua kode default di Apps Script, lalu tempelkan (paste) seluruh isi file ini.
 * 5. Klik icon Save (Simpan) / tekan Ctrl + S.
 * 6. Klik tombol "Deploy" (Terapkan) di kanan atas > "New deployment" (Penerapan baru).
 * 7. Pilih jenis: "Web app" (Aplikasi web).
 * 8. Konfigurasi:
 *    - Description: "SIP Rekom APBDes API v1"
 *    - Execute as: "Me" (Saya / akun Google Anda)
 *    - Who has access: "Anyone" (Siapa saja)  <-- PENTING agar web lokal dapat terhubung tanpa CORS error!
 * 9. Klik "Deploy". Berikan izin (Authorize access) jika diminta.
 * 10. Salin "Web app URL" (contoh: https://script.google.com/macros/s/XXXXX/exec)
 * 11. Tempelkan URL tersebut ke Pengaturan Google Sheets di aplikasi web Anda.
 * =========================================================================================
 */

// Nama-nama sheet yang akan digunakan
var SHEET_REKOMENDASI = "Riwayat_Rekomendasi";
var SHEET_MASTER_DESA = "Master_Desa";

/**
 * Inisialisasi Sheet dan Kolom jika belum ada
 */
function initSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Sheet Riwayat Rekomendasi
  var sheetRekom = ss.getSheetByName(SHEET_REKOMENDASI);
  if (!sheetRekom) {
    sheetRekom = ss.insertSheet(SHEET_REKOMENDASI);
    var headersRekom = [
      "ID",
      "Waktu Simpan",
      "Nomor Surat",
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
      "Nomor Surat Pengantar",
      "Tanggal Pengantar Desa",
      "Nama Camat",
      "NIP Camat",
      "Metode TTE / Tanda Tangan",
      "Kelengkapan Berkas",
      "Status Penyaluran"
    ];
    sheetRekom.appendRow(headersRekom);
    
    // Format Header
    var headerRange = sheetRekom.getRange(1, 1, 1, headersRekom.length);
    headerRange.setBackground("#1E3A8A"); // Navy blue
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    sheetRekom.setFrozenRows(1);
  }
  
  // 2. Sheet Master Desa
  var sheetDesa = ss.getSheetByName(SHEET_MASTER_DESA);
  if (!sheetDesa) {
    sheetDesa = ss.insertSheet(SHEET_MASTER_DESA);
    var headersDesa = [
      "ID Desa",
      "Nama Desa",
      "Kepala Desa",
      "Kaur Keuangan / Bendahara",
      "Bank Penyalur",
      "Nomor Rekening Kas Desa (RKD)",
      "Atas Nama Rekening",
      "Alamat Kantor Desa",
      "Kontak / Telepon"
    ];
    sheetDesa.appendRow(headersDesa);
    
    // Format Header
    var headerRangeDesa = sheetDesa.getRange(1, 1, 1, headersDesa.length);
    headerRangeDesa.setBackground("#065F46"); // Emerald green
    headerRangeDesa.setFontColor("#FFFFFF");
    headerRangeDesa.setFontWeight("bold");
    sheetDesa.setFrozenRows(1);
    
    // Tambahkan data desa default di Kecamatan Waru
    var defaultDesa = [
      [
        "DESA-01",
        "Waru",
        "KARTONO, S.Pd",
        "SRI WAHYUNI, S.E",
        "PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru",
        "007201889901",
        "Pemerintah Desa Waru (RKD)",
        "Jl. Propinsi Km. 25, Desa Waru, Kec. Waru",
        "081254320001"
      ],
      [
        "DESA-02",
        "Sesulu",
        "H. RAHMAN SALEH",
        "NURDIANTO, S.Kom",
        "PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru",
        "007201889902",
        "Pemerintah Desa Sesulu (RKD)",
        "Jl. Negara Km. 32 RT. 04, Desa Sesulu, Kec. Waru",
        "081347650002"
      ],
      [
        "DESA-03",
        "Api-Api",
        "SUDIRMAN",
        "M. FACHRI ROZI",
        "PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru",
        "007201889903",
        "Pemerintah Desa Api-Api (RKD)",
        "Jl. Silkar RT. 02, Desa Api-Api, Kec. Waru",
        "082155880003"
      ],
      [
        "DESA-04",
        "Bangun Mulya",
        "BOIMIN, S.Sos",
        "EKO PRASETYO",
        "PT BPD Kaltim Kaltara (Bankaltimtara) Capem Waru",
        "007201889904",
        "Pemerintah Desa Bangun Mulya (RKD)",
        "Jl. Usaha Tani RT. 06, Desa Bangun Mulya, Kec. Waru",
        "085246770004"
      ]
    ];
    
    for (var i = 0; i < defaultDesa.length; i++) {
      sheetDesa.appendRow(defaultDesa[i]);
    }
  }
}

/**
 * Handle GET Requests
 * Contoh: ?action=ping
 *         ?action=getMasterDesa
 *         ?action=getRiwayat
 */
function doGet(e) {
  try {
    initSheets();
    var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "ping";
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (action === "ping") {
      return jsonResponse({
        success: true,
        message: "Koneksi Google Sheets SIP-REKOM APBDes Kecamatan Waru Aktif!",
        timestamp: new Date().toISOString(),
        spreadsheetName: ss.getName(),
        spreadsheetId: ss.getId()
      });
    }
    
    if (action === "getMasterDesa") {
      var sheet = ss.getSheetByName(SHEET_MASTER_DESA);
      var data = sheet.getDataRange().getValues();
      var headers = data[0];
      var result = [];
      
      for (var r = 1; r < data.length; r++) {
        var row = data[r];
        if (!row[1]) continue; // Lewati jika nama desa kosong
        var item = {};
        for (var c = 0; c < headers.length; c++) {
          item[headers[c]] = row[c];
        }
        result.push(item);
      }
      
      return jsonResponse({
        success: true,
        data: result,
        count: result.length
      });
    }
    
    if (action === "getRiwayat") {
      var sheet = ss.getSheetByName(SHEET_REKOMENDASI);
      var data = sheet.getDataRange().getValues();
      var headers = data[0];
      var result = [];
      
      for (var r = 1; r < data.length; r++) {
        var row = data[r];
        if (!row[0]) continue; // Lewati jika ID kosong
        var item = {};
        for (var c = 0; c < headers.length; c++) {
          item[headers[c]] = row[c];
        }
        result.push(item);
      }
      
      return jsonResponse({
        success: true,
        data: result,
        count: result.length
      });
    }
    
    return jsonResponse({
      success: false,
      message: "Aksi tidak dikenali: " + action
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
 * Menyimpan data rekomendasi baru atau update data
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
    
    var action = payload.action || "simpanRekomendasi";
    
    if (action === "simpanRekomendasi") {
      var sheet = ss.getSheetByName(SHEET_REKOMENDASI);
      var id = payload.id || ("REK-" + Utilities.formatDate(new Date(), "GMT+8", "yyyyMMdd-HHmmss"));
      var timestamp = Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd HH:mm:ss");
      
      var rowData = [
        id,
        timestamp,
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
        payload.nomorSuratPengantar || "-",
        payload.tanggalPengantarDesa || "-",
        payload.namaCamat || "-",
        payload.nipCamat || "-",
        payload.metodeTte || "TTE Elektronik BSrE",
        Array.isArray(payload.kelengkapanBerkas) ? payload.kelengkapanBerkas.join("; ") : (payload.kelengkapanBerkas || "-"),
        payload.status || "Diterbitkan"
      ];
      
      sheet.appendRow(rowData);
      
      return jsonResponse({
        success: true,
        message: "Surat Rekomendasi berhasil disimpan ke Google Sheets!",
        id: id,
        rowNumber: sheet.getLastRow()
      });
    }
    
    return jsonResponse({
      success: false,
      message: "Action POST tidak valid: " + action
    });
    
  } catch (err) {
    return jsonResponse({
      success: false,
      error: err.toString()
    });
  }
}

/**
 * Helper untuk response JSON dengan CORS Header
 */
function jsonResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
