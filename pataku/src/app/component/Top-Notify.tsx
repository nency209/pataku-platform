"use client";
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const TopBar = () => {
    const [visible, setVisible] = useState(true);

  if(!visible) return null;
  return (
 <div
  className="w-full bg-gradient-to-r from-[#d3b075] from-20% via-[#dabe91] via-40% to-[#ede8df] text-center py-2 grid items-center grid-cols-3  xl:grid-cols-[3.8fr_0.2fr] gap-y-2"
>
  {/* Text and Button */}
  <div className="col-span-2 xl:col-span-1 flex justify-center items-center">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
      <p className="font-medium text-sm sm:text-base">All featured products 50% off</p>
      <Button variant="outline" size="sm" className="font-bold text-white">
        Shop Now
      </Button>
    </div>
  </div>

  {/* Close Icon */}
  <div className="w-7 h-8 border border-gray-400 rounded-sm flex justify-center items-center mx-auto xl:mx-0 hover:cursor-pointer" onClick={() => setVisible(false)}>
    <X className="text-gray-500" size={16} />
  </div>
</div>




  );
};

export default TopBar;
