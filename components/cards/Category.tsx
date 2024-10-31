import Image from "next/image";

export function Category({
  imgUrl,
  textSmall,
  textBig,
}: {
  imgUrl: string;
  textSmall: string;
  textBig: string;
}) {
  return (
    <div
      className={
        "w-[236.8px] h-[354px] rounded-[5px] border border-[#E2E8F0] overflow-hidden"
      }
    >
      <Image
        src={imgUrl}
        alt="Category Img"
        height={354}
        width={236.8}
        className="-z-10"
      />
      <div className="relative top-[-354px]  flex flex-col p-6 pb-16 gap-4 bg-gradient-to-b from-[#0F172A80] to-[#0F172A00] text-white">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-[16px]/[17.6px]">{textSmall}</p>
          <h3 className="font-bold text-[24px]/[26.4px]">{textBig}</h3>
        </div>
      </div>
    </div>
  );
}
