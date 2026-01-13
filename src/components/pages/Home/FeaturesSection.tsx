import React from "react";
import { FeaturesProducts } from "@/lib/featuresProductsConstants";
import ProductCard from "@/components/shared/ProductCard";

export interface IProduct {
  title: string;
  slug: string;
  key_features: string[];
  banner: string;
}

const FeaturedProductsSection = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FeaturesProducts.map((product : IProduct ) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
