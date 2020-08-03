import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent} from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers/list', pathMatch: 'full' },
  { path: 'customers/list', component: CustomerListComponent },
  { path: 'customers/detail/:id', component: CustomerDetailComponent },
  { path: 'customers/create', component: CustomerCreateComponent },
  { path: 'customers/edit/:id', component: CustomerEditComponent },
  { path: '**', component: CustomerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
