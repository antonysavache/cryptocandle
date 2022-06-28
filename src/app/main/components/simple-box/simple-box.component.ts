import { Component, Input, OnInit } from '@angular/core';
import { MarkUpDataInterface } from '../../../shared/interfaces/mark-up-data.interface';

@Component({
  selector: 'app-simple-box',
  templateUrl: './simple-box.component.html',
  styleUrls: ['./simple-box.component.scss']
})
export class SimpleBoxComponent implements OnInit {

  @Input() markupData!: MarkUpDataInterface;

  isBodyExpanded = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
