import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['../input.component.scss'],
})
export class SelectInputComponent implements OnInit {
  @Input() inputId: string;
  @Input() title: string;

  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (!!this.inputId) { return; }
    this.inputId = new Date().getTime().toString();
  }

  public onChange(value: any) {
    this.onValueChange.emit(value);
  }
}
