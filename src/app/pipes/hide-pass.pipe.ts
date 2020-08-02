import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'hidePass',
})
export class HidePassPipe implements PipeTransform {
  transform(value: string, ocultar: boolean = true): string {
    return ocultar ? '*'.repeat(value.length) : value;
  }
}
