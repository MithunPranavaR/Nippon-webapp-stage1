export type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <div className="border-b-zinc-300 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent break-words py-3 border-b">
      <div className="text-base font-bold items-center box-border caret-transparent flex justify-between leading-[25.6px] break-words">
        <span className="box-border caret-transparent block break-words">
          {props.question}
        </span>
        <span className="box-border caret-transparent block break-words">
          ▼
        </span>
      </div>
      <div className="text-neutral-600 text-sm box-border caret-transparent hidden leading-[22.4px] break-words pt-2">
        {props.answer}
      </div>
    </div>
  );
};
