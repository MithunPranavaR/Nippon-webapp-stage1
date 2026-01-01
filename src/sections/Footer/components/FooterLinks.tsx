import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap">
      <FooterColumn
        title="About Nippon Furniture"
        links={[
          { text: "About Us", url: "#" },
          {
            text: "Store Locator",
            url: "#",
          },
          { text: "Blogs", url: "#" },
          { text: "Media", url: "#" },
          { text: "Career", url: "#" },
        ]}
      />
      <FooterColumn
        title="PARTNER WITH US"
        links={[
          {
            text: "Become a Franchisee",
            url: "#",
          },
          {
            text: "Rent Your Property",
            url: "#",
          },
          {
            text: "Sell With Nippon Furniture",
            url: "#",
          },
          {
            text: "Bulk Enquiry",
            url: "#",
          },
        ]}
      />
      <FooterColumn
        title="Services"
        links={[
          {
            text: "Dismantling",
            url: "#",
          },
          {
            text: "Re-Installation",
            url: "#",
          },
          {
            text: "Loose Fitting",
            url: "#",
          },
          {
            text: "Complaints",
            url: "#",
          },
        ]}
      />
      <FooterColumn
        title="Need Help"
        links={[
          {
            text: "My Account",
            url: "#",
          },
          {
            text: "Track Order",
            url: "#",
          },
          {
            text: "Contact Us",
            url: "#",
          },
          { text: "Policies", url: "#" },
          {
            text: "Privacy Policy",
            url: "#",
          },
        ]}
      />
      <FooterColumn
        title="Social Accounts"
        variant="social-payment"
        links={[]}
        socialIcons={[
          {
            url: "#",
            ariaLabel: "Facebook",
            iconClass:
              "text-indigo-800 font-black box-border caret-transparent inline-block leading-[26px] break-words font-fontawesome md:leading-[30px] before:accent-auto before:box-border before:caret-transparent before:text-indigo-800 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[26px] before:list-outside before:list-none before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:leading-[30px]",
          },
          {
            url: "#",
            ariaLabel: "Instagram",
            iconClass:
              "font-black bg-clip-text bg-[radial-gradient(circle_at_30%_107%,rgb(253,244,151)_0%,rgb(253,244,151)_5%,rgb(253,89,73)_45%,rgb(214,36,159)_60%,rgb(40,90,235)_90%)] box-border caret-transparent inline-block leading-[26px] break-words font-fontawesome md:leading-[30px] before:accent-auto before:box-border before:caret-transparent before:text-blue-600 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[26px] before:list-outside before:list-none before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:leading-[30px]",
          },
          {
            url: "#",
            ariaLabel: "Youtube",
            iconClass:
              "text-red-600 font-black box-border caret-transparent inline-block leading-[26px] break-words font-fontawesome md:leading-[30px] before:accent-auto before:box-border before:caret-transparent before:text-red-600 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[26px] before:list-outside before:list-none before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:leading-[30px]",
          },
          {
            url: "#",
            ariaLabel: "Pinterest",
            iconClass:
              "text-red-600 font-black box-border caret-transparent inline-block leading-[26px] break-words font-fontawesome md:leading-[30px] before:accent-auto before:box-border before:caret-transparent before:text-red-600 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[26px] before:list-outside before:list-none before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:leading-[30px]",
          },
          {
            url: "#",
            ariaLabel: "LinkedIn",
            iconClass:
              "text-sky-600 font-black box-border caret-transparent inline-block leading-[26px] break-words font-fontawesome md:leading-[30px] before:accent-auto before:box-border before:caret-transparent before:text-sky-600 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[26px] before:list-outside before:list-none before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:leading-[30px]",
          },
        ]}
        paymentIcons={[
          {
            url: "#",
            imageUrl:
              "https://c.animaapp.com/mjn88l0qJRHj10/assets/maestro.svg",
            alt: "maestro",
            isFirst: true,
          },
          {
            url: "#",
            imageUrl:
              "https://c.animaapp.com/mjn88l0qJRHj10/assets/visa_new.svg",
            alt: "visa",
          },
          {
            url: "#",
            imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/AmEX.svg",
            alt: "amex",
          },
          {
            url: "#",
            imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/MasCrd.svg",
            alt: "mascrd",
          },
          {
            url: "#",
            imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/Rupay.svg",
            alt: "rupay",
          },
        ]}
      />
      <div className="relative bg-slate-950 box-border caret-transparent shrink-0 max-w-full break-words w-full mt-0 mb-5 p-[15px] rounded-xl md:mt-2.5 md:mb-[45px]">
        <div className="box-border caret-transparent flex flex-wrap break-words">
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-3/12">
            <div className="relative box-border caret-transparent break-words py-2.5">
              <div className="items-center box-border caret-transparent flex break-words">
                <div className="box-border caret-transparent break-words align-top pr-0 md:pr-3">
                  <div className="box-border caret-transparent break-words w-[22px] md:w-[43px]">
                    <img
                      src="https://c.animaapp.com/mjn88l0qJRHj10/assets/delivery-truck.svg"
                      alt="delivery truck"
                      className="box-border caret-transparent max-w-full break-words"
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent break-words align-top w-[10000px] pl-3">
                  <h5 className="text-white text-[11px] font-medium box-border caret-transparent leading-[13.2px] break-words uppercase md:text-[13px] md:leading-[15.6px]">
                    Free Delivery *TnC
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-3/12">
            <div className="relative box-border caret-transparent break-words py-2.5">
              <div className="items-center box-border caret-transparent flex break-words">
                <div className="box-border caret-transparent break-words align-top pr-0 md:pr-3">
                  <div className="box-border caret-transparent break-words w-[22px] md:w-[43px]">
                    <img
                      src="https://c.animaapp.com/mjn88l0qJRHj10/assets/delavery-icon0.svg"
                      className="box-border caret-transparent max-w-full break-words"
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent break-words align-top w-[10000px] pl-3">
                  <h5 className="text-white text-[11px] font-medium box-border caret-transparent leading-[13.2px] break-words uppercase md:text-[13px] md:leading-[15.6px]">
                    Easy RETURNS{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-3/12">
            <div className="relative box-border caret-transparent break-words py-2.5">
              <div className="items-center box-border caret-transparent flex break-words">
                <div className="box-border caret-transparent break-words align-top pr-0 md:pr-3">
                  <div className="box-border caret-transparent break-words w-[22px] md:w-[43px]">
                    <img
                      src="https://c.animaapp.com/mjn88l0qJRHj10/assets/delavery-icon1.svg"
                      className="box-border caret-transparent max-w-full break-words"
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent break-words align-top w-[10000px] pl-3">
                  <h5 className="text-white text-[11px] font-medium box-border caret-transparent leading-[13.2px] break-words uppercase md:text-[13px] md:leading-[15.6px]">
                    Secure Payment
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-3/12">
            <div className="relative box-border caret-transparent break-words py-2.5">
              <div className="items-center box-border caret-transparent flex break-words">
                <div className="box-border caret-transparent break-words align-top pr-0 md:pr-3">
                  <div className="box-border caret-transparent break-words w-[22px] md:w-[43px]">
                    <img
                      src="https://c.animaapp.com/mjn88l0qJRHj10/assets/delavery-icon2.svg"
                      className="box-border caret-transparent max-w-full break-words"
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent break-words align-top w-[10000px] pl-3">
                  <h5 className="text-white text-[11px] font-medium box-border caret-transparent leading-[13.2px] break-words uppercase md:text-[13px] md:leading-[15.6px]">
                    9 am to 6:30 pm | 7 days
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
