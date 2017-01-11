import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CreateDeploymentComponentService} from "./create-deployment.component.service";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-create-deployment',
  templateUrl: './create-deployment.component.html',
  providers: [CreateDeploymentComponentService]
})
export class CreateDeploymentComponent implements OnInit {
  deployment
  clients:SelectItem[]
  projects:SelectItem[]
  booleans:SelectItem[]
  cycles:SelectItem[]
  isBillable:boolean = false
  isClientSelected:boolean = false
  isProjectSelected:boolean = false


  constructor(private activatedRoute:ActivatedRoute, private createDeploymentComponentService:CreateDeploymentComponentService) {
    this.deployment = {"dates": {}, "billing": {}, "contact": {"address": {}}}
  }

  ngOnInit() {
    this.booleans = [{label: "False", value: 0}, {label: "True", value: 1}]
    this.cycles = [{label: "NET30", value: 0}, {label: "NET45", value: 1}]
    this.projects = [{label: "Select a client", value: ""}]

    this.createDeploymentComponentService.getClients().then(results => {
      this.clients = []
      this.clients.push({label: "Select a client", value: ""})

      results.json().forEach(client => {
        this.clients.push({label: client.name, value: client.id})
      })
    })

    this.activatedRoute.params.subscribe(params => {
      this.deployment.employeeId = params['employeeId']
    })
  }

  setClientSelected() {
    this.isProjectSelected = false

    if (this.clients[0].value === "") {
      this.clients.splice(0, 1)
    }

    this.createDeploymentComponentService.getProjects(this.deployment.clientId).then(results => {
      this.projects = []

      this.projects.push({label: "Select a project", value: ""})

      console.log('Results: ')
      console.dir(results.json())

      results.json().forEach(project => {
        this.projects.push({label: project.name, value: project.id})
      })
    })

    this.isClientSelected = true
  }

  setProjectSelected() {
    if (this.deployment.projectId !== "") {
      if (this.projects[0].value === "") {
        this.projects.splice(0, 1)
      }
      this.isProjectSelected = true
    }
  }

  createDeployment() {
    let deployment = Object.assign({}, this.deployment)

    if (!this.isBillable) {
      deployment.billing = null
    }

    this.createDeploymentComponentService.createDeployment(deployment).then(result => {
        console.dir(result.json())
        alert("Employee Created")
      }
    )

  }
}
