import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RespuestasComponent } from './components/respuestas/respuestas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'test', component: TestComponent },
  { path: 'resultados', component: RespuestasComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''},

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(routes);
