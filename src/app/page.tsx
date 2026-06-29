'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center justify-center min-h-[calc(100svh-56px)] px-5 text-center"
    >
      <div className="text-6xl mb-5">🎆</div>
      <h1 className="text-5xl md:text-6xl font-black text-[#FF6B00] mb-3 tracking-tight leading-none">
        PIROTECNIA<br />KYO
      </h1>
      <p className="text-[#FFD700] font-semibold mb-1">Eusebio Ambrosio — Artesano Pirotécnico</p>
      <p className="text-gray-500 text-sm mb-10">Elaboración y venta de fuegos artificiales · Zimatlan de Álvarez, Oaxaca</p>

      <div className="w-full max-w-sm space-y-3">
        {[
          { emoji: '📦', title: 'Inventario en tiempo real', desc: 'Controla entradas y salidas de bodega' },
          { emoji: '⚠️', title: 'Alertas automáticas', desc: 'Aviso cuando el stock está por agotarse' },
          { emoji: '📊', title: 'Reportes y KPIs', desc: 'Valor de bodega y movimientos del día' },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="bg-[#111] rounded-xl p-4 flex items-start gap-4 text-left border border-white/5"
          >
            <span className="text-2xl">{f.emoji}</span>
            <div>
              <p className="font-semibold text-white text-sm">{f.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/app" className="bg-[#FF6B00] text-white font-semibold text-sm px-5 py-2.5 rounded-lg">
          Ver Bodega
        </Link>
        <Link href="/admin" className="bg-white/5 text-white font-semibold text-sm px-5 py-2.5 rounded-lg border border-white/10">
          Panel Admin
        </Link>
      </div>
    </motion.main>
  );
}
