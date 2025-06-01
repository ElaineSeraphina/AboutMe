
import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Elaine | Cyberpunk Portfolio 20150',
  description: 'Personal portfolio of Elaine - Coder, Web3 Explorer, and System Automation Specialist',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
