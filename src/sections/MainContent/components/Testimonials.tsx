import { TestimonialsCarousel } from "@/sections/MainContent/components/Testimonials/TestimonialsCarousel";

export const Testimonials = () => {
  return (
    <section className="relative bg-zinc-100 box-border caret-transparent break-words py-[30px] md:py-[70px]">
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words">
          <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full break-words w-[91.6667%] px-3 md:w-full">
              <div className="relative box-border caret-transparent break-words w-full mb-[5px] md:mb-5">
                <h2 className="text-3xl font-medium box-border caret-transparent leading-[45px] break-words text-center">
                  What Customers Say About Nippon Furniture
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent break-words text-center">
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
};
