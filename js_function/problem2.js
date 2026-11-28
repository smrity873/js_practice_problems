//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function numType(num){
    if(num % 2 != 0){
        num *= 2;
    }
    else{
        num /= 2;
    }

    return num;
}

let num = numType(45);
console.log(num);
