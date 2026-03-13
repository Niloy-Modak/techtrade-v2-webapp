import ProductSpec from "./ProductSpec";
import { SPEC_CONFIG } from "./specConfig";


const ProductSpecs = ({ product }: any) => {
  if (!product.specs) return null;

  const sections = SPEC_CONFIG[product.category as keyof typeof SPEC_CONFIG];

  if (!sections) return null;

  return <ProductSpec specs={product.specs} sections={sections} />;
};

export default ProductSpecs;