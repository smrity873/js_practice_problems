/* 
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person'
let store = statement.split(' ');
let new_str = [];
for(let i = store.length-1; i>=0; i--){
    
    new_str.push(store[i]);
        
}

console.log(new_str.join(' '));


