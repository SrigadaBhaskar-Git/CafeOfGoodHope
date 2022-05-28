import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CapemenuComponent } from './capemenu/capemenu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FagenotfoundComponent } from './fagenotfound/fagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { BreakfastsComponent } from './cafemenu/breakfasts/breakfasts.component';
import { CoffeeComponent } from './capemenu/tea/coffee/coffee.component';
import { TeasCoffeComponent } from './capemenu/teas-coffe/teas-coffe.component';
import { CooldrinksComponent } from './capemenu/cooldrinks/cooldrinks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapemenuComponent,
    AboutusComponent,
    ContactusComponent,
    SigninComponent,
    SignupComponent,
    FagenotfoundComponent,
    FooterComponent,
    BreakfastsComponent,
    CoffeeComponent,
    TeasCoffeComponent,
    CooldrinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
