import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sss',
  templateUrl: './sss.component.html',
  styleUrls: ['./sss.component.css']
})
export class SSSComponent implements OnInit {

  constructor( private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.GetSSS()
  }


  Update (SSSdata: any){
    debugger
   location.href="/sssForm/"+ SSSdata.id;
  }


  SSSdatalist:any

  public GetSSS() {
    debugger
    this.DigipayrollServiceService.GetSSS().subscribe(data=>{
      debugger
      this.SSSdatalist=data ;
     })
  }

  delete(id: any){
    debugger;
  
    this.DigipayrollServiceService.DeleteSSS(id).subscribe(
      data => {
       Swal.fire('Deleted Successfully...!')   
       location.reload() 
    })
  }

}
