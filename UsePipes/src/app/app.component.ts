import { Component } from '@angular/core';
import { Person } from './models/person';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'usePipes';
    birthdate = new Date();
    grade = 0.78;
    myCode = 'EUR';
    person: Person = { name: 'Tal', age: 10, email: 'tal@gmail.com' };

    doIt() {
        alert(123);
    }
}
