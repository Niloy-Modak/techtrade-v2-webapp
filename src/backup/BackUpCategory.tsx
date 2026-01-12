import React from 'react';
import Image from 'next/image';

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, name: "Laptop", image: "/categories/laptop-icon.png" },
  { id: 2, name: "Phone", image: "/categories/phone-icon.png" },
  { id: 3, name: "Smart Watch", image: "/categories/smart-watch-icon.png" },
  { id: 4, name: "Gamepad", image: "/categories/gamepad-icon.png" },
  { id: 5, name: "Smart Watch", image: "/categories/smart-watch-icon.png" },
  { id: 6, name: "Headphone", image: "/categories/headphone-icon.png" },
  { id: 7, name: "Camera", image: "/categories/camera-icon.png" },
  { id: 8, name: "Monitor", image: "/categories/monitor-icon.png" },
  { id: 9, name: "RAM", image: "/categories/ram-icon.png" },
  { id: 10, name: "Motherboard", image: "/categories/motherboard-icon.png" },
  { id: 11, name: "SSD", image: "/categories/ssd-icon.png" },
  { id: 12, name: "Graphic Card", image: "/categories/graphic-card-icon.png" },
];

const BackUpCategory: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 rounded-lg">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Featured Category
          </h2>
          <p className="text-gray-600">
            Get Your Desired Product from Featured Category!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center cursor-pointer border border-transparent hover:border-blue-100 group"
            >
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm font-medium text-gray-800 text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackUpCategory;

