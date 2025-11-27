import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { App } from './app/01Components/component';
import { App } from './app/02ComponentComposition/component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
