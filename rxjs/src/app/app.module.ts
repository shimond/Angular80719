import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountEditorComponent } from './count-editor/count-editor.component';
import { CountViewerComponent } from './count-viewer/count-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CountEditorComponent,
        CountViewerComponent,
        ProductsListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
