// @/database/schemas/MonitorSchema.ts
import { Schema } from "mongoose";

const MonitorSpecsSchema = new Schema(
  {
    display: {
      size: { type: String, required: true },
      type: { type: String, required: true },
      panel_type: { type: String, required: true },
      resolution: { type: String, required: true },
      aspect_ratio: String,
      refresh_rate: { type: String, required: true },
      response_time: { type: String, required: true },
      brightness: { type: String, required: true },
      viewing_angle: {
        horizontal: { type: String, required: true },
        vertical: { type: String, required: true },
      },
      contrast_ratio_static: String,
      contrast_ratio_dynamic: String,
      curvature: String,
      color_support: String,
    },
    audio: {
      speaker_built_in: { type: Boolean, default: false },
    },
    connectivity: {
      vga: { type: String, default: null },
      hdmi: { type: String, default: null },
      display_port: { type: String, default: null },
    },
    physical: {
      vesa_wall_mount: { type: Boolean, default: false },
      color: String,
      weight: String,
    },
  },
  { _id: false }
);

export default MonitorSpecsSchema;
