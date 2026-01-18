import React from "react";
// Import specific interfaces alongside ProductDocument
import {
  ProductDocument,
  ILaptopProduct,
  IHeadphoneProduct,
} from "@/database/types/interfaces";
import LaptopSpec from "./LaptopSpec";
import HeadphoneSpace from "./HeadphoneSpace";

type Props = {
  // Allow the component to accept the strict Document OR the interfaces used in your constants
  product: ProductDocument | ILaptopProduct | IHeadphoneProduct;
};

const ProductSpecs: React.FC<Props> = ({ product }) => {
  // You might need optional chaining (?) if specs can be undefined in the mock data
  if (!product.specs) return null;

  switch (product.category) {
    case "laptop":
      return <LaptopSpec specs={(product as ILaptopProduct).specs} />;
    case "headphone":
      return <HeadphoneSpace specs={(product as IHeadphoneProduct).specs} />;
    default:
      return null;
  }
};

export default ProductSpecs;
