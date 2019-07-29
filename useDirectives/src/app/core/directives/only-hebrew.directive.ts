import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appOnlyHebrew]'
})
export class OnlyHebrewDirective {

    // <input [class.not-valid-lang]="isNotValid">
    @HostBinding('class.not-valid-lang') isNotValid:boolean  = false;

    @HostListener('keypress', ['$event']) onKeyPress(e: KeyboardEvent) {
        console.log(e.key);
        if(e.keyCode > 1514 || e.keyCode < 1488) {
            this.isNotValid = true;
            setTimeout(() => {
                this.isNotValid = false;
            }, 500);
            e.preventDefault();
        }
    }

    constructor() {
        console.log('appOnlyHebrew created');

    }

}
