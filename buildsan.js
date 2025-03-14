// Import dữ liệu linh kiện từ các file riêng lẻ
import {
    cpuData,
    mainboardData,
    vgaData,
    ramData,
    ssdData,
    psuData,
    caseData,
    cpuCoolerData,
    monitorData,
    hddData
} from './js/data/index.js';

// Import các cấu hình budget từ module configs
import { getConfig, intelConfigs, amdConfigs } from './js/configs/index.js';

// Đảm bảo các biến đánh giá hiệu năng là biến toàn cục - Fix cho Chrome
window.PERFORMANCE_RATINGS = {
    EXCELLENT: { label: "Xuất sắc", color: "#28a745", percentage: 95 },
    VERY_GOOD: { label: "Rất tốt", color: "#5cb85c", percentage: 80 },
    GOOD: { label: "Tốt", color: "#4bbf73", percentage: 65 },
    AVERAGE: { label: "Trung bình", color: "#f0ad4e", percentage: 50 },
    FAIR: { label: "Khá", color: "#fd7e14", percentage: 35 },
    WEAK: { label: "Yếu", color: "#dc3545", percentage: 20 }
};

// Định nghĩa đánh giá CPU
window.CPU_RATINGS = {
    "Core i3": { 
        gaming: window.PERFORMANCE_RATINGS.FAIR, 
        graphics: window.PERFORMANCE_RATINGS.FAIR, 
        office: window.PERFORMANCE_RATINGS.GOOD 
    },
    "Core i5": { 
        gaming: window.PERFORMANCE_RATINGS.GOOD, 
        graphics: window.PERFORMANCE_RATINGS.GOOD, 
        office: window.PERFORMANCE_RATINGS.VERY_GOOD 
    },
    "Core i7": { 
        gaming: window.PERFORMANCE_RATINGS.VERY_GOOD, 
        graphics: window.PERFORMANCE_RATINGS.VERY_GOOD, 
        office: window.PERFORMANCE_RATINGS.EXCELLENT 
    },
    "Core i9": { 
        gaming: window.PERFORMANCE_RATINGS.EXCELLENT, 
        graphics: window.PERFORMANCE_RATINGS.EXCELLENT, 
        office: window.PERFORMANCE_RATINGS.EXCELLENT 
    },
    "Ryzen 3": { 
        gaming: window.PERFORMANCE_RATINGS.FAIR, 
        graphics: window.PERFORMANCE_RATINGS.FAIR, 
        office: window.PERFORMANCE_RATINGS.GOOD 
    },
    "Ryzen 5": { 
        gaming: window.PERFORMANCE_RATINGS.GOOD, 
        graphics: window.PERFORMANCE_RATINGS.GOOD, 
        office: window.PERFORMANCE_RATINGS.VERY_GOOD 
    },
    "Ryzen 7": { 
        gaming: window.PERFORMANCE_RATINGS.VERY_GOOD, 
        graphics: window.PERFORMANCE_RATINGS.VERY_GOOD, 
        office: window.PERFORMANCE_RATINGS.EXCELLENT 
    },
    "Ryzen 9": { 
        gaming: window.PERFORMANCE_RATINGS.EXCELLENT, 
        graphics: window.PERFORMANCE_RATINGS.EXCELLENT, 
        office: window.PERFORMANCE_RATINGS.EXCELLENT 
    }
};

// Định nghĩa đánh giá VGA
window.VGA_RATINGS = {
    "GTX 1650": { gaming: window.PERFORMANCE_RATINGS.FAIR, graphics: window.PERFORMANCE_RATINGS.FAIR },
    "GTX 1660": { gaming: window.PERFORMANCE_RATINGS.AVERAGE, graphics: window.PERFORMANCE_RATINGS.AVERAGE },
    "RTX 2060": { gaming: window.PERFORMANCE_RATINGS.GOOD, graphics: window.PERFORMANCE_RATINGS.GOOD },
    "RTX 2070": { gaming: window.PERFORMANCE_RATINGS.GOOD, graphics: window.PERFORMANCE_RATINGS.VERY_GOOD },
    "RTX 3060": { gaming: window.PERFORMANCE_RATINGS.GOOD, graphics: window.PERFORMANCE_RATINGS.GOOD },
    "RTX 3070": { gaming: window.PERFORMANCE_RATINGS.VERY_GOOD, graphics: window.PERFORMANCE_RATINGS.VERY_GOOD },
    "RTX 3080": { gaming: window.PERFORMANCE_RATINGS.EXCELLENT, graphics: window.PERFORMANCE_RATINGS.EXCELLENT },
    "RTX 4060": { gaming: window.PERFORMANCE_RATINGS.VERY_GOOD, graphics: window.PERFORMANCE_RATINGS.VERY_GOOD },
    "RTX 4070": { gaming: window.PERFORMANCE_RATINGS.EXCELLENT, graphics: window.PERFORMANCE_RATINGS.EXCELLENT },
    "RTX 4080": { gaming: window.PERFORMANCE_RATINGS.EXCELLENT, graphics: window.PERFORMANCE_RATINGS.EXCELLENT },
    "RTX 4090": { gaming: window.PERFORMANCE_RATINGS.EXCELLENT, graphics: window.PERFORMANCE_RATINGS.EXCELLENT },
    "RX 570": { gaming: window.PERFORMANCE_RATINGS.FAIR, graphics: window.PERFORMANCE_RATINGS.FAIR },
    "RX 580": { gaming: window.PERFORMANCE_RATINGS.AVERAGE, graphics: window.PERFORMANCE_RATINGS.AVERAGE },
    "RX 5600 XT": { gaming: window.PERFORMANCE_RATINGS.GOOD, graphics: window.PERFORMANCE_RATINGS.GOOD },
    "RX 5700 XT": { gaming: window.PERFORMANCE_RATINGS.GOOD, graphics: window.PERFORMANCE_RATINGS.GOOD },
    "RX 6600": { gaming: window.PERFORMANCE_RATINGS.GOOD, graphics: window.PERFORMANCE_RATINGS.GOOD },
    "RX 6700 XT": { gaming: window.PERFORMANCE_RATINGS.VERY_GOOD, graphics: window.PERFORMANCE_RATINGS.VERY_GOOD },
    "RX 6800 XT": { gaming: window.PERFORMANCE_RATINGS.EXCELLENT, graphics: window.PERFORMANCE_RATINGS.EXCELLENT },
    "RX 7600": { gaming: window.PERFORMANCE_RATINGS.VERY_GOOD, graphics: window.PERFORMANCE_RATINGS.VERY_GOOD },
    "RX 7700 XT": { gaming: window.PERFORMANCE_RATINGS.VERY_GOOD, graphics: window.PERFORMANCE_RATINGS.EXCELLENT },
    "RX 7800 XT": { gaming: window.PERFORMANCE_RATINGS.EXCELLENT, graphics: window.PERFORMANCE_RATINGS.EXCELLENT },
    "RX 7900 XTX": { gaming: window.PERFORMANCE_RATINGS.EXCELLENT, graphics: window.PERFORMANCE_RATINGS.EXCELLENT }
};

// Initialize GAME_FPS_ESTIMATES as an empty object first
window.GAME_FPS_ESTIMATES = window.GAME_FPS_ESTIMATES || {};

// Extend the GAME_FPS_ESTIMATES with data from HowManyFPS
window.GAME_FPS_ESTIMATES = {
    ...window.GAME_FPS_ESTIMATES,
    "valorant": {
        notes: "Valorant là game esports nhẹ, tối ưu tốt cho cả CPU và GPU.",
        low: { fps: "350-400", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "300-350", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "250-300", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "200-250", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "csgo": {
        notes: "CS:GO phụ thuộc nhiều vào sức mạnh CPU, tối ưu tốt cho gaming.",
        low: { fps: "320-350", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "270-300", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "220-250", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "170-200", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "pubg": {
        notes: "PUBG đòi hỏi cân bằng giữa CPU và GPU để đạt hiệu năng tốt nhất.",
        low: { fps: "160-180", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "130-150", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "100-120", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "80-100", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "lol": {
        notes: "Liên Minh Huyền Thoại được tối ưu rất tốt, chạy mượt trên hầu hết cấu hình.",
        low: { fps: "350-400", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "300-350", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "250-300", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "200-250", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "gta-v": {
        notes: "GTA V là game open-world đòi hỏi cả CPU và GPU mạnh để đạt FPS cao.",
        low: { fps: "100-120", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "80-100", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "60-80", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "45-60", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "elden-ring": {
        notes: "Elden Ring có giới hạn FPS và đòi hỏi cấu hình khá để chơi mượt.",
        low: { fps: "80-90", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "65-75", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "50-60", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "40-50", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "naraka": {
        notes: "Naraka: Bladepoint cần GPU tốt để xử lý đồ họa và hiệu ứng.",
        low: { fps: "120-140", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "100-120", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "80-100", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "60-80", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "genshin": {
        notes: "Genshin Impact được tối ưu tốt và có thể chạy mượt trên nhiều cấu hình.",
        low: { fps: "180-200", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "160-180", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "140-160", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "120-140", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "fo4": {
        notes: "FIFA Online 4 được tối ưu tốt cho cả CPU và GPU.",
        low: { fps: "280-300", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "230-250", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "180-200", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "130-150", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "black-myth-wukong": {
        notes: "Black Myth: Wukong là game AAA đòi hỏi cấu hình mạnh.",
        low: { fps: "90-100", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "75-85", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "60-70", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "50-60", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "god-of-war": {
        notes: "God of War là game đòi hỏi cấu hình mạnh cho các cài đặt cao.",
        low: { fps: "100-110", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "85-95", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "70-80", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "60-70", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "battle-teams-2": {
        notes: "Battle Teams 2 là game bắn súng nhẹ, tối ưu tốt cho nhiều cấu hình.",
        low: { fps: "200-250", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "150-200", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "100-150", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "80-100", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "delta-force": {
        notes: "Delta Force là game bắn súng cổ điển, chạy tốt trên hầu hết cấu hình.",
        low: { fps: "250-300", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "200-250", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "150-200", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "100-150", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "audition": {
        notes: "Audition là game nhảy nhẹ, tối ưu tốt cho mọi cấu hình.",
        low: { fps: "200-250", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "180-220", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "150-180", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "120-150", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "mu-origin": {
        notes: "MU Origin là game nhập vai nhẹ, chạy tốt trên nhiều cấu hình.",
        low: { fps: "180-220", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "150-180", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "120-150", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "90-120", description: "Cài đặt ultra, độ phân giải 1080p" }
    },
    "crossfire": {
        notes: "CrossFire là game bắn súng online phổ biến, tối ưu tốt cho CPU.",
        low: { fps: "300-350", description: "Cài đặt thấp, độ phân giải 1080p" },
        medium: { fps: "250-300", description: "Cài đặt trung bình, độ phân giải 1080p" },
        high: { fps: "200-250", description: "Cài đặt cao, độ phân giải 1080p" },
        ultra: { fps: "150-200", description: "Cài đặt ultra, độ phân giải 1080p" }
    }
};

// Update game type classifications
window.GAME_TYPES = {
    ...window.GAME_TYPES,
    "battle-teams-2": { type: "esports", cpuDependency: "high" },
    "delta-force": { type: "esports", cpuDependency: "medium" },
    "audition": { type: "casual", cpuDependency: "low" },
    "mu-origin": { type: "mmorpg", cpuDependency: "medium" },
    "crossfire": { type: "esports", cpuDependency: "very-high" }
};

const components = {
    cpu: cpuData,
    mainboard: mainboardData,
    vga: vgaData,
    ram: ramData,
    ssd: ssdData,
    psu: psuData,
    case: caseData,
    cpuCooler: cpuCoolerData,
    hdd: hddData,
    monitor: monitorData
};

// Khai báo biến toàn cục
let isAutoSelecting = false;

// Add event listener for the game-genre dropdown as soon as the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const gameGenreDropdown = document.getElementById('game-genre');
    if (gameGenreDropdown) {
        gameGenreDropdown.addEventListener('change', function() {
            console.log("🎮 Game genre changed to:", this.value);
            console.log("Calling autoSelectConfig after game change");
            // Call the debug function first
            debugSelections();
            // Then try to auto-select
            autoSelectConfig();
        });
        console.log("✅ Successfully attached event listener to game-genre dropdown");
    } else {
        console.error("❌ Could not find game-genre dropdown on page load");
    }
    
    // Debug function to check all necessary selections
    window.debugSelections = function() {
        console.log("--------- DEBUG SELECTIONS ---------");
        const gameDropdown = document.getElementById('game-genre');
        const budgetRange = document.getElementById('budget-range');
        const cpuTypeDropdown = document.getElementById('cpu-type');
        
        console.log("Elements found:");
        console.log("- Game dropdown:", gameDropdown ? "✅" : "❌");
        console.log("- Budget range:", budgetRange ? "✅" : "❌");
        console.log("- CPU type dropdown:", cpuTypeDropdown ? "✅" : "❌");
        
        if (gameDropdown && budgetRange && cpuTypeDropdown) {
            console.log("Current values:");
            console.log("- Game:", gameDropdown.value || "not selected");
            console.log("- Budget:", budgetRange.value ? `${parseInt(budgetRange.value)/1000000}M` : "not set");
            console.log("- CPU type:", cpuTypeDropdown.value || "not selected");
            
            // Check if all values are valid for auto-selection
            const gameValid = gameDropdown.value && gameDropdown.value.trim() !== "";
            const budgetValid = budgetRange.value && !isNaN(parseInt(budgetRange.value));
            const cpuTypeValid = cpuTypeDropdown.value && cpuTypeDropdown.value.trim() !== "";
            
            console.log("Values valid for auto-selection:");
            console.log("- Game:", gameValid ? "✅" : "❌");
            console.log("- Budget:", budgetValid ? "✅" : "❌");
            console.log("- CPU type:", cpuTypeValid ? "✅" : "❌");
            
            if (gameValid && budgetValid && cpuTypeValid) {
                console.log("✅ All values are valid for auto-selection");
                
                // Check if configuration exists
                const cpuType = cpuTypeDropdown.value.trim();
                const game = gameDropdown.value.trim();
                const budgetInMillions = parseInt(budgetRange.value) / 1000000;
                
                // Check in configs
                let configExists = false;
                if (cpuType === 'Intel' && intelConfigs[game]) {
                    const budgetKey = `${budgetInMillions}M`;
                    if (intelConfigs[game][budgetKey]) {
                        configExists = true;
                        console.log(`✅ Configuration found for Intel, ${game}, ${budgetKey}`);
                    } else {
                        console.log(`❌ No configuration found for Intel, ${game}, ${budgetKey}`);
                        console.log("Available budgets:", Object.keys(intelConfigs[game]));
                    }
                } else if (cpuType === 'Amd' && amdConfigs[game]) {
                    const budgetKey = `${budgetInMillions}M`;
                    if (amdConfigs[game][budgetKey]) {
                        configExists = true;
                        console.log(`✅ Configuration found for AMD, ${game}, ${budgetKey}`);
                    } else {
                        console.log(`❌ No configuration found for AMD, ${game}, ${budgetKey}`);
                        console.log("Available budgets:", Object.keys(amdConfigs[game]));
                    }
                } else {
                    console.log(`❌ No configurations found for ${cpuType}, ${game}`);
                    if (cpuType === 'Intel') {
                        console.log("Available Intel games:", Object.keys(intelConfigs));
                    } else if (cpuType === 'Amd') {
                        console.log("Available AMD games:", Object.keys(amdConfigs));
                    }
                }
            } else {
                console.log("❌ Some values are not valid for auto-selection");
            }
        }
        console.log("-------- END DEBUG --------");
    };
});

// Fallback function for images that fail to load
function handleImageError(img) {
    // Set a default color based on component type
    const componentType = img.dataset.componentType || 'default';
    const bgColors = {
        cpu: '#3498db',
        mainboard: '#2ecc71',
        vga: '#e74c3c',
        ram: '#f39c12',
        ssd: '#9b59b6',
        hdd: '#34495e',
        case: '#1abc9c',
        psu: '#d35400',
        cpuCooler: '#7f8c8d',
        monitor: '#2c3e50',
        default: '#95a5a6'
    };
    
    // Create a canvas to use as the img src
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    
    // Fill background
    ctx.fillStyle = bgColors[componentType];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add text
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(img.alt || componentType, canvas.width/2, canvas.height/2);
    
    // Replace the img src with the canvas data
    img.src = canvas.toDataURL('image/png');
    
    // Prevent further error handling
    img.onerror = null;
}

// Giả sử các dữ liệu components đã được định nghĩa đầy đủ




document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("budget-range").addEventListener("input", function () {
        let value = parseInt(this.value);
        let formattedValue = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
        document.getElementById("budget-value").innerText = formattedValue.replace("₫", "") + " triệu";
    });
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
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .component-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .component-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                120deg,
                transparent,
                rgba(255, 255, 255, 0.3),
                transparent
            );
            transition: 0.5s;
        }

        .component-card:hover::before {
            left: 100%;
        }

        .component-image {
            max-width: 100px;
            margin-right: 20px;
            object-fit: contain;
            transition: transform 0.3s ease;
        }

        .component-card:hover .component-image {
            transform: scale(1.1);
        }

        #total-price {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 15px;
            margin-top: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            animation: priceGlow 2s infinite alternate;
        }

        @keyframes priceGlow {
            from {
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            to {
                box-shadow: 0 2px 20px rgba(0,128,255,0.2);
            }
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
            animation: modalFade 0.3s ease;
        }

        @keyframes modalFade {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .modal-content {
            background: white;
            padding: 20px;
            width: 90%;
            max-width: 800px;
            margin: 50px auto;
            border-radius: 10px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.2);
            animation: modalSlide 0.3s ease;
        }

        @keyframes modalSlide {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .component-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            animation: tableAppear 0.5s ease;
        }

        @keyframes tableAppear {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .component-table th {
            background: linear-gradient(135deg, #f4f4f4 0%, #e8e8e8 100%);
            font-weight: bold;
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
            transition: background-color 0.3s ease;
        }

        .component-table th:hover {
            background: linear-gradient(135deg, #e8e8e8 0%, #f4f4f4 100%);
        }

        .component-table td {
            padding: 12px;
            border: 1px solid #ddd;
            transition: background-color 0.3s ease;
        }

        .component-table tr:hover td {
            background-color: #f8f9fa;
        }

        .component-table img {
            max-width: 70px;
            height: auto;
            display: block;
            margin: auto;
            transition: transform 0.3s ease;
        }

        .component-table img:hover {
            transform: scale(1.2);
        }

        .score-message, .upgrade-message {
            padding: 10px 15px;
            border-radius: 5px;
            margin: 10px 0;
            animation: messageSlide 0.5s ease;
        }

        @keyframes messageSlide {
            from {
                transform: translateX(-20px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .score-message {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            box-shadow: 0 2px 10px rgba(40,167,69,0.2);
        }

        .upgrade-message {
            background: linear-gradient(135deg, #fd7e14 0%, #ffc107 100%);
            color: white;
            box-shadow: 0 2px 10px rgba(253,126,20,0.2);
        }

        .graphics-quality-container {
            display: flex;
            gap: 10px;
            margin: 15px 0;
            animation: qualityAppear 0.5s ease;
        }

        @keyframes qualityAppear {
            from {
                transform: translateY(10px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .fps-estimate-container {
            background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            animation: fpsGlow 2s infinite alternate;
        }

        @keyframes fpsGlow {
            from {
                box-shadow: 0 2px 10px rgba(0,123,255,0.2);
            }
            to {
                box-shadow: 0 2px 20px rgba(102,16,242,0.4);
            }
        }

        #game-specific-performance {
            padding: 15px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 8px;
            margin: 15px 0;
            animation: performanceSlide 0.5s ease;
        }

        @keyframes performanceSlide {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    function updateSelectedComponents() {
        updateScores()
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

                // Create image HTML with error handling
                const imageHtml = component.image 
                    ? `<img src="${component.image}" class="component-image" alt="${component.name}" data-component-type="${type}" onerror="handleImageError(this)">`
                    : `<div class="component-image-placeholder" style="background-color: #f0f0f0; height: 150px; display: flex; align-items: center; justify-content: center;">${component.name}</div>`;

                card.innerHTML = `
                    ${imageHtml}
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

    function updateScores() {
        console.log("Hàm updateScores() được gọi!");

        const cpuDropdown = document.getElementById('cpu');
        const mainboardDropdown = document.getElementById('mainboard');
        const vgaDropdown = document.getElementById('vga');
        const ssdDropdown = document.getElementById('ssd');
        const psuDropdown = document.getElementById('psu');
        const caseDropdown = document.getElementById('case');
        const cpuCoolerDropdown = document.getElementById('cpuCooler');
        const ramDropdown = document.getElementById('ram');

        // Kiểm tra dropdown elements tồn tại
        if (!cpuDropdown || !mainboardDropdown || !vgaDropdown || !ssdDropdown || !psuDropdown || !caseDropdown || !cpuCoolerDropdown || !ramDropdown) {
            console.error("❌ Không tìm thấy một hoặc nhiều dropdown elements! Kiểm tra lại ID HTML.");
            return;
        }
        const socketMessageElement = document.getElementById("socket-message");
        const scoreMessageElement = document.getElementById("score-message");
        const upgradeMessageElement = document.getElementById("upgrade-message");

        const selectedCpuKey = cpuDropdown.value;
        if (!selectedCpuKey) {
            console.error("❌ Không có CPU nào được chọn!");
            return;
        }
        const selectedCpu = cpuData[selectedCpuKey];

        // Khai báo biến selectedMainboardKey trước khi sử dụng
        const selectedMainboardKey = mainboardDropdown.value;

        // Cập nhật danh sách Mainboard theo Socket của CPU
        const mainboardOptions = mainboardDropdown.options;
        let mainboardCompatible = false;
        for (let i = 0; i < mainboardOptions.length; i++) {
            const mainboardOption = mainboardOptions[i];
            const mainboardKey = mainboardOption.value;
            const mainboard = mainboardData[mainboardKey];

            if (mainboard && mainboard.sockets.includes(selectedCpu.socket)) {
                mainboardOption.style.display = "block";
                mainboardOption.disabled = false;
                mainboardCompatible = true;
            } else {
                mainboardOption.style.display = "none";
                mainboardOption.disabled = true;
            }
        }
        if (!mainboardCompatible) {
            mainboardDropdown.value = "";
        }

        // Cập nhật danh sách RAM theo RAM hỗ trợ của CPU và loại RAM của Mainboard
        const ramOptions = ramDropdown.options;
        let ramCompatible = false;
        const selectedMainboard = mainboardData[selectedMainboardKey];

        for (let i = 0; i < ramOptions.length; i++) {
            const ramOption = ramOptions[i];
            const ramKey = ramOption.value;
            const ram = ramData[ramKey];

            if (
                ram &&
                selectedCpu.ram_support.includes(ram.type) &&
                selectedMainboard && selectedMainboard.memoryType === ram.type
            ) {
                ramOption.style.display = "block";
                ramOption.disabled = false;
                ramCompatible = true;
            } else {
                ramOption.style.display = "none";
                ramOption.disabled = true;
            }
        }
        if (!ramCompatible) {
            ramDropdown.value = "";
        }

        const selectedVgaKey = vgaDropdown.value;
        const selectedSsdKey = ssdDropdown.value;
        const selectedPsuKey = psuDropdown.value;
        const selectedCaseKey = caseDropdown.value;
        const selectedCpuCoolerKey = cpuCoolerDropdown.value;
        const selectedRamKey = ramDropdown.value; // Get selected RAM key


        const cpuName = selectedCpuKey && cpuData[selectedCpuKey] ? cpuData[selectedCpuKey].name : "...";
        const cpuScore = selectedCpuKey && cpuData[selectedCpuKey] ? Number(cpuData[selectedCpuKey].score) : "...";

        const mainboardName = selectedMainboardKey && mainboardData[selectedMainboardKey] ? mainboardData[selectedMainboardKey].name : "...";
        const mainboardScore = selectedMainboardKey && mainboardData[selectedMainboardKey] ? Number(mainboardData[selectedMainboardKey].score) : "...";

        const vgaName = selectedVgaKey && vgaData[selectedVgaKey] ? vgaData[selectedVgaKey].name : "...";
        const vgaScore = selectedVgaKey && vgaData[selectedVgaKey] ? Number(vgaData[selectedVgaKey].score) : "...";

        const ssdName = selectedSsdKey && ssdData[selectedSsdKey] ? ssdData[selectedSsdKey].name : "...";
        const ssdScore = selectedSsdKey && ssdData[selectedSsdKey] ? Number(ssdData[selectedSsdKey].score) : "...";

        const psuName = selectedPsuKey && psuData[selectedPsuKey] ? psuData[selectedPsuKey].name : "...";
        const psuScore = selectedPsuKey && psuData[selectedPsuKey] ? Number(psuData[selectedPsuKey].score) : "...";

        const caseName = selectedCaseKey && caseData[selectedCaseKey] ? caseData[selectedCaseKey].name : "...";
        const caseScore = selectedCaseKey && caseData[selectedCaseKey] ? Number(caseData[selectedCaseKey].score) : "...";

        const cpuCoolerName = selectedCpuCoolerKey && cpuCoolerData[selectedCpuCoolerKey] ? cpuCoolerData[selectedCpuCoolerKey].name : "...";
        const cpuCoolerScore = selectedCpuCoolerKey && cpuCoolerData[selectedCpuCoolerKey] ? Number(cpuCoolerData[selectedCpuCoolerKey].score) : "...";

        const ramName = selectedRamKey && ramData[selectedRamKey] ? ramData[selectedRamKey].name : "..."; // Get RAM name
        const ramScore = selectedRamKey && ramData[selectedRamKey] ? Number(ramData[selectedRamKey].score) : "..."; // Get RAM score


        document.getElementById("cpu-name").textContent = cpuName;
        document.getElementById("cpu-score").textContent = cpuScore;

        document.getElementById("mainboard-name").textContent = mainboardName;
        document.getElementById("mainboard-score").textContent = mainboardScore;

        document.getElementById("vga-name").textContent = vgaName;
        document.getElementById("vga-score").textContent = vgaScore;

        document.getElementById("ssd-name").textContent = ssdName;
        document.getElementById("ssd-score").textContent = ssdScore;

        document.getElementById("ram-name").textContent = ramName; // Display RAM name
        document.getElementById("ram-score").textContent = ramScore; // Display RAM score

        document.getElementById("cpu-cooler-name").textContent = cpuCoolerName;
        document.getElementById("cpu-cooler-score").textContent = cpuCoolerScore;

        document.getElementById("psu-name").textContent = psuName;
        document.getElementById("psu-score").textContent = psuScore;

        document.getElementById("case-name").textContent = caseName;
        document.getElementById("case-score").textContent = caseScore;


        let totalScore = "...";
        let scoreSum = 0; // Tổng điểm

        if (!isNaN(Number(cpuScore))) { scoreSum += Number(cpuScore); }
        if (!isNaN(Number(mainboardScore))) { scoreSum += Number(mainboardScore); }
        if (!isNaN(Number(vgaScore))) { scoreSum += Number(vgaScore); }
        if (!isNaN(Number(ssdScore))) { scoreSum += Number(ssdScore); }
        if (!isNaN(Number(psuScore))) { scoreSum += Number(psuScore); }
        if (!isNaN(Number(caseScore))) { scoreSum += Number(caseScore); }
        if (!isNaN(Number(cpuCoolerScore))) { scoreSum += Number(cpuCoolerScore); }
        if (!isNaN(Number(ramScore))) { scoreSum += Number(ramScore); } // Add RAM score to total


        totalScore = (scoreSum / 8).toFixed(2); // Tính tổng điểm trung bình của tất cả 8 linh kiện và làm tròn đến 2 chữ số thập phân // Changed divisor to 8


        document.getElementById("total-score").textContent = totalScore;
        console.log("totalScore:", totalScore); // Console log 1 lần thôi
        const cpuScoreValue = Number(cpuScore);
        const mainboardScoreValue = Number(mainboardScore);


        let recommendationMessage = ""; // Biến lưu thông báo khuyến nghị dựa trên điểm tổng (CHO KHU VỰC #score-message)
        let upgradeRecommendationMessage = ""; // Biến lưu thông báo KHUYẾN NGHỊ NÂNG CẤP (CHO KHU VỰC #upgrade-message)


        if (totalScore <= 2.5) {
            recommendationMessage = "MÁY HƠI YẾU, CHƠI GAME ONLINE NÊN NÂNG CPU VÀ MAIN";
        } else if (totalScore <= 4) {
            recommendationMessage = "MÁY CŨNG KHÁ ỔN RỒI MUỐN TĂNG FPS MÀ CHƠI SETTING THẤP HÃY TĂNG CPU";
        } else if (totalScore <= 6) {
            recommendationMessage = "MÁY TẠM ỔN RỒI, TĂNG FPS SETTING THẤP NÂNG CPU CÒN TĂNG FPS 3A THÌ NÂNG VGA";
        } else if (totalScore <= 8) {
            recommendationMessage = "MÁY NHƯ NÀY CÒN GÌ MÀ CHÊ NỮA";
        } else if (totalScore <= 10) {
            recommendationMessage = "BẠN MUỐN MUA CẢ SỐP KHÔNG?";
        }


        // THÊM ĐOẠN CODE MỚI ĐỂ KHUYẾN NGHỊ NÂNG CẤP CPU/MAINBOARD (CHO KHU VỰC #upgrade-message)
        if (!isNaN(cpuScoreValue) && !isNaN(mainboardScoreValue)) { // Đảm bảo cả hai giá trị đều là số
            const scoreDiff = cpuScoreValue - mainboardScoreValue; // Tính độ chênh lệch điểm (CPU - Mainboard)

            if (scoreDiff >= 3) { // CPU mạnh hơn Mainboard từ 2 điểm trở lên
                upgradeRecommendationMessage = "Nên nâng cấp Mainboard";
            } else if (scoreDiff <= -3) { // Mainboard mạnh hơn CPU từ 2 điểm trở lên (scoreDiff <= -2 tương đương MainboardScore - CPUScore >= 2)
                upgradeRecommendationMessage = "Nên nâng cấp CPU";
            }
        }


        // HIỂN THỊ THÔNG BÁO Ở CÁC KHU VỰC RIÊNG BIỆT
        if (scoreMessageElement && recommendationMessage) { // Hiển thị thông báo ĐIỂM TỔNG ở khu vực #score-message
            scoreMessageElement.textContent = recommendationMessage;
            scoreMessageElement.classList.add('score-message'); // Thêm class score-message cho #score-message
        }

        if (upgradeMessageElement && upgradeRecommendationMessage) { // Hiển thị thông báo NÂNG CẤP ở khu vực #upgrade-message
            upgradeMessageElement.textContent = upgradeRecommendationMessage;
            upgradeMessageElement.classList.add('upgrade-message'); // Thêm class upgrade-message cho #upgrade-message
        }
    }
    // Gọi hàm updateScores() lần đầu để hiển thị giá trị mặc định hoặc khi trang tải xong
    setTimeout(updateScores, 0);

    function autoSelectConfig() {
        console.log("🔍 autoSelectConfig llamado");
        isAutoSelecting = true;

        const gameDropdown = document.getElementById('game-genre');
        const budgetRange = document.getElementById('budget-range');
        const cpuTypeDropdown = document.getElementById('cpu-type');
        const cpuDropdown = document.getElementById('cpu');
        const mainboardDropdown = document.getElementById('mainboard');
        
        // Cập nhật hiển thị ngân sách
        const budgetValue = document.getElementById('budget-value');
        if (budgetValue) {
            const budgetInMillion = parseInt(budgetRange.value) / 1000000;
            budgetValue.textContent = `${budgetInMillion} triệu`;
        }

        if (!gameDropdown || !budgetRange || !cpuTypeDropdown || !cpuDropdown || !mainboardDropdown) {
            console.error("❌ Không tìm thấy một trong các dropdown! Kiểm tra lại ID.");
            if (!gameDropdown) console.error("Missing: game-genre dropdown");
            if (!budgetRange) console.error("Missing: budget-range input");
            if (!cpuTypeDropdown) console.error("Missing: cpu-type dropdown");
            if (!cpuDropdown) console.error("Missing: cpu dropdown");
            if (!mainboardDropdown) console.error("Missing: mainboard dropdown");
            isAutoSelecting = false;
            return;
        }

        const selectedGame = gameDropdown.value.trim();
        const selectedBudget = parseInt(budgetRange.value); // Chuyển đổi về số nguyên
        const selectedCpuType = cpuTypeDropdown.value.trim();

        console.log(`🎮 Game: "${selectedGame}", 💰 Budget: ${selectedBudget}, 🖥️ CPU Type: "${selectedCpuType}"`);
        
        // Debug each value separately
        console.log(`Game dropdown value: "${selectedGame}" (empty: ${selectedGame === ""})`);
        console.log(`Budget value: ${selectedBudget} (is NaN: ${isNaN(selectedBudget)})`);
        console.log(`CPU type value: "${selectedCpuType}" (empty: ${selectedCpuType === ""})`);

        if (!selectedGame || isNaN(selectedBudget) || !selectedCpuType) {
            console.warn("⚠️ Chưa chọn đầy đủ thông tin! Kiểm tra lại.");
            if (!selectedGame) console.warn("Missing: Game selection");
            if (isNaN(selectedBudget)) console.warn("Missing: Valid budget");
            if (!selectedCpuType) console.warn("Missing: CPU type selection");
            isAutoSelecting = false;
            return;
        }

        // Sử dụng hàm getConfig từ module configs để lấy cấu hình phù hợp
        const budgetInMillions = selectedBudget / 1000000;
        console.log(`💵 Budget in millions: ${budgetInMillions}`);
        
        // Format the budget key correctly - ensure it's an integer followed by 'M'
        const budgetKey = `${Math.floor(budgetInMillions)}M`;
        console.log(`🔑 Looking for budget key: "${budgetKey}"`);
        
        // Double check if game exists in configs
        if (selectedCpuType === 'Intel' && !intelConfigs[selectedGame]) {
            console.error(`❌ Game "${selectedGame}" not found in Intel configurations`);
        } else if (selectedCpuType === 'Amd' && !amdConfigs[selectedGame]) {
            console.error(`❌ Game "${selectedGame}" not found in AMD configurations`);
        }
        
        // Get the configuration but also pass the formatted budget key
        const config = getConfig(selectedCpuType, selectedGame, Math.floor(budgetInMillions));
        console.log("⚙️ Config found:", config);

        if (!config) {
            console.error(`❌ No configuration found for ${selectedCpuType}, ${selectedGame}, ${budgetKey}`);
            // Check if configs exist for this game
            if (selectedCpuType === 'Intel') {
                console.log('Available Intel configs for this game:', intelConfigs[selectedGame] ? Object.keys(intelConfigs[selectedGame]) : 'None');
            } else if (selectedCpuType === 'Amd') {
                console.log('Available AMD configs for this game:', amdConfigs[selectedGame] ? Object.keys(amdConfigs[selectedGame]) : 'None');
            }
            // Tạo div cho cảnh báo full màn hình
            const alertDiv = document.createElement('div');
            alertDiv.style.position = 'fixed';
            alertDiv.style.top = '0';
            alertDiv.style.left = '0';
            alertDiv.style.width = '100%';
            alertDiv.style.height = '100%';
            alertDiv.style.backgroundColor = 'rgba(161, 154, 154, 0.8)';
            alertDiv.style.color = 'white';
            alertDiv.style.fontSize = '29px';
            alertDiv.style.display = 'flex';
            alertDiv.style.alignItems = 'center';
            alertDiv.style.justifyContent = 'center';
            alertDiv.style.zIndex = '9999';
            alertDiv.style.textAlign = 'center';
            alertDiv.innerHTML = `
                <H1>❌ KHÔNG CÓ CẤU HÌNH PHÙ HỢP TẦM GIÁ NÀY❌
                ⚠️ THÊM ÍT TIỀN LÊN NHÉ AE KHÔNG THÌ CÙI LẮM DÙNG CÓ NHƯ KHÔNG MÀ THUI ⚠️</H1>
            `;

            // Thêm div vào body
            document.body.appendChild(alertDiv);

            setTimeout(() => {
                if (document.body.contains(alertDiv)) {
                    document.body.removeChild(alertDiv);
                }
            }, 2000); // Cảnh báo tự động ẩn sau 2 giây
            
            // Thêm sự kiện click để xóa cảnh báo khi người dùng ấn vào màn hình
            alertDiv.addEventListener('click', function () {
                document.body.removeChild(alertDiv);
            });

            // Ngừng chọn tự động
            isAutoSelecting = false;
            return;
        }

        // Lưu trữ các dropdown cần cập nhật
        const dropdownsToUpdate = [
            { id: 'cpu', value: config.cpu },
            { id: 'mainboard', value: config.mainboard },
            { id: 'vga', value: config.vga },
            { id: 'ram', value: config.ram },
            { id: 'ssd', value: config.ssd },
            { id: 'case', value: config.case },
            { id: 'cpuCooler', value: config.cpuCooler },
            { id: 'psu', value: config.psu }
        ];

        // Cập nhật từng dropdown
        for (const item of dropdownsToUpdate) {
            updateDropdown(item.id, item.value);
        }

        // Cập nhật tổng tiền và điểm số
        calculateTotalPriceAndSummary();
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
    document.getElementById("game-genre").addEventListener("change", function() {
        console.log("Game genre changed, calling autoSelectConfig");
        autoSelectConfig();
    });
    
    document.getElementById('budget-range').addEventListener('input', function() {
        // Cập nhật hiển thị giá trị ngân sách ngay lập tức
        const budgetValue = document.getElementById('budget-value');
        if (budgetValue) {
            const budgetInMillion = parseInt(this.value) / 1000000;
            budgetValue.textContent = `${budgetInMillion} triệu`;
        }
    });
    
    document.getElementById('budget-range').addEventListener('change', function() {
        console.log("Budget range changed, calling autoSelectConfig");
        autoSelectConfig();
    });
    
    document.getElementById('cpu-type').addEventListener('change', function() {
        console.log("CPU type changed, calling autoSelectConfig");
        autoSelectConfig();
    });
    
    // Event listener for the manual auto-select button
    document.addEventListener('manual-auto-select', function() {
        console.log("Manual auto-select event received, calling autoSelectConfig");
        autoSelectConfig();
    });



    calculateButton.addEventListener('click', () => {
        console.log("Nút Tính Toán Chi Phí đã được bấm!");
        calculateTotalPriceAndSummary();
        updateScores() // Gọi hàm tính toán và tạo bảng
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

// Thêm hàm updateDropdown
function updateDropdown(id, value) {
    console.log(`Updating dropdown ${id} with value ${value}`);
    const dropdown = document.getElementById(id);
    if (!dropdown) {
        console.error(`Dropdown with ID ${id} not found!`);
        return;
    }
    
    if (!value) {
        console.warn(`No value provided for dropdown ${id}`);
        return;
    }
    
    // Get all existing option values
    let existingOptions = Array.from(dropdown.options).map(opt => opt.value);
    console.log(`Existing options for ${id}:`, existingOptions);
    
    // Check if option exists
    if (!existingOptions.includes(value)) {
        console.log(`Value ${value} not found in dropdown ${id}, adding it`);
        
        // Find the corresponding component data
        const componentType = id; // Assume id matches the component type (cpu, mainboard, etc.)
        if (components[componentType] && components[componentType][value]) {
            const component = components[componentType][value];
            const newOption = document.createElement("option");
            newOption.value = value;
            newOption.textContent = `${component.name} - ${component.price.toLocaleString()} VNĐ`;
            dropdown.appendChild(newOption);
            console.log(`Added option "${component.name}" to dropdown ${id}`);
        } else {
            console.warn(`Component data not found for ${componentType}[${value}]`);
            const newOption = document.createElement("option");
            newOption.value = value;
            newOption.textContent = value;
            dropdown.appendChild(newOption);
            console.log(`Added generic option "${value}" to dropdown ${id}`);
        }
    }

    // Set the dropdown value
    dropdown.value = value;
    console.log(`Set dropdown ${id} to value ${value}`);
    
    // Dispatch change event
    const changeEvent = new Event('change');
    dropdown.dispatchEvent(changeEvent);
    console.log(`Dispatched change event for dropdown ${id}`);
}

/**
 * Đánh giá hiệu năng của cấu hình CPU và VGA đã chọn cho các tác vụ khác nhau
 * và cập nhật giao diện người dùng
 */
function evaluateSystemPerformance() {
    const selectedCPU = document.getElementById('cpu').value;
    const selectedVGA = document.getElementById('vga').value;
    const selectedGame = document.getElementById('game-genre').value;
    
    if (!selectedCPU || !selectedVGA) return resetPerformanceInfo();
    
    document.getElementById('performance-details').style.display = 'block';
    
    const cpuFamily = extractCPUFamily(selectedCPU);
    const vgaModel = extractVGAModel(selectedVGA);
    
    console.log("CPU Family:", cpuFamily);
    console.log("VGA Model:", vgaModel);
    
    // Sử dụng window.CPU_RATINGS thay vì CPU_RATINGS trực tiếp
    const cpuRating = window.CPU_RATINGS[cpuFamily] || defaultCPURating();
    const vgaRating = window.VGA_RATINGS[vgaModel] || defaultVGARating();
    
    console.log("CPU Rating:", cpuRating);
    console.log("VGA Rating:", vgaRating);
    
    updateRating('cpu', cpuFamily, cpuRating.gaming);
    updateRating('vga', vgaModel, vgaRating.gaming);
    
    const gamePerformance = determineOverallPerformance(cpuRating.gaming, vgaRating.gaming, 0.3, 0.7);
    const graphicPerformance = determineOverallPerformance(cpuRating.graphics, vgaRating.graphics, 0.4, 0.6);
    const officePerformance = cpuRating.office;
    
    updatePerformanceMetrics(gamePerformance, graphicPerformance, officePerformance);
    handleGameSpecificPerformance(selectedGame, gamePerformance);
    updatePerformanceChart(gamePerformance, graphicPerformance, officePerformance);
}

function updateRating(type, model, rating) {
    const elementId = `${type}-rating`;
    document.getElementById(elementId).textContent = getDescription(type, model);
    document.getElementById(elementId).style.color = rating.color;
    document.getElementById(`${type}-progress-bar`).style.width = `${rating.percentage}%`;
    document.getElementById(`${type}-progress-bar`).style.backgroundColor = rating.color;
}

function getDescription(type, model) {
    const descriptions = {
        cpu: {
            "Core i3": "Tầm trung, đủ cho nhu cầu văn phòng và game nhẹ",
            "Core i5": "Mạnh, tốt cho gaming và công việc đa nhiệm",
            "Core i7": "Rất mạnh, xuất sắc cho gaming và đồ họa",
            "Core i9": "Siêu mạnh, tối ưu cho mọi tác vụ nặng",
            "Ryzen 3": "Tầm trung, đủ cho nhu cầu văn phòng và game nhẹ",
            "Ryzen 5": "Mạnh, tốt cho gaming và công việc đa nhiệm",
            "Ryzen 7": "Rất mạnh, xuất sắc cho gaming và đồ họa",
            "Ryzen 9": "Siêu mạnh, tối ưu cho mọi tác vụ nặng"
        },
        vga: {
            "GTX 1650": "Tầm trung thấp, gaming 1080p các game nhẹ",
            "GTX 1660": "Tầm trung, gaming 1080p tốt",
            "RTX 2060": "Khá tốt, gaming 1080p các game AAA",
            "RTX 2070": "Khá tốt, gaming 1080p/1440p mượt mà",
            "RTX 3060": "Tốt, gaming 1080p/1440p mượt mà",
            "RTX 3070": "Rất tốt, gaming 1440p chất lượng cao",
            "RTX 3080": "Cao cấp, gaming 4K ổn định",
            "RTX 4060": "Hiệu năng tốt, gaming 1080p/1440p mượt mà",
            "RTX 4070": "Hiệu năng cao, gaming 1440p/4K chất lượng cao",
            "RTX 4080": "Siêu cao cấp, gaming 4K ổn định",
            "RTX 4090": "Đỉnh cao hiệu năng, gaming 4K/8K",
            "RX 570": "Tầm trung thấp, gaming 1080p các game nhẹ",
            "RX 580": "Tầm trung, gaming 1080p tốt",
            "RX 5600 XT": "Khá tốt, gaming 1080p các game AAA",
            "RX 5700 XT": "Tốt, gaming 1440p",
            "RX 6600": "Tốt, gaming 1080p/1440p",
            "RX 6700 XT": "Rất tốt, gaming 1440p chất lượng cao",
            "RX 6800 XT": "Cao cấp, gaming 4K ổn định",
            "RX 7600": "Hiệu năng tốt, gaming 1080p/1440p mượt mà",
            "RX 7700 XT": "Hiệu năng cao, gaming 1440p chất lượng cao",
            "RX 7800 XT": "Hiệu năng rất cao, gaming 1440p/4K",
            "RX 7900 XTX": "Siêu cao cấp, gaming 4K/8K"
        }
    };
    return descriptions[type][model] || "Chưa xác định";
}

function determineOverallPerformance(cpuRating, vgaRating, cpuWeight, vgaWeight) {
    const overallPercentage = (cpuRating.percentage * cpuWeight) + (vgaRating.percentage * vgaWeight);
    return getPerformanceRatingFromPercentage(overallPercentage);
}

function handleGameSpecificPerformance(selectedGame, gamePerformance) {
    if (!selectedGame || !window.GAME_FPS_ESTIMATES[selectedGame]) return resetGameSpecificPerformance();
    
    // Use the new display function that includes the graphics quality selector
    displayGameSpecificPerformance(gamePerformance, selectedGame);
}

function resetGameSpecificPerformance() {
    document.getElementById('fps-estimate-container').style.display = 'none';
    document.getElementById('graphics-quality-container').style.display = 'none';
    document.getElementById('game-specific-performance').innerHTML = '';
}

function updatePerformanceMetrics(gamePerformance, graphicPerformance, officePerformance) {
    updateMetric('game', gamePerformance);
    updateMetric('graphic', graphicPerformance);
    updateMetric('office', officePerformance);
}

function updateMetric(type, performance) {
    const elementId = `${type}-performance`;
    document.getElementById(elementId).textContent = performance.label;
    document.getElementById(elementId).style.color = performance.color;
}

function defaultCPURating() {
    return { 
        gaming: window.PERFORMANCE_RATINGS.FAIR, 
        graphics: window.PERFORMANCE_RATINGS.FAIR, 
        office: window.PERFORMANCE_RATINGS.GOOD 
    };
}

function defaultVGARating() {
    return { 
        gaming: window.PERFORMANCE_RATINGS.FAIR, 
        graphics: window.PERFORMANCE_RATINGS.FAIR 
    };
}

/**
 * Trích xuất dòng CPU từ tên CPU được chọn
 */
function extractCPUFamily(cpuName) {
    if (!cpuName) return "";
    
    // Extract Intel Core i3/i5/i7/i9 or AMD Ryzen 3/5/7/9
    let match = cpuName.match(/(Core i[3579]|Ryzen [3579])/);
    return match ? match[0] : "";
}

/**
 * Trích xuất mẫu VGA từ tên VGA được chọn
 */
function extractVGAModel(vgaName) {
    if (!vgaName) return "";
    
    // Match GPU models like RTX 3060, RTX 4090, GTX 1660, RX 6700 XT, etc.
    let match = vgaName.match(/(RTX\s\d{4}|GTX\s\d{4}|RX\s\d{4}\sXT|RX\s\d{3})/);
    return match ? match[0] : "";
}

/**
 * Lấy xếp hạng hiệu năng từ phần trăm
 */
function getPerformanceRatingFromPercentage(percentage) {
    if (percentage >= 85) return window.PERFORMANCE_RATINGS.EXCELLENT;
    if (percentage >= 70) return window.PERFORMANCE_RATINGS.VERY_GOOD;
    if (percentage >= 55) return window.PERFORMANCE_RATINGS.GOOD;
    if (percentage >= 40) return window.PERFORMANCE_RATINGS.AVERAGE;
    if (percentage >= 25) return window.PERFORMANCE_RATINGS.FAIR;
    return window.PERFORMANCE_RATINGS.WEAK;
}

/**
 * Ước tính FPS cho game cụ thể dựa trên xếp hạng hiệu năng tổng thể
 */
function estimateGameFPS(performanceRating, gameId) {
    const gameInfo = window.GAME_FPS_ESTIMATES[gameId];
    if (!gameInfo) return { fps: "N/A", description: "Không có dữ liệu" };
    
    const graphicsQuality = document.getElementById('graphics-quality').value;
    const selectedCPU = document.getElementById('cpu').value;
    const selectedVGA = document.getElementById('vga').value;
    
    // Lấy FPS cơ bản từ GAME_FPS_ESTIMATES
    const fpsData = gameInfo[graphicsQuality] || gameInfo.medium;
    let [minFps, maxFps] = fpsData.fps.split('-').map(num => parseInt(num));
    
    // Xác định loại game và mức độ phụ thuộc CPU
    const gameType = window.GAME_TYPES[gameId];
    const cpuDependency = gameType?.cpuDependency || "medium";
    
    // Kiểm tra CPU và xác định hệ số tăng FPS
    const isAMD = selectedCPU.toLowerCase().includes('ryzen');
    const isX3D = selectedCPU.toLowerCase().includes('x3d');
    
    // Hệ số tăng FPS cho CPU
    let cpuBoostFactor = 1;
    
    if (isX3D) {
        // Xử lý đặc biệt cho CPU X3D với mức tăng FPS cao hơn
        switch(gameType?.type) {
            case "esports":
                cpuBoostFactor = 1.5; // +50% cho esports
                if (cpuDependency === "very-high") {
                    cpuBoostFactor = 1.6; // +60% cho esports phụ thuộc nhiều vào CPU
                }
                break;
            case "battle-royale":
                cpuBoostFactor = 1.45; // +45% cho battle royale
                break;
            case "mmorpg":
                cpuBoostFactor = 1.45; // +45% cho MMORPG
                break;
            case "aaa":
                cpuBoostFactor = 1.4; // +40% cho game AAA
                break;
            default:
                cpuBoostFactor = 1.4; // +40% cho các game khác
        }
    } else if (isAMD) {
        // Xử lý cho các CPU AMD thường
        const isOnlineGame = gameType?.type === "esports";
        if (isOnlineGame) {
            switch(cpuDependency) {
                case "very-high":
                    cpuBoostFactor = 1.2;
                    break;
                case "high":
                    cpuBoostFactor = 1.15;
                    break;
                case "medium":
                    cpuBoostFactor = 1.12;
                    break;
                default:
                    cpuBoostFactor = 1.1;
            }
        }
    }
    
    // Áp dụng hệ số CPU và tính toán FPS cuối cùng
    minFps = Math.floor(minFps * cpuBoostFactor);
    maxFps = Math.floor(maxFps * cpuBoostFactor);
    
    // Thêm thông tin về boost vào description
    let additionalInfo = "";
    if (isX3D) {
        const boostPercent = Math.round((cpuBoostFactor - 1) * 100);
        additionalInfo = ` (+${boostPercent}% hiệu năng từ CPU AMD X3D với 3D V-Cache)`;
    } else if (isAMD && cpuBoostFactor > 1) {
        const boostPercent = Math.round((cpuBoostFactor - 1) * 100);
        additionalInfo = ` (+${boostPercent}% hiệu năng từ CPU AMD)`;
    }

    return {
        fps: `${minFps}-${maxFps}`,
        description: fpsData.description + additionalInfo
    };
}

function getCPUScore(cpuName) {
    // Try to find exact match
    for (const [key, score] of Object.entries(window.HARDWARE_SCORES.cpu)) {
        if (cpuName.includes(key)) return score;
    }
    
    // Fallback to family-based score
    const family = extractCPUFamily(cpuName);
    switch (family) {
        case "Core i9": return 95;
        case "Core i7": return 85;
        case "Core i5": return 75;
        case "Core i3": return 55;
        case "Ryzen 9": return 95;
        case "Ryzen 7": return 85;
        case "Ryzen 5": return 75;
        case "Ryzen 3": return 55;
        default: return 50;
    }
}

function getGPUScore(gpuName) {
    // Try to find exact match
    for (const [key, score] of Object.entries(window.HARDWARE_SCORES.gpu)) {
        if (gpuName.includes(key)) return score;
    }
    
    // Fallback to series-based score
    if (gpuName.includes("RTX 40")) return 90;
    if (gpuName.includes("RTX 30")) return 80;
    if (gpuName.includes("RTX 20")) return 70;
    if (gpuName.includes("GTX 16")) return 60;
    if (gpuName.includes("GTX 10")) return 50;
    if (gpuName.includes("RX 7000")) return 90;
    if (gpuName.includes("RX 6000")) return 80;
    if (gpuName.includes("RX 5000")) return 70;
    return 40;
}

function parseFpsRange(fpsString) {
    // Remove "FPS" and any whitespace
    fpsString = fpsString.replace(/FPS/gi, "").trim();
    
    // Handle "X+" format
    if (fpsString.includes("+")) {
        const base = parseInt(fpsString);
        return [base, Math.round(base * 1.2)];
    }
    
    // Handle "X-Y" format
    const [min, max] = fpsString.split("-").map(num => parseInt(num.trim()));
    return [min || 30, max || 60];
}

/**
 * Lấy tên game đẹp hơn từ ID
 */
function getGameName(gameId) {
    const gameNames = {
        "valorant": "Valorant",
        "csgo": "Counter-Strike: Global Offensive",
        "pubg": "PlayerUnknown's Battlegrounds",
        "lol": "League of Legends",
        "gta-v": "Grand Theft Auto V",
        "fortnite": "Fortnite",
        "fo4": "FIFA Online 4",
        "black-myth-wukong": "Black Myth: Wukong",
        "elden-ring": "Elden Ring",
        "naraka": "Naraka: Bladepoint",
        "genshin-impact": "Genshin Impact"
    };
    return gameNames[gameId] || gameId;
}

/**
 * Cập nhật biểu đồ hiệu năng
 */
function updatePerformanceChart(gamePerformance, graphicPerformance, officePerformance) {
    const ctx = document.getElementById('performance-chart').getContext('2d');
    
    // Kiểm tra xem biểu đồ đã tồn tại chưa
    if (window.performanceChart) {
        // Nếu đã tồn tại, chỉ cập nhật dữ liệu
        window.performanceChart.data.datasets[0].data = [
            gamePerformance.percentage, 
            graphicPerformance.percentage, 
            officePerformance.percentage
        ];
        window.performanceChart.data.datasets[0].backgroundColor = `rgba(${hexToRgb(gamePerformance.color)}, 0.7)`;
        window.performanceChart.data.datasets[0].borderColor = gamePerformance.color;
        window.performanceChart.update();
        return;
    }
    
    // Khởi tạo biểu đồ mới nếu chưa tồn tại
    window.performanceChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Gaming', 'Đồ họa/Video', 'Văn phòng'],
            datasets: [{
                label: 'Hiệu năng',
                data: [
                    gamePerformance.percentage, 
                    graphicPerformance.percentage, 
                    officePerformance.percentage
                ],
                backgroundColor: `rgba(${hexToRgb(gamePerformance.color)}, 0.7)`,
                borderColor: gamePerformance.color,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

/**
 * Chuyển đổi mã màu Hex sang RGB
 */
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
}

/**
 * Reset thông tin hiệu năng
 */
function resetPerformanceInfo() {
    document.getElementById('performance-details').style.display = 'none';
    document.getElementById('fps-estimate-container').style.display = 'none';
    document.getElementById('game-performance').textContent = "Chưa xác định";
    document.getElementById('game-performance').style.color = "";
    document.getElementById('graphic-performance').textContent = "Chưa xác định";
    document.getElementById('graphic-performance').style.color = "";
    document.getElementById('office-performance').textContent = "Chưa xác định";
    document.getElementById('office-performance').style.color = "";
    document.getElementById('game-specific-performance').innerHTML = '';
    
    // Reset chart if it exists
    if (window.performanceChart) {
        window.performanceChart.data.datasets[0].data = [0, 0, 0];
        window.performanceChart.update();
    }
}

// Add event listeners to trigger performance evaluation
document.addEventListener('DOMContentLoaded', function() {
    const cpuSelect = document.getElementById('cpu');
    const vgaSelect = document.getElementById('vga');
    const gameSelect = document.getElementById('game-genre');
    
    if (cpuSelect && vgaSelect) {
        cpuSelect.addEventListener('change', evaluateSystemPerformance);
        vgaSelect.addEventListener('change', evaluateSystemPerformance);
        if (gameSelect) {
            gameSelect.addEventListener('change', evaluateSystemPerformance);
        }
        
        // Initial evaluation if components are already selected
        evaluateSystemPerformance();
    }
});

// Function to update UI with game-specific data
function updateGameSpecificUI(selectedGame) {
    const gameData = window.GAME_FPS_ESTIMATES[selectedGame];
    if (gameData) {
        document.getElementById('game-specific-performance').innerHTML = `
            <p><strong>${getGameName(selectedGame)}</strong> - ${gameData.notes}</p>
            <p>Low: ${gameData.low.fps} (${gameData.low.description})</p>
            <p>Medium: ${gameData.medium.fps} (${gameData.medium.description})</p>
            <p>High: ${gameData.high.fps} (${gameData.high.description})</p>
        `;
    }
}

// Call this function when a game is selected
document.getElementById('game-genre').addEventListener('change', function() {
    updateGameSpecificUI(this.value);
});

/**
 * Hiển thị thông tin hiệu năng cho game cụ thể
 */
function displayGameSpecificPerformance(gamePerformance, selectedGame) {
    if (!selectedGame || !window.GAME_FPS_ESTIMATES[selectedGame]) return resetGameSpecificPerformance();
    const gameInfo = window.GAME_FPS_ESTIMATES[selectedGame];
    
    // Show the graphics quality selector
    document.getElementById('graphics-quality-container').style.display = 'flex';
    
    // Add event listener to update FPS when graphics quality changes
    document.getElementById('graphics-quality').addEventListener('change', function() {
        updateFpsEstimate(gamePerformance, selectedGame);
    });
    
    // Update FPS estimate
    updateFpsEstimate(gamePerformance, selectedGame);
    
    // Update game-specific performance details with enhanced styling
    const gameSpecificElement = document.getElementById('game-specific-performance');
    if (gameSpecificElement && gameInfo) {
        const selectedCPU = document.getElementById('cpu').value;
        const isX3D = selectedCPU.toLowerCase().includes('x3d');
        const gameType = window.GAME_TYPES[selectedGame];
        
        // Calculate performance score based on game type
        let performanceScore = 0;
        if (gameType) {
            switch(gameType.type) {
                case "esports":
                    performanceScore = isX3D ? 95 : 85;
                    break;
                case "battle-royale":
                    performanceScore = isX3D ? 90 : 80;
                    break;
                case "mmorpg":
                    performanceScore = isX3D ? 88 : 78;
                    break;
                case "aaa":
                    performanceScore = isX3D ? 85 : 75;
                    break;
                default:
                    performanceScore = isX3D ? 85 : 75;
            }
        }

        // Get performance rating color based on score
        const getPerformanceColor = (score) => {
            if (score >= 90) return '#28a745';
            if (score >= 80) return '#5cb85c';
            if (score >= 70) return '#4bbf73';
            if (score >= 60) return '#f0ad4e';
            return '#dc3545';
        };

        // Get CPU dependency text and color
        const getCpuDependencyInfo = (dependency) => {
            switch(dependency) {
                case "very-high":
                    return { text: "Rất cao", color: "#dc3545" };
                case "high":
                    return { text: "Cao", color: "#f0ad4e" };
                case "medium":
                    return { text: "Trung bình", color: "#5cb85c" };
                case "low":
                    return { text: "Thấp", color: "#28a745" };
                default:
                    return { text: "Cân bằng", color: "#4bbf73" };
            }
        };

        const cpuDependency = getCpuDependencyInfo(gameType?.cpuDependency);
        
        gameSpecificElement.innerHTML = `
            <div class="game-performance-card" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <div class="game-header" style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div class="game-title" style="flex: 1;">
                        <h3 style="margin: 0; color: #333; font-size: 1.5em;">${getGameName(selectedGame)}</h3>
                        <p style="margin: 5px 0 0 0; color: #666;">${gameInfo.notes}</p>
                    </div>
                    <div class="performance-score" style="text-align: center; background: ${getPerformanceColor(performanceScore)}; color: white; padding: 10px 20px; border-radius: 8px;">
                        <div style="font-size: 1.8em; font-weight: bold;">${performanceScore}</div>
                        <div style="font-size: 0.8em;">Điểm hiệu năng</div>
                    </div>
                </div>

                <div class="game-details" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 15px;">
                    <div class="detail-card" style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h4 style="margin: 0 0 10px 0; color: #333;">Thông tin game</h4>
                        <p style="margin: 5px 0; color: #666;">
                            <span style="display: inline-block; width: 120px;">Thể loại:</span>
                            <strong>${gameType?.type.toUpperCase() || 'N/A'}</strong>
                        </p>
                        <p style="margin: 5px 0; color: #666;">
                            <span style="display: inline-block; width: 120px;">Phụ thuộc CPU:</span>
                            <strong style="color: ${cpuDependency.color}">${cpuDependency.text}</strong>
                        </p>
                    </div>

                    <div class="detail-card" style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h4 style="margin: 0 0 10px 0; color: #333;">FPS dự kiến</h4>
                        <div class="fps-table" style="display: grid; gap: 5px;">
                            <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                                <span style="color: #28a745;">Thấp:</span>
                                <div style="background: #f8f9fa; padding: 5px 10px; border-radius: 4px;">${gameInfo.low.fps} FPS</div>
                            </div>
                            <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                                <span style="color: #ffc107;">Trung bình:</span>
                                <div style="background: #f8f9fa; padding: 5px 10px; border-radius: 4px;">${gameInfo.medium.fps} FPS</div>
                            </div>
                            <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                                <span style="color: #dc3545;">Cao:</span>
                                <div style="background: #f8f9fa; padding: 5px 10px; border-radius: 4px;">${gameInfo.high.fps} FPS</div>
                            </div>
                            ${gameInfo.ultra ? `
                            <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; align-items: center;">
                                <span style="color: #6f42c1;">Ultra:</span>
                                <div style="background: #f8f9fa; padding: 5px 10px; border-radius: 4px;">${gameInfo.ultra.fps} FPS</div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                </div>

                <div class="optimization-tips" style="margin-top: 15px; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #333;">Gợi ý tối ưu</h4>
                    <ul style="margin: 0; padding-left: 20px; color: #666;">
                        ${gameType?.cpuDependency === "very-high" || gameType?.cpuDependency === "high" ? 
                            `<li>Game này phụ thuộc nhiều vào CPU, nên ưu tiên nâng cấp CPU để tăng FPS</li>` : ''}
                        ${isX3D ? 
                            `<li>CPU X3D của bạn sẽ cho hiệu năng vượt trội trong game này</li>` : ''}
                        <li>Điều chỉnh cài đặt đồ họa để cân bằng giữa chất lượng hình ảnh và FPS</li>
                        ${gameType?.type === "esports" ? 
                            `<li>Khuyến nghị chơi ở cài đặt thấp để đạt FPS cao nhất</li>` : ''}
                    </ul>
                </div>
            </div>
        `;
    }
}

/**
 * Update FPS estimate based on selected graphics quality
 */
function updateFpsEstimate(gamePerformance, selectedGame) {
    const fpsEstimate = estimateGameFPS(gamePerformance, selectedGame);
    
    document.getElementById('fps-estimate-container').style.display = 'flex';
    document.getElementById('fps-estimate').textContent = fpsEstimate.fps;
    document.getElementById('fps-estimate').style.color = gamePerformance.color;
}

// Add performance scores for older and newer hardware
window.HARDWARE_SCORES = {
    cpu: {
        // Intel old gen
        "Core i7-1220v3": 45,
        "Core i5-1220v3": 35,
        "Core i3-1220v3": 25,
        // Intel current gen
        "Core i9-13900K": 100,
        "Core i7-13700K": 90,
        "Core i5-13600K": 80,
        "Core i3-13100": 60,
        // AMD old gen
        "Ryzen 7 1800X": 50,
        "Ryzen 5 1600X": 40,
        "Ryzen 3 1300X": 30,
        // AMD current gen
        "Ryzen 9 7950X": 100,
        "Ryzen 7 7700X": 90,
        "Ryzen 5 7600X": 80,
        "Ryzen 3 7300X": 60
    },
    gpu: {
        // NVIDIA old gen
        "GTX 750 Ti": 20,
        "GTX 960": 30,
        "GTX 1050 Ti": 35,
        // NVIDIA current gen
        "RTX 4090": 100,
        "RTX 4080": 95,
        "RTX 4070": 85,
        "RTX 4060": 75,
        // AMD old gen
        "RX 460": 25,
        "RX 560": 30,
        "RX 570": 35,
        // AMD current gen
        "RX 7900 XTX": 100,
        "RX 7800 XT": 90,
        "RX 7700 XT": 80,
        "RX 7600": 70
    }
};

// Add CPU architecture information
window.CPU_ARCHITECTURES = {
    // AMD X3D Series
    "Ryzen 7 7800X3D": { arch: "zen4", cache: "x3d", ipc: 1.4 },
    "Ryzen 7 5800X3D": { arch: "zen3", cache: "x3d", ipc: 1.35 },
    "Ryzen 7 5700X3D": { arch: "zen3", cache: "x3d", ipc: 1.35 },
    // AMD Standard
    "Ryzen 9 7950X": { arch: "zen4", cache: "normal", ipc: 1.15 },
    "Ryzen 7 7700X": { arch: "zen4", cache: "normal", ipc: 1.15 },
    "Ryzen 5 7600X": { arch: "zen4", cache: "normal", ipc: 1.15 },
    // Intel
    "Core i9-14900K": { arch: "raptorlake", cache: "normal", ipc: 1.05 },
    "Core i7-14700K": { arch: "raptorlake", cache: "normal", ipc: 1.05 },
    "Core i5-14600K": { arch: "raptorlake", cache: "normal", ipc: 1.05 }
};

// Add game type classifications
window.GAME_TYPES = {
    "valorant": { type: "esports", cpuDependency: "high" },
    "csgo": { type: "esports", cpuDependency: "very-high" },
    "lol": { type: "esports", cpuDependency: "medium" },
    "pubg": { type: "battle-royale", cpuDependency: "medium" },
    "gta-v": { type: "aaa", cpuDependency: "balanced" },
    "elden-ring": { type: "aaa", cpuDependency: "balanced" },
    "god-of-war": { type: "aaa", cpuDependency: "balanced" },
    "black-myth-wukong": { type: "aaa", cpuDependency: "balanced" },
    "battle-teams-2": { type: "esports", cpuDependency: "high" },
    "delta-force": { type: "esports", cpuDependency: "medium" },
    "audition": { type: "casual", cpuDependency: "low" },
    "mu-origin": { type: "mmorpg", cpuDependency: "medium" },
    "crossfire": { type: "esports", cpuDependency: "very-high" }
};

function getCPUArchitecture(cpuName) {
    for (const [key, value] of Object.entries(window.CPU_ARCHITECTURES)) {
        if (cpuName.includes(key)) {
            return value;
        }
    }
    return null;
}

function calculateGamePerformanceScore(cpuScore, gpuScore, gameType, graphicsQuality) {
    let cpuWeight, gpuWeight;
    
    switch(gameType) {
        case 'esports':
            if (graphicsQuality === 'low') {
                cpuWeight = 0.7;
                gpuWeight = 0.3;
            } else if (graphicsQuality === 'medium') {
                cpuWeight = 0.5;
                gpuWeight = 0.5;
            } else {
                cpuWeight = 0.3;
                gpuWeight = 0.7;
            }
            break;
            
        case 'mmorpg':
            if (graphicsQuality === 'low') {
                cpuWeight = 0.5;
                gpuWeight = 0.5;
            } else if (graphicsQuality === 'medium') {
                cpuWeight = 0.4;
                gpuWeight = 0.6;
            } else {
                cpuWeight = 0.3;
                gpuWeight = 0.7;
            }
            break;
            
        case 'casual':
            if (graphicsQuality === 'low') {
                cpuWeight = 0.6;
                gpuWeight = 0.4;
            } else if (graphicsQuality === 'medium') {
                cpuWeight = 0.5;
                gpuWeight = 0.5;
            } else {
                cpuWeight = 0.4;
                gpuWeight = 0.6;
            }
            break;
            
        case 'battle-royale':
        case 'aaa':
        default:
            if (graphicsQuality === 'low') {
                cpuWeight = 0.4;
                gpuWeight = 0.6;
            } else if (graphicsQuality === 'medium') {
                cpuWeight = 0.3;
                gpuWeight = 0.7;
            } else {
                cpuWeight = 0.2;
                gpuWeight = 0.8;
            }
            break;
    }
    
    return (cpuScore * cpuWeight) + (gpuScore * gpuWeight);
}

function adjustCPUScore(baseCpuScore, cpuInfo) {
    let finalScore = baseCpuScore;
    
    // Apply IPC multiplier
    finalScore *= cpuInfo.ipc;
    
    // Apply cache bonus for large cache CPUs
    if (cpuInfo.cache === "large") {
        finalScore *= 1.2;
    }
    
    return Math.round(finalScore);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .game-performance-card {
        animation: slideIn 0.3s ease-out;
    }

    .detail-card {
        transition: transform 0.2s ease-out;
    }

    .detail-card:hover {
        transform: translateY(-2px);
    }

    .performance-score {
        animation: scoreIn 0.5s ease-out;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes scoreIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

