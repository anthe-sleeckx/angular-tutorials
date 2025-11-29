import { Component } from "@angular/core";

@Component({
    selector: `<app-root>`,
    template: `
        <section (mouseover)="showSecretMessage()">
            This is a secret message, hover to reveal:
            {{ message }}
        </section>
    `
})

export class App {
    message = '';
    showSecretMessage() {
        this.message = 'Way to go';
    }
}