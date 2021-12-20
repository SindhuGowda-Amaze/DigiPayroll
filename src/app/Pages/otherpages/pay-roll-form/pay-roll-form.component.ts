import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
@Component({
  selector: 'app-pay-roll-form',
  templateUrl: './pay-roll-form.component.html',
  styleUrls: ['./pay-roll-form.component.css']
})
export class PayRollFormComponent implements OnInit {
Year: any;
Month:any;
Period:any;
Pay_Roll_Run_Type:any;
Pay_Group:any;
description:any;
Transaction_Date:any;
Status: any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    debugger 
   var json = {  
      "year": this.Year,
      "month": this.Month,
      "period": this.Period,
      "pay_Roll_Run_Type": this.Pay_Roll_Run_Type,
      "pay_Group": this.Pay_Group,
      "description": this.description,
      "transaction_Date": this.Transaction_Date,
      "status": this.Status
    };
    this.DigipayrollServiceService.InsertPayroll(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
      location.href="/PayRoll"
      })
  }

}
