import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'useDirectives';
    myColor = 'green';
    arr = [1, 2, 3, 4, 5, 6];


    constructor() {
        setInterval(() => {
            this.myColor = this.myColor === 'green' ? 'blue' : 'green';
        }, 1000);
    }
}
