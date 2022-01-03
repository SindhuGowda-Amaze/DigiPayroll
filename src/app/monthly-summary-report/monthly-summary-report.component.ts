import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-monthly-summary-report',
  templateUrl: './monthly-summary-report.component.html',
  styleUrls: ['./monthly-summary-report.component.css']
})
export class MonthlySummaryReportComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }
result:any;
Tax_Table_Starts_on:any;
  ngOnInit(): void {
    this.GetPayGroup();
  }

  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

 

}
