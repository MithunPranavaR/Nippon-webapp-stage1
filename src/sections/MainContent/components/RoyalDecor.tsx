import { DecorGrid } from "@/sections/MainContent/components/RoyalDecor/DecorGrid";

export const RoyalDecor = () => {
  return (
    <section className="relative box-border caret-transparent break-words pb-[30px] md:pb-[70px]">
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words">
          <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-3">
              <div className="relative box-border caret-transparent break-words w-full mb-[5px] md:mb-5">
                <h2 className="text-3xl font-medium box-border caret-transparent leading-[45px] break-words text-center">
                  Royal Decor
                </h2>
              </div>
            </div>
          </div>
        </div>
        <DecorGrid />
      </div>
    </section>
  );
};
