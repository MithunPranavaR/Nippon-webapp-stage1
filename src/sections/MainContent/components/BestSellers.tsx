import { ProductCarousel } from "@/components/ProductCarousel";
import { useState, useEffect } from "react";

// This simulates data you might fetch from your PostgreSQL database via an API
const bestSellersData = [
  {
    productId: "1154",
    productUenc: "dummy_uenc",
    formKey: "dummy_key",
    productUrl: "#",
    productTitle: "Nippon Furniture Atom Center Table in Sheesham Wood",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/104.jpg",
    imageAlt: "Buy Nippon Furniture Atom Center Table in Sheesham Wood online",
    discountPercentage: "46% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/Wood_world-final.webp",
    hasRating: true,
    currentPrice: "₹8,990.00",
    originalPrice: "₹16,699.00",
    priceVariant:
      "items-start box-border gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
    hasAddToCart: true,
    hasCollectionBadge: true,
  },
  {
    productId: "1514",
    productUenc: "dummy_uenc",
    formKey: "dummy_key",
    productUrl: "#",
    productTitle: "Nippon Furniture Ashoka Six Seater Wooden Dining Table",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/11.webp",
    imageAlt:
      "Buy Nippon Furniture Ashoka Six Seater Wooden Dining Table online",
    discountPercentage: "53% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/Wood_world-final.webp",
    hasAddToCart: true,
    hasCollectionBadge: true,
    currentPrice: "₹16,500.00",
    originalPrice: "₹35,000.00",
    priceVariant:
      "items-start gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
  },
  {
    productId: "",
    productUenc: "",
    formKey: "",
    productUrl: "#",
    productTitle:
      "Nippon Furniture Polyresin Ganesha - Bronze & Red - 15.5 Inches",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/8.webp",
    imageAlt:
      "Buy Nippon Furniture Polyresin Ganesha - Bronze & Red - 15.5 Inches online",
    discountPercentage: "55% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/Wood_world-final.webp",
    hasRating: false,
    currentPrice: "₹3,498.00",
    originalPrice: "₹7,799.00",
    priceVariant:
      "items-start box-border gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
    hasAddToCart: false,
    hasCollectionBadge: true,
  },
  {
    productId: "11311",
    productUenc: "dummy_uenc",
    formKey: "dummy_key",
    productUrl: "#",
    productTitle: "Nippon Furniture Rome Italian High Glossy Wardrobe 3 Door",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/5.webp",
    imageAlt:
      "Buy Nippon Furniture Rome Italian High Glossy Wardrobe 3 Door online",
    discountPercentage: "59% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/italian_2.png",
    hasAddToCart: true,
    hasCollectionBadge: true,
    currentPrice: "₹35,000.00",
    originalPrice: "₹85,000.00",
    priceVariant:
      "items-start gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
  },
  {
    productId: "12313",
    productUenc: "dummy_uenc",
    formKey: "dummy_key",
    productUrl: "#",
    productTitle:
      "Nippon Furniture Tivoli Italian Bedroom Set (Queen Size Bed+Dresser+Side table)",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/10.webp",
    imageAlt:
      "Buy Nippon Furniture Tivoli Italian Bedroom Set (Queen Size Bed+Dresser+Side table) online",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    hasAddToCart: true,
    hasCollectionBadge: true,
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/italian_2.png",
    currentPrice: "₹59,000.00",
    originalPrice: "₹133,997.00",
    priceVariant:
      "[align-items:normal] box-border caret-transparent gap-x-[normal] block break-words gap-y-[normal] ml-0 md:items-center md:gap-x-[5px] md:flex md:gap-y-[5px] md:ml-[5px]",
  },
  {
    productId: "13831",
    productUenc: "dummy_uenc",
    formKey: "dummy_key",
    productUrl: "#",
    productTitle: "Nippon Furniture Rome Italian Side Board",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/13.webp",
    imageAlt: "Buy Nippon Furniture Rome Italian Side Board online",
    discountPercentage: "56% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/italian_2.png",
    hasAddToCart: true,
    hasCollectionBadge: true,
    currentPrice: "₹27,499.00",
    originalPrice: "₹62,999.00",
    priceVariant:
      "items-start gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
  },
  {
    productId: "14186",
    productUenc: "dummy_uenc",
    formKey: "dummy_key",
    productUrl: "#",
    productTitle: "Nippon Furniture Logan Computer Table",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/6.webp",
    imageAlt: "Buy Nippon Furniture Logan Computer Table online",
    discountPercentage: "50% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    hasAddToCart: true,
    currentPrice: "₹6,990.00",
    originalPrice: "₹14,000.00",
    priceVariant:
      "items-start gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
    hasRating: true,
  },
  {
    productId: "",
    productUenc: "",
    formKey: "",
    productUrl: "#",
    productTitle:
      "Nippon Furniture Mourya Wooden Sofa Set 3+1+1 Seater In Brown Color Cushion",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/12.webp",
    imageAlt:
      "Buy Nippon Furniture Mourya Wooden Sofa Set 3+1+1 Seater In Brown Color Cushion online",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/Wood_world-final.webp",
    priceVariant:
      "[align-items:normal] gap-x-[normal] block gap-y-[normal] ml-0 md:items-center md:gap-x-[5px] md:flex md:gap-y-[5px] md:ml-[5px]",
    currentPrice: "₹36,000.00",
    originalPrice: "₹68,600.00",
  },
  {
    productId: "18648",
    productUenc: "dummy_uenc",
    formKey: "dummy_key",
    productUrl: "#",
    productTitle: "Nippon Furniture Melaka Malaysian Fabric Sofa Three Seater",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/9.webp",
    imageAlt:
      "Buy Nippon Furniture Melaka Malaysian Fabric Sofa Three Seater online",
    discountPercentage: "50% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/malaysian_2.png",
    hasRating: true,
    currentPrice: "₹25,000.00",
    originalPrice: "₹49,999.00",
    priceVariant:
      "items-start box-border gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
    hasAddToCart: true,
    hasCollectionBadge: true,
  },
  {
    productId: "",
    productUenc: "",
    formKey: "",
    productUrl: "#",
    productTitle: "Nippon Furniture Texas American Fabric Sofa Three Seater",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/7.webp",
    imageAlt: "Nippon Furniture Texas American Fabric Sofa Three Seater",
    discountPercentage: "49% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/american_1.png",
    hasRating: false,
    currentPrice: "₹56,000.00",
    originalPrice: "₹110,000.00",
    priceVariant:
      "items-start gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
    hasAddToCart: false,
    hasCollectionBadge: true,
  },
  {
    productId: "19967",
    productUenc: "dummy_uenc",
    formKey: "dummy_key",
    productUrl: "#",
    productTitle:
      "Nippon Furniture Genting Malaysian King Bed With Hydraulic Storage",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/14.webp",
    imageAlt:
      "Nippon Furniture Genting Malaysian King Bed With Hydraulic Storage",
    discountPercentage: "58% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/malaysian_2.png",
    hasAddToCart: true,
    hasCollectionBadge: true,
    currentPrice: "₹36,000.00",
    originalPrice: "₹85,000.00",
    priceVariant:
      "items-start gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
  },
  {
    productId: "",
    productUenc: "",
    formKey: "",
    productUrl: "#",
    productTitle: "Nippon Furniture Chola Sheesham Wood Three Seater Sofa",
    imageUrl: "https://c.animaapp.com/mjn88l0qJRHj10/assets/58.jpg",
    imageAlt: "Nippon Furniture Chola Sheesham Wood Three Seater Sofa",
    discountPercentage: "56% off",
    badgeText: "Best Seller",
    badgeVariant: "bg-red-800",
    collectionUrl: "#",
    collectionImageUrl:
      "https://c.animaapp.com/mjn88l0qJRHj10/assets/Wood_world-final.webp",
    hasRating: false,
    currentPrice: "₹23,999.00",
    originalPrice: "₹55,000.00",
    priceVariant:
      "items-start gap-x-0 flex flex-col gap-y-0 md:items-center md:gap-x-[5px] md:flex-row md:gap-y-[5px]",
    hasAddToCart: false,
    hasCollectionBadge: true,
  },
];

export const BestSellers = () => {
  const [products, setProducts] = useState(bestSellersData);

  // Example of how you would fetch data from an API
  /*
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/best-sellers');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  */

  return (
    <section className="relative box-border caret-transparent break-words pb-[30px] md:pb-[70px]">
      <div className="box-border caret-transparent break-words"></div>
      <div className="box-border caret-transparent break-words w-full mx-auto px-[15px] md:px-[70px]">
        <div className="relative box-border caret-transparent break-words">
          <div className="box-border caret-transparent flex flex-wrap break-words -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full break-words w-full px-3">
              <div className="relative box-border caret-transparent break-words w-full mb-[5px] md:mb-5">
                <h2 className="text-3xl font-medium box-border caret-transparent leading-[45px] break-words text-center">
                  Best Sellers
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute box-border caret-transparent break-words text-right mt-1 right-0 top-0.5 md:mt-[13px]"></div>
        </div>
        <div className="relative box-border caret-transparent break-words w-full z-[1]">
          <ProductCarousel
            carouselVariant="translate-x-[-1750px] w-[2101px] md:translate-x-[-2320px] md:w-[3481px]"
            products={products}
          />
          <div className="box-border caret-transparent break-words">
            <button
              type="button"
              role="presentation"
              aria-label="previous"
              className="absolute bg-transparent caret-transparent block break-words text-center align-middle bg-[position:0px_0px] p-0 -left-2 top-[35%]"
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
              className="absolute bg-transparent caret-transparent hidden opacity-50 break-words pointer-events-none text-center align-middle bg-[position:0px_0px] p-0 -right-2 top-[35%]"
            >
              <span
                aria-label="Next"
                className="text-black text-[35px] font-light bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_15px_0px] box-border caret-transparent flex h-[35px] justify-center leading-[25px] break-words w-[35px] border border-neutral-600 rounded-[50%] border-solid"
              >
                ›
              </span>
            </button>
          </div>
          <div className="relative box-border caret-transparent hidden break-words text-center m-auto"></div>
        </div>
      </div>
    </section>
  );
};
