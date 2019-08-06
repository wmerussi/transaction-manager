import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-titled-input',
  templateUrl: './titled-input.component.html',
  styleUrls: ['./titled-input.component.scss'],
})
export class TitledInputComponent {
  @Input() inputId: string;
  @Input() title: string;
}
