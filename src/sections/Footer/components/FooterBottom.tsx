export const FooterBottom = () => {
  return (
    <section className="relative bg-slate-900 border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-amber-700 box-border caret-transparent mt-0 py-2.5 border-t md:mt-[30px] md:pt-5">
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="box-border caret-transparent flex flex-wrap break-words">
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-3 md:w-9/12">
            <p className="text-white text-[11px] box-border caret-transparent inline-block leading-5 break-words mb-0 md:text-xs md:mb-2.5">
              © 2025,{" "}
              <b className="text-[11px] font-medium box-border caret-transparent break-words md:text-xs">
                Nippon Furniture Inc. Pvt. Ltd.
              </b>
              <span className="text-[11px] box-border caret-transparent inline-block break-words mx-2.5 md:text-xs md:mx-5">
                |
              </span>
              All rights reserved.{" "}
              <span className="text-[11px] box-border caret-transparent inline-block break-words mx-2.5 md:text-xs md:mx-5">
                |
              </span>
              <a
                href="#"
                className="text-[11px] box-border caret-transparent break-words md:text-xs"
              >
                Privacy Policy
              </a>
              <span className="text-[11px] box-border caret-transparent inline-block break-words mx-2.5 md:text-xs md:mx-5">
                |
              </span>
              <a
                href="#"
                className="text-[11px] box-border caret-transparent break-words md:text-xs"
              >
                Terms &amp; Conditions
              </a>
              <span className="text-[11px] box-border caret-transparent inline-block break-words mx-2.5 md:text-xs md:mx-5">
                |
              </span>
              <a
                href="#"
                className="text-[11px] box-border caret-transparent break-words md:text-xs"
              >
                Policies
              </a>
              <span className="text-[11px] box-border caret-transparent inline-block break-words mx-2.5 md:text-xs md:mx-5">
                |
              </span>
            </p>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full break-words text-start w-full px-3 md:text-right md:w-3/12"></div>
        </div>
      </div>
    </section>
  );
};
