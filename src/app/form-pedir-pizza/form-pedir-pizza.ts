import { Component, input, signal } from '@angular/core';
import { Pizza } from '../models/Pizza';
import { FormControl, ReactiveFormsModule, FormGroup, FormArray, AbstractControl, ValidationErrors  } from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-pedir-pizza',
  styleUrl: './form-pedir-pizza.scss',
  templateUrl: './form-pedir-pizza.html',
})

export class FormPedirPizza {

  pedirPizza = new FormGroup({
    tipoPizza: new FormArray([
      new FormControl('')
    ]),
    cantidad: new FormArray([
      new FormControl(1)
    ]),
    horaEntrega: new FormControl(''),
    direccionEntrega: new FormControl(''),
    metodoDePago: new FormControl(''),
    numeroTelefono: new FormControl(''),
    numeroTarjeta: new FormControl(''),
    caducidadTarjeta: new FormControl(''),
    cvvTarjeta: new FormControl('')
  });


  pizzas = input.required<Pizza[]>();


  anadirPizza() {
    this.pedirPizza.controls.tipoPizza.push(new FormControl(''));
    this.pedirPizza.controls.cantidad.push(new FormControl(1));
  }

}