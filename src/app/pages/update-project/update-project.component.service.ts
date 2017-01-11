import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UpdateProjectComponentService {

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getProject(projectId) {
    return this.http.get("http://localhost:8085/project/" + projectId).toPromise()
  }

  updateProject(project) {
    return this.http.patch("http://localhost:8085/project", project).toPromise()
  }

  getClients():Promise<Response> {
    return this.http.get("http://localhost:8085/client/").toPromise()
  }
}
