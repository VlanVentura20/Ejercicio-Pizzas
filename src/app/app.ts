import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  constructor(private router: Router) {}

  public hacerBusqueda(ingredienteBusqueda: string) {
    this.router.navigate(['/informacion-pizzas'], {
      queryParams: { busqueda: ingredienteBusqueda }
    });
  }

}