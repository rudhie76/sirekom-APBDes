$ws = New-Object -ComObject WScript.Shell

$desktop = [System.Environment]::GetFolderPath([System.Environment+SpecialFolder]::DesktopDirectory)
if (-not $desktop -or -not (Test-Path $desktop)) {
    $desktop = [System.Environment]::GetFolderPath([System.Environment+SpecialFolder]::Desktop)
}
if (-not $desktop -or -not (Test-Path $desktop)) {
    $desktop = Join-Path $env:USERPROFILE "Desktop"
}
if (-not (Test-Path $desktop) -and (Test-Path (Join-Path $env:OneDrive "Desktop"))) {
    $desktop = Join-Path $env:OneDrive "Desktop"
}

$currentDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $currentDir) {
    $currentDir = (Get-Location).Path
}

$shortcutPath = Join-Path $desktop "SIP-REKOM APBDes Kecamatan Waru.lnk"
$icoPath = Join-Path $currentDir "favicon.ico"
$targetPath = Join-Path $currentDir "buka_aplikasi.bat"

$shortcut = $ws.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $targetPath
$shortcut.WorkingDirectory = $currentDir
$shortcut.IconLocation = "$icoPath,0"
$shortcut.Description = "Aplikasi SIP-REKOM APBDes Kecamatan Waru, Kab. Penajam Paser Utara"
$shortcut.Save()

Write-Host "=======================================================================" -ForegroundColor Green
Write-Host "BERHASIL MEMASANG SHORTCUT RESMI DENGAN LOGO PEMKAB PPU!" -ForegroundColor Green
Write-Host "Lokasi Shortcut : $shortcutPath" -ForegroundColor Cyan
Write-Host "File Ikon       : $icoPath" -ForegroundColor Cyan
Write-Host "=======================================================================" -ForegroundColor Green
