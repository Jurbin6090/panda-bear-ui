import { Component, OnInit } from '@angular/core';
import {CreateClientComponentService} from "./create-client.component.service";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  providers: [CreateClientComponentService]
})
export class CreateClientComponent implements OnInit {
  client

  constructor(private createClientComponentService: CreateClientComponentService) {
    this.client = {"address":{}, "billing":{"contact":{},"partner":{}}}
  }

  ngOnInit() {
  }

  createClient(){
    this.createClientComponentService.createClient(this.client).then(result => {
      console.dir(result.json())
      alert("Client Created")
    })
  }
}
