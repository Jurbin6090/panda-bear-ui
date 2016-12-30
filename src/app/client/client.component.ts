import { Component, OnInit } from '@angular/core';
import {ClientComponentService} from "./service.component.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientComponentService]
})
export class ClientComponent implements OnInit {
  clients

  constructor(private clientComponentService:ClientComponentService) {
    this.clients = [{"address":{}}]
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientComponentService.getClients().then(clients => {
      this.clients = clients
    })
  }
}
