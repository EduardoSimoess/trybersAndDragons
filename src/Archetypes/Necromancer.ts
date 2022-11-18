import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public type_: EnergyType;
  private static _creations = 0;

  constructor(name: string) {
    super(name);
    this.type_ = 'mana';
    Necromancer._creations += 1;
  }

  static createdArchetypeInstances(): number {
    return this._creations;
  }

  get energyType(): EnergyType {
    return this.type_;
  }
}