import { FAQItem } from "@/sections/MainContent/components/ContentSection/FAQItem";

export const FAQSection = () => {
  return (
    <div className="box-border caret-transparent break-words">
      <FAQItem
        question="What types of wooden furniture do you offer?"
        answer={
          <>
            We stock a wide range of{" "}
            <strong className="font-bold box-border caret-transparent break-words">
              wooden furniture
            </strong>{" "}
            — beds, sofas, dining tables, chairs, and decor.
          </>
        }
      />
      <FAQItem
        question="What materials do you use for kitchen furniture?"
        answer="Our kitchen furniture is crafted from solid and engineered wood for long-lasting use."
      />
      <FAQItem
        question="How do I get more information about an item?"
        answer="Our customer service provides details including dimensions, material, and assembly requirements."
      />
      <FAQItem
        question="How long does wood furniture last?"
        answer="With proper care, our wood furniture lasts for decades with superior durability."
      />
      <FAQItem
        question="What is wooden furniture made of?"
        answer="Our furniture is crafted from high-quality solid wood and engineered wood for durability and style."
      />
    </div>
  );
};
