import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http'; 
//import { UserService } from './services/user.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AllSallesComponent } from './all-salles/all-salles.component';
import { SalleComponent } from './salle/salle.component';
import { SalleService } from './services/salle.service';
import { CartComponent } from './cart/cart.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    FooterComponent,
    ClientsComponent,
    PricingComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    AllSallesComponent,
    SalleComponent,
    CartComponent,
    MoncompteComponent,
    SignupComponent,
    LoginComponent,
    ContactusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SalleService],

  bootstrap: [AppComponent]
})
export class AppModule { }
//fin