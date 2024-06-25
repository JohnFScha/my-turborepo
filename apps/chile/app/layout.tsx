import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexy",
  description: "Plataforma web de arriendos y venta de propiedades.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: 'Arriendos, Venta de propiedades, Compra de propiedades, Casas en venta, Inmuebles, Venta de inmuebles, Viviendas, Propiedades',
  authors: [{ name: 'Flexy' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Flexy',
    description: "Plataforma web de arriendos y venta de propiedades.",
    url: 'https://flexyarriendos.cl/',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dqllk3gmq/image/upload/v1711548143/imageCompress/tmjcnsuydqpo7lih3bgm.png',
        width: 300,
        height: 300,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexy',
    description: "Plataforma web de arriendos y venta de propiedades.",
    images: ['https://res.cloudinary.com/dqllk3gmq/image/upload/v1711548143/imageCompress/tmjcnsuydqpo7lih3bgm.png'],
  },
  alternates: {
    canonical: 'https://flexyarriendos.cl/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}
