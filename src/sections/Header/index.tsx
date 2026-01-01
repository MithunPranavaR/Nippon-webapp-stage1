import { TopBar } from "@/sections/Header/components/TopBar";
import { Navbar } from "@/sections/Header/components/Navbar";
import { MobileNavMenu } from "@/sections/MobileSidebar/components/MobileNavMenu";

export const Header = () => {
  return (
    <header className="box-border caret-transparent w-full fixed top-0 left-0 right-0 z-50 shadow-md">
      <TopBar />
      <Navbar />
      <div className="hidden md:block sticky top-[78px] z-40 bg-slate-900 shadow-md">
        <MobileNavMenu />
      </div>
    </header>
  );
};
