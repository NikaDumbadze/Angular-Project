import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PruductModule } from './products/pruduct.module';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { FlexLayoutModule } from '@angular/flex-layout';



import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserModule } from './user/user.module';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { SignupPageComponent } from './user/signup-page/signup-page.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]



@NgModule({
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserModule
  ],
  
  exports: [
    PruductModule
  ]
})
export class CoreModule { }
