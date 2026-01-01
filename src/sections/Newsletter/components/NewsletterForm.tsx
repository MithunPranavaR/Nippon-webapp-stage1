export const NewsletterForm = () => {
  return (
    <div className="box-border caret-transparent mr-0 md:mr-[30px]">
      <form className="relative box-border caret-transparent w-full mb-2.5 md:mb-0">
        <div className="relative box-border caret-transparent w-full">
          <input
            name="email"
            type="email"
            placeholder="Please enter your email"
            className="text-[13px] bg-clip-padding box-border caret-transparent block h-[50px] leading-[19.5px] w-full border border-gray-300 pl-5 pr-2.5 py-1.5 rounded-[30px] border-solid md:text-xs md:leading-[18px] md:pr-5"
          />
          <button
            title="Subscribe"
            type="submit"
            aria-label="Subscribe"
            className="absolute text-white text-xs font-semibold bg-slate-950 caret-transparent block h-9 leading-[18px] text-center align-middle border border-zinc-800 px-[15px] py-[5px] rounded-[30px] border-solid right-1 top-1 font-open_sans md:text-[13px] md:h-10 md:leading-[19.5px] md:px-[22px]"
          >
            <span className="text-xs box-border caret-transparent leading-[18px] md:text-[13px] md:leading-[19.5px]">
              Subscribe
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
