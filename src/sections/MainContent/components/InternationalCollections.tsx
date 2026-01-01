import { CollectionGrid } from "@/sections/MainContent/components/InternationalCollections/CollectionGrid";

export const InternationalCollections = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 box-border caret-transparent break-words mb-[35px] py-[30px] md:py-5">
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words">
          <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-3">
              <div className="relative box-border caret-transparent break-words text-center w-full mb-[5px] md:mb-5">
                <h2 className="text-white text-xl font-medium box-border caret-transparent leading-[30px] break-words md:text-3xl md:leading-[45px]">
                  Go Around The World With Nippon Furniture
                </h2>
              </div>
            </div>
          </div>
        </div>
        <CollectionGrid />
      </div>
    </section>
  );
};
