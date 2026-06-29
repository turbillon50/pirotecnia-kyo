'use client';

import { demoProducts } from '@/lib/demo-data';

export default function AdminDashboard() {
  const total = demoProducts.reduce((a, p) => a + p.stock, 0);
  const valor = demoProducts.reduce((a, p) => a + p.stock * p.precio, 0);
  const alertas = demoProducts.filter(p => p.alerta).length;

  const porCategoria: Record<string, number> = {};
  demoProducts.forEach(p => {
    porCategoria[p.categoria] = (porCategoria[p.categoria] || 0) + p.stock;
  });

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-black text-[#FF6B00] mb-2">⚙️ Panel Admin</h1>
      <p className="text-gray-400 mb-6">Pirotecnia KYO — Vista completa de inventario</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">Piezas en bodega</p>
          <p className="text-4xl font-black text-[#FF6B00]">{total}</p>
        </div>
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">Valor total</p>
          <p className="text-2xl font-black text-[#FFD700]">${valor.toLocaleString('es-MX')}</p>
        </div>
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">Alertas activas</p>
          <p className="text-4xl font-black text-red-500">{alertas}</p>
        </div>
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <p className="text-gray-400 text-sm">Productos</p>
          <p className="text-4xl font-black text-white">{demoProducts.length}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#111] rounded-xl p-4 border border-gray-800">
          <h3 className="font-bold text-[#FFD700] mb-3">Stock por categoría</h3>
          {Object.entries(porCategoria).map(([cat, stk]) => (
            <div key={cat} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-300">{cat}</span>
              <span className="font-bold text-[#FF6B00]">{stk} pzs</span>
            </div>
          ))}
        </div>
        <div className="bg-[#111] rounded-xl p-4 border border-red-500/30">
          <h3 className="font-bold text-red-400 mb-3">⚠️ Productos por reponer</h3>
          {demoProducts.filter(p => p.alerta).map(p => (
            <div key={p.id} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-300">{p.nombre}</span>
              <span className="font-black text-red-400">{p.stock} pzs</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#111] rounded-xl border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-bold text-white">Inventario completo</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#1a1a1a]">
              <tr>
                <th className="text-left p-3 text-gray-400">Producto</th>
                <th className="text-left p-3 text-gray-400">Categoría</th>
                <th className="text-right p-3 text-gray-400">Precio</th>
                <th className="text-right p-3 text-gray-400">Stock</th>
                <th className="text-right p-3 text-gray-400">Valor</th>
                <th className="text-center p-3 text-gray-400">Estado</th>
              </tr>
            </thead>
            <tbody>
              {demoProducts.map(p => (
                <tr key={p.id} className="border-t border-gray-800 hover:bg-[#1a1a1a] transition">
                  <td className="p-3 font-medium text-white">{p.nombre}</td>
                  <td className="p-3 text-gray-400">{p.categoria}</td>
                  <td className="p-3 text-right text-gray-300">${p.precio}</td>
                  <td className={`p-3 text-right font-bold ${p.alerta ? 'text-red-400' : 'text-[#FF6B00]'}`}>{p.stock}</td>
                  <td className="p-3 text-right text-[#FFD700]">${(p.stock * p.precio).toLocaleString('es-MX')}</td>
                  <td className="p-3 text-center">
                    {p.alerta
                      ? <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">Bajo</span>
                      : <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">OK</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}