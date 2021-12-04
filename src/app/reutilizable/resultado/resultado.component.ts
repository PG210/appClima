import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent{
  public var:any[]=[];
  constructor(private clima:ClimaService) { 
  
  }
 get respuesta(){
    
    return Object.values(this.clima.resultados);
  }
  
}
