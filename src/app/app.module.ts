import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdDropdownBasic } from './components/dropdown/dropdown.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MenuComponent } from './components/menu/menu.component';
import { Textos1Component } from './components/textos1/textos1.component';
import { Slides2Component } from './components/slides2/slides2.component';
import { Canvas1Component } from './components/canvas1/canvas1.component';
import { Rating1Component } from './components/rating1/rating1.component';
import { Sllides1Component } from './components/sllides1/sllides1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Textos1Component,
  ],
  imports: [
    Rating1Component,
    BrowserModule,
    AppRoutingModule,
    NgbdDropdownBasic,
    MenuComponent,
    Sllides1Component,
    Slides2Component,
    Canvas1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
