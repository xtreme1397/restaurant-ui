import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (items.length && value) {
      return items.filter(it => it[field].indexOf(value) !== -1);
    } else {
      return items;
    }

  }
}