import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'round' })
export class RoundPipe implements PipeTransform {
  constructor() {
  }
  transform(value: number, decimals: number): string {
    let res = (Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)).toString();
    let indexOfPoint = res.indexOf('.');
    if (indexOfPoint === -1) {
      res += '.';
      indexOfPoint = res.length;
    }
    for ( let i = 0; i <= decimals - (res.length - indexOfPoint); i++) {
      res += '0';
    }
    return res;
  }
}
