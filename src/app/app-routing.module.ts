import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AreasComponent } from "./vistas/areas/areas.component";
import { CarrerasComponent } from "./vistas/carreras/carreras.component";
import { CursosComponent } from "./vistas/cursos/cursos.component";
import { HomeComponent } from "./vistas/home/home.component";

const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'areas', component: AreasComponent },
    { path: 'carreras', component: CarrerasComponent },
    { path: 'cursos', component: CursosComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [
    RouterModule.forRoot( routes )
 ],
 exports: [
     RouterModule
 ]

})

export class AppRoutingModule {}