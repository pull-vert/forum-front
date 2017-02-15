import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumsComponent } from './forums/forums.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'forums',
    component: ForumsComponent
  },
   {
   path: 'login',
   component: LoginComponent
   }/*,
   {
   path: 'forum/:id',
   component: ForumDetailComponent
   },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent }*/,
  /*{
    path: '',
    redirectTo: '/forums',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/forums',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
