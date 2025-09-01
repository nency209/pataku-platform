// src/components/ClientTransition.tsx
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import RouteLoader from "@/components/sections/RouteLoader";

export default function ClientTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader immediately on path change
    setLoading(true);

    // Artificially keep it until next paint (~300ms)
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <RouteLoader />}
      {children}
    </>
  );
}
