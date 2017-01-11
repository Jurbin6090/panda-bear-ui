import { Component, OnInit } from '@angular/core';
import {ClientComponentService} from "../../services/client.component.service";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html'
})
export class CreateClientComponent implements OnInit {
  client

  constructor(private clientComponentService: ClientComponentService) {
    this.client = {"address":{}, "billing":{"contact":{},"partner":{}}}
  }

  ngOnInit() {
  }

  createClient(){
    this.clientComponentService.createClient(this.client).then(result => {
      alert("Client Created")
    })
  }
}
