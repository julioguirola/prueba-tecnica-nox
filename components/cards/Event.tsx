import Image from "next/image";

export function Event({
  status,
  statusColor,
  statusBgColor,
  title,
  text,
  imgUrl,
}: {
  status: string;
  statusColor: string;
  statusBgColor: string;
  title: string;
  text: string;
  imgUrl: string;
}) {
  return (
    <div className="flex flex-col h-[338px]">
      <Image
        src={imgUrl}
        alt="Event Img"
        width={361}
        height={220}
        className="-z-10 rounded-[5px]"
      />

      <div className="relative top-[-220px] p-5 w-[300px] h-[64px]">
        <div
          className={
            "bg-[#F1F5F9] h-6 rounded py-1 px-2 flex w-fit items-center " +
            statusColor +
            " " +
            statusBgColor
          }
        >
          {status}
        </div>
      </div>
      <div className="flex flex-col relative top-[-64px] pt-6 pb-4 gap-2">
        <h1 className="font-bold text-[24px]/[26.4px] text-[#0F172A]">
          {title}
        </h1>
        <p className="font-normal text-[16px]/[22.4px] text-[#0F172A]">
          {text}
        </p>
      </div>
    </div>
  );
}
