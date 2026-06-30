'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { demoProducts } from '@/lib/demo-data';
import { IconArrowLeft, IconCamera, IconBox } from '@/components/icons';

export default function AppDetailPage() {
  const params = useParams();
  const product = demoProducts.find((p) => p.id === Number(params.id));
  const [foto, setFoto] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  if (!product) {
    return <main className="px-4 pt-6 text-center text-gray-500">Producto no encontrado.</main>;
  }

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFoto(url);
    }
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
        <p className="text-gray-400 text-sm">Volver a bodega</p>
      </div>

      <div className="px-4">
        <div
          className="aspect-square bg-[#111] rounded-[var(--r-lg)] flex items-center justify-center border border-white/5 relative overflow-hidden mb-4"
        >
          {foto ? (
            <img src={foto} alt={product.nombre} className="w-full h-full object-cover" />
          ) : (
            <IconBox c="#2a2a2a" s={72} />
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-3 right-3 bg-[#FF6B00] rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <IconCamera c="#fff" s={22} />
          </motion.button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleCapture}
            className="hidden"
          />
        </div>

        <p className="text-gray-500 text-xs mb-1">{product.categoria}</p>
        <h1 className="text-2xl font-black text-white mb-3">{product.nombre}</h1>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#111] rounded-[var(--r-md)] p-3 border border-white/5">
            <p className="text-gray-500 text-xs">Stock actual</p>
            <p className={`text-2xl font-black ${product.alerta ? 'text-red-400' : 'text-[#FF6B00]'}`}>{product.stock} pzs</p>
          </div>
          <div className="bg-[#111] rounded-[var(--r-md)] p-3 border border-white/5">
            <p className="text-gray-500 text-xs">Precio unitario</p>
            <p className="text-2xl font-black text-[#FFD700]">${product.precio}</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{product.descripcion}</p>
      </div>
    </motion.main>
  );
}
