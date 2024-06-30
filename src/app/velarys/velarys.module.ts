import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CursoComponent } from './curso/curso.component';
import { NivelesComponent } from './niveles/niveles.component';
import { NavbarComponent } from './velarys/navbar/navbar.component';
import { NivelComponent } from './niveles/nivel/nivel.component';
import { Nivel1Component } from './niveles/nivel1/nivel1.component';
import { Nivel2Component } from './niveles/nivel2/nivel2.component';
import { Nivel3Component } from './niveles/nivel3/nivel3.component';



@NgModule({
  declarations: [
    InicioComponent,
    CursoComponent,
    NivelesComponent,
    NavbarComponent,
    NivelComponent,
    Nivel1Component,
    Nivel2Component,
    Nivel3Component
  ],
  imports: [
    CommonModule
  ]
})
export class VelarysModule { }
