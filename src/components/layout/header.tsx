"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const navs = [
    {
      id: "simple-initials",
      path: "/simple-initials",
      label: "Simple Initials",
      image: "/header-nav-icon.jpeg",
    },
    {
      id: "minotar",
      path: "/minotar",
      label: "Minotar",
      image: "/header-nav-icon.jpeg",
    },
    {
      id: "pravatar",
      path: "/pravatar",
      label: "Pravatar",
      image: "/header-nav-icon.jpeg",
    },
  ];

  return (
    <header className="h-screen basis-1/4 flex-shrink-0 pt-9 space-y-8 border-r border-r-indigo-300 p-4">
      <Link href="/" className="text-4xl font-black">
        Fun Avatar<br/>Generator
      </Link>
      <nav>
        <ul className="space-y-2">
          {navs &&
            navs.map((nav) => {
              const isCurrent = nav.path === pathname ? true : false;

              return (
                <li key={nav.id}>
                  <Link href={nav.path} className="flex space-x-2 align-middle transition-opacity hover:opacity-80">
                    <Image src={nav.image} width={30} height={30} alt="icon" className="rounded-lg" />
                    <span className={isCurrent ? "font-bold text-lime-500" : "font-bold"}>{nav.label}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};
