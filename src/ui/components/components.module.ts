import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { IconComponent } from './icon/icon.component';
import { SelectInputComponent } from './input/select-input/select-input.component';
import { TextInputComponent } from './input/text-input/text-input.component';
import { TitledInputComponent } from './input/titled-input/titled-input.component';

@NgModule({
  declarations: [
    IconComponent,
    SelectInputComponent,
    TextInputComponent,
    TitledInputComponent,
  ],
  exports: [
    IconComponent,
    SelectInputComponent,
    TextInputComponent,
    TitledInputComponent,
  ],
  imports: [
    CommonModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ComponentsModule { }
