import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'useRxjs';
    productsCount = 0;
    isViewerVisible = false;

    constructor(private productsService: ProductsService) {
        this.productsService.productsChanged$.pipe(
            map(res => res.length),
            distinctUntilChanged())
            .subscribe(len => this.productsCount = len);

    }


}
