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
    return this.http.get("http://localhost:8088/deployment/full/" + deploymentId).toPromise()
  }

  getClients():Promise<Response> {
    return this.http.get("http://localhost:8085/client/").toPromise()
  }

  getProjects(id):Promise<Response> {
    return this.http.get("http://localhost:8085/project/findByClient/" + id).toPromise()
  }

  updateDeployment(deployment):Promise<Response> {
    return this.http.patch("http://localhost:8088/deployment/" + deployment.id, deployment).toPromise()
  }
}
