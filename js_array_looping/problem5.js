/* 
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
*/

let num = [1,2,3];
let copy = [...num];

copy[0] = 99;

console.log('Original : ', num);
console.log('Copy : ', copy);