import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { $ } from 'protractor';
import { Product } from '../models/product.model';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    products: Product[] = [];
    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.productsService.productsChanged$.subscribe(res => {
            this.products = res;
        });
    }
    deleteProduct(id: number) {
        this.productsService.deleteProduct(id).subscribe(x => {
            alert(`product (${id}) deleted...`);
        }, e => {
            alert('Delete failed. try again azov ti.');
        });
    }
}
