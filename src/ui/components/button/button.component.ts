import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() id: string = new Date().getTime().toString();
  @Input() type: string = 'default';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  public getClasses(): string {
    return `button--${this.type}`;
  }

  public click() {
    this.onClick.emit();
  }
}
