/* 

4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.

*/

var books = ['c', 'c++', 'java', 'python', 'js'];
var list = (['rice', 'tomato', 'paddy']);
var num = 1324234;
var flower ='tulip';
var a = '[]';

console.log(Array.isArray(books));
console.log(Array.isArray(list));
console.log(Array.isArray(num));
console.log(Array.isArray(flower));
console.log(Array.isArray(a));