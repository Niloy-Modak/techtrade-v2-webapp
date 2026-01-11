// @/database/schemas/RamSchema.ts
import { Schema } from "mongoose";

const RamSpecsSchema = new Schema(
  {
    ram_type: { type: String, required: true },
    capacity: { type: String, required: true },
    frequency: { type: String, required: true },
    voltage: { type: String, required: true },
    latency: String,
    bandwidth: String,
    pin: { type: Number, required: true },
    heat_spreader: String,
    dimensions: String,
    rgb: { type: Boolean, default: false },
    features: { type: [String], default: [] },
  },
  { _id: false }
);

export default RamSpecsSchema;
