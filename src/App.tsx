import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Scene3D = lazy(() => import('./spike/Scene3D'));

export default function App() {
  return (
    <main className="min-h-screen bg-[#14100c] text-[#e8dcc3] flex flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-4xl font-bold tracking-wide">KEMET CHESS</h1>
      <p className="opacity-80">Шахматы Древнего Мира — scaffold готов. Игра строится по шагам 2–9.</p>
      <Routes>
        <Route path="/" element={<p className="text-sm opacity-60">Лобби появится на Шаге 4</p>} />
        <Route path="/play/:peerId" element={<p className="text-sm opacity-60">P2P — Шаг 7</p>} />
        <Route path="/spike3d" element={<Suspense fallback={null}><Scene3D /></Suspense>} />
      </Routes>
    </main>
  );
}
