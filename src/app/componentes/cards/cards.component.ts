import { Component, Input, OnInit } from '@angular/core';
import { Passaro } from 'src/app/entities/passaro';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() passaroEntity?: Passaro;
  constructor() {}

  ngOnInit(): void {}
}
