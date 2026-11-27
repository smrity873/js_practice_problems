/* 
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let new_num = '';
for(let num of numbers){
    new_num =new_num + num;
}

console.log(new_num);

