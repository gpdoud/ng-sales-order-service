import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent} from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers/list', pathMatch: 'full' },

  { path: 'customers/list', component: CustomerListComponent },
  { path: 'customers/detail/:id', component: CustomerDetailComponent },
  { path: 'customers/create', component: CustomerCreateComponent },
  { path: 'customers/edit/:id', component: CustomerEditComponent },

  { path: 'orders/list', component: OrderListComponent },
  { path: 'orders/detail/:id', component: OrderDetailComponent },
  { path: 'orders/create', component: OrderCreateComponent },
  { path: 'orders/edit/:id', component: OrderEditComponent },

  { path: '**', component: CustomerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
