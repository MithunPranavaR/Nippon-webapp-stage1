import { useEffect, useState } from "react";
import { Truck, ShieldCheck, Wrench, Users } from "lucide-react";

const SaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 55,
    seconds: 41,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-md h-full min-h-[120px] flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-person-typing-on-a-laptop-4642/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>

      <div className="relative z-10 flex flex-wrap items-center justify-between w-full px-4 py-3 md:px-8 gap-4">
        <div className="flex flex-col">
          <span className="text-red-600 text-2xl md:text-3xl font-bold leading-tight">
            SALE
          </span>
          <span className="text-red-600 text-sm font-medium">Ends In</span>
        </div>

        <div className="flex gap-2 md:gap-4 text-center">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hrs", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-red-600 text-xl md:text-3xl font-bold tabular-nums">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-gray-600 text-[10px] md:text-xs uppercase">
                {item.label}
              </span>
              {i < 3 && (
                <span className="absolute -right-2 top-1 text-red-600 font-bold hidden">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block h-10 w-px bg-gray-300 mx-2"></div>

        <div className="flex items-center gap-3">
          <div className="rounded-full border-2 border-gray-400 p-1 w-10 h-10 flex items-center justify-center text-gray-600 font-bold text-xs">
            %
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-bold text-sm">NO COST EMI</span>
            <span className="text-gray-500 text-xs">on leading banks</span>
          </div>
        </div>

        <div className="flex gap-2 items-center opacity-80 grayscale hover:grayscale-0 transition-all">
          {/* Bank Logos Placeholders using text for simplicity as requested */}
          <span className="font-bold text-blue-800 text-xs italic">
            ICICI Bank
          </span>
          <span className="font-bold text-red-700 text-xs">HDFC BANK</span>
          <span className="font-bold text-pink-700 text-xs">AXIS BANK</span>
          <span className="font-bold text-blue-600 text-xs">YES BANK</span>
        </div>
      </div>
    </div>
  );
};

const FeatureHighlights = () => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-md h-full min-h-[120px] flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-living-room-interior-2663/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>

      <div className="relative z-10 w-full px-4 py-3 md:px-6 flex justify-between items-center gap-2 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-2 min-w-max">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <Users size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-bold text-sm">20 Lakh+</span>
            <span className="text-gray-600 text-xs">Customers</span>
          </div>
        </div>

        <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>

        <div className="flex items-center gap-2 min-w-max">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <Truck size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-bold text-sm">Free</span>
            <span className="text-gray-600 text-xs">Delivery</span>
          </div>
        </div>

        <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>

        <div className="flex items-center gap-2 min-w-max">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <ShieldCheck size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-bold text-sm">Best</span>
            <span className="text-gray-600 text-xs">Warranty*</span>
          </div>
        </div>

        <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>

        <div className="flex items-center gap-2 min-w-max">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <Wrench size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-bold text-sm">15 Lakh sq.</span>
            <span className="text-gray-600 text-xs">ft. Mfg. Unit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SaleAndFeatures = () => {
  return (
    <section className="py-3 bg-gray-50 my-2.5">
      <div className="max-w-screen-xl mx-auto px-4 md:px-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SaleTimer />
          <FeatureHighlights />
        </div>
      </div>
    </section>
  );
};
