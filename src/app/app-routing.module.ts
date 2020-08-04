import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent}     from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent }  from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent }  from './customer/customer-create/customer-create.component';
import { CustomerEditComponent }    from './customer/customer-edit/customer-edit.component';

import { ItemListComponent}         from './item/item-list/item-list.component';
import { ItemDetailComponent }      from './item/item-detail/item-detail.component';
import { ItemCreateComponent }      from './item/item-create/item-create.component';
import { ItemEditComponent }        from './item/item-edit/item-edit.component';

import { OrderListComponent }       from './order/order-list/order-list.component';
import { OrderDetailComponent }     from './order/order-detail/order-detail.component';
import { OrderCreateComponent }     from './order/order-create/order-create.component';
import { OrderEditComponent }       from './order/order-edit/order-edit.component';
import { OrderLinesComponent }      from './order/order-lines/order-lines.component';

import { OrderitemListComponent }   from './orderitem/orderitem-list/orderitem-list.component';
import { OrderitemDetailComponent } from './orderitem/orderitem-detail/orderitem-detail.component';
import { OrderitemCreateComponent } from './orderitem/orderitem-create/orderitem-create.component';
import { OrderitemEditComponent }   from './orderitem/orderitem-edit/orderitem-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers/list', pathMatch: 'full' },

  { path: 'customers/list', component: CustomerListComponent },
  { path: 'customers/detail/:id', component: CustomerDetailComponent },
  { path: 'customers/create', component: CustomerCreateComponent },
  { path: 'customers/edit/:id', component: CustomerEditComponent },

  { path: 'items/list', component: ItemListComponent },
  { path: 'items/detail/:id', component: ItemDetailComponent },
  { path: 'items/create', component: ItemCreateComponent },
  { path: 'items/edit/:id', component: ItemEditComponent },

  { path: 'orders/list', component: OrderListComponent },
  { path: 'orders/detail/:id', component: OrderDetailComponent },
  { path: 'orders/create', component: OrderCreateComponent },
  { path: 'orders/edit/:id', component: OrderEditComponent },
  { path: 'orders/lines/:id', component: OrderLinesComponent },

  { path: 'orderitems/list', component: OrderitemListComponent },
  { path: 'orderitems/detail/:id', component: OrderitemDetailComponent },
  { path: 'orderitems/create/:ordid', component: OrderitemCreateComponent },
  { path: 'orderitems/edit/:id', component: OrderitemEditComponent },

  { path: '**', component: CustomerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
