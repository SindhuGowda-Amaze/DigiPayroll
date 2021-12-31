import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-leave-list-dashboard',
  templateUrl: './leave-list-dashboard.component.html',
  styleUrls: ['./leave-list-dashboard.component.css'],
  providers: [DatePipe]
})
export class LeaveListDashboardComponent implements OnInit {

  IntID: boolean = false;
  public ID: any = [];
  temp: any
  constructor(public DigiofficeService: DigipayrollServiceService, public router: Router, public datePipe: DatePipe) { }
  public showorhidecontent: any;
  options: FullCalendarOptions | undefined;
  events: EventObject[] | undefined;
  roleid: any;
  public selectedlanguage: any;
  public selectedlanguage1: any;
  public callenderyear: any;
  public callenderMonth: any;
  public callenderstartday: any;
  public callenderendday: any;
  public callenderdaysdount: any = [];
  public callenderBindData = new Date();
  public todaydate = new Date().getDate();
  public options1: any;
  public todayDay = this.datePipe.transform(new Date().getDay(), 'EEEE');
  public selecallbtn: any;

  roledid: any;
  ngOnInit(): void {
    this.selecallbtn = false;
    this.roledid = localStorage.getItem('roledid');
    this.getstaffleaves();
  }

  term: any;
  staffleaves: any;
  public getstaffleaves() {
    debugger
    this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025").subscribe((data: any) => {
      debugger
      this.staffleaves = data.filter((x: { supervisor: string | null; }) => x.supervisor == localStorage.getItem('staffid'));
      this.buildcallender(this.staffleaves);
    })
  }
  public newlevae() {
    debugger
    this.router.navigate(['/NewLeaveRequest']);
  }

  public makeunderline(event: { currentTarget: any; }) {
    debugger
    var element = event.currentTarget;
    element.c("color");
    element.addClass("bottom__active");

  };

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



  date: any;
  public getdate(event: any) {
    debugger
    this.date = event.target.value;

    this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025").subscribe((data: any) => {
      debugger
      this.staffleaves = data.filter((x: { supervisor: string | null; filterdate: any; }) => x.supervisor == localStorage.getItem('staffid') && x.filterdate == this.date);
    })

  }



  medicalUrl: any
  public getmedicalUrl(medicalUrl: any) {
    debugger
    this.medicalUrl = medicalUrl
  }
  public getCheckbocdetails(evn: any) {
    let temp: any = evn;
    this.temp = Object.entries(temp);
    debugger
    if (this.temp.every((val: { checked: boolean; }) => val.checked == true)) {
      this.IntID = false;
      this.ID = [];
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = false });
      this.IntID = false;
    }
    else {
      debugger;
      this.selecallbtn = true;
      //  this.ID = [];
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.IntID = true;
      var obj: any = {};
      obj["id"] = evn.id;
      obj["staffID"] = evn.staffID;
      obj["leaveTypeID"] = evn.leaveTypeID;
      obj["noOfDays"] = evn.noOfDays;


      this.ID.push(obj);

    }
  }


  changeStatus(evn: any) {

    if (evn.currentTarget.checked) {
      this.showorhidecontent = false;
    }
    else {
      this.showorhidecontent = true;
    }

  }



  public buildcallender(MaintainanceList: string | any[]) {
    debugger
    this.callenderdaysdount.length = 0;
    this.callenderyear = this.callenderBindData.getFullYear();
    this.callenderMonth = this.datePipe.transform(this.callenderBindData, 'MMMM');
    this.callenderstartday = new Date(this.callenderBindData.getFullYear(), this.callenderBindData.getMonth(), 1);
    this.callenderendday = new Date(this.callenderBindData.getFullYear(), this.callenderBindData.getMonth() + 1, 0);
    this.callenderdaysdount.length = this.callenderendday.getDate();
    let o = 0;
    for (let i = 0; i < this.callenderdaysdount.length; i++) {
      let sdate = this.callenderstartday;
      let _date;
      if (sdate.getDate() == 1 && o == 0) {
        _date = sdate.setDate(sdate.getDate() + 0);
        o++
      }
      else {
        _date = sdate.setDate(sdate.getDate() + 1);
      }
      _date = this.datePipe.transform(sdate, 'dd');
      let _day = this.datePipe.transform(sdate, 'EEE');
      let dateformat = this.datePipe.transform(sdate, 'yyyy-MM-ddTHH:mm:ss');

      this.callenderdaysdount[i] = { date: _date, day: _day, dateformat: dateformat };
    }

    //Events Binding

    for (let j = 0; j < MaintainanceList.length; j++) {
      debugger;
      let currenteventlist = this.callenderdaysdount.filter((x: { dateformat: string | number | Date; }) => this.datePipe.transform(x.dateformat, 'yyyy-MM-dd') == this.datePipe.transform(MaintainanceList[j].sdte, 'yyyy-MM-dd'));
      if (currenteventlist.length > 0) {
        this.callenderdaysdount[currenteventlist[0].date - 1]['RequestFor'] = MaintainanceList[j].requestFor;
        this.callenderdaysdount[currenteventlist[0].date - 1]['StartTime'] = MaintainanceList[j].startTime;
        this.callenderdaysdount[currenteventlist[0].date - 1]['EndTime'] = MaintainanceList[j].endTime;
        this.callenderdaysdount[currenteventlist[0].date - 1]['mantainenceHtml'] =
          "<span class='event_PendingBookCommunity'> Staff Name : " + MaintainanceList[j].staffName +
          "<br>  Reason : " + MaintainanceList[j].leaveReason +
          // "<br>  Unit :" + MaintainanceList[j].unitID + 
          "</span>";
      }

    }
  }

  public previousmonth() {
    debugger;
    this.callenderBindData.setMonth(this.callenderBindData.getMonth() - 1);
    this.buildcallender(this.staffleaves);
  }
  public nextmonth() {
    debugger;
    this.callenderBindData.setMonth(this.callenderBindData.getMonth() + 1);
    this.buildcallender(this.staffleaves);
  }


}
