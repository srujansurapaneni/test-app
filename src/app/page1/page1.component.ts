import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnChanges{

  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges() {
    console.log(this.testname);
  }
  testname = "Kittu";
  

}
