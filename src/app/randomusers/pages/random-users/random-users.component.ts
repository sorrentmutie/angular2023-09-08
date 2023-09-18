import { Component } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { Observable } from 'rxjs';
import { RandomUsersResponse, Result } from '../../models/random-users';

@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.css']
})
export class RandomUsersComponent {
  ObservableUsers:
    Observable<Result[]> | undefined = undefined;

  constructor(private service: RandomUserService) {
   this.ObservableUsers = this.service.getBetterRandomUsers(20);

  // this.service.getRandomUsers().subscribe(response => {
  //       const results = response.results;
  //       const male = results.filter(x => x.gender == 'male')
  //     });
  //   }
  }
}
