//everything comes under the ES6 features in javascript(js) and program-12 with Inheritance
class Employee{
    empId;
    firstName;
    lastName;
    emailId;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
 class PerminentEmployee extends Employee{
     anualSalary;
 }

 class NonPerminetEmployee extends Employee{
     hoursSalary;
 }

 let perminent = new PerminentEmployee();
 perminent.firstName = 'Mark';
 perminent.lastName = 'Waston';


 let noper = new NonPerminetEmployee();
 noper.firstName = 'Mark';
 noper.lastName = 'Waston';

 perminent.getFullName();
 noper.getFullName();

// given by trainner
//  class Employee{
//     empId;
//     firstName;
//     lastName;
//     email;
    

//     getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// class FullTimeEmployee extends Employee{
//     annualSalary;
// }

// class PartTimeEmployee extends Employee{
//     hourSalary;
// }


// let fte = new FullTimeEmployee();
// fte.firstName = 'mark'
// fte.lastName = 'smith'

// let pte = new PartTimeEmployee()
// pte.firstName = 'paul'
// pte.lastName = 'watson'

// fte.getFullName()
// pte.getFullName()