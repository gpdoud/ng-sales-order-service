import { Customer } from '../customer/customer.class';
import { Orderitem } from '../orderitem/orderitem.class';

export class Order {

    id: number = 0;
    description: string = '';
    total: number = 0;
    customerId: number = 0;
    customer: Customer;
    orderitems: Orderitem[];

    constructor() {}
}