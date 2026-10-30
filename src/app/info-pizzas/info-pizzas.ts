import { Component, signal } from '@angular/core';
import { CardPizza } from '../card-pizza/card-pizza';
import { Pizza } from '../../models/Pizza';
import { pizzas } from '../../models/pizzas';
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

  pizzas = pizzas;

  pizzasFiltradas = signal<Pizza[]>(this.pizzas);

}