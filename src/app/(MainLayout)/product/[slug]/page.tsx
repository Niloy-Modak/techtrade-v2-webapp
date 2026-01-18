import ProductSpecs from "@/components/pages/productDetails/space-category/ProductSpecs";
import { products } from "@/lib/constants";
// 1. Import the type here so you can use it for casting
import { ProductDocument } from "@/database/types/interfaces";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="p-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </section>
    );
  }

  const { title, banner, description, brand, category, stock, price } = product;

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500 mt-2">{description}</p>

      <div className="mt-6">
        <img src={banner} alt={title} className="w-80 rounded-lg" />
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold">Price: ${price}</p>
        <p>Brand: {brand}</p>
        <p>Category: {category}</p>
        <p>Stock: {stock}</p>
      </div>

      <section>
        {/* 2. Fix the error by casting 'product' as unknown first, then as ProductDocument */}
        <ProductSpecs product={product as unknown as ProductDocument} />
      </section>
    </section>
  );
};

export default ProductDetailsPage;
