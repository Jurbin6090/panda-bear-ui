import {Component} from "@angular/core";
import {LoginComponentService} from "../login.component.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {
  loginInfo

  constructor(private loginComponentService:LoginComponentService) {
    this.loginInfo = {}
  }

  login(){
    if(!this.loginComponentService.login(this.loginInfo))
      alert("Login Failed.  Please try again.")
  }
}
