//* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangle of a student.

var bangle = 75.25;
var biology = 65;
var mathematics = 80;
var chemistry = 35.45;
var physics = 99.50;

var totalMark = (bangle + biology + mathematics + chemistry + physics);

var average = (totalMark/5);

console.log(average.toFixed(2));  //The toFixed() method is used to display two decimal places.
