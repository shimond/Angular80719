import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { Subscription, Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    // products: Product[] = [];
    products$: Observable<Product[]>;
    keywordChanged$ = new BehaviorSubject<string>('');

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.products$ = combineLatest([
            this.productsService.productsChanged$,
            this.keywordChanged$.pipe(debounceTime(500))])
            .pipe(map(([list, keyword]) => list.filter(o => o.name.indexOf(keyword) !== -1)));





    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    doSearch(str: string) {
        this.keywordChanged$.next(str);
    }
    deleteProduct(id: number) {
        this.productsService.deleteProduct(id).subscribe(x => {
            // alert(`product (${id}) deleted...`);
        }, e => {
            alert('Delete failed. try again azov ti.');
        });
    }
}
