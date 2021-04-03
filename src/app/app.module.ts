import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
 declarations: [
   AppComponent,
   StateComponent,
   CountriesComponent
 ],
 imports: [
   BrowserModule,
   HttpClientModule
 ],
 providers: [HttpClientModule],
 bootstrap: [AppComponent]
})
export class AppModule { }