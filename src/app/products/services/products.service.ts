import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { OffersService } from "./offers.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private random: number = 0;
  constructor(private offersService: OffersService) {
    this.random = Math.random();
    console.log("ProductsService constructor");
  }

  getRandomNumber(): number {
    return this.random;
  }


  getOffers(): Product[] {
    return [
      {  id: 1, name: "Frigorifero", price: this.offersService.getOffer(1), image: "https://th.bing.com/th/id/OIP.NzYJLzgW03Ivi4mgOZTLZgHaHa?pid=ImgDet&rs=1", releaseDate: new Date()},
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
