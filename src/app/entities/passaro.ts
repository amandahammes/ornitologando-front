export class Passaro {

  id?: number;
  nomePopular: string = "";
  nomeCientifico: string = "";
  coloracao: string = "";
  img: string = "";
  constructor() {  }

  toJson(json: any) {
    this.id = json["id"],
    this.nomePopular = json["nomePopular"],
    this.nomeCientifico = json["nomeCientifico"],
    this.coloracao = json["coloracao"],
    this.img = json["img"]
  }
}
