import { Component, signal } from '@angular/core';
import { CardPizza } from '../card-pizza/card-pizza';
import { Pizza } from '../models/Pizza';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-info-pizzas',
  imports: [CardPizza],
  templateUrl: './info-pizzas.html',
  styleUrl: './info-pizzas.scss',
})
export class InfoPizzas {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  irAlCarrito() {
    this.router.navigate(['/formulario-pedir-pizzas'], {
      state: { pizzas: this.carrito() }
    });
  }

  metodoPago = "";

  carrito = signal<Pizza[]>([]);

  anadirAlCarrito(pizza: Pizza) {
    this.carrito.update(pizzas => [...pizzas, pizza]);
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      let busqueda = params.get('busqueda');
      if (busqueda == null) {
        busqueda = '';
      }
      this.hacerBusqueda(busqueda);
    });
  }

  public hacerBusqueda(ingredienteBusqueda: string) {

    if (ingredienteBusqueda == "") {
      this.pizzasFiltradas.set(this.pizzas);
    } else {
      let pizzasEncontradas: Pizza[] = [];

      for (let pizza of this.pizzas) {
        for (let ingrediente of pizza.ingredientes) {
          if (ingrediente.toLowerCase().includes(ingredienteBusqueda.toLowerCase())) {
            pizzasEncontradas.push(pizza);
            break;
          }
        }
      }

      this.pizzasFiltradas.set(pizzasEncontradas);
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

  pizzasFiltradas = signal<Pizza[]>(this.pizzas);

}