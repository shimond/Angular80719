import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-products-edit-insert-container',
    templateUrl: './products-edit-insert-container.component.html',
    styleUrls: ['./products-edit-insert-container.component.scss']
})
export class ProductsEditInsertContainerComponent implements OnInit {

    product$: Observable<Product>;
    isNew = true;
    constructor(private productsService: ProductsService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.product$ = this.productsService.currentProduct$;
        this.activatedRoute.params.subscribe(p => {
            if (p.productId) {
                this.isNew = false;
                this.productsService.setCurrentProductById(p.productId);
            } else {
                this.isNew = true;
                this.productsService.setCurrentProductById(-1);
            }
        });
    }

    async onProductEditingFinished(p: Product) {
        try {
            if (!this.isNew) {
                await this.productsService.updateProduct(p);
            } else {
                await this.productsService.insertProduct(p);
            }
            this.router.navigate(['/products']);
        } catch (error) {
            alert(error.errorMessage);
        }
    }

}
