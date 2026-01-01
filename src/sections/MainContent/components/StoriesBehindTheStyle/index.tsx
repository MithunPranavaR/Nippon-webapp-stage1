import { useRef } from "react";
import { StoryCard } from "./StoryCard";

const storiesData = [
  {
    id: 1,
    videoUrl:
      "https://videos.pexels.com/video-files/3196236/3196236-hd_1920_1080_25fps.mp4",
    title: "Adolph 6 Seater Dining Table Set (Honey Finish)",
    rating: 4.5,
    reviewCount: 277,
    currentPrice: "₹64,989",
    originalPrice: "₹1,03,700",
    discount: "37%",
  },
  {
    id: 2,
    videoUrl:
      "https://videos.pexels.com/video-files/7578544/7578544-hd_1920_1080_30fps.mp4",
    title: "Dharaa Sheesham wood Designer Cabinet and Sideboard",
    rating: 4.8,
    reviewCount: 162,
    currentPrice: "₹57,738",
    originalPrice: "₹98,200",
    discount: "41%",
  },
  {
    id: 3,
    videoUrl:
      "https://videos.pexels.com/video-files/6585566/6585566-hd_1920_1080_25fps.mp4",
    title: "Varnik 3+1+1 Ash Wood Sofa Set with Cane Accents",
    rating: 5.0,
    reviewCount: 50,
    currentPrice: "₹5,499",
    originalPrice: "₹11,400",
    discount: "52%",
  },
  {
    id: 4,
    videoUrl:
      "https://videos.pexels.com/video-files/7016267/7016267-hd_1920_1080_30fps.mp4",
    title: "Aranyam European Ash Wood 3 Seater Sofa with Cane Detailing",
    rating: 3.5,
    reviewCount: 145,
    currentPrice: "₹72,989",
    originalPrice: "₹1,24,100",
    discount: "41%",
  },
  {
    id: 5,
    videoUrl:
      "https://videos.pexels.com/video-files/4934588/4934588-hd_1920_1080_30fps.mp4",
    title: "Danon Lounge Chair",
    rating: 4.9,
    reviewCount: 502,
    currentPrice: "₹23,989",
    originalPrice: "₹41,000",
    discount: "41%",
  },
];

export const StoriesBehindTheStyle = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-[70px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
            Stories Behind the Style
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 shadow-sm transition-colors"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 shadow-sm transition-colors"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="min-w-[280px] md:min-w-[300px] snap-start"
            >
              <StoryCard {...story} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
