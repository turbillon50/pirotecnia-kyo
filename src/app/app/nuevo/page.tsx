'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IconArrowLeft, IconCamera } from '@/components/icons';

export default function NuevoProductoPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [foto, setFoto] = useState<string | null>(null);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFoto(URL.createObjectURL(file));
  };

  const handleGuardar = () => {
    router.push('/app');
  };

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
        <h1 className="text-xl font-black text-white">Nuevo producto</h1>
      </div>

      <div className="px-4 space-y-4">
        <div className="aspect-[4/3] bg-[#111] rounded-[var(--r-lg)] border border-white/5 flex items-center justify-center relative overflow-hidden">
          {foto ? (
            <img src={foto} alt="preview" className="w-full h-full object-cover" />
          ) : (
            <p className="text-gray-600 text-sm">Sin foto capturada</p>
          )}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-3 right-3 bg-[#FF6B00] rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <IconCamera c="#fff" s={22} />
          </motion.button>
          <input ref={inputRef} type="file" accept="image/*" capture="environment" onChange={handleCapture} className="hidden" />
        </div>

        <div>
          <label className="text-gray-500 text-xs mb-1 block">Nombre del producto</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Cohete 7 Patas"
            className="w-full bg-[#111] border border-white/10 rounded-[var(--r-sm)] px-3 py-2.5 text-white text-sm outline-none focus:border-[#FF6B00]/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-gray-500 text-xs mb-1 block">Precio MXN</label>
            <input
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              type="number"
              placeholder="0"
              className="w-full bg-[#111] border border-white/10 rounded-[var(--r-sm)] px-3 py-2.5 text-white text-sm outline-none focus:border-[#FF6B00]/50"
            />
          </div>
          <div>
            <label className="text-gray-500 text-xs mb-1 block">Stock inicial</label>
            <input
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              type="number"
              placeholder="0"
              className="w-full bg-[#111] border border-white/10 rounded-[var(--r-sm)] px-3 py-2.5 text-white text-sm outline-none focus:border-[#FF6B00]/50"
            />
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleGuardar}
          className="w-full bg-[#FF6B00] text-white font-bold text-sm py-3.5 rounded-[var(--r-sm)] min-h-[44px]"
        >
          Guardar producto
        </motion.button>
      </div>
    </motion.main>
  );
}
