

const cpuData = {
    "1220v3": { // Added Xeon E3-1220V3
        name: "Intel Xeon E3-1220 v3",
        price: 300000, // Example price, adjust as needed
        image: "images/intel-xeon-e3-1220v3.jpg", // Replace with correct image path
        brand: "Intel",
        warranty: "12 tháng", // Or specify if different
        socket: "LGA1150", // Correct socket
        cores: 4,
        threads: 4,
        technology: "22nm",
        ram_support: "DDR3", // Or DDR3L
        ram_bus: "1600MHz", // Or specify max supported speed
        condition: "2ND" // Or "New" if applicable
    },
    "9100f": {
        name: "Intel Core i3-9100f",
        price: 500000,
        image: "images/intel-core-i3-9100f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1151-v2",
        cores: 4,
        threads: 4,
        technology: "14nm",
        ram_support: "DDR4",
        ram_bus: "2400MHz",
        condition: "2ND"
    },
    "10100f": {
        name: "Intel Core i3-10100f",
        price: 1100000,
        image: "images/intel-core-i3-10100f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1200",
        cores: 4,
        threads: 8,
        technology: "14nm",
        ram_support: "DDR4",
        ram_bus: "2666MHz",
        condition: "2nd"
    },
    "12100f": {
        name: "Intel Core i3-12100f",
        price: 1350000,
        image: "images/intel-core-i3-12100f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 4,
        threads: 8,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "13100f": {
        name: "Intel Core i3-13100",
        price: 2100000,
        image: "images/intel-core-i3-13100.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 4,
        threads: 8,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "14100f": {
        name: "Intel Core i3-13100",
        price: 2300000,
        image: "images/intel-core-i3-13100.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 4,
        threads: 8,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "3470": {
        name: "Intel Core i5-3470 (Cũ)",
        price: 250000,
        image: "images/intel-core-i5-3470.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1155",
        cores: 4,
        threads: 4,
        technology: "22nm",
        ram_support: "DDR3",
        ram_bus: "1600MHz",
        condition: "2ND"
    },
    "4570": {
        name: "Intel Core i5-4570 (Cũ)",
        price: 400000,
        image: "images/intel-core-i5-4570.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1150",
        cores: 4,
        threads: 4,
        technology: "22nm",
        ram_support: "DDR3",
        ram_bus: "1600MHz",
        condition: "2ND"
    },
    "6500": {
        name: "Intel Core i5-6500 (Cũ)",
        price: 900000,
        image: "images/intel-core-i5-6500.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151",
        cores: 4,
        threads: 4,
        technology: "14nm",
        ram_support: "DDR4",
        ram_bus: "2133MHz",
        condition: "2ND"
    },
    "9400f": {
        name: "Intel Core i5-9400f",
        price: 1100000,
        image: "images/intel-core-i5-9400f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1151-v2",
        cores: 6,
        threads: 6,
        technology: "14nm",
        ram_support: "DDR4",
        ram_bus: "2666MHz",
        condition: "NEW"
    },
    "10400f": {
        name: "Intel Core i5-10400f",
        price: 1600000,
        image: "images/intel-core-i5-10400f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1200",
        cores: 6,
        threads: 12,
        technology: "14nm",
        ram_support: "DDR4",
        ram_bus: "2666MHz",
        condition: "NEW"
    },
    "11400f": {
        name: "Intel Core i5-11400f",
        price: 1700000,
        image: "images/intel-core-i5-11400f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1200",
        cores: 6,
        threads: 12,
        technology: "14nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "12400f": {
        name: "Intel Core i5-12400f",
        price: 2400000,
        image: "images/intel-core-i5-12400f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 6,
        threads: 12,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "12600f": {
        name: "Intel Core i5-12600KF",
        price: 3400000,
        image: "images/intel-core-i5-13400f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 10,
        threads: 16,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "13400f": {
        name: "Intel Core i5-13400f",
        price: 2800000,
        image: "images/intel-core-i5-13400f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 10,
        threads: 16,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "13600kf": {
        name: "Intel Core i5-13600KF",
        price: 4400000,
        image: "images/intel-core-i5-14600kf.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 14,
        threads: 20,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "14600kf": {
        name: "Intel Core i5-14600KF",
        price: 4600000,
        image: "images/intel-core-i5-14600kf.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 14,
        threads: 20,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "12700f": {
        name: "Intel Core i7-12700f",
        price: 8800000,
        image: "images/intel-core-i7-12700f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 12,
        threads: 20,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "13700k": {
        name: "Intel Core i7-13700K",
        price: 10500000,
        image: "images/intel-core-i7-13700k.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 16,
        threads: 24,
        technology: "Intel 7",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "3600": {
        name: "AMD Ryzen 5 3600 (Cũ)",
        price: 1600000,
        image: "images/amd-ryzen-5-3600.jpg",
        brand: "AMD (Cũ)",
        warranty: "1 tháng",
        socket: "AM4",
        cores: 6,
        threads: 12,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "2ND"
    },
    "5600": {
        name: "AMD Ryzen 5 5600",
        price: 2400000,
        image: "images/amd-ryzen-5-5600.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
        cores: 6,
        threads: 12,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "5600X": {
        name: "AMD Ryzen 5 5600X",
        price: 2800000,
        image: "images/amd-ryzen-5-5600.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
        cores: 6,
        threads: 12,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "7500f": {
        name: "AMD Ryzen 5 7500f",
        price: 3800000,
        image: "images/amd-ryzen-5-7500f.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
        cores: 6,
        threads: 12,
        technology: "5nm",
        ram_support: "DDR5",
        ram_bus: "5200MHz",
        condition: "NEW"
    },
    "7600x": {
        name: "AMD Ryzen 5 7600X",
        price: 4800000,
        image: "images/amd-ryzen-5-7600x-tray.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
        cores: 6,
        threads: 12,
        technology: "5nm",
        ram_support: "DDR5",
        ram_bus: "5200MHz",
        condition: "NEW"
    },
    "5700x": {
        name: "AMD Ryzen 7 5700X",
        price: 3300000,
        image: "images/amd-ryzen-7-5700x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
        cores: 8,
        threads: 16,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "5700x3D": {
        name: "AMD Ryzen 7 5700X3D",
        price: 5300000,
        image: "images/amd-ryzen-7-5700x3d.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
        cores: 8,
        threads: 16,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "5800x": {
        name: "AMD Ryzen 7 5800X",
        price: 3800000,
        image: "images/amd-ryzen-7-5800x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
        cores: 8,
        threads: 16,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "NEW"
    },
    "7700x": {
        name: "AMD Ryzen 7 7700X",
        price: 6100000,
        image: "images/amd-ryzen-7-7700x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
        cores: 8,
        threads: 16,
        technology: "5nm",
        ram_support: "DDR5",
        ram_bus: "5200MHz",
        condition: "NEW"
    },
    "7800x3d": {
        name: "AMD Ryzen 7 7800X3D",
        price: 10390000,
        image: "images/amd-ryzen-7-7800x3d-tray.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
        cores: 8,
        threads: 16,
        technology: "5nm",
        ram_support: "DDR5",
        ram_bus: "5200MHz",
        condition: "NEW"
    },
    "5900x": {
        name: "AMD Ryzen 9 5900X (Cũ)",
        price: 5500000,
        image: "images/amd-ryzen-9-5900x.jpg",
        brand: "AMD (Cũ)",
        warranty: "1 tháng",
        socket: "AM4",
        cores: 12,
        threads: 24,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "2ND"
    },
    "5950x": {
        name: "AMD Ryzen 9 5950X (Cũ)",
        price: 7500000,
        image: "images/amd-ryzen-9-5900x.jpg",
        brand: "AMD (Cũ)",
        warranty: "1 tháng",
        socket: "AM4",
        cores: 16,
        threads: 32,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "2ND"
    },
    "7900x": {
        name: "AMD Ryzen 9 7900X",
        price: 8300000,
        image: "images/amd-ryzen-9-7900x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
        cores: 12,
        threads: 24,
        technology: "5nm",
        ram_support: "DDR5",
        ram_bus: "5200MHz",
        condition: "NEW"
    },
    "7950x": {
        name: "AMD Ryzen 9 7950X",
        price: 11600000,
        image: "images/amd-ryzen-9-7900x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
        cores: 16,
        threads: 32,
        technology: "5nm",
        ram_support: "DDR5",
        ram_bus: "5200MHz",
        condition: "NEW"
    },
    "7950x3d": {
        name: "AMD Ryzen 9 7950X3D",
        price: 12000000,
        image: "images/amd-ryzen-9-7950x3d.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
        cores: 16,
        threads: 32,
        technology: "5nm",
        ram_support: "DDR5",
        ram_bus: "5200MHz",
        condition: "NEW"
    }
};
const mainboardData = {
    "H61": {
        name: "Gigabyte H61M-DS2 (LGA1155 - Cũ)",
        price: 400000,
        image: "images/gigabyte-h61m-ds2.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1155",
        memoryType: "DDR3",
        condition: "2ND",
        nvmeSlots: 0,
        pcieVersion: "2.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "H81": {
        name: "ASUS H81M-E (LGA1150 - Cũ)",
        price: 450000,
        image: "images/asus-h81m-e.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1150",
        memoryType: "DDR3",
        condition: "2ND",
        nvmeSlots: 0,
        pcieVersion: "2.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "H110": {
        name: "Gigabyte H110M-DS2",
        price: 650000,
        image: "images/gigabyte-h110m-ds2.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 0,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "H310": {
        name: "ASUS H310M-E",
        price: 700000,
        image: "images/asus-h310m-e.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "H410": {
        name: "Gigabyte H410M H V2",
        price: 800000,
        image: "images/gigabyte-h410m-h-v2.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1200",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "H510": {
        name: "ASUS Prime H510M-E",
        price: 900000,
        image: "images/asus-prime-h510m-e.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1200",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "ASUS-H610": {
        name: "ASUS PRIME H610M-K D4",
        price: 1600000,
        image: "images/asus-prime-h610m-k-ddr4.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "GIGA-H610": {
        name: "GIGABYTE H610M H DDR4",
        price: 1790000,
        image: "images/gigabyte-h610m-h-ddr4.jpg",
        brand: "GIGABYTE",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "MSI-H610": {
        name: "MSI PRO H610M-B DDR4",
        price: 1790000,
        image: "images/msi-pro-h610m-b-ddr4.jpg",
        brand: "MSI",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "HNZ-H610": {
        name: "Huananzhi H610M-K DDR4",
        price: 1350000,
        image: "images/hnz-h610m-k-ddr4.jpg",
        brand: "HNZ",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "B360": {
        name: "Gigabyte B360M D3H",
        price: 1500000,
        image: "images/gigabyte-b360m-d3h.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "B365": {
        name: "ASUS Prime B365M-A",
        price: 11000000,
        image: "images/asus-prime-b365m-a.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "B460": {
        name: "Gigabyte B460M DS3H AC",
        price: 1900000,
        image: "images/gigabyte-b460m-ds3h-ac.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1200",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "B560": {
        name: "ASUS Prime B560M-A",
        price: 1700000,
        image: "images/asus-prime-b560m-a.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1200",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 2,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "HNZ-B760": {
        name: "Main Huananzhi B760M-DDR4 (Màu đen)",
        price: 1800000,
        image: "images/main-huananzhi-b760m-DDR4-den.jpg",
        brand: "Huananzhi",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 2,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "GIGA-B760": {
        name: "Mainboard Gigabyte B760M D DDR4",
        price: 2390000,
        image: "images/mainboard-gigabyte-b760m-d-ddr4.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 2,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "MSI-B760": {
        name: "Mainboard MSI PRO B760M-E DDR4",
        price: 2450000,
        image: "images/mainboard-msi-pro-b760m-e-ddr4.jpg",
        brand: "MSI",
        warranty: "36 tháng",
        socket: "B760",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 2,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "ASUS-B760": {
        name: "Mainboard Asus PRIME B760M-K DDR4",
        price: 2490000,
        image: "images/mainboard-asus-prime-b760m-k-ddr4.jpg",
        brand: "Asus",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 2,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "GIGA-B760": {
        name: "Mainboard Gigabyte B760M H DDR4",
        price: 2699000,
        image: "images/mainboard-gigabyte-b760m-h-ddr4.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 2,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "ASROCK-B760": {
        name: "Mainboard ASRock B760M Pro RS/DDR4 WIFI",
        price: 2990000,
        image: "images/mainboard-asrock-b760m-pro-rs-DDR4-wifi.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 2,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "GIGA-B450": {
        name: "Gigabyte B450M DS3H V2 (AM4)",
        price: 1400000,
        image: "images/gigabyte-b450m-ds3h-v2.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "JGINYUE-B450": {
        name: "JGinyue B450M-TI (AM4)",
        price: 1390000,
        image: "images/jginyue-b450m-ti.jpg",
        brand: "JGinyue",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "GIGA-B550": {
        name: "Gigabyte B550M AORUS ELITE (AM4)",
        price: 2550000,
        image: "images/gigabyte-b550m-aorus-elite.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        condition: "NEW",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "asrock-b550m-wifi": {
        name: "ASRock B550M WIFI (AM4)",
        price: 2399000,
        image: "images/asrock-b550m-wifi.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "asrock-b550m-se": {
        name: "ASRock B550M SE (AM4)",
        price: 2299000,
        image: "images/asrock-b550m-se.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "asrock-b550m-pro4": {
        name: "ASRock B550M PRO4 (AM4)",
        price: 2499000,
        image: "images/asrock-b550m-pro4.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        condition: "NEW",
        buss: "3200",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "gigabyte-b550m-gaming-wifi": {
        name: "Gigabyte B550M GAMING WIFI (AM4)",
        price: 2699000,
        image: "images/gigabyte-b550m-gaming-wifi.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        buss: "3200",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "JGINYUE-B650": {
        name: "DDR5 - MAINBOARD JGINYUE B650M-D (AM5)",
        price: 1900000,
        image: "images/jginyue-b650m-d.jpg",
        brand: "JGINYUE",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        condition: "NEW",
        buss: "6400",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX" // Thêm kích thước
    },
    "JGINYUE-B650-PRO": {
        "name": "DDR5 - MAINBOARD JGINYUE B650M PRO (AM5)",
        "price": 2100000,
        "image": "images/jginyue-b650m-pro.jpg",
        "brand": "JGinyue",
        "warranty": "36 tháng",
        "socket": "AM5",
        "memoryType": "DDR5",
        "condition": "NEW",
        "buss": "5200",
        "nvmeSlots": 1,
        "pcieVersion": "4.0",
        "formFactor": "Micro-ATX"
    },
    "ASROCK-B650M-HDV-M2": {
        "name": "DDR5 - MAINBOARD ASRock B650M-HDV/M.2 (AM5)",
        "price": 2790000,
        "image": "images/asrock-b650m-hdv-m2.jpg",
        "brand": "ASRock",
        "warranty": "36 tháng",
        "socket": "AM5",
        "memoryType": "DDR5",
        "condition": "NEW",
        "buss": "5600",
        "nvmeSlots": 1,
        "pcieVersion": "4.0",
        "formFactor": "Micro-ATX"
    },
    "MSI-PRO-B650M-P": {
        "name": "DDR5 - MAINBOARD MSI PRO B650M-P (AM5)",
        "price": 2990000,
        "image": "images/msi-pro-b650m-p.jpg",
        "brand": "MSI",
        "warranty": "36 tháng",
        "socket": "AM5",
        "memoryType": "DDR5",
        "condition": "NEW",
        "buss": "5600",
        "nvmeSlots": 1,
        "pcieVersion": "4.0",
        "formFactor": "Micro-ATX"
    },
    "ASUS-TUF-GAMING-B650M-E": {
        "name": "DDR5 - MAINBOARD ASUS TUF GAMING B650M-E (AM5)",
        "price": 3390000,
        "image": "images/asus-tuf-gaming-b650m-e.jpg",
        "brand": "ASUS",
        "warranty": "36 tháng",
        "socket": "AM5",
        "memoryType": "DDR5",
        "condition": "NEW",
        "buss": "5600",
        "nvmeSlots": 1,
        "pcieVersion": "4.0",
        "formFactor": "Micro-ATX"
    },
    "GIGABYTE-B650M-GAMING-PLUS-WIFI": {
        "name": "DDR5 - MAINBOARD GIGABYTE B650M GAMING PLUS WIFI (AM5)",
        "price": 3290000,
        "image": "images/gigabyte-b650m-gaming-plus-wifi.jpg",
        "brand": "Gigabyte",
        "warranty": "36 tháng",
        "socket": "AM5",
        "memoryType": "DDR5",
        "condition": "NEW",
        "buss": "5600",
        "nvmeSlots": 1,
        "pcieVersion": "4.0",
        "formFactor": "Micro-ATX"
    },
    "ASUS-TUF-GAMING-B650M-E-WIFI": {
        "name": "DDR5 - MAINBOARD ASUS TUF GAMING B650M-E WIFI (AM5)",
        "price": 3790000,
        "image": "images/asus-tuf-gaming-b650m-e-wifi.jpg",
        "brand": "ASUS",
        "warranty": "36 tháng",
        "socket": "AM5",
        "memoryType": "DDR5",
        "condition": "NEW",
        "buss": "5600",
        "nvmeSlots": 1,
        "pcieVersion": "4.0",
        "formFactor": "Micro-ATX"
    },
    "MSI-B650M-GAMING-PLUS-WIFI": {
        "name": "DDR5 - MAINBOARD MSI B650M GAMING PLUS WIFI (AM5)",
        "price": 3890000,
        "image": "images/msi-b650m-gaming-plus-wifi.jpg",
        "brand": "MSI",
        "warranty": "36 tháng",
        "socket": "AM5",
        "memoryType": "DDR5",
        "condition": "NEW",
        "buss": "5600",
        "nvmeSlots": 1,
        "pcieVersion": "4.0",
        "formFactor": "Micro-ATX"
    },
    "GIGABYTE-B650M-AORUS-ELITE": {
        "name": "DDR5 - MAINBOARD GIGABYTE B650M AORUS ELITE (AM5)",
        "price": 4290000,
        "image": "images/gigabyte-b650m-aorus-elite.jpg",
        "brand": "Gigabyte",
        "warranty": "36 tháng",
        "socket": "AM5",
        "memoryType": "DDR5",
        "condition": "NEW",
        "buss": "5600",
        "nvmeSlots": 1,
        "pcieVersion": "4.0",
        "formFactor": "Micro-ATX"
    }
};
const vgaData = {
    "750ti": { // Added 750Ti
        name: "GTX 750Ti GIGA-MSI-ASUS",
        price: 1000000, // Example price, adjust as needed
        image: "images/750ti.jpg", // Replace with correct image path
        brand: "NVIDIA", // Or specify the brand if known
        warranty: "3 tháng", // Or specify if different
        condition: "2ND", // Or "New" if applicable
        vram: "2GB", // Or specify if different
        vram_type: "GDDR5", // Or specify if different
        card_type: "NVIDIA"
    },
    "960": { // Added 750Ti
        name: "GTX 960 GIGA-MSI-ASUS",
        price: 1300000, // Example price, adjust as needed
        image: "images/gtx960.jpg", // Replace with correct image path
        brand: "NVIDIA", // Or specify the brand if known
        warranty: "3 tháng", // Or specify if different
        condition: "2ND", // Or "New" if applicable
        vram: "2GB", // Or specify if different
        vram_type: "GDDR5", // Or specify if different
        card_type: "NVIDIA"
    },
    "1050ti-4gb": {
        name: "1050Ti 4GB GDDR5 ASUS/GIGA/MSI",
        price: 1590000,
        image: "images/1050ti-4gb.jpg",
        brand: "COLORFUL",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "4GB",
        vram_type: "GDDR5",
        card_type: "NVIDIA"
    },
    "1060-3g": {
        name: "1060 3GB GDDR5 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 1800000,
        image: "images/1060-3gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "3GB",
        vram_type: "GDDR5",
        card_type: "NVIDIA"
    },
    "1060-6gb": {
        name: "1060 6GB GDDR5 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 2100000,
        image: "images/1060-6gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "6GB",
        vram_type: "GDDR5",
        card_type: "NVIDIA"
    },
    "1070-8gb": {
        name: "1070 8GB GDDR5 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 2800000,
        image: "images/1070-8gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "8GB",
        vram_type: "GDDR5",
        card_type: "NVIDIA"
    },
    "1070ti-8gb": {
        name: "1070Ti 8GB GDDR5 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 3000000,
        image: "images/1070ti-8gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "8GB",
        vram_type: "GDDR5",
        card_type: "NVIDIA"
    },
    "1660s": {
        name: "1660 Super 6GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 2900000,
        image: "images/1660-super-6gb-gigabyte.jpg",
        brand: "GIGABYTE",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "6GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "2060": {
        name: "RTX 2060 6GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 3400000,
        image: "images/rtx-2060-6gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "6GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "2070s": {
        name: "RTX 2070 Super 8GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 4500000,
        image: "images/rtx-2070-super-8gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "8GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "3060": {
        name: "RTX 3060 12GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 5300000,
        image: "images/rtx-3060-12gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "12GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "3060ti": {
        name: "RTX 3060ti 8GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 5700000,
        image: "images/rtx-3060ti-8gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "8GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "3070": {
        name: "RTX 3070 8GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 6200000,
        image: "images/rtx-3070-8gb-msi.jpg",
        brand: "msi",
        warranty: "6 tháng",
        condition: "2ND",
        vram: "8GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "3070ti": {
        name: "RTX 3070Ti 8GB GDDR6X /GIGA/MSI/ASUS (Cũ)",
        price: 7500000,
        image: "images/rtx-3070ti-8gb-asus.jpg",
        brand: "ASUS",
        warranty: "6 tháng",
        condition: "2ND",
        vram: "8GB",
        vram_type: "GDDR6X",
        card_type: "NVIDIA"
    },
    "2060s": {
        name: "RTX 2060 Super 8GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 3900000,
        image: "images/colorful--rtx-2060-super-8gb.jpg",
        brand: "Colorful",
        warranty: "3 tháng",
        condition: "2ND",
        vram: "8GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "3050-6gb": {
        name: "ASL RTX 3050 6GB GDDR6 (NEW)",
        price: 4250000,
        image: "images/asl-rtx-3050-6gb.jpg",
        brand: "ASL",
        warranty: "36 tháng",
        condition: "NEW",
        vram: "6GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "3060-12g-new": {
        name: "Gigabyte RTX 3060 GAMING OC 12GB (NEW)",
        price: 7290000,
        image: "images/gigabyte-rtx-3060-gaming-oc-12gb.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        condition: "NEW",
        vram: "12GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "4060ti-16G": {
        name: "msi RTX 4060 TI 16GB AMP GDDR6 (NEW)",
        price: 10750000,
        image: "images/msi-rtx-4060-ti-16gb-amp.jpg",
        brand: "msi",
        warranty: "36 tháng",
        condition: "NEW",
        vram: "16GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "4060-new": {
        name: "ASUS DUAL RTX 4060 OC 8GB GDDR6 (NEW)",
        price: 7250000,
        image: "images/asus-dual-rtx-4060-oc-8gb.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        condition: "NEW",
        vram: "8GB",
        vram_type: "GDDR6",
        card_type: "NVIDIA"
    },
    "4070ti-new": {
        name: "MSI RTX 4070 TI SUPER 16G VENTUS 3X OC (NEW)",
        price: 22150000,
        image: "images/msi-rtx-4070-ti-super-16g-ventus-3x-oc.jpg",
        brand: "MSI",
        warranty: "36 tháng",
        condition: "NEW",
        vram: "16GB",
        vram_type: "GDDR6X",
        card_type: "NVIDIA"
    },
    "4070ti-super": {
        name: "Inno3D RTX 4070 Ti SUPER X3 OC 16GB (NEW)",
        price: 21400000,
        image: "images/inno3d-rtx-4070-ti-super-x3-oc-16gb.jpg",
        brand: "Inno3D",
        warranty: "36 tháng",
        condition: "NEW",
        vram: "16GB",
        vram_type: "GDDR6X",
        card_type: "NVIDIA"
    },
};

const ramData = {
    // DDR5 RAM
    "Cosair-16-5200": {
        name: "RAM Corsair Vengeance Black Heatspreader 16GB (Bus 5200)",
        price: 1200000,
        brand: "Corsair",
        type: "DDR5",
        speed: "5200MHz",
        size: "16GB",
        warranty: "36 tháng",
        condition: "NEW",
        image: "images/ram-corsair-vengeance-16gb-ddr5-5200.jpg"
    },
    "tridentz-16-6000": {
        name: "RAM TridentZ 16GB DDR5 (Bus 6000) ",
        price: 1500000,
        brand: "TridentZ",
        type: "DDR5",
        speed: "6000MHz",
        size: "16GB",
        warranty: "36 tháng",
        condition: "NEW",
        image: "images/ram-tridentz-16gb-ddr5-6000.jpg"
    },
    "tridentz-32-6000": {
        name: "RAM TridentZ 16GB DDR5 (Bus 6000) ",
        price: 2900000,
        brand: "TridentZ",
        type: "DDR5",
        speed: "6000MHz",
        size: "32GB",
        warranty: "36 tháng",
        condition: "NEW",
        image: "images/ram-tridentz-32gb-ddr5-6000.jpg"
    },
    "adata-32-6000": {
        name: "RAM Adata XPG 32GB DDR5 (Bus 6000)",
        price: 2450000,
        brand: "Adata",
        type: "DDR5",
        speed: "6000MHz",
        size: "32GB",
        warranty: "36 tháng",
        condition: "NEW",
        image: "images/ram-adata-xpg-32gb-ddr5-6000.jpg"
    },

    // DDR4 RAM
    "sstc-16": {
        name: "RAM SSTC 16GB DDR4 3200MHz",
        price: 700000,
        image: "images/sstc-ddr4-3200mhz-16gb.jpg",
        brand: "SSTC",
        warranty: "36 tháng",
        condition: "NEW",
        type: "DDR4",
        speed: "3200MHz",
        size: "16GB"
    },
    "sstc-8": {
        name: "RAM SSTC 8GB DDR4 3200MHz",
        price: 350000,
        image: "images/sstc-ddr4-3200mhz-8gb.jpg",
        brand: "SSTC",
        warranty: "36 tháng",
        condition: "NEW",
        type: "DDR4",
        speed: "3200MHz",
        size: "8GB"
    },


    "cosair-16": {
        name: "RAM Corsair Vengeance LPX 16GB DDR4 (Bus 3200)",
        price: 900000,
        brand: "Corsair",
        type: "DDR4",
        speed: "3200MHz",
        size: "16GB",
        warranty: "36 tháng",
        condition: "NEW",
        image: "images/ram-corsair-vengeance-16gb-ddr4-3200.jpg"
    },
    "furry-16": {
        name: "RAM Kingston HyperX Fury 16GB DDR4 (Bus 3200)",
        price: 950000,
        brand: "Kingston",
        type: "DDR4",
        speed: "3200MHz",
        size: "16GB",
        warranty: "36 tháng",
        condition: "NEW",
        image: "images/ram-kingston-hyperx-16gb-ddr4-3200.jpg"
    },
    "adata-16": {
        name: "RAM Adata XPG 16GB DDR4 (Bus 3200)",
        price: 880000,
        brand: "Adata",
        type: "DDR4",
        speed: "3200MHz",
        size: "16GB",
        warranty: "36 tháng",
        condition: "NEW",
        image: "images/ram-adata-xpg-16gb-ddr4-3200.jpg"
    },
    "tridentz-16": {
        name: "RAM G.Skill TridentZ 16GB DDR4 (Bus 3600)",
        price: 1100000,
        brand: "G.Skill",
        type: "DDR4",
        speed: "3600MHz",
        size: "16GB",
        warranty: "36 tháng",
        condition: "NEW",
        image: "images/ram-tridentz-16gb-ddr4-3600.jpg"
    },
    "D38G": {
        name: "RAM DDR3 8G 1600MHz",
        price: 130000,
        image: "images/d3-8gb.jpg",
        brand: "SSTC",
        warranty: "3 tháng",
        condition: "2ND",
        type: "DDR3",
        speed: "1600MHz",
        size: "8GB"
    },
};
const ssdData = {
    "sata-sstc-256": {
        name: "SSD SSTC Oceanic Whitetip SATA III 256GB", // Changed to SATA
        price: 450000,
        image: "images/sstc-oceanic-whitetip-256gb.jpg",
        brand: "SSTC",
        warranty: "36 tháng",
        condition: "NEW",
        type: "SATA III", // Changed to SATA III
        speed: "Read 550MB/s, Write 500MB/s" // Example SATA speeds - adjust!
    },
    "sstc-256": {
        name: "SSD SSTC Oceanic Whitetip NVMe M.2 MAX-III 256GB",
        price: 600000,
        image: "images/sstc-oceanic-whitetip-256gb.jpg",
        brand: "SSTC",
        warranty: "36 tháng",
        condition: "NEW",
        type: "NVMe PCIe Gen3 x4",
        speed: "Read 3100MB/s, Write 2000MB/s"
    },
    "sstc-512": {
        name: "SSD SSTC Oceanic Whitetip NVMe M.2 MAX-III 512GB",
        price: 900000,
        image: "images/sstc-oceanic-whitetip-512gb.jpg",
        brand: "SSTC",
        warranty: "36 tháng",
        condition: "NEW",
        type: "NVMe PCIe Gen3 x4",
        speed: "Read 3100MB/s, Write 2000MB/s"
    },
    "990evo-1tb": {
        name: "SSD Samsung 990 EVO PLUS 1TB M.2 NVMe PCIe Gen4.0 x4",
        price: 2230000,
        image: "images/samsung-990-evoplus-1tb.jpg",
        brand: "Samsung",
        warranty: "36 tháng",
        condition: "NEW",
        type: "NVMe PCIe Gen4 x4",
        speed: "Read 5000MB/s, Write 4200MB/s"
    },
    "samsung-500gb": {
        name: "SSD Samsung 980 500GB M.2 NVMe PCIe Gen3.0 x4",
        price: 1479000,
        image: "images/samsung-980-500gb.jpg",
        brand: "Samsung",
        warranty: "36 tháng",
        condition: "NEW",
        type: "NVMe PCIe Gen3 x4",
        speed: "Read 3100MB/s, Write 2600MB/s"
    },
    "samsung-1tb": {
        name: "SSD Samsung 980 1TB M.2 NVMe PCIe Gen4.0 x4",
        price: 2000000,
        image: "images/samsung-980-1tb.jpg",
        brand: "Samsung",
        warranty: "36 tháng",
        condition: "NEW",
        type: "NVMe PCIe Gen4 x4",
        speed: "Read 3500MB/s, Write 3000MB/s"
    },
    "samsung-512gb": {
        name: "SSD Gen 4 Samsung PM9A1 NVMe 512GB OEM 980 Pro",
        price: 1450000,
        image: "images/samsung-pm9a1-512gb.jpg",
        brand: "Samsung",
        warranty: "36 tháng",
        condition: "NEW",
        type: "NVMe PCIe Gen4 x4",
        speed: "Read 6400MB/s, Write 2700MB/s"
    },
    "crucial-500gb": {
        name: "SSD Crucial P3 500GB PCIe Gen3",
        price: 895000, // Giá có thể thay đổi tùy theo thị trường
        image: "images/crucial-p3-500gb.jpg", // Đảm bảo có hình ảnh tương ứng
        brand: "Crucial",
        warranty: "36 tháng",
        condition: "NEW",
        type: "NVMe PCIe Gen3 x4",
        speed: "Read 3500MB/s, Write 1900MB/s" // Tốc độ đọc/ghi của Crucial P3 500GB
    },
    "crucial-1tb": {
        name: "SSD Crucial P3 1TB PCIe Gen3",
        price: 895000, // Giá có thể thay đổi tùy theo thị trường
        image: "images/crucial-p3-1TB.jpg", // Đảm bảo có hình ảnh tương ứng
        brand: "Crucial",
        warranty: "36 tháng",
        condition: "NEW",
        type: "NVMe PCIe Gen3 x4",
        speed: "Read 3500MB/s, Write 1900MB/s" // Tốc độ đọc/ghi của Crucial P3 500GB
    }
};



const psuData = {
    "350W": {
        name: "Nguồn VSP Delta P350W",
        price: 350000,
        image: "images/vsp-delta-p350w.jpg",
        brand: "VSP",
        warranty: "24 tháng",
        condition: "NEW",
        power: "350W",
        connectors: {
            mainboard: "1x 24-pin",
            cpu: ["1x 4+4-pin ATX12V"],
            pcie: ["1x 6+2-pin"],
            sata: 3,
            molex: 2
        }
    },
    "DT660": {
        name: "Nguồn VSP Elite DT660 650W",
        price: 750000,
        image: "images/vsp-elite-dt660-650w.jpg",
        brand: "VSP",
        warranty: "36 tháng",
        condition: "NEW",
        power: "650W",
        connectors: {
            mainboard: "1x 24-pin",
            cpu: ["2x 8-pin (4+4) ATX12V"],
            pcie: ["2x 8-pin (6+2)"],
            sata: 4,
            molex: 2
        }
    },
    "VSP750": {
        name: "Nguồn VSP VGP750BRN 80Plus Bronze 750W",
        price: 1000000,
        image: "images/vsp-vgp750brn-80plus-bronze-750w.jpg",
        brand: "VSP",
        warranty: "36 tháng",
        condition: "NEW",
        power: "750W",
        connectors: {
            mainboard: "1x 24-pin",
            cpu: ["1x 8-pin (4+4) ATX12V"],
            pcie: ["2x 8-pin (6+2)"],
            sata: 6,
            molex: 3
        }
    },
    "COSAIR750": {
        name: "Nguồn Máy Tính Corsair CV750 - 750W 80 Plus",
        price: 1690000,
        image: "images/nguon-corsair-cv750.jpg",
        brand: "Corsair",
        warranty: "36 tháng",
        condition: "NEW",
        power: "750W",
        connectors: {
            mainboard: "1x 24-pin",
            cpu: ["1x 8-pin (4+4) ATX12V"],
            pcie: ["4x 8-pin (6+2)"],
            sata: 8,
            molex: 4
        }
    },
    "TMR1000": {
        name: "Nguồn Máy Tính Thermalright TG-1000 1000W ATX 3.0 (80 Plus Gold)",
        price: 2400000,
        image: "images/nguon-thermalright-tg-1000.jpg",
        brand: "Thermalright",
        warranty: "36 tháng",
        condition: "NEW",
        power: "1000W",
        connectors: {
            mainboard: "1x 24-pin",
            cpu: ["2x 8-pin (4+4) ATX12V"],
            pcie: ["3x 8-pin (6+2)", "1x 12-pin (12VHPWR)"],
            sata: 8,
            molex: 4
        }
    },
    "COSAIR850": {
        name: "Nguồn Máy Tính Corsair RM850e ATX 3.0 850W (80 Plus Gold)",
        price: 1800000,
        image: "images/nguon-corsair-rm850e.jpg",
        brand: "Corsair",
        warranty: "36 tháng",
        condition: "NEW",
        power: "850W",
        connectors: {
            mainboard: "1x 24-pin",
            cpu: ["2x 8-pin (4+4) ATX12V"],
            pcie: ["3x 8-pin (6+2)", "1x 12-pin (12VHPWR)"],
            sata: 10,
            molex: 4
        }
    },
    "CENTAUR750": {
        name: "Nguồn Centaur 750W 80 Plus",
        price: 899000,
        image: "images/nguon-centaur-750w-80-plus.jpg",
        brand: "Khác",
        warranty: "36 tháng",
        condition: "NEW",
        power: "750W",
        connectors: {
            mainboard: "1x 24-pin",
            cpu: ["1x 8-pin (4+4) ATX12V"],
            pcie: ["2x 8-pin (6+2)"],
            sata: 6,
            molex: 3
        }
    }
};



const caseData = {
    "NYX3F": {
        name: "Xigmatek NYX AIR 3F",
        price: 600000,
        image: "images/xigmatek-nyx-air-3f.jpg",
        brand: "Xigmatek",
        warranty: "12 tháng",
        condition: "NEW",
        supportedMainboards: ["ATX", "M-ATX", "ITX"],
        dimensions: "400mm x 200mm x 450mm"
    },
    "CUBIM": {
        name: "Xigmatek Cubi M Black",
        price: 799000,
        image: "images/xigmatek-cubi-m-black.jpg",
        brand: "Xigmatek",
        warranty: "12 tháng",
        condition: "NEW",
        supportedMainboards: ["M-ATX", "ITX"],
        dimensions: "350mm x 180mm x 400mm"
    },
    "NANO": {
        name: "Xigmatek Cubi M Nano M-ATX Black",
        price: 600000,
        image: "images/xigmatek-cubi-m-nano-m-atx-black.jpg",
        brand: "Xigmatek",
        warranty: "12 tháng",
        condition: "NEW",
        supportedMainboards: ["M-ATX", "ITX"],
        dimensions: "340mm x 170mm x 390mm"
    },
    "GEMINI": {
        name: "Xigmatek Gemini M No Fan",
        price: 500000,
        image: "images/xigmatek-gemini-m-no-fan.jpg",
        brand: "Xigmatek",
        warranty: "12 tháng",
        condition: "NEW",
        supportedMainboards: ["M-ATX", "ITX"],
        dimensions: "360mm x 185mm x 410mm"
    },
    "MK400": {
        name: "Vỏ Case Máy Tính KENOO ESPORT MK400 (MATX, Case Bể Cá, Kính Cong)",
        price: 699000,
        image: "images/kenoo-esport-mk400.jpg",
        brand: "KENOO",
        warranty: "12 tháng",
        condition: "NEW",
        supportedMainboards: ["M-ATX", "ITX"],
        dimensions: "370mm x 190mm x 420mm"
    },
    "GA3": {
        name: "Vỏ Case 2 Mặt Kính Cường Lực",
        price: 300000,
        image: "images/gaming-start-ga3fg.jpg",
        brand: "Gaming Start",
        warranty: "12 tháng",
        condition: "NEW",
        supportedMainboards: ["ATX", "M-ATX", "ITX"],
        dimensions: "410mm x 200mm x 460mm"
    },
    "GA": {
        name: "Vỏ Case Gaming Start GA",
        price: 500000,
        image: "images/gaming-start-ga3f.jpg",
        brand: "Gaming Start",
        warranty: "12 tháng",
        condition: "NEW",
        supportedMainboards: ["ATX", "M-ATX", "ITX"],
        dimensions: "420mm x 210mm x 470mm"
    }
};

const cpuCoolerData = {
    "STOCK": {
        name: "Tản nhiệt Stock Intel",
        price: 60000,
        image: "images/stock-intel-cooler.jpg",
        brand: "Intel",
        warranty: "Không bảo hành",
        condition: "NEW",
        sockets: ["Intel LGA1700", "LGA1200", "LGA115x"],
        sync: "Không hỗ trợ"
    },
    "2ongdong": {
        name: "Tản nhiệt 2 ống đồng",
        price: 100000,
        image: "images/2ongdong.jpg",
        brand: "Intel",
        warranty: "6 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1700", "LGA1200", "LGA115x"],
        sync: "Không hỗ trợ"
    },

    "CR1000": {
        name: "Jonsbo CR-1000 RGB",
        price: 330000,
        image: "images/jonsbo-cr-1000-rgb.jpg",
        brand: "Jonsbo",
        warranty: "12 tháng",
        condition: "NEW",
        sockets: ["Intel LGA775", "LGA1150", "LGA1151", "LGA1155", "LGA1156", "AMD AM4", "AM3+", "AM3", "AM2+", "AM2", "FM2+", "FM2", "FM1"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    },
    "AIR01": {
        name: "CT-Air 01",
        price: 290000,
        image: "images/ct-air-01.jpg",
        brand: "Cooler Master",
        warranty: "12 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1700", "AMD AM4", "AM5"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    },
    "thermalright-frost-spirit-140": {
        name: "Thermalright Frost Spirit 140",
        price: 1100000,
        image: "images/thermalright-frost-spirit-140.jpg",
        brand: "Thermalright",
        warranty: "24 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1700", "AMD AM4", "AM5"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    },
    "TMR120SE": {
        name: "Thermalright Peerless Assassin 120 SE ARGB",
        price: 740000,
        image: "images/thermalright-peerless-assassin-120-se-argb.jpg",
        brand: "Thermalright",
        warranty: "24 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1700", "AMD AM4", "AM5"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    },
    "TMR-ELITE-360": {
        name: "Thermalright Aqua Elite 360 ARGB Black",
        price: 1400000,
        image: "images/thermalright-aqua-elite-360-argb-black.jpg",
        brand: "Thermalright",
        warranty: "24 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1700", "AMD AM4", "AM5"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    },
    "TMR360W": {
        name: "Thermalright Frozen Warframe 360 SE White ARGB",
        price: 2100000,
        image: "images/thermalright-frozen-warframe-360-se-white-argb.jpg",
        brand: "Thermalright",
        warranty: "24 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1700", "AMD AM4", "AM5"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    },
    "TMR360B": {
        name: "Thermalright Frozen Warframe 360 SE Black ARGB",
        price: 2050000,
        image: "images/thermalright-frozen-warframe-360-se-black-argb.jpg",
        brand: "Thermalright",
        warranty: "24 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1700", "AMD AM4", "AM5"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    },
    "TMR240W": {
        name: "Thermalright Frozen Warframe 240 SE White ARGB",
        price: 1600000,
        image: "images/thermalright-frozen-warframe-240-se-white-argb.jpg",
        brand: "Thermalright",
        warranty: "24 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1700", "AMD AM4", "AM5"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    },
    "TMR240B": {
        name: "Thermalright Frozen Warframe 240 SE Black ARGB",
        price: 1550000,
        image: "images/thermalright-frozen-warframe-240-se-black-argb.jpg",
        brand: "Thermalright",
        warranty: "24 tháng",
        condition: "NEW",
        sockets: ["Intel LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1200", "LGA1700", "AMD AM4", "AM5"],
        sync: "Hỗ trợ đồng bộ với bo mạch chủ thông qua đầu cắm 5V ARGB"
    }
};


const hddData = {
    "wd-blue-500gb": {
        name: "Ổ cứng HDD Western Digital Blue 500GB 3.5\" 7200RPM 16MB",
        price: 260000,
        image: "images/wd-blue-500gb.jpg",
        brand: "Western Digital",
        warranty: "6 tháng",
    },
    "wd-blue-1000gb": {
        name: "Ổ cứng HDD Western Digital Blue 1000GB 3.5\" 7200RPM 16MB",
        price: 600000,
        image: "images/wd-blue-1000gb.jpg",
        brand: "Western Digital",
        warranty: "6 tháng",
    },
    "wd-blue-2000gb": {
        name: "Ổ cứng HDD Western Digital Blue 2000GB 3.5\" 7200RPM 16MB",
        price: 1000000,
        image: "images/wd-blue-2000gb.jpg",
        brand: "Western Digital",
        warranty: "6 tháng",
    },
    "wd-blue-1tb": {
        name: "Ổ cứng HDD WD Blue 1TB 3.5 inch, 7200RPM, SATA, 64MB Cache",
        price: 1330000,
        image: "images/wd-blue-1tb.jpg",
        brand: "Western Digital",
        warranty: "24 tháng",
        condition: "NEW",
    },
    "seagate-skyhawk-4tb": {
        name: "Ổ cứng HDD Seagate SkyHawk 4TB 3.5 inch, 5400RPM, SATA, 256MB Cache",
        price: 2650000,
        image: "images/seagate-skyhawk-4tb.jpg",
        brand: "Seagate",
        warranty: "24 tháng",
        condition: "NEW",
    },
    "wd-blue-2tb": {
        name: "Ổ cứng HDD WD Blue 2TB 3.5 inch, 7200RPM, SATA, 256MB Cache",
        price: 1590000,
        image: "images/wd-blue-2tb.jpg",
        brand: "Western Digital",
        warranty: "24 tháng",
        condition: "NEW",
    }
};

const monitorData = {
    "ip25f180": {
        name: "Màn hình DUAN IP25F180 25 inch IPS 180Hz 1ms",
        price: 2200000,
        image: "images/duan-ip25f180.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "180Hz",
        screenSize: "25 inch"
    },
    "da272qp": {
        name: "Màn hình DUAN 27 inch 2K 100Hz DA272QP IPS",
        price: 3200000,
        image: "images/duan-da272qp.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "100Hz",
        screenSize: "27 inch"
    },
    "ip2409s": {
        name: "Màn hình DUAN DT-IP2409S 23.8 inch IPS Full HD 100Hz 1ms",
        price: 1600000,
        image: "images/duan-dt-ip2409s.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "100Hz",
        screenSize: "23.8 inch"
    },
    "ip278s": {
        name: "Màn hình DUAN IP278S 27 inch 180Hz IPS 1ms",
        price: 2900000,
        image: "images/duan-ip278s.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "180Hz",
        screenSize: "27 inch"
    },
    "v2218s": {
        name: "Màn hình DUAN 22 inch DT-V2218S 100Hz 1ms VA FHD",
        price: 1400000,
        image: "images/duan-dt-v2218s.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
        condition: "NEW",
        panelType: "VA",
        refreshRate: "100Hz",
        screenSize: "22 inch"
    },
    "dell-ultrasharp-u2424h": {
        name: "Màn hình Dell UltraSharp U2424H 23.8 inch FHD IPS 120Hz 5ms",
        price: 5500000,
        image: "images/dell-ultrasharp-u2424h.jpg",
        brand: "Dell",
        warranty: "36 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "120Hz",
        screenSize: "23.8 inch"
    },
    "dell-s2725h": {
        name: "Màn hình Dell S2725H 27 inch FHD IPS 100Hz 4ms loa",
        price: 4300000,
        image: "images/dell-s2725h.jpg",
        brand: "Dell",
        warranty: "36 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "100Hz",
        screenSize: "27 inch"
    },
    "asus-proart-pa248qv": {
        name: "Màn hình ASUS ProArt PA248QV 24 inch WUXGA IPS 75Hz 5ms",
        price: 4700000,
        image: "images/asus-proart-pa248qv.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "75Hz",
        screenSize: "24 inch"
    },
    "samsung-odyssey-g4-ls25bg400eexxv": {
        name: "Màn hình Gaming Samsung Odyssey G4 LS25BG400EEXXV 25 inch FHD IPS 240Hz",
        price: 4500000,
        image: "images/samsung-odyssey-g4-ls25bg400eexxv.jpg",
        brand: "Samsung",
        warranty: "24 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "240Hz",
        screenSize: "25 inch"
    },
    "lg-ultragear-27gs75q-b": {
        name: "Màn hình Gaming LG UltraGear 27GS75Q-B 27 inch IPS 2K 200Hz 1ms",
        price: 6500000,
        image: "images/lg-ultragear-27gs75q-b.jpg",
        brand: "LG",
        warranty: "24 tháng",
        condition: "NEW",
        panelType: "IPS",
        refreshRate: "200Hz",
        screenSize: "27 inch"
    },
    "lg-ultragear-24gs50f-b": {
        name: "Màn hình LG UltraGear 24GS50F-B Gaming 23.7 inch VA FHD 180Hz 1ms",
        price: 2500000,
        image: "images/lg-ultragear-24gs50f-b.jpg",
        brand: "LG",
        warranty: "24 tháng",
        condition: "NEW",
        panelType: "VA",
        refreshRate: "180Hz",
        screenSize: "23.7 inch"
    }
};

document.getElementById('cpu-type').addEventListener('change', function () {
    const selectedCpuType = this.value; // Lấy giá trị được chọn (Intel hoặc AMD)
    const cpuSelect = document.getElementById('cpu'); // Dropdown chọn CPU

    // Xóa tất cả các tùy chọn hiện tại
    cpuSelect.innerHTML = '<option value="" disabled selected>Chọn CPU</option>';

    // Thêm các tùy chọn CPU tương ứng
    if (selectedCpuType === "Intel") {
        cpuSelect.innerHTML += `
            <option value="9100f">Intel Core i3-9100f</option>
<option value="10100f">Intel Core i3-10100f</option>
<option value="10105">Intel Core i3-10105</option>
<option value="10105f">Intel Core i3-10105F</option>
<option value="12100f">Intel Core i3-12100f</option>
<option value="13100f">Intel Core i3-13100</option>
<option value="14100f">Intel Core i3-13100</option>
<option value="3470">Intel Core i5-3470 (Cũ)</option>
<option value="4570">Intel Core i5-4570 (Cũ)</option>
<option value="6500">Intel Core i5-6500 (Cũ)</option>
<option value="7400">Intel Core i5-7400 (Cũ)</option>
<option value="8400">Intel Core i5-8400 (Cũ)</option>
<option value="9400f">Intel Core i5-9400f</option>
<option value="10400f">Intel Core i5-10400f</option>
<option value="11400f">Intel Core i5-11400f</option>
<option value="12400f">Intel Core i5-12400f</option>
<option value="12600f">Intel Core i5-12600KF</option>
<option value="13400f">Intel Core i5-13400f</option>
<option value="13600kf">Intel Core i5-13600KF</option>
<option value="14600kf">Intel Core i5-14600KF</option>
<option value="8700">Intel Core i7-8700 (Cũ)</option>
<option value="9700k">Intel Core i7-9700K (Cũ)</option>
<option value="10700k">Intel Core i7-10700K (Cũ)</option>
<option value="10700kF">Intel Core i7-10700KF (Cũ)</option>
<option value="12700f">Intel Core i7-12700f</option>
<option value="13700k">Intel Core i7-13700K</option>

        `;
    } else if (selectedCpuType === "Amd") {
        cpuSelect.innerHTML += `
            <option value="3600">AMD Ryzen 5 3600 (Cũ)</option>
<option value="5500">AMD Ryzen 5 5500</option>
<option value="5600">AMD Ryzen 5 5600</option>
<option value="5600X">AMD Ryzen 5 5600X</option>
<option value="5600G">AMD Ryzen 5 5600G</option>
<option value="7500f">AMD Ryzen 5 7500f</option>
<option value="7600">AMD Ryzen 5 7600 (Tray)</option>
<option value="7600x">AMD Ryzen 5 7600X (Tray)</option>
<option value="3700x">AMD Ryzen 7 3700X (Cũ)</option>
<option value="5700x">AMD Ryzen 7 5700X</option>
<option value="5700x3D">AMD Ryzen 7 5700X3D</option>
<option value="5800x">AMD Ryzen 7 5800X</option>
<option value="7700x">AMD Ryzen 7 7700X</option>
<option value="7800x3d">AMD Ryzen 7 7800X3D (Tray)</option>
<option value="7700">AMD Ryzen 7 7700 (Tray)</option>
<option value="5900x">AMD Ryzen 9 5900X (Cũ)</option>
<option value="5950x">AMD Ryzen 9 5950X (Cũ)</option>
<option value="7900x">AMD Ryzen 9 7900X</option>
<option value="7950x">AMD Ryzen 9 7950X</option>
<option value="7950x3d">AMD Ryzen 9 7950X3D</option>
<option value="7900">AMD Ryzen 9 7900 (Tray)</option>
        `;
    }
});


// Khai báo biến toàn cục
let isAutoSelecting = false;

// Giả sử các dữ liệu components đã được định nghĩa đầy đủ
const components = {
    cpu: cpuData,
    mainboard: mainboardData,
    vga: vgaData,
    ram: ramData,
    ssd: ssdData,
    psu: psuData,
    case: caseData,
    cpuCooler: cpuCoolerData,
    hdd: hddData,     // <-- Đảm bảo có dòng này
    monitor: monitorData // <-- Đảm bảo có dòng này
};

// Cấu hình global
const intelBudgetConfigsValorant = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
};

const amdBudgetConfigsValorant = {
    '7M': {
        cpu: "3600",
        mainboard: "JGINYUE-B450",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};

const intelBudgetConfigsPubg = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },


};

const amdBudgetConfigsPubg = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },


};

const intelBudgetConfigsLol = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};

const amdBudgetConfigsLol = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};

const intelBudgetConfigsGtaV = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};

const amdBudgetConfigsGtaV = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};


const intelBudgetConfigsCsgo = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};

const amdBudgetConfigsCsgo = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};

const intelBudgetConfigsEldenRing = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};

const amdBudgetConfigsEldenRing = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};


const intelBudgetConfigsGodOfWar = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};

const amdBudgetConfigsGodOfWar = {
    '3M': {
        cpu: "1220v3",
        mainboard: "H81",
        vga: "750ti",
        ram: "D38G",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '4M': {
        cpu: "9100f",
        mainboard: "H310",
        vga: "750ti",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "STOCK",
        psu: "350W"
    },
    '5M': {
        cpu: "10100f",
        mainboard: "H410",
        vga: "960",
        ram: "sstc-16",
        ssd: "sata-sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '6M': {
        cpu: "12100F",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '7M': {
        cpu: "12100f",
        mainboard: "HNZ-H610",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "2ongdong",
        psu: "DT660"
    },
    '8M': {
        cpu: "13400f",
        mainboard: "HNZ-H610",
        vga: "960",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '12M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-512",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};
const budgetConfigs = {
    "csgo": {
        "Intel": {
            "3M": {
                cpu: "Intel Core i3-10100F",
                mainboard: "ASUS H510M-K",
                vga: "GTX 1050 Ti",
                ram: "8GB DDR4 3200MHz",
                ssd: "Kingston 256GB NVMe"
            },
            "4M": {
                cpu: "Intel Core i5-10400F",
                mainboard: "MSI B560M PRO",
                vga: "GTX 1650 Super",
                ram: "16GB DDR4 3200MHz",
                ssd: "SSTC 512GB NVMe"
            }
        },
        "AMD": {
            "3M": {
                cpu: "Ryzen 3 3100",
                mainboard: "ASRock A520M-HDV",
                vga: "RX 570 4GB",
                ram: "8GB DDR4 3200MHz",
                ssd: "Kingston 256GB NVMe"
            },
            "4M": {
                cpu: "Ryzen 5 3500X",
                mainboard: "Gigabyte B450M DS3H",
                vga: "RX 580 8GB",
                ram: "16GB DDR4 3200MHz",
                ssd: "SSTC 512GB NVMe"
            }
        }
    },
    "valorant": {
        "Intel": {
            "3M": {
                cpu: "Intel Core i3-10100F",
                mainboard: "ASUS H510M-K",
                vga: "GTX 1050 Ti",
                ram: "8GB DDR4 3200MHz",
                ssd: "Kingston 256GB NVMe"
            },
            "4M": {
                cpu: "Intel Core i5-10400F",
                mainboard: "MSI B560M PRO",
                vga: "GTX 1650 Super",
                ram: "16GB DDR4 3200MHz",
                ssd: "SSTC 512GB NVMe"
            }
        },
        "AMD": {
            "3M": {
                cpu: "Ryzen 3 3100",
                mainboard: "ASRock A520M-HDV",
                vga: "RX 570 4GB",
                ram: "8GB DDR4 3200MHz",
                ssd: "Kingston 256GB NVMe"
            },
            "4M": {
                cpu: "Ryzen 5 3500X",
                mainboard: "Gigabyte B450M DS3H",
                vga: "RX 580 8GB",
                ram: "16GB DDR4 3200MHz",
                ssd: "SSTC 512GB NVMe"
            }
        }
    }
};


document.addEventListener('DOMContentLoaded', function () {
    // Khai báo các phần tử DOM
    const componentSelects = {
        cpu: document.getElementById('cpu'),
        mainboard: document.getElementById('mainboard'),
        vga: document.getElementById('vga'),
        ram: document.getElementById('ram'),
        ssd: document.getElementById('ssd'),
        psu: document.getElementById('psu'),
        case: document.getElementById('case'),
        cpuCooler: document.getElementById('cpuCooler'),
        hdd: document.getElementById('hdd'),     // <-- Đảm bảo có dòng này
        monitor: document.getElementById('monitor')    // <-- Đảm bảo có dòng này
    };
    Object.entries(componentSelects).forEach(([name, element]) => {
        if (!element) {
            console.error(`Không tìm thấy phần tử #${name}`);
        }
    });
    populateDropdowns('cpu', 'cpu', cpuData);
    populateDropdowns('mainboard', 'mainboard', mainboardData);
    populateDropdowns('vga', 'vga', vgaData);
    populateDropdowns('ram', 'ram', ramData);
    populateDropdowns('ssd', 'ssd', ssdData);
    populateDropdowns('psu', 'psu', psuData);
    populateDropdowns('case', 'case', caseData);
    populateDropdowns('cpuCooler', 'cpuCooler', cpuCoolerData);
    populateDropdowns('hdd', 'hdd', hddData);     // <-- Đảm bảo có dòng này
    populateDropdowns('monitor', 'monitor', monitorData); // <-- Đảm bảo có dòng này

    // Các phần tử hiển thị
    const totalPriceDisplay = document.getElementById('total-price');
    const selectedComponentsList = document.getElementById('selected-components-list');
    const summaryModal = document.getElementById('summary-modal');
    const modalSummaryContent = document.getElementById('modal-components-list'); // SỬA ĐỔI ID CHO ĐÚNG
    const modalTotalPriceDisplay = document.getElementById('modal-total-price');
    const imagePreviewContainer = document.getElementById('image-preview-container');
    const calculateButton = document.getElementById('calculate-button');


    // Thêm CSS
    const style = document.createElement('style');
    style.textContent = `
        .component-card {
            border: 1px solid #ddd;
            padding: 15px;
            margin: 10px 0;
            display: flex;
            align-items: center;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .component-image {
            max-width: 100px;
            margin-right: 20px;
            object-fit: contain;
        }
        #total-price {
            background: #f8f9fa;
            padding: 15px;
            margin-top: 20px;
            border-radius: 8px;
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
        }
        .modal-content {
            background: white;
            padding: 20px;
            width: 90%;
            max-width: 800px;
            margin: 50px auto;
            border-radius: 10px;
        }
         /* CSS cho bảng */
        .component-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        .component-table th, .component-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        .component-table th {
            background-color: #f4f4f4;
            font-weight: bold;
        }
        .component-table img {
            max-width: 70px; /* Điều chỉnh kích thước ảnh trong bảng */
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    `;
    document.head.appendChild(style);

    function updateSelectedComponents() {
        selectedComponentsList.innerHTML = '';
        let total = 0;
        const selectedComponentsDetails = []; // Khởi tạo mảng để chứa thông tin chi tiết linh kiện

        // Tính toán tổng giá và tạo card
        for (const [type, select] of Object.entries(componentSelects)) {
            const value = select.value;
            if (value && components[type]?.[value]) {
                const component = components[type][value];
                total += component.price;
        
                const card = document.createElement('div');
                card.className = 'component-card';
        
                card.innerHTML = `
                    ${component.image ? `<img src="${component.image}" class="component-image" alt="${component.name}">` : ''}
                    <h3>${component.name} - ${component.price.toLocaleString()} VNĐ</h3>
                    <div class="component-info" style="display: none;">
                        ${component.socket ? `<p>Socket: ${component.socket}</p>` : ''}
                        ${component.memoryType ? `<p>Loại RAM: ${component.memoryType}</p>` : ''}
                        ${component.cores ? `<p>Cores: ${component.cores}</p>` : ''}
                        ${component.threads ? `<p>Threads: ${component.threads}</p>` : ''}
                        ${component.technology ? `<p>Technology: ${component.technology}</p>` : ''}
                        ${component.ram_support ? `<p>RAM Support: ${component.ram_support}</p>` : ''}
                        ${component.ram_bus ? `<p>RAM Bus: ${component.ram_bus}</p>` : ''}
                        ${component.vram ? `<p>VRAM: ${component.vram}</p>` : ''}
                        ${component.vram_type ? `<p>VRAM Type: ${component.vram_type}</p>` : ''}
                        ${component.card_type ? `<p>Card Type: ${component.card_type}</p>` : ''}
                        ${component.type ? `<p>Type: ${component.type}</p>` : ''}
                        ${component.speed ? `<p>Speed: ${component.speed}</p>` : ''}
                        ${component.size ? `<p>Size: ${component.size}</p>` : ''}
                        ${component.nvmeSlots ? `<p>NVMe Slots: ${component.nvmeSlots}</p>` : ''}
                        ${component.pcieVersion ? `<p>PCIe Version: ${component.pcieVersion}</p>` : ''}
                        ${component.formFactor ? `<p>Form Factor: ${component.formFactor}</p>` : ''} <!-- Đã thêm dòng này -->
                        ${component.panelType ? `<p>Panel Type: ${component.panelType}</p>` : ''}
                        ${component.refreshRate ? `<p>Refresh Rate: ${component.refreshRate}</p>` : ''}
                        ${component.screenSize ? `<p>Screen Size: ${component.screenSize}</p>` : ''}
        
                        ${component.sockets ? `<p>Sockets hỗ trợ: ${component.sockets.join(', ')}</p>` : ''}
                        ${component.sync ? `<p>Đồng bộ LED: ${component.sync}</p>` : ''}
        
                        ${component.supportedMainboards ? `<p>Mainboard hỗ trợ: ${component.supportedMainboards.join(', ')}</p>` : ''}
                        ${component.dimensions ? `<p>Kích thước Case: ${component.dimensions}</p>` : ''}
        
                        ${component.connectors ? `<div class="connectors">
                            <p>Connectors:</p>
                            <ul>
                                ${component.connectors.mainboard ? `<li>Mainboard: ${component.connectors.mainboard}</li>` : ''}
                                ${component.connectors.cpu ? `<li>CPU: ${Array.isArray(component.connectors.cpu) ? component.connectors.cpu.join(', ') : component.connectors.cpu}</li>` : ''}
                                ${component.connectors.pcie ? `<li>PCIe: ${Array.isArray(component.connectors.pcie) ? component.connectors.pcie.join(', ') : component.connectors.pcie}</li>` : ''}
                                ${component.connectors.sata ? `<li>SATA: ${component.connectors.sata}</li>` : ''}
                                ${component.connectors.molex ? `<li>Molex: ${component.connectors.molex}</li>` : ''}
                            </ul>
                        </div>` : ''}
        
                        ${component.power ? `<p>Power: ${component.power}</p>` : ''}
                    </div>
                `;
        
                // Thêm sự kiện click để hiển thị thông tin chi tiết
                card.addEventListener("click", function () {
                    const info = card.querySelector(".component-info");
                    info.style.display = info.style.display === "none" ? "block" : "none";
                });
        
                selectedComponentsList.appendChild(card);
                selectedComponentsDetails.push(component);
            }
        }
        

        // Cập nhật tổng giá - FIX CHÍNH
        const priceElement = totalPriceDisplay.querySelector('p');
        if (priceElement) {
            priceElement.textContent = `${total.toLocaleString()} VNĐ`;
        } else {
            console.error('Không tìm thấy phần tử hiển thị giá');
        }

        return { total, selectedComponentsDetails }; // Trả về object chứa cả tổng tiền và danh sách chi tiết
    }

    function calculateTotalPriceAndSummary() {
        if (!modalSummaryContent || !modalTotalPriceDisplay || !imagePreviewContainer) {
            console.error("Missing modal elements");
            return;
        }

        const calculationResult = updateSelectedComponents(); // Get the return value
        const total = calculationResult.total;         // Extract total
        const selectedComponentsDetails = calculationResult.selectedComponentsDetails; // Extract selectedComponentsDetails

        modalSummaryContent.innerHTML = ''; // Xóa nội dung cũ của modal
        imagePreviewContainer.innerHTML = ''; // Xóa ảnh cũ nếu có

        // Ẩn phần hiển thị text tổng tiền trong modal (chỉ hiển thị bảng)
        modalTotalPriceDisplay.style.display = 'none';

        // Tạo bảng HTML để hiển thị thông tin chi tiết
        const table = document.createElement('table');
        table.className = 'component-table'; // Thêm class để CSS (tùy chọn)

        // Tạo hàng tiêu đề bảng
        const headerRow = table.insertRow();
        const headers = ['Loại', 'Hình ảnh', 'Tên Linh Kiện', 'Giá Tiền', 'Bảo hành', 'Tình trạng']; // Thêm "Loại"
        headers.forEach(headerText => {
            const headerCell = document.createElement('th');
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });

        // Thêm dữ liệu linh kiện vào bảng
        selectedComponentsDetails.forEach(component => {
            const dataRow = table.insertRow();

            // Ô Hình ảnh


            // Ô Loại linh kiện (type) - Lấy từ key của componentSelects
            const typeCell = dataRow.insertCell();
            let componentType = '';
            for (const [type, select] of Object.entries(componentSelects)) {
                if (select.value === Object.keys(components[type]).find(key => components[type][key] === component)) {
                    componentType = type.toUpperCase(); // In hoa loại linh kiện
                    break;
                }
            }
            typeCell.textContent = componentType;

            const imageCell = dataRow.insertCell();
            if (component.image) {
                const img = document.createElement('img');
                img.src = component.image;
                img.alt = component.name;
                img.style.maxWidth = '70px'; // Điều chỉnh kích thước ảnh trong bảng
                imageCell.appendChild(img);
            }


            // Ô Tên linh kiện
            const nameCell = dataRow.insertCell();
            nameCell.textContent = component.name;

            // Ô Giá
            const priceCell = dataRow.insertCell();
            priceCell.textContent = `${component.price.toLocaleString()} VNĐ`;

            // Ô Bảo hành
            const warrantyCell = dataRow.insertCell();
            warrantyCell.textContent = component.warranty || 'Không có';

            // Ô Tình trạng
            const conditionCell = dataRow.insertCell();
            conditionCell.textContent = component.condition || 'Không rõ';
        });

        modalSummaryContent.appendChild(table); // Thêm bảng vào modal
        summaryModal.style.display = 'block'; // Hiển thị modal
        modalTotalPriceDisplay.style.display = 'block'; // Đảm bảo phần tử hiển thị
        modalTotalPriceDisplay.textContent = `Tổng cộng: ${total.toLocaleString()} VNĐ`; // Cập nhật giá tiền
    }
    function autoSelectConfig() {
        isAutoSelecting = true;
    
        const gameDropdown = document.getElementById('game-genre');
        const budgetDropdown = document.getElementById('budget-range');
        const cpuTypeDropdown = document.getElementById('cpu-type');
        const cpuDropdown = document.getElementById('cpu');
        const mainboardDropdown = document.getElementById('mainboard');
    
        if (!gameDropdown || !budgetDropdown || !cpuTypeDropdown || !cpuDropdown || !mainboardDropdown) {
            console.error("❌ Không tìm thấy một trong các dropdown! Kiểm tra lại ID.");
            isAutoSelecting = false;
            return;
        }
    
        const selectedGame = gameDropdown.value.trim();
        const selectedBudget = budgetDropdown.value.trim();
        const selectedCpuType = cpuTypeDropdown.value.trim();
    
        if (!selectedGame || !selectedBudget || !selectedCpuType) {
            console.warn("⚠️ Chưa chọn đầy đủ thông tin! Kiểm tra lại.");
            isAutoSelecting = false;
            return;
        }
    
        let selectedConfigList = null;
    
        if (selectedCpuType === "Intel") {
            switch (selectedGame) {
                case "valorant": selectedConfigList = intelBudgetConfigsValorant; break;
                case "csgo": selectedConfigList = intelBudgetConfigsCsgo; break;
                case "pubg": selectedConfigList = intelBudgetConfigsPubg; break;
                case "lol": selectedConfigList = intelBudgetConfigsLol; break;
                case "gta-v": selectedConfigList = intelBudgetConfigsGtaV; break;
                case "elden-ring": selectedConfigList = intelBudgetConfigsEldenRing; break;
                case "god-of-war": selectedConfigList = intelBudgetConfigsGodOfWar; break;
                default:
                    console.warn("❌ Game không được hỗ trợ:", selectedGame);
                    isAutoSelecting = false;
                    return;
            }
        } else if (selectedCpuType === "Amd") {
            switch (selectedGame) {
                case "valorant": selectedConfigList = amdBudgetConfigsValorant; break;
                case "csgo": selectedConfigList = amdBudgetConfigsCsgo; break;
                case "pubg": selectedConfigList = amdBudgetConfigsPubg; break;
                case "lol": selectedConfigList = amdBudgetConfigsLol; break;
                case "gta-v": selectedConfigList = amdBudgetConfigsGtaV; break;
                case "elden-ring": selectedConfigList = amdBudgetConfigsEldenRing; break;
                case "god-of-war": selectedConfigList = amdBudgetConfigsGodOfWar; break;
                default:
                    console.warn("❌ Game không được hỗ trợ:", selectedGame);
                    isAutoSelecting = false;
                    return;
            }
        } else {
            console.warn("❌ Loại CPU không hợp lệ:", selectedCpuType);
            isAutoSelecting = false;
            return;
        }
    
        const config = selectedConfigList[selectedBudget];
    
        if (!config) {
            // Tạo div cho cảnh báo full màn hình
            const alertDiv = document.createElement('div');
            alertDiv.style.position = 'fixed';
            alertDiv.style.top = '0';
            alertDiv.style.left = '0';
            alertDiv.style.width = '100%';
            alertDiv.style.height = '100%';
            alertDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            alertDiv.style.color = 'white';
            alertDiv.style.fontSize = '70px';
            alertDiv.style.display = 'flex';
            alertDiv.style.alignItems = 'center';
            alertDiv.style.justifyContent = 'center';
            alertDiv.style.zIndex = '9999';
            alertDiv.style.textAlign = 'center';
            alertDiv.innerHTML = `
                <p>❌ Không có cấu hình phù hợp với tầm giá này: ${selectedBudget}</p>
                <p>⚠️ AMD PHẢI TỪ 7 TRIỆU ĐỔ LÊN NHÉ</p>
            `;
            
            // Thêm div vào body
            document.body.appendChild(alertDiv);
        
            // Thêm sự kiện click để xóa cảnh báo khi người dùng ấn vào màn hình
            alertDiv.addEventListener('click', function() {
                document.body.removeChild(alertDiv);
            });
        
            // Ngừng chọn tự động
            isAutoSelecting = false;
            return;
        }
        
        
        
    
        function updateDropdown(id, value) {
            const dropdown = document.getElementById(id);
            if (dropdown) {
                let existingOptions = Array.from(dropdown.options).map(opt => opt.value);
                if (!existingOptions.includes(value)) {
                    dropdown.innerHTML += `<option value="${value}">${value}</option>`;
                }
                dropdown.value = value;
            }
        }
    
        updateDropdown('cpu', config.cpu);
        updateDropdown('mainboard', config.mainboard);
        updateDropdown('vga', config.vga);
        updateDropdown('ram', config.ram);
        updateDropdown('ssd', config.ssd);
        updateDropdown('case', config.case);
        updateDropdown('cpuCooler', config.cpuCooler);
        updateDropdown('psu', config.psu);
    
        // Ẩn CPU và Mainboard của loại CPU không được chọn
        function filterDropdownByCpuType() {
            const selectedCpuType = cpuTypeDropdown.value;
        
            // Lọc các lựa chọn CPU
            Array.from(cpuDropdown.options).forEach(option => {
                if (selectedCpuType === "Intel") {
                    // Hiển thị tất cả các CPU Intel
                    option.style.display = option.text.includes("Intel") ? "block" : "none";
                } else if (selectedCpuType === "AMD") {
                    // Hiển thị tất cả các CPU AMD
                    option.style.display = option.text.includes("AMD") ? "block" : "none";
                } else {
                    // Hiển thị tất cả các lựa chọn nếu không có loại CPU nào được chọn
                    option.style.display = "block";
                }
            });
        
            // Lọc các lựa chọn Mainboard (tương tự như CPU)
            Array.from(mainboardDropdown.options).forEach(option => {
                if (selectedCpuType === "Intel") {
                    // Hiển thị các Mainboard hỗ trợ Intel
                    option.style.display = option.text.includes("Intel") ? "block" : "none";
                } else if (selectedCpuType === "AMD") {
                    // Hiển thị các Mainboard hỗ trợ AMD
                    option.style.display = option.text.includes("AMD") ? "block" : "none";
                } else {
                    // Hiển thị tất cả các lựa chọn nếu không có loại CPU nào được chọn
                    option.style.display = "block";
                }
            });
        }
    
        // Tính toán tổng giá và hiển thị thông tin cấu hình
        calculateTotalPriceAndSummary(config);
    
        isAutoSelecting = false;
    }

    

    function populateDropdowns() {
        Object.entries(componentSelects).forEach(([type, select]) => {
            select.innerHTML = '<option value="" disabled selected>Chọn ' + type + '</option>';
            if (components[type]) {
                Object.entries(components[type]).forEach(([key, component]) => {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = `${component.name} - ${component.price.toLocaleString()} VNĐ`;
                    select.appendChild(option);
                });
            }
        });
    }


    // Event Listeners
    document.getElementById("game-genre").addEventListener("change", autoSelectConfig);
    document.getElementById('budget-range').addEventListener('input', autoSelectConfig);
    document.getElementById('cpu-type').addEventListener('change', autoSelectConfig);
    document.getElementById('budget-range').addEventListener('change', function () {
        if (this.value) { // Chỉ chạy nếu value không rỗng
            autoSelectConfig();
        }
    });


    calculateButton.addEventListener('click', () => {
        console.log("Nút Tính Toán Chi Phí đã được bấm!");
        calculateTotalPriceAndSummary(); // Gọi hàm tính toán và tạo bảng
        summaryModal.style.display = "block"; // Hiển thị modal sau khi tạo bảng
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        summaryModal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === summaryModal) {
            summaryModal.style.display = "none";
        }
    });

    // Khởi tạo
    populateDropdowns();
    updateSelectedComponents();

    Object.values(componentSelects).forEach(select => {
        select.addEventListener('change', () => {
            if (!isAutoSelecting) calculateTotalPriceAndSummary();
        });
    });
});
