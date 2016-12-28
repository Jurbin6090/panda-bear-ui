import {Component} from '@angular/core';
import {HomeComponentService} from './home.component.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [HomeComponentService]
})
export class HomeComponent {
  employees

  constructor(private homeComponentService:HomeComponentService) {
    this.employees = homeComponentService.getEmployees().map(results => {
      let response = results.json()
      return response
    })
  }
}
