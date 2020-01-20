import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { HttpClientModule } from '@angular/common/http';
import { DevelopersService } from './developers-service/developers.service';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DevelopersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
