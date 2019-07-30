import { Component, OnInit } from '@angular/core';
import { CouterService } from '../services/couter.service';

@Component({
    selector: 'app-count-editor',
    templateUrl: './count-editor.component.html',
    styleUrls: ['./count-editor.component.scss']
})
export class CountEditorComponent implements OnInit {

    count: number;
    constructor(private counterService: CouterService) { }

    ngOnInit() {
        this.counterService.counterChanged$.subscribe(value => this.count = value);
    }

    minus() {
        this.counterService.decrement();
    }
    plus() {
        this.counterService.increment();
    }

}
