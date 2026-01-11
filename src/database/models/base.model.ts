// @/database/models/base.model.ts
import mongoose, { Schema, Model } from "mongoose";

import PhoneSpecsSchema from "@/database/schemas/PhoneSchema";
import LaptopSpecsSchema from "@/database/schemas/LaptopSchema";
import HeadphoneSpecsSchema from "@/database/schemas/HeadphoneSchema";
import GamingConsoleSpecsSchema from "@/database/schemas/GamingConsoleSchema";
import MonitorSpecsSchema from "@/database/schemas/MonitorSchema";
import ProcessorSpecsSchema from "@/database/schemas/ProcessorSchema";
import RamSpecsSchema from "@/database/schemas/RamSchema";
import SmartWatchSpecsSchema from "@/database/schemas/SmartWatchSchema";
import SSDSpecsSchema from "@/database/schemas/SsdSchema";
import GraphicsCardSpecsSchema from "@/database/schemas/GraphicsCardSchema";

import type {
  IBaseProduct,
  IPhoneProduct,
  ILaptopProduct,
  IHeadphoneProduct,
  IGamingConsoleProduct,
  IMonitorProduct,
  IProcessorProduct,
  IRamProduct,
  ISmartWatchProduct,
  ISSDProduct,
  IGraphicsCardProduct,
  IDigitalCameraProduct,
  IMotherboardProduct,
} from "@/database/types/interfaces";
import DigitalCameraSpecsSchema from "../schemas/DigitalCameraSchema";
import MotherboardSpecsSchema from "../schemas/MotherboardSchema";

// ================= 1. SLUG HELPER =================
const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// ================= 2. BASE SCHEMA =================
const BaseProductSchema = new Schema<IBaseProduct>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    slug: { type: String, unique: true },
    key_features: {
      type: [String],
      required: true,
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: "At least 1 key feature is required",
      },
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 2000,
    },
    banner: { type: String, required: true },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (arr: string[]) => arr.length > 0 && arr.length <= 10,
        message: "You must provide 1 to 10 images",
      },
    },
    category: {
      type: String,
      required: true,
      enum: [
        "phone",
        "laptop",
        "headphone",
        "gaming_console",
        "monitor",
        "smart_watch",
        "processor",
        "ram",
        "ssd",
        "graphics_card",
        "digital_camera",
        "motherboard",
      ],
      index: true,
    },
    brand: { type: String, required: true, trim: true, index: true },
    product_model: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0, index: true },
    stock: { type: Number, default: 0, min: 0 },
    warranty: { type: String, default: "No warranty" },
    specs: { type: Schema.Types.Mixed }, // will be overridden by discriminators
  },
  { timestamps: true, discriminatorKey: "category", versionKey: false }
);

// ================= 3. INDEXES =================
BaseProductSchema.index({ slug: 1 }, { unique: true });
BaseProductSchema.index({ title: "text", description: "text" });
BaseProductSchema.index({ createdAt: -1 });
BaseProductSchema.index({ category: 1, brand: 1, product_model: 1 });

// ================= 4. SLUG AUTO-GENERATION =================
BaseProductSchema.pre("save", function () {
  if (!this.slug) this.slug = slugify(this.title);
});

// ================= 5. BASE MODEL =================
export const Product: Model<IBaseProduct> = mongoose.model(
  "Product",
  BaseProductSchema
);

// ================= 6. HELPER FOR CREATING DISCRIMINATORS =================
function createDiscriminator<T extends IBaseProduct>(
  name: string,
  specsSchema: Schema
) {
  return Product.discriminator<T>(
    name,
    new Schema(
      {
        specs: specsSchema, // ✅ nested schema works correctly
      },
      { _id: false }
    )
  );
}

// ================= 7. CATEGORY DISCRIMINATORS =================
export const PhoneProduct = createDiscriminator<IPhoneProduct>(
  "phone",
  PhoneSpecsSchema
);
export const LaptopProduct = createDiscriminator<ILaptopProduct>(
  "laptop",
  LaptopSpecsSchema
);
export const HeadphoneProduct = createDiscriminator<IHeadphoneProduct>(
  "headphone",
  HeadphoneSpecsSchema
);
export const GamingConsoleProduct = createDiscriminator<IGamingConsoleProduct>(
  "gaming_console",
  GamingConsoleSpecsSchema
);
export const MonitorProduct = createDiscriminator<IMonitorProduct>(
  "monitor",
  MonitorSpecsSchema
);
export const ProcessorProduct = createDiscriminator<IProcessorProduct>(
  "processor",
  ProcessorSpecsSchema
);
export const RamProduct = createDiscriminator<IRamProduct>(
  "ram",
  RamSpecsSchema
);
export const SmartWatchProduct = createDiscriminator<ISmartWatchProduct>(
  "smart_watch",
  SmartWatchSpecsSchema
);
export const SSDProduct = createDiscriminator<ISSDProduct>(
  "ssd",
  SSDSpecsSchema
);
export const GraphicsCardProduct = createDiscriminator<IGraphicsCardProduct>(
  "graphics_card",
  GraphicsCardSpecsSchema
);

export const DigitalCameraProduct = createDiscriminator<IDigitalCameraProduct>(
  "digital_camera",
  DigitalCameraSpecsSchema
);
export const MotherboardProduct = createDiscriminator<IMotherboardProduct>(
  "motherboard",
  MotherboardSpecsSchema
);
