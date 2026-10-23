import { Component, input, signal } from '@angular/core';
import { Pizza } from '../models/Pizza';

@Component({
  imports: [],
  selector: 'app-form-pedir-pizza',
  styleUrl: './form-pedir-pizza.scss',
  templateUrl: './form-pedir-pizza.html',
})

export class FormPedirPizza {

  pizzas = input.required<Pizza[]>();

  metodoPagoSeleccionado = signal<string>("");

  public seleccionarMetodoPago(mp: string) {
    this.metodoPagoSeleccionado.set(mp)
  }

  pizzasSeleccionadas: string[] = [""];

  anadirPizza() {
    this.pizzasSeleccionadas.push("");
  }

  seleccionarPizza(event: Event, indice: number) {
    this.pizzasSeleccionadas[indice] = (event.target as HTMLSelectElement).value;
  }

}