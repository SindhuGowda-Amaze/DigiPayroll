import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tax-table',
  templateUrl: './tax-table.component.html',
  styleUrls: ['./tax-table.component.css']
})
export class TaxTableComponent implements OnInit {
  SSSdatalist: any;

  constructor(private DigiPayrollService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetTaxtable();
  }

  public GetTaxtable() {
    debugger
    this.DigiPayrollService.GetTaxtable().subscribe(data=>{
      debugger
       this.SSSdatalist=data[0] ;
     })
  }


}
