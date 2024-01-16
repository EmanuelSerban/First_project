import { RouterModule, Routes } from "@angular/router";
import { MenComponent } from "./view/men/men.component";
import { ProductsComponent } from "./view/products/products.component";
import { WomenComponent } from "./view/women/women.component";
import { NgModule } from "@angular/core";

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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule], 
    
})

export class AppRoutingModule { }