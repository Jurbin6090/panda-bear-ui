import {Component, OnInit} from '@angular/core';
import {HomeComponentService} from './home.component.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [HomeComponentService]
})
export class HomeComponent implements OnInit {
  employees
  newEmployee:boolean
  displayDialog:boolean
  employee

  constructor(private homeComponentService:HomeComponentService) {
  }

  ngOnInit() {
    this.homeComponentService.getEmployees().then(results => {
      let response = results.json()
      this.employees = response
    })
  }

  showDialogToAdd() {
    this.employee = {}
    this.newEmployee = true;
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newEmployee = false;
    this.employee = this.cloneEmployee(event.data);
    this.displayDialog = true;
  }

  cloneEmployee(selectedEmp: any): any {
    let employee = {};
    for (let prop in selectedEmp) {
      employee[prop] = selectedEmp[prop];
    }
    return employee;
  }


  save() {
    if (this.newEmployee)
      this.employees.push(this.employee);
    else
      this.employees[this.findSelectedEmployeeIndex()] = this.employee;

    this.employee = null;
    this.displayDialog = false;
    alert("Bamboo Update Not Implemented")
  }

  delete() {
    this.employees.splice(this.findSelectedEmployeeIndex(), 1);
    this.employee = null;
    this.displayDialog = false;

    alert("Bamboo Update Not Implemented")
  }


  findSelectedEmployeeIndex(): number {
    return this.employees.indexOf(this.selectedEmployee);
  }
}
