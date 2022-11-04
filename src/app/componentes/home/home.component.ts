import { Component, OnInit } from '@angular/core';
import { Passaro } from 'src/app/entities/passaro';
import { OrnitologandoService } from 'src/app/services/ornitologando.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPassaros: Passaro[] = []

  constructor(private passarosService: OrnitologandoService) {

  }

  ngOnInit(): void {
    this.recuperarTodosPassaros()
  }

  async recuperarTodosPassaros() {
    const resultado = await this.passarosService.recuperarTodos()
    if (resultado instanceof Error) {return ""}
    this.listaPassaros = resultado
    return resultado
  }

}

