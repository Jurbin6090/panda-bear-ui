import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";
import {ObservableInput} from "rxjs/Observable";

@Injectable()
export class EmployeeComponentService {
  deployments
  employees

  constructor(private http:Http) {
    this.deployments = {}
    this.deployments.current = []
    this.deployments.previous = []
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getEmployees():Promise<Response> {
    return this.http.get("http://localhost:8080/employee").toPromise()
  }

  getDeployments(deploymentId):any {
    this.deployments = {
      "current":[
        {
          "clientName": "Cooksys.com",
          "deploymentId": "11"
        },
        {
          "clientName": "PCF Rewrite",
          "deploymentId": "23"
        }
        ],
      "previous": [
        {
          "clientName": "Cooksys.com",
          "deploymentId": "14"
        },
        {
          "clientName": "PCF Rewrite",
          "deploymentId": "42"
        },
        {
          "clientName": "Fedex",
          "deploymentId": "33"
        },
        {
          "clientName": "University of Memphis",
          "deploymentId": "41"
        },
        {
          "clientName": "ServiceMaster",
          "deploymentId": "15"
        }
        ]
    }

    return Promise.resolve(this.deployments)
    // return this.http.get("http://localhost:8080/deployment/employee/" + deploymentId).toPromise()
  }
}
