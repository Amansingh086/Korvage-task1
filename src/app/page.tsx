"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./components/AuthProvider";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push("/board");
      } else {
        router.push("/auth/login");
      }
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4 animate-pulse">
          <span className="text-white font-bold text-xl">J</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
