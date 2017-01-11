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
import {ClientComponent} from './client/client/client.component';
import {CreateClientComponent} from './client/create-client/create-client.component';
import {CreateDeploymentComponent} from './deployment/create-deployment/create-deployment.component'
import {CreateProjectComponent} from './project/create-project/create-project.component';
import {DeploymentComponent} from './deployment/deployment/deployment.component';
import {EmployeeComponent} from './employee/employee/employee.component';
import {HomeComponent} from './home/home.component';
import {ProjectComponent} from './project/project/project.component';
import {UpdateClientComponent} from './client/update-client/update-client.component';
import {UpdateProjectComponent} from './project/update-project/update-project.component';

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

import {ClientComponentService} from "./client/client.component.service";
import {DeploymentComponentService} from "./deployment/deployment.component.service";
import {EmployeeComponentService} from "./employee/employee.component.service";
import {ProjectComponentService} from "./project/project.component.service";

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
  providers: [ClientComponentService, DeploymentComponentService, EmployeeComponentService, ProjectComponentService]
})
export class AppModule {
}
