import { Component } from '@angular/core';

@Component({
  selector: 'mbs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myBookStore';
  consoleData(val){
    console.log('Datasend from child', val)
  }
}
