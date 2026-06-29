import { ReactNode } from 'react';
import { DemoModeSwitcher } from '@/components/demo-mode-switcher';

export default function AppLayout({ children }: { children: ReactNode }) {
  return <DemoModeSwitcher>{children}</DemoModeSwitcher>;
}