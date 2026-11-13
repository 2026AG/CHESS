# ASSETS & THIRD-PARTY NOTICES

Все ассеты проекта — CC0, собственные или процедурные. Внешние компоненты
фиксируются здесь при добавлении (источник, версия, лицензия, дата).

## Аудит Шага 0 (2026-11-13)

- Репозиторий: `2026AG/CHESS`; base path GitHub Pages: `/CHESS/`
- Будущий продакшн-URL: https://2026ag.github.io/CHESS/
- Node v22.22.3 / npm 10.9.8 — удовлетворяет требованию Node ≥ 20 для CI

## Compatibility Spike (Шаг 1, 2026-11-13) — ПРОЙДЕН без отката

Vite 8.3 + React 19.3.1 + TypeScript 7 + @react-three/fiber 9.8.2 + drei 10.7.9
+ three 0.187: установка без peer-конфликтов, production-build зелёный,
3D-сцена вынесена в ленивый чанк (934 KB, в главный бандл не входит;
главный JS — 260 KB / 83 KB gzip). Откат на React 18 не потребовался.

## Запланированные компоненты (добавляются на своих шагах)

| Компонент | Версия | Лицензия | Шаг | Примечание |
|---|---|---|---|---|
| Stockfish 19 lite-single (npm `stockfish@19.0.1`) | 19.0.1 | GPL-3.0 | 1 | `/public/stockfish/stockfish-19-lite-single.{js,wasm}`; SHA-256 js `ccb130d7…f624c91a`, wasm `ee4f115b…71f096de` |
| chess.js | ^1.4.0 (установлена) | BSD-2-Clause | 1 | Единственный арбитр правил |
| PeerJS | ^1.5.5 (установлена) | MIT | 7 | Default broker — best-effort, без SLA |
| lichess chess-openings (подмножество) | — | CC0 | 2 | Генерация `src/data/openings.json` скриптом |

## Собственные / процедурные ассеты

| Ассет | Способ получения | Шаг |
|---|---|---|
| SVG-фигуры × 4 фракции | Рисуются вручную в `src/themes/` | 4 |
| 3D-фигуры | Композиции примитивов three.js | 6 |
| Звуки (move/capture/check/gong/ambient) | Генерация WAV скриптом `scripts/gen-sounds.mjs` | 3 |

## Stockfish — GPL-3.0 compliance

Исходный код Stockfish: https://github.com/official-stockfish/Stockfish
Лицензия репозитория KEMET CHESS — GPL-3.0 (файл `LICENSE`), что покрывает
требования copyleft при распространении бинарных WASM-сборок движка.
