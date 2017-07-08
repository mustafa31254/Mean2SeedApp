import { ProductChildRoutes } from './products/productRouting';

import { ProductsComponent } from './products/products.component';
import { AuthChildRoutes } from './auth/authChildRoutes';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import{Routes,RouterModule} from '@angular/router';

 const App_Routes:Routes=[
     {path : '', redirectTo: '/home',pathMatch:"full"},
     {path:'home',component: HomeComponent},
     {path:'auth',component: AuthComponent,children:AuthChildRoutes},
     {path:'products', component: ProductsComponent,children:ProductChildRoutes}


 ];
export const appRoutes=RouterModule.forRoot(App_Routes);
