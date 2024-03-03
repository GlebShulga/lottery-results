"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <header className="flex justify-end items-center w-full h-12 py-4 px-6 bg-gradient-to-b from-lime-400 to-lime-600 md:text-slate-100">
      <button onClick={handleMenuClick} className="md:hidden">
        <Image src="/bars-3.svg" alt="Menu" width={25} height={25} />
      </button>
      <div className="hidden md:flex">
        <Link href="/" className="text-xl font-bold hover:underline text-lg">
          Home
        </Link>
        <Image
          src="/ellipsis-vertical.svg"
          alt="divider"
          className="mx-2"
          width={15}
          height={15}
        />
        <Link
          href="/lottery-results"
          className="text-xl font-bold hover:underline text-lg"
        >
          Lottery results
        </Link>
      </div>
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-full bg-black/50 opacity-75 transition-opacity duration-200 ease-in-out ${
          isOpen ? "visible" : "invisible"
        }`}
        onClick={handleMenuClick}
      />
      <div
        className={`fixed top-0 left-0 z-50 h-full w-fit bg-gradient-to-b from-lime-300 to-lime-500 transition-transform duration-200 ease-in-out transform ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-2 px-6 pt-10">
          <li>
            <Link href="/" className="text-lg font-medium hover:text-lime-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/lottery-results"
              className="text-lg font-medium hover:text-lime-600"
            >
              Lottery results
            </Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={handleMenuClick}
          className="absolute top-2 right-4 p-2 rounded-full"
        >
          {" "}
          <Image
            src="/cross.svg"
            alt="Close menu"
            width={12}
            height={12}
            // fill
          />
        </button>
      </div>
    </header>
  );
}
