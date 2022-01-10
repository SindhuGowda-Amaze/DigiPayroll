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
  ID:any;
  constructor( private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.GetSSS_New()
  }


  // Update (SSSdata: any){
  //   debugger
  //  location.href="/sssForm/"+ SSSdata.id;
  // }
  GetId(id: any) {
    this.ID = id
  }

  // update() {
  //   debugger
  //   if (this.ID== null || this.ID==undefined) {
  //     Swal.fire('Please Select the Record to Modify');
  //   }
  //   else {
  //     location.href="#/sssForm/"+ this.ID;
  //   }
  // }

  ssslist:any

  public GetSSS_New() {
    debugger
    this.DigipayrollServiceService.GetSSS_New().subscribe(data=>{
      debugger
      this.ssslist=data;
      console.log('data',this.ssslist)
     })
  }

  // delete(id: any){
  //   debugger;
  
  //   this.DigipayrollServiceService.DeleteSSS(id).subscribe(
  //     data => {
  //      Swal.fire('Deleted Successfully...!')   
  //      location.reload() 
  //   })
  // }

}
