/* ======================================
IMPORTS
======================================= */

import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { HEROES } from "../mock-heroes"

/* ======================================
DECORATOR / METADATA
======================================= */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})

/* ======================================
CLASS
======================================= */

export class HeroesComponent implements OnInit {

  // this variable represents the array of hard-coded heroes
  // imported above
  heroes = HEROES
  selectedHero?: Hero;

  /* This onSelect function takes one parameter, called
  hero. It will be the custom type of Hero, which we defined
  in an interface file. The function will not return anything,
  so the function type is void. The function sets this
  component's selectedHero property to the hero that is
  passed to the function on click -- this function is bound
  to a click in the template. the hero li that is clicked
  in the DOM is the parameter that gets passed to this function. */
  onSelect(hero: Hero): void {
    this.selectedHero = hero
    console.log(this.selectedHero);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
