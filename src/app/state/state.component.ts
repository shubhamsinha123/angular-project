import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  title = 'state';
 data:any = []
 states: any;
 constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 getState(){
  const url ='https://countriesnow.space/api/v0.1/countries/states'
  this.http.get(url).subscribe((res)=>{
    this.data = res
    this.states = this.data.data;
    console.log(this.states)
  })
  
//   const state ='https://countriesnow.space/api/v0.1/countries/states'
//   this.http.get(state).subscribe((res)=>{
//    this.sdata = res
//    this.states = this.sdata.sdata;
//    console.log(this.countries)
//  })
}
}
