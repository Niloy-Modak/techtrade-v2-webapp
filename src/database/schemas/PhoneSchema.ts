// @/database/schemas/PhoneSchema.ts
import { Schema } from "mongoose";

const PhoneSpecsSchema = new Schema(
  {
    // Display
    display: {
      size: { type: String, required: true },
      type: { type: String, required: true },
      resolution: { type: String, required: true },
      refresh_rate: String,
      protection: String,
    },

    // Processor
    processor: {
      chipset: { type: String, required: true },
      cpu_type: { type: String, required: true },
      gpu: String,
    },

    // Memory
    memory: {
      ram: { type: String, required: true },
      storage: { type: String, required: true },
      expandable: Boolean,
    },

    // Camera
    camera: {
      rear: { type: String, required: true },
      front: { type: String, required: true },
      features: [String],
    },

    // Battery
    battery: {
      capacity: { type: String, required: true },
      charging: String,
    },

    // Connectivity
    connectivity: {
      network: [String],
      wifi: String,
      bluetooth: String,
      ports: [String],
    },

    // Software
    os: { type: String, required: true },

    // Physical
    dimensions: {
      height: String,
      width: String,
      thickness: String,
      weight: String,
    },
  },
  { _id: false }
); // Don't create _id for subdocuments

export default PhoneSpecsSchema;
