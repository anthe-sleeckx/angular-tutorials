import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
    selector: 'app-root',
    template: `
     <ul>
      <li>Number with "decimal" {{ num }}</li>
      <li>Date with "date" {{ birthday }}</li>
      <li>{{ username | lowercase }}</li>
      <li>Currency with "currency" {{ cost }}</li>
    </ul>
  `,
    imports: [LowerCasePipe],
})
export class Pipes {
    username = 'anThe';
    num = 103.1234;
    birthday = new Date(2023, 3, 2);
    cost = 4560.34;
}
