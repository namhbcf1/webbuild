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
    const selectedComponentDiv = document.getElementById('selected-component');  // Not used, but good to have

    // Image preview element
    const imagePreview = document.createElement('img');
    imagePreview.id = 'image-preview';
    imagePreview.style.maxWidth = '100%'; /* Make image responsive within its container */
    imagePreview.style.height = 'auto';
    imagePreview.style.marginTop = '10px';
    imagePreview.style.display = 'none';  // Initially hidden
    selectedComponentDiv.appendChild(imagePreview); // Append to existing div

    // Helper function to create options
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

    // Function to populate a select element, optionally with optgroups
    function populateSelect(selectElement, componentsArray, groupByField = null) {
        selectElement.innerHTML = '<option value="">Chọn ' + selectElement.name + '</option>'; // Clear and add default

        if (groupByField) {
            const groupedComponents = {};
            componentsArray.forEach(component => {
                const groupValue = component[groupByField];
                if (!groupedComponents[groupValue]) {
                    groupedComponents[groupValue] = [];
                }
                groupedComponents[groupValue].push(component);
            });

            // Sort groups alphabetically
            Object.keys(groupedComponents).sort().forEach(groupName => {
                const optgroup = document.createElement('optgroup');
                optgroup.label = groupName;

                // Sort components within each group
                groupedComponents[groupName].sort((a, b) => a.name.localeCompare(b.name)).forEach(component => {
                    optgroup.appendChild(createOption(component));
                });
                selectElement.appendChild(optgroup);
            });
        } else {
            // No grouping, sort all components alphabetically
            componentsArray.sort((a, b) => a.name.localeCompare(b.name)).forEach(component => {
                selectElement.appendChild(createOption(component));
            })
        }
    }

    // --- Data initialization (using data from HTML) ---
    const components = { cpu: [], mainboard: [], vga: [], ram: [], ssd: [], psu: [], case: [], 'cpu-cooler': [], hdd: [] };

    // Extract data from existing HTML structure (BEST approach)
    document.querySelectorAll('#cpu option, #cpu optgroup').forEach(el => {
        if (el.tagName === 'OPTGROUP') return; // Skip optgroup labels
        if (el.value === "") return;         //skip first option
        components.cpu.push({
            brand: el.parentElement.label,  // Get brand from optgroup
            name: el.textContent,
            socket: el.dataset.socket,
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'   // Default note to 'NEW' if not present
        });
    });

    document.querySelectorAll('#mainboard option, #mainboard optgroup').forEach(el => {
        if (el.tagName === 'OPTGROUP') return;
        if (el.value === "") return;
        components.mainboard.push({
            brand: el.parentElement.label,
            name: el.textContent,
            socket: el.dataset.cpuSocket, // Corrected attribute name
            price: parseInt(el.dataset.price),
            image: el.dataset.image,
            warranty: el.dataset.warranty,
            note: el.dataset.note || 'NEW'
        });
    });

    // ... extract data for other component types (vga, ram, etc.)
    document.querySelectorAll('select[name="vga"] option').forEach(el => {
        if (el.value === "") return;
        components.vga.push({
            name: el.textContent.replace(/ - \d+\.\d+ VNĐ$/, ''), // Clean up the name
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
        components["cpu-cooler"].push({  // Use bracket notation for names with hyphens
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

    // --- Initial population of selects ---
    populateSelect(cpuSelect, components.cpu, 'brand');
    populateSelect(motherboardSelect, components.mainboard, 'brand');
    populateSelect(document.querySelector('select[name="vga"]'), components.vga);
    populateSelect(document.querySelector('select[name="ram"]'), components.ram);
    populateSelect(document.querySelector('select[name="ssd"]'), components.ssd);
    populateSelect(document.querySelector('select[name="psu"]'), components.psu);
    populateSelect(document.querySelector('select[name="case"]'), components.case, 'brand');
    populateSelect(document.querySelector('select[name="cpu-cooler"]'), components['cpu-cooler']);
    populateSelect(document.querySelector('select[name="hdd"]'), components.hdd);

    // --- Event Handlers ---

    //Shows all CPUs for selected Brand, and compatible motherboards.
    function filterComponents(selectedBrand) {
        const cpuOptions = document.querySelectorAll('#cpu optgroup');
        const motherboardOptions = document.querySelectorAll('#mainboard optgroup, #mainboard option');

        // 1. Show/hide CPU optgroups based on brand
        cpuOptions.forEach(optgroup => {
            optgroup.style.display = (!selectedBrand || optgroup.label.startsWith(selectedBrand)) ? '' : 'none';
        });

        // 2. Reset CPU selection
        cpuSelect.value = '';

        // 3. Show only compatible motherboards
        let hasVisibleMotherboard = false;
        motherboardOptions.forEach(el => {
            if (el.tagName === 'OPTGROUP') {
                // Show/hide motherboard optgroups based on selected brand
                el.style.display = (!selectedBrand || el.label.startsWith(selectedBrand)) ? '' : 'none';
            } else {
                //For options, check socket compatibility *if* a CPU of the selected brand is chosen.
                const optionCompatible = !selectedBrand || (el.dataset.cpuSocket && components.cpu.some(cpu => cpu.brand.startsWith(selectedBrand) && cpu.socket === el.dataset.cpuSocket));
                el.style.display = optionCompatible ? "" : "none";
                if (optionCompatible) hasVisibleMotherboard = true;
            }
        });

        // 4. Show/hide motherboard select based on compatibility
        motherboardSelect.classList.toggle('hidden-option', !hasVisibleMotherboard);
        if (!hasVisibleMotherboard) motherboardSelect.value = ''; // Reset if hidden

        updateConfigurationSummary();
    }

    // Filter motherboards by CPU socket
    function filterMotherboardBySocket(cpuSocket) {
        const motherboardOptions = motherboardSelect.querySelectorAll('option');
        let hasVisibleMotherboard = false;

        motherboardOptions.forEach(option => {
            const compatible = !cpuSocket || (option.dataset.socket === cpuSocket);
            option.style.display = compatible ? '' : 'none';
            if (compatible) hasVisibleMotherboard = true;
        });
        //Show if compatible options exist, otherwise hide and clear
        motherboardSelect.classList.toggle('hidden-option', !hasVisibleMotherboard);
        if (!hasVisibleMotherboard) motherboardSelect.value = '';
        updateConfigurationSummary();
    }

    // Update image preview
    function updateImagePreview(selectedOption) {
        imagePreview.src = selectedOption?.dataset.image || ''; // Set to empty string if no image
        imagePreview.style.display = selectedOption?.dataset.image ? 'block' : 'none';
        // Make sure image is visible when container is shown (important for mobile)
        selectedComponentDiv.classList.add('show'); // Ensure container is shown if image exists
    }

    // Update configuration summary and total price
    function updateConfigurationSummary() {
        configurationSummaryDiv.innerHTML = '';
        totalPriceDiv.textContent = '';
        modalSummaryDiv.innerHTML = '';
        modalTotalPriceDiv.textContent = '';

        let totalPrice = 0;
        let summaryHTML = '<h2 class="summary-header">Cấu hình PC đã chọn:</h2><table class="summary-table">'; // Added class to header
        summaryHTML += '<thead><tr><th>STT</th><th>Tên, mã, loại linh kiện</th><th>Đvt</th><th>Số lượng</th><th>Đơn giá</th><th>Thành tiền</th><th>Bảo Hành</th><th>Ghi chú</th></tr></thead><tbody>';
        let modalSummaryHTML = summaryHTML; // Start with the same header

        const selects = document.querySelectorAll('#components-form select:not(#cpu-brand)');
        let stt = 1;

        selects.forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            if (selectedOption && selectedOption.value) {
                const componentName = selectedOption.textContent;
                const price = parseFloat(selectedOption.dataset.price) || 0;
                const warranty = selectedOption.dataset.warranty || 'N/A';
                const note = selectedOption.dataset.note || 'NEW';
                const thanhTien = price;

                const rowHTML = `<tr>
                        <td>${stt}</td>
                        <td>${componentName}</td>
                        <td>Chiếc</td>
                        <td>1</td>
                        <td>${price.toLocaleString()}</td>
                        <td>${thanhTien.toLocaleString()}</td>
                        <td>${warranty}</td>
                        <td>${note}</td>
                    </tr>`;

                summaryHTML += rowHTML;
                modalSummaryHTML += rowHTML;
                totalPrice += price;
                stt++;
            }
        });

        summaryHTML += '</tbody></table>';
        modalSummaryHTML += '</tbody></table>';

        configurationSummaryDiv.innerHTML = summaryHTML;
        totalPriceDiv.textContent = `Tổng tiền: ${totalPrice.toLocaleString()} VNĐ`;
        modalSummaryDiv.innerHTML = modalSummaryHTML;
        modalTotalPriceDiv.textContent = `Tổng tiền: ${totalPrice.toLocaleString()} VNĐ`;

        // Show configuration summary if components are selected (better mobile UX)
        if (totalPrice > 0) {
            configurationSummaryDiv.classList.add('show'); // Add class to show summary
        } else {
            configurationSummaryDiv.classList.remove('show'); // Hide if no components selected
        }
    }

    // --- Event Listener Attachments ---

    //When Brand is selected, filter immediately.
    cpuBrandSelect.addEventListener('change', function () {
        filterComponents(this.value);
    });

    cpuSelect.addEventListener('change', function () {
        const selectedCpu = this.options[this.selectedIndex];
        updateImagePreview(selectedCpu);

        // Lọc mainboard khi chọn CPU
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
        summaryModal.classList.add('show-modal'); // Use class to show modal (consistent with CSS)
    });

    closeModalSpan.addEventListener('click', function () {
        summaryModal.classList.remove('show-modal'); // Use class to hide modal
    });

    window.addEventListener('click', function (event) {
        if (event.target == summaryModal) {
            summaryModal.classList.remove('show-modal'); // Use class to hide modal
        }
    });

    // Initially hide mainboard
    motherboardSelect.classList.add('hidden-option');
    updateConfigurationSummary(); // Initial summary update, consider if needed at start
});
