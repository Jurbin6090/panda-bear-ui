import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UpdateProjectComponentService} from "./update-project.component.service";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  providers: [UpdateProjectComponentService]
})
export class UpdateProjectComponent implements OnInit {
  project
  projectId
  clients:SelectItem[]

  constructor(private activatedRoute:ActivatedRoute, private updateProjectComponentService:UpdateProjectComponentService) {
    this.project = {"address": {}, "manager": {}}

    this.updateProjectComponentService.getClients().then(results => {
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
    this.updateProjectComponentService.getProject(this.projectId).then(results => {
      let project = results.json()
      this.project = project
    })
  }

  updateProject() {
    this.updateProjectComponentService.updateProject(this.project).then(()=> alert("Project Updated"))
  }

}
