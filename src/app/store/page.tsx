'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProducts } from '@/lib/demo-data';
import { IconBox } from '@/components/icons';

export default function StorePage() {
  const categorias = Array.from(new Set(demoProducts.map((p) => p.categoria)));

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="px-4 pt-6 pb-4 max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-black text-white mb-1">Tienda</h1>
      <p className="text-gray-500 text-sm mb-5">Catálogo Pirotecnia KYO · Pide directo por WhatsApp</p>

      {categorias.map((cat, ci) => (
        <div key={cat} className="mb-6">
          <p className="text-[#FFD700] font-bold text-sm mb-2">{cat}</p>
          <div className="grid grid-cols-2 gap-3">
            {demoProducts.filter((p) => p.categoria === cat).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 * (ci + i) }}
              >
                <Link href={`/store/${p.id}`} className="block">
                  <div className="bg-[#111] rounded-[var(--r-md)] border border-white/5 overflow-hidden">
                    <div className="aspect-square bg-[#1a1a1a] flex items-center justify-center">
                      <IconBox c="#2a2a2a" s={40} />
                    </div>
                    <div className="p-3">
                      <p className="text-white text-xs font-semibold truncate">{p.nombre}</p>
                      <p className="text-[#FF6B00] font-black text-sm mt-1">${p.precio} MXN</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.main>
  );
}
