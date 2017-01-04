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
import {CreateDeploymentModule} from './create-deployment/create-deployment.module';
import {DeploymentModule} from './deployment/deployment.module';
import {EmployeeModule} from './employee/employee.module';
import {HomeModule} from './home/home.module';
import {ButtonModule} from 'primeng/primeng';

// Route Components
import {ClientComponent} from './client/client.component';
import {CreateDeploymentComponent} from './create-deployment/create-deployment.component'
import {DeploymentComponent} from './deployment/deployment.component';
import {EmployeeComponent} from './employee/employee.component';
import {HomeComponent} from './home/home.component';
import '@angular/material/core/theming/prebuilt/indigo-pink.css';

const appRoutes:Routes = [
  {
    path: 'client',
    component: ClientComponent
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
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ClientModule,
    CreateDeploymentModule,
    DeploymentModule,
    EmployeeModule,
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
