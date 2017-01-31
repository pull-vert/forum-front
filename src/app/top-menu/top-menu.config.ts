import { Routes } from '@angular/router';

import { ForumsComponent } from '../forums/forums.component';

export const routerConfig: Routes = [
  {
    path: 'forum',
    component: ForumsComponent
  }/*,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  }*/,
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
