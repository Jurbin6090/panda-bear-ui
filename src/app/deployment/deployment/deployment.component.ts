import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeploymentComponentService} from "../deployment.component.service";
import {SelectItem} from "primeng/primeng";
import {ClientComponentService} from "../../client/client.component.service";
import {ProjectComponentService} from "../../project/project.component.service";

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  providers: [DeploymentComponentService]
})
export class DeploymentComponent implements OnInit {
  full
  clients:SelectItem[]
  projects:SelectItem[]
  cycles:SelectItem[]
  isBillable:boolean = false

  constructor(private activatedRoute:ActivatedRoute, private deploymentComponentService:DeploymentComponentService,
              private clientComponentService:ClientComponentService,
              private projectComponentService:ProjectComponentService) {
    this.cycles = [{label: "NET30", value: 0}, {label: "NET45", value: 1}]

    this.clientComponentService.getClients().then(results => {
      this.clients = []

      results.json().forEach(client => {
        this.clients.push({label: client.name, value: client.id})
      })
    })

    this.full = {
      "deployment": {
        "dates": {},
        "contact": {
          "address": {},
        },
        "billing": {}
      },
      "client": {
        "address": {}
      },
      "project": {},
      "employee": {}
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getDeployment(params['deploymentId'])
    })
  }

  setProjectSelected() {
    this.projectComponentService.getProjectsByClient(this.full.client.id).then(results => {
      this.projects = []

      this.projects.push({label: "Select a Project", value: ""})

      results.json().forEach(project => {
        this.projects.push({label: project.name, value: project.id})
      })
    })
  }

  getDeployment(deploymentId) {
    this.deploymentComponentService.getDeployment(deploymentId).then(results => {
      this.full = results.json()

      if (this.full.deployment.dates.startDate)
        this.full.deployment.dates.startDate = new Date(this.full.deployment.dates.startDate)

      if (this.full.deployment.dates.projectedEndDate)
        this.full.deployment.dates.projectedEndDate = new Date(this.full.deployment.dates.projectedEndDate)

      if (this.full.deployment.dates.endDate)
        this.full.deployment.dates.endDate = new Date(this.full.deployment.dates.endDate)

      if (this.full.deployment.billing) {
        this.isBillable = true
      }
    }).then(()=>
      this.projectComponentService.getProjectsByClient(this.full.client.id).then(results => {
        this.projects = []

        results.json().forEach(project => {
          this.projects.push({label: project.name, value: project.id})
        })
      })
    )
  }

  updateDeployment() {
    if (!this.isBillable) {
      this.full.deployment.billing = null
    }

    this.deploymentComponentService.updateDeployment(this.full.deployment).then(()=> alert("Deployment Updated"))
  }
}
