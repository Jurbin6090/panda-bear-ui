import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class DeploymentComponentService {

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getDeployment(deploymentId):Promise<Response> {
    return this.http.get("/api/deployment/full/" + deploymentId).toPromise()
  }

  createDeployment(deployment):Promise<Response> {
    return this.http.post("/api/deployment", deployment).toPromise()
  }

  updateDeployment(deployment):Promise<Response> {
    return this.http.patch("/api/deployment/" + deployment.id, deployment).toPromise()
  }

  getDeploymentsSummary(employeeId):Promise<Response> {
    return this.http.get("/api/deployment/employee/" + employeeId).toPromise()
  }
}
