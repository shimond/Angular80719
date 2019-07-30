import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAddProductComponent } from './edit-add-product/edit-add-product.component';
import { ErrorViewerComponent } from './error-viewer/error-viewer.component';

@NgModule({
    declarations: [
        AppComponent,
        EditAddProductComponent,
        ErrorViewerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
