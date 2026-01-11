// @/database/schemas/GamingConsoleSchema.ts
import mongoose, { Schema } from "mongoose";

const GamingConsoleSpecsSchema = new Schema(
  {
    processor: {
      chipset_type: { type: String, required: true },
      cores: Number,
      speed: String,
    },
    memory: {
      ram: { type: String, required: true },
      storage: { type: String, required: true },
      storage_type: String,
    },
    graphics: {
      chip_model: { type: String, required: true },
      memory: String,
    },
    resolution: { type: [String], required: true },
    frame_rate: String,
    hdr: { type: Boolean, default: false },
    ray_tracing: { type: Boolean, default: false },
    backward_compatibility: { type: Boolean, default: false },
    vr_support: { type: Boolean, default: false },
    disc_drive: { type: Boolean, default: false },
    ports: { type: [String], default: [] ,required: true },
    wifi: { type: String, required: true },
    bluetooth: { type: String, required: true },
  },
  { _id: false }
);

export default GamingConsoleSpecsSchema;
