import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Passaro } from '../entities/passaro';

@Injectable({
  providedIn: 'root',
})
export class OrnitologandoService {
  constructor(private http: HttpClient) {}

  async adicionarPassaro(passaro: Passaro): Promise<Passaro | Error> {
    try {
      const result = (await lastValueFrom(
        this.http.post("http://localhost:8080/ornitologando/passaro", passaro)
      )) as Passaro;
      alert("Passaro cadastrado")
      return result;
    } catch (error) {
      alert("Erro ao cadastrar")
      return new Error('Não foi possível cadastrar o pássaro.');
    }
  }

  async recuperarPorId(id: number): Promise<Passaro | Error> {
    try {
      const result = (await lastValueFrom(
        this.http.get(`http://localhost:8080/ornitologando/${id}`)
      )) as Passaro;
      return result;
    } catch (error) {
      return new Error('Pássaro não encontrado.');
    }
  }

  async recuperarTodos(): Promise<Passaro[] | Error> {
    try {
      const result = (await lastValueFrom(
        this.http.get('http://localhost:8080/ornitologando/passaro')
      )) as Passaro[];
      return result;
    } catch (error) {
      return new Error('Pássaros não encontrados.');
    }
  }
}
