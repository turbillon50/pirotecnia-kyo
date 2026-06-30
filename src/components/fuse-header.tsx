'use client';
import { motion } from 'framer-motion';

export default function FuseHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="relative mb-6">
      <div className="flex items-center gap-3 mb-1">
        <motion.svg
          width="26" height="26" viewBox="0 0 28 28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.circle
            cx="22" cy="6" r="3"
            fill="#FFC300"
            initial={{ scale: 0.6, opacity: 0.4 }}
            animate={{ scale: [0.6, 1.15, 0.8], opacity: [0.4, 1, 0.7] }}
            transition={{ duration: 1.1, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
          <motion.path
            d="M22 6 Q14 10 10 16 T4 24"
            stroke="#FF7F00"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </motion.svg>
        <motion.h1
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-black kyo-metal-text"
        >
          {title}
        </motion.h1>
      </div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-gray-500 text-sm ml-9"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
