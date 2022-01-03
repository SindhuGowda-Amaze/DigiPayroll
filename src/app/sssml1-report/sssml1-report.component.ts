import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sssml1-report',
  templateUrl: './sssml1-report.component.html',
  styleUrls: ['./sssml1-report.component.css']
})
export class SSSML1ReportComponent implements OnInit {

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
