import { Route } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
import { KefelComponent } from './kefel/kefel.component';
import { KefelResultComponent } from './kefel-result/kefel-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const APP_ROUTES: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'kefel', component: KefelComponent },
    { path: 'result/:xParam/:yParam', component: KefelResultComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404' }
];
