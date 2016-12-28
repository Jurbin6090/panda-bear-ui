import {NgModule}      from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HomeComponent} from './home.component';
import * as PrimeNgModules from 'primeng/primeng';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ...Object.keys(PrimeNgModules)
      .map(key => PrimeNgModules[key])
      .filter(mod => /Module$/.test(mod.name)),
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
