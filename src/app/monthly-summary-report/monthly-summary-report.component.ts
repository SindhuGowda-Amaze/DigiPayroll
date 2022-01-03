import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
@Component({
  selector: 'app-monthly-summary-report',
  templateUrl: './monthly-summary-report.component.html',
  styleUrls: ['./monthly-summary-report.component.css']
})
export class MonthlySummaryReportComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }
result:any;
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
