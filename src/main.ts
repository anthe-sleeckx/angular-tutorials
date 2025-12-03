import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

//#region App imports
//import { App } from './app/01Components/component';
//import { App } from './app/02ComponentComposition/component'
//import { App } from './app/03Conditionals/component';
//import { App } from './app/04Loops/component';
//import { App } from './app/05PropBinding/component';
//import { App } from './app/06EventHandling/component';
//import { App } from './app/07InputProp/component';
//import { App } from './app/08OutputProp/component';
import { App } from './app/09Defer/app';
//#endregion

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
