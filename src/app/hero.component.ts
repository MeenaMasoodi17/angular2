import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
  
    ngOnInit(): void {
      this.getHeroes();
    }
  
    constructor(
      private router: Router,
      private heroService: HeroService
    ){}
  
    onSelect(hero: Hero) {
      this.selectedHero = hero;
    }
  
    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes=heroes);
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}