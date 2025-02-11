document.addEventListener('DOMContentLoaded', function () {
    console.log(document.getElementById('ram'));
    const cpuBrandSelect = document.getElementById('cpu-brand');
    const cpuSelect = document.getElementById('cpu');
    const motherboardSelect = document.getElementById('mainboard');
    const ramSelect = document.getElementById('ram');
    if (!ramSelect) {
        console.error("Phần tử RAM (select#ram) không tồn tại trong HTML.");
        return;
    }
    const calculateButton = document.getElementById('calculate-button');
    const configurationSummaryDiv = document.getElementById('configuration-summary');
    const modalSummaryDiv = document.getElementById('modal-summary');
    const modalTotalPriceDiv = document.getElementById('modal-total-price');
    const summaryModal = document.getElementById('summary-modal');
    const closeModalSpan = document.querySelector('.close-modal');
    const totalPriceDiv = document.getElementById('total-price');
    const selectedComponentDiv = document.getElementById('selected-component');

    const imagePreview = document.createElement('img');
    imagePreview.id = 'image-preview';
    imagePreview.style.maxWidth = '200px';
    imagePreview.style.marginTop = '10px';
    imagePreview.style.display = 'none';
    document.getElementById('selected-component').appendChild(imagePreview);

    function createOption(component) {
        const opt = document.createElement('option');
        opt.value = component.name.toLowerCase().replace(/ /g, '-');
        opt.textContent = component.name;
        opt.dataset.price = component.price;
        opt.dataset.image = component.image;
        opt.dataset.warranty = component.warranty;
        if (component.socket) opt.dataset.socket = component.socket;
        if (component.brand) opt.dataset.brand = component.brand;
        if (component.note) opt.dataset.note = component.note;
        if (component.memoryType) opt.dataset.memoryType = component.memoryType;
        if (component.buss) opt.dataset.buss = component.buss;  // thêm dòng này
        return opt;
    }


    function populateSelect(selectElement, componentsArray, groupByField = null) {
        selectElement.innerHTML = '<option value="">Chọn ' + selectElement.name + '</option>';

        if (groupByField) {
            const groupedComponents = {};
            componentsArray.forEach(component => {
                const groupValue = component[groupByField];
                if (!groupedComponents[groupValue]) {
                    groupedComponents[groupValue] = [];
                }
                groupedComponents[groupValue].push(component);
            });

            Object.keys(groupedComponents).sort().forEach(groupName => {
                const optgroup = document.createElement('optgroup');
                optgroup.label = groupName;

                groupedComponents[groupName].sort((a, b) => a.name.localeCompare(b.name)).forEach(component => {
                    optgroup.appendChild(createOption(component));
                });
                selectElement.appendChild(optgroup);
            });
        } else {
            componentsArray.sort((a, b) => a.name.localeCompare(b.name)).forEach(component => {
                selectElement.appendChild(createOption(component));
            })
        }
    }

    const components = { cpu: [], mainboard: [], vga: [], ram: [], ssd: [], psu: [], case: [], 'cpu-cooler': [], hdd: [] };

    document.querySelectorAll('#cpu option, #cpu optgroup').forEach(el => {
        if (el.tagName === 'OPTGROUP') return;
        if (el.value === "") return;
        components.cpu.push({
            brand: el.parentElement.label,
            name: el.textContent,
            socket: el.dataset.socket,
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'
        });
    });

    document.querySelectorAll('#mainboard option, #mainboard optgroup').forEach(el => {
        if (el.tagName === 'OPTGROUP') return;
        if (el.value === "") return;
        components.mainboard.push({
            brand: el.parentElement.label,
            name: el.textContent,
            socket: el.dataset.cpuSocket,
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW',
            memoryType: el.dataset.memoryType
        });
    });

    document.querySelectorAll('select[name="vga"] option').forEach(el => {
        if (el.value === "") return;
        components.vga.push({
            name: el.textContent.replace(/ - \d+\.\d+ VNĐ$/, ''),
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'
        })
    });

    document.querySelectorAll('select[name="ram"] option').forEach(el => {
        if (el.value === "") return;
        components.ram.push({
            name: el.textContent.replace(/ - \d+\.\d+ VNĐ$/, ''),
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW',
            memoryType: el.dataset.memoryType,  // thêm thuộc tính memoryType
            buss: el.dataset.buss                // thêm thuộc tính buss
        });
    });
    document.querySelectorAll('select[name="ssd"] option').forEach(el => {
        if (el.value === "") return;
        components.ssd.push({
            name: el.textContent.replace(/ - \d+\.\d+ VNĐ$/, ''),
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'
        })
    });

    document.querySelectorAll('select[name="psu"] option').forEach(el => {
        if (el.value === "") return;
        components.psu.push({
            name: el.textContent.replace(/ - \d+\.\d+ VNĐ$/, ''),
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'
        })
    });

    document.querySelectorAll('select[name="case"] option, select[name="case"] optgroup').forEach(el => {
        if (el.tagName === 'OPTGROUP') return;
        if (el.value === "") return;
        components.case.push({
            brand: el.parentElement.label,
            name: el.textContent.replace(/ - \d+\.\d+ VNĐ$/, ''),
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'
        })
    });

    document.querySelectorAll('select[name="cpu-cooler"] option').forEach(el => {
        if (el.value === "") return;
        components["cpu-cooler"].push({
            name: el.textContent.replace(/ - \d+\.\d+ VNĐ$/, ''),
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'
        })
    });

    document.querySelectorAll('select[name="hdd"] option').forEach(el => {
        if (el.value === "") return;
        components.hdd.push({
            name: el.textContent.replace(/ - \d+\.\d+ VNĐ$/, ''),
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'
        })
    });

    populateSelect(cpuSelect, components.cpu, 'brand');
    populateSelect(motherboardSelect, components.mainboard, 'brand');
    populateSelect(document.querySelector('select[name="vga"]'), components.vga);
    populateSelect(document.querySelector('select[name="ram"]'), components.ram);
    populateSelect(document.querySelector('select[name="ssd"]'), components.ssd);
    populateSelect(document.querySelector('select[name="psu"]'), components.psu);
    populateSelect(document.querySelector('select[name="case"]'), components.case, 'brand');
    populateSelect(document.querySelector('select[name="cpu-cooler"]'), components['cpu-cooler']);
    populateSelect(document.querySelector('select[name="hdd"]'), components.hdd);

    function filterComponents(selectedBrand) {
        const cpuOptions = document.querySelectorAll('#cpu optgroup');
        const motherboardOptions = document.querySelectorAll('#mainboard optgroup, #mainboard option');

        cpuOptions.forEach(optgroup => {
            const isVisible = !selectedBrand || optgroup.label.startsWith(selectedBrand);
            optgroup.style.display = isVisible ? '' : 'none';
            optgroup.querySelectorAll('option').forEach(option => {
                option.disabled = !isVisible;
            });
        });

        cpuSelect.value = '';

        let hasVisibleMotherboard = false;
        motherboardOptions.forEach(el => {
            if (el.tagName === 'OPTGROUP') {
                const isVisible = !selectedBrand || el.label.startsWith(selectedBrand);
                el.style.display = isVisible ? '' : 'none';
                el.querySelectorAll('option').forEach(option => {
                    option.disabled = !isVisible;
                });
            } else {
                const optionCompatible = !selectedBrand || (el.dataset.cpuSocket && components.cpu.some(cpu => cpu.brand.startsWith(selectedBrand) && cpu.socket === el.dataset.cpuSocket));
                el.style.display = optionCompatible ? "" : "none";
                el.disabled = !optionCompatible;
                if (optionCompatible) hasVisibleMotherboard = true;
            }
        });

        motherboardSelect.classList.toggle('hidden-option', !hasVisibleMotherboard);
        if (!hasVisibleMotherboard) motherboardSelect.value = '';

        updateConfigurationSummary();
    }

    function filterMotherboardBySocket(cpuSocket) {
        const motherboardOptions = motherboardSelect.querySelectorAll('option');
        let hasVisibleMotherboard = false;

        motherboardOptions.forEach(option => {
            const compatible = !cpuSocket || (option.dataset.socket === cpuSocket);
            option.style.display = compatible ? '' : 'none';
            option.disabled = !compatible;
            if (compatible) hasVisibleMotherboard = true;
        });
        motherboardSelect.classList.toggle('hidden-option', !hasVisibleMotherboard);
        if (!hasVisibleMotherboard) motherboardSelect.value = '';
        updateConfigurationSummary();
    }

    // Sự kiện change cho mainboard: sử dụng dữ liệu dataset và tên mainboard (chuẩn hóa) để lọc RAM
    // Sự kiện change cho mainboard: lấy các thuộc tính dataset và tên mainboard (đã trim)
    // Sự kiện change cho mainboard: lấy dữ liệu memoryType và buss từ dataset của mainboard
    // Sự kiện change cho mainboard: lấy dữ liệu memoryType và buss từ dataset của mainboard
    motherboardSelect.addEventListener('change', function () {
        const selectedMain = this.options[this.selectedIndex];
        // Lấy thuộc tính memoryType và buss, chuẩn hóa (toUpperCase và trim)
        const memoryType = selectedMain.dataset.memoryType ? selectedMain.dataset.memoryType.toUpperCase() : '';
        const buss = selectedMain.dataset.buss ? selectedMain.dataset.buss.trim() : '';
        console.log(`Mainboard được chọn: memoryType = ${memoryType}, buss = ${buss}`);
        filterRamByMemoryType(memoryType, buss);
    });

    function filterRamByMemoryType(memoryType, buss) {
        const ramOptions = ramSelect.querySelectorAll('option');
        const ramGroups = ramSelect.querySelectorAll('optgroup');

        // Nếu chưa có mainboard được chọn, hiển thị tất cả RAM
        if (!memoryType) {
            ramOptions.forEach(option => {
                option.style.display = '';
                option.disabled = false;
            });
            ramGroups.forEach(group => {
                group.style.display = '';
            });
            ramSelect.value = ''; // Đặt về option mặc định
            console.log("Chưa có mainboard được chọn, hiển thị tất cả RAM");
            return;
        }

        console.log(`Filter RAM: so sánh theo memoryType = ${memoryType} và buss = ${buss}`);

        ramOptions.forEach(option => {
            const ramMemoryType = option.dataset.memoryType ? option.dataset.memoryType.toUpperCase() : '';
            const ramBuss = option.dataset.buss ? option.dataset.buss.trim() : '';

            // Nếu buss của mainboard không có, chỉ so sánh memoryType; nếu có, so sánh cả buss.
            const isCompatible = buss ? ((ramMemoryType === memoryType) && (ramBuss === buss))
                : (ramMemoryType === memoryType);

            console.log(`Option ${option.value}: memoryType = ${ramMemoryType}, buss = ${ramBuss}, isCompatible = ${isCompatible}`);

            if (isCompatible) {
                option.style.display = '';
                option.disabled = false;
            } else {
                option.style.display = 'none';
                option.disabled = true;
            }
        });

        // Ẩn/hiện các optgroup dựa trên việc có option nào hiển thị không
        ramGroups.forEach(group => {
            const hasVisibleOptions = Array.from(group.querySelectorAll('option')).some(opt => opt.style.display !== 'none');
            group.style.display = hasVisibleOptions ? '' : 'none';
        });

        // Reset lựa chọn RAM về option mặc định, để người dùng tự chọn sau
        ramSelect.value = '';
        console.log("RAM được chọn:", ramSelect.value);
    }


    function updateImagePreview(selectedOption) {
        imagePreview.src = selectedOption?.dataset.image || '';
        imagePreview.style.display = selectedOption?.dataset.image ? 'block' : 'none';
    }

    function updateConfigurationSummary() {
        configurationSummaryDiv.innerHTML = '';
        totalPriceDiv.textContent = '';
        modalSummaryDiv.innerHTML = '';
        modalTotalPriceDiv.textContent = '';

        let totalPrice = 0;
        let summaryHTML = '<h2 class="summary-header">Cấu hình PC đã chọn:</h2><table class="summary-table">';
        summaryHTML += '<thead><tr><th>Hình ảnh</th><th>Linh kiện</th><th>Đơn giá</th><th>Thành tiền</th><th>Bảo Hành</th><th>Ghi chú</th></tr></thead><tbody>';
        let modalSummaryHTML = summaryHTML;

        const selects = document.querySelectorAll('#components-form select:not(#cpu-brand)');
        let stt = 1;

        selects.forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            if (selectedOption && selectedOption.value && !selectedOption.disabled) {
                const componentName = selectedOption.textContent;
                const price = parseFloat(selectedOption.dataset.price) || 0;
                const warranty = selectedOption.dataset.warranty || 'N/A';
                const note = selectedOption.dataset.note || 'NEW';
                const thanhTien = price;
                const imageUrl = selectedOption.dataset.image || 'path/to/default-image.png';

                const rowHTML = `<tr>
                <td><img src="${imageUrl}" alt="Hình ảnh ${componentName}" style="max-width: 50px; max-height: 50px; vertical-align: middle;"></td>
                <td>${componentName}</td>
                <td>${price.toLocaleString()}</td>
                <td>${thanhTien.toLocaleString()}</td>
                <td>${warranty}</td>
                <td>${note}</td>
            </tr>`;

                summaryHTML += rowHTML;
                modalSummaryHTML += rowHTML;
                totalPrice += price;
            }
        });

        summaryHTML += '</tbody></table>';
        modalSummaryHTML += '</tbody></table>';

        configurationSummaryDiv.innerHTML = summaryHTML;
        totalPriceDiv.textContent = `Tổng tiền: ${totalPrice.toLocaleString()} VNĐ`;
        modalSummaryDiv.innerHTML = modalSummaryHTML;
        modalTotalPriceDiv.textContent = `Tổng tiền: ${totalPrice.toLocaleString()} VNĐ`;

        if (totalPrice > 0) {
            configurationSummaryDiv.classList.add('show');
        } else {
            configurationSummaryDiv.classList.remove('show');
        }
    }

    cpuBrandSelect.addEventListener('change', function () {
        filterComponents(this.value);
    });

    cpuSelect.addEventListener('change', function () {
        const selectedCpu = this.options[this.selectedIndex];
        updateImagePreview(selectedCpu);

        if (selectedCpu && selectedCpu.value) {
            filterMotherboardBySocket(selectedCpu.dataset.socket);
        } else {
            filterMotherboardBySocket(null);
        }

        updateConfigurationSummary();
    });


    document.querySelectorAll('#components-form select:not(#cpu-brand):not(#cpu):not(#mainboard):not(#ram)')
        .forEach(select => {
            select.addEventListener('change', function () {
                updateImagePreview(this.options[this.selectedIndex]);
                updateConfigurationSummary();
            });
        });

    calculateButton.addEventListener('click', function () {
        updateConfigurationSummary();
        summaryModal.style.display = 'block';
    });

    closeModalSpan.addEventListener('click', function () {
        summaryModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == summaryModal) {
            summaryModal.style.display = 'none';
        }
    });

    motherboardSelect.classList.add('hidden-option');
    filterRamByMemoryType(null);
});
