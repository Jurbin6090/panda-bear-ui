import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";
import {ObservableInput} from "rxjs/Observable";

@Injectable()
export class HomeComponentService {

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getEmployees():Promise<Response> {
    return this.http.get("http://localhost:8080/employee").toPromise()
  }
}
