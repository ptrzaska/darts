import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '../../models/player.model';
import { Result } from '../../models/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result = {} as Result;

  @Output() resultSet = new EventEmitter<Result>()
  @Input() players = [] as Player[];

  constructor() { }

  ngOnInit() {
  }

  setResult(){
    this.resultSet.emit(this.result);
    this.result = {} as Result;
  }

}
