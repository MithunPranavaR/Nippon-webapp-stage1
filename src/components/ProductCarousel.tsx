import { ProductCard } from "@/components/ProductCard";

export type ProductCarouselProps = {
  carouselVariant: string;
  products: Array<{
    productId: string;
    productUenc: string;
    formKey: string;
    productUrl: string;
    productTitle: string;
    imageUrl: string;
    imageAlt: string;
    discountPercentage?: string;
    badgeText?: string;
    badgeVariant: string;
    collectionUrl?: string;
    collectionImageUrl?: string;
    hasRating?: boolean;
    currentPrice: string;
    originalPrice: string;
    priceVariant: string;
    hasAddToCart?: boolean;
    hasCollectionBadge?: boolean;
  }>;
};

export const ProductCarousel = (props: ProductCarouselProps) => {
  return (
    <div className="relative box-border caret-transparent break-words overflow-hidden">
      <div
        className={`relative box-border caret-transparent break-words ${props.carouselVariant}`}
      >
        {props.products.map((product, index) => (
          <div
            key={index}
            className="relative box-border caret-transparent float-left min-h-px break-words w-[170px] mr-[5px] md:w-[270px] md:mr-5"
          >
            <ProductCard
              productId={product.productId}
              productUenc={product.productUenc}
              formKey={product.formKey}
              productUrl={product.productUrl}
              productTitle={product.productTitle}
              imageUrl={product.imageUrl}
              imageAlt={product.imageAlt}
              discountPercentage={product.discountPercentage}
              badgeText={product.badgeText}
              badgeVariant={product.badgeVariant}
              collectionUrl={product.collectionUrl}
              collectionImageUrl={product.collectionImageUrl}
              hasRating={product.hasRating}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              priceVariant={product.priceVariant}
              hasAddToCart={product.hasAddToCart}
              hasCollectionBadge={product.hasCollectionBadge}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
