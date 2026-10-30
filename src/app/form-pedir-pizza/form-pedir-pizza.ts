import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/Pizza';
import { FormControl, ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';

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
    horaEntrega: new FormControl(''),
    direccionEntrega: new FormControl(''),
    metodoDePago: new FormControl(''),
    numeroTelefono: new FormControl(''),
    numeroTarjeta: new FormControl(''),
    caducidadTarjeta: new FormControl(''),
    cvvTarjeta: new FormControl('')
  });

  ngOnInit() {
    let pizzasCarrito = history.state.pizzas as Pizza[] | undefined;

    if (pizzasCarrito) {
      for (let pizza of pizzasCarrito) {

        let indice = this.pedirPizza.controls.tipoPizza.value.indexOf(pizza.nombre);

        if (indice === -1) {
          this.pedirPizza.controls.tipoPizza.push(new FormControl(pizza.nombre));
          this.pedirPizza.controls.cantidad.push(new FormControl(1));
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
    this.pedirPizza.controls.tipoPizza.push(new FormControl(''));
    this.pedirPizza.controls.cantidad.push(new FormControl(1));
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
}