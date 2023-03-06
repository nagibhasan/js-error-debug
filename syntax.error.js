function isbigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false;
    }
}

// } syntax error

// const result = isbigger(11;) syntax error

const result = isbigger(11);
// console.log(result);

// const sum = a, b => a+b; syntax error
const sum = (a, b) => a+b;
const res = sum(3, 5);


const mask = {
    name: 'elon',
    // age: 53 syntax error
    age: 53,
    job: 'tesla'
}

console.log(musk.age);

// const numbers = [12, 13, 21, 34 4, 4] syntax error
const numbers = [12, 13, 21, 34, 4, 4]

// for(let i = 0; i< 10 i++){    
// } syntax error

for(let i = 0; i< 10; i++){
//     const n = numbers[i; syntax error
}

for(let i = 0; i< 10; i++){
    const n = [i];
}

console.log(numbers);

// if (numbers.length > 5) && (numbers[0] === 5){
        // syntax error
// }

if (numbers.length > 5 && numbers[0] === 5){

}
