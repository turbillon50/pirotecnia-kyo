'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoMovements, demoProducts } from '@/lib/demo-data';
import { IconArrowLeft } from '@/components/icons';

export default function MovimientosPage() {
  const getProduct = (id: number) => demoProducts.find((p) => p.id === id);

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-lg mx-auto pb-4"
    >
      <div className="px-4 pt-6 pb-3 flex items-center gap-3">
        <Link href="/app">
          <IconArrowLeft c="#fff" s={22} />
        </Link>
        <h1 className="text-xl font-black text-white">Movimientos</h1>
      </div>

      <div className="px-4 space-y-2">
        {demoMovements.map((m, i) => {
          const p = getProduct(m.productoId);
          const fecha = new Date(m.fecha);
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 * i }}
              className="bg-[#111] rounded-[var(--r-md)] p-3 border border-white/5 flex items-center justify-between"
            >
              <div>
                <p className="text-white text-sm font-semibold">{p?.nombre}</p>
                <p className="text-gray-600 text-xs">
                  {fecha.toLocaleDateString('es-MX', { day: '2-digit', month: 'short' })} · {fecha.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <span className={`text-sm font-black ${m.tipo === 'venta' ? 'text-red-400' : 'text-green-400'}`}>
                {m.tipo === 'venta' ? '−' : '+'}{m.cantidad}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.main>
  );
}
