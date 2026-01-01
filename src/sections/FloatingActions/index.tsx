import { BackToTop } from "@/sections/FloatingActions/components/BackToTop";
import { WhatsAppButton } from "@/sections/FloatingActions/components/WhatsAppButton";

export const FloatingActions = () => {
  return (
    <section className="absolute box-border caret-transparent w-full">
      <BackToTop />
      <WhatsAppButton />
    </section>
  );
};
