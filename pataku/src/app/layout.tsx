// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientTransition from "@/components/sections/ClientLayout";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Pataku Clone",
  description: "Shopify-like E-commerce Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientTransition>
          <ReduxProvider>{children}</ReduxProvider>
        </ClientTransition>
      </body>
    </html>
  );
}
