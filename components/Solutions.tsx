import Image from "next/image";

export function Solutions() {
  return (
    <section className="flex flex-col gap-8 px-4 py-12 border-b bg-[#475569]">
      <div>
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
            <div className="flex justify-center items-center relative h-[128px] w-[128px] bg-[#12161980] rounded-[100px] top-[-144px] left-[94px] py-4 pl-5 pr-3">
              <svg
                width="64"
                height="72"
                viewBox="0 0 64 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.28 38.092C55.5608 37.6512 55.7502 37.1585 55.837 36.6432C55.9238 36.1278 55.9062 35.6003 55.7854 35.0918C55.6645 34.5834 55.4428 34.1044 55.1334 33.6832C54.8239 33.2621 54.4331 32.9073 53.984 32.64L14.296 8.512C13.6506 8.12133 12.9104 7.91519 12.156 7.916C9.916 7.916 8.104 9.688 8.104 11.876V60.12C8.104 60.86 8.316 61.584 8.716 62.212C9.9 64.068 12.396 64.636 14.296 63.48L53.984 39.356C54.508 39.036 54.956 38.6 55.284 38.088L55.28 38.092ZM58.264 46.08L18.58 70.204C12.88 73.672 5.38 71.964 1.836 66.4C0.637795 64.5245 0.000763392 62.3456 0 60.12L0 11.88C0 5.316 5.44 0 12.16 0C14.428 0 16.652 0.62 18.58 1.792L58.264 25.92C63.964 29.384 65.712 36.704 62.164 42.272C61.18 43.816 59.844 45.12 58.264 46.08Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
