// @/database/schemas/SmartWatchSchema.ts
import { Schema } from "mongoose";

const SmartWatchSpecsSchema = new Schema(
  {
    display: {
      size: { type: String, required: true },
      display_type: { type: String, required: true },
      resolution: { type: String, required: true },
    },

    processor: { type: String, required: true },

    battery: {
      capacity: { type: String, required: true },
    },

    connectivity: {
      bluetooth: { type: String, required: true },
      bluetooth_calling: { type: Boolean, default: false },
    },

    health_tracking: {
      heart_rate: { type: Boolean, default: false },
      spo2: { type: Boolean, default: false },
    },

    sports_modes: { type: Number, default: 0 },

    waterproof: { type: String },

    compatible_os: { type: [String], default: [] },

    sensors: { type: [String], default: [] },

    languages: { type: [String], default: [] },

    materials: {
      case: { type: String },
      strap: { type: String },
    },

    features: { type: [String], default: [] },
  },
  { _id: false }
);

export default SmartWatchSpecsSchema;
