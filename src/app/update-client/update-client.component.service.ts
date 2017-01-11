import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UpdateClientComponentService {

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getClient(clientId) {
    return this.http.get("http://localhost:8085/client/" + clientId).toPromise()
  }

  updateClient(client) {
    return this.http.patch("http://localhost:8085/client", client).toPromise()
  }
}
