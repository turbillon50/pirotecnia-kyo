'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { demoProducts, Product } from '@/lib/demo-data';

const ICON_GRID = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);
const ICON_STACK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);
const ICON_ALERT = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default function BodegaPage() {
  const [products, setProducts] = useState<Product[]>(demoProducts);

  const ajustar = (id: number, delta: number) => {
    setProducts(prev =>
      prev.map(p => p.id === id
        ? { ...p, stock: Math.max(0, p.stock + delta), alerta: Math.max(0, p.stock + delta) < 5 }
        : p
      )
    );
  };

  const total = products.reduce((a, p) => a + p.stock, 0);
  const alertas = products.filter(p => p.alerta).length;

  const kpis = [
    { label: 'Productos', value: products.length, color: 'text-[#FF6B00]', icon: ICON_GRID },
    { label: 'Piezas', value: total, color: 'text-[#FF6B00]', icon: ICON_STACK },
    { label: 'Alertas', value: alertas, color: alertas > 0 ? 'text-red-400' : 'text-green-400', icon: ICON_ALERT },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="px-4 pt-6 pb-4 max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-black text-white mb-1">Bodega</h1>
      <p className="text-gray-500 text-sm mb-5">Pirotecnia KYO · Inventario activo</p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {kpis.map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="bg-[#111] rounded-xl p-3 border border-white/5 text-center"
          >
            <span className={`inline-flex justify-center mb-1.5 ${k.color}`}>{k.icon}</span>
            <p className={`text-2xl font-black ${k.color}`}>{k.value}</p>
            <p className="text-gray-500 text-[11px] mt-0.5">{k.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-2">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.04 * i }}
            className={`bg-[#111] rounded-xl px-4 py-3 flex items-center justify-between border ${p.alerta ? 'border-red-500/30' : 'border-white/5'}`}
          >
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white text-sm truncate">{p.nombre}</p>
              <p className="text-gray-600 text-xs">{p.categoria} · ${p.precio} MXN</p>
            </div>
            <div className="flex items-center gap-2 ml-3">
              {p.alerta && (
                <span className="text-[10px] text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded">BAJO</span>
              )}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => ajustar(p.id, -1)}
                className="w-7 h-7 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] font-black text-lg flex items-center justify-center"
                aria-label="Restar"
              >−</motion.button>
              <span className={`w-7 text-center font-black tabular-nums ${p.alerta ? 'text-red-400' : 'text-white'}`}>
                {p.stock}
              </span>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => ajustar(p.id, +1)}
                className="w-7 h-7 rounded-lg bg-green-500/15 text-green-400 font-black text-lg flex items-center justify-center"
                aria-label="Sumar"
              >+</motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
