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

    matrixContainer.innerHTML = '';

    function createTable(columns, rows, tableIndex) {
        let table = document.createElement('table');
        table.id = `matrix-${tableIndex}`;
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                let input = document.createElement('input');
                input.type = 'text';
                input.className = 'matrix-input';
                input.style.width = '100%';
                input.style.height = '100%';
                td.appendChild(input);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }

    let table1 = createTable(columns, rows, 1);
    let table2 = createTable(columns, rows, 2);

    matrixContainer.appendChild(table1);
    matrixContainer.appendChild(table2);
}

function multiplyMatrix() {
    let columns = document.getElementsByName("c1")[0].value;
    let rows = document.getElementsByName("r1")[0].value;
    let matrixMultiply = document.getElementById("matrix-multiply");

    matrixMultiply.innerHTML = '';

    let table1 = document.getElementById('matrix-1');
    let table2 = document.getElementById('matrix-2');
    let resultTable = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            let input1 = table1.rows[i].cells[j].querySelector('input').value;
            let input2 = table2.rows[i].cells[j].querySelector('input').value;

            let result = parseFloat(input1) * parseFloat(input2);
            if (isNaN(result)) result = 0;

            let resultInput = document.createElement('input');
            resultInput.type = 'text';
            resultInput.className = 'matrix-input';
            resultInput.style.width = '100%';
            resultInput.style.height = '100%';
            resultInput.value = result;

            let resultLog = document.createElement('p')
            resultLog.className = 'multiply-log'

            td.appendChild(resultInput);
            tr.appendChild(td);
        }
        resultTable.appendChild(tr);
    }
    
    matrixMultiply.appendChild(resultTable);
}
