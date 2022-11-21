import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private monster: (Monster | Fighter | SimpleFighter)[];

  constructor(player: Fighter, monster: (Monster | Fighter | SimpleFighter)[]) {
    super(player);
    this.monster = monster;
  }

  fight(): number {
    const attacks = this.monster.map((attack) => attack.strength);
    const totalAttack = attacks.reduce((acc, curr) => acc + curr, 0);
    const lives = this.monster.map((life) => life.lifePoints);
    const totalLives = lives.reduce((acc, curr) => acc + curr, 0);
    const x: number = totalLives / this.player.strength;
    const y: number = this.player.lifePoints / totalAttack;

    if (x <= y) {
      return 1;
    } 
    return -1;
  }
}