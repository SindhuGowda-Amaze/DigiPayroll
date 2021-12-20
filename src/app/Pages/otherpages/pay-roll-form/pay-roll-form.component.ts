import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-roll-form',
  templateUrl: './pay-roll-form.component.html',
  styleUrls: ['./pay-roll-form.component.css']
})
export class PayRollFormComponent implements OnInit {

  constructor(private DigiPayrollService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
