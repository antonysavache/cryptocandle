import {Component, Input, OnInit} from '@angular/core';
import {TwoTableDataInterface} from '../../shared/interfaces/two-table-data.interface';

@Component({
  selector: 'app-two-column-table',
  templateUrl: './two-column-table.component.html',
  styleUrls: ['./two-column-table.component.scss']
})
export class TwoColumnTableComponent implements OnInit {

@Input() tableData!: TwoTableDataInterface[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
