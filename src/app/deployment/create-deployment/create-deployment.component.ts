import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SelectItem} from "primeng/primeng";
import {DeploymentComponentService} from "../deployment.component.service";
import {ClientComponentService} from "../../client/client.component.service";
import {ProjectComponentService} from "../../project/project.component.service";

@Component({
  selector: 'app-create-deployment',
  templateUrl: './create-deployment.component.html',
  providers: [DeploymentComponentService]
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


  constructor(private activatedRoute:ActivatedRoute, private deploymentComponentService:DeploymentComponentService,
              private clientComponentService:ClientComponentService,
              private projectComponentService:ProjectComponentService) {
    this.deployment = {"dates": {}, "billing": {}, "contact": {"address": {}}}
  }

  ngOnInit() {
    this.booleans = [{label: "False", value: 0}, {label: "True", value: 1}]
    this.cycles = [{label: "NET30", value: 0}, {label: "NET45", value: 1}]
    this.projects = [{label: "Select a client", value: ""}]

    this.clientComponentService.getClients().then(results => {
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

    this.projectComponentService.getProjectsByClient(this.deployment.clientId).then(results => {
      this.projects = []

      this.projects.push({label: "Select a project", value: ""})

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
    console.log("createDeployment method called")

    let deployment = Object.assign({}, this.deployment)

    if (!this.isBillable) {
      deployment.billing = null
    } else if (!deployment.billing.cycle) {
      deployment.billing.cycle = this.cycles[0].value
    }

    this.deploymentComponentService.createDeployment(deployment).then(result => {
        alert("Deployment Created")
      }
    )

  }
}
