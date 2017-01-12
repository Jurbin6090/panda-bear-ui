import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class LoginComponentService implements CanActivate {
  loggedIn:boolean

  constructor(private router:Router) {
    this.loggedIn = false
  }

  canActivate() {
    if (!this.loggedIn) {
      this.router.navigate(['login']);
      return false
    }
    return true
  }

  login(login):any {
    if (login.email === "" && login.password === ""){
      this.loggedIn = true
      this.router.navigate(['']);
      return true
    }
    else{
      this.loggedIn = false
      return false
    }
  }
}
