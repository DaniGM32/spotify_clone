import { Figtree } from 'next/font/google'
import "./globals.css";
import Sidebar from '@/components/sidebar'

const main_font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: "My Spotify Clone",
  description: "Listen to music completely free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={main_font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
