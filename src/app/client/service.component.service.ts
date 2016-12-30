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
    // this.clients = [
    //   {
    //     "id": 1,
    //     "name": "Fedex",
    //     "address": {
    //       "street1": "12345 Test Road",
    //       "street2": "Suite #2",
    //       "city": "Memphis",
    //       "state": "TN",
    //       "zip": "38120",
    //       "country": "US"
    //     }
    //   },
    //   {
    //     "id": 2,
    //     "name": "Amex/GBT",
    //     "address": {
    //       "street1": "12345 Test Road",
    //       "street2": "Suite #2",
    //       "city": "Memphis",
    //       "state": "TN",
    //       "zip": "38120",
    //       "country": "US"
    //     }
    //   }
    // ]
    //
    // return Promise.resolve(this.clients)
    return this.http.get("http://localhost:8085/client/").toPromise()
  }
}
