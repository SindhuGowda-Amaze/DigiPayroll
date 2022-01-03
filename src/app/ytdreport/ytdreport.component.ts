import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
@Component({
  selector: 'app-ytdreport',
  templateUrl: './ytdreport.component.html',
  styleUrls: ['./ytdreport.component.css']
})
export class YTDReportComponent implements OnInit {

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
