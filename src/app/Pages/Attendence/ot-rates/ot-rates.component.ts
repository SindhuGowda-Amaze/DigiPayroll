import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ot-rates',
  templateUrl: './ot-rates.component.html',
  styleUrls: ['./ot-rates.component.css']
})
export class OtRatesComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.GetOTRates();
  }

  Update (application: any){
    debugger
   location.href="/OtRatesForm/"+ application.id;
  }

  Otlist:any;

  public GetOTRates() {
    debugger
    this.DigipayrollServiceService.GetOTRates().subscribe(data=>{
      debugger
      this.Otlist=data ;
      debugger
     })
  }


  delete(id: any){
    debugger;
    this.DigipayrollServiceService.DeleteOTRates(id).subscribe(
      data => {
       Swal.fire('Deleted Successfully...!')   
       location.reload() 
    })
  }

}
