import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CouterService {

    private count = 0;
    private counterChanged = new BehaviorSubject<number>(this.count);

    get counterChanged$(): Observable<number> {
        return this.counterChanged.asObservable();
    }

    constructor() {
    }


    increment() {
        this.count++;
        this.counterChanged.next(this.count);

    }
    decrement() {
        this.count--;
        this.counterChanged.next(this.count);
    }
}
