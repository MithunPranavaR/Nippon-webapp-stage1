export const Logo = () => {
  return (
    <a
      href="#"
      title="Nippon Furniture"
      aria-label="Nippon Furniture logo"
      className="relative text-black text-[35px] font-light box-border caret-transparent flex items-center gap-3 leading-[30px] capitalize text-nowrap m-auto px-[5px] py-[7px] md:static md:m-0 md:pl-0 md:pr-2.5 md:py-5"
    >
      <img
        src="https://c.animaapp.com/mjn88l0qJRHj10/img/undo-image-0"
        title="Nippon Furniture"
        alt="Nippon Furniture Logo"
        className="box-border caret-transparent max-w-full h-[40px] w-[40px] md:h-[50px] md:w-[50px]"
      />
      <div className="hidden md:flex flex-col items-start leading-tight">
        <span
          className="text-white text-xl font-bold tracking-wide whitespace-nowrap"
          style={{
            fontFamily: "Georgia, serif",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          NIPPON FURNITURE
        </span>
        <span
          className="text-amber-400 text-xs font-medium tracking-wide -mt-0.5 italic"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Furniture Bonded With Love
        </span>
      </div>
    </a>
  );
};
