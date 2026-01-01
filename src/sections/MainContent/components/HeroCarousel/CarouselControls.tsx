export const CarouselControls = () => {
  return (
    <div className="absolute items-center box-border caret-transparent flex break-words w-full top-2/4">
      <button
        type="button"
        role="presentation"
        aria-label="previous"
        className="absolute bg-transparent caret-transparent block break-words text-center align-middle bg-[position:0px_0px] p-0 left-0"
      >
        <span
          aria-label="Previous"
          className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 mx-5 rounded-[50%] border-solid"
        >
          ‹
        </span>
      </button>
      <button
        type="button"
        role="presentation"
        aria-label="next"
        className="absolute bg-transparent caret-transparent block break-words text-center align-middle bg-[position:0px_0px] p-0 right-0"
      >
        <span
          aria-label="Next"
          className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 mx-5 rounded-[50%] border-solid"
        >
          ›
        </span>
      </button>
    </div>
  );
};
