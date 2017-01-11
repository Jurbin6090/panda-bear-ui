import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UpdateClientComponentService} from "./update-project.component.service";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  providers: [UpdateClientComponentService]
})
export class UpdateClientComponent implements OnInit {
  client
  clientId

  constructor(private activatedRoute:ActivatedRoute, private updateClientComponentService:UpdateClientComponentService) {
    this.client = {"address": {}, "billing": {"contact": {}, "partner": {}}}
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.clientId = params['clientId']
    })

    this.getClient()
  }

  getClient() {
    this.updateClientComponentService.getClient(this.clientId).then(results => {
      let client = results.json()
      this.client = client
    })
  }

  updateClient() {
    this.updateClientComponentService.updateClient(this.client).then(()=> alert("Client Updated"))
  }
}
