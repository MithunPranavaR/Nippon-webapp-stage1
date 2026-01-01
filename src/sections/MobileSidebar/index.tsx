import { MobileSidebarHeader } from "@/sections/MobileSidebar/components/MobileSidebarHeader";
import { MobileSidebarNav } from "@/sections/MobileSidebar/components/MobileSidebarNav";

export const MobileSidebar = () => {
  return (
    <div className="fixed bg-white box-border caret-transparent hidden shrink h-full left-[-46%] min-h-0 min-w-0 w-[46%] overflow-auto top-0 z-40 md:hidden">
      <MobileSidebarHeader />
      <MobileSidebarNav />
    </div>
  );
};
