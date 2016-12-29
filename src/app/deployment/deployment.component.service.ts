import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class DeploymentComponentService {
  deployment

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getDeployment(deploymentId):any {
    this.deployment = {
      "id": 1,
      "employeeId": 57,
      "clientId": 1,
      "startDate": "2015-12-01",
      "projectedEndDate": "2016-12-01",
      "actualEndDate": "2016-07-09",
      "billingRate": 15,
      "billingCycle": "Biweekly",
      "address": {
        "street1": "12345 Test Road",
        "street2": "Suite #2",
        "city": "Memphis",
        "state": "TN",
        "zip": "38120",
        "country": "US"
      },
      "billable": true,
      "taxable": true,
      "mgmtSvcSurcharge": 0,
      "recruiter": 34
    }

    return Promise.resolve(this.deployment)
    // return this.http.get("http://localhost:8080/deployment/" + deploymentId).toPromise()
  }
}
