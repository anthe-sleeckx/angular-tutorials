import { Component } from "@angular/core";

@Component({
    selector: `<app-root>`,
    template: `
        @for (user of users; track user.id) {
            <p>{{user.name}}</p>
        }
    `
})


export class Loops {
    users = [
        { id: 0, name: 'Anthe' },
        { id: 1, name: 'Jef' },
        { id: 2, name: 'Sofie' },
        { id: 3, name: 'Thomas' },
        { id: 4, name: 'Tim' },
        { id: 5, name: 'PJ' }
    ];
}