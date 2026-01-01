import { NewsletterForm } from "@/sections/Newsletter/components/NewsletterForm";

export const Newsletter = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 border-b-amber-700 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent mt-[5%] pt-[25px] pb-[15px] border-b md:pt-[35px] md:pb-[30px]">
      <div className="box-border caret-transparent w-full mx-auto px-[15px] md:px-[70px]">
        <div className="box-border caret-transparent flex flex-wrap justify-center">
          <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3">
            <div className="relative box-border caret-transparent">
              <div className="box-border caret-transparent flex flex-wrap">
                <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-3 md:w-6/12">
                  <h3 className="text-white text-base box-border caret-transparent leading-6 break-words uppercase mb-[5px] font-josefin_sans md:text-[22px] md:leading-[33px]">
                    Subscribe to our newsletter
                  </h3>
                  <p className="text-white text-[11px] box-border caret-transparent leading-5 break-words mb-[15px] md:text-sm md:leading-6 md:mb-0">
                    Be the first to know about new arrivals, sales &amp; promos
                    by submitting your email!
                  </p>
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
