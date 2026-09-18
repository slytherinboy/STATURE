import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOCLE par STATURE — Votre site en pleine propriété",
  description:
    "Un site professionnel conçu pour le mobile, livré clé en main et entièrement à vous. Tarifs Sénégal, France et Royaume-Uni.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
