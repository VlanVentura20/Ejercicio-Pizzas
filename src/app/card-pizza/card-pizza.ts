import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card-pizza',
  styleUrl: './card-pizza.scss',
  templateUrl: './card-pizza.html',
})
export class CardPizza {

pizza = input.required<Pizza>();

}

export interface Pizza {
  nombre: string;
  precio: number;
  imagen: string;
  ingredientes: string[];
}