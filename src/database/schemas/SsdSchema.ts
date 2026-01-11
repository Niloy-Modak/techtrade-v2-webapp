// @/database/schemas/SsdSchema.ts
import { Schema } from "mongoose";

const SSDSpecsSchema = new Schema(
  {
    capacity: { type: String, required: true },
    interface: { type: String, required: true },
    form_factor: { type: String, required: true },
    speed: {
      read: { type: String, required: true },
      write: { type: String, required: true },
    },
    flash_type: { type: String, required: true },
    endurance: { type: String, required: true },
    mtbf: String,
    encryption: String,
    temperature: {
      operating: String,
      storage: String,
    },
    shock_resistance: String,
    weight: String,
  },
  { _id: false }
);

export default SSDSpecsSchema;
