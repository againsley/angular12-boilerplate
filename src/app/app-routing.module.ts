import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AccountComponent } from './pages/account/account.component';

// Modals
import { ModalComponent } from './layout/modal/modal.component';
import { ResetPasswordComponent } from './modals/reset-password/reset-password.component';

// Services
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },

  {
    // traditional router outlet routing
    path: 'reset-password',
    redirectTo: '/(modal:modal/reset-password)',
    pathMatch: 'full'
  },

  {
    path: "modal",
    outlet: "modal",
    component: ModalComponent,
    children: [
      {
        path: "reset-password",
        component: ResetPasswordComponent
      }
    ]
  },

  // This trickery lets us have a clean route (/reset-password)
  // while rendering the reset password modal over the login
  // page. This causes issues with detecting clicks outside of the modal
  // and generally feels wonky.
  // TODO - revisit options for routable modals with pretty routes
  // {
  //   path: 'reset-password',
  //   children: [
  //       {
  //           path: '',
  //           component: LoginComponent
  //       },
  //       {
  //           path: '',
  //           outlet: 'modal',
  //           component: ModalComponent,
  //           children: [
  //             {
  //               path: '',
  //               component: ResetPasswordComponent
  //             }
  //           ]
  //       }
  //   ]
  // },

  

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'account',
    canActivate: [RouteGuardService],
    component: AccountComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
