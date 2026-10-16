# Copia el codigo de Drive a una carpeta local y abre el sitio en el navegador.
# node_modules vive solo en la carpeta local (Drive no lo maneja bien).
# Uso: clic derecho > "Ejecutar con PowerShell", o en una terminal:  .\dev.ps1

$src = $PSScriptRoot
$dst = "$env:USERPROFILE\sitio-build"

robocopy $src $dst /MIR /XD node_modules build .git /XF package-lock.json /NFL /NDL /NJH /NJS /NP | Out-Null

Set-Location $dst
if (-not (Test-Path "node_modules\.bin\react-scripts.cmd")) {
    npm install --no-audit --no-fund
    Copy-Item package-lock.json $src -Force
}
npm start
