"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-[#881337] text-white flex flex-col gap-8 border-b">
      <div className="flex justify-between items-center p-4 h-[67px]">
        <h1 className="text-[32px]/[35.2px] font-bold">xinder</h1>
        <button onClick={toggleMenu}>
          {!showMenu && (
            <svg width={24} height={25} viewBox="0 0 24 25" fill="none">
              <path
                d="M3 5.5H11"
                stroke="white"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12.5H16"
                stroke="white"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 19.5H21"
                stroke="white"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {showMenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex absolute h-0 w-full justify-end top-[67px]">
        <div
          className={
            "duration-500 bg-[#881337] flex flex-col text-base items-center font-medium gap-2 h-48 text-nowrap overflow-x-hidden " +
            (showMenu ? "basis-40" : "basis-[0]")
          }
        >
          <button></button>
          <a href="#">Explore</a>
          <a href="#">Solutions</a>
          <a href="#">Articles</a>
          <a href="#">Sign In</a>
          <button className="rounded-[5px] border-2 border-white px-3 py-[6px]">
            Join Now
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6 mx-4 h-[192px]">
        <h1 className="font-bold text-[40px]/[44px]">
          Search the work of the best artists
        </h1>
        <div className="flex flex-col gap-2 h-20">
          <form className="flex gap-4 h-12">
            <input
              className="rounded-[5px] px-4 py-3 placeholder:font-normal placeholder:text-[16px]/[22.4px] placeholder:text-gray-600 font-normal text-[16px]/[22.4px] text-gray-950"
              placeholder="search for artists, work na..."
              value={searchText}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setSearchText(event.target.value);
              }}
            />
            <button className="w-full bg-[#BE123C] rounded-[5px] border-2 border-[#BE123C]">
              Search
            </button>
          </form>
          <div className="flex gap-2 h-6 font-normal text-[14px]/[19.6px] text-nowrap overflow-scroll no-scrollbar">
            <button
              onClick={() => {
                setSearchText("Painting");
              }}
              className="rounded px-2 border h-6"
            >
              Oil Painting
            </button>
            <button
              onClick={() => {
                setSearchText("Abstract Art");
              }}
              className="rounded px-2 border h-6"
            >
              Abstract Art
            </button>
            <button
              onClick={() => {
                setSearchText("Sculpture");
              }}
              className="rounded px-2 border h-6"
            >
              Sculpture
            </button>
            <button
              onClick={() => {
                setSearchText("Art Deco");
              }}
              className="rounded px-2 border h-6"
            >
              Art Deco
            </button>
            <button
              onClick={() => {
                setSearchText("Pop Art");
              }}
              className="rounded px-2 border h-6"
            >
              Pop Art
            </button>
          </div>
        </div>
      </div>
      <div className="flex mx-4 justify-center items-center">
        <Image src={"/h-photo.png"} alt="Woman Img" width={345} height={291} />
      </div>
    </header>
  );
}
