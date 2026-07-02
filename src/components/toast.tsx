'use client';
import { createContext, useCallback, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Toast = { id: number; msg: string; tone: 'ok' | 'warn' };
const ToastCtx = createContext<(msg: string, tone?: 'ok' | 'warn') => void>(() => {});
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const push = useCallback((msg: string, tone: 'ok' | 'warn' = 'ok') => {
    const id = Date.now();
    setToasts((t) => [...t, { id, msg, tone }]);
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate(12);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2200);
  }, []);
  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div className="fixed inset-x-0 bottom-20 z-[9997] flex flex-col items-center gap-2 pointer-events-none px-6">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className={`px-4 py-2.5 rounded-full text-xs font-bold text-white shadow-lg border ${
                t.tone === 'ok'
                  ? 'bg-[#0d1a0d]/95 border-[#22c55e]/40 shadow-[0_4px_20px_rgba(34,197,94,0.25)]'
                  : 'bg-[#1a120d]/95 border-[#FF6B00]/40 shadow-[0_4px_20px_rgba(255,107,0,0.25)]'
              }`}
            >
              {t.msg}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  );
}
