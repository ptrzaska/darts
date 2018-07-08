import { Player } from "./player.model";

export interface Result{
    player: Player;
    series: number;
    throws: number;
    dnf: boolean;
    doubleOut: boolean;
    bestScore: number;
}