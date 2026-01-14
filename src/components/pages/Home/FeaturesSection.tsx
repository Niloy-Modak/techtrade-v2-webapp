import React from "react";
import { FeaturesProducts } from "@/lib/featuresProductsConstants";
import ProductCard from "@/components/shared/cards/ProductCard";


export interface IProduct {
  title: string;
  slug: string;
  key_features: string[];
  banner: string;
  price: number
}

const FeaturedProductsSection = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-medium mb-6 text-primary text-center">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FeaturesProducts.map((product : IProduct ) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
