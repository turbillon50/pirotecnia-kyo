import './globals.css';
import type { Metadata } from 'next';
import BottomNav from '@/components/bottom-nav';
import SplashScreen from '@/components/splash-screen';
import SwRegister from '@/components/sw-register';
import { ToastProvider } from '@/components/toast';

export const metadata: Metadata = {
  title: 'Pirotecnia KYO',
  description: 'Sistema de inventario — Pirotecnia KYO, Oaxaca',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#FF6B00" />
      </head>
      <body className="bg-[#0a0a0a] text-white min-h-screen font-sans pb-14">
        <ToastProvider>
          <SplashScreen />
          <SwRegister />
          {children}
          <BottomNav />
        </ToastProvider>
      </body>
    </html>
  );
}
