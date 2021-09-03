// populate data into a shell table
export const buildTable = (table,features) => {
    for (const element of features) {
        let newRow = table.insertRow(-1);
        addRow(newRow, element.attributes.CreationDate);
        addRow(newRow, element.attributes.reason_for_complaint);
        addRow(newRow, `${element.attributes.full_name} ${element.attributes.last_name}`);
        addRow(newRow, element.attributes.street_address);
        addRow(newRow, element.attributes.city);
        addRow(newRow, element.attributes.describe_complaint);
        addRow(newRow, element.attributes.phone_number);
        addRow(newRow, element.attributes.e_mail_address);
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