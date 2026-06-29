'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ICON_BOX = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const ICON_ALERT = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const ICON_CHART = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const features = [
  { icon: ICON_BOX, title: 'Inventario en tiempo real', desc: 'Controla entradas y salidas de bodega' },
  { icon: ICON_ALERT, title: 'Alertas automáticas', desc: 'Aviso cuando el stock está por agotarse' },
  { icon: ICON_CHART, title: 'Reportes y KPIs', desc: 'Valor de bodega y movimientos del día' },
];

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center justify-center min-h-[calc(100svh-56px)] px-5 text-center"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF6B00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-5"
        aria-hidden="true"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
      <h1 className="text-5xl md:text-6xl font-black text-[#FF6B00] mb-3 tracking-tight leading-none">
        PIROTECNIA<br />KYO
      </h1>
      <p className="text-[#FFD700] font-semibold mb-1">Eusebio Ambrosio — Artesano Pirotécnico</p>
      <p className="text-gray-500 text-sm mb-10">Elaboración y venta de fuegos artificiales · Zimatlán de Álvarez, Oaxaca</p>

      <div className="w-full max-w-sm space-y-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="bg-[#111] rounded-xl p-4 flex items-start gap-4 text-left border border-white/5"
          >
            <span className="text-[#FF6B00] shrink-0">{f.icon}</span>
            <div>
              <p className="font-semibold text-white text-sm">{f.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link href="/app" className="block bg-[#FF6B00] text-white font-semibold text-sm px-5 py-2.5 rounded-lg">
            Ver Bodega
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link href="/admin" className="block bg-white/5 text-white font-semibold text-sm px-5 py-2.5 rounded-lg border border-white/10">
            Panel Admin
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
