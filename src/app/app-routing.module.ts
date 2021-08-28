import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import{ProductComponent} from './product/product.component';
import { CustPipeExComponent } from './cust-pipe-ex/cust-pipe-ex.component';
import { ExrCheckComponent } from './exr-check/exr-check.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent},
  {path:'custom',component:CustPipeExComponent},
  {path:'exr',component:ExrCheckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
