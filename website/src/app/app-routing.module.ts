import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSallesComponent } from './all-salles/all-salles.component';
import { SalleComponent } from './salle/salle.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { CartComponent } from './cart/cart.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path: '',redirectTo:'/Home' , pathMatch: 'full'},
  {path: 'Home', component: HeaderComponent},
  {path: 'About', component: IntroductionComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Services',redirectTo:'/Home' , pathMatch: 'full'},
  {path: 'Clients', component: ClientsComponent},
  {path: 'Pricing', redirectTo:'/Home' , pathMatch: 'full'},
  {path: 'All-salles', component: AllSallesComponent},
  {path: 'Salle', component: SalleComponent},
  {path: 'Cart', component: CartComponent},
  {path: 'MonCompte', component: MoncompteComponent},
  {path: 'Testimonials', component:TestimonialComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contactus', component: ContactusComponent},
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//fin
