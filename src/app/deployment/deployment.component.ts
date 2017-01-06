import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeploymentComponentService} from "./deployment.component.service";

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  providers: [DeploymentComponentService]
})
export class DeploymentComponent implements OnInit {
  deployment

  constructor(private activatedRoute:ActivatedRoute, private deploymentComponentService:DeploymentComponentService) {
    this.deployment = {"address": {}, "dates": {}, "billing": {}}
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getDeployment(params['deploymentId'])
    })
  }

  getDeployment(deploymentId) {
    this.deploymentComponentService.getDeployment(deploymentId).then(deployment => {
      this.deployment = deployment
    })
  }
}
