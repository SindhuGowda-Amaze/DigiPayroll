import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-biralphalist6',
  templateUrl: './biralphalist6.component.html',
  styleUrls: ['./biralphalist6.component.css']
})
export class Biralphalist6Component implements OnInit {

  constructor() { }
  showleaseforprint:any;
  ngOnInit(): void {
    this.showleaseforprint = 0;
  }

  public showpdf(){
    this.showleaseforprint = 1;
  }
 
}
