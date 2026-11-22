//Check whether a string contains all the vowels a, e, i, o, u

let str = 'hello ena, i am runi';

let newStr = str.toLowerCase();

let a = false, e = false, i = false, o = false, u = false;

for( let c of newStr){
    if( c == 'a'){
        a = true;
    }
    else if( c == 'e'){
        e = true;
    }
    else if( c == 'i'){
        i = true;
    }
    else if( c == 'o'){
        o = true;
    }
    else if( c == 'u'){
        u = true;
    }
}

if( a==true && e==true && i==true && o==true && u==true){
    console.log('All Vowel are available');
}
else{
    console.log("All Vowel arn't available");
}