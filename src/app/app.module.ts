import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { E404Component } from './e404/e404.component';
import { GhostEyesDirective } from './e404/e404.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeComponent,
    HomeComponent,
    ContactComponent,
    E404Component,
    GhostEyesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
