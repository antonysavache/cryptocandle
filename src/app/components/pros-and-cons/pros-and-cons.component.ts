import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pros-and-cons',
  templateUrl: './pros-and-cons.component.html',
  styleUrls: ['./pros-and-cons.component.scss']
})
export class ProsAndConsComponent implements OnInit {

  // @Input() data: any;

  data = {
    pros: ['Простая регистрация', 'Большой выбор валютных пар', 'Выгодные условия торговли', 'Возможность операций в фиате', 'Пополнять счет можно даже с банковской карточки', 'Наличие мобильных приложений'],
    cons: ['Обязательная верификация', 'Отсутствие связи с техподдержкой по электронной почте'],
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
