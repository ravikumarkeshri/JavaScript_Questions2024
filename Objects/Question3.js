// Write a JavaScript program to get the length of a JavaScript object.

// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


Object.objSize = function (myObj) {
    let size = 0, key;
    for (key in myObj) {
        if (myObj.hasOwnProperty(key)) {
            size++;
        }
    }
    return size;
}
let objSize = Object.objSize(student);
console.log("Size = ",objSize)