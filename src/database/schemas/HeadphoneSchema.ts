// @/database/schemas/HeadphoneSchema.ts
import { Schema } from "mongoose";

const HeadphoneSpecsSchema = new Schema(
  {
    form_factor: {
      type: String,
      enum: ["over-ear", "on-ear", "in-ear", "earbuds"],
      required: true,
    },
    connectivity: {
      type: String,
      enum: ["wired", "wireless", "both"],
      required: true,
    },
    driver_size: { type: String, required: true },
    frequency_response: { type: String, required: true },
    impedance: String,
    sensitivity: String,
    microphone: { type: Boolean, default: false },
    noise_cancellation: { type: Boolean, default: false },
    battery_life: String,
    charging_time: String,
    cable_length: String,
    weight: String,
    features: { type: [String], default: [] },
  },
  { _id: false }
);

export default HeadphoneSpecsSchema;
