import { CategoryItem } from "@/sections/MainContent/components/PopularCategories/CategoryItem";

export const CategoryGrid = () => {
  return (
    <ul className="box-border caret-transparent grid flex-wrap grid-cols-[repeat(6,1fr)] grid-rows-[repeat(2,auto)] justify-center list-none break-words text-center w-max mb-4 pl-0 md:flex md:grid-cols-none md:grid-rows-none md:w-auto">
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/93.webp"
          imageAlt="recliner"
          title="Recliner"
          imageVariant="aspect-[auto_110_/_110]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/153.webp"
          imageAlt="sofa"
          title="Sofa"
          imageVariant="aspect-[auto_110_/_110]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/48.webp"
          imageAlt="dining-table"
          title="Dining Set"
          imageVariant="aspect-[auto_110_/_110]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/159.webp"
          imageAlt="double-bed"
          title="Beds"
          imageVariant="aspect-[auto_110_/_110]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/82.webp"
          imageAlt="study"
          title="Study Tables"
          imageVariant="aspect-[auto_110_/_110]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/140.webp"
          imageAlt="mattress"
          title="Mattress"
          imageVariant="aspect-[auto_60_/_60]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/46.webp"
          imageAlt="vase"
          title="Decor"
          imageVariant="aspect-[auto_60_/_60]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/47.webp"
          imageAlt="wardrobe"
          title="Wardrobes"
          imageVariant="aspect-[auto_60_/_60]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/146.webp"
          imageAlt="chair"
          title="Chairs"
          imageVariant="aspect-[auto_60_/_60]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/149.webp"
          imageAlt="outdoor"
          title="Outdoor"
          imageVariant="aspect-[auto_60_/_60]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/160.webp"
          imageAlt="dressing-table"
          title="Dressing Table"
          imageVariant="aspect-[auto_60_/_60]"
        />
      </li>
      <li className="box-border caret-transparent break-words w-full mb-2.5 px-[5px] md:w-[16.6667%]">
        <CategoryItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/66.webp"
          imageAlt="Coffee-Tables"
          title="Coffee Tables"
          imageVariant="aspect-[auto_60_/_60]"
        />
      </li>
    </ul>
  );
};
