'use client';

import { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type DemoMode = 'publico' | 'dueno' | 'admin';

const DemoModeContext = createContext<{ mode: DemoMode }>({ mode: 'publico' });

export const useDemoMode = () => useContext(DemoModeContext);

export function DemoModeSwitcher({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<DemoMode>('publico');
  const router = useRouter();

  useEffect(() => {
    if (mode === 'publico') router.push('/');
    else if (mode === 'dueno') router.push('/app');
    else router.push('/admin');
  }, [mode]);

  const modos: { key: DemoMode; label: string }[] = [
    { key: 'publico', label: '🌐 Público' },
    { key: 'dueno', label: '🔑 Dueño' },
    { key: 'admin', label: '⚙️ Admin' },
  ];

  return (
    <DemoModeContext.Provider value={{ mode }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex gap-1 bg-black/90 border border-gray-700 rounded-full px-2 py-1 shadow-xl">
        {modos.map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              mode === m.key
                ? 'bg-[#FF6B00] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </DemoModeContext.Provider>
  );
}