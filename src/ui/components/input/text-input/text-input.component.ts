import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ui-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['../input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() inputId: string;
  @Input() isCurrency: boolean;
  @Input() title: string;

  @Output() onEnterKey: EventEmitter<any> = new EventEmitter<any>();
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('inputField', { static: false }) private inputField: ElementRef;

  ngOnInit() {
    if (!!this.inputId) { return; }
    this.inputId = new Date().getTime().toString();
  }

  public clear() {
    this.inputField.nativeElement.value = '';
  }

  public currencyMask(value: string): string {
    let filteredNumbers = this.filterNumbers(value);

    if (filteredNumbers.length < 3) {
      filteredNumbers = filteredNumbers.padStart(3, '0');
    }

    const formattedCurrency = filteredNumbers.split('').reverse().reduce((value, num, i) => {
      let v = value.concat(num);

      if (i === 1) { v = v.concat(','); }

      if (i > 1 && (i - 1) % 3 === 0 && (i + 1) !== filteredNumbers.length) { v = v.concat('.'); }

      return v;
    }, []).reverse().join('');

    return `R$ ${formattedCurrency}`;
  }

  public filterNumbers(value: string): string {
    return value.replace(/\D+/g, '').replace(/^0+|\s+/, '');
  }

  public onKeyUp(event: any) {
    if (event.which === 13 || event.keyCode === 13) {
      return this.onEnterKey.emit();
    }

    let emitValue = event.target.value;

    if (this.isCurrency) {
      this.inputField.nativeElement.value = this.currencyMask(emitValue);
      emitValue = Number(this.filterNumbers(emitValue)) / 100;
    }

    this.onValueChange.emit(emitValue.toString());
  }
}
