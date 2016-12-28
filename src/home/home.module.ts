import {NgModule}      from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HomeComponent} from './home.component';
import {DataTableModule, DialogModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    DialogModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
