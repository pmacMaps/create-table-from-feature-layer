// populate data into a shell table
export const buildTable = (table,features) => {
    for (const element of features) {
        let newRow = table.insertRow(-1);
        addRow(newRow, element.attributes.MUNI);
        addRow(newRow, element.attributes.POP_2010);
        addRow(newRow, element.attributes.MAG_DJ);
    }
}
// insert a new row into table
const addRow = (row,value) => {
    let newCell = row.insertCell(-1);
    let newText = document.createTextNode(value);
    newCell.appendChild(newText);
}
// populate element with error message
export const generateErrorMsg = (element,error) => {
    // create element to contain error message
    const container = document.createElement('p');
    // set content of error message
    container.innerHTML = error;
    // append message to parent element
    element.appendChild(container);
    // show error message
    element.style.display = 'block';
}