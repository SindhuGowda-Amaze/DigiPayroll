import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  selectdata:any;
  details: any;
  constructor(private DigiPayrollServiceService:DigipayrollServiceService) { }

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

  public Ondelete(id:any) {
    this.DigiPayrollServiceService.DeletePayroll(id).subscribe(
      data => {
        debugger
        this.GetPayroll();
        Swal.fire('Deleted');
      }
    )
  }





}
