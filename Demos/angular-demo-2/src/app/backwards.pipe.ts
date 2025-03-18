import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backwards'
})
export class BackwardsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split("").reverse().join("")
  }

}
