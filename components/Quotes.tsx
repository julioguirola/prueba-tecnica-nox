import { Quote } from "./cards/Quote";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Quotes({ width }: { width: number }) {
  return (
    <section id="articles" className="bg-[#F1F5F9] border-b py-12 lg:py-20">
      <Carousel>
        <CarouselContent>
          {[0, 1, 2, 3, 4].map((x: number) => {
            return (
              <CarouselItem key={x}>
                <Quote index={x} width={width} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="relataive left-2 lg:left-16" />
        <CarouselNext className="relataive right-2 lg:right-16" />
      </Carousel>
    </section>
  );
}
