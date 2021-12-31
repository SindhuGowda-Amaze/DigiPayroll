import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{DigipayrollServiceService}from '../../../digipayroll-service.service'


@Component({
  selector: 'app-attendence-details',
  templateUrl: './attendence-details.component.html',
  styleUrls: ['./attendence-details.component.css']
})
export class AttendenceDetailsComponent implements OnInit {
  shiftdetails:any;
  data:any;




  constructor(private DigiPayrollService:DigipayrollServiceService,private AcivatedRoute:ActivatedRoute) { }

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  roleid: any
  staffID: any;
  ngOnInit(): void {

    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.GetAttendance();
    this.DigiPayrollService.GetMyDetails().subscribe((data: any) => {
      debugger
      this.dropdownList = data;
    })

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,

    };
  }

  employeeid: any
  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.employeeid = item.id;
    this.DigiPayrollService.GetAttendance().subscribe(data => {
      debugger
      this.attendancelist = data.filter(x => x.userID == this.employeeid && (x.filterdate >= this.startdate && x.filterdate <= this.enddate))
    })

  }
  startdate: any;
  enddate: any;
  attendancelist: any;
  public getenddate(event: any) {
    debugger
    this.DigiPayrollService.GetAttendance().subscribe(data => {
      debugger
      this.attendancelist = data.filter(x => x.supervisor == localStorage.getItem('staffid') && (x.filterdate >= this.startdate && x.filterdate <= this.enddate))
    })
  }

  public GetAttendance() {
    debugger
    this.DigiPayrollService.GetAttendance().subscribe(data => {
      debugger
      this.attendancelist = data;
    })
  }
  selecallbtn: any
  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = checked;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }
  }



}
