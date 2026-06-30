'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProducts } from '@/lib/demo-data';
import FuseHeader from '@/components/fuse-header';

const catColor: Record<string, string> = {
  Cohetes: '#FF6B00',
  Castillos: '#FFD700',
  Luces: '#60a5fa',
  Bombas: '#ff3d00',
  Toritos: '#a78bfa',
};

export default function StorePage() {
  const categorias = Array.from(new Set(demoProducts.map((p) => p.categoria)));

  return (
    <main className="px-5 pt-6 pb-4 max-w-lg mx-auto kyo-grain min-h-[calc(100svh-56px)]">
      <FuseHeader title="Tienda" subtitle="Catálogo Pirotecnia KYO · Pide directo por WhatsApp" />

      {categorias.map((cat, ci) => (
        <div key={cat} className="mb-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full" style={{ background: catColor[cat] }} />
            <p className="font-bold text-sm" style={{ color: catColor[cat] }}>{cat}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {demoProducts.filter((p) => p.categoria === cat).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.04 * (ci + i) }}
              >
                <Link href={`/store/${p.id}`} className="block">
                  <div className="kyo-card rounded-[var(--r-md)] overflow-hidden">
                    <div
                      className="aspect-square flex items-center justify-center relative"
                      style={{ background: `radial-gradient(circle at 50% 30%, ${catColor[cat]}22, #0d0d0d 70%)` }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={catColor[cat]} strokeWidth="1.3" opacity="0.6">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                      {p.alerta && (
                        <span className="absolute top-2 right-2 text-[9px] font-bold bg-black/60 backdrop-blur-sm text-red-400 px-1.5 py-0.5 rounded-full">
                          ÚLTIMAS
                        </span>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="text-white text-xs font-semibold truncate leading-tight">{p.nombre}</p>
                      <p className="font-black text-sm mt-1" style={{ color: catColor[cat] }}>${p.precio} MXN</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
