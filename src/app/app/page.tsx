'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { demoProducts, Product } from '@/lib/demo-data';

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
          { label: 'Productos', value: products.length, color: 'text-[#FF6B00]' },
          { label: 'Piezas', value: total, color: 'text-[#FF6B00]' },
          { label: 'Alertas', value: alertas, color: alertas > 0 ? 'text-red-400' : 'text-green-400' },
        ].map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="bg-[#111] rounded-xl p-3 border border-white/5 text-center"
          >
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
              <button
                onClick={() => ajustar(p.id, -1)}
                className="w-7 h-7 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] font-black text-lg flex items-center justify-center active:scale-95 transition-transform"
              >−</button>
              <span className={`w-7 text-center font-black tabular-nums ${p.alerta ? 'text-red-400' : 'text-white'}`}>
                {p.stock}
              </span>
              <button
                onClick={() => ajustar(p.id, +1)}
                className="w-7 h-7 rounded-lg bg-green-500/15 text-green-400 font-black text-lg flex items-center justify-center active:scale-95 transition-transform"
              >+</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
