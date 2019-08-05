import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class Icon {
  @Input() name: string;
  @Input() size: 'small' | 'base' = 'base';
  @Input() verticalAlign: string;

  public getClasses(): Object {
    return {
      [`icon--${this.size}`]: !!this.size,
      [`icon--${this.verticalAlign}`]: !!this.verticalAlign,
    };
  }
}
