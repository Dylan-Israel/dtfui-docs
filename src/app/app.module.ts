import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DtfuiModule } from 'dtfui';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DtfuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
