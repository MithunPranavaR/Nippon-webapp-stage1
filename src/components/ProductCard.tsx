export type ProductCardProps = {
  productId: string;
  productUenc: string;
  formKey: string;
  productUrl: string;
  productTitle: string;
  imageUrl: string;
  imageAlt: string;
  discountPercentage?: string;
  badgeText?: string;
  badgeVariant: string;
  collectionUrl?: string;
  collectionImageUrl?: string;
  hasRating?: boolean;
  currentPrice: string;
  originalPrice: string;
  priceVariant: string;
  hasAddToCart?: boolean;
  hasCollectionBadge?: boolean;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="box-border caret-transparent break-words">
      <div className="relative bg-white box-border caret-transparent break-words px-[5px]">
        {props.hasAddToCart && (
          <div className="box-border caret-transparent break-words absolute hidden w-full z-[1] py-5 top-[32%]">
            <div className="box-border caret-transparent break-words items-center flex justify-center text-center">
              <form className="box-border caret-transparent break-words w-full">
                <input
                  type="hidden"
                  name="product"
                  value={props.productId}
                  className="text-black bg-transparent box-border caret-transparent hidden break-words text-start p-0"
                />
                <input
                  type="hidden"
                  name="uenc"
                  value={props.productUenc}
                  className="text-black bg-transparent box-border caret-transparent hidden break-words text-start p-0"
                />
                <input
                  name="form_key"
                  type="hidden"
                  value={props.formKey}
                  className="text-black bg-transparent box-border caret-transparent hidden break-words text-start p-0"
                />
                <button
                  type="submit"
                  title="Add to Cart"
                  className="text-white text-[10px] font-semibold bg-amber-700 caret-transparent leading-[15px] break-words uppercase align-middle border border-amber-700 p-[5px] rounded-md border-solid md:text-xs md:leading-[18px] md:px-[15px] md:py-1.5"
                >
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        )}
        <a
          href={props.productUrl}
          title={props.productTitle}
          className="relative text-blue-600 bg-white box-border caret-transparent block h-[125px] break-words border-neutral-100 overflow-hidden mb-2.5 rounded-lg border-2 border-solid md:h-[210px]"
        >
          <div className="absolute box-border caret-transparent break-words z-[1] right-[5px] top-[5px]">
            <button
              type="button"
              className="text-amber-700 text-[22px] items-center bg-transparent caret-transparent flex h-[22px] justify-center leading-[22px] break-words text-center align-middle w-[22px] border bg-[position:0px_0px] p-0 rounded-[50%] border-solid border-transparent md:h-[29px] md:leading-[33px] md:w-[29px]"
            >
              <i className="font-black box-border caret-transparent block leading-[22px] break-words font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-amber-700 before:text-[22px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
            </button>
          </div>
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="relative aspect-[auto_425_/_210] box-border caret-transparent h-full max-w-full object-cover break-words w-full m-auto rounded-t-2xl inset-0"
          />
          <div className="absolute box-border caret-transparent break-words w-full z-0 left-0 inset-y-0">
            <div className="absolute box-border caret-transparent left-[-5px] break-words top-0 md:left-auto">
              {props.discountPercentage && (
                <div className="text-white text-[11px] font-medium bg-amber-700 box-border caret-transparent inline-block leading-[14px] break-words text-center px-2 py-[5px] rounded-bl rounded-br rounded-tl rounded-tr md:text-xs">
                  {props.discountPercentage}
                </div>
              )}
            </div>
            <div className="absolute box-border caret-transparent left-[-5px] break-words bottom-0 md:left-0">
              {props.badgeText && (
                <div
                  className={`text-white text-xs font-medium box-border caret-transparent inline-block leading-[14px] break-words text-center p-[5px] rounded-tr-lg rounded-bl-lg md:px-[15px] ${props.badgeVariant}`}
                >
                  {props.badgeText}
                </div>
              )}
            </div>
          </div>
        </a>
        <div className="relative box-border caret-transparent break-words pb-[5px] px-[5px] md:pb-0 md:px-0">
          <h5 className="text-neutral-700 text-sm font-medium box-border caret-transparent flow-root leading-[16.8px] break-words text-ellipsis overflow-hidden mb-5 md:text-base md:leading-[19.2px]">
            {props.productTitle}
          </h5>
          {props.hasCollectionBadge &&
            props.collectionUrl &&
            props.collectionImageUrl && (
              <div className="box-border caret-transparent break-words w-[200px] mb-2.5">
                <a
                  href={props.collectionUrl}
                  className="text-blue-600 box-border caret-transparent break-words"
                >
                  <img
                    src={props.collectionImageUrl}
                    className="box-border caret-transparent max-w-full break-words w-full rounded-tr-2xl"
                  />
                </a>
              </div>
            )}
          <div className="box-border caret-transparent hidden shrink-0 min-h-[25px] break-words text-left w-full md:w-[41.6667%]">
            {props.hasRating && (
              <div className="box-border caret-transparent hidden break-words text-nowrap overflow-hidden">
                <div
                  title="100%"
                  className="relative box-border caret-transparent inline-block break-words text-nowrap align-middle w-[100px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-300 before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-[15px] before:tracking-[4px] before:leading-[15px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-fontawesome"
                >
                  <span className="box-border caret-transparent block break-words text-nowrap w-full overflow-hidden before:accent-auto before:box-border before:caret-transparent before:text-amber-700 before:block before:text-[15px] before:not-italic before:normal-nums before:font-normal before:h-[15px] before:tracking-[4px] before:leading-[15px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:relative before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:z-[2] before:border-separate before:font-fontawesome"></span>
                </div>
              </div>
            )}
          </div>
          <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full pl-3 md:w-[58.3333%]">
              <p className="text-base font-black box-border caret-transparent leading-5 break-words mb-2.5 md:leading-6"></p>
              <div className="box-border caret-transparent break-words">
                <div
                  className={`box-border caret-transparent break-words md:items-center md:gap-x-[5px] md:gap-y-[5px] ${props.priceVariant}`}
                >
                  <span className="box-border caret-transparent break-words block">
                    <span className="box-border caret-transparent break-words">
                      <span className="box-border caret-transparent break-words">
                        <span className="text-base font-black box-border caret-transparent leading-6 break-words mb-5 md:mb-2.5">
                          {props.currentPrice}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="box-border caret-transparent break-words block">
                    <span className="box-border caret-transparent break-words">
                      <span className="box-border caret-transparent break-words">
                        <span className="text-zinc-400 text-[13px] font-medium box-border caret-transparent leading-[19.5px] break-words line-through mb-5 pr-[5px] md:mb-2.5">
                          {props.originalPrice}
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
