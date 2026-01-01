import { FeatureItem } from "@/sections/MainContent/components/FeaturesSection/FeatureItem";

export const FeatureGrid = () => {
  return (
    <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 box-border caret-transparent gap-x-[5px] grid grid-cols-[repeat(5,1fr)] break-words gap-y-[5px] overflow-auto mb-[30px] p-2 md:gap-x-3 md:gap-y-3 md:p-4">
      <FeatureItem
        imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/10m_customers.png"
        imageAlt="10m customers"
        imageClassName="md:w-auto"
        text="10M+ customer"
      />
      <FeatureItem
        imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/international_furniture.png"
        imageAlt="international furniture"
        imageClassName="md:w-auto"
        text="International Furniture"
      />
      <FeatureItem
        imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/Unbeatable_price.png"
        imageAlt="Unbeatable price"
        imageClassName="md:w-auto"
        text="Unbeatable Price"
      />
      <FeatureItem
        imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/secure_payment.png"
        imageAlt="100% Secure Payment"
        imageClassName="aspect-[auto_100_/_100] md:w-[100px]"
        text="100% Secure Payment"
      />
      <FeatureItem
        imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/no_cost_emi.png"
        imageAlt="no cost emi"
        imageClassName="md:w-auto"
        text="No Cost EMI"
      />
    </div>
  );
};
