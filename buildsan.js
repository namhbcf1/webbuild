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
        cpu: "12100f",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '19M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '20M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '21M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '22M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '23M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '24M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '25M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060ti-16G",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '26M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '28M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '29M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '30M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070S",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
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
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060t",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '12M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "4060",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '19M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '20M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "3070ti",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '21M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "2070s",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '22M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3060ti",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '23M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3070",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '24M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '25M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '26M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '28M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '29M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '30M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },


};

const intelBudgetConfigsPubg = {
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
        cpu: "12100f",
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
        vga: "1060-3g",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '19M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '20M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '21M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '22M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '23M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '24M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '25M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060ti-16G",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '26M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '28M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '29M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '30M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070S",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
};

const amdBudgetConfigsPubg = {
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
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060t",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '12M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "4060",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '19M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '20M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "3070ti",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '21M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "2070s",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '22M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3060ti",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '23M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3070",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '24M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '25M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '26M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '28M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '29M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '30M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
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
        cpu: "12100f",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '19M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '20M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '21M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '22M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '23M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '24M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '25M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060ti-16G",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '26M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '28M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '29M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '30M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070S",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
};

const amdBudgetConfigsLol = {
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
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060t",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '12M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "4060",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '19M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '20M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "3070ti",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '21M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "2070s",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '22M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3060ti",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '23M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3070",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '24M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '25M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '26M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '28M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '29M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '30M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
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
        cpu: "12100f",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '19M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '20M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '21M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '22M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '23M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '24M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '25M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060ti-16G",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '26M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '28M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '29M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '30M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070S",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
};

const amdBudgetConfigsGtaV = {
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
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060t",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '12M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "4060",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '19M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '20M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "3070ti",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '21M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "2070s",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '22M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3060ti",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '23M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3070",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '24M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '25M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '26M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '28M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '29M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '30M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },

};

const intelBudgetConfigsCsgo = {
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
        cpu: "12100f",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "13400f",
        mainboard: "MSI-B760",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '19M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '20M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '21M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '22M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '23M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '24M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "3080",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '25M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4060ti-16G",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '26M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '28M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '29M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '30M': {
        cpu: "14600kf",
        mainboard: "B760M-E",
        vga: "4070S",
        ram: "sstc-32",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
};

const amdBudgetConfigsCsgo = {
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
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1060-3g",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '9M': {
        cpu: "5600",
        mainboard: "JGINYUE-B450",
        vga: "1660s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '10M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060t",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "DT660"
    },
    '11M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '12M': {
        cpu: "5600x",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '13M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2060s",
        ram: "sstc-16",
        ssd: "sstc-256",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "2070s",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3060ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '17M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '18M': {
        cpu: "5700x3d",
        mainboard: "JGINYUE-B450",
        vga: "4060",
        ram: "sstc-32",
        ssd: "crucial-1tb",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '19M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '20M': {
        cpu: "7600x",
        mainboard: "JGINYUE-B650",
        vga: "3070ti",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '21M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "2070s",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '22M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3060ti",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '23M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3070",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '24M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '25M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '26M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "4060",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "VSP750"
    },
    '27M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '28M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-16-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '29M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-500",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
    },
    '30M': {
        cpu: "7800x3d",
        mainboard: "JGINYUE-B650",
        vga: "3080",
        ram: "tridentz-32-6000",
        ssd: "crucial-1tb",
        case: "GA",
        cpuCooler: "TMR120SE",
        psu: "COSAIR850"
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
        cpu: "12100f",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
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
        cpu: "12100f",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
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
        cpu: "12100f",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
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
        cpu: "12100f",
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
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '14M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '15M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },
    '16M': {
        cpu: "13400f",
        mainboard: "HNZ-B760",
        vga: "3070ti",
        ram: "sstc-16",
        ssd: "crucial-500",
        case: "GA3",
        cpuCooler: "CR1000",
        psu: "VSP750"
    },

};


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
