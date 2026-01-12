import Image from "next/image";

const BannerBackup = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg mt-4 mb-8">
      {/* Banner Image */}
      <div className="relative w-full h-75 sm:h-100 md:h-125 lg:h-150">
        <Image
          src="/banner/banner.png"
          alt="iPhone 14 Pro Banner"
          fill // Uses fill to cover the responsive container height
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl space-y-3 md:space-y-5">
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-400 font-medium">
              Pro.Beyond.
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
              iPhone 14 <span className="font-bold">Pro</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-lg max-w-sm">
              Created to change everything for the better. For everyone.
            </p>

            <div className="pt-2">
              <button className="inline-flex items-center px-8 py-3 border border-white/50 rounded-md text-white font-medium hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBackup;
