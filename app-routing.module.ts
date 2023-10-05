import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponentComponent } from './services-component/services-component.component';




const routes: Routes = [
  {'path':'',component:MaincomponentComponent},
  {'path':'Aboutus',component:AboutusComponent},
  {'path':'Contactus',component:ContactusComponent},
  {'path':'Products',component:ProductsComponent},
  {'path':'Services',component:ServicesComponentComponent},

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
