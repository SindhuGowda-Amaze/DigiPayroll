import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regularisation-details',
  templateUrl: './regularisation-details.component.html',
  styleUrls: ['./regularisation-details.component.css']
})
export class RegularisationDetailsComponent implements OnInit {
  shiftdetails:any;
  constructor(private DigipayrollServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetRegularization();
  }
  public GetRegularization()
  {
    debugger
   this.DigipayrollServiceService.GetRegularization().subscribe(data=>{
      debugger
      this.shiftdetails=data;
    },
    )
  }


}
