import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ProductListComponent } from './core/products/product-list.component';
import { LoginPageComponent } from './core/user/login-page/login-page.component';
import { SignupPageComponent } from './core/user/signup-page/signup-page.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [IsAuthenticatedGuard]},
  { path: 'products', component: ProductListComponent, canActivate: [IsAuthenticatedGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
