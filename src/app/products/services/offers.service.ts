import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor() { }

  getOffer(id: number): number {
    return 0.8;
  }
}
