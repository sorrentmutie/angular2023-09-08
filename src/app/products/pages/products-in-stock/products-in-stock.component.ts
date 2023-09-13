import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-in-stock',
  templateUrl: './products-in-stock.component.html',
  styleUrls: ['./products-in-stock.component.css']
})
export class ProductsInStockComponent {

  products: Product[] = [];
  productsInOffer: Product[] = [];
  selectedProduct: Product | undefined = undefined;;

  constructor() {
    this.products = this.getProducts();
    this.productsInOffer = this.getOffers();
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




  getOffers(): Product[] {
    return [
      {  id: 1, name: "Frigorifero", price: 1000, image: "https://th.bing.com/th/id/OIP.NzYJLzgW03Ivi4mgOZTLZgHaHa?pid=ImgDet&rs=1", releaseDate: new Date()},
    ];

  }

  getProducts() : Product[] {
    return [
      {  id: 1, name: "Frigorifero", price: 1000, image: "https://th.bing.com/th/id/OIP.NzYJLzgW03Ivi4mgOZTLZgHaHa?pid=ImgDet&rs=1", releaseDate: new Date()},
      {  id: 2, name: "TV", price: 2000, image: "https://th.bing.com/th/id/OIP.NzYJLzgW03Ivi4mgOZTLZgHaHa?pid=ImgDet&rs=1", releaseDate: new Date()},
      {  id: 3, name: "Forno", price: 3000,  image: "https://th.bing.com/th/id/OIP.NzYJLzgW03Ivi4mgOZTLZgHaHa?pid=ImgDet&rs=1", releaseDate: new Date()}
    ];
   }



}
