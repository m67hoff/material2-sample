import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';

import { MaterialImportModule } from './material-import.module';

import { AppComponent, DialogContentComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialImportModule,
    BrowserAnimationsModule
  ],
  providers: [
    // {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
    // ...
  ],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
