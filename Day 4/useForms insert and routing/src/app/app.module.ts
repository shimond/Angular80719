import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAddProductComponent } from './edit-add-product/edit-add-product.component';
import { ErrorViewerComponent } from './error-viewer/error-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TestComponent } from './test/test.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsEditInsertContainerComponent } from './products-edit-insert-container/products-edit-insert-container.component';
@NgModule({
    declarations: [
        AppComponent,
        EditAddProductComponent,
        ErrorViewerComponent,
        LayoutComponent,
        TestComponent,
        ProductListComponent,
        ProductsHomeComponent,
        ProductsEditInsertContainerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatExpansionModule,
        HttpClientModule,
        MatTableModule,
        CdkTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
