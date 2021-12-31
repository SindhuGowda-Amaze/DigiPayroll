import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigipayrollServiceService) { }
  SelectedData: any;
  id: any;
  result: any;
  ngOnInit(): void {
    this.GetDepartment();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetDepartment();
      }
    })
  }
  public GetDepartment() {
    debugger
    this.DigipayrollServiceService.GetDepartment().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  GetId(id: any) {
    this.id = id
  }


  public Ondelete(id:any) {
    this.DigipayrollServiceService.DeleteDepartment(id).subscribe(
      data => {
        debugger
        this.GetDepartment();
        Swal.fire('Deleted');
      }
    )
  }

  update(){
  debugger
   location.href="/DepartmentForm/"+ this.id;
  }
}
