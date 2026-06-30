'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProfile } from '@/lib/demo-data';
import { IconPhone, IconMapPin, IconEdit, IconLogout, IconBox, IconClock } from '@/components/icons';

export default function PerfilPage() {
  const menu = [
    { href: '/app', label: 'Mi bodega', icon: <IconBox c="#FF6B00" /> },
    { href: '/app/movimientos', label: 'Historial de movimientos', icon: <IconClock c="#FF6B00" /> },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-lg mx-auto px-4 pt-6 pb-4"
    >
      <h1 className="text-2xl font-black text-white mb-5">Perfil</h1>

      <div className="bg-[#111] rounded-[var(--r-lg)] p-5 border border-white/5 mb-5 text-center">
        <div className="w-20 h-20 rounded-full bg-[#FF6B00]/15 flex items-center justify-center mx-auto mb-3 text-[#FF6B00] font-black text-2xl">
          EA
        </div>
        <p className="text-white font-bold text-lg">{demoProfile.nombre}</p>
        <p className="text-[#FFD700] text-sm font-medium mb-3">{demoProfile.rol}</p>

        <div className="flex items-center justify-center gap-1.5 text-gray-500 text-sm mb-1">
          <IconPhone c="#6b7280" s={14} />
          {demoProfile.telefono}
        </div>
        <div className="flex items-center justify-center gap-1.5 text-gray-500 text-sm">
          <IconMapPin c="#6b7280" s={14} />
          {demoProfile.ubicacion}
        </div>

        <Link href="/perfil/editar">
          <motion.div
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-[var(--r-sm)] px-4 py-2 text-sm text-white font-medium"
          >
            <IconEdit c="#FF6B00" s={16} />
            Editar perfil
          </motion.div>
        </Link>
      </div>

      <div className="space-y-2 mb-5">
        {menu.map((m, i) => (
          <motion.div
            key={m.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.06 * i }}
          >
            <Link href={m.href} className="flex items-center gap-3 bg-[#111] rounded-[var(--r-md)] p-3.5 border border-white/5">
              <span className="w-5 h-5">{m.icon}</span>
              <span className="text-white text-sm font-medium">{m.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.button whileTap={{ scale: 0.97 }} className="w-full flex items-center justify-center gap-2 text-red-400 text-sm font-medium py-3">
        <IconLogout s={16} />
        Cerrar sesión
      </motion.button>
    </motion.main>
  );
}
