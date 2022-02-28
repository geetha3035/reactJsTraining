//it's comes under the ES6 features in javascript(js) and program-12 with class
 
class Person{
    // firstName;
    // lastName;

    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let person = new Person();
person.firstName = 'Mark';
person.lastName = 'Waston';
person.getFullName();
let person = new Person('Paul', 'Waston');
person.getFullName();

