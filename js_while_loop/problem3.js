/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let num = 81;
let sum = 0;
while(num<=131){
    if(num % 2 != 0){
        sum += num;
    }
    num++;
}

console.log(sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let n = 206;
let s = 0;
while(n <= 311){
    if(n % 2 == 0){
        s += n;
    }
    n++;
}

console.log(s);