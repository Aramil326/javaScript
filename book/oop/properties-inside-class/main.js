class Employee {
  name;
  salary;

  console() {
    console.log(this.name + ' ' + this.salary)
  }
}

let employee = new Employee

employee.name = 'John'
employee.salary = 350

employee.console()