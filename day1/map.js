//everything comes under the ES6 features in javascript(js) and program-11 with map
const numbers = [24,68,87,52];
const newArray = numbers.map(e => e* 10);

console.log(numbers);
console.log(newArray);

const names = ['Mark', 'Pual', 'Waston', "jhon"];
const prefixNames = names.map(n => 'Mr.'+n);
console.log(names);
console.log(prefixNames);
