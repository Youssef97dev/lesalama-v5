"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="hero" className="relative h-screen w-full ">
      {/* Image Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center block lg:hidden"
        style={{
          backgroundImage: "url(/images/hero-mobile.jpg)",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: "url(/images/salama-11.jpg)",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="absolute inset-0 bg-[#0000001e] h-screen mix-blend-multiply "></div>
      {/* Hero Content */}
      <Link
        href="/"
        className="absolute w-full flex justify-center items-center top-20"
      >
        <Image
          src="/icons/logo-salama-humberger-brown.png"
          alt="le salama logo"
          width={200}
          height={200}
          className="cursor-pointer lg:hidden block"
        />
        <Image
          src="/icons/logo-salama-humberger-brown.png"
          alt="le salama logo"
          width={280}
          height={280}
          className="cursor-pointer hidden lg:block"
        />
      </Link>

      <div className="absolute h-full w-full font-light px-20 lg:px-[45rem] mt-24 flex flex-col justify-center items-center italic text-white text-lg space-y-6">
        <Link
          href="https://www.lesalamamarrakech.com/menu/lunch/"
          target="_blank"
          className="text-center py-1 w-full border border-white hover:text-black hover:bg-white transition-all ease-in-out"
        >
          See Menu
        </Link>

        <Link
          href="#"
          className="text-center py-1 w-full border border-white hover:text-black hover:bg-white transition-all ease-in-out"
        >
          Events
        </Link>

        <Link
          href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
          className="text-center py-1 w-full border border-white hover:text-black hover:bg-white transition-all ease-in-out"
        >
          Reservation
        </Link>
      </div>
    </div>
  );
};

export default Hero;
