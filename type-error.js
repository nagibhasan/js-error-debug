const numbs = 5;
// numbs.push(45);

// type error numbs.push is not a function

// let address ; 

// console.log(address.home); 
// type error (Cannot read properties of undefined (reading 'home'))
let address = { city: 'dhaka', postCode: 1214};
// console.log(address.home.building); type error (console.log(address.home.building);)

console.log(address?.home?.building);

const a = 'abul';
a = 'babul';
// TypeError: Assignment to constant variable