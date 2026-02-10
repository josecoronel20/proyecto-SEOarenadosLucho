# Script para limpiar y reinstalar dependencias
Write-Host "Limpiando caché y node_modules..." -ForegroundColor Yellow

# Eliminar caché y node_modules
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "✓ Caché .next eliminado" -ForegroundColor Green
}

if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "✓ node_modules eliminado" -ForegroundColor Green
}

if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
    Write-Host "✓ package-lock.json eliminado" -ForegroundColor Green
}

Write-Host "`nInstalando dependencias..." -ForegroundColor Yellow
npm install

Write-Host "`n✓ Instalación completada. Ejecuta 'npm run dev' para iniciar el servidor." -ForegroundColor Green
