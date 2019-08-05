import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Modules */
import { UiModule } from '../ui/ui.module';

/** Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
