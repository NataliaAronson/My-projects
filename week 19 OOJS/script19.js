// Salary of a construction worker in Croatia in kunas

class Employee {
  constructor( name, surname, rate, days) {
    this.name = name;
    this.surname= surname;
    this.rate = rate;
    this.days = days;
  }

  get salary() {
    return this.calcSalary();
  }

  calcSalary() {
    return this.rate * this.days;
  }
}

const payRoll = new Employee ('Ivan', 'Bulic', 350, 20);

console.log (payRoll.name +" "+ payRoll.surname +" "+ payRoll.salary); 

