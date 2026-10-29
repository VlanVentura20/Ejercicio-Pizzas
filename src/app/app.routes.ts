import { Routes } from '@angular/router';
import { InfoPizzas } from './info-pizzas/info-pizzas';
import { FormPedirPizza } from './form-pedir-pizza/form-pedir-pizza';

export const routes: Routes = [
  { path: '', component: InfoPizzas },
  { path: 'informacion-pizzas', component: InfoPizzas },
  { path: 'formulario-pedir-pizzas', component: FormPedirPizza }
];
