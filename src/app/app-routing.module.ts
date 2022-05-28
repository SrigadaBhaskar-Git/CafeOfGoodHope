import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BreakfastsComponent } from './capemenu/breakfasts/breakfasts.component';
import { CapemenuComponent } from './capemenu/capemenu.component';
import { CooldrinksComponent } from './capemenu/cooldrinks/cooldrinks.component';
import { TeasCoffeComponent } from './capemenu/teas-coffe/teas-coffe.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FagenotfoundComponent } from './fagenotfound/fagenotfound.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'capemenu', component:CapemenuComponent},
  {path:'teas-coffee', component:TeasCoffeComponent},
  {path:'breakfasts', component:BreakfastsComponent},
  {path:'cooldrinks', component:CooldrinksComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**', component:FagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
