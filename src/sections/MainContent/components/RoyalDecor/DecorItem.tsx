export type DecorItemProps = {
  href: string;
  imageUrl: string;
  title: string;
};

export const DecorItem = (props: DecorItemProps) => {
  return (
    <div className="relative bg-stone-50 shadow-[rgba(0,0,0,0.1)_0px_2px_4px_0px] box-border caret-transparent break-words mb-[15px] mx-auto p-2.5 rounded-[10px]">
      <a
        href={props.href}
        className="relative text-blue-600 bg-white box-border caret-transparent block h-[125px] break-words border-neutral-100 overflow-hidden mb-2.5 rounded-lg border-2 border-solid md:h-[230px]"
      >
        <img
          src={props.imageUrl}
          className="aspect-[auto_299_/_226] box-border caret-transparent max-w-full object-contain break-words w-full rounded-t-2xl"
        />
      </a>
      <div className="relative box-border caret-transparent break-words pb-[5px] px-[5px] md:pb-0 md:px-0">
        <h4 className="text-neutral-700 text-lg box-border caret-transparent flow-root leading-[27px] break-words text-center text-ellipsis overflow-hidden">
          {props.title}
        </h4>
      </div>
    </div>
  );
};
