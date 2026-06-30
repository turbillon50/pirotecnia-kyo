'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { demoProfile } from '@/lib/demo-data';
import { IconArrowLeft, IconCamera } from '@/components/icons';

export default function EditarPerfilPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [nombre, setNombre] = useState(demoProfile.nombre);
  const [telefono, setTelefono] = useState(demoProfile.telefono);
  const [ubicacion, setUbicacion] = useState(demoProfile.ubicacion);

  const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-lg mx-auto pb-4"
    >
      <div className="px-4 pt-6 pb-3 flex items-center gap-3">
        <Link href="/perfil">
          <IconArrowLeft c="#fff" s={22} />
        </Link>
        <h1 className="text-xl font-black text-white">Editar perfil</h1>
      </div>

      <div className="px-4 flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-[#FF6B00]/15 flex items-center justify-center relative overflow-hidden">
          {avatar ? (
            <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
          ) : (
            <span className="text-[#FF6B00] font-black text-3xl">EA</span>
          )}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-0 right-0 bg-[#FF6B00] rounded-full w-8 h-8 flex items-center justify-center"
          >
            <IconCamera c="#fff" s={14} />
          </motion.button>
          <input ref={inputRef} type="file" accept="image/*" capture="user" onChange={handleCapture} className="hidden" />
        </div>
      </div>

      <div className="px-4 space-y-4">
        <div>
          <label className="text-gray-500 text-xs mb-1 block">Nombre completo</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full bg-[#111] border border-white/10 rounded-[var(--r-sm)] px-3 py-2.5 text-white text-sm outline-none focus:border-[#FF6B00]/50" />
        </div>
        <div>
          <label className="text-gray-500 text-xs mb-1 block">Teléfono</label>
          <input value={telefono} onChange={(e) => setTelefono(e.target.value)} className="w-full bg-[#111] border border-white/10 rounded-[var(--r-sm)] px-3 py-2.5 text-white text-sm outline-none focus:border-[#FF6B00]/50" />
        </div>
        <div>
          <label className="text-gray-500 text-xs mb-1 block">Ubicación</label>
          <input value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} className="w-full bg-[#111] border border-white/10 rounded-[var(--r-sm)] px-3 py-2.5 text-white text-sm outline-none focus:border-[#FF6B00]/50" />
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push('/perfil')}
          className="w-full bg-[#FF6B00] text-white font-bold text-sm py-3.5 rounded-[var(--r-sm)] min-h-[44px]"
        >
          Guardar cambios
        </motion.button>
      </div>
    </motion.main>
  );
}
