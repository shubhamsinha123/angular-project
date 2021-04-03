import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  title = 'countries';
 data:any = []
 sdata:any = []
 countries:any;
 states: any;
 constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 getCountry(){
  const url ='https://countriesnow.space/api/v0.1/countries/'
  this.http.get(url).subscribe((res)=>{
    this.data = res
    this.countries = this.data.data;
    console.log(this.countries)
  })
  
//   const state ='https://countriesnow.space/api/v0.1/countries/states'
//   this.http.get(state).subscribe((res)=>{
//    this.sdata = res
//    this.states = this.sdata.sdata;
//    console.log(this.countries)
//  })
}
}
