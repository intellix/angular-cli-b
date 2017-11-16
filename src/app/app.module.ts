import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GayButtonComponent } from './gay-button/gay-button.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GayButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
