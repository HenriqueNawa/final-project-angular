import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'telephone'
})

export class PhonePipe implements PipeTransform{
    transform(value: any): string{
        return '(' + value.substring(0,2) + ') ' + value.substring(2,6) + '-' + value.substring(6,10);
    }
}