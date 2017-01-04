import {Component, OnInit} from '@angular/core';
import {ClientComponentService} from "./service.component.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  providers: [ClientComponentService]
})
export class ClientComponent implements OnInit {
  clients

  constructor(private clientComponentService:ClientComponentService) {
    this.clients = [
      {
        "address": {},
        "billing": {
          "partner": {},
          "contact": {}
        }
      }
    ]
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientComponentService.getClients().then(clients => {
      this.clients = clients.json().sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    }).then(clients => {
      this.clients.forEach(client => client.billing =
      {
        "partner": {
          "name": "Test Partner",
          "percentage": "20"
        },
        "contact": {
          "name": "Brian Goetz",
          "phone": "(212)-640-2000",
          "email": "bgotez@aexp.com"
        },
        "cycle":"NET 45",
        "paymentTerms":"Test",
        "agencyFee":"Test"
      })
    })
  }
}
