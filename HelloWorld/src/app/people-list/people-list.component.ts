import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person, Gender } from '../models/person';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    @Input() people: Array<Person>;
    @Input() selectedPersonInPeopleListComponent: Person;
    @Output() selectPersonRequested = new EventEmitter<Person>();


    constructor() {

    }

    ngOnInit() {

    }

    onPersonClick(person: Person) {
        this.selectPersonRequested.emit(person);
    }

}
