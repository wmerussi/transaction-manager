import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['../input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() inputId: string;
  @Input() title: string;

  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    if (!!this.inputId) { return; }
    this.inputId = new Date().getTime().toString();
  }

  public onChange(value: string) {
    this.onValueChange.emit(value);
  }
}
