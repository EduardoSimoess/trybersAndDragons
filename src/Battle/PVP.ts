import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
//   private _player: Fighter;
  private player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this.player2 = player2;
  }

  fight(): number {
    const x: number = this.player2.lifePoints / this.player.strength;
    const y: number = this.player.lifePoints / this.player2.strength;

    if (x <= y) {
      return 1;
    } 
    return -1;
  }
}