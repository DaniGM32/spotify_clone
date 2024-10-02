import { Figtree } from 'next/font/google'
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
