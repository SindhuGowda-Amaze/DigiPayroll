import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
@Component({
  selector: 'app-adjustment-form',
  templateUrl: './adjustment-form.component.html',
  styleUrls: ['./adjustment-form.component.css']
})
export class AdjustmentFormComponent implements OnInit {

  constructor(private DigiPayrollServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }
  type:any;
  name:any;
  code:any;
  amount:any;
  remarks:any;
  before:any;
  taxable:any;
  maxAccumulated:any;
  ngOnInit(): void {
  }

  OnSubmit(){
    debugger 
   var json = {  
      "type": this.type,
      "name": this.name,
      "code":this.code,
      "amount":this.amount, 
      "remarks":this.remarks,
      "before":this.before,
      "taxable":this.taxable,
      "maxAccumulated":this.maxAccumulated
    };
    this.DigiPayrollServiceService.InsertAdjustment(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
      location.href="/Adjustment"
      })
  }

}
