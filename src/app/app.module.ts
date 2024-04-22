import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { FormComponent } from './form/components/form.component';
import { SucessComponent } from './success/components/sucess.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, SucessComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
