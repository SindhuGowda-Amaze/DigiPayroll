import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAdjustmentFormComponent } from './Pages/otherpages/company-adjustment-form/company-adjustment-form.component';
import { PayRollFormComponent } from './Pages/otherpages/pay-roll-form/pay-roll-form.component';
import { PhilHealthFormComponent } from './Pages/otherpages/phil-health-form/phil-health-form.component';
import { SssFormComponent } from './Pages/otherpages/sss-form/sss-form.component';
import { UserFormComponent } from './Pages/otherpages/user-form/user-form.component';
import { BankFormComponent } from './Pages/otherpages/bank-form/bank-form.component';
import { PayGroupFormComponent } from './Pages/otherpages/pay-group-form/pay-group-form.component';
import { DepartmentFormComponent } from './Pages/department-form/department-form.component';
import { CostCenterFormComponent } from './Pages/otherpages/cost-center-form/cost-center-form.component';
import { OtRatesFormComponent } from './Pages/otherpages/ot-rates-form/ot-rates-form.component';
import { AdjustmentFormComponent } from './Pages/otherpages/adjustment-form/adjustment-form.component';
import { AdjustmentComponent } from './Pages/Attendence/adjustment/adjustment.component';
import { AdolfoComponent } from './Pages/otherpages/adolfo/adolfo.component';
import { BankComponent } from './Pages/Attendence/bank/bank.component';
import { CompanyAdjustmentComponent } from './Pages/Attendence/company-adjustment/company-adjustment.component';
import { CostCenterComponent } from './Pages/otherpages/cost-center/cost-center.component';
import { EmployeeComponent } from './Pages/otherpages/employee/employee.component';
import { GovernmentComponent } from './Pages/otherpages/government/government.component';
import { OtRatesComponent } from './Pages/Attendence/ot-rates/ot-rates.component';
import { PayGroupComponent } from './Pages/Attendence/pay-group/pay-group.component';
import { PhillHealthComponent } from './Pages/Attendence/phill-health/phill-health.component';
import { SSSComponent } from './Pages/otherpages/sss/sss.component';
import { TaxTableComponent } from './Pages/tax-table/tax-table.component'
import { UserComponent } from './Pages/otherpages/user/user.component';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { PayrollComponent } from './Pages/otherpages/payroll/payroll.component';
import { HelpComponent } from './Pages/help/help.component';
import { EmployeeFormComponent } from './Pages/otherpages/employee-form/employee-form.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { AttendenceDetailsComponent } from './Pages/Attendence/attendence-details/attendence-details.component';
import { OvertimeDetailsComponent } from './Pages/Attendence/overtime-details/overtime-details.component';
import { RegularisationDetailsComponent } from './Pages/Attendence/regularisation-details/regularisation-details.component';
import { WeeklyShiftComponent } from './Pages/Attendence/weekly-shift/weekly-shift.component';
import { AttendenceReportComponent } from './Pages/Attendence/attendence-report/attendence-report.component';
import{GeneratePayslipComponent} from './Pages/Attendence/generate-payslip/generate-payslip.component';
import{LeaveReportComponent} from './Pages/Attendence/leave-report/leave-report.component';
import{OvertimeReportComponent} from './Pages/Attendence/overtime-report/overtime-report.component';
import{ PayrollReportComponent} from './Pages/Attendence/payroll-report/payroll-report.component';
import{ StaffReportComponent}from './Pages/Attendence/staff-report/staff-report.component'
import { LeaveListDashboardComponent } from './Pages/leave-list-dashboard/leave-list-dashboard.component';
import { ApplyLeaveComponent } from './Pages/otherpages/apply-leave/apply-leave.component';

const routes: Routes = [
  { path: '', redirectTo: '/CompanyProfile', pathMatch: 'full' },

  {
    path: "CompanyProfile", component: CompanyProfileComponent
  },
  {
    path: "sssForm", component: SssFormComponent
  },
  {
    path: "sssForm/:id", component: SssFormComponent
  },
  {
    path: "PayRollForm", component: PayRollFormComponent
  },
  {
    path: "UserForm", component: UserFormComponent
  },
  {
    path: "PhilHealthForm", component: PhilHealthFormComponent
  },
  {
    path: "PhilHealthForm/:id", component: PhilHealthFormComponent
  },
  {
    path: "CompanyAdjustmentForm", component: CompanyAdjustmentFormComponent
  },
  {
    path: "CompanyAdjustmentForm/:id", component: CompanyAdjustmentFormComponent
  },
  {
    path: "BankForm", component: BankFormComponent
  },
  {
    path: "PayGroupForm", component: PayGroupFormComponent
  },
  {
    path: "DepartmentForm", component: DepartmentFormComponent
  },
  {
    path: "CostCenterForm", component: CostCenterFormComponent
  },
  {
    path: "CostCenterForm/:id", component: CostCenterFormComponent
  },
  {
    path: "OtRatesForm", component: OtRatesFormComponent
  },
  {
    path: "OtRatesForm/:id", component: OtRatesFormComponent
  },
  {
    path: "AdjustmentForm", component: AdjustmentFormComponent
  },
  {
    path: "EmployeeForm", component: EmployeeFormComponent
  },
  {
    path: "Help", component: HelpComponent
  },
  {
    path: "LeaveListDashboard", component: LeaveListDashboardComponent
  },
  {
    path: "ApplyLeave", component: ApplyLeaveComponent
  },
  {path:'Department',component:DepartmentComponent},
  {path:'Department',component:DepartmentComponent},
  {path:'CompanyAdjustment',component:CompanyAdjustmentComponent},
  {path:'PayRoll',component:PayrollComponent},
  {path:'Employee',component:EmployeeComponent},
  {path:'Government',component:GovernmentComponent},
  {path:'OtRates',component:OtRatesComponent},
  {path:'PayGroup',component:PayGroupComponent},
  {path:'PhillHealth',component:PhillHealthComponent},
  {path:'SSS',component:SSSComponent},
  {path:'Bank',component:BankComponent},
  {path:'Adjustment',component:AdjustmentComponent},
  {path:'CostCenter',component:CostCenterComponent},
  {path:'TaxTable',component:TaxTableComponent},
  {path:'TaxTable/:id',component:TaxTableComponent},
  {path:'User',component:UserComponent},
  {path:'Adolfo',component:AdolfoComponent},
  {path:'Footer',component:FooterComponent},
  {path:'AttendenceDetails',component:AttendenceDetailsComponent},
  {path:'OvertimeDetails',component:OvertimeDetailsComponent},
  {path:'RegularisationDetails',component:RegularisationDetailsComponent},
  {path:'WeeklyShift',component:WeeklyShiftComponent},
  {path:'AttendenceReport',component:AttendenceReportComponent},
  {path:'GeneratePayslip',component:GeneratePayslipComponent},
  {path:'LeaveReport',component:LeaveReportComponent},
  {path:'OvertimeReport',component:OvertimeReportComponent},
  {path:'PayrollReportComponent',component:PayrollReportComponent},
  {path:' StaffReportComponent',component: StaffReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
