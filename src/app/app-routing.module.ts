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
   path: 'forum/:id',
   component: ForumDetailComponent
   }*/,
  {
    path: '',
    redirectTo: '/forums',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/forums',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
