export const CarouselIndicators = () => {
  return (
    <div className="absolute items-center self-center box-border caret-transparent flex justify-center break-words text-center w-full m-auto bottom-[3%] inset-x-[3%]">
      <button
        type="button"
        aria-label="dot"
        className="relative bg-white caret-transparent block float-left h-2.5 break-words align-middle w-2.5 bg-[position:0px_0px] m-1.5 p-0 rounded-[50%] border-solid border-transparent"
      >
        <span className="box-border caret-transparent break-words"></span>
      </button>
      <button
        type="button"
        aria-label="dot"
        className="relative bg-white caret-transparent block float-left h-2.5 break-words align-middle w-2.5 bg-[position:0px_0px] m-1.5 p-0 rounded-[50%] border-solid border-transparent"
      >
        <span className="box-border caret-transparent break-words"></span>
      </button>
      <button
        type="button"
        aria-label="dot"
        className="relative bg-white caret-transparent block float-left h-2.5 break-words align-middle w-2.5 bg-[position:0px_0px] m-1.5 p-0 rounded-[50%] border-solid border-transparent"
      >
        <span className="box-border caret-transparent break-words"></span>
      </button>
      <button
        type="button"
        aria-label="dot"
        className="relative bg-white caret-transparent block float-left h-2.5 break-words align-middle w-2.5 bg-[position:0px_0px] m-1.5 p-0 rounded-[50%] border-2 border-solid border-transparent md:bg-transparent md:h-4 md:w-4 md:border md:m-[3px] md:border-white"
      >
        <span className="static bg-transparent box-border caret-transparent content-[normal] inline h-auto break-words w-auto rounded-none inset-auto md:absolute md:bg-white md:content-[''] md:block md:h-1.5 md:w-1.5 md:rounded-[50%] md:left-1 md:right-0 md:top-1 md:bottom-0"></span>
      </button>
      <button
        type="button"
        aria-label="dot"
        className="relative bg-white caret-transparent block float-left h-2.5 break-words align-middle w-2.5 bg-[position:0px_0px] m-1.5 p-0 rounded-[50%] border-solid border-transparent"
      >
        <span className="box-border caret-transparent break-words"></span>
      </button>
      <button
        type="button"
        aria-label="dot"
        className="relative bg-transparent caret-transparent block float-left h-4 break-words align-middle w-4 border bg-[position:0px_0px] m-[3px] p-0 rounded-[50%] border-solid border-white md:bg-white md:h-2.5 md:w-2.5 md:m-1.5 md:border-2 md:border-transparent"
      >
        <span className="absolute bg-white box-border caret-transparent content-[''] block h-1.5 break-words w-1.5 rounded-[50%] left-1 right-0 top-1 bottom-0 md:static md:bg-transparent md:content-[normal] md:inline md:h-auto md:w-auto md:rounded-none md:inset-auto"></span>
      </button>
    </div>
  );
};
