const resultTable = document.getElementById('resultTable').querySelector('tbody');
const tableTotalPrice = document.getElementById('tableTotalPrice');

function updateTable() {
    const selections = JSON.parse(localStorage.getItem('selectedItems')) || {};
    resultTable.innerHTML = ''; // Clear existing rows
    let grandTotalPrice = 0;

    for (const [option, items] of Object.entries(selections)) {
        items.forEach(item => {
            const row = document.createElement('tr');
            
            const productCell = document.createElement('td');
            productCell.textContent = item.label;
            
            const quantityCell = document.createElement('td');
            quantityCell.textContent = item.quantity;
            
            const priceCell = document.createElement('td');
            priceCell.textContent = `$${(item.quantity * item.price).toFixed(2)}`;
            
            row.appendChild(productCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            
            resultTable.appendChild(row);
            
            grandTotalPrice += item.quantity * item.price;
        });
    }

    tableTotalPrice.textContent = `$${grandTotalPrice.toFixed(2)}`;
}

updateTable();