"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Quote({ index, width }: { index: number; width: number }) {
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
    <div className="flex flex-col lg:flex-row px-4 lg:px-20 gap-8 lg:gap-20 items-center">
      <div className="flex flex-col items-center h-[258px] lg:h-[384px]">
        {width < 1024 && (
          <Image
            src={"/quote1.jpeg"}
            width={361}
            height={258}
            alt="Quote Img"
            className="rounded-[10px]"
          />
        )}
        {width >= 1024 && (
          <Image
            src={"/quote1.jpeg"}
            width={576}
            height={384}
            alt="Quote Img"
            className="rounded-[10px]"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 font-normal lg:w-[800px]">
        <h4 className="text-[20px]/[26px] text-[#475569]">{name}</h4>
        <p className="text-[#0F172A] text-left text-[16px]/[22.4px] lg:text-[24px]/[38.4px]">
          “{comment}”
        </p>
      </div>
    </div>
  );
}
