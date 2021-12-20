import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  selectdata:any;
  constructor(private DigiPayrollServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetPayroll();
  }
    
  public GetPayroll() {
    debugger
    this.DigiPayrollServiceService.GetPayroll().subscribe(data=>{
      debugger
      this.selectdata=data ;
     })
  }





}
