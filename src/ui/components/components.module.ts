import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Icon } from './icon/icon.component';

@NgModule({
  declarations: [
    Icon,
  ],
  exports: [
    Icon,
  ],
  imports: [
    CommonModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ComponentsModule { }
