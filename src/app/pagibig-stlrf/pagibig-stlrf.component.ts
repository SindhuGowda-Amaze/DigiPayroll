import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagibig-stlrf',
  templateUrl: './pagibig-stlrf.component.html',
  styleUrls: ['./pagibig-stlrf.component.css']
})
export class PagibigSTLRFComponent implements OnInit {

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
