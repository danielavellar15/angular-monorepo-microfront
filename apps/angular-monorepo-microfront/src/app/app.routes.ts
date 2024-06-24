import { Route } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full',
  },
];
