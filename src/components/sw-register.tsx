'use client';
import { useEffect, useState } from 'react';

export default function SwRegister() {
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      if (reg.waiting) setWaiting(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', () => {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) setWaiting(nw);
        });
      });
    }).catch(() => {});
    let refreshed = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshed) return;
      refreshed = true;
      window.location.reload();
    });
  }, []);

  if (!waiting) return null;
  return (
    <button
      onClick={() => waiting.postMessage('SKIP_WAITING')}
      style={{
        position: 'fixed', bottom: 76, left: '50%', transform: 'translateX(-50%)',
        zIndex: 9998, background: 'linear-gradient(90deg,#FF2A5E,#FF7F00,#FFC300)',
        color: '#fff', fontWeight: 700, fontSize: 13, padding: '10px 18px',
        borderRadius: 999, border: 'none', boxShadow: '0 4px 20px rgba(255,127,0,0.5)',
      }}
    >
      Nueva versión disponible — Actualizar
    </button>
  );
}
