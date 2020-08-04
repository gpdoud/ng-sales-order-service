import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { MenuComponent } from './menu/menu.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { OrderitemListComponent } from './orderitem/orderitem-list/orderitem-list.component';
import { OrderitemDetailComponent } from './orderitem/orderitem-detail/orderitem-detail.component';
import { OrderitemCreateComponent } from './orderitem/orderitem-create/orderitem-create.component';
import { OrderitemEditComponent } from './orderitem/orderitem-edit/orderitem-edit.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderCreateComponent,
    OrderEditComponent,
    BoolDisplayPipe,
    MenuComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCreateComponent,
    ItemEditComponent,
    OrderitemListComponent,
    OrderitemDetailComponent,
    OrderitemCreateComponent,
    OrderitemEditComponent,
    OrderLinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
