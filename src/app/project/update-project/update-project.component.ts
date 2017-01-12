import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SelectItem} from "primeng/primeng";
import {ProjectComponentService} from "../project.component.service";
import {ClientComponentService} from "../../client/client.component.service";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  providers: [ProjectComponentService]
})
export class UpdateProjectComponent implements OnInit {
  project
  projectId
  clients:SelectItem[]

  constructor(private activatedRoute:ActivatedRoute, private projectComponentService:ProjectComponentService,
              private clientComponentService:ClientComponentService) {
    this.project = {"address": {}, "manager": {}}

    this.clientComponentService.getClients().then(results => {
      this.clients = []
      this.clients.push({label: "Select a client", value: ""})

      results.json().forEach(client => {
        this.clients.push({label: client.name, value: client.id})
      })
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.projectId = params['projectId']
    })

    this.getProject()
  }

  getProject() {
    this.projectComponentService.getProject(this.projectId).then(results => {
      let project = results.json()
      this.project = project
    })
  }

  updateProject() {
    this.projectComponentService.updateProject(this.project).then(()=> alert("Project Updated"))
  }

}
