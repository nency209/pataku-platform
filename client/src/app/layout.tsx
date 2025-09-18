// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientTransition from "@/components/home/sections/ClientLayout";
import AppProvider from "@/provider/appprovider";
import ReduxProvider from "@/redux/reduxprovider";

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
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
          </ReduxProvider>
        </ClientTransition>
      </body>
    </html>
  );
}
