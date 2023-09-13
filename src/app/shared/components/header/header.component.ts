import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   randomNumberInHeader = 0;
   constructor(private service: ProductsService){
    this.randomNumberInHeader = this.service.getRandomNumber();
   }
}
