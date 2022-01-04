import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pagibig-stlrfexcel',
  templateUrl: './pagibig-stlrfexcel.component.html',
  styleUrls: ['./pagibig-stlrfexcel.component.css']
})
export class PagibigSTLRFExcelComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }

  Month:any;
  Year:any;
  Loan:any;
  Person:any;
  ngOnInit(): void {
    this.Month="jan";
    this.Year="2021";
    this.Loan="HDMF"
    this.Person="Admin"

    this.GetPayGroup();
  }

  result:any;
  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  fileName = 'Approved Applicants Reports.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
