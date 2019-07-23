import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rep'
})
export class RepPipe implements PipeTransform {

    transform(value: any, ch: string = '!', count = 1): any {
        return value + ch.repeat(count);
    }

}
