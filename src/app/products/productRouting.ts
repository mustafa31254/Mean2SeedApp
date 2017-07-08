import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductStartComponent } from './product-start/product-start.component';
import { ProductsComponent } from './products.component';
import {Routes, RouterModule} from '@angular/router';

export const ProductChildRoutes:Routes=[
    {path: '', component:ProductStartComponent},
    {path: "new", component:ProductEditComponent},
    {path: ":id", component:ProductDetailComponent},
    {path: ":id/edit", component:ProductEditComponent},


    ];

