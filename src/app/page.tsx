export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="mb-6 text-7xl">🎆</div>
      <h1 className="text-5xl md:text-7xl font-black text-[#FF6B00] mb-4 tracking-tight">
        PIROTECNIA KYO
      </h1>
      <p className="text-[#FFD700] text-lg font-semibold mb-2">
        Eusebio Ambrosio — Artesano Pirotécnico
      </p>
      <p className="text-gray-400 max-w-md mb-10">
        Elaboración y venta de fuegos artificiales. Zimatlan de Álvarez, Oaxaca.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="bg-[#111] border border-[#FF6B00]/30 rounded-xl p-6 w-64">
          <div className="text-3xl mb-2">📦</div>
          <h3 className="font-bold text-white">Inventario en tiempo real</h3>
          <p className="text-gray-400 text-sm mt-1">Controla entradas y salidas de bodega</p>
        </div>
        <div className="bg-[#111] border border-[#FFD700]/30 rounded-xl p-6 w-64">
          <div className="text-3xl mb-2">⚠️</div>
          <h3 className="font-bold text-white">Alertas automáticas</h3>
          <p className="text-gray-400 text-sm mt-1">Aviso cuando el stock está por agotarse</p>
        </div>
        <div className="bg-[#111] border border-gray-700 rounded-xl p-6 w-64">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-bold text-white">Reportes y KPIs</h3>
          <p className="text-gray-400 text-sm mt-1">Valor de bodega y movimientos del día</p>
        </div>
      </div>
      <p className="mt-10 text-gray-500 text-sm">
        Usa el toggle inferior para explorar los modos Dueño y Admin 👇
      </p>
    </main>
  );
}