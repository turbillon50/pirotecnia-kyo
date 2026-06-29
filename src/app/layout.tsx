import './globals.css';
import type { Metadata } from 'next';
import AppLayout from '@/components/layouts/app-layout';

export const metadata: Metadata = {
  title: 'Pirotecnia KYO — Inventario',
  description: 'Sistema de inventario para Pirotecnia KYO, Oaxaca',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a] text-white min-h-screen font-sans">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}