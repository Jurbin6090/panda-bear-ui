import {NgModule}      from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

// Root Component
import {AppComponent} from './app.component';

// Local Components
import {HeaderComponent, SidebarComponent} from './core-components/core-components';
import {HttpModule} from '@angular/http';

// Imported Modules
import {HomeModule} from './pages/home/home.module';
import {FormsModule}   from '@angular/forms';

// Route Components
import {ClientComponent} from './pages/client/client.component';
import {CreateClientComponent} from './pages/create-client/create-client.component';
import {CreateDeploymentComponent} from './pages/create-deployment/create-deployment.component'
import {CreateProjectComponent} from './pages/create-project/create-project.component';
import {DeploymentComponent} from './pages/deployment/deployment.component';
import {EmployeeComponent} from './pages/employee/employee.component';
import {HomeComponent} from './pages/home/home.component';
import {ProjectComponent} from './pages/project/project.component';
import {UpdateClientComponent} from './pages/update-client/update-client.component';
import {UpdateProjectComponent} from './pages/update-project/update-project.component';

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

import {ClientComponentService} from "./services/client.component.service";
import {DeploymentComponentService} from "./services/deployment.component.service";
import {EmployeeComponentService} from "./services/employee.component.service";
import {ProjectComponentService} from "./services/project.component.service";

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
