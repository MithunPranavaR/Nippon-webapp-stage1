import { DecorItem } from "@/sections/MainContent/components/RoyalDecor/DecorItem";

export const DecorGrid = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-[5px] md:w-3/12">
        <DecorItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/62.jpg"
          title="Idols"
        />
        <DecorItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/51.png"
          title="Plants & Planters"
        />
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-[5px] md:w-3/12">
        <DecorItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/65.jpg"
          title="Figurines"
        />
        <DecorItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/55.jpg"
          title="Artificial Flowers"
        />
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-[5px] md:w-3/12">
        <DecorItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/60.jpg"
          title="Vases"
        />
        <DecorItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/61.jpg"
          title="Cushion Covers"
        />
      </div>
      <div className="box-border caret-transparent shrink-0 max-w-full break-words w-6/12 px-[5px] md:w-3/12">
        <DecorItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/126.jpg"
          title="Crystal Wall Art"
        />
        <DecorItem
          href="#"
          imageUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/53.jpg"
          title="Candle Holders"
        />
      </div>
    </div>
  );
};
