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

// Convert JSON date format to plain language format
export const convertJSONDateToString = (jsonDate) => {
    let shortDate;
    if (jsonDate) {
        const regex = /-?\d+/;
        const matches = regex.exec(jsonDate);
        const dt = new Date(parseInt(matches[0]));
        const month = dt.getMonth() + 1;
        const monthString = month > 9 ? month : '0' + month;
        const day = dt.getDate();
        const dayString = day > 9 ? day : '0' + day;
        const year = dt.getFullYear();
        shortDate = `${monthString}-${dayString}-${year}`;
    }
    return shortDate;
}