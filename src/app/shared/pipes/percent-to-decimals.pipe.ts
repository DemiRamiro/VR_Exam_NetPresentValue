import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentToDecimals' })
export class PercentToDecimals implements PipeTransform {
    transform(value: number) {
        return value / 100;
    }
}