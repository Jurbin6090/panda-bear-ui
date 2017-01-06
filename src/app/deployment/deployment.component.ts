import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeploymentComponentService} from "./deployment.component.service";

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  providers: [DeploymentComponentService]
})
export class DeploymentComponent implements OnInit {
  full

  constructor(private activatedRoute:ActivatedRoute, private deploymentComponentService:DeploymentComponentService) {
    this.full = {
      "client": {
        "address": {}
      },
      "deployment": {
        "address": {},
        "dates": {},
        "billing": {}
      },
      "employee": {},
      "project": {}
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getDeployment(params['deploymentId'])
    })
  }

  getDeployment(deploymentId) {
    this.deploymentComponentService.getDeployment(deploymentId).then(results => {
      this.full = results.json()
    })
  }
}
