import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Nom de l'application",
  description: "Description de l'application.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr">
      <body className="w-screen h-screen bg-white text-black antialiased">
          {children}
      </body>
    </html>
  );
}
