"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = "" }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className={`bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}
      size="icon"
    >
      <ArrowLeft className="w-5 h-5" />
    </Button>
  );
}
