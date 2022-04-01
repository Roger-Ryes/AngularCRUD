import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListComponent } from './pages/list/list.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Componente padre
    children:[
      { path: 'listado',    component: ListComponent},
      { path: 'agregar',    component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent  },
      { path: 'buscar',     component: BuscarComponent  },
      { path: ':id',        component: HeroComponent  },
      { path: '**',         redirectTo: 'listado' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forChild(routes)
   ],
   exports: [
     RouterModule
   ]
})
export class HeroesRoutingModule { }
