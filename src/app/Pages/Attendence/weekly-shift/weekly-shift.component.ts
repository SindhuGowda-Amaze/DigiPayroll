import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-shift',
  templateUrl: './weekly-shift.component.html',
  styleUrls: ['./weekly-shift.component.css']
})
export class WeeklyShiftComponent implements OnInit {
  weeklyShift:any;
  constructor(private DigiServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }
 
  roleid:any;
  ngOnInit(): void {
    this.GetAnnouncements();
    this.roleid = localStorage.getItem('roledid');
  }
  term:any;
  workplaceList:any;
  public GetAnnouncements() {
    debugger
    this.DigiServiceService.GetStaffShiftDetails().subscribe(data => {
      debugger
      this.workplaceList = data.slice(0,5);
    })
  }
}
