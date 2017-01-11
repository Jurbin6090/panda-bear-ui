import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ClientComponentService {
  clients

  constructor(private http:Http) {
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getClients():any {
    return this.http.get("http://localhost:8085/client/").toPromise()
  }

  getClient(clientId) {
    return this.http.get("http://localhost:8085/client/" + clientId).toPromise()
  }

  createClient(client){
    return this.http.post("http://localhost:8085/client",client).toPromise()
  }

  updateClient(client) {
    return this.http.patch("http://localhost:8085/client", client).toPromise()
  }
}
