import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
   constructor(private router: Router) {

      let k : unknown | undefined = undefined;
      k = 10;
      k = "10";
      let j = null;


      let a: number = 10;
      a = 20;
      const b = this.doSomething(a);

       const x = {
        a: 12,
        b: "Ciao"
       }

       x.a = 13;

    const z = this.sum(1, 2);


      // let, const
    }

    doSomething(a:number) : string
    {
      return "Hello " + a;
    }

    sum(a: number, b: number): number {
      return a + b;
    }

    navigate(){
      //this.router.navigate(['/random']);
      this.router.navigate(['/stock', 5]);
    }

}
