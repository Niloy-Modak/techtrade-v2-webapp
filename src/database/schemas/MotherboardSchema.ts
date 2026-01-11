// @/database/schemas/MotherboardSchema.ts
import { Schema } from "mongoose";

const MotherboardSpecsSchema = new Schema(
  {
    chipset: { type: String, required: true },
    form_factor: { type: String, required: true },
    audio: { type: String },
    memory: {
      memory_type: { type: String, required: true }, // DDR4, DDR5
      slots: { type: Number, required: true },
      max_capacity: { type: String, required: true },
      max_speed: { type: String },
    },
    graphics_ports: {
      hdmi: String,
      displayport: String,
    },
    expansion_slots: {
      pcie_x16: String,
      pcie_x1: String,
      other: [String],
    },
    storage: {
      m2_slots: String,
      sata_ports: String,
    },
    usb_ports: {
      usb_3_2_gen1: String,
      usb_2_0: String,
      usb_3_2_gen2: String,
      usb_typec: String,
    },
    lan: String,
    raid_support: String,
    features: { type: [String], default: [] },
  },
  { _id: false }
);

export default MotherboardSpecsSchema;
