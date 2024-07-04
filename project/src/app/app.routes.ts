import { Routes } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Mercury',
    pathMatch: 'full'
  },
  {
    path: ':planetName',
    component: PlanetComponent
  }
];
