'use client';

import { useState } from 'react';
import { demoProducts, Product } from '@/lib/demo-data';

export default function DuenoDashboard() {
  const [products, setProducts] = useState<Product[]>(demoProducts);

  const ajustar = (id: number, delta: number) => {
    setProducts(prev =>
      prev.map(p => p.id === id ? { ...p, stock: Math.max(0, p.stock + delta), alerta: Math.max(0, p.stock + delta) < 5 } : p)
    );
  };

  const total = products.reduce((a, p) => a + p.stock, 0);
  const alertas = products.filter(p => p.alerta).length;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-[#FF6B00] mb-2">🔑 Panel del Dueño</h1>
      <p className="text-gray-400 mb-6">Pirotecnia KYO — Inventario de bodega</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">Productos</p>
          <p className="text-3xl font-black text-[#FF6B00]">{products.length}</p>
        </div>
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">Piezas totales</p>
          <p className="text-3xl font-black text-[#FF6B00]">{total}</p>
        </div>
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">Alertas stock</p>
          <p className="text-3xl font-black text-red-500">{alertas}</p>
        </div>
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">Hoy</p>
          <p className="text-3xl font-black text-[#FFD700]">Lunes</p>
        </div>
      </div>

      <div className="space-y-3">
        {products.map(p => (
          <div
            key={p.id}
            className={`bg-[#111] rounded-xl p-4 flex items-center justify-between border ${p.alerta ? 'border-red-500/50' : 'border-gray-800'}`}
          >
            <div>
              <p className="font-semibold text-white">{p.nombre}</p>
              <p className="text-gray-500 text-sm">{p.categoria} · ${p.precio} MXN/pza</p>
            </div>
            <div className="flex items-center gap-3">
              {p.alerta && <span className="text-xs text-red-400 font-bold">⚠️ Bajo</span>}
              <button
                onClick={() => ajustar(p.id, -1)}
                className="w-8 h-8 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] font-bold hover:bg-[#FF6B00]/40 transition"
              >−</button>
              <span className={`w-8 text-center font-black text-lg ${p.alerta ? 'text-red-400' : 'text-white'}`}>
                {p.stock}
              </span>
              <button
                onClick={() => ajustar(p.id, +1)}
                className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 font-bold hover:bg-green-500/40 transition"
              >+</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}