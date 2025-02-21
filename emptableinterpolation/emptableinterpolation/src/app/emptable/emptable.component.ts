


import { Component } from '@angular/core';

interface Employee {
  empid: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css'],
  standalone: false
})
export class EmptableComponent {
  employees: Employee[] = [
    { empid: 1, name: 'Parvathy', age: 21 },
    { empid: 2, name: 'Nikhil', age: 21 },
    { empid: 3, name: 'Anakha', age: 30 }
  ];

  concatenatedNames: string = '';
  totalAge: number = 0;
  youngestEmployee: any= null;
  showProcessedData: boolean = false;
  showYoungestEmployee: boolean = false;

  processEmployeeData() {
    this.concatenatedNames = '';
    this.totalAge = 0;

    this.employees.forEach((employee, index) => {
      this.concatenatedNames += index === this.employees.length - 1 
        ? employee.name 
        : employee.name + ', ';
      
      this.totalAge += employee.age;
    });
    this.showProcessedData = true;
    this.showYoungestEmployee = false;
  }

  findYoungestEmployee() {
    const minAge = Math.min(...this.employees.map(emp => emp.age));
    this.youngestEmployee = this.employees.filter(emp => emp.age === minAge);
    this.showYoungestEmployee = true;
    this.showProcessedData = false;
  }
}
