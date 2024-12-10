import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import {PrimeReactProvider} from "primereact/api";
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import "primeicons/primeicons.css";
import React from "react";
import MenuBar from "@/components/Menubar/MenuBar";

export const metadata: Metadata = {
  title: "StartBus",
  icons: "/newIcon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
