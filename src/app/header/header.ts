import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  busquedaForm = new FormGroup({
    busqueda: new FormControl('')
  });

  textoBusqueda = output<string>();

  public iniciarBusqueda() {
    this.textoBusqueda.emit(this.busquedaForm.value.busqueda ?? '');
  }

}