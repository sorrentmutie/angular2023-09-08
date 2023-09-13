import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products/models/product';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
   @Input() products: Product[] = [];
   @Output() emitter: EventEmitter<Product> = new EventEmitter<Product>();
   title = "Elenco Prodotti";

   showDetails(selectedProduct: Product): void {
    this.emitter.emit(selectedProduct);
   }
}
