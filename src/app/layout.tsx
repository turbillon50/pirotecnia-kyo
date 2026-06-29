import './globals.css';
import type { Metadata } from 'next';
import BottomNav from '@/components/bottom-nav';

export const metadata: Metadata = {
  title: 'Pirotecnia KYO',
  description: 'Sistema de inventario — Pirotecnia KYO, Oaxaca',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a] text-white min-h-screen font-sans pb-16">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
