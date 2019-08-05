import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';

@NgModule({
  exports: [
    ComponentsModule,
  ],
  imports: [
    CommonModule,
  ],
})
export class UiModule { }
