"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Quote({ index }: { index: number }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setName(data[index].name));

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComment(data[index].body));
  }, []);

  return (
    <div className="flex flex-col px-4 gap-8">
      <div className="flex flex-col items-center h-[258px]">
        <Image
          src={"/quote1.jpeg"}
          width={361}
          height={258}
          alt="Quote Img"
          className="rounded-[10px]"
        />
        <div className="flex justify-center items-center relative h-[144px] w-[144px] bg-[#12161980] rounded-[100px] top-[-201px] py-6 pl-7 pr-5">
          <svg
            width="97"
            height="96"
            viewBox="0 0 97 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.78 50.092C72.0608 49.6512 72.2502 49.1585 72.337 48.6432C72.4238 48.1278 72.4062 47.6003 72.2854 47.0918C72.1645 46.5834 71.9428 46.1044 71.6334 45.6832C71.3239 45.2621 70.9331 44.9073 70.484 44.64L30.796 20.512C30.1506 20.1213 29.4104 19.9152 28.656 19.916C26.416 19.916 24.604 21.688 24.604 23.876V72.12C24.604 72.86 24.816 73.584 25.216 74.212C26.4 76.068 28.896 76.636 30.796 75.48L70.484 51.356C71.008 51.036 71.456 50.6 71.784 50.088L71.78 50.092ZM74.764 58.08L35.08 82.204C29.38 85.672 21.88 83.964 18.336 78.4C17.1378 76.5245 16.5008 74.3456 16.5 72.12V23.88C16.5 17.316 21.94 12 28.66 12C30.928 12 33.152 12.62 35.08 13.792L74.764 37.92C80.464 41.384 82.212 48.704 78.664 54.272C77.68 55.816 76.344 57.12 74.764 58.08Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col h-[140px] gap-4 font-normal">
        <h4 className="text-[20px]/[26px] text-[#475569]">{name}</h4>
        <p className="text-[#0F172A] text-left">“{comment}”</p>
      </div>
    </div>
  );
}
