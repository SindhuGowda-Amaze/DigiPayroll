import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-shift',
  templateUrl: './weekly-shift.component.html',
  styleUrls: ['./weekly-shift.component.css']
})
export class WeeklyShiftComponent implements OnInit {
  WeeklyShift:any;
  constructor(private DigiServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetMyWeeklyShift();
  }

  public GetMyWeeklyShift()
  {
    debugger
   this.DigiServiceService.GetMyWeeklyShift().subscribe(data=>{
      debugger
      this.WeeklyShift=data;
    },
    )
  }

  Refresh(){
    location.reload();
  }
}
