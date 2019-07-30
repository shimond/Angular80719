import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { filter, debounce, debounceTime } from 'rxjs/operators';
@Component({
    selector: 'app-edit-add-product',
    templateUrl: './edit-add-product.component.html',
    styleUrls: ['./edit-add-product.component.scss']
})
export class EditAddProductComponent implements OnInit {

    productFormGroup: FormGroup;
    product: Product = {
        id: 1, name: 'Bamba',
        detail: 'Wow Osem product',
        price: 12,
        image: 'https://m.pricez.co.il/ProductPictures/200x/7290000068787.jpg'
    };

    constructor(private formBuilder: FormBuilder) {
    }

    isProductValid(control: AbstractControl): ValidationErrors | null {
        const p: Product = control.value;
        if (p.name[0] === 'a' && p.price > 100) {
            return { nameStartsWithAAndPriceGt100: { notValid: true } };
        }
        return null;
    }
    ngOnInit() {
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

        this.productFormGroup.valueChanges
            .pipe(filter(x => this.productFormGroup.valid), debounceTime(1000))
            .subscribe(x => {
                const dirties = [];
                for (const control in this.productFormGroup.controls) {
                    if (this.productFormGroup.controls[control].dirty) {
                        dirties.push(control);
                    }
                }
                console.log(dirties);
                this.onSubmit();
            });

    }

    isPriceValid(control: AbstractControl): ValidationErrors | null {
        const price = +control.value;
        if (price % 3 === 0) {
            return null;
        }
        return { priceNotValidDiv3: { valid: false, currentValue: price } };
    }
    onSubmit() {
        this.product = this.productFormGroup.value;
        this.productFormGroup.reset(this.product, { emitEvent: false });

    }

}
