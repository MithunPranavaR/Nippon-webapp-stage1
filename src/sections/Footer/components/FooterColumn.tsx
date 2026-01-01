export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    url: string;
    ariaLabel?: string;
  }>;
  variant?: string;
  socialIcons?: Array<{
    url: string;
    ariaLabel: string;
    iconClass: string;
  }>;
  paymentIcons?: Array<{
    url: string;
    imageUrl: string;
    alt: string;
    isFirst?: boolean;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  if (props.variant === "social-payment") {
    return (
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-1/5">
        <div className="box-border caret-transparent break-words flex flex-wrap">
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full">
            <div className="relative box-border caret-transparent break-words mb-[25px]">
              <h3 className="relative text-white text-[13px] box-border caret-transparent leading-[19.5px] break-words uppercase mb-3.5 md:text-base md:leading-6 md:mb-[15px]">
                {props.title}
              </h3>
              <div className="box-border caret-transparent list-none break-words">
                <ul className="box-border caret-transparent break-words mb-4 pl-0">
                  {props.socialIcons?.map((icon, index) => (
                    <li
                      key={index}
                      className="box-border caret-transparent inline-block break-words mb-[5px] px-px"
                    >
                      <a
                        href={icon.url}
                        aria-label={icon.ariaLabel}
                        className="text-blue-600 bg-white box-border caret-transparent block h-6 leading-6 break-words text-center w-6 rounded-[50%] md:h-[30px] md:leading-[30px] md:w-[30px]"
                      >
                        <i className={icon.iconClass}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full">
            <div className="relative box-border caret-transparent break-words mb-[25px]">
              <h4 className="text-white text-[13px] box-border caret-transparent leading-[19.5px] break-words uppercase mb-[15px] md:text-[15px] md:leading-[22.5px] md:mb-2">
                Pay Using
              </h4>
              <ul className="box-border caret-transparent flex list-none break-words mb-4 pl-0">
                {props.paymentIcons?.map((payment, index) => (
                  <li
                    key={index}
                    className={
                      payment.isFirst
                        ? "box-border caret-transparent break-words mb-4 pr-[3px]"
                        : "box-border caret-transparent break-words mb-4 px-[3px]"
                    }
                  >
                    <a
                      href={payment.url}
                      className="text-blue-600 box-border caret-transparent block break-words w-[30px] md:w-10"
                    >
                      <img
                        src={payment.imageUrl}
                        alt={payment.alt}
                        className="box-border caret-transparent max-w-full break-words rounded-bl rounded-br rounded-tl rounded-tr"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-1/5">
      <div className="relative bg-slate-800 box-border caret-transparent shrink-0 max-w-full break-words w-full mt-0 mb-5 p-[15px] rounded-xl md:mt-2.5 md:mb-[45px]">
        <h3 className="relative text-white text-[13px] box-border caret-transparent leading-[19.5px] break-words uppercase mb-3.5 md:text-base md:leading-6 md:mb-[15px]">
          {props.title}
        </h3>
        <ul className="box-border caret-transparent list-none break-words mb-4 pl-0">
          {props.links.map((link, index) => (
            <li
              key={index}
              className="box-border caret-transparent break-words mb-[5px] md:mb-1.5"
            >
              <a
                href={link.url}
                className="text-white text-[11px] box-border caret-transparent block leading-[16.5px] break-words capitalize pb-[5px] md:text-[13px] md:leading-[19.5px] hover:text-amber-400 transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
