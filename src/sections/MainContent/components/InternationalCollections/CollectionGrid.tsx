import { CollectionCard } from "@/sections/MainContent/components/InternationalCollections/CollectionCard";

export const CollectionGrid = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-3/12">
        <a
          href="#"
          className="text-blue-600 box-border caret-transparent break-words"
        >
          <CollectionCard
            imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/150.webp"
            imageAlt="madurai-store"
            title="Madurai"
            subtitle="Store"
          />
        </a>
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-3/12">
        <a
          href="#"
          className="text-blue-600 box-border caret-transparent break-words"
        >
          <CollectionCard
            imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/71.webp"
            imageAlt="trichy-store"
            title="Trichy"
            subtitle="Store"
          />
        </a>
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-3/12">
        <a
          href="#"
          className="text-blue-600 box-border caret-transparent break-words"
        >
          <CollectionCard
            imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/85.webp"
            imageAlt="dindigul-store"
            title="Dindigul"
            subtitle="Store"
          />
        </a>
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-3 md:w-3/12">
        <a
          href="#"
          className="text-blue-600 box-border caret-transparent break-words"
        >
          <CollectionCard
            imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/152.webp"
            imageAlt="theni-store"
            title="Theni"
            subtitle="Store"
          />
        </a>
      </div>
    </div>
  );
};
