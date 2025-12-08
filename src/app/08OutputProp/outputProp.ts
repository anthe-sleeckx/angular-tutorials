import { Component } from '@angular/core';
import { Child } from './child';

@Component({
    selector: 'app-root',
    template: `
    <app-child (addItemEvent)="addItem($event)"/>
    <p>Turtles all the way down {{ items.length }}</p>
  `,
    imports: [Child],
})
export class OutputProp {
    items = new Array();

    addItem(item: string) {
        this.items.push(item);
    }
}