document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            multiply();
            displayMatrix();
        }
    });
});


function syncFirstColToSecondRows() {
    let column1 = document.getElementsByName("c1")[0].value;
    document.getElementsByName("r2")[0].value = column1;
}

/*function magic() {
    document.getElementsByClassName('magic').innerText = 'You see that magic, HIH?';
}*/

function validateInputs() {
    let column1 = parseInt(document.getElementsByName("c1")[0].value);
    let row1 = parseInt(document.getElementsByName("r1")[0].value);
    let column2 = parseInt(document.getElementsByName("c2")[0].value);
    let row2 = parseInt(document.getElementsByName("r2")[0].value);

    if (isNaN(column1) || isNaN(row1) || isNaN(column2) || isNaN(row2)) {
        alert("All fields must be filled with valid numbers.");
        location.reload();
        return false;
    } 
    location.reload();
    return true;
}


function multiply() {
    //kural : birinci matrisin sütun sayısının ikinci matrisin satır sayısına eşit olmasıdır.
    let column1 = parseInt(document.getElementsByName("c1")[0].value);
    let row1 = parseInt(document.getElementsByName("r1")[0].value); 

    let result1 = column1 * row1;
    document.getElementById("result1").innerText = 'Your first matrix includes  ' + result1 + ' squares';

    let column2 = parseInt(document.getElementsByName("c2")[0].value); 
    let row2 = parseInt(document.getElementsByName("r2")[0].value);


    let result2 = column2 * row2;
    document.getElementById("result2").innerText = 'Your second matrix includes  ' + result2 + ' squares';

    if (column1 < 1 || row1 < 1 || column2 < 1 || row2 < 1) {
        alert("HUH! What do you think you are doing! At least 1 row or column");
        location.reload();
        return;
    }

    if (row1 < 3 || column2 < 3) {
        alert("Resulting matrix must be at least 3x3.\n The row of the first matrix should be greater than or equal to 3\n The column of the second matrix should be greater than or equal to 3");
        location.reload();
        return;
    }
    if (!validateInputs()) {
        return;
    }
}


function displayMatrix() {

    if (!validateInputs()) {
        return;
    }

    let column1 = document.getElementsByName("c1")[0].value; 
    let row1 = document.getElementsByName("r1")[0].value;

    let column2 = document.getElementsByName("c2")[0].value;
    let row2 = document.getElementsByName("r2")[0].value; 

    //columns = column1 + column2;
    //rows = row1 + row2;

    let matrixContainer = document.getElementById("matrix-container");

    matrixContainer.innerHTML = '';

    function createTable(columns, rows, tableIndex) {
        let table = document.createElement('table');
        table.id = `matrix-${tableIndex}`;
        table.className = 'matrix-table'; // Add a class to the table
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                let input = document.createElement('input');
                input.type = 'number';
                input.className = 'matrix-input';
                input.style.width = '120%';
                input.style.height = '120%';
                td.appendChild(input);
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }
        
        return table;
    }

    let table1 = createTable(column1, row1, 1);
    let table2 = createTable(column2, row2, 2);

    matrixContainer.appendChild(table1);

    matrixContainer.appendChild(table2);
}

//document.getElementsByName("r1")[0].addEventListener('change', displayMatrix);
//document.getElementsByName("c1")[0].addEventListener('change', displayMatrix);
//document.getElementsByName("r2")[0].addEventListener('change', displayMatrix);
//document.getElementsByName("c2")[0].addEventListener('change', displayMatrix);


function multiplyMatrix() {

    if (!validateInputs()) {
        return;
    }

    let column1 = document.getElementsByName("c1")[0].value; 
    let row1 = document.getElementsByName("r1")[0].value;

    let column2 = document.getElementsByName("c2")[0].value;
    let row2 = document.getElementsByName("r2")[0].value; 

    //let columns = [column1, column2].values;
    //let rows = [row1, row2].values;

    let matrixMultiply = document.getElementById("matrix-multiply");
    matrixMultiply.innerHTML = '';

    let table1 = document.getElementById('matrix-1');
    let table2 = document.getElementById('matrix-2');
    let resultTable = document.createElement('table');

    for (let i = 0; i < row1; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < column2; j++) {
            let sum = 0;
            for (let k = 0; k < column1; k++) {
                let input1 = table1.rows[i].cells[k].querySelector('input').value;
                let input2 = table2.rows[k].cells[j].querySelector('input').value; 
                sum += input1*input2;
            }
            let td = document.createElement('td');

            
            //let result = parseFloat(input1) * parseFloat(input2);
            //if (isNaN(result)) result = 0;

            let resultInput = document.createElement('input');
            resultInput.type = 'text';
            resultInput.className = 'matrix-input';
            resultInput.style.width = '100%';
            resultInput.style.height = '100%';
            resultInput.value = sum;

            //let resultLog = document.createElement('p')
            //resultLog.className = 'multiply-log'

            td.appendChild(resultInput);
            tr.appendChild(td);
        }
        resultTable.appendChild(tr);
    }
    
    matrixMultiply.appendChild(resultTable);
}