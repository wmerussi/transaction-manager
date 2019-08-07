import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { MainHeaderComponent } from './main-header/main-header.component';

/** Modules */
import { UiModule } from '../../ui/ui.module';

@NgModule({
  declarations: [
    MainHeaderComponent,
  ],
  exports: [
    MainHeaderComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ComponentsModule { }
