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
          {[0, 1, 2, 3, 4].map((x: number) => {
            return (
              <CarouselItem key={x}>
                <Quote index={x} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="relataive left-2" />
        <CarouselNext className="relataive right-2" />
      </Carousel>
    </section>
  );
}
