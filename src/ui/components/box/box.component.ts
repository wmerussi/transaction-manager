import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Input() hide: boolean;
}
