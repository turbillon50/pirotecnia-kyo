'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Inventario en tiempo real',
    desc: 'Controla entradas y salidas de bodega sin libretas ni WhatsApp perdido',
    color: '#00D1FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00D1FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: 'Alertas automáticas',
    desc: 'Aviso al instante cuando un producto está por agotarse',
    color: '#FFC300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFC300" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Tienda para clientes',
    desc: 'Catálogo con fotos reales, pedidos directos por WhatsApp',
    color: '#FF2A5E',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF2A5E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18l-1.5 9.5a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 3z" />
        <circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" />
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
      className="min-h-[calc(100svh-56px)]"
    >
      <div className="relative px-6 pt-10 pb-9 text-center overflow-hidden">
        <div className="kyo-smoke" />

        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 inline-block mb-2"
        >
          <div className="w-5 h-5 kyo-star mx-auto mb-3" />
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#FF7F00" strokeWidth="1.2" className="mx-auto">
            <path d="M12 2l2.7 6 6 2.7-6 2.7L12 19.4l-2.7-6-6-2.7 6-2.7z" fill="#FF7F00" stroke="none" />
          </svg>
        </motion.div>

        <p className="relative z-10 text-[#FFC300] text-xs font-bold tracking-[0.2em] uppercase mb-3 drop-shadow-[0_0_8px_rgba(255,195,0,0.5)]">
          Zimatlan de Álvarez · Oaxaca
        </p>

        <h1 className="relative z-10 text-[3rem] leading-[0.92] font-black kyo-metal-text mb-0.5 tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
          PIROTECNIA
        </h1>
        <h2 className="relative z-10 text-[3.6rem] leading-[0.9] font-black mb-5 tracking-tight flex justify-center gap-1">
          <span className="kyo-scratch-purple">K</span>
          <span className="kyo-scratch-blue">Y</span>
          <span className="kyo-scratch-pink">O</span>
        </h2>

        <p className="relative z-10 text-gray-300 text-sm max-w-xs mx-auto leading-relaxed">
          Eusebio Ambrosio elabora cada pieza a mano. Esta es la plataforma que ordena su bodega y vende por él.
        </p>
      </div>

      <div className="px-5 -mt-1 space-y-2.5 max-w-md mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.08 * i, ease: 'easeOut' }}
            className="kyo-card rounded-[var(--r-md)] p-4 flex items-start gap-4"
            style={{ borderTopColor: f.color, borderTopWidth: '2px' }}
          >
            <span className="w-9 h-9 shrink-0 rounded-full bg-white/[0.04] flex items-center justify-center">
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
            className="block text-center bg-gradient-to-r from-[#FF2A5E] via-[#FF7F00] to-[#FFC300] text-white font-bold text-sm py-3.5 rounded-[var(--r-sm)] min-h-[44px] shadow-[0_4px_24px_rgba(255,127,0,0.4)]"
          >
            Ver tienda
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.96 }} className="flex-1">
          <Link
            href="/app"
            className="block text-center bg-white/[0.05] text-white font-bold text-sm py-3.5 rounded-[var(--r-sm)] border border-white/15 min-h-[44px]"
          >
            Entrar a bodega
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
