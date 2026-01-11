// @/database/schemas/DigitalCameraSchema.ts
import mongoose, { Schema } from "mongoose";

const DigitalCameraSpecsSchema = new Schema(
  {
    image_sensor: {
      sensor: { type: String, required: true },
      effective_pixels: { type: String, required: true },
      total_pixels: { type: String, required: true },
    },
    camera_detail: {
      monitor: { type: String, required: true },
      media: { type: [String], default: [] },
      audio: {
        microphone: String,
        speaker: String,
      },
      interface: {
        pc_interface: String,
        bluetooth: String,
      },
      power: {
        battery: String,
        external_power: String,
        power_consumption: {
          still_images: String,
          movies: String,
        },
      },
    },
    lens: {
      lens_type: String,
    },
    focus: {
      focus_type: String,
      normal_focus_area: String,
    },
    shutter: {
      still_image: String,
      motion_image: String,
    },
    recording: {
      recording_modes: { type: [String], default: [] },
    },
    exposure: {
      exposure: String,
      exposure_compensation: String,
      auto_ae_bracketing: String,
      light_metering: String,
      iso_sensitivity: {
        still_images: String,
        movies: String,
      },
    },
    picture_quality: {
      still_picture: String,
      image_quality: String,
      white_balance: String,
      photo_style: String,
      color_modes: String,
    },
    key_features: {
      model: String,
      sensor: String,
      megapixels: String,
      display: String,
      video: String,
    },
    waterproof: { type: Boolean, default: false },
    languages: { type: [String], default: [] },
    features: { type: [String], default: [] },
  },
  { _id: false }
);

export default DigitalCameraSpecsSchema;
