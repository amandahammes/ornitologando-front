import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './componentes/cards/cards.component';
//import { InserirPassaroComponent } from './componentes/inserir-passaro/inserir-passaro.component'
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'inserir', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
