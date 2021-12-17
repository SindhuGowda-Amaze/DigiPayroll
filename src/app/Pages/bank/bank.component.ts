import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  SelectedData: any;
  id: any;
  result: any;
  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigipayrollServiceService) { }

  ngOnInit(): void {

    this.GetBanks();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetBanks();
      }
    })
  }
  public GetBanks() {
    debugger
    this.DigipayrollServiceService.GetBanks().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  public Ondelete(id:any) {
    this.DigipayrollServiceService.DeleteBanks(id).subscribe(
      data => {
        debugger
        this.GetBanks();
        Swal.fire('Deleted');
      }
    )
  }

   // Modify(details: any){
  //   debugger
  //  location.href="/CostCenterForm/"+ details.id;
  // }


}
