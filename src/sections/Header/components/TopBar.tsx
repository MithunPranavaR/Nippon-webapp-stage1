export const TopBar = () => {
  return (
    <section className="bg-slate-900 border-b-slate-900 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent text-center py-1 border-b md:text-start md:py-1.5">
      <div className="box-border caret-transparent text-center w-full mx-auto px-[15px] md:text-start md:px-[70px]">
        <div className="box-border caret-transparent flex flex-wrap text-center -mx-3 md:text-start">
          <div className="box-border caret-transparent shrink-0 max-w-full text-center w-full px-3 md:text-start md:w-[16.6667%]">
            <p className="text-white text-[9px] box-border caret-transparent leading-4 text-center text-nowrap mb-[5px] md:text-xs md:text-start">
              <span className="text-amber-500 text-[9px] box-border caret-transparent leading-[9px] text-center text-nowrap font-icomoon md:text-xs md:leading-3 md:text-start before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[9px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[9px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-icomoon before:md:text-xs before:md:leading-3 before:md:text-start"></span>
              Deliver to -{" "}
              <a
                href="#"
                className="text-blue-600 text-[9px] box-border caret-transparent text-center text-nowrap pl-[5px] md:text-xs md:text-start"
              >
                <span className="text-amber-500 text-[9px] box-border caret-transparent text-center text-nowrap md:text-xs md:text-start">
                  560001
                </span>
              </a>
              <span className="text-amber-500 text-[9px] box-border caret-transparent leading-[9px] text-center text-nowrap font-icomoon md:text-xs md:leading-3 md:text-start before:accent-auto before:box-border before:caret-transparent before:text-amber-500 before:text-[9px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[9px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-icomoon before:md:text-xs before:md:leading-3 before:md:text-start"></span>
            </p>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full text-center w-full px-3 md:text-start md:w-[83.3333%]">
            <ul className="box-border caret-transparent flex justify-center list-none text-center mb-1.5 pl-0 md:justify-end md:text-start">
              <li className="box-border caret-transparent text-center md:text-start">
                <a
                  href="#"
                  className="text-white text-[10px] border-r-neutral-700 box-border caret-transparent block leading-4 text-center px-[3px] border-l-white border-y-white border-r md:text-xs md:text-start md:px-[15px] hover:text-amber-500 transition-colors"
                >
                  Track Order
                </a>
              </li>
              <li className="box-border caret-transparent text-center md:text-start">
                <a
                  href="#"
                  className="text-white text-[10px] border-r-neutral-700 box-border caret-transparent block leading-4 text-center px-[3px] border-l-white border-y-white border-r md:text-xs md:text-start md:px-[15px] hover:text-amber-500 transition-colors"
                >
                  Nippon Furniture Stores
                </a>
              </li>
              <li className="box-border caret-transparent text-center md:text-start">
                <a
                  href="#"
                  className="text-white text-[10px] border-r-neutral-700 box-border caret-transparent block leading-4 text-center px-[3px] border-l-white border-y-white border-r md:text-xs md:text-start md:px-[15px] hover:text-amber-500 transition-colors"
                >
                  Franchise Enquiry
                </a>
              </li>
              <li className="box-border caret-transparent text-center md:text-start">
                <a
                  href="#"
                  className="text-white text-[10px] border-r-neutral-700 box-border caret-transparent block leading-4 text-center px-[3px] border-l-white border-y-white border-r md:text-xs md:text-start md:px-[15px] hover:text-amber-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li className="box-border caret-transparent text-center md:text-start">
                <a
                  href="#"
                  className="text-white text-[10px] border-r-neutral-700 box-border caret-transparent block leading-4 text-center px-[3px] border-l-white border-y-white border-r md:text-xs md:text-start md:px-[15px] hover:text-amber-500 transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li className="box-border caret-transparent text-center md:text-start">
                <a
                  href="#"
                  className="text-white text-[10px] box-border caret-transparent block leading-4 text-center pl-[3px] md:text-xs md:text-start md:pl-[15px] hover:text-amber-500 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
