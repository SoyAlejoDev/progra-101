#!/bin/bash

# Script para limpiar archivos compilados y caché del monorepo
# Uso: ./scripts/clean-workspaces.sh

echo "🧹 Limpiando monorepo..."

# Limpiar archivos compilados de cursos
echo "📚 Limpiando archivos compilados de cursos..."
find courses -name "*.js" -type f ! -path "*/node_modules/*" -delete 2>/dev/null
find courses -name "*.js.map" -type f ! -path "*/node_modules/*" -delete 2>/dev/null
find courses -name "*.d.ts" -type f ! -path "*/node_modules/*" -delete 2>/dev/null
find courses -name "*.d.ts.map" -type f ! -path "*/node_modules/*" -delete 2>/dev/null

# Limpiar carpetas dist en cursos
find courses -type d -name "dist" ! -path "*/node_modules/*" -exec rm -rf {} + 2>/dev/null

# Limpiar logs
find . -name "*.log" -type f ! -path "*/node_modules/*" -delete 2>/dev/null

echo "✅ Limpieza completada!"
echo ""
echo "Archivos que deberían estar ignorados:"
echo "  - node_modules/"
echo "  - dist/"
echo "  - *.js (compilados)"
echo "  - *.js.map"
echo "  - *.d.ts"
echo "  - *.log"
echo ""
echo "Verificá con: git status"
