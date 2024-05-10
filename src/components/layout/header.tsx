"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { v4 as uuidv4 } from "uuid";

export const Header = () => {
  const pathname = usePathname();

  const navs = [
    {
      id: uuidv4(),
      path: "/simple-initials",
      label: "Simple Initials",
      image: "/header-nav-icon.jpeg",
    },
    {
      id: uuidv4(),
      path: "/minotar",
      label: "Minotar",
      image: "/header-nav-icon.jpeg",
    },
    {
      id: uuidv4(),
      path: "/pravatar",
      label: "Pravatar",
      image: "/header-nav-icon.jpeg",
    },
    {
      id: uuidv4(),
      path: "/fun-emoji",
      label: "Fun Emoji",
      image: "/header-nav-icon.jpeg",
    },
  ];

  return (
    <header className="fixed left-0 top-0 h-screen w-1/4 space-y-8 border-r border-r-indigo-300 p-4 pt-9">
      <Link href="/" className="text-4xl font-black">
        Fun Avatar
        <br />
        Generator
      </Link>
      <nav>
        <ul className="space-y-2">
          {navs &&
            navs.map((nav) => {
              const isCurrent = nav.path === pathname ? true : false;
              return (
                <li key={nav.id}>
                  <a href={nav.path} className="flex space-x-2 align-middle transition-opacity hover:opacity-80">
                    <Image src={nav.image} width={30} height={30} alt="icon" className="rounded-lg" />
                    <span className={isCurrent ? "font-bold text-lime-500" : "font-bold"}>{nav.label}</span>
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};
