'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProducts, demoMovements } from '@/lib/demo-data';
import { IconArrowLeft, IconDownload } from '@/components/icons';

export default function AdminReportesPage() {
  const ventas = demoMovements.filter((m) => m.tipo === 'venta');
  const entradas = demoMovements.filter((m) => m.tipo === 'entrada');
  const totalVendido = ventas.reduce((a, m) => {
    const p = demoProducts.find((x) => x.id === m.productoId);
    return a + (p ? p.precio * m.cantidad : 0);
  }, 0);

  const exportarCSV = () => {
    const header = 'Producto,Categoria,Stock,Precio,Valor\n';
    const rows = demoProducts.map((p) => `${p.nombre},${p.categoria},${p.stock},${p.precio},${p.stock * p.precio}`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventario-kyo.csv';
    a.click();
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-2xl mx-auto pb-4"
    >
      <div className="px-4 pt-6 pb-3 flex items-center gap-3">
        <Link href="/admin">
          <IconArrowLeft c="#fff" s={22} />
        </Link>
        <h1 className="text-xl font-black text-white">Reportes</h1>
      </div>

      <div className="px-4 grid grid-cols-2 gap-3 mb-5">
        <div className="bg-[#111] rounded-[var(--r-md)] p-4 border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Vendido (registrado)</p>
          <p className="text-2xl font-black text-[#FFD700]">${totalVendido.toLocaleString('es-MX')}</p>
        </div>
        <div className="bg-[#111] rounded-[var(--r-md)] p-4 border border-white/5">
          <p className="text-gray-500 text-xs mb-1">Movimientos</p>
          <p className="text-2xl font-black text-white">{demoMovements.length}</p>
        </div>
      </div>

      <div className="px-4 mb-5">
        <p className="text-gray-500 text-xs mb-2">Entradas vs ventas (últimos movimientos)</p>
        <div className="bg-[#111] rounded-[var(--r-md)] p-4 border border-white/5 flex items-end gap-2 h-32">
          {[...entradas, ...ventas].map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ height: 0 }}
              animate={{ height: `${Math.min(100, m.cantidad * 10)}%` }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className={`flex-1 rounded-t-[4px] ${m.tipo === 'venta' ? 'bg-red-500/60' : 'bg-green-500/60'}`}
            />
          ))}
        </div>
      </div>

      <div className="px-4">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={exportarCSV}
          className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-semibold text-sm py-3 rounded-[var(--r-sm)] min-h-[44px]"
        >
          <IconDownload c="#FF6B00" s={18} />
          Exportar inventario CSV
        </motion.button>
      </div>
    </motion.main>
  );
}
