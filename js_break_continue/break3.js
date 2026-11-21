/* 
Write a loop that goes from 2 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let num = 2; num <= 100; num++) {
  let root = Math.sqrt(num);

  if (Number.isInteger(root)=== true) {
    console.log(num);
    break;
  }
}
