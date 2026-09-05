"use client";
import { Authenticated } from "@refinedev/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  return (
    <Authenticated
      key="home"
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          در حال انتقال به صفحه ورود...
        </div>
      }
      redirect="/products"
    >
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">خوش آمدید</h1>
      </div>
    </Authenticated>
  );
}
