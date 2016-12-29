import {Component, OnInit, Optional} from '@angular/core';
import {HomeComponentService} from './home.component.service';
import 'rxjs/add/operator/map'
import {SelectItem,DialogModule} from "primeng/primeng";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [HomeComponentService]
})
export class HomeComponent implements OnInit {
  employees
  newEmployee:boolean
  displayDialog:boolean
  dialogVisible
  employee
  selectedEmployee
  genders: SelectItem[]
  locations: SelectItem[]
  display:boolean

  constructor(private homeComponentService:HomeComponentService) {
  }

  ngOnInit() {
    this.selectedEmployee = {}
    this.selectedEmployee.contracts = {}
    this.selectedEmployee.contracts.currectContracts = []
    this.selectedEmployee.contracts.previousContracts = []
    this.display = false
    this.genders = []
    this.genders.push({label: '',value: ''})
    this.genders.push({label: 'Male',value: 'Male'})
    this.genders.push({label: 'Female',value: 'Female'})

    this.locations = []
    this.locations.push({label: '',value: ''})
    this.locations.push({label: 'WUW',value: 'WUW'})
    this.locations.push({label: 'RH5',value: 'RH5'})
    this.locations.push({label: 'QWN',value: 'QWN'})
    this.homeComponentService.getEmployees().then(results => {
      let response = results.json()
      this.employees = response
      console.dir(this.employees)
    })
  }

  getCurrentContract(employee){
    this.selectedEmployee = employee
    this.selectedEmployee.contracts = {}
    this.selectedEmployee.contracts.currentContracts = []
    this.selectedEmployee.contracts.previousContracts = []
    this.selectedEmployee.contracts.currentContracts.push({"clientName": "Cooksys.com","id": "1"})
    this.selectedEmployee.contracts.currentContracts.push({"clientName": "PCF Rewrite","id": "2"})
    this.selectedEmployee.contracts.previousContracts.push({"clientName": "Fedex","id": "3"})
    this.selectedEmployee.contracts.previousContracts.push({"clientName": "University of Memphis","id": "4"})
    this.selectedEmployee.contracts.previousContracts.push({"clientName": "ServiceMaster","id": "5"})
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

  showEmployee(employee) {
    console.log(employee)
    this.selectedEmployee = employee;
    this.dialogVisible = true;
  }

  showDialog(employee) {
    this.getCurrentContract(employee)
    this.selectedEmployee = employee
    this.display = true;
  }
}
