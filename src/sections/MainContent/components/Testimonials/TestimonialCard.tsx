export type TestimonialCardProps = {
  videoThumbnailUrl: string;
  testimonialText: string;
  customerName: string;
  customerLocation: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="box-border caret-transparent break-words">
      <div className="relative bg-white shadow-[rgb(219,218,218)_0px_3px_6px_0px] box-border caret-transparent break-words my-2.5 p-2.5 rounded-md">
        <div className="relative box-border caret-transparent inline-block h-[200px] break-words overflow-hidden mb-3 rounded-lg">
          <img
            src={props.videoThumbnailUrl}
            alt="Video Testimonial"
            className="aspect-[auto_292_/_200] border-b-zinc-800 border-l-zinc-800 border-t-zinc-800 box-border caret-transparent float-left h-full max-w-full object-cover break-words w-full rounded-md border-r-white border-r-2"
          />
          <div className="absolute text-white text-[40px] box-border caret-transparent leading-[60px] break-words translate-x-[-50.0%] translate-y-[-50.0%] left-2/4 top-2/4">
            ►
          </div>
        </div>
        <p className="text-stone-500 box-border caret-transparent leading-[22px] max-h-[106px] break-words text-left overflow-auto mb-2.5 pl-0 pr-2.5 md:text-center md:pl-2.5">
          {props.testimonialText}
        </p>
        <div className="border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-neutral-200 box-border caret-transparent block break-words text-left mb-2 pt-[15px] border-t md:inline-block md:text-center">
          <p className="text-stone-500 box-border caret-transparent leading-5 max-h-[106px] break-words text-left overflow-auto mb-2.5 pl-0 pr-2.5 md:text-center md:pl-2.5">
            <i className="text-amber-700 font-black box-border caret-transparent inline-block leading-[14px] break-words text-left font-fontawesome md:text-center before:accent-auto before:box-border before:caret-transparent before:text-amber-700 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:text-center"></i>
            <i className="text-amber-700 font-black box-border caret-transparent inline-block leading-[14px] break-words text-left font-fontawesome md:text-center before:accent-auto before:box-border before:caret-transparent before:text-amber-700 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:text-center"></i>
            <i className="text-amber-700 font-black box-border caret-transparent inline-block leading-[14px] break-words text-left font-fontawesome md:text-center before:accent-auto before:box-border before:caret-transparent before:text-amber-700 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:text-center"></i>
            <i className="text-amber-700 font-black box-border caret-transparent inline-block leading-[14px] break-words text-left font-fontawesome md:text-center before:accent-auto before:box-border before:caret-transparent before:text-amber-700 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:text-center"></i>
            <i className="text-amber-700 font-black box-border caret-transparent inline-block leading-[14px] break-words text-left font-fontawesome md:text-center before:accent-auto before:box-border before:caret-transparent before:text-amber-700 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:text-center"></i>
          </p>
          <h4 className="text-base font-semibold box-border caret-transparent leading-6 break-words text-left mb-2 md:text-center">
            {props.customerName}
          </h4>
          <h4 className="text-base font-semibold box-border caret-transparent leading-6 break-words text-left mb-2 md:text-center">
            {props.customerLocation}
          </h4>
        </div>
      </div>
    </div>
  );
};
