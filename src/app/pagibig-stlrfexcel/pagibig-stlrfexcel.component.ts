import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagibig-stlrfexcel',
  templateUrl: './pagibig-stlrfexcel.component.html',
  styleUrls: ['./pagibig-stlrfexcel.component.css']
})
export class PagibigSTLRFExcelComponent implements OnInit {

  constructor() { }

  Month:any;
  Year:any;
  Loan:any;
  Person:any;
  ngOnInit(): void {
    this.Month="jan";
    this.Year="2021";
    this.Loan="HDMF"
    this.Person="Admin"
  }
}
