import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WatchesComponent } from './watches/watches.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RingsComponent } from './rings/rings.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'watches', component: WatchesComponent},
  {path: 'rings', component: RingsComponent},
  {path: 'product_details/:idindex', component: ProductDetailsComponent},
  {path: 'login', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
