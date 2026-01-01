import { Star } from "lucide-react";
import { useRef, useEffect } from "react";

export type StoryCardProps = {
  videoUrl: string;
  title: string;
  rating: number;
  reviewCount: number;
  currentPrice: string;
  originalPrice: string;
  discount: string;
};

export const StoryCard = (props: StoryCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden group">
        <video
          ref={videoRef}
          src={props.videoUrl}
          loop
          muted
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 min-h-[40px]"
          title={props.title}
        >
          {props.title}
        </h3>
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(props.rating) ? "currentColor" : "none"}
                className={
                  i < Math.floor(props.rating)
                    ? "text-amber-500"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({props.reviewCount})</span>
        </div>
        <div className="mt-auto">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-green-600 text-sm font-bold">
              ↓{props.discount}
            </span>
            <span className="text-lg font-bold text-gray-900">
              {props.currentPrice}
            </span>
            <span className="text-xs text-gray-400 line-through">
              {props.originalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
