import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** Components */
import { BoxComponent } from './box/box.component';
import { ButtonComponent } from './button/button.component';
import { CurrencyComponent } from './currency/currency.component';
import { IconComponent } from './icon/icon.component';
import { SelectInputComponent } from './input/select-input/select-input.component';
import { TextInputComponent } from './input/text-input/text-input.component';
import { TitledInputComponent } from './input/titled-input/titled-input.component';

@NgModule({
  declarations: [
    BoxComponent,
    ButtonComponent,
    CurrencyComponent,
    IconComponent,
    SelectInputComponent,
    TextInputComponent,
    TitledInputComponent,
  ],
  exports: [
    BoxComponent,
    ButtonComponent,
    CurrencyComponent,
    IconComponent,
    SelectInputComponent,
    TextInputComponent,
    TitledInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ComponentsModule { }
