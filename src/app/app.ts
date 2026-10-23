import { Component, output, signal } from '@angular/core';
import { CardPizza } from './card-pizza/card-pizza';
import { FormPedirPizza } from './form-pedir-pizza/form-pedir-pizza';
import { Header } from './header/header';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [CardPizza, FormPedirPizza, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  metodoPago = "";

  textoBusqueda = signal<string>("");

  public hacerBusqueda(ingredienteBusqueda: string) {
    this.pizzasFiltradas = [];
    this.textoBusqueda.set(ingredienteBusqueda);

    for (let pizza of this.pizzas) {
      for (let ingrediente of pizza.ingredientes) {
        if (ingrediente.toLocaleLowerCase().includes(this.textoBusqueda().toLocaleLowerCase())) {
          this.pizzasFiltradas.push(pizza);
          break;
        }
      }
    }



  }

  pizzas = [
    {
      nombre: "Margarita",
      precio: 8.50,
      imagen: "assets/Margarita.jpg",
      ingredientes: ["Tomate", "Mozzarella", "Albahaca"]
    },
    {
      nombre: "Pepperoni",
      precio: 10.00,
      imagen: "assets/Pepperoni.jpg",
      ingredientes: ["Tomate", "Mozzarella", "Pepperoni"]
    },
    {
      nombre: "4 Quesos",
      precio: 11.50,
      imagen: "assets/4 Quesos.jpg",
      ingredientes: ["Mozzarella", "Gorgonzola", "Parmesano", "Emmental"]
    },
    {
      nombre: "Barbacoa",
      precio: 12.00,
      imagen: "assets/Barbacoa.jpg",
      ingredientes: ["Pollo", "Bacon", "Salsa barbacoa", "Queso"]
    },
    {
      nombre: "Hawaiana",
      precio: 10.50,
      imagen: "assets/Hawaiana.jpg",
      ingredientes: ["Tomate", "Mozzarella", "Jamón", "Piña"]
    },
    {
      nombre: "Carbonara",
      precio: 11.00,
      imagen: "assets/Carbonara.jpg",
      ingredientes: ["Nata", "Mozzarella", "Bacon", "Champiñones", "Cebolla"]
    },
    {
      nombre: "Vegetal",
      precio: 9.50,
      imagen: "assets/Vegetal.jpg",
      ingredientes: ["Tomate", "Mozzarella", "Pimiento", "Cebolla", "Champiñones", "Aceitunas"]
    },
    {
      nombre: "Diavola",
      precio: 12.50,
      imagen: "../assets/Diavola.jpg",
      ingredientes: ["Tomate", "Mozzarella", "Salami picante", "Guindilla", "Orégano"]
    }
  ];

  pizzasFiltradas: Pizza[] = this.pizzas;

}

export interface Pizza {
  nombre: string;
  precio: number;
  imagen: string;
  ingredientes: string[];
}