import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { filter, debounce, debounceTime } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
@Component({
    selector: 'app-edit-add-product',
    templateUrl: './edit-add-product.component.html',
    styleUrls: ['./edit-add-product.component.scss']
})
export class EditAddProductComponent implements OnInit, OnChanges {
    editInsertText = 'Edit';
    productFormGroup: FormGroup;
    @Input() product: Product = { name: null, price: 0, image: null, detail: null };
    @Output() productEditingFinished = new EventEmitter<Product>();

    constructor(private formBuilder: FormBuilder, private productsService: ProductsService) {
    }

    ngOnChanges() {
        if (this.product === null) {
            this.editInsertText = 'Insert';
            this.product = { name: '', price: 0, image: '', detail: '' };
        } else {
            this.editInsertText = 'Edit';
        }

        this.productFormGroup = this.formBuilder.group(
            {
                id: [this.product.id],
                name: [this.product.name, Validators.required],
                price: [this.product.price, Validators.compose([Validators.required, Validators.min(1), this.isPriceValid])],
                image: [this.product.image,
                // tslint:disable-next-line: max-line-length
                Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')],
                detail: [this.product.detail]
            }, { validators: [this.isProductValid] }
        );

    }

    ngOnInit() {

    }

    isPriceValid(control: AbstractControl): ValidationErrors | null {
        const price = +control.value;
        if (price % 3 === 0) {
            return null;
        }
        return { priceNotValidDiv3: { valid: false, currentValue: price } };
    }
    async onSubmit() {
        this.product = this.productFormGroup.value;
        this.productEditingFinished.emit(this.product);
    }
    isProductValid(control: AbstractControl): ValidationErrors | null {
        const p: Product = control.value;
        if (p.name[0] === 'a' && p.price > 100) {
            return { nameStartsWithAAndPriceGt100: { notValid: true } };
        }
        return null;
    }
}
