import { Component, OnInit, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-error-viewer',
    templateUrl: './error-viewer.component.html',
    styleUrls: ['./error-viewer.component.scss']
})
export class ErrorViewerComponent implements OnInit {

    @Input() errors: ValidationErrors;
    constructor() { }

    ngOnInit() {
    }

    getErrors() {
        return Object.keys(this.errors);
    }


}
