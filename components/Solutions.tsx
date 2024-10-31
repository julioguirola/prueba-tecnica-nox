import Image from "next/image";

export function Solutions() {
  return (
    <section className="flex flex-col gap-8 px-4 py-12 border-b bg-[#475569]">
      <div className="h-[277px]">
        <Image
          src={"/master4.jpeg"}
          alt="Imagen Arte"
          width={200}
          height={147}
          className="rounded-[10px] shadow"
        />
        <Image
          src={"/avatar5_2.jpeg"}
          alt="Imagen Arte"
          width={86}
          height={63}
          className="relative rounded-[10px] top-[-80px] left-[275px] z-30 shadow"
        />
        <Image
          src={"/avatar4_2.jpeg"}
          alt="Imagen Arte"
          width={82}
          height={60}
          className="relative rounded-[10px] top-[3px] left-[48px] z-30 shadow"
        />
        <div className="relative top-[-228px] left-[23px] rounded-[20px] border border-[#CBD5E1] h-[201px] w-[316px] overflow-hidden z-10 bg-white shadow">
          <div className="flex h-[41px] gap-[5px] py-2 px-4 items-center bg-white">
            <div className="h-[8.33px] w-[8.33px] rounded-full bg-rose-600"></div>
            <div className="h-[8.33px] w-[8.33px] rounded-full bg-amber-400"></div>
            <div className="h-[8.33px] w-[8.33px] rounded-full bg-green-500"></div>
          </div>
          <div>
            <Image
              src={"/gradient.jpeg"}
              alt="Gradient"
              width={314}
              height={160}
              className="relative"
            />
            <div className="relative h-[128px] w-[128px] bg-[#12161980] rounded-[100px] top-[-193.5px] left-[94px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
