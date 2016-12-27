import {NgModule}      from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule
  ],
  exports: [
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
