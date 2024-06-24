import { bootstrapApplication } from '@angular/platform-browser';
import { ProjAppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(ProjAppComponent, appConfig).catch((err) =>
  console.error(err)
);
