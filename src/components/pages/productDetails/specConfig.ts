//specConfig.ts
export const SPEC_CONFIG = {
  phone: [
    {
      title: "Processor",
      rows: [
        { label: "Chipset", key: "processor.chipset" },
        { label: "CPU Type", key: "processor.cpu_type" },
        { label: "GPU", key: "processor.gpu" },
      ],
    },
    {
      title: "Display",
      rows: [
        { label: "Size", key: "display.size" },
        { label: "Type", key: "display.type" },
        { label: "Resolution", key: "display.resolution" },
        { label: "Refresh Rate", key: "display.refresh_rate" },
        { label: "Protection", key: "display.protection" },
      ],
    },
    {
      title: "Memory",
      rows: [
        { label: "RAM", key: "memory.ram" },
        { label: "Storage", key: "memory.storage" },
        { label: "Expandable", key: "memory.expandable" },
      ],
    },
    {
      title: "Camera",
      rows: [
        { label: "Rear Camera", key: "camera.rear" },
        { label: "Front Camera", key: "camera.front" },
        { label: "Features", key: "camera.features" },
      ],
    },
    {
      title: "Battery",
      rows: [
        { label: "Capacity", key: "battery.capacity" },
        { label: "Charging", key: "battery.charging" },
      ],
    },
    {
      title: "Connectivity",
      rows: [
        { label: "Network", key: "connectivity.network" },
        { label: "WiFi", key: "connectivity.wifi" },
        { label: "Bluetooth", key: "connectivity.bluetooth" },
        { label: "Ports", key: "connectivity.ports" },
      ],
    },
    {
      title: "Software",
      rows: [{ label: "Operating System", key: "os" }],
    },
    {
      title: "Dimensions",
      rows: [
        { label: "Height", key: "dimensions.height" },
        { label: "Width", key: "dimensions.width" },
        { label: "Thickness", key: "dimensions.thickness" },
        { label: "Weight", key: "dimensions.weight" },
      ],
    },
  ],

  laptop: [
    {
      title: "Processor",
      rows: [
        { label: "Brand", key: "processor.brand" },
        { label: "Model", key: "processor.chip_model" },
        { label: "Generation", key: "processor.generation" },
        { label: "Cores", key: "processor.cores" },
        { label: "Threads", key: "processor.threads" },
        { label: "Speed", key: "processor.speed" },
      ],
    },
    {
      title: "Display",
      rows: [
        { label: "Size", key: "display.size" },
        { label: "Type", key: "display.type" },
        { label: "Resolution", key: "display.resolution" },
        { label: "Refresh Rate", key: "display.refresh_rate" },
        { label: "Brightness", key: "display.brightness" },
      ],
    },
    {
      title: "Memory",
      rows: [
        { label: "RAM", key: "memory.ram" },
        { label: "Type", key: "memory.type" },
        { label: "Speed", key: "memory.speed" },
        { label: "Slots", key: "memory.slots" },
        { label: "Max Support", key: "memory.max" },
      ],
    },
    {
      title: "Storage",
      rows: [
        { label: "Type", key: "storage.type" },
        { label: "Capacity", key: "storage.capacity" },
        { label: "Interface", key: "storage.interface" },
      ],
    },
    {
      title: "Graphics",
      rows: [
        { label: "Type", key: "graphics.type" },
        { label: "Model", key: "graphics.chip_model" },
        { label: "Memory", key: "graphics.memory" },
      ],
    },
    {
      title: "Ports",
      rows: [
        { label: "USB", key: "ports.usb" },
        { label: "HDMI", key: "ports.hdmi" },
        { label: "Audio", key: "ports.audio" },
      ],
    },
    {
      title: "Battery",
      rows: [{ label: "Capacity", key: "battery.capacity" }],
    },
    {
      title: "Software",
      rows: [{ label: "Operating System", key: "os" }],
    },
  ],

  gaming_console: [
    {
      title: "Processor",
      rows: [
        { label: "Chipset", key: "processor.chipset_type" },
        { label: "Cores", key: "processor.cores" },
        { label: "Speed", key: "processor.speed" },
      ],
    },
    {
      title: "Memory",
      rows: [
        { label: "RAM", key: "memory.ram" },
        { label: "Storage", key: "memory.storage" },
        { label: "Storage Type", key: "memory.storage_type" },
      ],
    },
    {
      title: "Graphics",
      rows: [
        { label: "GPU Model", key: "graphics.chip_model" },
        { label: "GPU Memory", key: "graphics.memory" },
      ],
    },
    {
      title: "Performance",
      rows: [
        { label: "Resolution", key: "resolution" },
        { label: "Frame Rate", key: "frame_rate" },
        { label: "HDR", key: "hdr" },
        { label: "Ray Tracing", key: "ray_tracing" },
      ],
    },
    {
      title: "Features",
      rows: [
        { label: "Backward Compatibility", key: "backward_compatibility" },
        { label: "VR Support", key: "vr_support" },
        { label: "Disc Drive", key: "disc_drive" },
      ],
    },
    {
      title: "Connectivity",
      rows: [
        { label: "Ports", key: "ports" },
        { label: "WiFi", key: "wifi" },
        { label: "Bluetooth", key: "bluetooth" },
      ],
    },
  ],

  headphone: [
    {
      title: "General",
      rows: [
        { label: "Form Factor", key: "form_factor" },
        { label: "Connectivity", key: "connectivity" },
        { label: "Weight", key: "weight" },
      ],
    },
    {
      title: "Audio",
      rows: [
        { label: "Driver Size", key: "driver_size" },
        { label: "Frequency Response", key: "frequency_response" },
        { label: "Impedance", key: "impedance" },
        { label: "Sensitivity", key: "sensitivity" },
      ],
    },
    {
      title: "Microphone & Noise",
      rows: [
        { label: "Microphone", key: "microphone" },
        { label: "Noise Cancellation", key: "noise_cancellation" },
      ],
    },
    {
      title: "Battery",
      rows: [
        { label: "Battery Life", key: "battery_life" },
        { label: "Charging Time", key: "charging_time" },
      ],
    },
    {
      title: "Extra",
      rows: [
        { label: "Cable Length", key: "cable_length" },
        { label: "Features", key: "features" },
      ],
    },
  ],

  monitor: [
  {
    title: "Display",
    rows: [
      { label: "Size", key: "display.size" },
      { label: "Type", key: "display.type" },
      { label: "Panel Type", key: "display.panel_type" },
      { label: "Resolution", key: "display.resolution" },
      { label: "Aspect Ratio", key: "display.aspect_ratio" },
      { label: "Refresh Rate", key: "display.refresh_rate" },
      { label: "Response Time", key: "display.response_time" },
      { label: "Brightness", key: "display.brightness" },
      { label: "Curvature", key: "display.curvature" },
      { label: "Color Support", key: "display.color_support" },
      { label: "Viewing Angle Horizontal", key: "display.viewing_angle.horizontal" },
      { label: "Viewing Angle Vertical", key: "display.viewing_angle.vertical" },
      { label: "Static Contrast Ratio", key: "display.contrast_ratio_static" },
      { label: "Dynamic Contrast Ratio", key: "display.contrast_ratio_dynamic" },
    ],
  },
  {
    title: "Audio",
    rows: [
      { label: "Speaker Built-in", key: "audio.speaker_built_in" },
    ],
  },
  {
    title: "Connectivity",
    rows: [
      { label: "VGA", key: "connectivity.vga" },
      { label: "HDMI", key: "connectivity.hdmi" },
      { label: "DisplayPort", key: "connectivity.display_port" },
    ],
  },
  {
    title: "Physical",
    rows: [
      { label: "Color", key: "physical.color" },
      { label: "Weight", key: "physical.weight" },
      { label: "VESA Mount", key: "physical.vesa_wall_mount" },
    ],
  },
],
};
