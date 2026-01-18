// HeadphoneSpace.tsx
import React from "react";
import { IHeadphoneProduct } from "@/database/types/interfaces";

type HeadphoneSpecProps = {
  specs: IHeadphoneProduct["specs"];
};

const HeadphoneSpace: React.FC<HeadphoneSpecProps> = ({ specs }) => {
    console.log(specs);
  return (
    <div>
      <h2>Headphone Specs</h2>
      <p>Driver Size: {specs.driver_size}</p>
      <p>Connectivity: {specs.connectivity}</p>
      <p>Battery Life: {specs.battery_life}</p>
    </div>
  );
};

export default HeadphoneSpace;
