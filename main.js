let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    // console.log ( 'i is ' + i);
    for (let vowel = 0; vowel < vowels.length; vowel++) {
    // console.log('j is ' + j);
    if (input[inputIndex] === vowels[vowel]) {
    if (input[inputIndex] === 'e') {
       resultArray.push('ee');
     }  
     else if (input[inputIndex] === 'u'){
                resultArray.push('uu');
            }       
    else {
        resultArray.push(input[inputIndex]);
    }
    }
}
}

console.log(resultArray.join('').toUpperCase()); 