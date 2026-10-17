# Publica la version actual de Drive en https://eespinozasharon.github.io
# Uso: clic derecho > "Ejecutar con PowerShell", o en una terminal:  .\publicar.ps1 "mensaje opcional"

param([string]$mensaje = "Actualizar sitio")

$src = $PSScriptRoot
$dst = "$env:USERPROFILE\sitio-build"

Write-Host "1/3 Copiando archivos desde Drive..."
robocopy $src $dst /MIR /XD node_modules build .git /XF package-lock.json /NFL /NDL /NJH /NJS /NP | Out-Null

Set-Location $dst
git add -A
if (-not (git status --porcelain)) {
    Write-Host "No hay cambios nuevos para publicar."
} else {
    Write-Host "2/3 Guardando cambios (commit)..."
    git commit -q -m $mensaje
    Write-Host "3/3 Subiendo a GitHub..."
    git push -q
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Listo. La web se actualiza en 1-2 minutos: https://eespinozasharon.github.io" -ForegroundColor Green
        Write-Host "Si no ves el cambio, refresca con Ctrl + F5."
    } else {
        Write-Host "Hubo un problema al subir a GitHub. Copia este mensaje y enviaselo a Claude." -ForegroundColor Red
    }
}

