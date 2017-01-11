import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";
import {ObservableInput} from "rxjs/Observable";

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

  createProject(project) {
    return this.http.post("http://localhost:8085/project", project).toPromise()
  }

  updateProject(project) {
    return this.http.patch("http://localhost:8085/project", project).toPromise()
  }

  getProject(projectId) {
    return this.http.get("http://localhost:8085/project/" + projectId).toPromise()
  }
}
