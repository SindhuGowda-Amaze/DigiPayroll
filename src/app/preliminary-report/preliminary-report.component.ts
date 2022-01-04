import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-preliminary-report',
  templateUrl: './preliminary-report.component.html',
  styleUrls: ['./preliminary-report.component.css']
})
export class PreliminaryReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loader:any;
  
  fileName = 'Payroll Summary.xlsx';
  exportexcel(): void {
    this.loader = true;
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }

}
