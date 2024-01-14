import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './view/products/products.component';
import { HeaderComponent } from './header/header.component';
import { WomenComponent } from './view/women/women.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenComponent } from './view/men/men.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'women',
    component: WomenComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    WomenComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
