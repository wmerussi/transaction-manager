import { Model } from './model';

export enum ItemType {
  BUY = 'buy',
  SELL = 'sell',
}

export class Item extends Model {
  public name: string;
  public type: ItemType;
  public value: number;

  constructor(obj?: any) {
    super(obj);
  }

  public set valueToNumber(value: string) {
    this.value = Number(value);
  }

  public clear() {
    delete this.name;
    delete this.type;
    delete this.value;
  }

  public isIncomplete(): boolean {
    return !this.name || !this.type || !this.value;
  }
}
