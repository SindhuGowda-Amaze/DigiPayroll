import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { DepartmentModifyComponent } from './Pages/department-modify/department-modify.component';
import { DepartmentComponent } from './Pages/department/department.component';

const routes: Routes = [
  {
    path: "CompanyProfile", component: CompanyProfileComponent
  },
  {path:'Department',component:DepartmentComponent},
  {path:'DepartmentModify',component:DepartmentModifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
