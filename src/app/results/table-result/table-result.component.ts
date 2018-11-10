import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/result.model';

const test_data: Result[] = [
  {player: {id: 1, name: 'Piotr', surname: 'Roda'}, bestScore: 125, dnf: false, doubleOut: true, series: 7, throws: 2},
  {player: {id: 2, name: 'Wojtek', surname: 'Chmielewski'}, bestScore: 85, dnf: false, doubleOut: true, series: 5, throws: 2},
  {player: {id: 3, name: 'Andrzej', surname: 'Ceremus'}, bestScore: 100, dnf: false, doubleOut: false, series: 10, throws: 1},
  {player: {id: 4, name: 'Rafał', surname: 'Sztormowski'}, bestScore: 72, dnf: false, doubleOut: false, series: 6, throws: 3}
];

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.css']
})
export class TableResultComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'series', 'throws', 'total', '2out', 'dnf', 'record', 'points'];
  dataSource = test_data;

  constructor() { }

  ngOnInit() {    
  }

}
