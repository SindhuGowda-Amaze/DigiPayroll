import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leave-list-dashboard',
  templateUrl: './leave-list-dashboard.component.html',
  styleUrls: ['./leave-list-dashboard.component.css']
})
export class LeaveListDashboardComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.GetMyLeaveReport();
    this.GetLeaveBalance();
  }

  myleaveReportList:any;

  public GetMyLeaveReport() {
    debugger
    this.DigipayrollServiceService.GetMyLeaveReport().subscribe(data=>{
      debugger
      this.myleaveReportList=data ;
      debugger
     })
  }

  myleaveBalanceList:any;

  public GetLeaveBalance() {
    debugger
    this.DigipayrollServiceService.GetLeaveBalance().subscribe(data=>{
      debugger
      this.myleaveBalanceList=data ;
      debugger
     })
  }

  refresh(){
    location.reload();
  }

}
