import { Product } from '../Interfaces/Product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], term: string): Product[] {
    return products.filter((product)=>product.name.toLowerCase().includes(term.toLowerCase()));
  }

}
