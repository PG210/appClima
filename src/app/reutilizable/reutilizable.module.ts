import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    BuscarComponent,
    ResultadoComponent
  ],
  exports: [
    BuscarComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReutilizableModule { }
