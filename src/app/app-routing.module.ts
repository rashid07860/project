import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpassComponent } from './loginpass/loginpass.component';
import { LoginemailComponent } from './loginemail/loginemail.component';
import { LoginotpComponent } from './loginotp/loginotp.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { SelectDashboardComponent } from './select-dashboard/select-dashboard.component';


const routes: Routes = [
  { path: '',
   component: LoginemailComponent 
  },
  {
    path: 'loginpass',
   component: LoginpassComponent 
  },
  {
    path:'loginotp',
    component:LoginotpComponent
  },
  {
    path:'verifyotp',
    component:VerifyotpComponent
  },
  {
    path:'createpassword',
    component:CreatepasswordComponent
  },
  {
    path:'selectdashboard',
    component:SelectDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingConst= [
  LoginemailComponent,
  LoginpassComponent,
  LoginotpComponent,
  VerifyotpComponent,
  CreatepasswordComponent,
  SelectDashboardComponent


  
]
