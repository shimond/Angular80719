import { Component, OnInit } from '@angular/core';
import { Person, Gender } from './models/person';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    people1: Array<Person>;
    selectedPersonInAppComponent: Person;
    ngOnInit() {
        this.people1 = [
            { name: 'David', email: 'david@gmail.com', gender: Gender.Male, age: 20 },
            { name: 'Naama', email: 'Naama@gmail.com', gender: Gender.Female, age: 14 },
            { name: 'Gilad', email: 'Gilad@gmail.com', gender: Gender.Male, age: 10 },
            { name: 'Roi', email: 'Roi@gmail.com', gender: Gender.Male, age: 6 }

        ];
    }


    onSelectRequested(p: Person) {
        if (p.name === 'David') {
            alert('Cannot select david...');
        } else {
            this.selectedPersonInAppComponent = p;
        }

    }




}
