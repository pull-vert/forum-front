import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { ForumsComponent } from './forums/forums.component';
import { LoginComponent } from './login/login.component';

import { ForumService } from './services/forum.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ForumsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    ForumService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
