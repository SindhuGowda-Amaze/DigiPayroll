import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adjustment',
  templateUrl: './adjustment.component.html',
  styleUrls: ['./adjustment.component.css']
})
export class AdjustmentComponent implements OnInit {

  employeedetails:any;
  constructor(private DigiPayrollService:DigipayrollServiceService,private ActivatedRouted:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAdjustment();
  }

  public GetAdjustment() {
    debugger
    this.DigiPayrollService.GetAdjustment().subscribe(data=>{
      debugger
      this.employeedetails=data ;
     })
  }

}
