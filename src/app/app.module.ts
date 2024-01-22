import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './view/admin/products/products.component';
import { HeaderComponent } from './header/header.component';
import { WomenComponent } from './view/women/women.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './view/main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './view/admin/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    WomenComponent,
    MainComponent,
    FooterComponent,
    CategoryComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
