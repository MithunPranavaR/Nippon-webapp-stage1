export const NavbarActions = () => {
  return (
    <ul className="relative box-border caret-transparent flex list-none ml-auto pl-0 right-0 top-1.5 md:right-auto md:top-auto">
      <li className="box-border caret-transparent">
        <a
          href="#"
          className="relative text-black/70 text-[10px] box-border caret-transparent flex flex-col items-center justify-center leading-[15px] text-center uppercase bg-[position:0px_0px] pr-1 py-1 rounded-[50%] md:text-[13px] md:leading-[19.5px] md:pr-[15px] md:py-[3px] md:rounded-none hover:text-amber-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mb-1 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-neutral-100 text-[9px] box-border caret-transparent inline-block leading-[13.5px] text-ellipsis text-nowrap w-[46px] overflow-hidden pt-[3px] md:text-[13px] md:inline md:leading-[19.5px] md:text-clip md:text-wrap md:w-auto md:overflow-visible md:pt-0">
            Login
          </span>
        </a>
      </li>
      <li className="box-border caret-transparent">
        <a
          href="#"
          className="relative text-black/70 text-[10px] box-border caret-transparent flex flex-col items-center justify-center leading-[15px] text-center uppercase bg-[position:0px_0px] p-1 md:text-[13px] md:leading-[19.5px] md:px-[15px] md:py-[3px] hover:text-amber-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mb-1 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="text-neutral-100 text-[9px] box-border caret-transparent leading-[13.5px] md:text-[13px] md:leading-[19.5px]">
            Wishlist
          </span>
        </a>
      </li>
      <li className="box-border caret-transparent">
        <div className="relative box-border caret-transparent float-right before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21px] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-roboto after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-none after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
          <a
            href="#"
            className="relative text-neutral-100 text-[10px] box-border caret-transparent flex flex-col items-center justify-center leading-[15px] text-center uppercase text-nowrap bg-[position:0px_0px] p-1 md:text-[13px] md:inline-block md:leading-[19.5px] md:px-[15px] md:py-[3px] hover:text-amber-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mb-1 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="text-[9px] box-border caret-transparent block leading-[9px] normal-case text-nowrap font-icomoon md:text-[13px] md:leading-[13px]"></span>
            <span className="text-neutral-100 text-[9px] box-border caret-transparent md:text-[13px]">
              Cart
            </span>
            <span className="absolute text-white text-[11px] font-semibold bg-amber-600 box-border caret-transparent hidden h-5 leading-[22px] min-w-5 overflow-hidden rounded-[20px] right-0.5 -top-0.5">
              <span className="text-neutral-100 text-[9px] box-border caret-transparent md:text-[11px]">
                0
              </span>
            </span>
          </a>
          <div role="dialog" className="box-border caret-transparent hidden">
            <div className="absolute bg-white shadow-[rgba(0,0,0,0.15)_0px_3px_3px_0px] box-border caret-transparent min-w-full right-[-15px] w-80 z-[101] mt-1 pt-[15px] px-5 top-full md:w-[390px] md:px-0 before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[21px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-0 before:z-[99] before:border-t-transparent before:border-b-white before:border-x-transparent before:border-separate before:border-[6px] before:border-solid before:right-[26px] before:-top-3 before:font-roboto after:accent-auto after:box-border after:caret-transparent after:text-zinc-800 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-[21px] after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-zinc-800 after:border-b-[3px] after:border-separate after:font-roboto">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent hidden">
                  <strong className="text-base box-border caret-transparent leading-[17.6px] mt-6 mb-4">
                    <span className="box-border caret-transparent">
                      My Cart
                    </span>
                    <span
                      title="Items in Cart"
                      className="box-border caret-transparent"
                    >
                      0
                    </span>
                  </strong>
                </div>
                <div className="box-border caret-transparent">
                  <button
                    type="button"
                    title="Close"
                    className="absolute text-zinc-800 bg-transparent caret-transparent block h-10 text-center align-middle w-10 bg-[position:0px_0px] p-0 right-0 top-0 before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:inline-block before:text-[32px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-8 before:list-outside before:list-none before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:align-top before:visible before:overflow-hidden before:border-separate before:font-icons_blank_theme"
                  ></button>
                  <strong className="font-bold box-border caret-transparent block text-center pt-[30px] pb-5">
                    You have no items in your shopping cart.
                  </strong>
                  <div className="box-border caret-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
