
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; //debe ir de tipo html input para que agarre el value

  constructor(private clim: ClimaService) { }//inyectar el servicio
  
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;//captura el dato del input
     this.clim.buscarClim(valor);
     console.log(valor);
     this.txtBuscar.nativeElement.value=" ";
  }
 

}
