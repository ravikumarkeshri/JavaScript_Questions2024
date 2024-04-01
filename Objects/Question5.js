// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_diameter = cyl_diameter;
    this.cyl_height = cyl_height;
}
Cylinder.prototype.Volume = function () {
    let radius = this.cyl_diameter / 2
    return Math.PI * radius * radius * this.cyl_height;
}
let cyl = new Cylinder(4, 7);
console.log("Volume: = " + cyl.Volume().toFixed(4))