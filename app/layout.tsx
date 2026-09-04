import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "AstraMize — A Name for What's Next",
  description: 'AstraMize is an independent domain offered freely to OpenAI — a name waiting for the right future.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
