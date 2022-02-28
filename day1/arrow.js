//everything comes under the ES6 features in javascript(js) and program-10 with arrow function similar lambda expression
//old syntax 
function welcome(name){
    let welcome = "Welcome " + name;
    console.log(welcome)
}
welcome('Mark');
//new array style (function with new style)
let welcome = (name) => 'Welcome'+ name;
console.log(welcome('Paul'))
    
let sum = (a,b) => a + b;
console.log(sum(10,20));

let Hi = name => 'Hi'+ name;
let foo = () => '';
