import {NgModule}      from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

// Root Component
import {AppComponent} from './app.component';

// Local Components
import {HeaderComponent, SidebarComponent} from './core-components/core-components';
import {HttpModule} from '@angular/http';

// Imported Modules
import {ClientModule} from './client/client.module';
import {CreateClientModule} from './create-client/create-client.module';
import {UpdateClientModule} from './update-client/update-client.module';
import {CreateDeploymentModule} from './create-deployment/create-deployment.module';
import {CreateProjectModule} from './create-project/create-project.module';
import {UpdateProjectModule} from './update-project/update-project.module';
import {DeploymentModule} from './deployment/deployment.module';
import {EmployeeModule} from './employee/employee.module';
import {ProjectModule} from './project/project.module';
import {HomeModule} from './home/home.module';
import {ButtonModule} from 'primeng/primeng';

// Route Components
import {ClientComponent} from './client/client.component';
import {CreateClientComponent} from './create-client/create-client.component';
import {CreateDeploymentComponent} from './create-deployment/create-deployment.component'
import {CreateProjectComponent} from './create-project/create-project.component';
import {DeploymentComponent} from './deployment/deployment.component';
import {EmployeeComponent} from './employee/employee.component';
import {HomeComponent} from './home/home.component';
import '@angular/material/core/theming/prebuilt/indigo-pink.css';
import { ProjectComponent } from './project/project.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateProjectComponent } from './update-project/update-project.component';


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
    path: 'update-project/',
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
    BrowserModule,
    HttpModule,
    ClientModule,
    CreateClientModule,
    UpdateClientModule,
    CreateDeploymentModule,
    CreateProjectModule,
    UpdateProjectModule,
    DeploymentModule,
    EmployeeModule,
    ProjectModule,
    HomeModule,
    ButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
