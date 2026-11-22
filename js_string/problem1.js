//Count how many times a string has the letter a

let str = 'hello miss Ana';

let cnt = 0;

for(let c of str){
    if(c == 'a'){
        cnt++;
    }
}

console.log(cnt);