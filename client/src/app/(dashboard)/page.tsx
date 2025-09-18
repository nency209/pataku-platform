"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hook";

export default function DashboardEntry() {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      router.replace("/signin"); // not logged in
    } else if (user.role === "admin") {
      router.replace("/dashboard/admin");
    } else {
      router.replace("/dashboard/user");
    }
  }, [user, router]);

  return null; // nothing to render, just redirect
}
