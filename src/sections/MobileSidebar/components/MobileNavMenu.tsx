export const MobileNavMenu = () => {
  return (
    <nav className="static font-normal bg-white box-border caret-transparent flex justify-start max-w-full w-full z-[5] m-auto top-auto md:relative md:font-bold md:bg-slate-900 md:justify-center md:top-0">
      <ul
        role="menu"
        className="static font-normal box-border caret-transparent list-none min-h-0 min-w-0 w-full pl-0 md:relative md:font-bold md:min-h-[auto] md:min-w-[auto] md:w-auto md:flex md:flex-row md:flex-nowrap md:items-center md:justify-center"
      >
        {/* International Collection */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              International Collection
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap grid-cols-[1fr] leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-[normal] md:flex-col md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-1 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-6 md:py-4 md:rounded-md md:group-hover:flex md:top-full"
          >
            <li className="static text-[25.6px] font-normal border-b-stone-300 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex leading-[33.28px] w-full py-2.5 border-b md:relative md:text-sm md:font-bold md:border-b-zinc-800 md:list-item md:leading-[21px] md:w-max md:py-0 md:border-b-0">
              <a
                href="#"
                role="menuitem"
                className="text-black text-base font-medium items-center box-border caret-transparent flex justify-center leading-[20.8px] text-center uppercase pl-2.5 py-0 md:text-zinc-700 md:text-sm md:font-medium md:[align-items:normal] md:block md:justify-normal md:leading-[21px] md:normal-case md:pl-0 md:py-2 hover:md:text-amber-700 hover:md:bg-stone-200 md:px-3 md:rounded transition-all"
              >
                <span className="text-black text-base font-medium box-border caret-transparent block leading-[20.8px] uppercase md:text-zinc-600 md:text-sm md:font-black md:inline md:leading-[21px] md:normal-case">
                  Italian
                </span>
              </a>
            </li>
            <li className="static text-[25.6px] font-normal border-b-stone-300 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex leading-[33.28px] w-full py-2.5 border-b md:relative md:text-sm md:font-bold md:border-b-zinc-800 md:list-item md:leading-[21px] md:w-max md:py-0 md:border-b-0">
              <a
                href="#"
                role="menuitem"
                className="text-black text-base font-medium items-center box-border caret-transparent flex justify-center leading-[20.8px] text-center uppercase pl-2.5 py-0 md:text-zinc-600 md:text-sm md:font-black md:[align-items:normal] md:block md:justify-normal md:leading-[21px] md:normal-case md:pl-0 md:py-2 hover:md:text-amber-600 transition-colors"
              >
                <span className="text-black text-base font-medium box-border caret-transparent block leading-[20.8px] uppercase md:text-zinc-600 md:text-sm md:font-black md:inline md:leading-[21px] md:normal-case">
                  American
                </span>
              </a>
            </li>
            <li className="static text-[25.6px] font-normal border-b-stone-300 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent flex leading-[33.28px] w-full py-2.5 border-b md:relative md:text-sm md:font-bold md:border-b-zinc-800 md:list-item md:leading-[21px] md:w-max md:py-0 md:border-b-0">
              <a
                href="#"
                role="menuitem"
                className="text-black text-base font-medium items-center box-border caret-transparent flex justify-center leading-[20.8px] text-center uppercase pl-2.5 py-0 md:text-zinc-600 md:text-sm md:font-black md:[align-items:normal] md:block md:justify-normal md:leading-[21px] md:normal-case md:pl-0 md:py-2 hover:md:text-amber-600 transition-colors"
              >
                <span className="text-black text-base font-medium box-border caret-transparent block leading-[20.8px] uppercase md:text-zinc-600 md:text-sm md:font-black md:inline md:leading-[21px] md:normal-case">
                  Malaysian
                </span>
              </a>
            </li>
            <li className="static text-[25.6px] font-normal box-border caret-transparent flex leading-[33.28px] w-full pt-2.5 md:relative md:text-sm md:font-bold md:list-item md:leading-[21px] md:w-max md:pt-0">
              <a
                href="#"
                role="menuitem"
                className="text-black text-base font-medium items-center box-border caret-transparent flex justify-center leading-[20.8px] text-center uppercase pl-2.5 py-0 md:text-zinc-600 md:text-sm md:font-black md:[align-items:normal] md:block md:justify-normal md:leading-[21px] md:normal-case md:pl-0 md:py-2 hover:md:text-amber-600 transition-colors"
              >
                <span className="text-black text-base font-medium box-border caret-transparent block leading-[20.8px] uppercase md:text-zinc-600 md:text-sm md:font-black md:inline md:leading-[21px] md:normal-case">
                  Wood World
                </span>
              </a>
            </li>
          </ul>
        </li>

        {/* Living */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              Living
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-8 md:flex-nowrap md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-2 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-8 md:py-6 md:rounded-md md:group-hover:grid md:grid-cols-3 md:top-full"
          >
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-800 md:text-xs md:font-bold md:mb-3 md:tracking-wide">
                SOFAS
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-700 md:text-sm md:normal-case hover:md:text-amber-700 hover:md:bg-stone-200 block py-1.5 md:px-3 md:rounded transition-all"
                  >
                    Fabric Sofas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Leather Sofas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Wooden Sofas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Sofa Sets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Sofa Cum Beds
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                SEATING
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Recliners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Accent Chairs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Lounge Chairs
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                TABLES
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Center Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Side Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Console Tables
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </li>

        {/* Bedroom */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              Bedroom
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-8 md:flex-nowrap md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-2 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-8 md:py-6 md:rounded-md md:group-hover:grid md:grid-cols-4 md:top-full"
          >
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                BEDS
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Queen Bed Without Storage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    King Bed Without Storage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Queen Bed With Storage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    King Bed With Storage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Bedroom Sets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Bunk Bed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Kids Bed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Single Bed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Wooden Bed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Engineered Wood Bed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Folding Beds
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                WARDROBES
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Two Door Wardrobes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Three Door Wardrobes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Four Door Wardrobes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Five Door Wardrobes
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                TABLES
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Dressing Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Side Tables
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                DECOR
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Bedsheets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Carpets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Bath Mats
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Ottomans
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Multipurpose Racks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Side Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Table Lamps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Buddha Idols
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Spiritual Idols
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Wall Paintings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Flower Vases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Door Curtains
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </li>

        {/* Mattresses */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              Mattresses
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-8 md:flex-nowrap md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-2 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-8 md:py-6 md:rounded-md md:group-hover:grid md:grid-cols-2 md:top-full"
          >
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                BY SIZE
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Single Mattress
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Queen Mattress
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    King Mattress
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                BY TYPE
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Memory Foam
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Orthopedic
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Spring Mattress
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </li>

        {/* Dining */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              Dining
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-8 md:flex-nowrap md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-2 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-8 md:py-6 md:rounded-md md:group-hover:grid md:grid-cols-2 md:top-full"
          >
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                TABLES & SETS
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Dining Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Dining Sets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    4 Seater Dining
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    6 Seater Dining
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    8 Seater Dining
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                CHAIRS & STORAGE
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Dining Chairs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Bar Stools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Kitchen Cabinets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Sideboards
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </li>

        {/* Study & Office */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              Study &amp; Office
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-8 md:flex-nowrap md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-2 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-8 md:py-6 md:rounded-md md:group-hover:grid md:grid-cols-2 md:top-full"
          >
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                TABLES
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Study Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Computer Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Office Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Writing Desks
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                CHAIRS & STORAGE
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Office Chairs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Study Chairs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Bookshelves
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Filing Cabinets
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </li>

        {/* Outdoor */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              Outdoor
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-[normal] md:flex-col md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-1 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-6 md:py-4 md:rounded-md md:group-hover:flex md:top-full"
          >
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Outdoor Furniture
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Patio Sets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Outdoor Tables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Swings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Garden Chairs
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </li>

        {/* Decor */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              Decor
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-8 md:flex-nowrap md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-2 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-8 md:py-6 md:rounded-md md:group-hover:grid md:grid-cols-3 md:top-full"
          >
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                WALL DECOR
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Wall Paintings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Wall Clocks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Mirrors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Wall Shelves
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                TABLE DECOR
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Vases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Figurines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Candle Holders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Table Lamps
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-black text-base font-bold uppercase mb-3 md:text-amber-700 md:text-sm md:mb-4">
                SPIRITUAL
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Buddha Idols
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Ganesha Idols
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Spiritual Idols
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Artificial Flowers
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </li>

        {/* Furnishings */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0 group md:static">
          <a
            href="#"
            role="menuitem"
            className="relative text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] group-hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3 group-hover:md:text-amber-500">
              Furnishings
            </span>
          </a>
          <ul
            role="menu"
            className="relative text-[25.6px] font-normal bg-neutral-100 border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-100 shadow-none box-border caret-transparent gap-x-2.5 hidden flex-wrap leading-[33.28px] overflow-x-hidden overflow-y-auto gap-y-2.5 w-full z-auto px-[15px] py-5 rounded-none border-b border-t left-auto md:absolute md:text-sm md:font-normal md:bg-stone-100 md:border-none md:shadow-[0_4px_12px_rgba(0,0,0,0.15)] md:gap-x-8 md:flex-nowrap md:leading-[21px] md:overflow-x-visible md:overflow-y-auto md:max-h-[calc(100vh-160px)] md:gap-y-2 md:w-auto md:left-4 md:right-4 md:z-[100] md:px-8 md:py-6 md:rounded-md md:group-hover:grid md:grid-cols-2 md:top-full"
          >
            <div className="md:col-span-1">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Cushions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Cushion Covers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Curtains
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Bedsheets
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Carpets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Rugs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Bath Mats
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-base font-medium md:text-zinc-600 md:text-sm md:normal-case hover:md:text-amber-600 block py-1 transition-colors"
                  >
                    Door Mats
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </li>

        {/* New Arrivals */}
        <li className="text-[25.6px] font-normal border-b-zinc-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0">
          <a
            href="#"
            role="menuitem"
            className="static text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:relative md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3">
              New Arrivals
            </span>
          </a>
        </li>

        {/* House of Interiors */}
        <li className="text-[25.6px] font-normal border-b-neutral-300 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent block leading-[38.4px] border-b md:text-sm md:font-bold md:border-b-zinc-800 md:inline-block md:leading-[21px] md:border-b-0">
          <a
            href="#"
            role="menuitem"
            className="static text-black text-base items-center box-border caret-transparent block justify-between leading-6 break-words uppercase p-2.5 md:relative md:text-neutral-100 md:text-xs md:[align-items:normal] md:inline-block md:justify-normal md:leading-3 md:px-[17.92px] md:py-[15px] hover:text-amber-500 whitespace-nowrap transition-colors"
          >
            <span className="text-black text-base box-border caret-transparent leading-6 break-words md:text-neutral-100 md:text-xs md:leading-3">
              House of Interiors
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
