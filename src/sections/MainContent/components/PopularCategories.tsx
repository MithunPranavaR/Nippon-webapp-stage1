import { CategoryGrid } from "@/sections/MainContent/components/PopularCategories/CategoryGrid";

export const PopularCategories = () => {
  return (
    <section className="relative box-border caret-transparent break-words py-[30px] md:py-[70px]">
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words text-center mb-2.5">
          <h2 className="text-3xl font-medium box-border caret-transparent leading-[45px] break-words">
            Popular Categories
          </h2>
        </div>
        <div className="box-border caret-transparent break-words overflow-auto mb-2.5 md:overflow-visible md:mb-0">
          <CategoryGrid />
        </div>
        <div className="box-border caret-transparent block break-words md:hidden">
          <div className="box-border caret-transparent flex flex-wrap justify-center break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] break-words w-[83.3333%] px-3 md:min-h-0 md:min-w-0 md:w-3/12">
              <a
                href="#offcanvasNavbarMenu"
                className="text-white text-base bg-slate-950 box-border caret-transparent block leading-6 break-words text-center align-middle w-full border border-slate-950 px-3 py-1.5 rounded-md border-solid"
              >
                Explore Complete Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
