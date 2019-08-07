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
  selector: 'ui-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['../input.component.scss'],
})
export class SelectInputComponent implements OnInit {
  @Input() inputId: string;
  @Input() title: string;

  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('inputField', { static: false }) private inputField: ElementRef;

  ngOnInit() {
    if (!!this.inputId) { return; }
    this.inputId = new Date().getTime().toString();
  }

  public clear() {
    this.inputField.nativeElement.value = '';
  }

  public onChange(value: any) {
    this.onValueChange.emit(value);
  }
}
