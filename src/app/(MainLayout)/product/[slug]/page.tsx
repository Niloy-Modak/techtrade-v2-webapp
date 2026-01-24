import ProductSpecs from "@/components/pages/productDetails/space-category/ProductSpecs";
import { products } from "@/lib/constants";
import { ProductDocument } from "@/database/types/interfaces";
import Image from "next/image";

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

  const {
    title,
    banner,
    description,
    brand,
    category,
    stock,
    price,
    key_features,
  } = product;

  return (
    <section className=" py-4 md:py-8">
      {/* Section 1: Product Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md bg-white rounded-2xl p-4 shadow-sm">
            <Image
              src={banner}
              alt="product banner"
              width={500}
              height={500}
              className="rounded-xl object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-primary">
            {title}
          </h1>

          {/* Price & Meta */}
          <div className="flex flex-wrap gap-3">
            <span className="px-2 py-1 md:px-4 md:py-2 bg-secondary rounded-full text-sm">
              Price:
              <span className="ml-1 font-semibold">${price}</span>
            </span>

            <span className="px-2 py-1 md:px-4 md:py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              In Stock
            </span>

            <span className="px-2 py-1 md:px-4 md:py-2 bg-secondary rounded-full text-sm">
              Brand:
              <span className="ml-1 font-medium">{brand}</span>
            </span>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>

            <ul className="space-y-3">
              {key_features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Section 2: Spec Details */}
      <section>
        {/*  Fix the error by casting 'product' as unknown first, then as ProductDocument */}
        <ProductSpecs product={product as unknown as ProductDocument} />
      </section>
    </section>
  );
};

export default ProductDetailsPage;
