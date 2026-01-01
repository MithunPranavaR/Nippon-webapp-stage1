import { StoresSlider } from "@/sections/MainContent/components/StoresCarousel/StoresSlider";

export const StoresCarousel = () => {
  return (
    <section className="relative box-border caret-transparent break-words py-[30px] md:py-[70px]">
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words">
          <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-3">
              <div className="relative box-border caret-transparent break-words text-center w-full mb-[5px] md:mb-5">
                <h2 className="text-3xl font-medium box-border caret-transparent leading-[45px] break-words">
                  200+ Stores Across India
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex list-none break-words text-center ml-0 md:-ml-2.5">
          <StoresSlider />
          <div className="box-border caret-transparent break-words">
            <button
              type="button"
              role="presentation"
              aria-label="previous"
              className="absolute text-zinc-800 font-bold bg-transparent caret-transparent block break-words align-middle bg-[position:0px_0px] p-0 -left-3 top-[35%]"
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
              className="absolute text-zinc-800 font-bold bg-transparent caret-transparent block break-words align-middle bg-[position:0px_0px] p-0 -right-3 top-[35%]"
            >
              <span
                aria-label="Next"
                className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 rounded-[50%] border-solid"
              >
                ›
              </span>
            </button>
          </div>
          <div className="box-border caret-transparent break-words"></div>
        </div>
        <div className="box-border caret-transparent break-words w-[170px] mt-5 mx-auto md:mt-0">
          <a
            href="#"
            className="text-white text-xs bg-slate-950 box-border caret-transparent block leading-[18px] break-words text-center align-middle w-full border border-slate-950 px-3 py-1.5 rounded-md border-solid md:text-base md:leading-6"
          >
            Explore All Stores
          </a>
        </div>
      </div>
    </section>
  );
};
