import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', //redirije a la vista principal o home
      component:AppComponent,
      pathMatch: 'full'
     },
     
    {
        path: '**', //si ingresa a una ruta diferente siempre regresa al dir raiz
        redirectTo: ''
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}