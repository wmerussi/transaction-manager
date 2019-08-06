import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import pt from '@angular/common/locales/pt';

/** Modules */
import { ComponentsModule } from './components/components.module';
import { UiModule } from '../ui/ui.module';

/** Components */
import { AppComponent } from './app.component';

/** Locale */
registerLocaleData(pt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    UiModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
