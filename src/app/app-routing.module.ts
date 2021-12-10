import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';

const routes: Routes = [
  {
    path: "CompanyProfile", component: CompanyProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
