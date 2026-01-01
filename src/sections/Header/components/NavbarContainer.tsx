import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { SearchSection } from "@/sections/Header/components/SearchSection";
import { Logo } from "@/components/Logo";
import { NavbarActions } from "@/sections/Header/components/NavbarActions";

export const NavbarContainer = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-wrap justify-between w-full mx-auto px-[15px] md:flex-nowrap md:px-[70px]">
      <MobileMenuButton />
      <SearchSection />
      <Logo />
      <NavbarActions />
    </div>
  );
};
