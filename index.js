const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class Employees {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }
  idBadge() {
    console.log(this.position, this.name);
  }
}

class Manager extends Employees {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
    this.bonusPercentage = bonusPercentage;
    super(Employees);
  }
  salaryIncrease(increaseAmount) {
    increaseAmount = salary.managersJSON;
  }
  getWorkingYears(total) {
    total = this.yearJoined - 2023;
  }
  empNames(name) {
    name.Employees.forEach((eName) => (eName = idBadge()));
  }
}
bonusPercentage = new Manager(bonusPercentage.Manager());
// const = new Manger( )
