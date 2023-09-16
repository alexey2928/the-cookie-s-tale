"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { SlPencil } from "react-icons/sl";
import { Dancing_Script, Caveat } from "next/font/google";
import Categories from "./Categories";

const dancingScript = Dancing_Script({ weight: "400", subsets: ["latin"] });
const caveat = Caveat({ weight: "400", subsets: ["latin"] });

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <header className="bg-navBg w-full p-8">
        <div className="flex items-center justify-start">
          <h2 className={`${dancingScript.className} text-4xl`}>
            The Cookie's Tale
          </h2>
        </div>
        <div className="flex items-center justify-end ">
          <h2 className={`${caveat.className} text-6xl`}>
            share secrets and life stories
          </h2>
        </div>
        <div className="flex items-center justify-end">
          <h2 className={`${caveat.className} text-lg`}>keep it anonymously</h2>
        </div>
      </header>
      <header className="sticky top-0 h-20 w-full flex items-center justify-between px-48 py-3 z-[100] bg-navBg ">
        {/* <div className="sticky w-full flex items-center justify-between mt-4"> */}
        <div>
          <ul className="flex items-center justify-center text-xl">
            <Link href="/">
              <li className="mr-2 xl:mr-4">latest</li>
            </Link>
            <li className="mx-2 xl:mx-4">random</li>
            <li className="mx-2 xl:mx-4">best</li>
            <li
              className="ml-2 xl:ml-4 flex group"
              onMouseOver={() => setIsShown(true)}
              // onMouseLeave={() => setIsShown(false)}
            >
              <span>categories</span>
              {!isShown ? (
                <RiArrowDropDownLine
                  className="text-3xl transition ease
                duration-300"
                />
              ) : (
                <RiArrowDropUpLine
                  className="text-3xl transition ease
                duration-300"
                />
              )}
              {/* className="text-3xl group-hover:rotate-180 transition ease
              duration-300" */}
            </li>
          </ul>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%]">
          <h1>Logo</h1>
        </div>
        <div className="flex">
          <button className="bg-button flex items-center justify-between shadow-lg border border-border rounded-full p-3 mr-2 xl:mr-4">
            <SlPencil />
            <span className="ml-3">share your story</span>
          </button>
          <div>
            <form className="w-full flex justify-between items-center  bg-transparent border border-border rounded-full shadow-lg">
              <input
                placeholder="search for a secret"
                className="focus:outline-none bg-transparent border-none placeholder:text-sm placeholder:text-border py-3 pl-3 pr-1"
              ></input>
              <button className="text-border py-3 pr-3">
                <AiOutlineSearch />
              </button>
            </form>
          </div>
        </div>
        {/* </div> */}
      </header>
      {isShown && (
        <div
          className="sticky top-20 bg-navBg w-full"
          onMouseLeave={() => setIsShown(false)}
        >
          <Categories />
        </div>
      )}
    </>
  );
}

export default Navbar;
