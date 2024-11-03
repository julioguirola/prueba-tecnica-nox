import Image from "next/image";

export default function AddMore({ width }: { width: number }) {
  return (
    <section className="flex flex-col lg:flex-row bg-[#0F172A] gap-8 pt-12 lg:pt-20 px-4 lg:px-20 lg:gap-20 text-white items-center">
      <div className="flex flex-col items-center lg:items-start gap-6">
        <h1 className="font-bol text-[32px]/[35.2px] lg:text-[56px]/[61.6px] lg:font-extrabold lg:text-left text-center">
          Add more masterpieces to your growing collection
        </h1>
        <button className="rounded-[8px] border-2 p-4 w-[152px] text-xl/[24px]">
          Join Now
        </button>
      </div>
      {width < 1024 && (
        <Image src={"/f-photo.png"} width={321} height={280} alt="Man Img" />
      )}
      {width >= 1024 && (
        <Image src={"/f-photo.png"} width={530} height={480} alt="Man Img" />
      )}
    </section>
  );
}
