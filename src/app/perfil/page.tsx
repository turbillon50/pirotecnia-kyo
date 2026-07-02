'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { demoProfile } from '@/lib/demo-data';
import {
  IconPhone,
  IconMapPin,
  IconEdit,
  IconLogout,
  IconBox,
  IconClock,
} from '@/components/icons';

const menu = [
  { href: '/app', label: 'Mi bodega', icon: <IconBox c="#FF6B00" /> },
  {
    href: '/app/movimientos',
    label: 'Historial de movimientos',
    icon: <IconClock c="#FF6B00" />,
  },
];

const stats = [
  { label: 'Productos', value: 10, color: '#FF6B00' },
  { label: 'Movimientos', value: 4, color: '#FFD700' },
  { label: 'Alertas', value: 4, color: '#FF2A5E' },
];

export default function PerfilPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="min-h-screen bg-[#0a0a0a] text-white"
    >
      {/* Header Hero */}
      <section className="relative h-32 overflow-hidden">
        <img
          src="/brand/taller/castillo.jpg"
          alt="Taller"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-0 flex justify-center items-end">
          <div className="relative -mb-12">
            <motion.div
              className="w-24 h-24 rounded-full p-1"
              style={{ background: 'conic-gradient(from 0deg, #FF6B00, #FFD700, #FF2A5E, #FF6B00)' }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            >
              <motion.div
                className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-[#FF6B00] font-black text-2xl"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              >
                EA
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Card */}
      <motion.div
        className="max-w-lg mx-auto px-4 pt-6"
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.25 }}
      >
        <div className="bg-[#111] rounded-[var(--r-lg)] p-5 pt-16 border border-white/5 text-center">
          <p className="text-white font-bold text-lg">{demoProfile.nombre}</p>
          <p className="text-[#FFD700] text-sm font-medium mb-3">{demoProfile.rol}</p>

          <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm mb-1">
            <IconPhone c="#6b7280" s={14} />
            {demoProfile.telefono}
          </div>
          <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm mb-4">
            <IconMapPin c="#6b7280" s={14} />
            {demoProfile.ubicacion}
          </div>

          <a href="https://wa.me/5219512546911" target="_blank" rel="noopener noreferrer">
            <motion.span
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#25D366] text-[#062e16] font-bold py-2.5 px-5 rounded-full text-sm shadow-[0_4px_18px_rgba(37,211,102,0.35)]"
            >
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar WhatsApp
            </motion.span>
          </a>

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

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-3 gap-3 mt-6"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.25 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="kyo-card bg-[#111] border border-white/5 rounded-[var(--r-md)] p-4 text-center"
            >
              <p className="text-3xl font-black" style={{ color: s.color }}>
                {s.value}
              </p>
              <p className="text-gray-400 text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Menu */}
        <motion.div className="space-y-2 mt-6" variants={{ hidden: {}, visible: {} }}>
          {menu.map((m, i) => (
            <motion.div
              key={m.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.06 }}
            >
              <Link
                href={m.href}
                className="flex items-center gap-3 bg-[#111] rounded-[var(--r-md)] p-3.5 border border-white/5"
              >
                <span className="w-5 h-5">{m.icon}</span>
                <span className="text-white text-sm font-medium">{m.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Logout */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 text-red-400 text-sm font-medium py-3 mt-6"
        >
          <IconLogout s={16} />
          Cerrar sesión
        </motion.button>
      </motion.div>
    </motion.main>
  );
}