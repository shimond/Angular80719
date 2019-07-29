import { Component, OnInit } from '@angular/core';
import { CouterService } from '../services/couter.service';
import { filter, map, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-count-viewer',
    templateUrl: './count-viewer.component.html',
    styleUrls: ['./count-viewer.component.scss']
})
export class CountViewerComponent implements OnInit {

    count = 0;
    constructor(private counterService: CouterService) { }

    ngOnInit() {
        this.counterService.counterChanged$
            .pipe(
                filter(x => x % 2 === 0),
                map(x => x * 3),
                debounceTime(1000)
            )
            .subscribe(value => this.count = value, e => { alert('Error' + e); });
    }

}
