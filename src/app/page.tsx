'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Inventario en tiempo real',
    desc: 'Controla entradas y salidas de bodega sin libretas ni WhatsApp perdido',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: 'Alertas automáticas',
    desc: 'Aviso al instante cuando un producto está por agotarse',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Tienda para clientes',
    desc: 'Catálogo con fotos reales, pedidos directos por WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff3d00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18l-1.5 9.5a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 3z" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="17" cy="20" r="1" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-[calc(100svh-56px)] kyo-grain"
    >
      <div className="px-6 pt-10 pb-8 text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block mb-6"
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.2">
            <path d="M12 2l2.7 6 6 2.7-6 2.7L12 19.4l-2.7-6-6-2.7 6-2.7z" fill="#FF6B00" stroke="none" />
          </svg>
        </motion.div>

        <p className="text-[#FFD700] text-xs font-bold tracking-[0.2em] uppercase mb-3">
          Zimatlan de Álvarez · Oaxaca
        </p>

        <h1 className="text-[3.4rem] leading-[0.95] font-black kyo-spark-text mb-1 tracking-tight">
          PIROTECNIA
        </h1>
        <h2 className="text-[3.4rem] leading-[0.95] font-black text-white mb-5 tracking-tight">
          KYO
        </h2>

        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
          Eusebio Ambrosio elabora cada pieza a mano. Esta es la plataforma que ordena su bodega y vende por él.
        </p>
      </div>

      <div className="px-5 -mt-2 space-y-2.5 max-w-md mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.08 * i, ease: 'easeOut' }}
            className="kyo-card rounded-[var(--r-md)] p-4 flex items-start gap-4"
          >
            <span className="w-9 h-9 shrink-0 rounded-full bg-white/[0.03] flex items-center justify-center">
              <span className="w-5 h-5">{f.icon}</span>
            </span>
            <div className="pt-0.5">
              <p className="font-bold text-white text-sm">{f.title}</p>
              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="px-5 mt-7 flex gap-3 max-w-md mx-auto">
        <motion.div whileTap={{ scale: 0.96 }} className="flex-1">
          <Link
            href="/store"
            className="block text-center bg-gradient-to-b from-[#FF8533] to-[#FF6B00] text-white font-bold text-sm py-3.5 rounded-[var(--r-sm)] min-h-[44px] shadow-[0_4px_20px_rgba(255,107,0,0.25)]"
          >
            Ver tienda
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.96 }} className="flex-1">
          <Link
            href="/app"
            className="block text-center bg-white/[0.04] text-white font-bold text-sm py-3.5 rounded-[var(--r-sm)] border border-white/10 min-h-[44px]"
          >
            Entrar a bodega
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
