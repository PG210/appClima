import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotnavModule } from './fotnav/fotnav.module';
import { ReutilizableModule } from './reutilizable/reutilizable.module';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FotnavModule,
    ReutilizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
