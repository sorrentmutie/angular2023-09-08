import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ProductsService]
})
export class FooterComponent {
  randomNumberInFooter = 0;
  constructor(private service: ProductsService) {
    this.randomNumberInFooter = this.service.getRandomNumber();

    setInterval(() => {
     // this.randomNumberInFooter += 1;
    }, 1000);

  }
}
