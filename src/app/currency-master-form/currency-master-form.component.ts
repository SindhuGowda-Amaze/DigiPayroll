import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-master-form',
  templateUrl: './currency-master-form.component.html',
  styleUrls: ['./currency-master-form.component.css']
})
export class CurrencyMasterFormComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService,private ActivatedRoute: ActivatedRoute) { }

  CurrencyName:any;
  CountryName:any;
  Description:any;
  result:any;
  id:any;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetCurrencyMaster();
      }
    })
  }

  GetCurrencyMaster() {
    this.DigipayrollServiceService.GetCurrencyMaster().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
		this.CurrencyName=this.result[0].currencyName;
		this.CountryName=this.result[0].countryName;
    this.Description=this.result[0].description;
      }
    ) 
  }

  Submit(){
    debugger 
   var json = {  
      "CurrencyName": this.CurrencyName,
      "CountryName": this.CountryName,
      "Description":this.Description   
    };
    this.DigipayrollServiceService.InsertCurrencyMaster(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully Submitted...!")
      location.href="/#/CurrencyMaster"
      })
  }

  Update(){
    debugger
     var json = {
      "ID": this.id,
      "CurrencyName": this.CurrencyName,
      "CountryName": this.CountryName,
      "Description":this.Description           
      };
    
      this.DigipayrollServiceService.UpdateCurrencyMaster(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Successfully Updated...!");
        location.href="/#/CurrencyMaster";
      })
  }

  

}
