import { Logo } from "@/components/Logo";
import { SearchSection } from "@/sections/Header/components/SearchSection";
import { NavbarActions } from "@/sections/Header/components/NavbarActions";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <nav className="relative items-center bg-slate-900 box-border caret-transparent flex flex-wrap justify-between md:flex-nowrap md:justify-start border-b border-slate-700">
      <div className="items-center box-border caret-transparent flex flex-wrap justify-between w-full mx-auto px-[15px] md:flex-nowrap md:px-[70px]">
        <MobileMenuButton />
        <Logo />
        <SearchSection />
        <NavbarActions />
      </div>
    </nav>
  );
};
