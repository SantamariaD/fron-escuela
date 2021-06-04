import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AreasComponent } from './areas/areas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [
    HomeComponent,
    AreasComponent,
    CarrerasComponent,
    CursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VistasModule { }
