export type FeatureItemProps = {
  imageUrl: string;
  imageAlt: string;
  imageClassName: string;
  text: string;
};

export const FeatureItem = (props: FeatureItemProps) => {
  return (
    <div className="text-white text-[10.5px] font-bold box-border caret-transparent gap-x-2.5 flex flex-col leading-[10.5px] break-words gap-y-2.5 text-center text-nowrap overflow-hidden p-0 rounded-md md:gap-x-[normal] md:gap-y-[normal] md:px-[6.825px] md:py-[3.675px]">
      <div className="items-center box-border caret-transparent flex justify-center break-words text-nowrap bg-[position:0px_0px] p-2">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className={`box-border caret-transparent h-[50px] max-w-full break-words text-nowrap w-[50px] md:h-auto ${props.imageClassName}`}
        />
      </div>
      <div className="box-border caret-transparent gap-x-1 flex flex-col justify-center break-words gap-y-1 text-nowrap p-0 md:p-2">
        <span className="text-[10px] bg-clip-text bg-[linear-gradient(to_right,rgb(212,128,97)_0%,rgb(231,176,144)_50%,rgb(212,128,97)_100%)] box-border caret-transparent block leading-[10px] break-words md:text-sm md:leading-[16.8px]">
          {props.text}
        </span>
      </div>
    </div>
  );
};
