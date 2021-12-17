import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{DigipayrollServiceService}from '../../../digipayroll-service.service'


@Component({
  selector: 'app-attendence-details',
  templateUrl: './attendence-details.component.html',
  styleUrls: ['./attendence-details.component.css']
})
export class AttendenceDetailsComponent implements OnInit {
  shiftdetails:any;
  data:any;


  constructor(private DigiPayrollService:DigipayrollServiceService,private AcivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetMyAttendenceDetails()
  }
  public GetMyAttendenceDetails()
  {
    debugger
   this.DigiPayrollService.GetMyAttendenceDetails().subscribe(data=>{
      debugger
      this.shiftdetails=data;
    },
    )
  }

}
