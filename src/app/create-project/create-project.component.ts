import {Component, OnInit} from '@angular/core';
import {CreateProjectComponentService} from "./create-project.component.service";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  providers: [CreateProjectComponentService]
})
export class CreateProjectComponent implements OnInit {
  project
  clients:SelectItem[]
  isClientSelected:boolean = false

  constructor(private createProjectComponentService:CreateProjectComponentService) {
    this.project = {"address": {}, "manager": {}}
  }

  ngOnInit() {
    this.createProjectComponentService.getClients().then(results => {
      this.clients = []
      this.clients.push({label: "Select a client", value: ""})

      results.json().forEach(client => {
        this.clients.push({label: client.name, value: client.id})
      })
    })
  }

  setClientSelected() {
    this.isClientSelected = true

    if (this.clients[0].value === "") {
      this.clients.splice(0, 1)
    }
  }

  createClient() {
    this.createProjectComponentService.createProject(this.project).then(result => {
      console.dir(result.json())
      alert("Project Created")
    })
  }
}
