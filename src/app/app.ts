import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: `<app-root>`,
    template: `
        <nav>
            <a routerLink="/">Home</a>
            |
            <a routerLink="/components">01 Components</a>
            |
            <a routerLink="/composition">02 Component Composition</a>
            |
            <a routerLink="/conditionals">03 Conditionals</a>
            |
            <a routerLink="/loops">04 Loops</a>
            |
            <a routerLink="/prop">05 Property Binding</a>
            |
            <a routerLink="/event">06 Event Handling</a>
            |
            <a routerLink="/input">07 Input Properties</a>
            |
            <a routerLink="/output">08 Output Properties</a>
            |
            <a routerLink="/defer">09 Defer</a>
            |
            <a routerLink="/images">10 Optimized Images</a>
            |
            <a routerLink="/routing">11 Routing</a>
            |
            <a routerLink="/forms">12 Forms</a>
            |
            <a routerLink="/reactiveforms">13 Reactive Forms</a>
            |
            <a routerLink="/service">14 Injectable Service</a> 
            |
            <a routerLink="/di">15 Dependency Injection</a>
            |
            <a routerLink="/pipes">16 Pipes</a>
        </nav>
        <router-outlet />
    `,
    imports: [RouterLink, RouterOutlet],
})

export class App {
}