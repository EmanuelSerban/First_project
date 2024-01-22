import { RouterModule, Routes } from "@angular/router";
import { MenComponent } from "./view/men/men.component";
import { ProductsComponent } from "./view/admin/products/products.component";
import { WomenComponent } from "./view/women/women.component";
import { NgModule } from "@angular/core";
import { MainComponent } from "./view/main/main.component";
import { CategoryComponent } from "./view/admin/category/category.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent
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
        path: 'admin', children: [
            {path: 'products', component: ProductsComponent}, 
            {path: 'category', component: CategoryComponent}
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})

export class AppRoutingModule { }