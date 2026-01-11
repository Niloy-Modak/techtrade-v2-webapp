// @/database/schemas/ProcessorSchema.ts
import { Schema } from "mongoose";

const ProcessorSpecsSchema = new Schema(
  {
    clock_speed: {
      base: { type: String, required: true },
      boost: { type: String, required: true },
    },
    cores: { type: Number, required: true },
    threads: { type: Number, required: true },
    cache: {
      l2: String,
      l3: { type: String, required: true },
    },
    socket: { type: String, required: true },
    tdp: { type: String, required: true },
    memory_support: {
      memory_type: { type: String, required: true },
      max_size: { type: String, required: true },
      max_speed: { type: [String], default: [] },
      channels: { type: Number, required: true },
    },
    graphics: {
      integrated: { type: Boolean, default: false },
    },
  },
  { _id: false }
);

export default ProcessorSpecsSchema;
