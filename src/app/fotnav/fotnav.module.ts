import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    FooterComponent, //componente a exportar
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FotnavModule { }
