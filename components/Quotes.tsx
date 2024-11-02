import { Quote } from "./cards/Quote";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Quotes() {
  return (
    <section className="bg-[#F1F5F9] border-b py-12">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Quote />
          </CarouselItem>
          <CarouselItem>
            <Quote />
          </CarouselItem>
          <CarouselItem>
            <Quote />
          </CarouselItem>
          <CarouselItem>
            <Quote />
          </CarouselItem>
          <CarouselItem>
            <Quote />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="relataive left-2" />
        <CarouselNext className="relataive right-2" />
      </Carousel>
    </section>
  );
}
