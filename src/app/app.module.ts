import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProductsComponent } from './view/products/products.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { MenaccessoriesComponent } from './men/menaccessories/menaccessories.component';
import { MenshoesComponent } from './men/menshoes/menshoes.component';
import { MenclothingComponent } from './men/menclothing/menclothing.component';
import { WomenclothingComponent } from './women/womenclothing/womenclothing.component';
import { WomenshoesComponent } from './women/womenshoes/womenshoes.component';
import { WomenaccessoriesComponent } from './women/womenaccessories/womenaccessories.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
    {
    path: 'women',
    component: WomenComponent
  },
    {
    path: 'menclothing',
    component: MenclothingComponent
  },
    {
    path: 'womenclothing',
    component: WomenclothingComponent
  },  {
    path: 'menshoes',
    component: MenshoesComponent
  },
    {
    path: 'womenshoes',
    component: WomenshoesComponent
  },
    {
    path: 'menaccessories',
    component: MenaccessoriesComponent
  },
    {
    path: 'womenaccessories',
    component: WomenaccessoriesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    MenuComponent,
    HeaderComponent,
    WomenComponent,
    MenComponent,
    MenaccessoriesComponent,
    MenshoesComponent,
    MenclothingComponent,
    WomenclothingComponent,
    WomenshoesComponent,
    WomenaccessoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
