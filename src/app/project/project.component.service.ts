import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ProjectComponentService {

  constructor(private http:Http) {

  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getProjects():Promise<Response> {
    return this.http.get("http://localhost:8085/project").toPromise()
  }

  getProjectsByClient(id):Promise<Response> {
    return this.http.get("http://localhost:8085/project/findByClient/" + id).toPromise()
  }

  createProject(project):Promise<Response> {
    return this.http.post("http://localhost:8085/project", project).toPromise()
  }

  updateProject(project):Promise<Response> {
    return this.http.patch("http://localhost:8085/project", project).toPromise()
  }

  getProject(projectId):Promise<Response> {
    return this.http.get("http://localhost:8085/project/" + projectId).toPromise()
  }
}
