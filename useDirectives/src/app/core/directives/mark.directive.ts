import { Directive, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';
import { $ } from 'protractor';

@Directive({
    selector: '[appMark]'
})
export class MarkDirective {

    @Input() color = 'red';
    
    // <h2 [style.color]="currentColor" (mouseenter)="changeColor()" 
    // (mouseout)="changeColorBack()">TITLE</h2>
    @HostBinding('style.color') currentColor: string;

    @HostListener('mouseenter') changeColor(){
        this.currentColor = this.color;
    }

    @HostListener('mouseout') changeColorBack(){
        this.currentColor = 'black';
    }

    constructor(private elem: ElementRef, private renderer: Renderer2) {
        console.log('MarkDirective created.');
        // elem.nativeElement.style.color = 'red';

        // $(this).bind('mouseenter', function(e){
        //     $(this).css('color', this.color);
        // })
        // renderer.listen(elem.nativeElement, 'mouseenter', () => {
        //     // renderer.setStyle(elem.nativeElement, 'color', this.color);
        //     this.currentColor = this.color;
        // });

        // renderer.listen(elem.nativeElement, 'mouseout', () => {
        //     //renderer.setStyle(elem.nativeElement, 'color', 'black');
        //     this.currentColor = 'black';
        // });
    }

}
