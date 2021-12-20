import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentComponent } from './Pages/department/department.component';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { HeaderComponent } from './Pages/header/header.component';
import { SssFormComponent } from './Pages/otherpages/sss-form/sss-form.component';
import { PayRollFormComponent } from './Pages/otherpages/pay-roll-form/pay-roll-form.component';
import { UserFormComponent } from './Pages/otherpages/user-form/user-form.component';
import { PhilHealthFormComponent } from './Pages/otherpages/phil-health-form/phil-health-form.component';
import { CompanyAdjustmentFormComponent } from './Pages/otherpages/company-adjustment-form/company-adjustment-form.component';
import { BankFormComponent } from './Pages/otherpages/bank-form/bank-form.component';
import { PayGroupFormComponent } from './Pages/otherpages/pay-group-form/pay-group-form.component';
import { DepartmentFormComponent } from './Pages/department-form/department-form.component';
import { CostCenterFormComponent } from './Pages/otherpages/cost-center-form/cost-center-form.component';
import { OtRatesFormComponent } from './Pages/otherpages/ot-rates-form/ot-rates-form.component';
import { AdjustmentFormComponent } from './Pages/otherpages/adjustment-form/adjustment-form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HelpComponent } from './Pages/help/help.component';
import { EmployeeFormComponent } from './Pages/otherpages/employee-form/employee-form.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { AttendenceDetailsComponent } from './Pages/Attendence/attendence-details/attendence-details.component';
import { OvertimeDetailsComponent } from './Pages/Attendence/overtime-details/overtime-details.component';
import { RegularisationDetailsComponent } from './Pages/Attendence/regularisation-details/regularisation-details.component';
import { WeeklyShiftComponent } from './Pages/Attendence/weekly-shift/weekly-shift.component';
import { AttendenceReportComponent } from './Pages/Reports/attendence-report/attendence-report.component';
import { LeaveReportComponent } from './Pages/Reports/leave-report/leave-report.component';
import { PayrollReportComponent } from './Pages/Reports/payroll-report/payroll-report.component';
import { GeneratePayslipComponent } from './Pages/Reports/generate-payslip/generate-payslip.component';
import { StaffReportComponent } from './Pages/Reports/staff-report/staff-report.component';
import { OvertimeReportComponent } from './Pages/Reports/overtime-report/overtime-report.component';
import { LeaveListDashboardComponent } from './Pages/leave-list-dashboard/leave-list-dashboard.component';
import { CostCenterComponent } from './Pages/otherpages/cost-center/cost-center.component';
import { ApplyLeaveComponent } from './Pages/otherpages/apply-leave/apply-leave.component';
import { BankComponent } from './Pages/Attendence/bank/bank.component';
import { PayGroupComponent } from './Pages/Attendence/pay-group/pay-group.component';
import { OtRatesComponent } from './Pages/Attendence/ot-rates/ot-rates.component';
import { CompanyAdjustmentComponent } from './Pages/Attendence/company-adjustment/company-adjustment.component';
import { PhillHealthComponent } from './Pages/Attendence/phill-health/phill-health.component';
import { SSSComponent } from './Pages/otherpages/sss/sss.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyProfileComponent,
    DepartmentComponent,
    HeaderComponent,
    SssFormComponent,
    PayRollFormComponent,
    UserFormComponent,
    PhilHealthFormComponent,
    CompanyAdjustmentFormComponent,
    BankFormComponent,
    PayGroupFormComponent,
    DepartmentFormComponent,
    CostCenterFormComponent,
    OtRatesFormComponent,
    AdjustmentFormComponent,
    EmployeeFormComponent,
    FooterComponent,
    HelpComponent,
    EmployeeFormComponent,
    AttendenceDetailsComponent,
    OvertimeDetailsComponent,
    RegularisationDetailsComponent,
    WeeklyShiftComponent,
    AttendenceReportComponent,
    LeaveReportComponent,
    PayrollReportComponent,
    GeneratePayslipComponent,
    StaffReportComponent,
    OvertimeReportComponent,
    LeaveListDashboardComponent,
    ApplyLeaveComponent,
    CostCenterComponent,
    BankComponent,
    PayGroupComponent,
    OtRatesComponent,
    CompanyAdjustmentComponent,
    PhillHealthComponent,
    SSSComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxDropzoneModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
