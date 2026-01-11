import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import {
  PhoneProduct,
  LaptopProduct,
  HeadphoneProduct,
  GamingConsoleProduct,
  MonitorProduct,
  SmartWatchProduct,
  ProcessorProduct,
  RamProduct,
  SSDProduct,
  GraphicsCardProduct,
  DigitalCameraProduct,
  MotherboardProduct,
} from "../src/database/models/base.model";

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/testdb";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

async function sampleData() {
  // clear all existing products
  await Promise.all([
    PhoneProduct.deleteMany({}),
    LaptopProduct.deleteMany({}),
    HeadphoneProduct.deleteMany({}),
    GamingConsoleProduct.deleteMany({}),
    MonitorProduct.deleteMany({}),
    SmartWatchProduct.deleteMany({}),
    ProcessorProduct.deleteMany({}),
    RamProduct.deleteMany({}),
    SSDProduct.deleteMany({}),
    GraphicsCardProduct.deleteMany({}),
    DigitalCameraProduct.deleteMany({}),
    MotherboardProduct.deleteMany({}),
  ]);

  // 1 phone
  await PhoneProduct.create({
    title: "iPhone 16 Pro",
    key_features: ["Face ID", "Triple Camera", "5G Support"],
    description: "Latest iPhone with advanced camera and performance.",
    banner: "https://example.com/iphone14-banner.jpg",
    images: [
      "https://example.com/iphone14-1.jpg",
      "https://example.com/iphone14-2.jpg",
    ],
    category: "phone",
    brand: "Apple",
    product_model: "iPhone 14 Pro",
    price: 1099,
    stock: 50,
    warranty: "1 year",
    specs: {
      display: { size: "6.1 inch", type: "OLED", resolution: "2532x1170" },
      processor: { chipset: "A16 Bionic", cpu_type: "Hexa-core" },
      memory: { ram: "6GB", storage: "128GB" },
      camera: { rear: "48MP+12MP+12MP", front: "12MP" },
      battery: { capacity: "3200mAh" },
      connectivity: {
        network: ["5G", "4G"],
        wifi: "802.11ax",
        bluetooth: "5.3",
        ports: ["Lightning"],
      },
      os: "iOS 16",
    },
  });

  // 2 laptop
  await LaptopProduct.create({
    title: "ASUS ROG Zephyrus G14",
    description: "High-performance gaming laptop.",
    key_features: ["165Hz Display", "RTX 4070"],
    banner: "https://example.com/banner.jpg",
    images: [
      "https://example.com/iphone14-1.jpg",
      "https://example.com/iphone14-2.jpg",
    ],
    category: "laptop",
    brand: "ASUS",
    product_model: "G14-2024",
    price: 1899,
    stock: 10,
    warranty: "1 Year",
    specs: {
      processor: {
        brand: "AMD",
        chip_model: "Ryzen 9",
        generation: "3rd gen",
        cores: 8,
        threads: 16,
        speed: "4.0GHz",
      },
      display: {
        size: "14 inch",
        type: "OLED",
        resolution: "2.5K",
        refresh_rate: "165Hz",
        brightness: "200 neds",
      },
      memory: {
        ram: "32GB",
        type: "DDR5",
        speed: "4800MHz",
        slots: 2,
        max: "64GB",
      },
      storage: {
        type: "SSD",
        capacity: "1TB",
        interface: "NVMe",
      },
      graphics: {
        type: "dedicated",
        chip_model: "RTX 4070",
        memory: "8GB",
      },
      ports: { usb: ["USB-C"], hdmi: "2.1", audio: "Jack" },
      battery: { capacity: "76Wh" },
      os: "Windows 11",
    },
  });

  // 3 Gaming Console Product
  await GamingConsoleProduct.create({
    title: "PlayStation 5 Slim",
    description:
      "Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion with support for haptic feedback.",
    key_features: [
      "4K-TV Gaming",
      "Ultra-High Speed SSD",
      "Ray Tracing Support",
    ],
    banner: "https://example.com/ps5-banner.jpg",
    images: ["https://example.com/ps5-1.jpg", "https://example.com/ps5-2.jpg"],
    category: "gaming_console",
    brand: "Sony",
    product_model: "CFI-2000",
    price: 499.99,
    stock: 45,
    warranty: "1 Year Official",
    // This must match your GamingConsoleSpecsSchema exactly
    specs: {
      processor: {
        chipset_type: "AMD Ryzen Zen 2",
        cores: 8,
        speed: "3.5 GHz",
      },
      memory: {
        ram: "16GB GDDR6",
        storage: "1TB Custom SSD",
        storage_type: "NVMe",
      },
      graphics: {
        chip_model: "AMD Radeon RDNA 2",
        memory: "Variable",
      },
      resolution: ["4K", "1440p", "1080p"],
      frame_rate: "120fps",
      hdr: true,
      ray_tracing: true,
      backward_compatibility: true,
      vr_support: true,
      disc_drive: true,
      ports: ["HDMI 2.1", "USB-C", "USB-A", "Gigabit Ethernet"],
      wifi: "Wi-Fi 6",
      bluetooth: "5.1",
    },
  });

  // 4 Headphone product
  await HeadphoneProduct.create({
    title: "Sony WH-1000XM5",
    description:
      "Premium wireless noise-cancelling headphones with crystal clear sound and long battery life.",
    key_features: [
      "Active Noise Cancellation",
      "30 Hours Battery",
      "Fast Charging",
      "Touch Controls",
    ],
    banner: "https://example.com/sony-xm5-banner.jpg",
    images: [
      "https://example.com/sony-xm5-1.jpg",
      "https://example.com/sony-xm5-2.jpg",
    ],
    category: "headphone",
    brand: "Sony",
    product_model: "WH-1000XM5",
    price: 399.99,
    stock: 30,
    warranty: "1 Year Official",

    specs: {
      form_factor: "over-ear",
      connectivity: "wireless",
      driver_size: "30mm",
      frequency_response: "4Hz - 40kHz",
      impedance: "48 ohms",
      sensitivity: "102 dB",
      microphone: true,
      noise_cancellation: true,
      battery_life: "30 hours",
      charging_time: "3 hours",
      cable_length: "1.2m",
      weight: "250g",
      features: [
        "Active Noise Cancellation",
        "Touch Controls",
        "Multipoint Bluetooth",
        "Fast Charging",
      ],
    },
  });

  // 5 Monitor product
  await MonitorProduct.create({
    title: "Samsung Odyssey G5",
    description:
      "Curved gaming monitor with high refresh rate and smooth visuals.",
    key_features: ["144Hz Refresh Rate", "1ms Response Time", "Curved Display"],
    banner: "https://example.com/odyssey-g5-banner.jpg",
    images: [
      "https://example.com/odyssey-g5-1.jpg",
      "https://example.com/odyssey-g5-2.jpg",
    ],
    category: "monitor",
    brand: "Samsung",
    product_model: "Odyssey G5 LC27G55",
    price: 329.99,
    stock: 20,
    warranty: "1 Year Official",

    specs: {
      display: {
        size: "27 inch",
        type: "LED",
        panel_type: "VA",
        resolution: "2560x1440 (QHD)",
        aspect_ratio: "16:9",
        refresh_rate: "144Hz",
        response_time: "1ms",
        brightness: "300 nits",
        viewing_angle: {
          horizontal: "178°",
          vertical: "178°",
        },
        contrast_ratio_static: "2500:1",
        contrast_ratio_dynamic: "1000000:1",
        curvature: "1000R",
        color_support: "sRGB 99%",
      },
      audio: {
        speaker_built_in: false,
      },
      connectivity: {
        vga: null,
        hdmi: "2 x HDMI 2.0",
        display_port: "1 x DisplayPort 1.2",
      },
      physical: {
        vesa_wall_mount: true,
        color: "Black",
        weight: "4.5kg",
      },
    },
  });

  // 6 Smart Watch Product
  await SmartWatchProduct.create({
    title: "COLMI P71 Smart Watch",
    description:
      "Smartwatch with 1.9-inch IPS HD display, Bluetooth calling, heart rate monitoring, SpO2 tracking, 104 sport modes, and IP68 waterproof rating.",
    key_features: [
      "1.9 inch IPS HD Display",
      "Bluetooth Calling",
      "Heart Rate & SpO2 Monitoring",
      "104 Sports Modes",
      "IP68 Waterproof",
    ],
    banner: "https://example.com/colmi-p71-banner.jpg",
    images: [
      "https://example.com/colmi-p71-1.jpg",
      "https://example.com/colmi-p71-2.jpg",
      "https://example.com/colmi-p71-3.jpg",
    ],
    category: "smart_watch",
    brand: "COLMI",
    product_model: "P71",
    price: 1480,
    stock: 50,
    warranty: "6 Months",

    specs: {
      display: {
        size: "1.9 inch",
        display_type: "IPS HD",
        resolution: "240x286 pixels",
      },

      processor: "RTL8763EWE",

      battery: {
        capacity: "230mAh",
      },

      connectivity: {
        bluetooth: "Bluetooth 5.1",
        bluetooth_calling: true,
      },

      health_tracking: {
        heart_rate: true,
        spo2: true,
      },

      sports_modes: 104,

      waterproof: "IP68",

      compatible_os: ["Android 4.4+", "iOS 8.0+", "HarmonyOS"],

      sensors: ["VP60A HR Sensor"],

      languages: [
        "Simplified Chinese",
        "English",
        "German",
        "Japanese",
        "Spanish",
        "Italian",
        "French",
        "Greek",
        "Dutch",
        "Portuguese",
        "Russian",
        "Turkish",
        "Korean",
        "Polish",
        "Romanian",
        "Thai",
        "Vietnamese",
        "Indonesian",
        "Hebrew",
        "Malaysian Malay",
        "Ukrainian",
      ],

      materials: {
        case: "ABS+PC",
        strap: "Silicone",
      },

      features: [
        "Bluetooth calling",
        "Heart rate monitoring",
        "SpO2 tracking",
        "Multiple sport modes",
        "Built-in games",
        "Calculator",
        "IP68 waterproof",
      ],
    },
  });

  // 7 Processor product
  await ProcessorProduct.create({
    title: "Intel Core i9-13900K",
    description:
      "13th Gen Intel Core processor with high performance for gaming and content creation.",
    key_features: [
      "24 Cores (8 Performance + 16 Efficient)",
      "32 Threads",
      "Supports DDR5-5600 & DDR4-3200",
      "Integrated Intel UHD Graphics 770",
    ],
    banner: "https://example.com/i9-13900k-banner.jpg",
    images: [
      "https://example.com/i9-13900k-1.jpg",
      "https://example.com/i9-13900k-2.jpg",
    ],
    category: "processor",
    brand: "Intel",
    product_model: "i9-13900K",
    price: 699.99,
    stock: 15,
    warranty: "3 Years",

    specs: {
      clock_speed: {
        base: "3.0 GHz",
        boost: "5.8 GHz",
      },
      cores: 24,
      threads: 32,
      cache: {
        l2: "32MB",
        l3: "36MB",
      },
      socket: "LGA1700",
      tdp: "125W",
      memory_support: {
        memory_type: "DDR5",
        max_size: "128GB",
        max_speed: ["5200 MHz", "5600 MHz"],
        channels: 2,
      },
      graphics: {
        integrated: true,
      },
    },
  });

  // 8 Ram Product
  await RamProduct.create({
    title: "Corsair Vengeance LPX",
    description: "High-performance DDR4 RAM for gaming and overclocking.",
    key_features: [
      "High-speed DDR4",
      "Low profile heat spreader",
      "Overclockable",
    ],
    banner: "https://example.com/vengeance-lpx-banner.jpg",
    images: [
      "https://example.com/vengeance-lpx-1.jpg",
      "https://example.com/vengeance-lpx-2.jpg",
    ],
    category: "ram",
    brand: "Corsair",
    product_model: "Vengeance LPX 16GB",
    price: 89.99,
    stock: 60,
    warranty: "1 Year Official",

    specs: {
      ram_type: "DDR4",
      capacity: "16GB",
      frequency: "3200MHz",
      voltage: "1.35V",
      latency: "CL16",
      bandwidth: "25.6 GB/s",
      pin: 288,
      heat_spreader: "Aluminum",
      dimensions: "133.35 x 30 x 7 mm",
      rgb: false,
      features: ["Overclockable", "Low profile"],
    },
  });

  //9 SSD Product
  await SSDProduct.create({
    title: "Samsung 980 PRO",
    description:
      "High-performance NVMe SSD for gaming, content creation, and professional workloads.",
    key_features: [
      "PCIe 4.0 NVMe Interface",
      "Read up to 7000 MB/s, Write up to 5000 MB/s",
      "Endurance up to 600 TBW",
      "AES 256-bit Encryption",
    ],
    banner: "https://example.com/samsung-980pro-banner.jpg",
    images: [
      "https://example.com/samsung-980pro-1.jpg",
      "https://example.com/samsung-980pro-2.jpg",
      "https://example.com/samsung-980pro-3.jpg",
    ],
    category: "ssd",
    brand: "Samsung",
    product_model: "980 PRO 1TB",
    price: 199.99,
    stock: 40,
    warranty: "5 Years",

    specs: {
      capacity: "1TB",
      interface: "PCIe Gen4 x4 NVMe 1.3c",
      form_factor: "M.2 2280",
      speed: {
        read: "7000 MB/s",
        write: "5000 MB/s",
      },
      flash_type: "V-NAND 3-bit MLC",
      endurance: "600 TBW",
      mtbf: "1.5 Million Hours",
      encryption: "AES 256-bit",
      temperature: {
        operating: "0°C ~ 70°C",
        storage: "-40°C ~ 85°C",
      },
      shock_resistance: "1500G / 0.5ms",
      weight: "8.0g",
    },
  });

  //10 Graphics Card Product
  await GraphicsCardProduct.create({
    title: "NVIDIA GeForce RTX 4090",
    description:
      "Flagship NVIDIA GPU with extreme performance for gaming, rendering, and AI workloads.",
    key_features: [
      "24GB GDDR6X Memory",
      "16384 CUDA Cores",
      "4K & 8K Gaming",
      "Ray Tracing & DLSS 3.0",
    ],
    banner: "https://example.com/rtx4090-banner.jpg",
    images: [
      "https://example.com/rtx4090-1.jpg",
      "https://example.com/rtx4090-2.jpg",
    ],
    category: "graphics_card",
    brand: "NVIDIA",
    product_model: "RTX 4090",
    price: 1599.99,
    stock: 12,
    warranty: "3 Years Official",

    specs: {
      chipset: "AD102",
      cuda_cores: 16384,
      clocks: {
        base: "2235 MHz",
        boost: "2520 MHz",
        memory: "21 Gbps",
      },
      memory: {
        size: "24GB",
        memory_type: "GDDR6X",
        bus: "384-bit",
        bandwidth: "1,008 GB/s",
      },
      outputs: {
        display_port: "3 x DisplayPort 1.4a",
        hdmi: "1 x HDMI 2.1",
        max_displays: "4",
      },
      power: {
        connectors: "1 x 16-pin",
        recommended_psu: "850W",
        consumption: "450W",
      },
      apis: {
        directx: "12 Ultimate",
        opengl: "4.6",
      },
      features: [
        "Ray Tracing",
        "DLSS 3.0",
        "VR Ready",
        "NVIDIA Reflex",
        "PCIe 4.0",
      ],
      physical: {
        dimensions: "304mm x 137mm x 61mm",
      },
    },
  });

  //11 Digital Camera Product
  await DigitalCameraProduct.create({
    title:
      "Sony ZV-E10 24.2MP 4K Touchscreen Vlogging Digital Camera with 16-50mm Lens",
    key_features: [
      "24.2MP Exmor CMOS Sensor",
      "4K Video Recording",
      "3-inch Touchscreen LCD",
      "Fast Hybrid AF",
      "Built-in Stereo Microphone",
    ],
    description:
      "A vlogging-focused APS-C mirrorless camera with 24.2MP Exmor CMOS sensor, 4K video recording, 3-inch touchscreen LCD, Fast Hybrid AF, and built-in stereo microphone. Includes 16-50mm power zoom lens, supports various memory cards, and features Bluetooth connectivity.",
    banner: "(image_link)",
    images: ["(image link 1)", "(image link 2)", "(image link 3)"],
    category: "digital_camera",
    brand: "Sony",
    product_model: "ZV-E10",
    price: 77088,
    stock: 20,
    warranty: "No warranty",

    specs: {
      key_features: {
        model: "ZV-E10",
        sensor: "Large APS-C type (23.5 x 15.6 mm), Exmor CMOS sensor",
        megapixels: "Approx. 24.2 megapixels (Effective)",
        display: "3.0-inch TFT touchscreen",
        video: "4K video with oversampling for greater detail",
      },
      image_sensor: {
        sensor: "Exmor CMOS sensor",
        effective_pixels: "Approx. 24.2 megapixels",
        total_pixels: "Approx. 25.0 megapixels",
      },
      camera_detail: {
        monitor: "3.0-inch TFT Display",
        media: [
          "Memory Stick PRO Duo",
          "Memory Stick PRO-HG Duo",
          "Memory Stick Micro (M2)",
          "SD memory card",
          "SDHC memory card (UHS-I compliant)",
          "SDXC memory card (UHS-I compliant)",
          "microSD memory card",
          "microSDHC memory card",
          "microSDXC memory card",
        ],
        audio: {
          microphone: "Built-in, stereo",
          speaker: "Built-in, monaural",
        },
        interface: {
          pc_interface: "Mass-storage / MTP",
          bluetooth: "Bluetooth 4.1 (2.4 GHz band)",
        },
        power: {
          battery: "One rechargeable battery pack NP-FW50",
          external_power: "AC Adaptor AC-PW20 (sold separately)",
          power_consumption: {
            still_images:
              "Approx. 2.0 W (with E PZ 16-50 mm F3.5-5.6 OSS lens attached)",
            movies:
              "Approx. 3.5 W (with E PZ 16-50 mm F3.5-5.6 OSS lens attached)",
          },
        },
      },
      lens: {
        lens_type: "16-50mm Power Zoom Lens",
      },
      focus: {
        focus_type:
          "Fast Hybrid AF (phase-detection AF / contrast-detection AF)",
        normal_focus_area:
          "Wide / Zone / Center / Flexible Spot / Expanded Flexible Spot / Tracking",
      },
      shutter: {
        still_image: "1/4000 to 30 s, Bulb",
        motion_image:
          "1/4000 to 1/4 (1/3 steps), up to 1/60 in AUTO mode (up to 1/30 in Auto slow shutter mode)",
      },
      recording: {
        recording_modes: [
          "3840 x 2160 (4:2:0, 8bit, NTSC) 30p (100Mbps / 60Mbps)",
          "3840 x 2160 (4:2:0, 8bit, NTSC) 24p (100Mbps / 60Mbps)",
          "3840 x 2160 (4:2:0, 8bit, PAL) 25p (100Mbps / 60Mbps)",
        ],
      },
      exposure: {
        exposure: "1200-zone evaluative metering",
        exposure_compensation: "+/- 5.0EV (1/3 EV, 1/2 EV steps selectable)",
        auto_ae_bracketing:
          "Bracket: Cont., Bracket: Single, 3/5 frames selectable (Ambient light, Flash light)",
        light_metering:
          "Multi-segment, Center-weighted, Spot, Entire Screen Avg., Highlight",
        iso_sensitivity: {
          still_images:
            "ISO 100-32000 (ISO 50 to ISO 51200 expandable), AUTO 100-6400",
          movies: "ISO 100-32000 equivalent, AUTO 100-6400",
        },
      },
      picture_quality: {
        still_picture:
          "JPEG (DCF Ver. 2.0, Exif Ver.2.32, MPF Baseline), RAW (Sony ARW 2.3)",
        image_quality: "RAW, RAW & JPEG, JPEG (Extra fine / Fine / Standard)",
        white_balance:
          "Auto / Daylight / Shade / Cloudy / Incandescent / Fluorescent / Flash / Underwater / Color Temp 2500-9900 K",
        photo_style:
          "Standard, Vivid, Portrait, Landscape, Sunset, Black & White, Sepia",
        color_modes:
          "sRGB standard (with sYCC gamut), Adobe RGB standard compatible with TRILLUMINOS Color",
      },
      waterproof: false,
    },
  });

  //12 MotherBoard Product
  await MotherboardProduct.create({
    title: "GIGABYTE B650M H AM5 Micro-ATX Motherboard",
    key_features: [
      "Supports Ryzen 9000 / 8000 / 7000 Series for AM5",
      "DDR5 up to 6400(OC), Max 96GB",
      "PCIe 4.0 slots",
      "HDMI & DisplayPort outputs",
      "3-year warranty",
    ],
    description:
      "Micro-ATX motherboard for AMD AM5 socket, supporting Ryzen 9000/8000/7000 series processors. Features DDR5 memory up to 6400(OC), PCIe 4.0 slots, HDMI/DisplayPort outputs, and 3-year warranty.",
    banner: "(image_link)",
    images: ["(image link 1)", "(image link 2)", "(image link 3)"],
    category: "motherboard",
    brand: "GIGABYTE",
    product_model: "B650M H",
    price: 13700,
    stock: 15,
    warranty: "3 Years",
    specs: {
      chipset: "AMD B650",
      form_factor: "Micro ATX",
      audio: "Realtek Audio CODEC High Definition Audio",
      memory: {
        memory_type: "DDR5",
        slots: 2,
        max_capacity: "96GB",
        max_speed: "6400(OC)",
      },
      graphics_ports: {
        hdmi: "1 x HDMI 2.1 (4096x2160@60Hz)",
        displayport: "1 x DisplayPort 1.4 (3840x2160@144Hz)",
      },
      expansion_slots: {
        pcie_x16: "1 x PCIe 4.0 x16",
        pcie_x1: "1 x PCIe 3.0 x1",
      },
      storage: {
        m2_slots: "1 x M.2 PCIe 4.0",
        sata_ports: "4 x SATA 6Gb/s",
      },
      usb_ports: {
        usb_3_2_gen1: "4 ports (2 back, 2 internal)",
        usb_2_0: "7 ports (3 back, 4 internal)",
      },
      lan: "Realtek GbE LAN",
      raid_support: "RAID 0, 1, 10 for NVMe and SATA",
      features: [
        "Supports AMD Ryzen 7000/8000/9000",
        "PCIe 4.0",
        "DDR5 Memory",
      ],
    },
  });

  console.log("Sample data inserted successfully!");
}

async function run() {
  await connectDB();
  await sampleData();
  mongoose.disconnect();
}

run();
