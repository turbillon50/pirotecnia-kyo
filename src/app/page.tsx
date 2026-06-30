'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Inventario en tiempo real',
    desc: 'Controla entradas y salidas de bodega',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: 'Alertas automáticas',
    desc: 'Aviso cuando el stock está por agotarse',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Reportes y KPIs',
    desc: 'Valor de bodega y movimientos del día',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center justify-center min-h-[calc(100svh-56px)] px-5 text-center"
    >
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-5">
        <path d="M12 2l2.5 5.5L20 9l-5.5 2.5L12 17l-2.5-5.5L4 9l5.5-1.5z" fill="#FF6B00" stroke="none" />
      </svg>

      <h1 className="text-5xl md:text-6xl font-black text-[#FF6B00] mb-3 tracking-tight leading-none">
        PIROTECNIA<br />KYO
      </h1>
      <p className="text-[#FFD700] font-semibold mb-1">Eusebio Ambrosio — Artesano Pirotécnico</p>
      <p className="text-gray-500 text-sm mb-10">Elaboración y venta de fuegos artificiales · Zimatlan de Álvarez, Oaxaca</p>

      <div className="w-full max-w-sm space-y-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="bg-[#111] rounded-[var(--r-md)] p-4 flex items-start gap-4 text-left border border-white/5"
          >
            <span className="w-6 h-6 shrink-0 mt-0.5">{f.icon}</span>
            <div>
              <p className="font-semibold text-white text-sm">{f.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link href="/app" className="bg-[#FF6B00] text-white font-semibold text-sm px-5 py-2.5 rounded-[var(--r-sm)] block min-h-[44px] flex items-center">
            Ver Bodega
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link href="/admin" className="bg-white/5 text-white font-semibold text-sm px-5 py-2.5 rounded-[var(--r-sm)] border border-white/10 block min-h-[44px] flex items-center">
            Panel Admin
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
