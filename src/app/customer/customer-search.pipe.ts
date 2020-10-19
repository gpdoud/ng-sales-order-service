import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.class';

@Pipe({
  name: 'customerSearch'
})
export class CustomerSearchPipe implements PipeTransform {

  transform(customers: Customer[], searchCriteria: string): Customer[] {
    if(customers == null || searchCriteria == null || searchCriteria == '') return customers;
    let selCustomers: Customer[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for(let c of customers) {
      if( c.name.toLowerCase().includes(searchCriteria) 
          || c.state.toLowerCase().includes(searchCriteria) 
          || c.sales.toString().includes(searchCriteria)
          || c.active.toString().includes(searchCriteria)
      ) {
        selCustomers.push(c);
      }
    }
    return selCustomers;
  }

}
