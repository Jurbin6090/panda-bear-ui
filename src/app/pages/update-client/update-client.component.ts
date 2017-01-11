import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ClientComponentService} from "../../services/client.component.service";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html'
})
export class UpdateClientComponent implements OnInit {
  client
  clientId

  constructor(private activatedRoute:ActivatedRoute, private clientComponentService:ClientComponentService) {
    this.client = {"address": {}, "billing": {"contact": {}, "partner": {}}}
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.clientId = params['clientId']
    })

    this.getClient()
  }

  getClient() {
    this.clientComponentService.getClient(this.clientId).then(results => {
      let client = results.json()
      this.client = client
    })
  }

  updateClient() {
    this.clientComponentService.updateClient(this.client).then(()=> alert("Client Updated"))
  }
}
