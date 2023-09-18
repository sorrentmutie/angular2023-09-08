import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  parameter: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.parameter = route.snapshot.paramMap.get('id');
   }
}
