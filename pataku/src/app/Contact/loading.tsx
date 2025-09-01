"use client";
import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex justify-center  bg-white">
      <Loader className="animate-spin text-gray-600" size={40} />
    </div>
  );
}
