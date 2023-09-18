import { Component, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnDestroy {

  //products: Product[] = [];
  //private subscription: Subscription | undefined = undefined;
  productsObservable: Observable<Product[]> | undefined = undefined;


  constructor(private service: ProductsService) {
    // this.subscription = this.service.getProductsAsObservable()
    //   .subscribe(  (data: Product[]) => {
    //     this.products = data;
    //   });

    this.productsObservable = this.service.getProductsAsObservable();

  }
  ngOnDestroy(): void {
   // this.subscription?.unsubscribe();
  }
}
