// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const getFormattedDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    // today = `${dd}-${mm}-${yyyy} `
    // today = `${mm}/${dd}/${yyyy} `
    // today = `${dd}-${mm}-${yyyy} `
    today = `${mm}/${dd}/${yyyy} `
    return today;
}
const today = getFormattedDate();
console.log("Date: ", today)