import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import {app_routing} from './app.routes';
import { InicioComponent } from './components/inicio/inicio.component';
import { RespuestasComponent } from './components/respuestas/respuestas.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InicioComponent,
    RespuestasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
