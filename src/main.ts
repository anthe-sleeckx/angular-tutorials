import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

//#region App imports
//import { App } from './app/01Components/component';
//import { App } from './app/02ComponentComposition/component'
//import { App } from './app/03Conditionals/component';
//import { App } from './app/04Loops/component';
//import { App } from './app/05PropBinding/component';
//#endregion

import { App } from './app/06EventHandling/component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
