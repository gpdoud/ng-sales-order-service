import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../customer/customer.class';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(bool: boolean, lang: string = "en"): string {
    if(lang === "en") {
      return bool ? "Yes" : "No";
    }
    if(lang === "fr") {
      return bool ? "Oui" : "Non";
    }
  }

}
