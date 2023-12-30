import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:  string = 'ironman'
  public age:   number = 37;

  get capitalizedName():string
  {
    return this.name.toUpperCase();
  }

  getheroDescription():string
  {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void
  {
    this.name = 'spiterman';
  }

  changeAge():void
  {
    this.age = 18;
  }

  resetValues():void
  {
    this.name = 'ironman';
    this.age = 37;
  }

}
