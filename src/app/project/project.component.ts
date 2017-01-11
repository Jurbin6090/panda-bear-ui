import {Component, OnInit} from '@angular/core';
import {ProjectComponentService} from "./project.component.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  projects

  constructor(private projectComponentService:ProjectComponentService) {
  }

  ngOnInit() {
    this.projectComponentService.getProjects().then(results => this.projects = results.json())
  }
}
