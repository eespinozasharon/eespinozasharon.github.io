# Publica la version actual de Drive en https://eespinozasharon.github.io
# Uso: clic derecho > "Ejecutar con PowerShell", o en una terminal:  .\publicar.ps1 "mensaje opcional"

param([string]$mensaje = "Actualizar sitio")

$src = $PSScriptRoot
$dst = "$env:USERPROFILE\sitio-build"

robocopy $src $dst /MIR /XD node_modules build .git /XF package-lock.json /NFL /NDL /NJH /NJS /NP | Out-Null

Set-Location $dst
git add -A
git commit -m $mensaje
git push
Write-Host "Listo. La web se actualiza en 1-2 minutos: https://eespinozasharon.github.io"
