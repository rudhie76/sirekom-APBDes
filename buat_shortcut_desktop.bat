@echo off
setlocal
title Pasang Shortcut SIP-REKOM APBDes di Desktop
echo =======================================================================
echo MEMASANG SHORTCUT SIP-REKOM APBDES DENGAN LOGO PEMKAB PPU KE DESKTOP
echo =======================================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0buat_shortcut.ps1"

echo.
echo Silakan periksa layar Desktop Anda.
echo Ikon aplikasi SIP-REKOM kini sudah berlogo Pemkab PPU.
echo.
pause
