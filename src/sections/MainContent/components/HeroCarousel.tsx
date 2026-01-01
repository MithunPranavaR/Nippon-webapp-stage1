import { CarouselSlider } from "@/sections/MainContent/components/HeroCarousel/CarouselSlider";

export const HeroCarousel = () => {
  return (
    <section className="relative box-border caret-transparent min-h-[262px] break-words w-full overflow-hidden md:min-h-0 mt-[140px] md:mt-[110px]">
      <div className="box-border caret-transparent break-words w-full mx-auto">
        <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full">
            <CarouselSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
