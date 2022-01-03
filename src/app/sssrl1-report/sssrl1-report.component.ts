import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sssrl1-report',
  templateUrl: './sssrl1-report.component.html',
  styleUrls: ['./sssrl1-report.component.css']
})
export class SSSRL1ReportComponent implements OnInit {

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
