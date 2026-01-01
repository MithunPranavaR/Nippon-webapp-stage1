export const MobileSidebarHeader = () => {
  return (
    <div className="items-center bg-neutral-800 box-border caret-transparent flex justify-center py-4 md:hidden">
      <div className="absolute box-border caret-transparent left-5 md:static md:left-auto">
        <button
          type="button"
          className="relative text-white font-bold bg-slate-950 caret-transparent block leading-[14px] text-center align-middle pt-2.5 pb-[5px] px-0 left-0 top-0 md:static md:text-zinc-800 md:bg-transparent md:hidden md:py-0 md:left-auto md:top-auto"
        >
          <span className="text-white font-normal box-border caret-transparent font-icomoon md:text-zinc-800 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[21px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon before:md:text-sm before:md:leading-[14px]"></span>
        </button>
      </div>
      <h5 className="text-xl font-medium box-border caret-transparent leading-[30px]">
        <a href="#" className="text-blue-600 box-border caret-transparent">
          <img
            src="../../../../../media/logo/default/logo.png"
            className="aspect-[auto_130_/_130] box-border caret-transparent max-w-full w-[130px]"
          />
        </a>
      </h5>
    </div>
  );
};
