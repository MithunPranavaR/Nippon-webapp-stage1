import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 box-border caret-transparent pt-[30px] md:pt-[55px]">
      <div className="box-border caret-transparent w-full mx-auto px-[15px] md:px-[70px]">
        <FooterLinks />
      </div>
      <FooterBottom />
    </footer>
  );
};
