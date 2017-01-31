import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumsComponent } from './forums/forums.component';

const routes: Routes = [
  {
    path: 'forums',
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
