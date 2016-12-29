import {NgModule}      from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// Root Component
import {AppComponent} from './app.component';

// Local Components
import {HeaderComponent, SidebarComponent} from './core-components/core-components';
import {HttpModule} from '@angular/http';
// Imported Modules
import {HomeModule} from './home/home.module';

// Route Components
import {HomeComponent} from './home/home.component';

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
