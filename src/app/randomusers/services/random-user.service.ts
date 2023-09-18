import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { RandomUsersResponse, Result } from '../models/random-users';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private httpClient: HttpClient) { }

  getRandomUsers(): Observable<RandomUsersResponse> {
   return this.httpClient.get<RandomUsersResponse>
        ('https://randomuser.me/api/?results=10');
  }

  getBetterRandomUsers(quantity: number)
  :Observable<Result[]> {

    const url = 'https://randomuser.me/api/?results=' + quantity;

    return  this.httpClient.get<RandomUsersResponse>(url)
       .pipe(
          map(d => d.results),
          map(x => x.filter(y => y.gender === 'female')
        ));

  }


}
