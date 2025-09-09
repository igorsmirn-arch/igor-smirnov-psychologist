#!/usr/bin/env bash
# Universal starter for zsh/bash + nvm + Next.js
set -eo pipefail

log(){ printf "\033[1;36m[•]\033[0m %s\n" "$*"; }
ok(){  printf "\033[1;32m[OK]\033[0m %s\n" "$*"; }
warn(){ printf "\033[1;33m[!]\033[0m %s\n" "$*"; }
err(){ printf "\033[1;31m[ERR]\033[0m %s\n" "$*"; }

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"

# --- 1) Load NVM (try common locations) ---------------------------------------
load_nvm() {
  if command -v nvm >/dev/null 2>&1; then return 0; fi
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  # try user install
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && return 0
  # try Homebrew (Intel)
  if [ -d "/usr/local/opt/nvm" ]; then
    export NVM_DIR="$HOME/.nvm"
    mkdir -p "$NVM_DIR"
    [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh" && return 0
  fi
  # try Homebrew (Apple Silicon)
  if [ -d "/opt/homebrew/opt/nvm" ]; then
    export NVM_DIR="$HOME/.nvm"
    mkdir -p "$NVM_DIR"
    [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh" && return 0
  fi
  return 1
}

# --- 2) Ensure Node LTS via nvm ------------------------------------------------
ensure_node() {
  if ! load_nvm; then
    warn "NVM не найден. Установи nvm (https://github.com/nvm-sh/nvm) — скрипт продолжит с системным node."
  fi
  if command -v nvm >/dev/null 2>&1; then
    nvm use --lts >/dev/null 2>&1 || nvm install --lts
  fi
  if ! command -v node >/dev/null 2>&1; then
    err "Node не найден в системе. Установи Node.js (LTS) и повтори."
    exit 1
  fi
  ok "Node: $(node -v), npm: $(npm -v)"
}

# --- 3) Dependency install helper ---------------------------------------------
ensure_deps() {
  if [ -f "$ROOT/package-lock.json" ]; then
    log "Установка зависимостей по lock-файлу…"
    npm ci
  else
    log "Lock не найден — ставим обычным npm install…"
    npm install
  fi
}

# --- 4) Health checks ----------------------------------------------------------
doctor() {
  log "Проверка артефактов…"
  if grep -RIn "LangProvider" app components lib >/dev/null 2>&1; then
    warn "Найдены упоминания LangProvider — проверь файлы:"
    grep -RIn "LangProvider" app components lib || true
  else
    ok "Нет наследия LangProvider."
  fi

  log "Проверка типов (tsc)…"
  if npx tsc --noEmit; then
    ok "TypeScript: OK"
  else
    err "TypeScript ошибки выше."
    exit 1
  fi

  log "Проверка ключевых файлов…"
  for f in app/layout.tsx app/page.tsx styles/globals.css lib/i18n.tsx components/Nav.tsx; do
    [ -f "$f" ] || { err "Нет файла: $f"; exit 1; }
  done
  ok "Структура в порядке."
}

# --- 5) Commands ---------------------------------------------------------------
cmd="${1:-prod}"

case "$cmd" in
  dev)
    ensure_node
    ensure_deps
    log "Запуск в режиме разработки (Next dev)…"
    npm run dev
    ;;

  build)
    ensure_node
    ensure_deps
    log "Сборка продакшн…"
    npm run build
    ok "Сборка завершена."
    ;;

  prod|start)
    ensure_node
    ensure_deps
    log "Сборка и запуск прод-режима…"
    npm run build
    npm start
    ;;

  rebuild)
    ensure_node
    log "Полная очистка и пересборка…"
    rm -rf node_modules .next
    ensure_deps
    npm run build
    ok "Готово. Запусти: ./start.sh start"
    ;;

  clean)
    log "Очистка .next"
    rm -rf .next
    ok "Очищено."
    ;;

  fix)
    ensure_node
    log "npm audit fix --force (осторожно)"
    npm audit fix --force || true
    ensure_deps
    ;;

  doctor)
    ensure_node
    doctor
    ;;

  *)
    cat <<USAGE
Использование: ./start.sh [команда]

Команды:
  dev       — режим разработки (hot reload)
  build     — только сборка
  start|prod— сборка + запуск в прод (next start)
  rebuild   — удалить .next и node_modules, поставить заново и собрать
  clean     — удалить .next
  fix       — npm audit fix --force + переустановка
  doctor    — быстрые проверки (артефакты, tsc, структура)

Примеры:
  ./start.sh dev
  ./start.sh prod
  ./start.sh rebuild
USAGE
    ;;
esac
