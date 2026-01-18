// LaptopSpec.tsx
import React from "react";
import { ILaptopProduct } from "@/database/types/interfaces";

type LaptopSpecProps = {
  specs: ILaptopProduct["specs"];
};

const LaptopSpec: React.FC<LaptopSpecProps> = ({ specs }) => {
    // console.log(specs);
  return (
    <div>
      <h2>Laptop Specs</h2>
      <p>
        CPU: {specs.processor.brand} {specs.processor.chip_model}
      </p>
      <p>
        Display: {specs.display.size} - {specs.display.resolution}
      </p>
      <p>RAM: {specs.memory.ram}</p>
    </div>
  );
};

export default LaptopSpec;
