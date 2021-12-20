import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pay-group-form',
  templateUrl: './pay-group-form.component.html',
  styleUrls: ['./pay-group-form.component.css']
})
export class PayGroupFormComponent implements OnInit {
id : any;
description:any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    debugger 
   var json = {  
      "Description": this.description
    };
    this.DigipayrollServiceService.InsertPayGroup(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
      location.href="/PayGroup"
      })
  }

  Update(){

  }
}
