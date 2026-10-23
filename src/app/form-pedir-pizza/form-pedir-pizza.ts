import { Component, input, signal } from '@angular/core';

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

}

export interface Pizza {
  nombre: string;
  precio: number;
  imagen: string;
  ingredientes: string[];
}