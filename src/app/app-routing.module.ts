import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAdjustmentFormComponent } from './company-adjustment-form/company-adjustment-form.component';
// import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { PayRollFormComponent } from './pay-roll-form/pay-roll-form.component';
import { PhilHealthFormComponent } from './phil-health-form/phil-health-form.component';
import { SssFormComponent } from './sss-form/sss-form.component';
import { UserFormComponent } from './user-form/user-form.component';
// import { DepartmentModifyComponent } from './Pages/department-modify/department-modify.component';
// import { DepartmentComponent } from './Pages/department/department.component';
import { BankFormComponent } from './bank-form/bank-form.component';
import { PayGroupFormComponent } from './pay-group-form/pay-group-form.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { CostCenterFormComponent } from './cost-center-form/cost-center-form.component';
import { OtRatesFormComponent } from './ot-rates-form/ot-rates-form.component';
import { AdjustmentFormComponent } from './adjustment-form/adjustment-form.component';
// import { CompanyAdjustmentComponent } from './company-adjustment/company-adjustment.component';
// import { AdjustmentComponent } from './adjustment/adjustment.component';
// import { OtRatesComponent } from './ot-rates/ot-rates.component';
// import { PayGroupComponent } from './pay-group/pay-group.component';
import { AdjustmentComponent } from './Pages/adjustment/adjustment.component';
import { AdolfoComponent } from './Pages/adolfo/adolfo.component';
import { BankComponent } from './Pages/bank/bank.component';
import { CompanyAdjustmentComponent } from './Pages/company-adjustment/company-adjustment.component';
// import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { CostCenterComponent } from './Pages/cost-center/cost-center.component';
// import { DepartmentModifyComponent } from './Pages/department-modify/department-modify.component';
// import { DepartmentComponent } from './Pages/department/department.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { GovernmentComponent } from './Pages/government/government.component';
import { OtRatesComponent } from './Pages/ot-rates/ot-rates.component';
import { PayGroupComponent } from './Pages/pay-group/pay-group.component';
import { PhillHealthComponent } from './Pages/phill-health/phill-health.component';
import { SSSComponent } from './Pages/sss/sss.component';
import{TaxTableComponent} from './Pages/tax-table/tax-table.component'
import { UserComponent } from './Pages/user/user.component';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { DepartmentModifyComponent } from './Pages/department-modify/department-modify.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  {
    path: "CompanyProfile", component: CompanyProfileComponent
  },
  {
    path: "sssForm", component: SssFormComponent
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
    path: "CompanyAdjustmentForm", component: CompanyAdjustmentFormComponent
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
    path: "OtRatesForm", component: OtRatesFormComponent
  },
  {
    path: "AdjustmentForm", component: AdjustmentFormComponent
  },
  {
    path: "EmployeeForm", component: EmployeeFormComponent
  },
  {
    path: "CompanyAdjustment", component: CompanyAdjustmentComponent
  },
  {
    path: "Adjustment", component: AdjustmentComponent
  },
  {
    path: "OtRates", component: OtRatesComponent
  },
  {
    path: "PayGroup", component: PayGroupComponent
  },
  {
    path: "Bank", component: BankComponent
  },
  {
    path: "CostCenter", component: CostCenterComponent
  },
  {
    path: "Employee", component: EmployeeComponent
  },
  {path:'Department',component:DepartmentComponent},
  {path:'DepartmentModify',component:DepartmentModifyComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
