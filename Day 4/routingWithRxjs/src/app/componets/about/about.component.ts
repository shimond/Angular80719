import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

    constructor() {
        console.log('AboutComponent created');
    }
    ngOnDestroy() {
        console.log('AboutComponent dead');
    }

    ngOnInit() {
    }

}
