import { DealsCarousel } from "@/sections/MainContent/components/LimitedTimeDeals/DealsCarousel";

export const LimitedTimeDeals = () => {
  return (
    <section className="relative box-border caret-transparent break-words pb-[30px] md:pb-[70px]">
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words">
          <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-3">
              <div className="relative box-border caret-transparent break-words w-full mb-[5px] md:mb-5">
                <h2 className="text-3xl font-medium box-border caret-transparent leading-[45px] break-words text-center">
                  Limited Time Deals
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent gap-x-[15px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] break-words gap-y-[15px] w-full z-[1] p-5">
          <DealsCarousel />
          <div className="box-border caret-transparent block break-words md:hidden">
            <button
              type="button"
              role="presentation"
              aria-label="previous"
              className="absolute bg-transparent caret-transparent block opacity-100 break-words pointer-events-auto text-center align-middle bg-[position:0px_0px] p-0 -left-2 top-[45%] md:hidden md:opacity-50 md:pointer-events-none md:top-[35%]"
            >
              <span
                aria-label="Previous"
                className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words pointer-events-auto w-[35px] border border-neutral-600 rounded-[50%] border-solid md:pointer-events-none"
              >
                ‹
              </span>
            </button>
            <button
              type="button"
              role="presentation"
              aria-label="next"
              className="absolute bg-transparent caret-transparent block opacity-100 break-words pointer-events-auto text-center align-middle bg-[position:0px_0px] p-0 -right-2 top-[45%] md:hidden md:opacity-50 md:pointer-events-none md:top-[35%]"
            >
              <span
                aria-label="Next"
                className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words pointer-events-auto w-[35px] border border-neutral-600 rounded-[50%] border-solid md:pointer-events-none"
              >
                ›
              </span>
            </button>
          </div>
          <div className="relative box-border caret-transparent hidden break-words text-center m-auto"></div>
        </div>
      </div>
    </section>
  );
};
