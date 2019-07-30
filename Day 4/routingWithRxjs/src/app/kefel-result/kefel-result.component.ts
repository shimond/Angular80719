import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, distinct, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-kefel-result',
    templateUrl: './kefel-result.component.html',
    styleUrls: ['./kefel-result.component.scss']
})
export class KefelResultComponent implements OnInit {
    result$: Observable<number>;
    message = 'Result';
    color = 'black';

    constructor(private activedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        // const x = +this.activedRoute.snapshot.params.xParam;
        // const y = +this.activedRoute.snapshot.params.yParam;
        // if (this.activedRoute.snapshot.queryParams.message) {
        //     this.message = this.activedRoute.snapshot.queryParams.message;
        // }
        // if (this.activedRoute.snapshot.fragment) {
        //     this.color = this.activedRoute.snapshot.fragment;
        // }
        // // this.activedRoute.data
        // this.result = x * y;


        this.result$ = this.activedRoute.params
            .pipe(
                map((p: any) => p.xParam * p.yParam),
                distinctUntilChanged());
        // .subscribe(res => {
        //     this.result = res;
        // });

    }

}
