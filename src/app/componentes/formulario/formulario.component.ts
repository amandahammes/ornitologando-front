import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Passaro } from 'src/app/entities/passaro';
import { OrnitologandoService } from 'src/app/services/ornitologando.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formPassaro!: FormGroup;

  constructor(private FormBuilder: FormBuilder, private service: OrnitologandoService) { }

  ngOnInit(): void {
    this.createForm(new Passaro());
  }


  createForm(passaro: Passaro) {
    this.formPassaro = new FormGroup({
      nomePopular: new FormControl(passaro.nomePopular),
      nomeCientifico: new FormControl(passaro.nomeCientifico),
      coloracao: new FormControl(passaro.coloracao),
      img: new FormControl(passaro.img)
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formPassaro.value)
    if (this.formPassaro.valid) {
      this.service.adicionarPassaro(this.formPassaro.value)
      console.log("Submetido")
    }

    // Usar o método reset para limpar os controles na tela
    this.formPassaro.reset(new  Passaro());
  }
}
