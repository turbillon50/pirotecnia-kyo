'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { demoProducts } from '@/lib/demo-data';
import { IconArrowLeft, IconBox, IconPhone, IconCart } from '@/components/icons';

export default function StoreDetailPage() {
  const params = useParams();
  const product = demoProducts.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <main className="px-4 pt-6 text-center text-gray-500">
        Producto no encontrado.
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/529512546911?text=${encodeURIComponent(`Hola, me interesa ${product.nombre} ($${product.precio} MXN)`)}`;

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-lg mx-auto pb-4"
    >
      <div className="px-4 pt-6 pb-3 flex items-center gap-3">
        <Link href="/store">
          <IconArrowLeft c="#fff" s={22} />
        </Link>
        <p className="text-gray-400 text-sm">Volver a la tienda</p>
      </div>

      <div className="aspect-square bg-[#111] mx-4 rounded-[var(--r-lg)] flex items-center justify-center border border-white/5">
        <IconBox c="#2a2a2a" s={72} />
      </div>

      <div className="px-4 pt-5">
        <p className="text-[#FFD700] text-xs font-bold mb-1">{product.categoria}</p>
        <h1 className="text-2xl font-black text-white mb-2">{product.nombre}</h1>
        <p className="text-[#FF6B00] text-3xl font-black mb-4">${product.precio} <span className="text-base text-gray-500 font-medium">MXN</span></p>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{product.descripcion}</p>

        <motion.a
          whileTap={{ scale: 0.97 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#FF6B00] text-white font-bold text-sm py-3.5 rounded-[var(--r-sm)] flex items-center justify-center gap-2 min-h-[44px]"
        >
          <IconPhone c="#fff" s={18} />
          Pedir por WhatsApp
        </motion.a>
      </div>
    </motion.main>
  );
}
