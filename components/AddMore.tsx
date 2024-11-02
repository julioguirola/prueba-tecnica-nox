import Image from "next/image";

export default function AddMore() {
  return (
    <section className="flex flex-col bg-[#0F172A] gap-8 pt-12 px-4 text-white items-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-bol text-[32px]/[35.2px] text-center">
          Add more masterpieces to your growing collection
        </h1>
        <button className="rounded-[8px] border-2 p-4 w-[152px] text-xl/[24px]">
          Join Now
        </button>
      </div>
      <Image src={"/f-photo.png"} width={321} height={280} alt="Man Img" />
    </section>
  );
}
