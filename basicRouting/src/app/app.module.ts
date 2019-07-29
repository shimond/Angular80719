import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.module.routing';
import { KefelComponent } from './kefel/kefel.component';
import { KefelResultComponent } from './kefel-result/kefel-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        KefelComponent,
        KefelResultComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES)
        // { enableTracing: true }
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
