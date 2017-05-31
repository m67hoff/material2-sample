import { NgModule } from '@angular/core';
import {
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdTabsModule,
    MdDialogModule,
    MdMenuModule,
    MdSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
        MdSidenavModule,
        MdToolbarModule,
        MdButtonModule,
        MdIconModule,
        MdCardModule,
        MdCheckboxModule,
        MdRadioModule,
        MdInputModule,
        MdListModule,
        MdProgressSpinnerModule,
        MdProgressBarModule,
        MdTabsModule,
        MdDialogModule,
        MdMenuModule,
        MdSnackBarModule
    ],
    exports: [
        MdSidenavModule,
        MdToolbarModule,
        MdButtonModule,
        MdIconModule,
        MdCardModule,
        MdCheckboxModule,
        MdRadioModule,
        MdInputModule,
        MdListModule,
        MdProgressSpinnerModule,
        MdProgressBarModule,
        MdTabsModule,
        MdDialogModule,
        MdMenuModule,
        MdSnackBarModule
    ]
})
export class MaterialImportModule {
}