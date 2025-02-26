import { Routes } from '@angular/router';
import {ItemsComponent} from './items/items.component';

export const routes: Routes = [{
  path: '',
  loadChildren: () => import('./items/items.module').then(m => m.ItemsModule),
}];
