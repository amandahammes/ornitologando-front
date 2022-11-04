import { OrnitologandoService } from './services/ornitologando.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './componentes/formulario/formulario.component'
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FormularioComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   //preciso de componente de requisições HTTP
    FormsModule, NgbModule,      //preciso de componente de manipulação de formulários
    ReactiveFormsModule
  ],
  providers: [OrnitologandoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
