"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationIndex() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="w-full relative h-[140px] sm:h-[180px] md:h-[215px]">
      {/* Background Banner */}
      <Image
        src="/img/breadcrumb-bg.jpg"
        alt="breadcrumb banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <ol className="flex flex-wrap items-center text-xs sm:text-sm md:text-base text-muted font-light font-rubik">
            <li>
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>

            {segments.map((segment, index) => {
              const href = "/" + segments.slice(0, index + 1).join("/");
              const label =
                segment.charAt(0).toUpperCase() + segment.slice(1);

              return (
                <li key={href} className="flex items-center ml-1 sm:ml-2">
                  <span className="mx-1 sm:mx-2">/</span>
                  <Link
                    href={href}
                    className="text-black text-xs sm:text-sm md:text-base font-light font-rubik"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
