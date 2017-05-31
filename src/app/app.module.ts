import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialImportModule } from './material-import.module';

import { AppComponent, DialogContent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialImportModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule {}
