// src/database/types/interfaces.ts
import { Document, Types } from "mongoose";

// ============= 1. BASE INTERFACE =============
export interface IBaseProduct extends Document {
  _id: Types.ObjectId;
  title: string;
  slug: string;
  key_features: string[];
  description: string;
  banner: string;
  images: string[];
  category: string;
  brand: string;
  product_model: string;
  price: number;
  stock: number;
  warranty: string;

  // fully type-safe specs
  specs?:
    | IPhoneProduct["specs"]
    | ILaptopProduct["specs"]
    | IHeadphoneProduct["specs"]
    | IGamingConsoleProduct["specs"]
    | IMonitorProduct["specs"]
    | ISmartWatchProduct["specs"]
    | IProcessorProduct["specs"]
    | IRamProduct["specs"]
    | ISSDProduct["specs"]
    | IGraphicsCardProduct["specs"]
    | IMotherboardProduct["specs"]
    | IDigitalCameraProduct["specs"];

  createdAt: Date;
  updatedAt: Date;
}

// ============= 2. CATEGORY INTERFACES =============

// ---- PHONE ----
export interface IPhoneProduct extends IBaseProduct {
  category: "phone";
  specs: {
    display: {
      size: string;
      type: string;
      resolution: string;
      refresh_rate?: string;
      protection?: string;
    };
    processor: {
      chipset: string;
      cpu_type: string;
      gpu?: string;
    };
    memory: {
      ram: string;
      storage: string;
      expandable?: boolean;
    };
    camera: {
      rear: string;
      front: string;
      features?: string[];
    };
    battery: {
      capacity: string;
      charging?: string;
    };
    connectivity: {
      network: string[];
      wifi: string;
      bluetooth: string;
      ports: string[];
    };
    os: string;
    dimensions?: {
      height: string;
      width: string;
      thickness: string;
      weight: string;
    };
  };
}

// ---- LAPTOP ----
export interface ILaptopProduct extends IBaseProduct {
  category: "laptop";
  specs: {
    processor: {
      brand: string;
      chip_model: string;
      generation: string;
      cores: number;
      threads?: number;
      speed?: string;
    };
    display: {
      size: string;
      type: string;
      resolution: string;
      refresh_rate?: string;
      brightness?: string;
    };
    memory: {
      ram: string;
      type?: string;
      speed?: string;
      slots?: number;
      max?: string;
    };
    storage: {
      type: string;
      capacity: string;
      interface?: string;
    };
    graphics: {
      type: "integrated" | "dedicated";
      chip_model?: string;
      memory?: string;
    };
    ports: {
      usb: string[];
      hdmi: string;
      audio: string;
      other?: string[];
    };
    battery: {
      capacity: string;
      life?: string;
    };
    os: string;
    weight?: string;
  };
}

// ---- HEADPHONE ----
export interface IHeadphoneProduct extends IBaseProduct {
  category: "headphone";
  specs: {
    form_factor: "over-ear" | "on-ear" | "in-ear" | "earbuds";
    connectivity: "wired" | "wireless" | "both";
    driver_size: string;
    frequency_response: string;
    impedance?: string;
    sensitivity?: string;
    microphone: boolean;
    noise_cancellation?: boolean;
    battery_life?: string;
    charging_time?: string;
    cable_length?: string;
    weight: string;
    features: string[];
  };
}

// ---- GAMING CONSOLE ----
export interface IGamingConsoleProduct extends IBaseProduct {
  category: "gaming_console";
  specs: {
    processor: {
      chipset_type: string;
      cores?: number;
      speed?: string;
    };
    memory: {
      ram: string;
      storage: string;
      storage_type?: string;
    };
    graphics: {
      chip_model: string;
      memory?: string;
    };
    resolution: string[];
    frame_rate?: string;
    hdr?: boolean;
    ray_tracing?: boolean;
    backward_compatibility?: boolean;
    vr_support?: boolean;
    disc_drive?: boolean;
    ports: string[];
    wifi: string;
    bluetooth: string;
  };
}

// ---- MONITOR ----
export interface IMonitorProduct extends IBaseProduct {
  category: "monitor";
  specs: {
    display: {
      size: string;
      type: string;
      panel_type: string;
      resolution: string;
      aspect_ratio?: string;
      refresh_rate: string;
      response_time: string;
      brightness: string;
      viewing_angle: {
        horizontal: string;
        vertical: string;
      };
      contrast_ratio_static?: string;
      contrast_ratio_dynamic?: string;
      curvature?: string;
      color_support?: string;
    };
    audio?: {
      speaker_built_in: boolean;
    };
    connectivity: {
      vga?: string | null;
      hdmi?: string | null;
      display_port?: string | null;
    };
    physical: {
      vesa_wall_mount: boolean;
      color?: string;
      weight?: string;
    };
  };
}

// ---- SMART WATCH ----
export interface ISmartWatchProduct extends IBaseProduct {
  category: "smart_watch";
  specs: {
    display: {
      size: string;
      display_type: string;
      resolution: string;
    };

    processor: string;

    battery: {
      capacity: string;
    };

    connectivity: {
      bluetooth: string;
      bluetooth_calling: boolean;
    };

    health_tracking: {
      heart_rate: boolean;
      spo2: boolean;
    };

    sports_modes: number;

    waterproof?: string;

    compatible_os: string[];

    sensors?: string[];

    languages?: string[];

    materials?: {
      case: string;
      strap: string;
    };

    features: string[];
  };
}

// ---- PROCESSOR ----
export interface IProcessorProduct extends IBaseProduct {
  category: "processor";
  specs: {
    clock_speed: {
      base: string;
      boost: string;
    };
    cores: number;
    threads: number;
    cache: {
      l2?: string;
      l3: string;
    };
    socket: string;
    tdp: string;
    memory_support: {
      memory_type: string;
      max_size: string;
      max_speed?: string[];
      channels: number;
    };
    graphics: {
      integrated: boolean;
    };
  };
}

// ---- RAM ----
export interface IRamProduct extends IBaseProduct {
  category: "ram";
  specs: {
    ram_type: string;
    capacity: string;
    frequency: string;
    voltage: string;
    latency?: string;
    bandwidth?: string;
    pin: number;
    heat_spreader?: string;
    dimensions?: string;
    rgb: boolean;
    features: string[];
  };
}

// ---- SSD ----
export interface ISSDProduct extends IBaseProduct {
  category: "ssd";
  specs: {
    capacity: string;
    interface: string;
    form_factor: string;
    speed: { read: string; write: string };
    flash_type: string;
    endurance: string;
    mtbf?: string;
    encryption?: string;
    temperature?: { operating: string; storage: string };
    shock_resistance?: string;
    weight?: string;
  };
}

// ---- GRAPHICS CARD ----
export interface IGraphicsCardProduct extends IBaseProduct {
  category: "graphics_card";
  specs: {
    chipset: string;
    cuda_cores: number;
    clocks: { base: string; boost: string; memory: string };
    memory: {
      size: string;
      memory_type: string;
      bus: string;
      bandwidth: string;
    };
    outputs: { display_port: string; hdmi: string; max_displays: string };
    power: { connectors: string; recommended_psu: string; consumption: string };
    apis: { directx: string; opengl: string };
    features: string[];
    physical: { dimensions: string };
  };
}

// ---- DIGITAL CAMERA ----
export interface IDigitalCameraProduct extends IBaseProduct {
  category: "digital_camera";
  specs: {
    image_sensor: {
      sensor: string;
      effective_pixels: string;
      total_pixels: string;
    };
    camera_detail: {
      monitor: string;
      media: string[];
      audio: {
        microphone?: string;
        speaker?: string;
      };
      interface: {
        pc_interface?: string;
        bluetooth?: string;
      };
      power: {
        battery?: string;
        external_power?: string;
        power_consumption?: {
          still_images?: string;
          movies?: string;
        };
      };
    };
    lens: {
      lens_type?: string;
    };
    focus: {
      focus_type?: string;
      normal_focus_area?: string;
    };
    shutter: {
      still_image?: string;
      motion_image?: string;
    };
    recording: {
      recording_modes?: string[];
    };
    exposure: {
      exposure?: string;
      exposure_compensation?: string;
      auto_ae_bracketing?: string;
      light_metering?: string;
      iso_sensitivity?: {
        still_images?: string;
        movies?: string;
      };
    };
    picture_quality: {
      still_picture?: string;
      image_quality?: string;
      white_balance?: string;
      photo_style?: string;
      color_modes?: string;
    };
    key_features: {
      model?: string;
      sensor?: string;
      megapixels?: string;
      display?: string;
      video?: string;
    };
    waterproof?: boolean;
    languages?: string[];
    features?: string[];
  };
}

// ---- MOTHERBOARD ----
export interface IMotherboardProduct extends IBaseProduct {
  category: "motherboard";
  specs: {
    chipset: string;
    form_factor: string;
    audio?: string;
    memory: {
      memory_type: string; // DDR4, DDR5
      slots: number;
      max_capacity: string;
      max_speed?: string;
    };
    graphics_ports?: {
      hdmi?: string;
      displayport?: string;
    };
    expansion_slots?: {
      pcie_x16?: string;
      pcie_x1?: string;
      other?: string[];
    };
    storage?: {
      m2_slots?: string;
      sata_ports?: string;
    };
    usb_ports?: {
      usb_3_2_gen1?: string;
      usb_2_0?: string;
      usb_3_2_gen2?: string;
      usb_typec?: string;
    };
    lan?: string;
    raid_support?: string;
    features?: string[];
  };
}

// ============= 3. UNION TYPE =============
export type ProductDocument =
  | IPhoneProduct
  | ILaptopProduct
  | IHeadphoneProduct
  | IGamingConsoleProduct
  | IMonitorProduct
  | ISmartWatchProduct
  | IProcessorProduct
  | IRamProduct
  | ISSDProduct
  | IGraphicsCardProduct
  | IDigitalCameraProduct
  | IMotherboardProduct;
