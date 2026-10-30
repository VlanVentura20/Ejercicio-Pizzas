import { Component, input, output } from '@angular/core';
import { Pizza } from '../../models/Pizza';

@Component({
  imports: [],
  selector: 'app-card-pizza',
  styleUrl: './card-pizza.scss',
  templateUrl: './card-pizza.html',
})
export class CardPizza {

  pizza = input.required<Pizza>();

  pizzaAnadida = output<Pizza>();

  anadirAlCarrito() {
    this.pizzaAnadida.emit(this.pizza());
  }

}