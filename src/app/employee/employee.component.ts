import {Component, OnInit, Optional} from '@angular/core';
import {EmployeeComponentService} from './employee.component.service';
import 'rxjs/add/operator/map'
import {RouterLink} from "@angular/router";

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  providers: [EmployeeComponentService]
})
export class EmployeeComponent implements OnInit {
  employees
  newEmployee:boolean
  displayDialog:boolean
  employee
  selectedEmployee
  display:boolean

  constructor(private employeeComponentService:EmployeeComponentService) {
  }

  ngOnInit() {
    this.selectedEmployee ={}
    this.selectedEmployee.deployments = {}
    this.display = false

    this.employeeComponentService.getEmployees().then(results => {
      let response = results.json()

      this.employees = response
    })
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

  showDialog(employee) {
    this.selectedEmployee = employee
    this.getDeployments()
    this.display = true;
  }

  getDeployments(){
    this.employeeComponentService.getDeployments(this.selectedEmployee.id).then(deployments => {
      this.selectedEmployee.deployments = deployments
    })
  }
}
