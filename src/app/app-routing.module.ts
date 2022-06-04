import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/home/welcome.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { ProductListComponent } from './core/products/product-list/product-list.component';

const routes: Routes = [

  { path: 'login', loadChildren: () =>import ('./core/user/user.module').then(m => m.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
