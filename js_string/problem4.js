//If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str ="explore";
let newStr = "";
for( let s of str){
    if(s == 'x'){
        s = s.replace('x','y');
    }
    newStr += s;
}

console.log(newStr)