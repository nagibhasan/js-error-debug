const x = 'pori'
const y = 'moni'
// console.log(z);
// ReferenceError: z is not defined

// console.log(name);
// const name = ('salman khan');
// let name = ('salman khan');
// var name = ('salman khan');
// ReferenceError: Cannot access 'name' before initialization but if you call with var it will show undefined

// console.log(add2(2,3));

function add(n1, n2) {
    return n1 + n2
}

const add2 = (n1, n2) => n1 + n2;
// ReferenceError: Cannot access 'add2' before initialization

function doSomething () {
    const sum = 55;
}

console.log(sum);
// ReferenceError: sum is not defined