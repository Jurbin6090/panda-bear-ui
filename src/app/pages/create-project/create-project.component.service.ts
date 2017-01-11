import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CreateProjectComponentService {

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getClients():Promise<Response> {
    return this.http.get("http://localhost:8085/client/").toPromise()
  }

  createProject(project){
    return this.http.post("http://localhost:8085/project",project).toPromise()
  }
}
