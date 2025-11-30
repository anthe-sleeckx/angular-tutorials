import { Component } from "@angular/core";
import { User } from "./user";

@Component({
    selector: `<app-root>`,
    template: `
        <app-user name="anthe"></app-user>
    `,
    imports: [User]
})

export class App {

}