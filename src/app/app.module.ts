import {NgModule}      from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

// Root Component
import {AppComponent} from './app.component';

// Local Components
import {HeaderComponent, SidebarComponent} from './core-components/core-components';
import {HttpModule} from '@angular/http';

// Imported Modules
import {HomeModule} from './home/home.module';
import {FormsModule}   from '@angular/forms';

// Route Components
import {ClientComponent} from './client/client.component';
import {CreateClientComponent} from './create-client/create-client.component';
import {CreateDeploymentComponent} from './create-deployment/create-deployment.component'
import {CreateProjectComponent} from './create-project/create-project.component';
import {DeploymentComponent} from './deployment/deployment.component';
import {EmployeeComponent} from './employee/employee.component';
import {HomeComponent} from './home/home.component';
import {ProjectComponent} from './project/project.component';
import {UpdateClientComponent} from './update-client/update-client.component';
import {UpdateProjectComponent} from './update-project/update-project.component';

//Imported primeng Modules
import {
  SharedModule,
  ButtonModule,
  CalendarModule,
  ConfirmDialogModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  InputTextModule,
  InputTextareaModule,
  ListboxModule,
  PaginatorModule,
  PasswordModule,
  RadioButtonModule,
  TriStateCheckboxModule, CheckboxModule
} from 'primeng/primeng';

import '@angular/material/core/theming/prebuilt/indigo-pink.css';

import {ClientComponentService} from "./client/service.component.service";
import {CreateClientComponentService} from "./create-client/create-client.component.service";
import {DeploymentComponentService} from "./deployment/deployment.component.service";
import {EmployeeComponentService} from "./employee/employee.component.service";
import {ProjectComponentService} from "./project/project.component.service";
import {UpdateClientComponentService} from "./update-client/update-client.component.service";
import {UpdateProjectComponentService} from "./update-project/update-project.component.service";
import {CreateDeploymentComponentService} from "./create-deployment/create-deployment.component.service";

const appRoutes:Routes = [
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'create-client',
    component: CreateClientComponent
  },
  {
    path: 'create-project',
    component: CreateProjectComponent
  },
  {
    path: 'update-client/:clientId',
    component: UpdateClientComponent
  },
  {
    path: 'update-project/:projectId',
    component: UpdateProjectComponent
  },
  {
    path: 'deployment/:deploymentId',
    component: DeploymentComponent
  },
  {
    path: 'create-deployment/:employeeId',
    component: CreateDeploymentComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    DataTableModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,
    PaginatorModule,
    PasswordModule,
    RadioButtonModule,
    TriStateCheckboxModule,
    BrowserModule,
    HttpModule,
    HomeModule,
    ButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    ClientComponent,
    CreateClientComponent,
    CreateDeploymentComponent,
    CreateProjectComponent,
    DeploymentComponent,
    EmployeeComponent,
    ProjectComponent,
    UpdateClientComponent,
    UpdateProjectComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ClientComponent,
    CreateClientComponent,
    CreateDeploymentComponent,
    CreateProjectComponent,
    DeploymentComponent,
    EmployeeComponent,
    ProjectComponent,
    UpdateClientComponent,
    UpdateProjectComponent
  ],
  bootstrap: [AppComponent],
  providers: [ClientComponentService, CreateClientComponentService, CreateDeploymentComponentService, DeploymentComponentService,
    EmployeeComponentService, ProjectComponentService, UpdateClientComponentService, UpdateProjectComponentService]
})
export class AppModule {
}
