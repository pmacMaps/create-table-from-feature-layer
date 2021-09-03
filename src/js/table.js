import { convertJSONDateToString } from './ui.js';

// populate data into a shell table
export const buildTable = (table,features) => {
    for (const element of features) {
        let newRow = table.insertRow(-1);
        addRow(newRow, convertJSONDateToString(element.attributes.CreationDate));
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
    let div = document.createElement('div');
    div.innerHTML = value;
    newCell.appendChild(div);
}