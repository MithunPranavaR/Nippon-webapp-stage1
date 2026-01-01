import { TestimonialCard } from "@/sections/MainContent/components/Testimonials/TestimonialCard";

export const TestimonialsCarousel = () => {
  return (
    <div className="relative box-border caret-transparent break-words w-full z-[1]">
      <div className="relative box-border caret-transparent break-words overflow-hidden">
        <div className="relative box-border caret-transparent break-words translate-x-[-1375px] w-[4756px] pr-20 md:transform-none md:w-[2014px] md:pr-0">
          <div className="relative box-border caret-transparent float-left min-h-px break-words w-[265px] mr-2.5 md:w-[277.5px]">
            <TestimonialCard
              videoThumbnailUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/hqdefault.jpg"
              testimonialText="I had an amazing experience with Nippon Furniture. The furniture quality is great and the delivery was smooth. The designs are elegant and exactly as shown online. I'm very happy with my purchase and would definitely recommend it!"
              customerName="Renu"
              customerLocation="Bangalore"
            />
          </div>
          <div className="relative box-border caret-transparent float-left min-h-px break-words w-[265px] mr-2.5 md:w-[277.5px]">
            <TestimonialCard
              videoThumbnailUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/hqdefault-1.jpg"
              testimonialText="My experience with Nippon Furniture was amazing! The furniture looks elegant and matches my home perfectly. Delivery was smooth and on time, and the installation team did a great job. I'm very happy with the purchase."
              customerName="Priya"
              customerLocation="Gurgaon"
            />
          </div>
          <div className="relative box-border caret-transparent float-left min-h-px break-words w-[265px] mr-2.5 md:w-[277.5px]">
            <TestimonialCard
              videoThumbnailUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/hqdefault-2.jpg"
              testimonialText="I had a great experience with Nippon Furniture. The furniture quality and finish are impressive, and the delivery process was smooth. I'm really happy with the service and would recommend Nippon Furniture to anyone looking for quality furniture."
              customerName="John"
              customerLocation="Bangalore"
            />
          </div>
          <div className="relative box-border caret-transparent float-left min-h-px break-words w-[265px] mr-2.5 md:w-[277.5px]">
            <TestimonialCard
              videoThumbnailUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/hqdefault-3.jpg"
              testimonialText="I'm really impressed with Nippon Furniture's service and product quality. The furniture looks amazing, and the delivery team was very professional. It was a smooth and satisfying experience overall. Highly recommended!"
              customerName="Ravi"
              customerLocation="Hyderabad"
            />
          </div>
          <div className="relative box-border caret-transparent float-left min-h-px break-words w-[265px] mr-2.5 md:w-[277.5px]">
            <TestimonialCard
              videoThumbnailUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/hqdefault-4.jpg"
              testimonialText="I'm very happy with my Nippon Furniture purchase. The delivery was on time, and the team handled installation professionally. The entire process from ordering online to setting up the furniture at my home was smooth and hassle-free. The quality of the product is excellent, and the design perfectly complements my home décor. I truly appreciate the attention to detail and customer service. Overall, it was an excellent experience, and I would definitely recommend Nippon Furniture to anyone looking for premium furniture at a great price."
              customerName="Sharma"
              customerLocation="Delhi"
            />
          </div>
          <div className="relative box-border caret-transparent float-left min-h-px break-words w-[265px] mr-2.5 md:w-[277.5px]">
            <TestimonialCard
              videoThumbnailUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/hqdefault-5.jpg"
              testimonialText="Nippon Furniture's collection is fantastic! The products are elegant, comfortable, and perfectly fit my space. I was really impressed with the variety of designs and finishes available. Each piece looks premium and well-crafted. The furniture quality is excellent, and it adds a modern touch to my home. The delivery was quick, and the installation team was very professional and efficient."
              customerName="Swetha"
              customerLocation="Delhi"
            />
          </div>
          <div className="relative box-border caret-transparent float-left min-h-px break-words w-[265px] mr-2.5 md:w-[277.5px]">
            <TestimonialCard
              videoThumbnailUrl="https://c.animaapp.com/mjn88l0qJRHj10/assets/hqdefault-6.jpg"
              testimonialText="I had a great experience with Nippon Furniture. The Shoerack design and quality are exceptional, and the delivery was handled very professionally. I'm really satisfied with my purchase and would definitely recommend Nippon Furniture to others."
              customerName="Anjali"
              customerLocation="Mumbai"
            />
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent hidden break-words md:block">
        <button
          type="button"
          role="presentation"
          aria-label="previous"
          className="absolute bg-transparent caret-transparent hidden opacity-50 break-words pointer-events-none align-middle bg-[position:0px_0px] p-0 -left-3 top-[35%]"
        >
          <span
            aria-label="Previous"
            className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 rounded-[50%] border-solid"
          >
            ‹
          </span>
        </button>
        <button
          type="button"
          role="presentation"
          aria-label="next"
          className="absolute bg-transparent caret-transparent block break-words align-middle bg-[position:0px_0px] p-0 -right-3 top-[35%]"
        >
          <span
            aria-label="Next"
            className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 rounded-[50%] border-solid"
          >
            ›
          </span>
        </button>
      </div>
      <div className="relative box-border caret-transparent table break-words m-auto md:hidden">
        <button
          type="button"
          aria-label="dot"
          className="relative bg-transparent caret-transparent block float-left h-2 break-words align-middle w-4 border border-orange-300 bg-[position:0px_0px] m-[5px] p-0 rounded-[30px] border-solid"
        >
          <span className="absolute bg-orange-300 box-border caret-transparent content-[''] hidden h-1.5 break-words w-1.5 rounded-[50%] left-1 right-0 top-1 bottom-0"></span>
        </button>
        <button
          type="button"
          aria-label="dot"
          className="relative bg-zinc-300 caret-transparent block float-left h-2 break-words align-middle w-2 border border-zinc-300 bg-[position:0px_0px] m-[5px] p-0 rounded-[50%] border-solid"
        >
          <span className="box-border caret-transparent break-words"></span>
        </button>
        <button
          type="button"
          aria-label="dot"
          className="relative bg-zinc-300 caret-transparent block float-left h-2 break-words align-middle w-2 border border-zinc-300 bg-[position:0px_0px] m-[5px] p-0 rounded-[50%] border-solid"
        >
          <span className="box-border caret-transparent break-words"></span>
        </button>
      </div>
    </div>
  );
};
