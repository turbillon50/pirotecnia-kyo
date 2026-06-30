'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProducts } from '@/lib/demo-data';
import { IconBox, IconClock } from '@/components/icons';

export default function AdminPage() {
  const total = demoProducts.reduce((a, p) => a + p.stock, 0);
  const valor = demoProducts.reduce((a, p) => a + p.stock * p.precio, 0);
  const alertas = demoProducts.filter((p) => p.alerta).length;

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="px-4 pt-6 pb-4 max-w-2xl mx-auto"
    >
      <h1 className="text-2xl font-black text-white mb-1">Admin</h1>
      <p className="text-gray-500 text-sm mb-5">Pirotecnia KYO</p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { label: 'Piezas en bodega', value: total, color: 'text-[#FF6B00]' },
          { label: 'Valor total', value: `$${valor.toLocaleString('es-MX')}`, color: 'text-[#FFD700]' },
          { label: 'Alertas activas', value: alertas, color: alertas > 0 ? 'text-red-400' : 'text-green-400' },
          { label: 'Productos', value: demoProducts.length, color: 'text-white' },
        ].map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="bg-[#111] rounded-[var(--r-md)] p-4 border border-white/5"
          >
            <p className="text-gray-500 text-xs mb-1">{k.label}</p>
            <p className={`text-3xl font-black ${k.color}`}>{k.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-2">
        <Link href="/admin/productos" className="flex items-center gap-3 bg-[#111] rounded-[var(--r-md)] p-3.5 border border-white/5">
          <IconBox c="#FF6B00" s={20} />
          <div>
            <p className="text-white text-sm font-medium">Gestionar productos</p>
            <p className="text-gray-600 text-xs">Editar precios y stock</p>
          </div>
        </Link>
        <Link href="/admin/reportes" className="flex items-center gap-3 bg-[#111] rounded-[var(--r-md)] p-3.5 border border-white/5">
          <IconClock c="#FF6B00" s={20} />
          <div>
            <p className="text-white text-sm font-medium">Reportes y exportación</p>
            <p className="text-gray-600 text-xs">Ventas, movimientos, CSV</p>
          </div>
        </Link>
      </div>
    </motion.main>
  );
}
