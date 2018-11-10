import { Player } from './../../models/player.model';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-round-result',
  templateUrl: './round-result.component.html',
  styleUrls: ['./round-result.component.css']
})
export class RoundResultComponent implements OnInit {
  players: Player[];
  date: Date;
  

  constructor() { 
    this.players = [{id: 1, name: 'Przemek', surname: 'Trzaska'} as Player, 
                    {id: 2, name: 'Wojtek', surname: 'Chmielewski'} as Player,
                    {id: 1, name: 'Piotr', surname: 'Roda'} as Player];
  }

  ngOnInit() {
  }

}
