import { Component, inject } from "@angular/core";
import { CarService } from "./car.service";

@Component({
    selector: `app-services`,
    template: `
    <p> {{ carService.getCars()}} </p>
    `,
})

export class InjService {
    carService = inject(CarService);
}