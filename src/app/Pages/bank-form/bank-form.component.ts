import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {
  name:any;
  code:any;
  remarks:any;
  result:any;
  id:any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }

  ngOnInit(): void {
    this. GetBankDetails() ;
  }
  OnSubmit(){
    debugger 
   var json = {  
      "name": this.name,
      "code": this.code,
      "remarks":this.remarks   
    };
    this.DigipayrollServiceService.InsertBanks(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
      location.href="/Department"
      })
  }

  GetBankDetails() {
    this.DigipayrollServiceService.GetBanks().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
		this.name=this.result[0].name;
		this.code=this.result[0].code;
    this.remarks=this.result[0].remarks;
      }
    )
  }

  Update(){
    debugger
     var json = {
      "name": this.name,
      "code": this.code,
      "remarks":this.remarks           
      };
    
      this.DigipayrollServiceService.UpdateBanks(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Update Sucessfully");
      location.href="/Bank";
      })
    }
}
