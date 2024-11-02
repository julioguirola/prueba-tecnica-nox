import Image from "next/image";

export default function Solutions() {
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
          className="relative rounded-[10px] top-[7px] left-[48px] z-30 shadow"
        />
        <div className="relative top-[-224px] left-[23px] rounded-[20px] border border-[#CBD5E1] h-[201px] w-[316px] overflow-hidden z-10 bg-white shadow">
          <div className="flex h-[41px] gap-[5px] py-2 px-4 items-center bg-white">
            <div className="h-[8.33px] w-[8.33px] rounded-full bg-rose-600"></div>
            <div className="h-[8.33px] w-[8.33px] rounded-full bg-amber-400"></div>
            <div className="h-[8.33px] w-[8.33px] rounded-full bg-green-500"></div>
          </div>
          <div>
            <Image
              src={"/gradient.jpeg"}
              alt="Gradient"
              width={316}
              height={162}
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
      <div className="flex flex-col gap-6 text-white">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-[32px]/[35.2px]">
            Best solutions for your demanding collection
          </h1>
          <p className="font-normal text-[16px]/[22.4px]">
            Odio vulputate cras vel lacinia turpis volutpat adipiscing.
            Sollicitudin at velit, blandit tempus nunc in.
          </p>
        </div>
        <div className="flex flex-col text-[16px]/[22.4px] font-normal text-nowrap">
          <div className="flex gap-2 items-center h-6">
            <div className="w-6 flex justify-center">
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48623 9.72989C5.35497 9.73016 5.22494 9.7045 5.10361 9.6544C4.98229 9.60429 4.87205 9.53071 4.77923 9.43789L0.537232 5.19489C0.441659 5.10271 0.365401 4.99242 0.312907 4.87046C0.260414 4.74849 0.232736 4.61729 0.231489 4.48451C0.230243 4.35174 0.255452 4.22004 0.305646 4.09711C0.35584 3.97418 0.430013 3.86248 0.523839 3.76852C0.617664 3.67456 0.729262 3.60023 0.852122 3.54986C0.974981 3.49949 1.10664 3.4741 1.23942 3.47516C1.3722 3.47622 1.50344 3.50371 1.62548 3.55603C1.74752 3.60835 1.85792 3.68445 1.95023 3.77989L5.48523 7.31489L11.8502 0.951894C12.0377 0.764253 12.2921 0.658785 12.5574 0.658691C12.8226 0.658598 13.0771 0.763886 13.2647 0.951394C13.4524 1.1389 13.5578 1.39327 13.5579 1.65854C13.558 1.92381 13.4527 2.17825 13.2652 2.36589L6.19323 9.43789C6.10041 9.53071 5.99018 9.60429 5.86885 9.6544C5.74752 9.7045 5.6175 9.73016 5.48623 9.72989Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>Interdum volutpat turpis malesuada ac turpis.</p>
          </div>
          <div className="flex gap-2 items-center h-6">
            <div className="w-6 flex justify-center">
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48623 9.72989C5.35497 9.73016 5.22494 9.7045 5.10361 9.6544C4.98229 9.60429 4.87205 9.53071 4.77923 9.43789L0.537232 5.19489C0.441659 5.10271 0.365401 4.99242 0.312907 4.87046C0.260414 4.74849 0.232736 4.61729 0.231489 4.48451C0.230243 4.35174 0.255452 4.22004 0.305646 4.09711C0.35584 3.97418 0.430013 3.86248 0.523839 3.76852C0.617664 3.67456 0.729262 3.60023 0.852122 3.54986C0.974981 3.49949 1.10664 3.4741 1.23942 3.47516C1.3722 3.47622 1.50344 3.50371 1.62548 3.55603C1.74752 3.60835 1.85792 3.68445 1.95023 3.77989L5.48523 7.31489L11.8502 0.951894C12.0377 0.764253 12.2921 0.658785 12.5574 0.658691C12.8226 0.658598 13.0771 0.763886 13.2647 0.951394C13.4524 1.1389 13.5578 1.39327 13.5579 1.65854C13.558 1.92381 13.4527 2.17825 13.2652 2.36589L6.19323 9.43789C6.10041 9.53071 5.99018 9.60429 5.86885 9.6544C5.74752 9.7045 5.6175 9.73016 5.48623 9.72989Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>Tortor ipsum pretium quis nunc.</p>
          </div>
          <div className="flex gap-2 items-center h-6">
            <div className="w-6 flex justify-center">
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.48623 9.72989C5.35497 9.73016 5.22494 9.7045 5.10361 9.6544C4.98229 9.60429 4.87205 9.53071 4.77923 9.43789L0.537232 5.19489C0.441659 5.10271 0.365401 4.99242 0.312907 4.87046C0.260414 4.74849 0.232736 4.61729 0.231489 4.48451C0.230243 4.35174 0.255452 4.22004 0.305646 4.09711C0.35584 3.97418 0.430013 3.86248 0.523839 3.76852C0.617664 3.67456 0.729262 3.60023 0.852122 3.54986C0.974981 3.49949 1.10664 3.4741 1.23942 3.47516C1.3722 3.47622 1.50344 3.50371 1.62548 3.55603C1.74752 3.60835 1.85792 3.68445 1.95023 3.77989L5.48523 7.31489L11.8502 0.951894C12.0377 0.764253 12.2921 0.658785 12.5574 0.658691C12.8226 0.658598 13.0771 0.763886 13.2647 0.951394C13.4524 1.1389 13.5578 1.39327 13.5579 1.65854C13.558 1.92381 13.4527 2.17825 13.2652 2.36589L6.19323 9.43789C6.10041 9.53071 5.99018 9.60429 5.86885 9.6544C5.74752 9.7045 5.6175 9.73016 5.48623 9.72989Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>Vitae odio a id purus in.</p>
          </div>
        </div>
        <button className="border-2 rounded-[8px] bg-transparent border-white w-[201px] p-4 font-medium text-xl/[24px]">
          Explore Xinder
        </button>
      </div>
    </section>
  );
}
