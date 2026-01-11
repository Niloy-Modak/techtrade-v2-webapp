// @/database/schemas/GraphicsCardSchema.ts
import mongoose, { Schema } from "mongoose";

const GraphicsCardSpecsSchema = new Schema(
  {
    chipset: { type: String, required: true },
    cuda_cores: { type: Number, required: true },
    clocks: {
      base: { type: String, required: true },
      boost: { type: String, required: true },
      memory: { type: String, required: true },
    },
    memory: {
      size: { type: String, required: true },
      memory_type: { type: String, required: true },
      bus: { type: String, required: true },
      bandwidth: { type: String, required: true },
    },
    outputs: {
      display_port: { type: String, required: true },
      hdmi: { type: String, required: true },
      max_displays: { type: String, required: true },
    },
    power: {
      connectors: { type: String, required: true },
      recommended_psu: { type: String, required: true },
      consumption: { type: String, required: true },
    },
    apis: {
      directx: { type: String, required: true },
      opengl: { type: String, required: true },
    },
    features: { type: [String], default: [] },
    physical: {
      dimensions: { type: String, required: true },
    },
  },
  { _id: false }
);

export default GraphicsCardSpecsSchema;
