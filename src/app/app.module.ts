import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { HeaderComponent } from './Pages/header/header.component';
import { SssFormComponent } from './sss-form/sss-form.component';
import { PayRollFormComponent } from './pay-roll-form/pay-roll-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PhilHealthFormComponent } from './phil-health-form/phil-health-form.component';
import { CompanyAdjustmentFormComponent } from './company-adjustment-form/company-adjustment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyProfileComponent,
    HeaderComponent,
    SssFormComponent,
    PayRollFormComponent,
    UserFormComponent,
    PhilHealthFormComponent,
    CompanyAdjustmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
