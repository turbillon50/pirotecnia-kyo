'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { demoProducts, Product } from '@/lib/demo-data';

const IconBox = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);
const IconAlert = ({ ok }: { ok: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={ok ? '#4ade80' : '#f87171'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

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
        {[
          { label: 'Productos', value: products.length, icon: <IconBox /> },
          { label: 'Piezas', value: total, icon: <IconBox /> },
          { label: 'Alertas', value: alertas, icon: <IconAlert ok={alertas === 0} /> },
        ].map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="bg-[#111] rounded-[var(--r-md)] p-3 border border-white/5 text-center"
          >
            <span className="w-5 h-5 inline-block mb-1">{k.icon}</span>
            <p className="text-2xl font-black text-white">{k.value}</p>
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
            className={`bg-[#111] rounded-[var(--r-md)] px-4 py-3 flex items-center justify-between border ${p.alerta ? 'border-red-500/30' : 'border-white/5'}`}
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
                className="w-9 h-9 rounded-[var(--r-sm)] bg-[#FF6B00]/15 text-[#FF6B00] font-black text-lg flex items-center justify-center"
              >
                −
              </motion.button>
              <span className={`w-7 text-center font-black tabular-nums ${p.alerta ? 'text-red-400' : 'text-white'}`}>
                {p.stock}
              </span>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => ajustar(p.id, 1)}
                className="w-9 h-9 rounded-[var(--r-sm)] bg-green-500/15 text-green-400 font-black text-lg flex items-center justify-center"
              >
                +
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
