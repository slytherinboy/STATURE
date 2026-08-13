import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOCLE par STATURE — Votre site professionnel",
  description:
    "Un site professionnel conçu pour le mobile, disponible par abonnement ou en pleine propriété. Aperçu personnalisé sous 72 heures.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
