document.addEventListener('DOMContentLoaded', function () {
    const cpuBrandSelect = document.getElementById('cpu-brand');
    const cpuSelect = document.getElementById('cpu');
    const motherboardSelect = document.getElementById('mainboard');
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
            note: el.dataset.note || 'NEW'
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
            note: el.dataset.note || 'NEW'
        })
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
                option.disabled = !isVisible; // Disable options in hidden optgroups
            });
        });

        cpuSelect.value = '';

        let hasVisibleMotherboard = false;
        motherboardOptions.forEach(el => {
            if (el.tagName === 'OPTGROUP') {
                const isVisible = !selectedBrand || el.label.startsWith(selectedBrand);
                el.style.display = isVisible ? '' : 'none';
                el.querySelectorAll('option').forEach(option => {
                    option.disabled = !isVisible; // Disable options in hidden optgroups
                });
            } else {
                const optionCompatible = !selectedBrand || (el.dataset.cpuSocket && components.cpu.some(cpu => cpu.brand.startsWith(selectedBrand) && cpu.socket === el.dataset.cpuSocket));
                el.style.display = optionCompatible? "" : "none";
                el.disabled = !optionCompatible; // Disable incompatible motherboard options directly
                if(optionCompatible) hasVisibleMotherboard = true;
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
            option.disabled = !compatible; // Disable incompatible options
            if (compatible) hasVisibleMotherboard = true;
        });
        motherboardSelect.classList.toggle('hidden-option', !hasVisibleMotherboard);
        if (!hasVisibleMotherboard) motherboardSelect.value = '';
        updateConfigurationSummary();
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
            if (selectedOption && selectedOption.value && !selectedOption.disabled) { // Check if option is not disabled
                const componentName = selectedOption.textContent;
                const price = parseFloat(selectedOption.dataset.price) || 0;
                const warranty = selectedOption.dataset.warranty || 'N/A';
                const note = selectedOption.dataset.note || 'NEW';
                const thanhTien = price;
                const imageUrl = selectedOption.dataset.image || 'path/to/default-image.png'; // Use default image if none

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

    cpuSelect.addEventListener('change', function() {
        const selectedCpu = this.options[this.selectedIndex];
        updateImagePreview(selectedCpu);

        if (selectedCpu && selectedCpu.value) {
            filterMotherboardBySocket(selectedCpu.dataset.socket);
        } else {
            filterMotherboardBySocket(null);
        }

        updateConfigurationSummary();
    });

    motherboardSelect.addEventListener('change', function () {
        updateImagePreview(this.options[this.selectedIndex]);
        updateConfigurationSummary();
    });

    document.querySelectorAll('#components-form select:not(#cpu-brand):not(#cpu):not(#mainboard)')
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
});
