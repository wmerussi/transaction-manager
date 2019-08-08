import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { BreakpointService } from './services/breakpoint.service';
import { DatabaseService } from './services/database.service';

import { Item, ItemType } from './models/item.model';
import { TextInputComponent } from '../ui/components/input/text-input/text-input.component';
import { SelectInputComponent } from '../ui/components/input/select-input/select-input.component';

enum ProfitStatus {
  LOSS = 'prejuízo',
  PROFIT = 'lucro',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatabaseService],
})
export class AppComponent implements OnInit, OnDestroy {
  public hideBox: boolean;
  public isIncomplete: boolean;
  public item: Item = new Item();
  public items: Item[] = [];

  @ViewChild('itemType', { static: false }) private itemType: SelectInputComponent;
  @ViewChild('itemName', { static: false }) private itemName: TextInputComponent;
  @ViewChild('itemValue', { static: false }) private itemValue: TextInputComponent;

  private breakpoint: BreakpointService = new BreakpointService('md');

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.breakpoint.get().subscribe(md => this.hideBox = !md);
    this.items = JSON.parse(this.db.get('transactions')).map(item => new Item(item));
  }

  ngOnDestroy() {
    this.breakpoint.removeListener();
  }

  public addTransaction() {
    if (this.item.isIncomplete()) { return this.isIncomplete = true; }

    const item = Object.assign({}, this.item);
    const items = Object.assign([], this.items);

    this.items = items.concat(item);
    this.db.add('transactions', JSON.stringify(this.items));

    this.itemType.clear();
    this.itemName.clear();
    this.itemValue.clear();
    this.item.clear();
  }

  public getIcon(item: Item) {
    return item.type === ItemType.BUY ? 'minus' : 'plus';
  }

  public getProfitStatus() {
    return this.getTotal() >= 0 ? ProfitStatus.PROFIT : ProfitStatus.LOSS;
  }

  public getTotal(): number {
    return this.items.reduce((total, item) => {
      if (item.type === ItemType.BUY) {
        return total - item.value;
      }

      return total + item.value;
    }, 0);
  }

  public updateField(name: string, value: string | number) {
    this.item[name] = value;
    this.isIncomplete = false;
  }
}
