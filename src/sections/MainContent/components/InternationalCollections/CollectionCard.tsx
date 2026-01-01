export type CollectionCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
};

export const CollectionCard = (props: CollectionCardProps) => {
  return (
    <div className="relative bg-slate-900 box-border caret-transparent break-words mt-[15px] p-2 rounded-xl md:mt-[25px] md:p-5">
      <div className="box-border caret-transparent table-cell break-words align-middle pr-3">
        <div className="box-border caret-transparent h-[35px] break-words w-[35px] overflow-hidden mx-auto rounded-[50%] md:h-20 md:w-20">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="aspect-[auto_80_/_80] box-border caret-transparent h-full max-w-full object-cover break-words w-full"
          />
        </div>
      </div>
      <div className="box-border caret-transparent table-cell break-words align-middle w-[10000px] pl-0 md:pl-3">
        <div className="box-border caret-transparent break-words">
          <h4 className="text-white text-sm font-medium box-border caret-transparent leading-[21px] break-words mb-1 md:text-xl md:leading-[30px] md:mb-2">
            {props.title}
          </h4>
          <h5 className="text-white text-xs font-medium box-border caret-transparent leading-[14.4px] break-words mb-2 md:text-base md:leading-[19.2px]">
            {props.subtitle}
          </h5>
        </div>
      </div>
    </div>
  );
};
