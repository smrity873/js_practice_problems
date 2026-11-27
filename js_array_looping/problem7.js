/* 
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]

*/

let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length;j++){
        if(i==1 && j == 0){
            arr[i][j] = 99;
        }
    }
}

console.log(arr);