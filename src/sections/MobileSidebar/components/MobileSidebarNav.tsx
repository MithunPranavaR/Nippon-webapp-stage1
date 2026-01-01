import { MobileNavMenu } from "@/sections/MobileSidebar/components/MobileNavMenu";

export const MobileSidebarNav = () => {
  return (
    <div
      role="tablist"
      className="relative box-border caret-transparent z-[1] md:static md:z-auto"
    >
      <div
        role="tab"
        className="border-b-zinc-800 border-l-zinc-300 border-r-zinc-300 border-t-zinc-300 box-border caret-transparent hidden float-left h-[71px] text-center w-[33.33%] bg-[position:0px_0px] pt-6 border-l md:border-l-zinc-800 md:border-r-zinc-800 md:border-t-zinc-800 md:float-none md:h-auto md:text-start md:w-auto md:bg-left-top md:pt-0 md:border-l-0"
      >
        <a
          href="#store.menu"
          className="text-blue-600 box-border caret-transparent text-center md:text-start"
        >
          Menu
        </a>
      </div>
      <div
        role="tabpanel"
        className="box-border caret-transparent float-right ml-[-100%] w-full border-zinc-800 border-0 border-none md:float-none md:w-auto md:border md:border-neutral-700 md:ml-0 md:border-solid"
      >
        <MobileNavMenu />
      </div>
      <div
        role="tab"
        className="bg-gray-200 box-border caret-transparent hidden float-left h-[71px] text-center w-[33.33%] border-zinc-300 pt-6 border-b border-l border-solid md:bg-transparent md:float-none md:h-auto md:text-start md:w-auto md:border-zinc-800 md:pt-0 md:border-l-0 md:border-b-0 md:border-none"
      >
        <a
          href="#store.links"
          className="text-blue-600 box-border caret-transparent text-center md:text-start"
        >
          Account
        </a>
      </div>
      <div
        role="tabpanel"
        className="box-border caret-transparent hidden float-right ml-[-100%] w-full border-zinc-800 border-0 border-none md:float-none md:w-auto md:border md:border-neutral-700 md:ml-0 md:border-solid"
      ></div>
    </div>
  );
};
