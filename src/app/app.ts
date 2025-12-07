import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: `<app-root>`,
    template: `
        <nav>
            <a routerLink="/">Home</a>
            |
            <a routerLink="/images">10 Optimized Images</a>
            |
            <a routerLink="/user">11 Routing</a>
            |
            <a routerLink="/forms">12 Forms</a>
        </nav>
        <router-outlet />
    `,
    imports: [RouterLink, RouterOutlet],
})

export class App { }