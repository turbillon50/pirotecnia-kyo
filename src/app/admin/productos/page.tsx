'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProducts as initial, Product } from '@/lib/demo-data';
import { IconArrowLeft, IconPlus } from '@/components/icons';

export default function AdminProductosPage() {
  const [products, setProducts] = useState<Product[]>(initial);

  const editarPrecio = (id: number, precio: number) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, precio } : p)));
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-2xl mx-auto pb-4"
    >
      <div className="px-4 pt-6 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin">
            <IconArrowLeft c="#fff" s={22} />
          </Link>
          <h1 className="text-xl font-black text-white">Productos</h1>
        </div>
        <motion.button whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-full bg-[#FF6B00] flex items-center justify-center">
          <IconPlus c="#fff" s={18} />
        </motion.button>
      </div>

      <div className="px-4 space-y-2">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.03 * i }}
            className="bg-[#111] rounded-[var(--r-md)] p-3 border border-white/5 flex items-center justify-between gap-3"
          >
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate">{p.nombre}</p>
              <p className="text-gray-600 text-xs">{p.categoria} · Stock: {p.stock}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-gray-500 text-sm">$</span>
              <input
                type="number"
                value={p.precio}
                onChange={(e) => editarPrecio(p.id, Number(e.target.value))}
                className="w-16 bg-[#1a1a1a] border border-white/10 rounded-[var(--r-sm)] px-2 py-1 text-white text-sm text-right outline-none focus:border-[#FF6B00]/50"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
