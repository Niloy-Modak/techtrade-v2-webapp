// @/database/schemas/LaptopSchema.ts
import mongoose, { Schema } from 'mongoose';

const LaptopSpecsSchema = new Schema({
  processor: {
    brand: { type: String, required: true },
    chip_model: { type: String, required: true }, 
    generation: String,
    cores: { type: Number, required: true },
    threads: Number,
    speed: String,
  },
  display: {
    size: { type: String, required: true },
    type: { type: String, required: true },
    resolution: { type: String, required: true },
    refresh_rate: { type: String, required: true },
    brightness: String,
  },
  memory: {
    ram: { type: String, required: true },
    type: { type: String, required: true },
    speed: { type: String, required: true },
    slots: Number,
    max: String,
  },
  storage: {
    type: { type: String, required: true },
    capacity: { type: String, required: true },
    interface: String,
  },
  graphics: {
    type: { type: String, enum: ['integrated', 'dedicated'], required: true },
    chip_model: { type: String, required: true },
    memory: { type: String, required: true },
  },
  ports: {
    usb: [String],
    hdmi: String,
    audio: String,
    other: [String],
  },
  battery: {
    capacity: { type: String, required: true },
    life: String,
  },
  os: { type: String, required: true },
  weight: String,
}, { _id: false }); // no _id for nested specs

export default LaptopSpecsSchema;
