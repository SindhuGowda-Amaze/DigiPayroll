import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdjustmentComponent } from './Pages/adjustment/adjustment.component';
import { AdolfoComponent } from './Pages/adolfo/adolfo.component';
import { BankComponent } from './Pages/bank/bank.component';
import { CompanyAdjustmentComponent } from './Pages/company-adjustment/company-adjustment.component';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { CostCenterComponent } from './Pages/cost-center/cost-center.component';
import { DepartmentModifyComponent } from './Pages/department-modify/department-modify.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { GovernmentComponent } from './Pages/government/government.component';
import { OtRatesComponent } from './Pages/ot-rates/ot-rates.component';
import { PayGroupComponent } from './Pages/pay-group/pay-group.component';
import { PhillHealthComponent } from './Pages/phill-health/phill-health.component';
import { SSSComponent } from './Pages/sss/sss.component';
import{TaxTableComponent} from './Pages/tax-table/tax-table.component'
import { UserComponent } from './Pages/user/user.component';


const routes: Routes = [
  {
    path: "CompanyProfile", component: CompanyProfileComponent
  },
  {path:'Department',component:DepartmentComponent},
  {path:'DepartmentModify',component:DepartmentModifyComponent},
  {path:'Bank',component:BankComponent},
  {path:'CostCenter',component:CostCenterComponent},
  {path:'Employee',component:EmployeeComponent},
  {path:'PayGroup',component:PayGroupComponent},
  {path:'Adjustment',component:AdjustmentComponent},
  {path:'CompanyAdjustment',component:CompanyAdjustmentComponent},
  {path:'OtRates',component:OtRatesComponent},
  {path:'Government',component:GovernmentComponent},
  {path:'PhillHealth',component:PhillHealthComponent},
  {path:'SSS',component:SSSComponent},
  {path:'TaxTable',component:TaxTableComponent},
  {path:'User',component: UserComponent},
  {path:'Adolfo',component:AdolfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
