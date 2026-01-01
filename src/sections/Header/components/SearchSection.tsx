export const SearchSection = () => {
  return (
    <ul className="absolute box-border caret-transparent flex list-none min-h-0 min-w-0 pl-0 left-[55px] md:relative md:min-h-[auto] md:min-w-[auto] md:left-auto md:flex-1 md:max-w-[500px] md:mx-8">
      <li className="box-border caret-transparent w-full">
        <a className="relative text-blue-600 box-border caret-transparent block w-[18px] top-0 md:static md:hidden md:top-auto">
          <span className="box-border caret-transparent leading-[14px] font-icomoon before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[15px] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon before:md:text-xl before:md:leading-5"></span>
        </a>
        <section className="fixed box-border caret-transparent flex order-1 w-0 z-[1024] right-0 top-[78px] md:relative md:inline-block md:w-full md:z-auto md:right-auto md:top-auto">
          <div className="relative items-center box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0">
            <section className="relative box-border caret-transparent max-w-none w-full">
              <input
                type="text"
                name="q"
                placeholder="Enter Keyword or Item"
                role="combobox"
                className="text-white text-xs bg-clip-padding bg-slate-950 box-border caret-transparent block h-[35px] leading-[18px] w-full border border-neutral-700 px-[30px] py-0 rounded-none border-solid md:text-sm md:h-[46px] md:leading-[21px] md:pl-2.5 md:pr-5 md:py-1.5 md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
              />
              <section className="absolute bg-[url(data:image/gif;base64,R0lGODlhEAALAPQAAP///wAAANra2tDQ0Orq6gYGBgAAAC4uLoKCgmBgYLq6uiIiIkpKSoqKimRkZL6+viYmJgQEBE5OTubm5tjY2PT09Dg4ONzc3PLy8ra2tqCgoMrKyu7u7gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA)] bg-no-repeat box-border caret-transparent hidden h-[11px] w-4 z-[1000] bg-center mr-[5px] my-auto right-10 inset-y-0"></section>
              <button
                title="Clear Field"
                className="absolute text-zinc-800 text-base font-bold bg-transparent bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWwxMCAxMG0wLTEwTDEgMTEiIHN0cm9rZT0iI0IyQjJCMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==)] bg-no-repeat bg-size-[13px] caret-transparent hidden leading-6 text-center align-middle bg-center ml-auto mr-[5px] my-auto p-4 right-0 inset-y-0"
              ></button>
              <button
                title="Search"
                className="absolute text-zinc-800 font-bold bg-transparent bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Ni45NjYgNTYuOTY2Ij48cGF0aCBkPSJNNTUuMTQ2IDUxLjg4N0w0MS41ODggMzcuNzg2QTIyLjkyNiAyMi45MjYgMCAwIDAgNDYuOTg0IDIzYzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMgMTAuMzE4LTIzIDIzIDEwLjMxOCAyMyAyMyAyM2M0Ljc2MSAwIDkuMjk4LTEuNDM2IDEzLjE3Ny00LjE2MmwxMy42NjEgMTQuMjA4Yy41NzEuNTkzIDEuMzM5LjkyIDIuMTYyLjkyLjc3OSAwIDEuNTE4LS4yOTcgMi4wNzktLjgzN2EzLjAwNCAzLjAwNCAwIDAgMCAuMDgzLTQuMjQyek0yMy45ODQgNmM5LjM3NCAwIDE3IDcuNjI2IDE3IDE3cy03LjYyNiAxNy0xNyAxNy0xNy03LjYyNi0xNy0xNyA3LjYyNi0xNyAxNy0xN3oiIGZpbGw9IiNhOWE5YTkiLz48L3N2Zz4=)] bg-no-repeat bg-size-[13px] caret-transparent block h-5 opacity-70 pointer-events-none text-center align-middle w-5 bg-center m-auto p-0 left-[5px] right-auto inset-y-0 md:left-auto md:right-[5px]"
              ></button>
            </section>
            <section className="absolute bg-white shadow-[rgba(84,95,125,0.12)_0px_2px_4px_0px,rgba(155,159,174,0.1)_0px_5px_8px_0px] box-border caret-transparent hidden flex-col flex-wrap max-h-[900px] min-w-0 overflow-x-hidden overflow-y-auto w-full z-[99] my-[5px] rounded-[3px] left-auto top-[85%] md:min-w-[550px] md:my-[15px] md:left-0"></section>
          </div>
        </section>
      </li>
    </ul>
  );
};
