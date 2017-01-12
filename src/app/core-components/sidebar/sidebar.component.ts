import {Component} from '@angular/core';
import {LoginComponentService} from "../../login/login.component.service";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(private loginComponentService:LoginComponentService){}

  isLoggedIn(){
    return this.loginComponentService.loggedIn
  }
}
