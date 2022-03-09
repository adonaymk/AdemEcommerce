import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'AdemEcommerce'; //title first, constructor and ngOnInit last using angualr style guid

  constructor() { }

  ngOnInit(): void {
  }

}
