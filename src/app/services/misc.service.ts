import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MiscService {
  getSections() {
    let i = 65;
    let arr: string[] = [];

    while (i < 91) {
      arr.push(String.fromCharCode(i));
      i++;
    }
    return arr;
  }
}
