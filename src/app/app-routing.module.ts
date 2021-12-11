import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAdjustmentFormComponent } from './company-adjustment-form/company-adjustment-form.component';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { PayRollFormComponent } from './pay-roll-form/pay-roll-form.component';
import { PhilHealthFormComponent } from './phil-health-form/phil-health-form.component';
import { SssFormComponent } from './sss-form/sss-form.component';
import { UserFormComponent } from './user-form/user-form.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
