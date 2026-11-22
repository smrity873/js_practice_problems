/* 
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

*/

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for (let key in myObject){
    console.log(key,':',myObject[key],'|', 'Type: ', typeof myObject[key]);
}