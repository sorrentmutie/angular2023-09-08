import { Component } from '@angular/core';
import { MyHero } from '../my-hero';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.css']
})
export class MyHeroComponent {

  hero = new MyHero(1, 'Capitan Salvatore', 'Magia', 'Salvatore Sorrentino');
  powers = ['Magia', 'Volare', 'Super forza', 'Super velocità'];

  submit(){
    console.log(this.hero);
  }
}
