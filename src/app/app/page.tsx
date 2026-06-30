'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProducts, Product } from '@/lib/demo-data';
import FuseHeader from '@/components/fuse-header';

export default function BodegaPage() {
  const [products, setProducts] = useState<Product[]>(demoProducts);

  const ajustar = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, stock: Math.max(0, p.stock + delta), alerta: Math.max(0, p.stock + delta) < 5 }
          : p
      )
    );
  };

  const total = products.reduce((a, p) => a + p.stock, 0);
  const alertas = products.filter((p) => p.alerta).length;
  const maxStock = 30;

  return (
    <main className="px-5 pt-6 pb-4 max-w-lg mx-auto kyo-grain min-h-[calc(100svh-56px)]">
      <div className="flex items-start justify-between">
        <FuseHeader title="Bodega" subtitle="Pirotecnia KYO · Inventario activo" />
        <div className="flex gap-2 pt-1">
          <Link href="/app/movimientos">
            <motion.div whileTap={{ scale: 0.92 }} className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </motion.div>
          </Link>
          <Link href="/app/nuevo">
            <motion.div whileTap={{ scale: 0.92 }} className="w-9 h-9 rounded-full bg-gradient-to-b from-[#FF8533] to-[#FF6B00] flex items-center justify-center shadow-[0_2px_12px_rgba(255,107,0,0.35)]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-6">
        {[
          { label: 'Productos', value: products.length, color: '#fff' },
          { label: 'Piezas', value: total, color: '#FF6B00' },
          { label: 'Alertas', value: alertas, color: alertas > 0 ? '#f87171' : '#4ade80' },
        ].map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="kyo-card rounded-[var(--r-md)] p-3 text-center"
          >
            <p className="text-2xl font-black tabular-nums" style={{ color: k.color }}>{k.value}</p>
            <p className="text-gray-600 text-[10px] mt-0.5 uppercase tracking-wide font-medium">{k.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-2.5">
        {products.map((p, i) => {
          const pct = Math.min(100, (p.stock / maxStock) * 100);
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.035 * i }}
              className="kyo-card rounded-[var(--r-md)] p-3.5 overflow-hidden relative"
            >
              <div className="flex items-center justify-between mb-2">
                <Link href={`/app/${p.id}`} className="flex-1 min-w-0 mr-3">
                  <p className="font-semibold text-white text-sm truncate">{p.nombre}</p>
                  <p className="text-gray-600 text-xs">{p.categoria} · ${p.precio} MXN</p>
                </Link>
                <div className="flex items-center gap-2 shrink-0">
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={() => ajustar(p.id, -1)}
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 text-[#FF6B00] font-black text-base flex items-center justify-center"
                  >−</motion.button>
                  <span className={`w-7 text-center font-black tabular-nums text-sm ${p.alerta ? 'text-red-400' : 'text-white'}`}>
                    {p.stock}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={() => ajustar(p.id, 1)}
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 text-green-400 font-black text-base flex items-center justify-center"
                  >+</motion.button>
                </div>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.03, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: p.alerta ? 'linear-gradient(90deg,#f87171,#ef4444)' : 'linear-gradient(90deg,#FFD700,#FF6B00)' }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
