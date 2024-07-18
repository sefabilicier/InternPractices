
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            multiply();
            displayMatrix();
            multiplyMatrix();
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

    //this is where we get 2 matrix as an output!!!!
    function createTable(columns, rows) {
        let table = document.createElement('table');
    
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                let input = document.createElement('input');
                input.type = 'text';
                input.className = 'matrix-input';
                input.style.width = '100%'; 
                input.style.height = '100%'; 
                tr.appendChild(input);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
        
    }

    let table = createTable(columns, rows);
    let table2 = createTable(columns, rows);

    
    matrixContainer.appendChild(table);
    matrixContainer.appendChild(table2);

}

function multiplyMatrix() {
    let columns = document.getElementsByName("c1")[0].value;
    let rows = document.getElementsByName("r1")[0].value;
    let matrixMultiply = document.getElementById("matrix-multiply");

    matrixMultiply.innerText = '';
    console.log("hi");
}