import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/Pizza';
import { pizzas } from '../../models/pizzas';
import { FormControl, ReactiveFormsModule, FormGroup, FormArray, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-pedir-pizza',
  styleUrl: './form-pedir-pizza.scss',
  templateUrl: './form-pedir-pizza.html',
})
export class FormPedirPizza implements OnInit {

  pedirPizza = new FormGroup({
    tipoPizza: new FormArray<FormControl<string | null>>([]),
    cantidad: new FormArray<FormControl<number | null>>([]),

    horaEntrega: new FormControl('', [
      Validators.required
    ]),

    direccionEntrega: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),

    metodoDePago: new FormControl('', [
      Validators.required
    ]),

    numeroTelefono: new FormControl('', [
      Validators.pattern('^[0-9]{9}$')
    ]),

    numeroTarjeta: new FormControl('', [
      Validators.pattern('^[0-9]{16}$')
    ]),

    caducidadTarjeta: new FormControl(''),

    cvvTarjeta: new FormControl('', [
      Validators.pattern('^[0-9]{3,4}$')
    ])
  });

  constructor(private router: Router) { }

  ngOnInit() {
    let pizzasCarrito: Pizza[] = [];

    if (history.state.pizzas != null) {
      pizzasCarrito = history.state.pizzas as Pizza[];
    }

    if (pizzasCarrito) {
      for (let pizza of pizzasCarrito) {

        let indice = this.pedirPizza.controls.tipoPizza.value.indexOf(pizza.nombre);

        if (indice === -1) {
          this.pedirPizza.controls.tipoPizza.push(
            new FormControl(pizza.nombre, Validators.required)
          );

          this.pedirPizza.controls.cantidad.push(
            new FormControl(1, [
              Validators.required,
              Validators.min(1),
              Validators.pattern('^[0-9]+$')
            ])
          );
        } else {
          let control = this.pedirPizza.controls.cantidad.at(indice);

          if (control.value != null) {
            control.setValue(control.value + 1);
          } else {
            control.setValue(1);
          }
        }
      }
    }

    if (this.pedirPizza.controls.tipoPizza.length === 0) {
      this.anadirPizza();
    }
  }

  anadirPizza() {
    this.pedirPizza.controls.tipoPizza.push(
      new FormControl('', Validators.required)
    );

    this.pedirPizza.controls.cantidad.push(
      new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[0-9]+$')
      ])
    );
  }

  obtenerPrecio(nombre: string | null): number {
    let pizza = this.pizzas.find(p => p.nombre === nombre);

    if (pizza) {
      return pizza.precio;
    }

    return 0;
  }

  obtenerTotal(): number {
    let total = 0;

    for (let i = 0; i < this.pedirPizza.controls.tipoPizza.length; i++) {
      let nombre = this.pedirPizza.controls.tipoPizza.at(i).value;
      let cantidad = this.pedirPizza.controls.cantidad.at(i).value;

      if (cantidad != null && cantidad > 0) {
        total += this.obtenerPrecio(nombre) * cantidad;
      }
    }

    return total;
  }

  mostrarErrores = false;

  confirmarPedido() {
    this.mostrarErrores = true;

    if (this.pedirPizza.invalid) {
      this.pedirPizza.markAllAsTouched();
      return;
    }

    this.limpiarFormulario();
    this.pedidoConfirmado = true;

    setTimeout(() => {
      this.pedidoConfirmado = false;
    }, 3000);
  }

  limpiarFormulario() {
    this.pedirPizza.reset();

    this.pedirPizza.controls.tipoPizza.clear();
    this.pedirPizza.controls.cantidad.clear();

    this.anadirPizza();

    this.mostrarErrores = false;

    setTimeout(() => {
      document.getElementById('selectorPizza0')?.focus();
    });
  }

  pedidoConfirmado = false;



  pizzas = pizzas;

}