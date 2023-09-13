import { Component } from '@angular/core';
import { Product } from '../products/models/product';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
   products: Product[] = [];
   title = "Elenco Prodotti";
   //title: string = "Products";

   constructor() {
     this.products = this.getProducts();
   }

   getProducts() : Product[] {
    return [
      {  id: 1, name: "Frigorifero", price: 1000, image: "https://th.bing.com/th/id/OIP.NzYJLzgW03Ivi4mgOZTLZgHaHa?pid=ImgDet&rs=1", releaseDate: new Date()},
      {  id: 2, name: "TV", price: 2000, image: "https://th.bing.com/th/id/OIP.NzYJLzgW03Ivi4mgOZTLZgHaHa?pid=ImgDet&rs=1", releaseDate: new Date()},
      {  id: 3, name: "Forno", price: 3000,  image: "https://th.bing.com/th/id/OIP.NzYJLzgW03Ivi4mgOZTLZgHaHa?pid=ImgDet&rs=1", releaseDate: new Date()}


    ];
   }


}
