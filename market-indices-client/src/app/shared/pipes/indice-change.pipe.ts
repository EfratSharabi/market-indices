import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indiceChange'
})
export class IndiceChangePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `${value >= 0 ? '+' : '-'}${Math.abs(value)}%`;
  }

}
