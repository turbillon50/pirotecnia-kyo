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
      className="min-h-[calc(100svh-56px)] pb-28"
    >
      {/* HERO: cartel real de la marca */}
      <section className="relative w-full overflow-hidden">
        <motion.img
          src="/brand/hero.jpg"
          alt="Pirotecnia KYO"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full block select-none"
          draggable={false}
        />
        {/* fundido inferior hacia el fondo */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        {/* badge ubicación */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center px-4">
          <span className="inline-flex items-center gap-1.5 text-[#FFC300] text-[0.7rem] font-bold tracking-[0.16em] uppercase bg-black/55 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#FFC300]/30">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFC300" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Zimatlán de Álvarez · Oaxaca
          </span>
        </div>
      </section>

      {/* intro */}
      <div className="px-6 pt-5 text-center">
        <p className="text-gray-300 text-sm max-w-xs mx-auto leading-relaxed">
          Eusebio Ambrosio elabora cada pieza a mano. Esta es la plataforma que ordena su bodega y vende por él.
        </p>
      </div>

      {/* features */}
      <div className="px-5 mt-5 space-y-2.5 max-w-md mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.06 * i, ease: 'easeOut' }}
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


      {/* EL TALLER: fotos reales del taller */}
      <div className="mt-8">
        <div className="px-6 flex items-baseline justify-between max-w-md mx-auto">
          <h2 className="text-white font-black text-base tracking-tight">El taller</h2>
          <span className="text-[#FF7F00] text-[0.65rem] font-bold tracking-[0.14em] uppercase">Hecho a mano</span>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[
            { src: '/brand/taller/castillo.jpg', label: 'Castillo en armado' },
            { src: '/brand/taller/rueda.jpg', label: 'Rueda de carrizo' },
            { src: '/brand/taller/carrizo.jpg', label: 'Carrizo y varas' },
            { src: '/brand/taller/cohete.jpg', label: 'Cohete artesanal' },
          ].map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: 0.05 * i, ease: 'easeOut' }}
              className="relative shrink-0 w-[68vw] max-w-[280px] aspect-square rounded-[var(--r-md)] overflow-hidden snap-center border border-white/[0.06]"
            >
              <img src={t.src} alt={t.label} loading="lazy" draggable={false} className="w-full h-full object-cover select-none" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
              <figcaption className="absolute bottom-2.5 left-3 text-white text-xs font-bold drop-shadow">{t.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* CTAs */}
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
