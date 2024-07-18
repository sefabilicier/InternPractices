
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            multiply();
            displayMatrix();
        }
    });
});


function multiply() {
    let columns = document.getElementsByName("c1")[0].value;
    let rows = document.getElementsByName("r1")[0].value;
    let result = columns * rows;
    document.getElementById("result").innerText = 'Result: ' + result;
}

function displayMatrix() {
    let columns = document.getElementsByName("c1")[0].value;
    let rows = document.getElementsByName("r1")[0].value;
    let matrixContainer = document.getElementById("matrix-container");

    // Clear any existing table
    matrixContainer.innerHTML = '';

    // Create new table
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    matrixContainer.appendChild(table);
}
