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