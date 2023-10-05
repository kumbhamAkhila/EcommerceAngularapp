import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvbarComponent } from './Navbar/nvbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponentComponent } from './services-component/services-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    FooterComponent,
    AboutusComponent,
    MaincomponentComponent,
    ContactusComponent,
    ProductsComponent,
    ServicesComponentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
