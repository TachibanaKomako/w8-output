document.body.onload = ()=>{
    addMatrixElement(document.getElementById('matrix4X4'),4,4);
    addMatrixElement(document.getElementById('matrix2X2'),2,2);
    addMatrixElement(document.getElementById('matrix1X6'),1,6);
};
/*
 *マトリックス形式の表を作成する
 */
function addMatrixElement(parent,rowCount,columnCount){
    i = 1;

    for(let r=0;r<rowCount;r++){
        //行を作成する
        const rowDiv = document.createElement('div');
        parent.appendChild(rowDiv);
        rowDiv.className = `matrix_${rowCount}__row`;

        for(let c=0;c<columnCount;c++){
            const cellDiv = document.createElement('div');
            rowDiv.appendChild(cellDiv);
            cellDiv.className = `matrix_${rowCount}__cell`;

            const valDiv = document.createElement('div');
            cellDiv.appendChild(valDiv);
            valDiv.className = `matrix_${rowCount}__val`;
            valDiv.textContent = i++;
        }
    }
}