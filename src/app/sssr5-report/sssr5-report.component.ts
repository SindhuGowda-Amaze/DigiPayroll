import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sssr5-report',
  templateUrl: './sssr5-report.component.html',
  styleUrls: ['./sssr5-report.component.css']
})
export class SSSR5ReportComponent implements OnInit {

  constructor() { }
  Month:any;
  Year:any;
  Person:any;
  ngOnInit(): void {
    this.Month="jan";
    this.Year="2021";
    this.Person="Admin"
  }

}
