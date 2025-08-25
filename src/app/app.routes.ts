import { Routes } from '@angular/router';

import { DashboardResultadosComponent } from './adapters/ui/dashboard-resultados/dashboard-resultados.component';
import { LayoutComponent } from './adapters/ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        component: DashboardResultadosComponent
      }
    ]
  }
];
