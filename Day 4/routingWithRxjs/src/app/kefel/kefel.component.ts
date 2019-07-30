import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-kefel',
    templateUrl: './kefel.component.html',
    styleUrls: ['./kefel.component.scss']
})
export class KefelComponent implements OnInit {

    arr: Array<{ x: number, y: number }> = [];
    constructor(private router: Router) { }

    ngOnInit() {
        for (let index1 = 1; index1 <= 10; index1++) {
            for (let index2 = 1; index2 <= 10; index2++) {
                this.arr.push({ x: index1, y: index2 });
            }

        }
    }
    onItemClick(x: number, y: number) {
        this.router.navigate(['/result', x, y]);
        // this.router.navigateByUrl('/result/' + x + '/' + y);
    }

}
