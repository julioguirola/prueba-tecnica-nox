import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MasterPice } from "./cards/MasterPice";

export default function Incredible() {
  return (
    <section className="flex flex-col bg-[#475569] border-b gap-8 py-12 px-4">
      <div className="flex flex-col gap-6 text-white">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-[32px]/[35.2px]">Be incredible</h1>
          <p className="font-normal text-[16px]/[22.4px]">
            Nec ultricies eget placerat ultricies eleifend dignissim aliquet
            sapien. Senectus vestibulum, eget erat at et congue cursus pretium.
          </p>
        </div>
        <button className="border-2 rounded-[8px] bg-transparent border-white w-[201px] p-4 font-medium text-xl/[24px]">
          Explore Xinder
        </button>
      </div>
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex justify-center">
              <MasterPice
                imgUrl="/master1.jpeg"
                hasStatus={true}
                statusText="Promoted"
                statusColor="text-[#292524]"
                avatarUrl="/avatar1.jpeg"
                title="Flower Decorations"
                autor="Melvina Spring"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <MasterPice
                imgUrl="/master2.jpeg"
                hasStatus={true}
                statusText="Featured"
                statusColor="text-[#6B21A8]"
                avatarUrl="/avatar2.jpeg"
                title="Flower Decorations"
                autor="Melvina Spring"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <MasterPice
                imgUrl="/master3.jpeg"
                hasStatus={false}
                statusText={undefined}
                statusColor={undefined}
                avatarUrl="/avatar3.jpeg"
                title="Splash"
                autor="Melvina Spring"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <MasterPice
                imgUrl="/master4.jpeg"
                hasStatus={false}
                statusText={undefined}
                statusColor={undefined}
                avatarUrl="/avatar4.jpeg"
                title="Colorful Face"
                autor="Melvina Spring"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <MasterPice
                imgUrl="/master5.jpeg"
                hasStatus={false}
                statusText={undefined}
                statusColor={undefined}
                avatarUrl="/avatar5.jpeg"
                title="Fence Spying"
                autor="Melvina Spring"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="relataive left-2" />
          <CarouselNext className="relataive right-2" />
        </Carousel>
      </div>
    </section>
  );
}
