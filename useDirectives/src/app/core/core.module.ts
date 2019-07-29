import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkDirective } from './directives/mark.directive';
import { OnlyHebrewDirective } from './directives/only-hebrew.directive';



@NgModule({
    // list of pipes, directives, components
    declarations: [MarkDirective, OnlyHebrewDirective],
    // exports pipes, directives and components to other modules (that import my module)
    exports: [MarkDirective, OnlyHebrewDirective],
    // add reference to other modules.
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
