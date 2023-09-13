import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-in-stock',
  templateUrl: './products-in-stock.component.html',
  styleUrls: ['./products-in-stock.component.css']
})
export class ProductsInStockComponent {

  randomNumber = 0;
  products: Product[] = [];
  productsInOffer: Product[] = [];
  selectedProduct: Product | undefined = undefined;
  // productsService = new ProductsService();

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
    this.productsInOffer = this.productsService.getOffers();
    this.randomNumber = this.productsService.getRandomNumber();
  }

  showDetailsInStock(product: Product)
  {
    this.selectedProduct = product;
    alert(this.selectedProduct.name);
  }

  showDetailsInOffer(product: Product)
  {
    this.selectedProduct = product;
    alert(this.selectedProduct.name);
  }






}
