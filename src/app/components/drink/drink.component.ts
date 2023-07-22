import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent {
  @Input() drink!: Drink;
}
