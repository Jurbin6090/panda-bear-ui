import {Component, OnInit} from '@angular/core';
import {ClientComponentService} from "./client.component.service";

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
    })
  }
}
