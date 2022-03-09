import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewHttpEmployeeComponent } from './manager/view-http-employee/view-http-employee.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent }, 
  { path: "view-users", component: ViewHttpEmployeeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
