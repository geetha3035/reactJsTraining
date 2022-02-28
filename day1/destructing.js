//everything comes under the ES6 features in javascript(js) and program-7&8 with destructing second example

const employee = {
    empId: 1,
    firstName: 'Ram',
    lastName: 'sri',
    email: 'r@gamil.com'
}
let empId = employee.empId;
let firstName = employee.firstName;
let lastName = employee.lastName;
let email = employee.email;

console.log(firstName);

let { empId, firstName, lastName, email} = employee;
console.log(firstName);


function getScores(){
    return [10, 20 ,30]
}

let { x, y, z } = getScores;
console.log(x);
//for .of
let scores = [80, 90,20];

for(let score of scores){
    console.log(score);
}

