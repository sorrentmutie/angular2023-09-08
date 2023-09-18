import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {
   randomNumberInHeader = 0;

   myObservable = of(1,2,3,4,5,6,7,8,9,10);
   subscription: Subscription | undefined = undefined;
   constructor(private service: ProductsService){
    this.randomNumberInHeader = this.service.getRandomNumber();

     const myObserver = {
      next : (x:number) => console.log('Observer got a next value: ' + x),
      complete: () => console.log('Observer got a complete notification'),
      error: (err: Error) => console.error('Observer got an error: ' + err),
     }
     this.subscription = this.myObservable.subscribe(myObserver);

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
