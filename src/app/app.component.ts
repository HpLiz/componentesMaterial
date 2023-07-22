import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './models/character.model';
import { Drink } from './models/drink.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto Apis';
  http = inject(HttpClient);
  characters: Character[] = [];
  drinks: Drink[] = [];

  ngOnInit() {
    this.http
      .get<Character[]>('https://rickandmortyapi.com/api/character?page=2')
      .subscribe((data) => {
        //@ts-ignore
        this.characters = data.results;
      });
    this.http
      .get<Drink[]>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .subscribe((data) => {
        //@ts-ignore
        this.drinks = data.drinks;
      })
  }
}
