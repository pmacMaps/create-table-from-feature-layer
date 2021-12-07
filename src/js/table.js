import { convertJSONDateToString } from './ui.js';

// add data into new rows within table
export const buildTable = (table,features) => {
    for (const element of features) {
        // create new row in table
        let newRow = table.insertRow(-1);
        addCell(newRow, convertJSONDateToString(element.attributes.CreationDate));
        addCell(newRow, element.attributes.reason_for_complaint);
        addCell(newRow, `${element.attributes.full_name} ${element.attributes.last_name}`);
        addCell(newRow, element.attributes.street_address);
        addCell(newRow, element.attributes.city);
        addCell(newRow, element.attributes.describe_complaint);
        addCell(newRow, element.attributes.phone_number);
        addCell(newRow, element.attributes.e_mail_address, true);
    }
}

// insert a new cell into a table row
const addCell = (row, value, sendEmail) => {
    // create a new empty cell
    let newCell = row.insertCell(-1);
    // create div within cell element
    // allows for controlling height and width of cell
    let div = document.createElement('div');
    // set content of div to data if not an e-mail cell
    if (!sendEmail) {
        div.innerHTML = value;
    } else { // set content of div to e-mail ink
        const emailLink = createEmailLink(value);
        div.appendChild(emailLink);
    }
    // add div to cell
    newCell.appendChild(div);
}

// create e-mail link element
const createEmailLink = (data) => {
    // create <a> element
    const link = document.createElement('a');
    // set href attribute to mailto link using data as e-mail address
    link.setAttribute('href', `mailto:${data}`);
    // set content of <a> to e-mail
    link.innerHTML = data;
    return link;
}