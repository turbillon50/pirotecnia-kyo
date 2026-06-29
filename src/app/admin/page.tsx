'use client';
import { motion } from 'framer-motion';
import { demoProducts } from '@/lib/demo-data';

export default function AdminPage() {
  const total = demoProducts.reduce((a, p) => a + p.stock, 0);
  const valor = demoProducts.reduce((a, p) => a + p.stock * p.precio, 0);
  const alertas = demoProducts.filter(p => p.alerta).length;

  const porCat: Record<string, number> = {};
  demoProducts.forEach(p => { porCat[p.categoria] = (porCat[p.categoria] || 0) + p.stock; });

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="px-4 pt-6 pb-4 max-w-2xl mx-auto"
    >
      <h1 className="text-2xl font-black text-white mb-1">Admin</h1>
      <p className="text-gray-500 text-sm mb-5">KPIs y tabla completa · Pirotecnia KYO</p>

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
            className="bg-[#111] rounded-xl p-4 border border-white/5"
          >
            <p className="text-gray-500 text-xs mb-1">{k.label}</p>
            <p className={`text-3xl font-black ${k.color}`}>{k.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        <div className="bg-[#111] rounded-xl p-4 border border-white/5">
          <p className="text-[#FFD700] font-bold text-sm mb-3">Stock por categoría</p>
          {Object.entries(porCat).map(([cat, stk]) => (
            <div key={cat} className="flex justify-between py-2 border-b border-white/5 last:border-0">
              <span className="text-gray-400 text-sm">{cat}</span>
              <span className="text-[#FF6B00] font-bold text-sm">{stk}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#111] rounded-xl p-4 border border-red-500/20">
          <p className="text-red-400 font-bold text-sm mb-3">⚠ Por reponer</p>
          {demoProducts.filter(p => p.alerta).map(p => (
            <div key={p.id} className="flex justify-between py-2 border-b border-white/5 last:border-0">
              <span className="text-gray-400 text-sm truncate mr-2">{p.nombre}</span>
              <span className="text-red-400 font-black text-sm shrink-0">{p.stock} pzs</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111] rounded-xl border border-white/5 overflow-hidden">
        <div className="px-4 py-3 border-b border-white/5">
          <p className="font-bold text-white text-sm">Inventario completo</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#161616]">
                <th className="text-left px-4 py-2 text-gray-500 font-medium text-xs">Producto</th>
                <th className="text-right px-4 py-2 text-gray-500 font-medium text-xs">Stock</th>
                <th className="text-right px-4 py-2 text-gray-500 font-medium text-xs">Precio</th>
                <th className="text-right px-4 py-2 text-gray-500 font-medium text-xs">Valor</th>
                <th className="text-center px-4 py-2 text-gray-500 font-medium text-xs">Estado</th>
              </tr>
            </thead>
            <tbody>
              {demoProducts.map(p => (
                <tr key={p.id} className="border-t border-white/5">
                  <td className="px-4 py-2.5 text-white font-medium">{p.nombre}</td>
                  <td className={`px-4 py-2.5 text-right font-black ${p.alerta ? 'text-red-400' : 'text-[#FF6B00]'}`}>{p.stock}</td>
                  <td className="px-4 py-2.5 text-right text-gray-400">${p.precio}</td>
                  <td className="px-4 py-2.5 text-right text-[#FFD700]">${(p.stock * p.precio).toLocaleString('es-MX')}</td>
                  <td className="px-4 py-2.5 text-center">
                    {p.alerta
                      ? <span className="text-[10px] bg-red-500/15 text-red-400 px-2 py-0.5 rounded-full font-bold">BAJO</span>
                      : <span className="text-[10px] bg-green-500/15 text-green-400 px-2 py-0.5 rounded-full font-bold">OK</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.main>
  );
}
