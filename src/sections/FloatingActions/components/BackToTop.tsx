import { useState, useEffect } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls past the hero video section (approximately 600px)
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      title="Go to top"
      className="fixed text-white text-xs font-bold bg-amber-700 caret-transparent h-[40px] leading-[18px] text-center align-middle w-[40px] z-[99] p-2 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 right-4 bottom-[180px] md:text-sm md:h-[45px] md:leading-[21px] md:w-[45px] md:right-[20px] md:bottom-[180px] hover:scale-110"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-auto md:h-6 md:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};
