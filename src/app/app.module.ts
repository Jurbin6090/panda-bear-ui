import {NgModule}      from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';

// Root Component
import {AppComponent} from './app.component';

// Local Components
import {HeaderComponent, SidebarComponent} from './core-components/core-components';
import {HttpModule} from '@angular/http';
// Imported Modules
import {HomeModule} from '../../../panda-bear-ui/src/home/home.module';

// Route Components
import {HomeComponent} from '../../../panda-bear-ui/src/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

import '@angular/material/core/theming/prebuilt/indigo-pink.css';

@NgModule({
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpModule,
    HomeModule,
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
