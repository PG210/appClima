import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  public resultados:any[]=[];//aqui llega la respuesta de la api
  hayError: boolean=false;//manejo de errores

  constructor( private http: HttpClient) { //inyectamos el servicio para utilizar
  }
  //crear la funcion para buscar pais
  buscarClim(res:String){
   
    if(res.trim().length!=0){
      res=res.trim().toLocaleLowerCase();
      console.log(res)
    }  

  this.http.get(`http://api.weatherapi.com/v1/current.json?key=7365c1e5ccbe4239834222859210312&q=${res}&aqi=no&output=json`)
  .subscribe((res:any)=>{
   // console.log(res);
      const keys = Object.values(res);//convierte el object a array
     // return this.resultados=keys
     this.resultados=keys;
     console.log(this.resultados);
     return this.resultados;//almacenar en el array
  },
  (err)=>{this.hayError=true;});
  
  }

}
