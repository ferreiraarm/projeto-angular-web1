import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{FormularioComponent} from './components/formulario/formulario.component'
import { Textos1Component } from './components/textos1/textos1.component';
import { Sllides1Component } from './components/sllides1/sllides1.component';
import { SlicePipe } from '@angular/common';
import { Slides2Component } from './components/slides2/slides2.component';
import { Text2Component } from './components/text2/text2.component';
import { Text3Component } from './components/text3/text3.component';
import { Text4Component } from './components/text4/text4.component';

const routes: Routes = [
  {path: '', component: FormularioComponent},
  {path: 'texto1', component: Textos1Component},
  {path: 'slide1', component: Sllides1Component},
  {path: 'slide2', component: Slides2Component},
  {path: 'texto2', component: Text2Component},
  {path: 'texto3', component: Text3Component},
  {path: 'texto4', component: Text4Component}
]

@NgModule({  
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
