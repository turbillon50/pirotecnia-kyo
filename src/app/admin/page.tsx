'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProducts } from '@/lib/demo-data';
import FuseHeader from '@/components/fuse-header';

export default function AdminPage() {
  const total = demoProducts.reduce((a, p) => a + p.stock, 0);
  const valor = demoProducts.reduce((a, p) => a + p.stock * p.precio, 0);
  const alertas = demoProducts.filter((p) => p.alerta).length;

  return (
    <main className="px-5 pt-6 pb-4 max-w-2xl mx-auto kyo-grain min-h-[calc(100svh-56px)]">
      <FuseHeader title="Admin" subtitle="Pirotecnia KYO" />

      <div className="grid grid-cols-2 gap-2.5 mb-6">
        {[
          { label: 'Piezas en bodega', value: total, color: '#FF6B00' },
          { label: 'Valor total', value: `$${valor.toLocaleString('es-MX')}`, color: '#FFD700' },
          { label: 'Alertas activas', value: alertas, color: alertas > 0 ? '#f87171' : '#4ade80' },
          { label: 'Productos', value: demoProducts.length, color: '#fff' },
        ].map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
            className="kyo-card rounded-[var(--r-md)] p-4"
          >
            <p className="text-gray-600 text-[10px] uppercase tracking-wide font-medium mb-1">{k.label}</p>
            <p className="text-3xl font-black tabular-nums" style={{ color: k.color }}>{k.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-2.5">
        {[
          {
            href: '/admin/productos',
            label: 'Gestionar productos',
            desc: 'Editar precios y stock',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            ),
          },
          {
            href: '/admin/reportes',
            label: 'Reportes y exportación',
            desc: 'Ventas, movimientos, CSV',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            ),
          },
        ].map((m, i) => (
          <motion.div key={m.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: 0.1 + 0.06 * i }}>
            <Link href={m.href} className="kyo-card rounded-[var(--r-md)] p-4 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0">
                <span className="w-5 h-5">{m.icon}</span>
              </span>
              <div>
                <p className="text-white text-sm font-bold">{m.label}</p>
                <p className="text-gray-600 text-xs mt-0.5">{m.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
