export type CategoryItemProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  imageVariant: string;
};

export const CategoryItem = (props: CategoryItemProps) => {
  return (
    <div className="relative bg-white box-border caret-transparent break-words px-0 py-[5px] rounded-bl rounded-br rounded-tl rounded-tr md:px-[5px]">
      <a
        href={props.href}
        className="text-blue-600 box-border caret-transparent block break-words"
      >
        <div className="relative bg-white box-border caret-transparent h-[120px] break-words w-[120px] overflow-hidden mx-auto my-[5px] md:h-[200px] md:w-[200px] md:mt-2.5 md:mb-[15px]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className={`box-border caret-transparent max-w-full object-contain break-words w-full rounded-t-2xl ${props.imageVariant}`}
          />
        </div>
        <div className="relative box-border caret-transparent break-words pb-[5px] px-[5px] md:pb-0 md:px-0">
          <h5 className="text-neutral-700 text-xs font-medium box-border caret-transparent inline-block leading-[14.4px] min-h-[26px] break-words mb-0 md:text-sm md:font-normal md:leading-[16.8px] md:min-h-0 md:mb-2.5">
            {props.title}
          </h5>
        </div>
      </a>
    </div>
  );
};
