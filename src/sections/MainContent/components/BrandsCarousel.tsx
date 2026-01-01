import { BrandsSlider } from "@/sections/MainContent/components/BrandsCarousel/BrandsSlider";

export const BrandsCarousel = () => {
  return (
    <section className="box-border caret-transparent break-words pb-[70px]">
      <div className="relative box-border caret-transparent break-words text-center mb-[15px] md:mb-[35px]">
        <h2 className="text-3xl font-medium box-border caret-transparent leading-[45px] break-words">
          Brands on Nippon Furniture
        </h2>
      </div>
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words w-full z-[1]">
          <BrandsSlider />
          <div className="box-border caret-transparent hidden break-words">
            <button
              type="button"
              role="presentation"
              aria-label="previous"
              className="absolute bg-transparent caret-transparent hidden opacity-50 break-words pointer-events-none text-center align-middle bg-[position:0px_0px] p-0 -left-2 top-[35%]"
            >
              <span
                aria-label="Previous"
                className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 rounded-[50%] border-solid"
              >
                ‹
              </span>
            </button>
            <button
              type="button"
              role="presentation"
              aria-label="next"
              className="absolute bg-transparent caret-transparent hidden opacity-50 break-words pointer-events-none text-center align-middle bg-[position:0px_0px] p-0 -right-2 top-[35%]"
            >
              <span
                aria-label="Next"
                className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 rounded-[50%] border-solid"
              >
                ›
              </span>
            </button>
          </div>
          <div className="relative box-border caret-transparent table break-words text-center m-auto md:hidden">
            <button
              type="button"
              aria-label="dot"
              className="relative bg-transparent caret-transparent block float-left h-4 break-words align-middle w-4 border border-orange-300 bg-[position:0px_0px] m-[3px] p-0 rounded-[50%] border-solid"
            >
              <span className="absolute bg-orange-300 box-border caret-transparent content-[''] block h-1.5 break-words w-1.5 rounded-[50%] left-1 right-0 top-1 bottom-0"></span>
            </button>
            <button
              type="button"
              aria-label="dot"
              className="relative bg-slate-300 caret-transparent block float-left h-2.5 break-words align-middle w-2.5 bg-[position:0px_0px] m-1.5 p-0 rounded-[50%] border-solid border-transparent"
            >
              <span className="box-border caret-transparent break-words"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
