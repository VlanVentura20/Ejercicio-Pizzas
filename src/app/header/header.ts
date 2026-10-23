import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  ingredienteBusqueda = "";

  textoBusqueda = output<string>();

  public iniciarBusqueda() {
    this.textoBusqueda.emit(this.ingredienteBusqueda);
  }

}