class EmployeeDetails {
    constructor(data) {
        this.name = data.name;
        this.gender = data.gender;
        this.dept = data.dept;
        this.age = data.age;
        this.salary = data.salary;
  }
  displayEmployeeDetails(){
    console.log(`Employee name is ${this.name}`);
    console.log(`Employee Gender is ${this.gender}`);
    console.log(`Employee Department is ${this.dept}`);
    console.log(`Employee Age is ${this.age}`);
    console.log(`Employee Salaey is ${this.salary}`);
    this.getTotalSalary();
 }
 getTotalSalary(){
    this.total = 0;
    for (var i = 0; i < this.salary.length; i++) {
        this.total += this.salary[i];
    }
    this.total  += 10;
}
}
emp1 = {name:"Vedant", gender:"male",dept:"IT", age:30, salary:32000}
var e1 = new EmployeeDetails(emp1);
// e1.displayEmployeeDetails();
console.log(e1);

emp2 = {name:"Shukrant", gender:"male",dept:"IT", age:32, salary:100000}
var e2 = new EmployeeDetails(emp2);
// e2.displayEmployeeDetails();
console.log(e2);

emp3 = {name:"Bhagyesh", gender:"male",dept:"IT", age:29, salary:200000}
var e3 = new EmployeeDetails(emp3);
// e3.displayEmployeeDetails();
console.log(e3);

emp4 = {name:"Kshama", gender:"female",dept:"Farma", age:31, salary:50000}
var e4 = new EmployeeDetails(emp4);
// e4.displayEmployeeDetails();
console.log(e4);
