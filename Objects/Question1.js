// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}
const _getKeys = (obj) => {
    if (!isObject(obj)) {
        return [];
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    let keys = [];
    for (let key in obj) {
        if (_.has(obj, key)) {
            keys.push(key)
        }
    }
    return keys;

}
const isObject = (obj) => {
    let type = typeof (obj);
    return type === 'function' || type === 'object' && obj;

}

const Keys = _getKeys(student);
console.log(Keys);
