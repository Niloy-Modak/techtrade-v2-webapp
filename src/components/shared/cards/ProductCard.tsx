import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/components/pages/home/FeaturesSection";
import FavoriteBtn from "../buttons/FavoriteBtn";
import AddCartBtn from "../buttons/AddCartBtn";

const ProductCard = ({
  title,
  key_features,
  banner,
  slug,
  price,
}: IProduct) => {
  return (
    <Link href={`product/${slug}`}>
      <div className="h-full">
        <div
          className="
          flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300
          bg-white/40 backdrop-blur-md 
          border border-white/20 
          shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          hover:-translate-y-1
        "
        >
          <div className="p-2">
            <div className="relative w-full aspect-square p-4 bg-white/10 border-b border-gray-100/20 rounded-t-lg overflow-hidden">
              <Image
                src={banner}
                alt={title}
                fill
                className="object-cover rounded-t-xl"
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              {/* Favorite Button - Top Left */}
              <div className="absolute top-2 right-2 z-10">
                <FavoriteBtn />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="p-6 flex flex-col grow bg-white/60">
            {/* Using 'title' from IBaseProduct */}
            <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight min-h-2">
              {title}
            </h3>

            <ul className="space-y-3 grow">
              {/* Mapping through 'key_features' from IBaseProduct */}
              {key_features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start text-[13px] text-gray-600 leading-snug"
                >
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xl font-bold text-gray-900  leading-tight min-h-2">${price}</p>
              <div>
                <AddCartBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
