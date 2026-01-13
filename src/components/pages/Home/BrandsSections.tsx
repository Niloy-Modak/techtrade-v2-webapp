import Image from "next/image";
import React from "react";

const brandLogos = [
  { id: 1, path: "/brands-images/msi.png", name: "MSI" },
  { id: 2, path: "/brands-images/razer.png", name: "Razer" },
  { id: 3, path: "/brands-images/gigabyte.png", name: "Gigabyte" },
  { id: 4, path: "/brands-images/hp.png", name: "HP" },
  { id: 5, path: "/brands-images/roccat.png", name: "Roccat" },
  { id: 6, path: "/brands-images/tharmaltate.png", name: "Thermaltake" },
];

const BrandsSections = () => {
  return (
    <section>
      <div
        className="
          relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center
          p-10 rounded-3xl mb-8 md:mb-10 lg:mb-14
          bg-[#8c98a5]/10
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_6px_18px_rgba(0,0,0,0.2)]
          ring-1 ring-white/10
          overflow-hidden
        "
      >
        {/* glass highlight */}
        <div className="absolute inset-0 bg-linear-to-br from-white/25 via-transparent to-white/5 pointer-events-none" />

        {brandLogos.map((brand) => (
          <div
            key={brand.id}
            className="relative flex justify-center items-center transition-transform hover:scale-110 duration-300"
          >
            <div className="relative w-32 h-16">
              <Image
                src={brand.path}
                alt={`${brand.name} logo`}
                fill
                className="object-contain cursor-pointer drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSections;
