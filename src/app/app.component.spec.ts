import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent, LOCALSTORAGE_ITEM } from './app.component';
import { ComponentsModule } from './components/components.module';
import { UiModule } from '../ui/ui.module';
import { Item, ItemType } from './models/item.model';

describe('AppComponent', () => {
  let addTransactionButton: HTMLButtonElement;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  localStorage.removeItem(LOCALSTORAGE_ITEM);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        ComponentsModule,
        UiModule,
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      addTransactionButton = fixture.nativeElement.querySelector('#add-transaction');
      fixture.detectChanges();
    });
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should fail to add a new transaction when nothing is filled', (done) => {
    addTransactionButton.click();

    component.addTransaction();
    expect(component.addTransaction()).toBeTruthy();
    done();
  });

  it('should fail when item type is empty', (done) => {
    component.item = new Item({
      name: 'Lote com 10 notebooks',
      value: 110674.43,
    });
    addTransactionButton.click();

    component.addTransaction();
    expect(component.isIncomplete).toBeTruthy();
    done();
  });

  it('should fail when item name is empty', (done) => {
    component.item = new Item({
      type: ItemType.SELL,
      value: 110674.43,
    });
    addTransactionButton.click();

    component.addTransaction();
    expect(component.isIncomplete).toBeTruthy();
    done();
  });

  it('should fail when item value is empty', (done) => {
    component.item = new Item({
      type: ItemType.SELL,
      name: 'Lote com 10 notebooks',
    });
    addTransactionButton.click();

    component.addTransaction();
    expect(component.isIncomplete).toBeTruthy();
    done();
  });

  it('should succeed when all fields are filled', (done) => {
    component.item = new Item({
      type: ItemType.SELL,
      name: 'Lote com 10 notebooks',
      value: 110674.43,
    });
    addTransactionButton.click();

    component.addTransaction();
    expect(component.isIncomplete).toBeFalsy();
    done();
  });

  it('should display LOSS when total value is less than 0', (done) => {
    component.items = [];

    component.item = new Item({
      type: ItemType.BUY,
      name: 'Lote com 10 notebooks',
      value: 120674.43,
    });
    addTransactionButton.click();
    component.addTransaction();

    component.item = new Item({
      type: ItemType.SELL,
      name: 'Lote com 10 notebooks',
      value: 110674.43,
    });
    addTransactionButton.click();
    component.addTransaction();

    expect(component.getProfitStatus()).toBe('prejuízo');
    done();
  });

  it('should display PROFIT when total value is equal or grater than 0', (done) => {
    component.items = [];

    component.item = new Item({
      type: ItemType.BUY,
      name: 'Lote com 10 notebooks',
      value: 100674.43,
    });
    addTransactionButton.click();
    component.addTransaction();

    component.item = new Item({
      type: ItemType.SELL,
      name: 'Lote com 10 notebooks',
      value: 110674.43,
    });
    addTransactionButton.click();
    component.addTransaction();

    expect(component.getProfitStatus()).toBe('lucro');
    done();
  });
});
