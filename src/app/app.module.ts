import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ForumsComponent } from './forums/forums.component';

import { ForumService } from './services/forum.service';

@NgModule({
  declarations: [
    AppComponent,
    ForumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
