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
      "id": "586e61f27962db2b5810684a",
      "employeeId": 1,
      "clientId": "586e64d87962db2914736464",
      "projectId": "123413",
      "dates": {
        "startDate": "2015-12-01",
        "endDate": "2016-07-09",
        "projectedEndDate": "2016-12-01"
      },
      "address": {
        "street1": "12345 Test Road",
        "street2": "Suite #2",
        "city": "Memphis",
        "state": "TN",
        "zip": "38120",
        "country": "US"
      },
      "manager": {
        "name": "Dave Pearson",
        "email": "dave@company.com",
        "phone": "555-555-5555"
      },
      "billing": {
        "rate": 20,
        "cycle": "Biweekly",
        "taxable": true,
        "mgmtSvcSurcharge": 0
      }
    }

    return Promise.resolve(this.deployment)
    // return this.http.get("http://localhost:8080/deployment/" + deploymentId).toPromise()
  }
}
