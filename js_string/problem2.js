//Count how many times a string has the letter a or A

let str = 'hello miss Ana';

let newStr = str.toLowerCase();
let cnt = 0;

for(let c of newStr){
    if(c == 'a'){
        cnt++;
    }
}

console.log(cnt);