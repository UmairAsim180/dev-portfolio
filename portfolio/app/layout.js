import "./globals.css";
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can add more weights if needed
  variable: '--font-outfit',
});

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio built with Next.js and TailwindCSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.variable}
      >
        {children}
      </body>
    </html>
  );
}
