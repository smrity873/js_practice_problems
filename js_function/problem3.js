//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg( arr, size){
     let sum = 0;
     for( let i = 0; i < size; i++){
        sum = sum + arr[i];
     }
     let result = sum / size;
     return result;
}
let arr = [2,3,4,5,6]
let avg = make_avg(arr, arr.length);

console.log(avg);