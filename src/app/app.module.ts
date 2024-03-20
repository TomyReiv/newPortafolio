import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MenuComponent } from './shared/menu/menu.component';
import { HeadersComponent } from './components/headers/headers.component';
import { AbouteComponent } from './components/aboute/aboute.component';
import { ContactComponent } from './components/contact/contact.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { StylesModule } from './styles/styles.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeadersComponent,
    AbouteComponent,
    PorfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    StylesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
