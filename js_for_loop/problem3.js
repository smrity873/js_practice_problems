/*

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;
for(let num = 91; num <= 129; num++){
    if(num % 2 == 1){
        sum += num;
    }
}

console.log(sum);

/*

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let sum1 = 0;
for(let num1 = 51; num1 <= 85; num1++){
    if(num1 % 2 == 0){
        sum1 += num1;
    }
}

console.log(sum1);
