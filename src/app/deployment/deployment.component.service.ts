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

  getDeployment(deploymentId):Promise<Response> {
    return this.http.get("http://localhost:8088/deployment/" + deploymentId).toPromise()
  }
}
