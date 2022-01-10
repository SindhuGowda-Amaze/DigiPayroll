import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-currency-master',
  templateUrl: './currency-master.component.html',
  styleUrls: ['./currency-master.component.css']
})
export class CurrencyMasterComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigipayrollServiceService) { }

  id: any;
  result: any;

  ngOnInit(): void {

    this.GetCurrencyMaster();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetCurrencyMaster();
      }
    })
  }

  public GetCurrencyMaster() {
    debugger
    this.DigipayrollServiceService.GetCurrencyMaster().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  public Ondelete(id:any) {
    this.DigipayrollServiceService.DeleteCurrencyMaster(id).subscribe(
      data => {
        debugger
        Swal.fire('Successfully Deleted...!');
        this.GetCurrencyMaster();
      }
    )
  }

}
