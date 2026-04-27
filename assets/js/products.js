const productDatabase = {
    // Lamps
    "corex-smart-lamp": {
        name: "CoreX Smart Lamp",
        price: 12900,
        weight_kg: 2.0,
        img: "assets/images/corex_hero_light_1777254345968.png",
        variant: "",
        desc: "The ultimate smart lamp with customizable ambient glow. Seamlessly blends into any premium environment, offering infinite color temperatures from warm candlelight to crisp daylight.",
        specs: [
            { label: "Material", value: "Frosted Glass & Aluminum" },
            { label: "Connectivity", value: "Wi-Fi, Bluetooth 5.0" },
            { label: "Lumens", value: "Up to 800lm" },
            { label: "Power", value: "15W Smart Adapter" }
        ]
    },
    "corex-floor": {
        name: "CoreX Floor",
        price: 24900,
        weight_kg: 4.5,
        img: "assets/images/corex_lamp_floor_1777256105955.png",
        variant: "",
        desc: "Tall, sleek brushed aluminum floor lamp for modern living rooms. Illuminates your space with a powerful, indirect glow that avoids harsh shadows.",
        specs: [
            { label: "Height", value: "1.6 meters" },
            { label: "Material", value: "Brushed Aluminum" },
            { label: "Smart Home", value: "Works with CoreX Home" },
            { label: "Lifespan", value: "50,000 hours" }
        ]
    },
    "corex-desk-pro": {
        name: "CoreX Desk Pro",
        price: 14900,
        weight_kg: 1.5,
        img: "assets/images/corex_lamp_desk_1777256343733.png",
        variant: "",
        desc: "Focused, cinematic lighting for your workspace. Reduces eye strain with multi-angle adjustability and high color rendering index (CRI) LEDs.",
        specs: [
            { label: "CRI", value: ">95 (True Color)" },
            { label: "Adjustability", value: "3-axis rotation" },
            { label: "Controls", value: "Touch sensitive base" }
        ]
    },
    
    // Watches
    "corex-watch-pro": {
        name: "CoreX Watch Pro",
        price: 39900,
        weight_kg: 0.5,
        img: "assets/images/corex_smartwatch_1777254452818.png",
        variant: "",
        desc: "Titanium case with advanced health tracking and metallic band. The ultimate companion for those who demand precision and durability in every aspect of life.",
        specs: [
            { label: "Case", value: "Aerospace-grade Titanium" },
            { label: "Display", value: "Always-On OLED, 2000 nits" },
            { label: "Battery", value: "Up to 36 hours" },
            { label: "Water Resistance", value: "100m (WR100)" }
        ]
    },
    "corex-watch-classic": {
        name: "CoreX Watch Classic",
        price: 44900,
        weight_kg: 0.5,
        img: "assets/images/corex_smartwatch_1777254452818.png",
        variant: "variant-gold",
        desc: "Elegant gold finish for a timeless look. Combines traditional watchmaking aesthetics with cutting-edge smart technology.",
        specs: [
            { label: "Finish", value: "18k Gold Plated" },
            { label: "Band", value: "Premium Leather" },
            { label: "Display", value: "Sapphire Crystal" }
        ]
    },
    "corex-watch-sport": {
        name: "CoreX Watch Sport",
        price: 29900,
        weight_kg: 0.3,
        img: "assets/images/corex_smartwatch_1777254452818.png",
        variant: "variant-silver",
        desc: "Lightweight aluminum for your daily workouts. Breathable band and advanced fitness metrics to push your limits.",
        specs: [
            { label: "Case", value: "Recycled Aluminum" },
            { label: "Weight", value: "32g" },
            { label: "Sensors", value: "Heart Rate, GPS, SpO2" }
        ]
    },

    // Fans
    "corex-air": {
        name: "CoreX Air",
        price: 19900,
        weight_kg: 3.0,
        img: "assets/images/corex_smart_fan_1777254468978.png",
        variant: "",
        desc: "Minimalist smart fan with powerful, quiet performance. Its aerodynamic blades circulate air silently to keep your entire room comfortable.",
        specs: [
            { label: "Noise Level", value: "< 25 dB" },
            { label: "Speeds", value: "12 Variable Modes" },
            { label: "Oscillation", value: "120 degrees" }
        ]
    },
    "corex-air-pro": {
        name: "CoreX Air Pro",
        price: 29900,
        weight_kg: 5.0,
        img: "assets/images/corex_smart_fan_1777254468978.png",
        variant: "variant-silver",
        desc: "Larger diameter with built-in HEPA air purifier. Cools you down while simultaneously capturing 99.97% of airborne particles.",
        specs: [
            { label: "Filtration", value: "True HEPA H13" },
            { label: "Coverage", value: "Up to 500 sq ft" },
            { label: "Sensors", value: "Air Quality Monitor" }
        ]
    },
    "corex-air-mini": {
        name: "CoreX Air Mini",
        price: 9900,
        weight_kg: 1.0,
        img: "assets/images/corex_smart_fan_1777254468978.png",
        variant: "variant-gold",
        desc: "Compact desk fan for personal cooling. Fits perfectly on any desk or nightstand, bringing a focused breeze wherever you need it.",
        specs: [
            { label: "Size", value: "10 inches" },
            { label: "Power", value: "USB-C Powered" },
            { label: "Portability", value: "Built-in Handle" }
        ]
    },

    // Accessories
    "silicone-cases": {
        name: "Silicone Cases",
        price: 4900,
        weight_kg: 0.1,
        img: "assets/images/corex_phone_covers_1777254483107.png",
        variant: "",
        desc: "Soft touch pastel covers with MagSafe support. Features a microfiber lining to protect your device from the inside out.",
        specs: [
            { label: "Material", value: "Liquid Silicone" },
            { label: "Compatibility", value: "MagSafe" },
            { label: "Drop Protection", value: "Up to 6 feet" }
        ]
    },
    "leather-cases": {
        name: "Leather Cases",
        price: 5900,
        weight_kg: 0.2,
        img: "assets/images/corex_phone_covers_1777254483107.png",
        variant: "variant-blue",
        desc: "Premium European leather for a sophisticated look. Develops a beautiful natural patina over time.",
        specs: [
            { label: "Material", value: "Full-grain Leather" },
            { label: "Finish", value: "Hand-stitched" },
            { label: "Compatibility", value: "MagSafe" }
        ]
    },
    "clear-cases": {
        name: "Clear Cases",
        price: 3900,
        weight_kg: 0.1,
        img: "assets/images/corex_phone_covers_1777254483107.png",
        variant: "variant-silver",
        desc: "Show off your device while keeping it protected. Made from a blend of optically clear polycarbonate and flexible materials.",
        specs: [
            { label: "Material", value: "Anti-yellowing Polycarbonate" },
            { label: "Coating", value: "Scratch-resistant" },
            { label: "Design", value: "Ultra-slim" }
        ]
    }
};
