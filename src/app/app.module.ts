import {NgxPaginationModule} from 'ngx-pagination';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FreeRecipeComponent } from './components/free-recipe/free-recipe.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { HomeOverviewComponent } from './components/home-overview/home-overview.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes : Routes = [

    {path: '',  component:HomeComponent},
    {path: 'login',  component:LoginComponent},

    {path: 'home',  component:UserHomeComponent},

    {path: 'register',  component:RegisterComponent},


    {path: 'profile',  component:UserProfileComponent},


    {path: 'search',  component:HomeComponent},
    {path: 'free',  component:FreeRecipeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    FreeRecipeComponent,
    UserHomeComponent,
    UserNavbarComponent,
    HomeOverviewComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
