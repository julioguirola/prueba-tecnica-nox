import Image from "next/image";

export function MasterPice({
  imgUrl,
  hasStatus,
  statusText,
  statusColor,
  avatarUrl,
  title,
  autor,
}: {
  imgUrl: string;
  hasStatus: boolean;
  statusText: string | undefined;
  statusColor: string | undefined;
  avatarUrl: string;
  title: string;
  autor: string;
}) {
  return (
    <div className="rounded-[10px] border border-[#E2E8F0] shadow w-[300px] h-[300px] overflow-hidden">
      <Image
        src={imgUrl}
        alt="Master Pice Img"
        width={300}
        height={220}
        className="-z-10"
      />

      <div className="relative top-[-220px] p-5 w-[300px] h-[64px]">
        {hasStatus && (
          <div
            className={
              "bg-[#F1F5F9] h-6 rounded py-1 px-2 flex w-fit items-center " +
              statusColor
            }
          >
            {statusText}
          </div>
        )}
      </div>

      <div className="relative top-[-64px] flex justify-center items-center w-[300px] h-[80px] p-4">
        <div className="flex gap-2">
          <Image
            src={avatarUrl}
            width={48}
            height={48}
            alt="Autor Avatar"
            className="rounded-[100px]"
          />
          <div className="w-[212px] h-[42px] font-normal">
            <h4 className="text-[16px]/[22.4px] text-[#0F172A]">{title}</h4>
            <p className="text-[14px]/[19.6px] text-[#475569]">by {autor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
