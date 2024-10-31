import { MasterPice } from "./cards/MasterPice";

export function LatMaster() {
  return (
    <section className="flex flex-col h-[511px] py-12 gap-6 bg-[#F1F5F9]">
      <div className="flex flex-col gap-2 px-4 border-r-[3px] border-[#F1F5F9]">
        <h1 className="font-bold text-[32px]/[35.2px]">Latest masterpieces</h1>
        <a href="#" className="flex justify-between py-3 gap-8 w-[258px]">
          <p className="font-medium text-base text-blue-600 text-nowrap">
            Discover More Masterpieces
          </p>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.586 10.657L11.636 6.70701C11.4538 6.51841 11.353 6.26581 11.3553 6.00361C11.3576 5.74141 11.4628 5.4906 11.6482 5.30519C11.8336 5.11978 12.0844 5.01461 12.3466 5.01234C12.6088 5.01006 12.8614 5.11085 13.05 5.29301L18.707 10.95C18.8002 11.0427 18.8741 11.1528 18.9246 11.2742C18.9751 11.3955 19.001 11.5256 19.001 11.657C19.001 11.7884 18.9751 11.9185 18.9246 12.0399C18.8741 12.1612 18.8002 12.2714 18.707 12.364L13.05 18.021C12.9578 18.1165 12.8474 18.1927 12.7254 18.2451C12.6034 18.2975 12.4722 18.3251 12.3394 18.3263C12.2066 18.3274 12.0749 18.3021 11.952 18.2518C11.8291 18.2016 11.7175 18.1273 11.6236 18.0334C11.5297 17.9395 11.4555 17.8279 11.4052 17.705C11.3549 17.5821 11.3296 17.4504 11.3307 17.3176C11.3319 17.1848 11.3595 17.0536 11.4119 16.9316C11.4643 16.8096 11.5405 16.6993 11.636 16.607L15.586 12.657H6C5.73478 12.657 5.48043 12.5517 5.29289 12.3641C5.10536 12.1766 5 11.9222 5 11.657C5 11.3918 5.10536 11.1374 5.29289 10.9499C5.48043 10.7624 5.73478 10.657 6 10.657H15.586Z"
              fill="#2563EB"
            />
          </svg>
        </a>
      </div>
      <div className="overflow-x-scroll no-scrollbar h-[300px] px-4">
        <div className="flex gap-6 w-[1628px] h-[300px]">
          <MasterPice
            imgUrl="/master1.jpeg"
            hasStatus={true}
            statusText="Promoted"
            statusColor="text-[#292524]"
            avatarUrl="/avatar1.jpeg"
            title="Flower Decorations"
            autor="Melvina Spring"
          />
          <MasterPice
            imgUrl="/master2.jpeg"
            hasStatus={true}
            statusText="Featured"
            statusColor="text-[#6B21A8]"
            avatarUrl="/avatar2.jpeg"
            title="Flower Decorations"
            autor="Melvina Spring"
          />
          <MasterPice
            imgUrl="/master3.jpeg"
            hasStatus={false}
            statusText={undefined}
            statusColor={undefined}
            avatarUrl="/avatar3.jpeg"
            title="Splash"
            autor="Melvina Spring"
          />
          <MasterPice
            imgUrl="/master4.jpeg"
            hasStatus={false}
            statusText={undefined}
            statusColor={undefined}
            avatarUrl="/avatar4.jpeg"
            title="Colorful Face"
            autor="Melvina Spring"
          />
          <MasterPice
            imgUrl="/master5.jpeg"
            hasStatus={false}
            statusText={undefined}
            statusColor={undefined}
            avatarUrl="/avatar5.jpeg"
            title="Fence Spying"
            autor="Melvina Spring"
          />
        </div>
      </div>
    </section>
  );
}
